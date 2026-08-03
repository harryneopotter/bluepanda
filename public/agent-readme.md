# Blue Panda — Responsible Infrastructure & Applied AI

Blue Panda Hosting and Designs is a Delhi-based, independently operated practice led by Sachin. It designs and maintains resilient infrastructure, applied systems, and custom engineering — focused on long-term stability, clarity, and reliability since 2013.

**Tagline:** Problem-solving, not service selling.

---

## Services

### Cloud Infrastructure & DevOps
Design and operate secure, resilient cloud systems with emphasis on uptime and recoverability. Includes server management, security hardening, monitoring, and long-term maintenance.

### AI Integration & Automation
Integrate AI into existing systems in a controlled, privacy-first way. Deterministic workflows, data sovereignty, and useful automation without black-box dependencies.

### Custom Development & Consulting
Careful architecture, legacy refactoring, system migration, and pragmatic design. Systems that stay understandable and maintainable over time.

---

## Case Studies

Blue Panda has delivered projects spanning infrastructure, AI, security, and automation:

- **Nobius Content Bot** — Self-healing CMS via Telegram. Non-technical users edit 60+ website sections by texting. Build failures auto-repair via AI.
- **Almaha Foods** — Security hardening. Removed WordPress attack surface, rebuilt as deterministic React frontend. Repeated compromises stopped.
- **WhatsApp Lead Management** — 130+ leads/day recovery pipeline. 5-stage workflow, automated follow-ups, win/loss research. 50-60% projected lead recovery.
- **Legacy Retail — Quotation Intelligence** — VLM-powered document extraction from 491 PDFs. 1,250+ catalog rows cleaned. 40% time savings on quotes.
- **Smriti AI Context Engine** — Automated project context generation for AI coding assistants. Multi-tool init, AST analysis, diff tracking.
- **Telegram CMS Website** — Phone-first content management for users with limited mobility. GCP free tier, auto-publishing.
- **Codex-webui** — Browser-based AI coding interface with persistent sessions, model switching, markdown rendering.
- **PlaytimeFun** — Hyper-personalized AI story generator for kids. Gemini + ElevenLabs. Infinite replayable stories.
- **Remote Cloud Dashboard** — Real-time GCP resource monitoring and management.
- And more.

Full details at `/case-studies`, including individual project URLs listed in the sitemap.

---

## AI Architect Demo

An interactive AI-powered infrastructure planning tool at `/architect`. Powered by Google Gemini API. Describe your infrastructure needs and receive a structured blueprint.

---

## Agent Discovery

### Link Headers (RFC 8288)
The homepage advertises agent discovery via:
```
Link: </.well-known/agent-skills/index.json>; rel="agent-skills"
```

### Agent Skills Index
`/.well-known/agent-skills/index.json` — JSON index of discoverable skills.

### Content Negotiation
Request any page with `Accept: text/markdown` to receive a markdown version. Browsers receive HTML as normal.

### WebMCP Tools
This site registers browser-based tools for AI agents via `navigator.modelContext.provideContext()`:
- `getCompanyInfo` — Company overview
- `getServices` — Service offerings
- `getContactInfo` — Contact details
- `generateBlueprint` — AI infrastructure blueprint generation

### DNS-AID Records
Published under `_index._agents.bluepanda.in` and `_a2a._agents.bluepanda.in` (SVCB with alpn + port).

---

## Content Standards

- **AI Training:** Not consented (`ai-train=no`)
- **Search Indexing:** Permitted (`search=yes`)
- **AI Input:** Not permitted (`ai-input=no`)
- See `robots.txt` for full Content-Signal declarations.

---

## Contact

- Email: `contact@bluepanda.in`
- GitHub: `https://github.com/harryneopotter`
- LinkedIn: `https://www.linkedin.com/in/sachin-sharma-533692b/`
- Contact form: `/contact`
