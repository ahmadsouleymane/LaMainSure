import Countdown from "./Countdown";
import WaitlistForm from "./WaitlistForm";

const CATEGORIES = [
  "Plombiers",
  "Électriciens",
  "Menuisiers",
  "Graphistes",
  "Développeurs",
  "Beatmakers",
  "Photographes",
  "Couturiers",
];

export default function Hero() {
  return (
    <section
      id="waitlist"
      className="relative px-5 pb-24 pt-32 sm:px-8 sm:pb-32 sm:pt-40"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Badge lancement */}
        <div className="reveal inline-flex items-center gap-2 rounded-full border border-brand-dark/10 bg-white px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
          </span>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-brand-dark">
            Lancement · 11.06.2026
          </span>
        </div>

        {/* Titre principal */}
        <h1 className="reveal reveal-delay-1 mt-8 text-balance font-display text-5xl leading-[1.02] text-brand-dark sm:text-6xl md:text-7xl">
          Le bon pro,
          <br />
          près de chez toi.
        </h1>

        {/* Sous-titre */}
        <p className="reveal reveal-delay-2 mx-auto mt-7 max-w-2xl text-balance text-base leading-relaxed text-brand-muted sm:text-lg">
          Trouve un artisan, plombier ou électricien dans ta ville — ou un
          développeur, graphiste, beatmaker partout en Côte d'Ivoire. Vérifiés,
          notés, joignables en un tap.
        </p>

        {/* Countdown */}
        <div className="reveal reveal-delay-3 mt-12">
          <p className="eyebrow mb-5 text-brand-muted">
            Lancement officiel dans
          </p>
          <Countdown />
        </div>

        {/* Formulaire */}
        <div className="reveal reveal-delay-4 mx-auto mt-10 max-w-xl">
          <WaitlistForm />
        </div>

      </div>

      {/* Marquee catégories */}
      <div className="reveal reveal-delay-5 relative mx-auto mt-24 max-w-6xl overflow-hidden border-y border-brand-dark/8 py-5">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-brand-bg"
          style={{ maskImage: "linear-gradient(to right, black, transparent)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-brand-bg"
          style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
          aria-hidden="true"
        />
        <div className="flex animate-marquee gap-12 whitespace-nowrap">
          {[...CATEGORIES, ...CATEGORIES, ...CATEGORIES].map((cat, i) => (
            <span
              key={`${cat}-${i}`}
              className="font-mono text-sm font-bold uppercase tracking-[0.18em] text-brand-dark/40"
            >
              {cat} <span className="text-brand-primary">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
