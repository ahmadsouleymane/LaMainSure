"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-xl bg-white/75 border-b border-brand-dark/5 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="La Main Sûre — Accueil"
        >
          <Logo variant="color" className="h-8 w-auto sm:h-9" />
        </a>

        <nav className="flex items-center gap-1 sm:gap-4">
          <a
            href="#pros"
            className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-brand-dark/70 transition-colors hover:text-brand-primary sm:inline-block"
          >
            Pros
          </a>
          <a
            href="#faq"
            className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-brand-dark/70 transition-colors hover:text-brand-primary sm:inline-block"
          >
            FAQ
          </a>
          <a
            href="https://www.tiktok.com/@souleymane_ci"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-brand-dark/70 transition-colors hover:text-brand-primary md:inline-block"
          >
            Build in public
          </a>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-1.5 rounded-full bg-brand-dark px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-brand-primary sm:text-xs"
          >
            Rejoindre
            <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
