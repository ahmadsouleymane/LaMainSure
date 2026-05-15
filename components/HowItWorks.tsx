const STEPS = [
  {
    n: "01",
    title: "Cherche le pro qu'il te faut",
    description:
      "Filtre par métier et par ville. Découvre les pros disponibles près de chez toi, ou partout en CI pour les services à distance.",
  },
  {
    n: "02",
    title: "Compare les profils",
    description:
      "Notes, tarifs, missions réalisées, dispos, avis vérifiés. Tu choisis celui qui te convient — pas un algorithme.",
  },
  {
    n: "03",
    title: "Contacte-le directement",
    description:
      "Écris-lui via la messagerie, reçois un devis, organise le rendez-vous. Tout reste simple et traçable.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brand-primary">Comment ça marche</p>
          <h2 className="mt-4 text-balance font-display text-4xl leading-tight text-brand-dark sm:text-5xl">
            Trois étapes, c'est tout.
          </h2>
          <p className="mx-auto mt-5 text-balance text-base text-brand-muted sm:text-lg">
            Tu gardes la main du début à la fin. C'est toi qui cherches, toi qui
            choisis, toi qui valides.
          </p>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-12 hidden h-px bg-brand-dark/8 md:block"
          />

          {STEPS.map((step) => (
            <article
              key={step.n}
              className="card relative rounded-3xl p-7"
            >
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-dark font-mono-bold text-base text-brand-primary">
                {step.n}
              </div>
              <h3 className="mt-6 font-display text-xl text-brand-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
