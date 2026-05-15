"use client";

import { COUNTRY_CODES } from "@/lib/validation";

interface PhoneInputProps {
  countryCode: string;
  setCountryCode: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  placeholder?: string;
}

/**
 * Input téléphone composé : sélecteur d'indicatif (défaut +225) + champ numéro local.
 * Apparence d'un seul champ (flex container avec border partagée).
 */
export default function PhoneInput({
  countryCode,
  setCountryCode,
  phone,
  setPhone,
  disabled = false,
  required = true,
  id = "phone",
  placeholder = "07 12 34 56 78",
}: PhoneInputProps) {
  return (
    <div
      className={`flex w-full overflow-hidden rounded-2xl border border-brand-dark/10 bg-white transition-all focus-within:border-brand-primary focus-within:ring-2 focus-within:ring-brand-primary/20 ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <div className="relative shrink-0">
        <select
          aria-label="Indicatif pays"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          disabled={disabled}
          className="h-full appearance-none border-r border-brand-dark/10 bg-transparent py-3 pl-4 pr-8 font-mono text-sm font-bold text-brand-dark focus:outline-none"
        >
          {COUNTRY_CODES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.flag} {c.code}
            </option>
          ))}
        </select>
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-brand-dark/60"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      <input
        id={id}
        type="tel"
        required={required}
        autoComplete="tel-national"
        inputMode="tel"
        placeholder={placeholder}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        disabled={disabled}
        className="w-full flex-1 bg-transparent px-4 py-3 text-base text-brand-dark placeholder:text-brand-muted/70 focus:outline-none"
      />
    </div>
  );
}
