import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#00b295",
          primaryDark: "#008f78",
          primaryLight: "#2EC9B0",
          dark: "#040f0f",
          darker: "#020808",
          muted: "#6B7280",
          mutedLight: "#9CA3AF",
          accent: "#7C3AED",
          bg: "#F9FAFB",
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          '"Inter"',
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          '"Roboto Mono"',
          '"JetBrains Mono"',
          "ui-monospace",
          "monospace",
        ],
        display: [
          '"Roboto Mono"',
          '"Plus Jakarta Sans"',
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(4, 15, 15, 0.04), 0 8px 24px rgba(4, 15, 15, 0.06)",
        "card-lg": "0 1px 2px rgba(4, 15, 15, 0.04), 0 20px 48px rgba(4, 15, 15, 0.10)",
        phone: "0 24px 60px -20px rgba(4, 15, 15, 0.30)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.7s ease-out forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
