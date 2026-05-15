"use client";

import { useEffect, useState } from "react";

const TARGET_ISO = "2026-06-11T00:00:00Z";
const TARGET_TIME = new Date(TARGET_ISO).getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function computeTimeLeft(): TimeLeft | null {
  const diff = TARGET_TIME - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

const UNITS: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: "days", label: "Jours" },
  { key: "hours", label: "Heures" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Secondes" },
];

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(computeTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(computeTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-stretch justify-center gap-2 sm:gap-3">
        {UNITS.map(({ label }) => (
          <div
            key={label}
            className="flex w-[72px] flex-col items-center rounded-2xl bg-brand-dark p-3 sm:w-24 sm:p-4"
          >
            <span className="font-mono text-3xl font-bold text-white sm:text-4xl">
              --
            </span>
            <span className="mt-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <div className="rounded-2xl bg-brand-primary px-6 py-5 text-center">
        <p className="font-display text-lg text-white">
          L'application est disponible !
        </p>
        <a
          href="#"
          className="mt-3 inline-block rounded-full bg-white px-5 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-brand-primary"
        >
          Télécharger
        </a>
      </div>
    );
  }

  return (
    <div className="flex items-stretch justify-center gap-2 sm:gap-3">
      {UNITS.map(({ key, label }) => (
        <div
          key={key}
          className="flex w-[72px] flex-col items-center rounded-2xl bg-brand-dark p-3 sm:w-24 sm:p-4"
        >
          <span className="font-mono text-3xl font-bold tabular-nums text-white sm:text-4xl">
            {pad(timeLeft[key])}
          </span>
          <span className="mt-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
