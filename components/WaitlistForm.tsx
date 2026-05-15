"use client";

import { useState, type FormEvent } from "react";
import { DEFAULT_COUNTRY_CODE } from "@/lib/validation";
import PhoneInput from "./PhoneInput";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [firstName, setFirstName] = useState("");
  const [countryCode, setCountryCode] = useState<string>(DEFAULT_COUNTRY_CODE);
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    const contact = `${countryCode} ${phone.trim()}`;

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, contact }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Une erreur est survenue.");
        return;
      }

      setStatus("success");
      setMessage(data.firstName ?? firstName);
    } catch {
      setStatus("error");
      setMessage("Connexion impossible. Vérifie ta connexion et réessaie.");
    }
  }

  if (status === "success") {
    const referralLink =
      typeof window !== "undefined"
        ? `${window.location.origin}?ref=${encodeURIComponent(message)}`
        : "https://lamainsure.com";

    return (
      <div className="card card-elevated rounded-3xl p-6 text-left sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-lg">
            <span aria-hidden="true">✓</span>
          </div>
          <div className="flex-1">
            <p className="eyebrow text-brand-primary">Inscription confirmée</p>
            <h3 className="mt-1.5 font-display text-xl text-brand-dark">
              Merci {message}.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              Tu recevras l'application 1 semaine avant tout le monde.
            </p>

            <div className="mt-5 rounded-2xl border border-brand-dark/8 bg-brand-bg p-4">
              <p className="eyebrow text-brand-dark">Lien de parrainage</p>
              <div className="mt-2.5 flex items-center gap-2">
                <input
                  readOnly
                  value={referralLink}
                  className="flex-1 truncate rounded-xl border border-brand-dark/10 bg-white px-3 py-2 font-mono text-xs text-brand-dark"
                />
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(referralLink)}
                  className="rounded-xl bg-brand-dark px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white hover:bg-brand-primary"
                >
                  Copier
                </button>
              </div>
              <p className="mt-2 text-xs text-brand-muted">
                Partage à un ami pour grimper dans la file d'attente.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card card-elevated rounded-3xl p-5 text-left sm:p-6"
      noValidate
    >
      <div className="flex flex-col gap-3">
        <input
          type="text"
          required
          autoComplete="given-name"
          placeholder="Ton prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={status === "loading"}
          className="w-full rounded-2xl border border-brand-dark/10 bg-white px-4 py-3 text-base text-brand-dark placeholder:text-brand-muted/70 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 disabled:opacity-50"
        />
        <PhoneInput
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          phone={phone}
          setPhone={setPhone}
          disabled={status === "loading"}
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-primary px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-brand-primaryDark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <svg
              className="h-5 w-5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeOpacity="0.25"
                strokeWidth="3"
              />
              <path
                d="M22 12a10 10 0 0 1-10 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Inscription…
          </>
        ) : (
          <>Rejoindre la liste</>
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

      <p className="mt-4 text-center text-xs text-brand-muted">
        Les <span className="font-mono-bold text-brand-dark">200 premiers</span>{" "}
        inscrits reçoivent l'app 1 semaine avant tout le monde.
      </p>

      <div className="mt-4 flex items-center justify-center gap-2 border-t border-brand-dark/8 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-muted">
          Tu es un pro&nbsp;?
        </span>
        <a
          href="#pros"
          className="link-underline font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary"
        >
          Deviens Fondateur →
        </a>
      </div>
    </form>
  );
}
