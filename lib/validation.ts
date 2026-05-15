export type ContactType = "email" | "whatsapp";

export interface ValidatedContact {
  type: ContactType;
  value: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Accepte un email OU un numéro de téléphone (format international ou local).
 * Pour WhatsApp, normalise en gardant le + initial et les chiffres uniquement.
 */
export function validateContact(raw: string): ValidatedContact | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  if (EMAIL_RE.test(trimmed)) {
    return { type: "email", value: trimmed.toLowerCase() };
  }

  const digitsOnly = trimmed.replace(/[\s\-().]/g, "");
  const phoneRe = /^\+?[0-9]{8,15}$/;
  if (phoneRe.test(digitsOnly)) {
    const normalized = digitsOnly.startsWith("+")
      ? digitsOnly
      : `+${digitsOnly}`;
    return { type: "whatsapp", value: normalized };
  }

  return null;
}

export function validateFirstName(raw: string): string | null {
  const trimmed = raw.trim();
  if (trimmed.length < 2 || trimmed.length > 60) return null;
  if (!/^[\p{L}\p{M}'\-\s]+$/u.test(trimmed)) return null;
  return trimmed;
}

/** Liste des métiers acceptés. "Autre" sert de fallback. */
export const TRADES = [
  "Plombier",
  "Électricien",
  "Menuisier",
  "Maçon",
  "Peintre",
  "Mécanicien",
  "Climatisation / Frigoriste",
  "Carreleur",
  "Coiffeur(se)",
  "Couturier(ère)",
  "Cuisinier / Traiteur",
  "Photographe",
  "Vidéaste",
  "Graphiste",
  "Développeur",
  "Beatmaker / Producteur",
  "Community manager",
  "Autre",
] as const;

export type Trade = (typeof TRADES)[number];

/** Pays cibles (Afrique de l'Ouest et Centrale en priorité). */
export const COUNTRIES = [
  "Côte d'Ivoire",
  "Sénégal",
  "Cameroun",
  "Mali",
  "Burkina Faso",
  "Bénin",
  "Togo",
  "Guinée",
  "Niger",
  "Mauritanie",
  "Tchad",
  "Gabon",
  "Congo",
  "RDC",
  "Autre",
] as const;

export type Country = (typeof COUNTRIES)[number];

/** Indicatifs téléphoniques internationaux — Côte d'Ivoire en premier (défaut). */
export const COUNTRY_CODES = [
  { code: "+225", flag: "🇨🇮", name: "Côte d'Ivoire" },
  { code: "+221", flag: "🇸🇳", name: "Sénégal" },
  { code: "+237", flag: "🇨🇲", name: "Cameroun" },
  { code: "+223", flag: "🇲🇱", name: "Mali" },
  { code: "+226", flag: "🇧🇫", name: "Burkina Faso" },
  { code: "+229", flag: "🇧🇯", name: "Bénin" },
  { code: "+228", flag: "🇹🇬", name: "Togo" },
  { code: "+224", flag: "🇬🇳", name: "Guinée" },
  { code: "+227", flag: "🇳🇪", name: "Niger" },
  { code: "+222", flag: "🇲🇷", name: "Mauritanie" },
  { code: "+235", flag: "🇹🇩", name: "Tchad" },
  { code: "+241", flag: "🇬🇦", name: "Gabon" },
  { code: "+242", flag: "🇨🇬", name: "Congo" },
  { code: "+243", flag: "🇨🇩", name: "RDC" },
  { code: "+212", flag: "🇲🇦", name: "Maroc" },
  { code: "+33", flag: "🇫🇷", name: "France" },
] as const;

export const DEFAULT_COUNTRY_CODE = "+225";

/** Numéro WhatsApp uniquement (pas d'email). Format international toléré. */
export function validateWhatsApp(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const digitsOnly = trimmed.replace(/[\s\-().]/g, "");
  const phoneRe = /^\+?[0-9]{8,15}$/;
  if (!phoneRe.test(digitsOnly)) return null;
  return digitsOnly.startsWith("+") ? digitsOnly : `+${digitsOnly}`;
}

export function validateTrade(raw: string): Trade | null {
  const trimmed = raw.trim();
  return (TRADES as readonly string[]).includes(trimmed) ? (trimmed as Trade) : null;
}

export function validateCountry(raw: string): Country | null {
  const trimmed = raw.trim();
  return (COUNTRIES as readonly string[]).includes(trimmed) ? (trimmed as Country) : null;
}

export function validateCity(raw: string): string | null {
  const trimmed = raw.trim();
  if (trimmed.length < 2 || trimmed.length > 80) return null;
  if (!/^[\p{L}\p{M}'\-\s\d]+$/u.test(trimmed)) return null;
  return trimmed;
}
