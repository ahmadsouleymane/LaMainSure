type LogoVariant = "color" | "white" | "black";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  title?: string;
}

const COLORS: Record<LogoVariant, { primary: string; secondary: string }> = {
  // Logo couleur d'origine — fond clair
  color: { primary: "#00b295", secondary: "#040f0f" },
  // Fond sombre — turquoise reste, "LA MAIN" + doigts passent en blanc
  white: { primary: "#00b295", secondary: "#FFFFFF" },
  // Monochrome noir
  black: { primary: "#040f0f", secondary: "#040f0f" },
};

export default function Logo({
  variant = "color",
  className = "h-10 w-auto",
  title = "La Main Sûre",
}: LogoProps) {
  const { primary, secondary } = COLORS[variant];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 532.61 204.84"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>

      {/* Paume (turquoise) */}
      <path
        fill={primary}
        d="M57.17,198.02c-.82,0-1.43-.02-1.81-.04-.12,0-.25,0-.37,0-14.42,0-26.4-4.85-35.61-14.41C-1.07,162.35-.09,125.13.05,121.78v-26.97c0-4.04,3.28-7.32,7.32-7.32s7.32,3.28,7.32,7.32v27.47c-.02.33-1.32,33.99,15.26,51.16,6.53,6.76,14.88,9.99,25.53,9.89h.32s.32.02.32.02c.12,0,15.66.93,27.36-10,9.37-8.75,14.12-22.84,14.12-41.88,0-4.04,3.28-7.32,7.32-7.32s7.32,3.28,7.32,7.32c0,23.38-6.38,41.13-18.95,52.75-13.6,12.57-30.21,13.79-36.12,13.79Z"
      />

      {/* Doigts (secondaire) */}
      <g fill={secondary}>
        <path d="M32.05,25.21c-4.11,0-7.44,3.33-7.44,7.44v77.73c0,4.11,3.33,7.44,7.44,7.44s7.44-3.33,7.44-7.44V32.65c0-4.11-3.33-7.44-7.44-7.44Z" />
        <path d="M56.6,0c-4.11,0-7.44,3.33-7.44,7.44v96.78c0,4.11,3.33,7.44,7.44,7.44s7.44-3.33,7.44-7.44V7.44c0-4.11-3.33-7.44-7.44-7.44Z" />
        <rect x="73.55" y="13.16" width="14.88" height="105.73" rx="7.44" ry="7.44" />
        <rect x="97.49" y="34.18" width="14.88" height="85.99" rx="7.44" ry="7.44" />
      </g>

      {/* Texte */}
      <text
        x="138.17"
        y="85.66"
        fill={secondary}
        style={{
          fontFamily: '"Roboto Mono", ui-monospace, "JetBrains Mono", monospace',
          fontSize: "93.9px",
          fontWeight: 700,
          letterSpacing: 0,
        }}
      >
        LA MAIN
      </text>
      <text
        x="138.17"
        y="179.39"
        fill={primary}
        style={{
          fontFamily: '"Roboto Mono", ui-monospace, "JetBrains Mono", monospace',
          fontSize: "93.9px",
          fontWeight: 700,
          letterSpacing: 0,
        }}
      >
        SÛRE
      </text>
    </svg>
  );
}
