import Logo from "./Logo";

const TIKTOK_URL = "https://www.tiktok.com/@souleymane_ci";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-20 bg-brand-dark text-white/80"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <Logo variant="white" className="h-10 w-auto" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
              La plateforme qui connecte les particuliers à des professionnels
              de confiance en Afrique. Vérifiés, notés, joignables.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="TikTok @souleymane_ci"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary"
              >
                <svg
                  className="h-4 w-4 text-white/70 transition-colors group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter / X"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary"
              >
                <svg
                  className="h-4 w-4 text-white/70 transition-colors group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="mailto:contact@lamainsure.com"
                aria-label="Email"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary"
              >
                <svg
                  className="h-4 w-4 text-white/70 transition-colors group-hover:text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 5L2 7" />
                </svg>
              </a>
            </div>

            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-brand-primaryLight transition-colors hover:text-white"
            >
              Suis le build in public
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>

          <div>
            <h3 className="eyebrow text-white">Navigation</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="#waitlist"
                  className="text-white/60 transition-colors hover:text-brand-primaryLight"
                >
                  Liste d'attente
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-white/60 transition-colors hover:text-brand-primaryLight"
                >
                  Comment ça marche
                </a>
              </li>
              <li>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-white/60 transition-colors hover:text-brand-primaryLight"
                >
                  Build in public
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@lamainsure.com"
                  className="text-white/60 transition-colors hover:text-brand-primaryLight"
                >
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            © 2026 La Main Sûre · Tous droits réservés
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            Fait avec <span className="text-brand-primary">♥</span> par{" "}
            <a
              href="https://www.justmaley.tech/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-brand-primaryLight"
            >
              Ahmad Souleymane
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
