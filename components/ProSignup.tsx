"use client";

import { useEffect, useState, type FormEvent } from "react";
import { COUNTRIES, DEFAULT_COUNTRY_CODE, TRADES } from "@/lib/validation";
import PhoneInput from "./PhoneInput";

type Status = "idle" | "loading" | "success" | "error";

interface CountResponse {
  count: number;
  cap: number;
  demo?: boolean;
}

interface SuccessResponse {
  position: number;
  cap: number;
}

export default function ProSignup() {
  const [countryCode, setCountryCode] = useState<string>(DEFAULT_COUNTRY_CODE);
  const [phone, setPhone] = useState("");
  const [trade, setTrade] = useState("");
  const [country, setCountry] = useState("Côte d'Ivoire");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState<number | null>(null);
  const [counter, setCounter] = useState<CountResponse>({ count: 0, cap: 50 });

  useEffect(() => {
    let cancelled = false;
    fetch("/api/waitlist-pro")
      .then((r) => r.json())
      .then((data: CountResponse) => {
        if (!cancelled) setCounter(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    const whatsapp = `${countryCode} ${phone.trim()}`;

    try {
      const res = await fetch("/api/waitlist-pro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ whatsapp, trade, country, city }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Une erreur est survenue.");
        return;
      }

      const success = data as SuccessResponse;
      setPosition(success.position);
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Connexion impossible. Vérifie ta connexion et réessaie.");
    }
  }

  const remaining = Math.max(counter.cap - counter.count, 0);
  const isSoldOut = counter.count >= counter.cap;
  const progressPct = Math.min((counter.count / counter.cap) * 100, 100);

  return (
    <section
      id="pros"
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl bg-brand-dark text-white">
          <div className="grid gap-12 p-8 sm:p-12 md:grid-cols-5 md:gap-14 md:p-16">
            {/* Colonne gauche : pitch + avantages */}
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                  Recrutement pros · ouvert
                </span>
              </div>

              <h2 className="mt-6 text-balance font-display text-4xl leading-tight sm:text-5xl">
                Tu es un pro&nbsp;?
                <br />
                <span className="text-brand-primary">Deviens Fondateur.</span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
                Les <span className="font-mono-bold text-white">50 premiers pros</span>{" "}
                qui rejoignent La Main Sûre reçoivent un statut exclusif —{" "}
                <span className="text-white">qu'ils gardent à vie</span>.
              </p>

              {/* Avantages */}
              <ul className="mt-8 space-y-3">
                {[
                  {
                    icon: "🏆",
                    title: "Badge Pro Fondateur",
                    desc: "Permanent, jamais re-attribué.",
                  },
                  {
                    icon: "🚀",
                    title: "Visibilité prioritaire à vie",
                    desc: "Apparition en haut de ta catégorie en rotation.",
                  },
                  {
                    icon: "✨",
                    title: "12 mois de Premium offerts",
                    desc: "Activé dès le lancement du plan payant.",
                  },
                  {
                    icon: "📣",
                    title: "Mention sur TikTok",
                    desc: "Ton métier mis en avant à la vidéo de lancement.",
                  },
                ].map((a) => (
                  <li key={a.title} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-base">
                      {a.icon}
                    </span>
                    <div>
                      <p className="font-display text-sm text-white">{a.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-white/55">
                        {a.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Compteur */}
              <div className="mt-8 rounded-2xl border border-white/10 p-4">
                <div className="flex items-baseline justify-between">
                  <p className="eyebrow text-white/60">Places restantes</p>
                  <p className="font-mono-bold text-2xl text-white">
                    {isSoldOut ? "0" : remaining}
                    <span className="font-mono text-sm font-normal text-white/40">
                      {" "}
                      / {counter.cap}
                    </span>
                  </p>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-brand-primary transition-all duration-700"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
                <p className="mt-2 font-mono text-[10px] text-white/40">
                  {counter.count} pros déjà inscrits
                </p>
              </div>
            </div>

            {/* Colonne droite : formulaire */}
            <div className="md:col-span-3">
              {status === "success" ? (
                <div className="card card-elevated rounded-3xl p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-lg">
                      🏆
                    </div>
                    <div className="flex-1">
                      <p className="eyebrow text-brand-primary">
                        Bienvenue parmi les fondateurs
                      </p>
                      <h3 className="mt-1.5 font-display text-2xl text-brand-dark">
                        Tu es Pro Fondateur #{position}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                        Tu recevras un message WhatsApp sous{" "}
                        <span className="font-mono-bold text-brand-dark">48h</span>{" "}
                        pour confirmer ton inscription.
                      </p>

                      <div className="mt-5 rounded-2xl border border-brand-dark/8 bg-brand-bg p-4">
                        <p className="eyebrow text-brand-dark">
                          Aide à remplir les places
                        </p>
                        <p className="mt-2 text-sm text-brand-dark/80">
                          Partage à un confrère pro. Plus on remplit vite, plus
                          on lance vite.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            if (typeof window !== "undefined") {
                              const text = encodeURIComponent(
                                `Je rejoins La Main Sûre comme Pro Fondateur. Les 50 premiers ont un statut à vie : ${window.location.origin}/#pros`
                              );
                              window.open(`https://wa.me/?text=${text}`, "_blank");
                            }
                          }}
                          className="mt-3 inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white hover:bg-brand-primaryDark"
                        >
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9s-.5-.2-.7.2c-.2.3-.8.9-1 1.1-.2.2-.4.2-.7 0-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.6-.9-2.2c-.2-.6-.5-.5-.7-.5h-.5c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.2 0 1.3.9 2.6 1.1 2.8.1.2 1.9 2.9 4.6 4.1 1.7.7 2.3.8 3.1.6.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
                          </svg>
                          Partager sur WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : isSoldOut ? (
                <div className="card flex h-full items-center justify-center rounded-3xl p-10 text-center">
                  <div>
                    <p className="eyebrow text-brand-primary">Sold-out</p>
                    <h3 className="mt-2 font-display text-2xl text-brand-dark">
                      Les 50 places fondateur sont prises.
                    </h3>
                    <p className="mt-3 text-sm text-brand-muted">
                      Inscris-toi quand même sur la liste d'attente — tu auras
                      un accès anticipé au plan Pro.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="card card-elevated rounded-3xl p-6 sm:p-8"
                  noValidate
                >
                  <p className="eyebrow text-brand-primary">Inscription pro</p>
                  <h3 className="mt-1.5 font-display text-2xl text-brand-dark">
                    Réserve ta place
                  </h3>
                  <p className="mt-1.5 text-sm text-brand-muted">
                    WhatsApp pour qu'on te recontacte sous 48h.
                  </p>

                  <div className="mt-6 space-y-3.5">
                    {/* WhatsApp */}
                    <div>
                      <label
                        htmlFor="pro-whatsapp"
                        className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-dark/70"
                      >
                        Numéro WhatsApp
                      </label>
                      <div className="mt-1.5">
                        <PhoneInput
                          id="pro-whatsapp"
                          countryCode={countryCode}
                          setCountryCode={setCountryCode}
                          phone={phone}
                          setPhone={setPhone}
                          disabled={status === "loading"}
                        />
                      </div>
                    </div>

                    {/* Métier */}
                    <div>
                      <label
                        htmlFor="pro-trade"
                        className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-dark/70"
                      >
                        Corps de métier
                      </label>
                      <select
                        id="pro-trade"
                        required
                        value={trade}
                        onChange={(e) => setTrade(e.target.value)}
                        disabled={status === "loading"}
                        className="mt-1.5 w-full appearance-none rounded-2xl border border-brand-dark/10 bg-white bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%23040f0f%22%20stroke-width=%222%22%20stroke-linecap=%22round%22><path%20d=%22m6%209%206%206%206-6%22/></svg>')] bg-[length:14px] bg-[right_1rem_center] bg-no-repeat px-4 py-3 pr-10 text-sm text-brand-dark focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 disabled:opacity-50"
                      >
                        <option value="" disabled>
                          Choisis ton métier
                        </option>
                        {TRADES.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Pays + Ville */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="pro-country"
                          className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-dark/70"
                        >
                          Pays
                        </label>
                        <select
                          id="pro-country"
                          required
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          disabled={status === "loading"}
                          className="mt-1.5 w-full appearance-none rounded-2xl border border-brand-dark/10 bg-white bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%23040f0f%22%20stroke-width=%222%22%20stroke-linecap=%22round%22><path%20d=%22m6%209%206%206%206-6%22/></svg>')] bg-[length:14px] bg-[right_0.75rem_center] bg-no-repeat px-4 py-3 pr-8 text-sm text-brand-dark focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 disabled:opacity-50"
                        >
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="pro-city"
                          className="block font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-dark/70"
                        >
                          Ville
                        </label>
                        <input
                          id="pro-city"
                          type="text"
                          required
                          autoComplete="address-level2"
                          placeholder="Abidjan, Yopougon, Cocody…"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          disabled={status === "loading"}
                          className="mt-1.5 w-full rounded-2xl border border-brand-dark/10 bg-white px-4 py-3 text-sm text-brand-dark placeholder:text-brand-muted/60 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 disabled:opacity-50"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-primary px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-brand-primaryDark disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
                          <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Inscription…
                      </>
                    ) : (
                      <>Réserver ma place</>
                    )}
                  </button>

                  {status === "error" && (
                    <p
                      role="alert"
                      className="mt-3 rounded-xl bg-red-50 px-4 py-2.5 text-sm text-red-700"
                    >
                      {message}
                    </p>
                  )}

                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
