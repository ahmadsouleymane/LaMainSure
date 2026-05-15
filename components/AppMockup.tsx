/**
 * Simulation d'application — 3 écrans réalistes :
 *  1. Découverte : pro en avant + recherche géolocalisée
 *  2. Fiche pro : preuves de confiance, portfolio, tarifs
 *  3. Chat : conversation + devis détaillé
 */

function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[320px] shrink-0 rounded-[2.8rem] bg-brand-dark p-[7px] shadow-phone sm:w-[340px] md:w-[360px] ${className}`}
    >
      {/* Encoche */}
      <div className="absolute left-1/2 top-2.5 z-30 flex h-6 w-28 -translate-x-1/2 items-center justify-center rounded-full bg-black">
        <div className="ml-4 h-1.5 w-1.5 rounded-full bg-brand-primary/60" />
      </div>
      {/* Écran */}
      <div className="relative h-[720px] overflow-hidden rounded-[2.3rem] bg-white">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-white px-6 pb-1 pt-3 text-[11px] font-bold text-brand-dark">
          <span className="font-mono">9:41</span>
          <div className="flex items-center gap-1.5">
            <svg className="h-2.5 w-3.5" viewBox="0 0 16 10" fill="currentColor">
              <rect x="0" y="6" width="3" height="4" rx="0.5" />
              <rect x="4" y="4" width="3" height="6" rx="0.5" />
              <rect x="8" y="2" width="3" height="8" rx="0.5" />
              <rect x="12" y="0" width="3" height="10" rx="0.5" />
            </svg>
            <svg className="h-2.5 w-4" viewBox="0 0 16 10" fill="none">
              <path d="M2 4 Q8 -1 14 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M4 6 Q8 3 12 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="8" cy="8" r="0.8" fill="currentColor" />
            </svg>
            <div className="h-2.5 w-4 rounded-sm border border-current">
              <div className="h-full w-4/5 rounded-sm bg-current" />
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

function Avatar({
  color,
  initials,
  size = "md",
  online = false,
  ringWhite = false,
}: {
  color: string;
  initials: string;
  size?: "sm" | "md" | "lg" | "xl";
  online?: boolean;
  ringWhite?: boolean;
}) {
  const dim =
    size === "sm" ? "h-10 w-10 text-xs"
    : size === "lg" ? "h-16 w-16 text-lg"
    : size === "xl" ? "h-20 w-20 text-2xl"
    : "h-12 w-12 text-sm";
  return (
    <div className={`relative shrink-0 ${ringWhite ? "ring-4 ring-white" : ""} rounded-full`}>
      <div
        className={`${dim} flex items-center justify-center rounded-full font-mono font-bold text-white`}
        style={{ background: color }}
      >
        {initials}
      </div>
      {online && (
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-brand-primary" />
      )}
    </div>
  );
}

function Star({ size = "sm" }: { size?: "xs" | "sm" }) {
  const dim = size === "xs" ? "h-2.5 w-2.5" : "h-3 w-3";
  return (
    <svg className={`${dim} text-amber-400`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z" />
    </svg>
  );
}

function VerifiedBadge({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  const dim = size === "lg" ? "h-5 w-5" : size === "md" ? "h-4 w-4" : "h-3 w-3";
  return (
    <svg className={`${dim} shrink-0 text-brand-primary`} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 14 4 17 3 18 6 21 7 20 10 22 12 20 14 21 17 18 18 17 21 14 20 12 22 10 20 7 21 6 18 3 17 4 14 2 12 4 10 3 7 6 6 7 3 10 4Z" />
      <path d="m9 12 2 2 4-4" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PortfolioThumb({ color }: { color: string }) {
  return (
    <div
      className="relative aspect-square w-full overflow-hidden rounded-xl"
      style={{ background: color }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0 2px, transparent 2px 10px)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg className="h-5 w-5 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.5-3.5a2 2 0 0 0-2.8 0L3 21" />
        </svg>
      </div>
    </div>
  );
}

function BottomNav({ active }: { active: "home" | "search" | "chat" | "profile" }) {
  const items: Array<{
    key: "home" | "search" | "chat" | "profile";
    label: string;
    icon: React.ReactNode;
  }> = [
    { key: "home", label: "Accueil", icon: <path d="M3 12 12 3l9 9v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" /> },
    { key: "search", label: "Recherche", icon: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></> },
    { key: "chat", label: "Messages", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
    { key: "profile", label: "Profil", icon: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></> },
  ];
  return (
    <div className="absolute inset-x-0 bottom-0 border-t border-brand-dark/8 bg-white px-3 pb-3 pt-2">
      <div className="flex items-center justify-around">
        {items.map((it) => {
          const isActive = it.key === active;
          return (
            <div key={it.key} className="flex flex-col items-center gap-0.5">
              <svg
                className={`h-5 w-5 ${isActive ? "text-brand-primary" : "text-brand-dark/35"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {it.icon}
              </svg>
              <span
                className={`font-mono text-[8px] font-bold uppercase tracking-wider ${
                  isActive ? "text-brand-primary" : "text-brand-dark/35"
                }`}
              >
                {it.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-brand-dark/20" />
    </div>
  );
}

