# Blue Panda — AI Architect

## Overview

The AI Architect is an interactive infrastructure planning tool powered by Google Gemini API. Describe your infrastructure needs in natural language, and receive a structured architectural blueprint.

## How It Works

1. **Describe your problem** — What are you trying to build? What constraints do you have? What's the scale?
2. **AI analysis** — The Gemini model analyzes your requirements against architectural best practices
3. **Blueprint output** — Receive a structured plan covering architecture, tech stack, deployment considerations, and operational runbook

## What It Can Help With

- Infrastructure architecture design
- Cloud migration planning
- Security architecture review
- Scaling strategy
- Technology stack recommendations
- Incident response planning

## Access

- **Web:** Visit `/architect` on bluepanda.in
- **Agent:** Request with `Accept: text/markdown`

## Technical Details

- Powered by Google Gemini 2.5 Flash via Netlify serverless function
- Endpoint: `POST /.netlify/functions/gemini` (internal API)
- Prompt is processed server-side — no client-side API key exposure

*For agents: This content is discoverable via `/.well-known/agent-skills/index.json`*
