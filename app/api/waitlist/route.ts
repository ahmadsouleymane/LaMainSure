import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { validateFirstName, validateWhatsApp } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: { firstName?: unknown; contact?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Requête invalide." },
      { status: 400 }
    );
  }

  const firstNameRaw = typeof body.firstName === "string" ? body.firstName : "";
  const contactRaw = typeof body.contact === "string" ? body.contact : "";

  const firstName = validateFirstName(firstNameRaw);
  const whatsapp = validateWhatsApp(contactRaw);

  if (!firstName) {
    return NextResponse.json(
      { error: "Merci d'indiquer un prénom valide." },
      { status: 400 }
    );
  }
  if (!whatsapp) {
    return NextResponse.json(
      { error: "Numéro WhatsApp invalide. Format attendu : +225 07 XX XX XX XX" },
      { status: 400 }
    );
  }

  const supabase = getSupabaseAdmin();

  // Mode démo : pas de Supabase configuré → on accepte mais on logge
  if (!supabase) {
    console.warn(
      "[waitlist] Supabase non configuré. Inscription reçue (non persistée) :",
      { firstName, whatsapp }
    );
    return NextResponse.json({
      success: true,
      demo: true,
      firstName,
    });
  }

  const { error } = await supabase.from("waitlist").insert({
    first_name: firstName,
    contact_type: "whatsapp",
    contact_value: whatsapp,
    source: "landing",
  });

  if (error) {
    // Code Postgres pour violation unique
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "Ce numéro est déjà inscrit." },
        { status: 409 }
      );
    }
    console.error("[waitlist] Supabase insert error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue, réessaie dans quelques instants." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, firstName });
}