/* ========== Écran 1 : DÉCOUVERTE ========== */
function ScreenDiscover() {
  return (
    <div className="relative h-full bg-white pb-20">
      <div className="overflow-hidden pt-2">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-4">
          <div className="flex items-center gap-2.5">
            <Avatar color="#040f0f" initials="S" size="sm" />
            <div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-muted">
                Salut Souleymane
              </p>
              <button className="mt-0.5 flex items-center gap-1">
                <svg className="h-3 w-3 text-brand-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span className="font-display text-sm leading-tight text-brand-dark">
                  Abidjan · Cocody
                </span>
                <svg className="h-2.5 w-2.5 text-brand-dark/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-brand-dark/8">
            <svg className="h-4 w-4 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10 21h4" />
            </svg>
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-brand-primary ring-2 ring-white" />
          </button>
        </div>

        {/* Search */}
        <div className="px-5">
          <div className="flex items-center gap-2 rounded-2xl border border-brand-dark/10 bg-white px-3.5 py-3 shadow-card">
            <svg className="h-4 w-4 text-brand-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span className="text-xs text-brand-dark/70">Plombier, dev, beatmaker…</span>
            <div className="ml-auto flex h-6 w-6 items-center justify-center rounded-md bg-brand-dark/5">
              <div className="flex flex-col gap-px">
                <div className="h-px w-2.5 bg-brand-dark/50" />
                <div className="h-px w-2.5 bg-brand-dark/50" />
                <div className="h-px w-2.5 bg-brand-dark/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Toggle Ville / Partout */}
        <div className="mx-5 mt-3 flex rounded-2xl bg-brand-dark/5 p-1">
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-dark shadow-sm">
            <span>📍</span> Dans ma ville
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-brand-dark/50">
            <span>🌍</span> Partout en CI
          </button>
        </div>

        {/* Catégories */}
        <div className="mt-4 flex gap-2 overflow-x-auto px-5">
          {[
            { label: "Tout", emoji: "✨", active: true },
            { label: "Plomberie", emoji: "🔧" },
            { label: "Électricité", emoji: "⚡" },
            { label: "Design", emoji: "🎨" },
            { label: "Dev", emoji: "💻" },
          ].map((c) => (
            <span
              key={c.label}
              className={`flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                c.active
                  ? "bg-brand-primary text-white"
                  : "bg-white text-brand-dark/60 ring-1 ring-brand-dark/10"
              }`}
            >
              <span>{c.emoji}</span> {c.label}
            </span>
          ))}
        </div>

        {/* Featured Pro */}
        <div className="mx-5 mt-5">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-primary">
              ★ Top pro de la semaine
            </p>
            <span className="font-mono text-[9px] text-brand-muted">Voir tout</span>
          </div>
          <div className="overflow-hidden rounded-2xl border border-brand-dark/8 bg-white shadow-card">
            <div className="relative h-20 bg-brand-primary">
              <div
                className="absolute inset-0 opacity-15"
                style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "16px 16px" }}
              />
              <span className="absolute right-2 top-2 rounded-full bg-black/30 px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                Sponsorisé
              </span>
            </div>
            <div className="p-3">
              <div className="-mt-8 flex items-end justify-between">
                <Avatar color="#00b295" initials="AK" size="md" online ringWhite />
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center gap-0.5 rounded-full bg-amber-50 px-2 py-0.5 ring-1 ring-amber-200">
                    <Star />
                    <span className="font-mono text-[10px] font-bold text-amber-700">4.9</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-1">
                <p className="font-display text-sm text-brand-dark">Aïcha Koné</p>
                <VerifiedBadge />
              </div>
              <p className="mt-0.5 text-[10px] text-brand-muted">
                Plombière · Cocody · à 2,4 km
              </p>
              <div className="mt-2 flex items-center justify-between border-t border-brand-dark/5 pt-2">
                <span className="flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-wider text-brand-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                  Dispo aujourd'hui
                </span>
                <span className="font-mono text-[10px] font-bold text-brand-dark">
                  Dès <span className="text-brand-primary">15K F</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Liste pros */}
        <div className="mt-5 px-5">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-muted">
              Tous les pros · 127
            </p>
            <button className="flex items-center gap-0.5 font-mono text-[9px] font-bold uppercase tracking-wider text-brand-dark">
              Distance
              <svg className="h-2 w-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </div>
          <div className="space-y-2">
            {[
              {
                name: "Moussa Touré",
                job: "Électricien",
                district: "Riviera",
                distance: "3,1 km",
                rating: "4.8",
                reviews: "94",
                response: "20min",
                price: "20K",
                avatar: "#7C3AED",
                initials: "MT",
              },
              {
                name: "Fatou Diabaté",
                job: "Graphiste",
                district: "Treichville",
                distance: "5,8 km",
                rating: "5.0",
                reviews: "62",
                response: "1h",
                price: "Devis",
                avatar: "#040f0f",
                initials: "FD",
              },
            ].map((pro) => (
              <div
                key={pro.name}
                className="flex items-center gap-3 rounded-2xl border border-brand-dark/8 bg-white p-3"
              >
                <Avatar color={pro.avatar} initials={pro.initials} size="md" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <p className="truncate text-xs font-bold leading-tight text-brand-dark">
                      {pro.name}
                    </p>
                    <VerifiedBadge />
                  </div>
                  <p className="mt-0.5 text-[10px] leading-tight text-brand-muted">
                    {pro.job} · {pro.district} · {pro.distance}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <Star />
                      <span className="font-mono text-[9px] font-bold text-brand-dark">
                        {pro.rating}
                      </span>
                      <span className="font-mono text-[8px] text-brand-muted">
                        ({pro.reviews})
                      </span>
                    </div>
                    <span className="text-[8px] text-brand-muted">·</span>
                    <span className="font-mono text-[9px] text-brand-muted">
                      ⏱ {pro.response}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[8px] font-bold uppercase tracking-wider text-brand-muted">
                    Dès
                  </p>
                  <p className="font-mono-bold text-sm text-brand-dark">
                    {pro.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="search" />
    </div>
  );
}

/* ========== Écran 2 : FICHE PRO ========== */
function ScreenProfile() {
  return (
    <div className="relative h-full bg-white pb-24">
      {/* Cover */}
      <div className="relative h-36 bg-brand-dark">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(0,178,149,0.5) 0 2px, transparent 2px 12px)",
          }}
        />
        <button aria-label="Retour" className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <svg className="h-4 w-4 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <div className="absolute right-3 top-3 flex gap-2">
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <svg className="h-4 w-4 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <svg className="h-4 w-4 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </button>
        </div>
      </div>

      <div className="px-5 pb-6">
        {/* Avatar + tags */}
        <div className="-mt-12 flex items-end justify-between">
          <div className="relative">
            <Avatar color="#00b295" initials="AK" size="xl" online ringWhite />
            <div className="absolute -bottom-1 -right-1 rounded-full bg-white p-1">
              <VerifiedBadge size="md" />
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="rounded-full bg-brand-primary px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-widest text-white">
              Top pro
            </span>
            <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-widest text-emerald-700 ring-1 ring-emerald-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Dispo
            </span>
          </div>
        </div>

        {/* Identité */}
        <div className="mt-3">
          <h3 className="font-display text-xl leading-tight text-brand-dark">
            Aïcha Koné
          </h3>
          <p className="mt-0.5 text-xs text-brand-muted">
            Plombière professionnelle
          </p>
          <p className="mt-1.5 flex items-center gap-1 text-xs text-brand-dark/70">
            <svg className="h-3 w-3 text-brand-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
            </svg>
            Cocody, Abidjan · à 2,4 km
          </p>
        </div>

        {/* Stats */}
        <div className="mt-4 grid grid-cols-4 gap-1 overflow-hidden rounded-2xl border border-brand-dark/8">
          {[
            { v: "4.9", l: "Note" },
            { v: "127", l: "Avis" },
            { v: "320", l: "Missions" },
            { v: "5 ans", l: "Métier" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`bg-white py-2.5 text-center ${
                i > 0 ? "border-l border-brand-dark/8" : ""
              }`}
            >
              <div className="font-mono-bold text-base text-brand-dark">{s.v}</div>
              <div className="font-mono text-[8px] font-bold uppercase tracking-wider text-brand-muted">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-4 flex border-b border-brand-dark/8">
          {["À propos", "Avis (127)", "Portfolio", "Tarifs"].map((tab, i) => (
            <button
              key={tab}
              className={`relative px-2.5 pb-2 font-mono text-[10px] font-bold uppercase tracking-widest ${
                i === 0 ? "text-brand-dark" : "text-brand-muted"
              }`}
            >
              {tab}
              {i === 0 && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-t-full bg-brand-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Description */}
        <p className="mt-3 text-[11px] leading-relaxed text-brand-dark/80">
          Spécialiste fuites, débouchage et installation sanitaire. Intervention
          rapide sous 2h sur Abidjan. <span className="font-bold">Devis gratuit</span>.
        </p>

        {/* Spécialités */}
        <div className="mt-3">
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-muted">
            Spécialités
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1">
            {["Fuite urgente", "Débouchage", "Chauffe-eau", "Sanitaire"].map((s) => (
              <span
                key={s}
                className="rounded-full bg-brand-bg px-2 py-1 font-mono text-[8px] font-bold uppercase tracking-wider text-brand-dark/70 ring-1 ring-brand-dark/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-muted">
              Portfolio
            </p>
            <span className="font-mono text-[9px] text-brand-primary">Voir tout</span>
          </div>
          <div className="mt-1.5 grid grid-cols-4 gap-1.5">
            <PortfolioThumb color="#00b295" />
            <PortfolioThumb color="#040f0f" />
            <PortfolioThumb color="#7C3AED" />
            <PortfolioThumb color="#6B7280" />
          </div>
        </div>

        {/* Tarifs */}
        <div className="mt-4 rounded-2xl border border-brand-dark/8 p-3">
          <div className="flex items-baseline justify-between">
            <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-muted">
              Tarifs
            </p>
            <p className="font-mono text-[9px] text-brand-muted">À partir de</p>
          </div>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="font-mono-bold text-2xl text-brand-dark">15 000</span>
            <span className="font-mono text-xs font-bold text-brand-muted">FCFA</span>
          </div>
        </div>
      </div>

      {/* CTA sticky */}
      <div className="absolute inset-x-0 bottom-0 border-t border-brand-dark/8 bg-white px-4 pb-4 pt-3">
        <div className="flex gap-2">
          <button className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-dark/10 bg-white">
            <svg className="h-4 w-4 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </button>
          <button className="flex h-11 items-center justify-center gap-1.5 rounded-full border border-brand-dark/10 bg-white px-4 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-dark">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Chat
          </button>
          <button className="flex h-11 flex-1 items-center justify-center rounded-full bg-brand-primary font-mono text-[10px] font-bold uppercase tracking-widest text-white">
            Demander un devis
          </button>
        </div>
      </div>
    </div>
  );
}

/* ========== Écran 3 : CHAT + DEVIS ========== */
function ScreenChat() {
  return (
    <div className="relative h-full bg-brand-bg pb-24">
      {/* Header chat */}
      <div className="flex items-center gap-2.5 border-b border-brand-dark/8 bg-white px-4 py-2.5">
        <button aria-label="Retour" className="flex h-7 w-7 items-center justify-center">
          <svg className="h-4 w-4 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <Avatar color="#00b295" initials="AK" size="sm" online />
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <p className="text-xs font-bold leading-tight text-brand-dark">
              Aïcha Koné
            </p>
            <VerifiedBadge />
          </div>
          <p className="flex items-center gap-1 text-[10px] text-brand-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            En ligne · répond ~10min
          </p>
        </div>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-bg">
          <svg className="h-3.5 w-3.5 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>
        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-bg">
          <svg className="h-3.5 w-3.5 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23 7l-7 5 7 5V7zM1 5h15v14H1z" />
          </svg>
        </button>
      </div>

      {/* Bandeau sécurité */}
      <div className="flex items-center justify-center gap-1.5 bg-brand-primary/10 px-3 py-2">
        <svg className="h-3 w-3 text-brand-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-primaryDark">
          Paiement sécurisé · règlement à la fin
        </span>
      </div>

      {/* Messages */}
      <div className="space-y-2.5 overflow-hidden px-4 py-3">
        <p className="text-center font-mono text-[9px] font-bold uppercase tracking-widest text-brand-muted">
          Aujourd'hui · 14:01
        </p>

        {/* Pro */}
        <div className="flex justify-start gap-1.5">
          <Avatar color="#00b295" initials="AK" size="sm" />
          <div className="max-w-[78%] rounded-2xl rounded-bl-md bg-white px-3 py-2 shadow-sm">
            <p className="text-[11px] leading-relaxed text-brand-dark">
              Bonjour 👋 Je peux passer cet après-midi vers 15h pour évaluer la
              fuite. Tu peux m'envoyer une photo ?
            </p>
            <p className="mt-1 text-right font-mono text-[8px] text-brand-muted">
              14:02
            </p>
          </div>
        </div>

        {/* Moi avec photo */}
        <div className="flex justify-end">
          <div className="max-w-[78%] rounded-2xl rounded-br-md bg-brand-primary p-2 shadow-sm">
            <div className="h-20 w-full overflow-hidden rounded-lg bg-white/15 ring-1 ring-white/20">
              <div className="flex h-full items-center justify-center">
                <svg className="h-6 w-6 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.5-3.5a2 2 0 0 0-2.8 0L3 21" />
                </svg>
              </div>
            </div>
            <p className="mt-1.5 px-1 text-[11px] leading-relaxed text-white">
              Voici la photo de la fuite sous l'évier 👇
            </p>
            <p className="mt-1 px-1 text-right font-mono text-[8px] text-white/70">
              14:04 ✓✓
            </p>
          </div>
        </div>

        {/* Voice note du pro */}
        <div className="flex justify-start gap-1.5">
          <Avatar color="#00b295" initials="AK" size="sm" />
          <div className="flex max-w-[78%] items-center gap-2 rounded-2xl rounded-bl-md bg-white px-3 py-2 shadow-sm">
            <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
              <svg className="ml-0.5 h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <div className="flex flex-1 items-end gap-px">
              {[3, 8, 14, 10, 16, 12, 7, 11, 15, 9, 13, 6, 10, 14, 8].map((h, i) => (
                <div
                  key={i}
                  className="w-px rounded-full bg-brand-primary/60"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
            <span className="font-mono text-[8px] text-brand-muted">0:14</span>
          </div>
        </div>

        {/* Carte devis */}
        <div className="flex justify-start gap-1.5">
          <Avatar color="#00b295" initials="AK" size="sm" />
          <div className="max-w-[88%] overflow-hidden rounded-2xl rounded-bl-md bg-white shadow-sm ring-1 ring-brand-primary/30">
            <div className="flex items-center justify-between bg-brand-primary/10 px-3 py-2">
              <p className="flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-widest text-brand-primaryDark">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                </svg>
                Devis #A2814
              </p>
              <span className="rounded-full bg-amber-100 px-1.5 py-0.5 font-mono text-[7px] font-bold uppercase tracking-widest text-amber-700">
                ⏱ 48h
              </span>
            </div>
            <div className="p-3">
              <p className="text-[11px] font-bold leading-tight text-brand-dark">
                Réparation fuite sous-évier
              </p>
              <p className="mt-0.5 text-[9px] text-brand-muted">
                Cocody · Aujourd'hui 15h
              </p>

              <div className="my-2 space-y-1 border-y border-brand-dark/5 py-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-brand-dark/70">Main d'œuvre</span>
                  <span className="font-mono text-[10px] font-bold text-brand-dark">12 000 F</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-brand-dark/70">Joint + raccord</span>
                  <span className="font-mono text-[10px] font-bold text-brand-dark">4 500 F</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-brand-dark/70">Déplacement</span>
                  <span className="font-mono text-[10px] font-bold text-brand-dark">2 000 F</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-brand-muted">
                  Total TTC
                </span>
                <span className="font-mono-bold text-lg text-brand-dark">
                  18 500 F
                </span>
              </div>

              <div className="mt-2.5 flex gap-1.5">
                <button className="flex-1 rounded-full bg-brand-bg py-2 font-mono text-[9px] font-bold uppercase tracking-widest text-brand-dark">
                  Négocier
                </button>
                <button className="flex-1 rounded-full bg-brand-primary py-2 font-mono text-[9px] font-bold uppercase tracking-widest text-white">
                  Accepter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Typing */}
        <div className="flex justify-start gap-1.5">
          <Avatar color="#00b295" initials="AK" size="sm" />
          <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-3 py-2.5 shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-muted" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-muted" style={{ animationDelay: "0.15s" }} />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-muted" style={{ animationDelay: "0.3s" }} />
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="absolute inset-x-0 bottom-14 border-t border-brand-dark/8 bg-white px-3 py-2.5">
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-bg">
            <svg className="h-4 w-4 text-brand-dark/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <div className="flex flex-1 items-center rounded-full bg-brand-bg px-3.5 py-2">
            <span className="text-[11px] text-brand-muted">Message…</span>
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary">
            <svg className="h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" />
            </svg>
          </button>
        </div>
      </div>

      <BottomNav active="chat" />
    </div>
  );
}

export default function AppMockup() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brand-primary">Aperçu de l'application</p>
          <h2 className="mt-4 text-balance font-display text-4xl leading-tight text-brand-dark sm:text-5xl">
            Le bon pro,
            <br />
            près de chez toi.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-base text-brand-muted sm:text-lg">
            Filtre par <span className="font-mono-bold text-brand-dark">ville</span> pour les
            services physiques, ou par <span className="font-mono-bold text-brand-dark">tout le pays</span>{" "}
            pour les services à distance.
          </p>
        </div>

        {/* Mosaïque phones desktop */}
        <div className="relative mt-20 hidden items-end justify-center gap-6 md:flex">
          <PhoneFrame>
            <ScreenDiscover />
          </PhoneFrame>
          <PhoneFrame>
            <ScreenProfile />
          </PhoneFrame>
          <PhoneFrame>
            <ScreenChat />
          </PhoneFrame>
        </div>

        {/* Scroll horizontal mobile */}
        <div className="-mx-5 mt-12 flex gap-5 overflow-x-auto px-5 pb-4 md:hidden">
          <PhoneFrame>
            <ScreenDiscover />
          </PhoneFrame>
          <PhoneFrame>
            <ScreenProfile />
          </PhoneFrame>
          <PhoneFrame>
            <ScreenChat />
          </PhoneFrame>
        </div>

        {/* Légendes */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Cherche dans ta ville",
              d: "Géolocalisation, distance, quartier, dispos. Le pro le plus proche remonte en premier.",
            },
            {
              n: "02",
              t: "Vérifie tout, en un coup d'œil",
              d: "Note, nombre d'avis, missions réalisées, temps de réponse. Aucune surprise.",
            },
            {
              n: "03",
              t: "Devis intégré au chat",
              d: "Reçois un devis détaillé dans la conversation. Tout reste traçable.",
            },
          ].map((c) => (
            <div
              key={c.n}
              className="card rounded-3xl p-6"
            >
              <span className="font-mono-bold text-2xl text-brand-primary">
                {c.n}
              </span>
              <h3 className="mt-4 font-display text-lg text-brand-dark">
                {c.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
