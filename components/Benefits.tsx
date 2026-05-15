const BENEFITS = [
  {
    n: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Professionnels vérifiés",
    description:
      "Chaque prestataire est validé avant d'apparaître sur la plateforme. Identité, références, qualifications : tout est contrôlé.",
  },
  {
    n: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 2 3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z" />
      </svg>
    ),
    title: "Avis transparents",
    description:
      "Les notes et commentaires sont certifiés par de vrais clients. Pas de faux avis, pas de manipulations.",
  },
  {
    n: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
    title: "Contact direct",
    description:
      "Échangez en temps réel avec le professionnel avant de confirmer. Devis, disponibilités, questions : tout se passe dans l'app.",
  },
];

export default function Benefits() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="eyebrow text-brand-primary">Pourquoi La Main Sûre</p>
          <h2 className="mt-4 text-balance font-display text-4xl leading-tight text-brand-dark sm:text-5xl">
            La confiance, sans compromis.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-brand-muted sm:text-lg">
            On a construit La Main Sûre pour résoudre un problème simple :
            trouver un professionnel fiable ne devrait jamais être un pari.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {BENEFITS.map((b) => (
            <article
              key={b.title}
              className="card rounded-3xl p-7 transition-shadow hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-dark text-brand-primary">
                  <span className="block h-5 w-5">{b.icon}</span>
                </div>
                <span className="font-mono-bold text-2xl text-brand-dark/15">
                  {b.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl text-brand-dark">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {b.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
