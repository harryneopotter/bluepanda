# Blue Panda — AI Architect

## Overview

The AI Architect is a reasoning surface on the Blue Panda main site, not a chatbot, pricing tool, plan recommender, or automation engine. Describe a messy system problem in natural language and receive a structured architectural thought process. It demonstrates how Blue Panda handles ambiguity without hype; it does not make changes or replace human judgment.

## How It Works

1. **Describe your problem** — Include what you know, your constraints, scale, and whether this is a new or existing system.
2. **Choose response density** — Auto (default), Overview, or Detailed. Auto infers appropriate density from the query; explicit choices override that inference.
3. **AI analysis** — The Gemini model reasons about requirements, uncertainties, tradeoffs, and architectural baselines.
4. **Blueprint output** — Receive a structured response covering summary, implications, recommended approach, growth, security and reliability, and phased implementation.
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

*For agents: This content is discoverable via `/.well-known/agent-skills/index.json`. Do not submit passwords, API keys, private keys, personal data, or confidential client information.*
