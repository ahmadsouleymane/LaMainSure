import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import {
  validateCity,
  validateCountry,
  validateTrade,
  validateWhatsApp,
} from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const FOUNDER_CAP = 50;

/** Compteur in-memory pour le mode démo (réinitialisé à chaque redémarrage serveur). */
let demoCounter = 0;

export async function GET() {
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({
      count: demoCounter,
      cap: FOUNDER_CAP,
      demo: true,
    });
  }

  const { count, error } = await supabase
    .from("pros_waitlist")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("[waitlist-pro GET] Supabase error:", error);
    return NextResponse.json({ count: 0, cap: FOUNDER_CAP });
  }

  return NextResponse.json({ count: count ?? 0, cap: FOUNDER_CAP });
}

export async function POST(request: Request) {
  let body: {
    whatsapp?: unknown;
    trade?: unknown;
    country?: unknown;
    city?: unknown;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const whatsapp = validateWhatsApp(typeof body.whatsapp === "string" ? body.whatsapp : "");
  const trade = validateTrade(typeof body.trade === "string" ? body.trade : "");
  const country = validateCountry(typeof body.country === "string" ? body.country : "");
  const city = validateCity(typeof body.city === "string" ? body.city : "");

  if (!whatsapp) {
    return NextResponse.json(
      { error: "Numéro WhatsApp invalide. Format attendu : +225 07 XX XX XX XX" },
      { status: 400 }
    );
  }
  if (!trade) {
    return NextResponse.json(
      { error: "Choisis un métier dans la liste." },
      { status: 400 }
    );
  }
  if (!country) {
    return NextResponse.json(
      { error: "Choisis un pays dans la liste." },
      { status: 400 }
    );
  }
  if (!city) {
    return NextResponse.json(
      { error: "Indique ta ville." },
      { status: 400 }
    );
  }

  const supabase = getSupabaseAdmin();

  if (!supabase) {
    demoCounter += 1;
    console.warn("[waitlist-pro] Supabase non configuré. Inscription pro (démo) :", {
      whatsapp,
      trade,
      country,
      city,
      position: demoCounter,
    });
    return NextResponse.json({
      success: true,
      demo: true,
      position: demoCounter,
      cap: FOUNDER_CAP,
    });
  }

  const { data, error } = await supabase
    .from("pros_waitlist")
    .insert({ whatsapp, trade, country, city, source: "landing" })
    .select("founder_n")
    .single();

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Ce numéro WhatsApp est déjà inscrit." },
        { status: 409 }
      );
    }
    console.error("[waitlist-pro] Supabase insert error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue, réessaie dans quelques instants." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    position: data?.founder_n ?? 0,
    cap: FOUNDER_CAP,
  });
}
