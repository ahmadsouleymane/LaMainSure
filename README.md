# La Main Sûre — Landing Page

Liste d'attente avant le lancement du **11 juin 2026**. Stack : Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Supabase.

---

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer en local
npm run dev

# 3. Ouvrir http://localhost:3000
```

> **Mode démo** : la page fonctionne immédiatement sans Supabase. Les inscriptions sont loggées dans la console serveur mais pas persistées. Pour stocker les inscriptions, suivre la section Supabase ci-dessous.

---

## 🖼️ Logos

Déposer les 3 variantes du logo dans le dossier `public/` :

```
public/logo-color.png   ← variante couleur (fonds clairs : header, hero)
public/logo-white.png   ← variante claire (fond sombre : footer)
public/logo-black.png   ← variante monochrome noire
```

Le composant `components/Logo.tsx` les sert automatiquement via la prop `variant`.

---

## 🗄️ Configuration Supabase (production)

### 1. Créer le projet Supabase

1. Aller sur [supabase.com](https://supabase.com) → **New Project**
2. Choisir un nom (ex. `la-main-sure`), une région proche (ex. `eu-west-3`) et un mot de passe DB.

### 2. Créer la table `waitlist`

Dans l'onglet **SQL Editor**, coller et exécuter :

```sql
-- Table des inscriptions CLIENTS (particuliers)
create table public.waitlist (
  id           uuid primary key default gen_random_uuid(),
  first_name   text not null,
  contact_type text not null check (contact_type in ('email', 'whatsapp')),
  contact_value text not null,
  source       text default 'landing',
  created_at   timestamptz default now()
);

create unique index waitlist_contact_unique
  on public.waitlist (contact_value);

alter table public.waitlist enable row level security;

-- Table des inscriptions PROS (prestataires fondateurs)
create table public.pros_waitlist (
  founder_n    bigserial primary key,
  whatsapp     text not null unique,
  trade        text not null,
  country      text not null,
  city         text not null,
  source       text default 'landing',
  created_at   timestamptz default now()
);

alter table public.pros_waitlist enable row level security;
```

### 3. Récupérer les clés API

Dans le dashboard Supabase → **Settings → API**, copier :
- `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
- `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `service_role secret` → `SUPABASE_SERVICE_ROLE_KEY` ⚠️ **ne jamais exposer côté client**

### 4. Créer `.env.local`

```bash
cp .env.local.example .env.local
```

Puis remplir avec tes vraies valeurs.

### 5. Redémarrer le serveur

```bash
npm run dev
```

Les inscriptions arriveront dans `public.waitlist`. Tu peux les exporter en CSV depuis l'onglet **Table Editor** de Supabase.

---

## 🌍 Déploiement Vercel

1. Pousser le projet sur GitHub.
2. Sur [vercel.com/new](https://vercel.com/new), importer le repo.
3. Dans **Environment Variables**, ajouter :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
4. Cliquer **Deploy**. ✅

> La build prend ~1 min. Vercel attribue un domaine `*.vercel.app` que tu peux remplacer par un domaine custom dans **Settings → Domains**.

---

## 📁 Structure du projet

```
app/
├── layout.tsx          # Metadata, polices, SEO
├── page.tsx            # Assemble toutes les sections
├── globals.css         # Tailwind + glass utilities
└── api/
    └── waitlist/
        └── route.ts    # POST → insère dans Supabase
components/
├── Logo.tsx            # 3 variantes (color / white / black)
├── Header.tsx          # Nav fixe avec effet scroll
├── Hero.tsx            # Titre + countdown + formulaire
├── Countdown.tsx       # Compte à rebours live (jours/heures/min/sec)
├── WaitlistForm.tsx    # Form avec validation + état succès + lien parrainage
├── Benefits.tsx        # 3 mini-cartes glass
├── HowItWorks.tsx      # Timeline verticale 3 étapes
├── EarlyAccess.tsx     # Section offre lancement
├── Footer.tsx          # Logo blanc + liens + socials
└── BackgroundShapes.tsx # Formes 3D flottantes
lib/
├── supabase.ts         # Client serveur Supabase
└── validation.ts       # Validation email/whatsapp/prénom
public/
├── logo-color.png
├── logo-white.png
└── logo-black.png
```

---

## 🎨 Charte graphique

| Token | Valeur | Usage |
|---|---|---|
| `brand-primary` | `#2AA9A4` | Boutons, accents, countdown |
| `brand-primaryDark` | `#1F8B86` | Hover states |
| `brand-primaryLight` | `#3FC3BD` | Accents clairs sur fond sombre |
| `brand-dark` | `#1B2838` | Texte principal, footer |
| `brand-muted` | `#6B7280` | Texte secondaire |
| `brand-accent` | `#7C3AED` | Accent violet discret |
| `brand-bg` | `#F9FAFB` | Fond général |

Police : **Plus Jakarta Sans** (Google Fonts, weights 400 → 800).

---

## ⏱️ Modifier la date de lancement

Éditer `components/Countdown.tsx`, ligne 4 :

```ts
const TARGET_ISO = "2026-06-11T00:00:00Z";
```

Format ISO 8601 UTC. La page bascule automatiquement en mode "disponible" à expiration.

---

## 📝 Checklist avant publication

- [ ] Déposer les 3 logos dans `public/`
- [ ] Ajouter un `favicon.ico` dans `public/`
- [ ] Créer `public/og-image.png` (1200×630) pour les partages sociaux
- [ ] Mettre à jour les liens Twitter/TikTok dans `components/Footer.tsx`
- [ ] Mettre à jour `siteUrl` dans `app/layout.tsx`
- [ ] Configurer Supabase et les variables d'environnement
- [ ] Tester sur mobile (Safari iOS + Chrome Android)
- [ ] Déployer sur Vercel

---

## 🔧 Scripts disponibles

```bash
npm run dev     # serveur de développement (http://localhost:3000)
npm run build   # build de production
npm run start   # serveur de production (après build)
npm run lint    # linter Next.js
```
