# GitHub Copilot Instructions — Blue Panda Website

These instructions guide the Copilot coding agent when working on PRs, code reviews, refactoring tasks, and general development in this repository.

---

## Project Overview

**Blue Panda** is a React 18 + Vite single-page application for Blue Panda Hosting and Designs, a cloud infrastructure and AI integration company. The site showcases services, projects, an AI-powered infrastructure architect (Gemini API), and contact/scheduling functionality.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 (`react`, `react-dom`) |
| Build tool | Vite 6 |
| Styling | Tailwind CSS 3 (utility-first, semantic CSS variables) |
| Animations | Framer Motion 12 |
| 3-D / Canvas | Three.js + `@react-three/fiber` + `@react-three/drei` |
| Icons | Lucide React |
| AI | Google Gemini API (via `src/services/ai.js`) |
| Deployment | Netlify (see `netlify.toml`) |

---

## Repository Structure

```
bluepanda/
├── .github/
│   ├── copilot-instructions.md   ← this file
│   └── workflows/                ← CI / Copilot automation
├── src/
│   ├── App.jsx                   ← main app, routing, all page components
│   ├── SuperpositionComponents.jsx  ← reusable UI components
│   ├── StarfieldBackground.jsx   ← Three.js starfield
│   ├── caseStudiesData.js        ← project/case-study data
│   ├── services/
│   │   └── ai.js                 ← Gemini API wrapper
│   └── index.css                 ← CSS variables + global styles
├── public/                       ← static assets
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## Coding Conventions

### General

- Use **functional React components** with hooks; no class components.
- Prefer **named exports** for components; use default export only for pages.
- Keep page-level sections in `App.jsx`; extract reusable UI pieces to `SuperpositionComponents.jsx`.
- Data that drives UI (projects, services, case studies) lives in its own data file (e.g. `caseStudiesData.js`).

### Styling

- Use **Tailwind utility classes** for all styling.
- Rely on the **semantic CSS variables** defined in `src/index.css` rather than hard-coded colours:
  - `--bg-main`, `--bg-surface` — page and card backgrounds
  - `--text-primary`, `--text-accent`, `--text-muted` — text hierarchy
  - `--brand-primary`, `--brand-accent` — accent colours (cyan / purple in dark mode, blue / yellow in light mode)
- The Tailwind config maps these to utility tokens like `bg-void`, `bg-surface`, `text-accent`, `text-primary`, `brand-primary`, `brand-accent`.
- Never hard-code `#00F0FF`, `#BF00FF`, `#174EA6`, etc. — always reference the semantic token.
- Dark mode is toggled via the `dark` class on `<html>` (`darkMode: 'class'` in Tailwind config).

### Animations

- Use **Framer Motion** for all declarative animations.
- Respect `useReducedMotion()` — always check reduced-motion preference before applying heavy animations.
- Reuse the shared variants defined at the top of `App.jsx` (`fadeInUp`, `staggerContainer`, etc.) rather than creating one-off variants.
- Wrap lazy-loaded components in `<Suspense>` with a suitable fallback.

### AI / API

- All Gemini API calls go through `src/services/ai.js`. Do not call the API directly from components.
- API keys must **never** be committed to source code; they are injected via environment variables.

---

## PR Review Checklist

When reviewing a pull request, check all of the following:

### Correctness
- [ ] Logic is correct and handles edge cases (empty arrays, null/undefined props, network errors).
- [ ] No accidental mutations of state or props.
- [ ] React hooks are called at the top level (no hooks inside conditions or loops).
- [ ] `useEffect` dependencies are complete and correct.

### Styling & Theming
- [ ] Only semantic Tailwind tokens / CSS variables are used — no hardcoded colour values.
- [ ] Both light and dark modes render correctly.
- [ ] Responsive breakpoints are covered (`sm`, `md`, `lg`).

### Performance
- [ ] Heavy components (3-D canvas, particle backgrounds) are lazy-loaded with `React.lazy`.
- [ ] `useCallback` / `useMemo` used where referential stability matters.
- [ ] Animations respect `useReducedMotion()`.

### Accessibility
- [ ] Interactive elements have accessible labels (`aria-label`, `aria-describedby`, etc.).
- [ ] Colour contrast meets WCAG AA.
- [ ] Keyboard navigation works for menus and modals.

### Security
- [ ] No API keys, secrets, or credentials in source code.
- [ ] User-supplied content is sanitised before rendering.
- [ ] External links use `rel="noopener noreferrer"`.

### Code Quality
- [ ] No `console.log` statements left in production code.
- [ ] New reusable UI primitives extracted to `SuperpositionComponents.jsx`.
- [ ] New data/content extracted to the appropriate data file.
- [ ] File is not growing excessively large — suggest splitting if `App.jsx` grows beyond ~800 lines per section.

---

## Refactoring Guidelines

When asked to refactor code in this repository:

1. **Extract reusable components** from `App.jsx` to `SuperpositionComponents.jsx` when a pattern appears more than twice.
2. **Replace hardcoded values** with semantic CSS variables or constants.
3. **Consolidate duplicate Framer Motion variants** into the shared `fadeInUp` / `staggerContainer` variants.
4. **Data-driven UI**: If a section renders a list from hardcoded JSX, convert it to a `data.js` file mapped over in JSX.
5. **Lazy-load heavy dependencies** (`@react-three/fiber`, heavy modals) with `React.lazy` + `Suspense`.
6. Preserve existing public API — do not rename exported component props without updating all call sites.

---

## Commit Message Format

```
<type>(<scope>): <short description>

Types: feat | fix | refactor | style | perf | docs | chore | test
Scope: app | components | styles | ai | data | ci
```

Examples:
- `feat(app): add dark/light theme toggle button`
- `fix(components): correct ParticleBackground canvas resize on mobile`
- `refactor(app): extract ServicesSection to SuperpositionComponents`
- `style(styles): replace hardcoded cyan hex with --brand-primary variable`
