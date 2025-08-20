# Portfolio — Next.js, Tailwind & Radix UI

Un portfolio moderne, rapide et accessible, construit avec Next.js (App Router), React 19, TypeScript et Tailwind CSS, enrichi de composants Radix UI/shadcn et d’animations soignées.


## ✨ Fonctionnalités clés

- UI moderne basée sur Radix UI/shadcn (dialog, dropdown, sheet, tabs, toast, etc.)
- Thème clair/sombre avec `next-themes`
- Command Palette (cmdk) et Dock custom
- Arrière-plan shader animé (`@paper-design/shaders-react`)
- Toaster/Notifications (sonner)
- Formulaires typés (React Hook Form + Zod)
- État global léger (Zustand)
- Graphiques (Recharts) et Carousel (Embla)
- Accessibilité par défaut (primitives Radix)


## 🧰 Stack technique

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS + tailwind-merge + tailwindcss-animate
- Radix UI + shadcn/ui (ensemble de composants dans `components/ui`)
- Zustand, React Hook Form, Zod, next-themes
- Recharts, Embla Carousel, Lucide Icons


## 🚀 Démarrage rapide

Prérequis:
- Node.js ≥ 18.18 (LTS recommandé)
- pnpm installé globalement

Installation et lancement en local:

```bash
pnpm install
pnpm dev
```

Puis ouvrez http://localhost:3000

Scripts disponibles:
- `pnpm dev` — Démarrer le serveur de dev
- `pnpm build` — Build de production
- `pnpm start` — Servir le build
- `pnpm lint` — Linter Next.js/TypeScript


## 🗂️ Structure du projet (extrait)

```
app/
  layout.tsx        # Layout racine + providers
  page.tsx          # Page d’accueil
  components/       # Composants spécifiques à l’app (Dock, CommandPalette, etc.)
components/
  theme-provider.tsx
  ui/               # Composants shadcn/radix (button, dialog, tabs, ...)
hooks/              # Hooks (use-toast, use-mobile, ...)
lib/                # Store Zustand, utilitaires
public/             # Images et assets
styles/             # Feuilles de style globales
```

Points d’entrée utiles:
- `components/theme-provider.tsx` — Gestion du thème clair/sombre
- `app/components/ShaderBackground.tsx` — Fond animé shader
- `app/components/CommandPalette.tsx` — Palette de commande (cmdk)
- `components/ui/*` — Bibliothèque de composants UI prête à l’emploi


## 🎨 Personnalisation

- Couleurs, typographies et thèmes: `tailwind.config.ts`
- Styles globaux: `app/globals.css` (+ `styles/globals.css` si utilisé)
- Icônes: `lucide-react`
- Thème: via `ThemeProvider` (light/dark/system)


## 🧪 Qualité & Accessibilité

- Primitives Radix pour focus management et ARIA
- Animations subtiles (`tailwindcss-animate`)
- Composants testés en SSR/CSR avec Next.js App Router

## 🔗 Démo

- Lien de démo : [Cliquez-ici](https://elijahlasserre.netlify.app/)


## 🙌 Remerciements

- [shadcn/ui](https://ui.shadcn.com/) · [Radix UI](https://www.radix-ui.com/)
- [Next.js](https://nextjs.org/) · [Tailwind CSS](https://tailwindcss.com/)
- [Lucide](https://lucide.dev/) · [Recharts](https://recharts.org/) · [Embla](https://www.embla-carousel.com/)


## 📄 Licence

Aucune licence spécifiée pour l’instant. Ajoutez un fichier `LICENSE` (MIT, Apache-2.0, etc.) selon votre préférence.


## 👤 Auteur

- Elijah Lasserre
