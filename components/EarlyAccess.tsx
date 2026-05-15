export default function EarlyAccess() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl bg-brand-dark p-8 text-white sm:p-12 md:p-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
              Offre lancement
            </span>
          </div>

          <h2 className="mt-6 text-balance font-display text-4xl leading-tight sm:text-5xl">
            Pourquoi t'inscrire
            <br />
            <span className="text-brand-primary">maintenant ?</span>
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
                  🎁
                </div>
                <h3 className="font-display text-lg">Accès anticipé</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                Les{" "}
                <span className="font-mono-bold text-white">200 premiers</span>{" "}
                inscrits reçoivent l'application{" "}
                <span className="text-white">1 semaine avant</span> le
                lancement officiel.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl">
                  ✨
                </div>
                <h3 className="font-display text-lg">Premium gratuit</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                Accès anticipé à{" "}
                <span className="text-white">
                  toutes les fonctionnalités premium
                </span>{" "}
                gratuitement pendant le{" "}
                <span className="font-mono-bold text-white">premier mois</span>.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-white hover:bg-brand-primaryDark"
            >
              Réserver ma place
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
