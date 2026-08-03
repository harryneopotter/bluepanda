# Blue Panda — Case Studies

Blue Panda case studies show practical work across infrastructure, security hardening, applied AI, automation, and custom engineering. Each project is approached proportionately: understand the failure mode, reduce unnecessary complexity, and leave an operable system.

## Nobius Content Bot — Self-Healing CMS via Telegram

**Challenge:** Website updates required developer involvement, and failed builds needed manual intervention.

**Approach:** A Telegram content bot lets non-technical users edit 60+ website sections. An auto-fixer bot monitors builds, analyzes failures with AI, and applies guardrailed repairs.

**Stack:** Node.js, Telegram Bot API, GitHub API, Netlify API, AI error analysis, PM2.

**Outcome:** Content updates became autonomous and build failures can be repaired in minutes. [Live site](https://nobius.audio).

## Almaha Foods — Frontend Deconstruction and Security Hardening

**Challenge:** A simple marketing site was repeatedly compromised through its WordPress runtime.

**Approach:** Rebuilt the site as a deterministic React frontend, removed WordPress and its plugin attack surface, and retained the visual design.

**Outcome:** Repeated incidents stopped and the site became stable and low-maintenance. [Live site](https://almahafoods.com).

## Telegram CMS Website

**Challenge:** A creative educator needed to manage PDFs, images, student work, and leads from a phone because conventional CMS workflows were difficult.

**Approach:** Built Telegram-based content uploads, automatic processing and publishing, contact-lead notifications, and monitoring on GCP serverless infrastructure.

**Stack:** Next.js, Telegram, GCP Cloud Functions, Cloud Storage, Firestore, Cloud Run.

**Outcome:** Independent phone-first website management focused on accessibility and simplicity. [Public source](https://github.com/harryneopotter/telegram-cms-website-public).

## Remote Cloud Dashboard — Secure VM Orchestration

**Challenge:** GCP resources needed centralized monitoring and management without constant manual checking.

**Approach:** Built a dashboard for real-time resource monitoring, alerts, cost tracking, and multi-project management using secure remote access.

**Stack:** React, GCP APIs, Cloud Functions, Docker, Tailscale.

**Outcome:** Improved infrastructure visibility and reduced manual monitoring. [Source](https://github.com/harryneopotter/gcp-remote-dashboard).

## Smriti — AI Context Engine

**Challenge:** AI coding sessions repeatedly required project trees, dependencies, and structure to be pasted into different tools.

**Approach:** Automated repository scanning, context generation, multi-tool initialization, SHA256 change detection, diff tracking, and semantic AST analysis.

**Stack:** Python AST parsing, TypeScript, ts-morph, SHA256.

**Outcome:** Less context re-entry and lower friction for AI-assisted development. [Source](https://github.com/harryneopotter/Smriti).

## PlaytimeFun

**Challenge:** Children needed engaging, replayable entertainment while the developer worked.

**Approach:** Created personalized AI stories in culturally resonant Hinglish, coloring pages, narration, and a digital piano.

**Stack:** React, Vite, Google Gemini, ElevenLabs.

**Outcome:** A deliberately specific, personalized generative-AI experience. [Source](https://github.com/harryneopotter/PlaytimeFun).

## aicli

An AI-powered Python CLI for developer workflows, AI API integration, and automation. [Source](https://github.com/harryneopotter/aicli).

## Codex-webui

**Challenge:** Terminal sessions could lose context and produce unreadable output during connection drops.

**Approach:** Built a typed browser interface with persistent sessions, model switching, WebSocket streaming, markdown rendering, and chat export/import.

**Stack:** TypeScript, WebSocket, modular browser architecture.

**Outcome:** A usable, maintainable interface for persistent AI coding sessions. [Live site](https://codex-webui-ts.hnpart.xyz) · [Source](https://github.com/harryneopotter/Codex-webui).

## PandaBanana

A creative web-based project for rapid prototyping and UI experimentation, with collaborative and AI-assisted concepts. [Live demo](https://banana.bluepanda.cloud/) · [Source](https://github.com/harryneopotter/PandaBanana).

## Legacy Retail — Quotation Intelligence and Catalog Recovery

**Challenge:** A long-running retail business had decades of invoices and purchase records scattered across PDFs and spreadsheets, making quotations slow and error-prone.

**Approach:** Built a Classify → Extract → Verify → Merge pipeline with VLM extraction, provenance, product autocomplete, last-sold pricing, GST calculation, and PDF generation.

**Outcome:** 1,250+ catalog rows cleaned from 491 PDFs and quotation assembly time reduced by over 40%. Production data remains frozen pending approval.

## WhatsApp Lead Management — Recovering Lost Ad Leads

**Challenge:** A team receiving roughly 130 daily WhatsApp leads could follow up on only a fraction, with no systematic pipeline or loss analysis.

**Approach:** Built webhook ingestion, a five-stage workflow, timed follow-ups, win/loss research, role-based dashboards, and audit logs.

**Outcome:** Projected recovery of 50–60% of previously lost leads and response time reduced from hours to under 30 seconds.

For the interactive project pages, visit `/case-studies` on the website. This document is discoverable through `/.well-known/agent-skills/index.json`.
