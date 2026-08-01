# Blue Panda Website

The Blue Panda website presents responsible infrastructure, applied systems, and careful engineering for the long term. It preserves the distinctive dark cyan/magenta visual identity while making the work and reasoning easier to understand.

## Current features

- React/Vite single-page site with client-side routes for Home, Services, Case Studies, About, Contact, and AI Architect.
- Lazy-loaded route pages with case-study detail URLs and modal presentation.
- Dark neon visual system, particle effects, holographic panda, responsive navigation, and reduced-motion support.
- AI Architect reasoning tool that sends the user’s blueprint prompt through a Netlify function to Google Gemini.
- Contact form backed by a Netlify function and SMTP delivery.
- Agent discovery resources under public/.well-known/agent-skills/, agent metadata, WebMCP registration, and Markdown content negotiation.

The AI Architect is a reasoning surface, not a chatbot, pricing tool, sales funnel, or replacement for human judgment. Its product direction is defined by ai-architect.md, which takes precedence over broader marketing or review suggestions.

## Tech stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Three.js / React Three Fiber
- Lucide React
- Netlify Functions and Edge Functions
- Google Gemini API

## Development

~~~bash
npm ci
npm run dev
npm run build
npm run preview
~~~

Netlify uses Node 20 and npm run build. The build generates public/sitemap.xml before creating the deployable dist/ directory.

## Environment variables

Secrets belong in the Netlify environment, not in client-side source files.

- GEMINI_API_KEY — server-side key for the AI Architect function.
- BREV_API_KEY — SMTP credential for the contact function.
- CONTACT_TO_EMAIL — optional contact destination.
- CONTACT_FROM_EMAIL — optional sender address.

## Project structure

~~~text
src/
├── App.jsx                         # Global shell, routes, and metadata
├── pages/                          # Lazy-loaded route pages
├── components/                     # Shared layout and page sections
├── SuperpositionComponents.jsx     # Visual and portfolio components
├── services/                       # AI and WebMCP integrations
├── projects.js                     # Portfolio data
└── caseStudiesData.js              # Case-study content
netlify/
├── functions/                      # Contact and Gemini endpoints
└── edge-functions/                 # Markdown negotiation
public/                             # Static assets and agent resources
~~~

## Documentation

- ai-architect.md — authoritative product direction for the AI Architect.
- bluepanda-website-review-codex-handoff.md — latest website review and implementation backlog.
- PROGRESS.md — historical task log. Entries record work completed at that time; later code may have changed or removed it.
- REVIEW.md and AGENT_READY_IMPLEMENTATION.md — earlier review and implementation notes; verify claims against current code before relying on them.

## Contact

For website enquiries, use the contact form or email the address configured for the deployment.
