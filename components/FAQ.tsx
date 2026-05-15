const ITEMS: Array<{ q: string; a: React.ReactNode }> = [
  {
    q: "Quand l'application sera-t-elle disponible ?",
    a: (
      <>
        Le <span className="font-mono-bold text-brand-dark">11 juin 2026</span>{" "}
        pour tout le monde. Les{" "}
        <span className="font-mono-bold text-brand-dark">200 premiers</span>{" "}
        inscrits à la liste d'attente reçoivent l'app{" "}
        <span className="font-mono-bold text-brand-dark">
          1 semaine en avance
        </span>{" "}
        + 1 mois Premium offert.
      </>
    ),
  },
  {
    q: "C'est gratuit pour moi en tant que client ?",
    a: (
      <>
        <span className="font-mono-bold text-brand-dark">Oui, à vie.</span>{" "}
        Tu ne paies jamais La Main Sûre. Tu paies le pro directement pour sa
        prestation, en cash ou mobile money — comme aujourd'hui, sauf qu'on te
        garantit un pro vérifié et bien noté.
      </>
    ),
  },
  {
    q: "Comment vérifiez-vous les professionnels ?",
    a: (
      <>
        Chaque pro passe une vérification avant d'apparaître :{" "}
        <span className="text-brand-dark">pièce d'identité</span>, photos de
        chantiers ou réalisations, appel téléphonique avec notre équipe.
        Personne n'est listé sans avoir été contrôlé personnellement.
      </>
    ),
  },
  {
    q: "Vos avis sont-ils fiables ?",
    a: (
      <>
        Seuls les{" "}
        <span className="text-brand-dark">
          clients ayant échangé avec un pro dans l'app
        </span>{" "}
        peuvent laisser un avis. Les notes sont visibles publiquement, et tout
        avis litigieux est revu manuellement. Pas de faux avis possibles.
      </>
    ),
  },
  {
    q: "Vous opérez dans quelles villes ?",
    a: (
      <>
        Lancement initial à{" "}
        <span className="font-mono-bold text-brand-dark">Abidjan</span> et
        environs (Cocody, Yopougon, Treichville, Riviera, Marcory…). Extension
        progressive aux autres villes de Côte d'Ivoire dans les mois qui
        suivent, puis Sénégal, Cameroun et plus.
      </>
    ),
  },
  {
    q: "Je suis un pro. Comment je rejoins l'app ?",
    a: (
      <>
        Va sur la section <a href="#pros" className="link-underline font-mono-bold text-brand-primary">Pros Fondateurs</a> de
        cette page. WhatsApp, métier et ville suffisent pour t'inscrire. On te
        recontacte sous 48h pour valider ton dossier et activer ta fiche.
      </>
    ),
  },
  {
    q: "Mes données personnelles sont-elles en sécurité ?",
    a: (
      <>
        Oui. Tes informations sont stockées chiffrées et ne sont jamais
        partagées ni vendues. Tu peux demander la suppression de ton compte à
        tout moment.
      </>
    ),
  },
  {
    q: "Comment vous contacter directement ?",
    a: (
      <>
        Par email à{" "}
        <a
          href="mailto:contact@lamainsure.com"
          className="link-underline font-mono-bold text-brand-primary"
        >
          contact@lamainsure.com
        </a>{" "}
        ou via le compte TikTok{" "}
        <a
          href="https://www.tiktok.com/@souleymane_ci"
          target="_blank"
          rel="noreferrer noopener"
          className="link-underline font-mono-bold text-brand-primary"
        >
          @souleymane_ci
        </a>
        . Réponse sous 24h max.
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          {/* Colonne gauche : titre + contact rassurant */}
          <div className="md:sticky md:top-24 md:self-start">
            <p className="eyebrow text-brand-primary">Questions fréquentes</p>
            <h2 className="mt-4 text-balance font-display text-4xl leading-tight text-brand-dark sm:text-5xl">
              Tu te demandes
              <br />
              peut-être…
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-muted">
              Les réponses aux 8 questions qu'on nous pose le plus souvent.
              Une autre question ?
            </p>
            <a
              href="mailto:contact@lamainsure.com"
              className="mt-5 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-brand-primary"
            >
              <span className="link-underline">Écris-nous directement</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Colonne droite : liste accordéon */}
          <div className="md:col-span-2">
            <div className="card overflow-hidden rounded-3xl">
              {ITEMS.map((item, idx) => (
                <details
                  key={item.q}
                  className={`group ${
                    idx > 0 ? "border-t border-brand-dark/8" : ""
                  }`}
                  open={idx === 0}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 transition-colors hover:bg-brand-bg/50 sm:p-6">
                    <h3 className="font-display text-base text-brand-dark sm:text-lg">
                      {item.q}
                    </h3>
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-dark/10 bg-white text-brand-dark transition-transform group-open:rotate-45">
                      <svg
                        className="h-3 w-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-6 sm:px-6">
                    <p className="max-w-prose text-sm leading-relaxed text-brand-muted sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
