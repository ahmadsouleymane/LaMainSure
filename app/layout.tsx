import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://lamainsure.com";
const description =
  "La Main Sûre vous connecte à des artisans, graphistes, développeurs et beatmakers de confiance, vérifiés et notés par votre communauté. Lancement le 11 juin 2026.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "La Main Sûre — Trouvez les meilleurs professionnels, sans stress",
  description,
  keywords: [
    "professionnels Afrique",
    "artisans",
    "plombiers",
    "électriciens",
    "graphistes",
    "développeurs",
    "beatmakers",
    "liste d'attente",
    "La Main Sûre",
  ],
  authors: [{ name: "La Main Sûre" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    title: "La Main Sûre — Trouvez les meilleurs professionnels, sans stress",
    description,
    siteName: "La Main Sûre",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "La Main Sûre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Main Sûre — Trouvez les meilleurs professionnels, sans stress",
    description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#2AA9A4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Roboto+Mono:wght@700&family=JetBrains+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
