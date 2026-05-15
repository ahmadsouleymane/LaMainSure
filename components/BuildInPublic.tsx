const TIKTOK_URL = "https://www.tiktok.com/@souleymane_ci";

const MILESTONES = [
  { date: "Mars 2026", label: "Idée validée", done: true },
  { date: "Avril 2026", label: "Design system", done: true },
  { date: "Mai 2026", label: "MVP en dev", done: true },
  { date: "Juin 2026", label: "Lancement public", done: false },
];

export default function BuildInPublic() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl bg-brand-dark text-white">
          <div className="grid gap-12 p-8 sm:p-12 md:grid-cols-2 md:gap-16 md:p-16">
            {/* Colonne gauche : pitch */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                  Build in public
                </span>
              </div>

              <h2 className="mt-6 text-balance font-display text-4xl leading-tight sm:text-5xl">
                Suis l'aventure
                <br />
                <span className="text-brand-primary">de A à Z.</span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
                Je documente la construction de La Main Sûre en direct sur
                TikTok. Les coulisses, les galères, les wins, les décisions
                produit — tout est partagé{" "}
                <span className="text-white">sans filtre</span>.
              </p>

              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-brand-dark hover:bg-brand-primary hover:text-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
                </svg>
                <span>Suivre sur TikTok</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>

              <p className="mt-4 font-mono text-xs text-white/45">
                @souleymane_ci · Nouvelles vidéos chaque semaine
              </p>
            </div>

            {/* Colonne droite : timeline */}
            <div>
              <p className="eyebrow text-white/60">Roadmap</p>
              <h3 className="mt-2 font-display text-2xl">Où on en est.</h3>

              <ol className="relative mt-8 space-y-5">
                <div
                  aria-hidden="true"
                  className="absolute left-[11px] top-3 bottom-3 w-px bg-white/15"
                />
                {MILESTONES.map((m) => (
                  <li key={m.label} className="relative flex items-start gap-4">
                    <div
                      className={`relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-4 ring-brand-dark ${
                        m.done ? "bg-brand-primary" : "bg-white/10"
                      }`}
                    >
                      {m.done ? (
                        <svg
                          className="h-3 w-3 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      ) : (
                        <span className="h-2 w-2 animate-pulse rounded-full bg-brand-primaryLight" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-mono text-[10px] font-bold uppercase tracking-[0.18em] ${
                          m.done ? "text-brand-primaryLight" : "text-white/40"
                        }`}
                      >
                        {m.date}
                      </p>
                      <p
                        className={`mt-0.5 font-display text-base ${
                          m.done ? "text-white" : "text-white/60"
                        }`}
                      >
                        {m.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
