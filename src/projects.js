export const projects = [
    {
        status: "live",
        title: "Nobius Content Bot — Self-Healing CMS via Telegram",
        description: "A Telegram bot that lets non-technical clients edit their website by texting. Paired with an auto-fixer bot that detects build failures and repairs them autonomously. Zero manual intervention.",
        tags: ["Node.js", "Telegram Bot", "GitHub API", "Netlify", "AI Auto-Repair"],
        type: "ai",
        metrics: [
            { label: "Editable Sections", value: "60+" },
            { label: "Deployments", value: "Self-Healing" }
        ],
        githubUrl: "https://github.com/harryneopotter/nobius-telegram-bot",
        buttons: ["CASE_STUDY", "SOURCE_CODE"]
    },
    {
        status: "live",
        title: "Almaha Foods — Frontend Deconstruction & Security Hardening",
        description: "Rebuilt a repeatedly compromised WordPress site into a secure, deterministic React frontend.",
        tags: ["React", "Security", "Deterministic"],
        type: "web",
        metrics: [
            { label: "Attack Surface", value: "Zero" },
            { label: "Stability", value: "100%" }
        ],
        liveUrl: "https://almahafoods.com",
        buttons: ["CASE_STUDY", "INITIATE_LINK"]
    },
    {
        status: "live",
        title: "Telegram CMS Website",
        description: "A mobile-first content management system built for a creative educator. Solves accessibility constraints by allowing full website management via a Telegram bot. Features auto-processing of PDFs and images, real-time lead generation, and runs on GCP free tier.",
        tags: ["Next.js 14", "Telegram Bot", "GCP Cloud Functions", "Firestore"],
        type: "web",
        metrics: [
            { label: "Accessibility", value: "Phone-First" },
            { label: "Cost", value: "-bash/mo" }
        ],
        liveUrl: "#", // Client project, hidden
        buttons: ["CASE_STUDY"]
    },
    {
        status: "live",
        title: "Remote Cloud Dashboard — Secure VM Orchestration",
        description: "A secure, low-friction platform for managing remote cloud infrastructure using Tailscale.",
        tags: ["Node.js", "Docker", "Tailscale", "GCP"],
        type: "cloud",
        metrics: [
            { label: "Control", value: "Centralized" },
            { label: "Access", value: "Secure SSH" }
        ],
        githubUrl: "#",
        buttons: ["CASE_STUDY", "SOURCE_CODE"]
    },
    {
        status: "development",
        title: "Smriti — AI Context Engine",
        description: "A tool for extracting and structuring project context for AI coding assistants.",
        tags: ["Python (AST)", "TypeScript", "Semantic Analysis", "Automation"],
        type: "ai",
        metrics: [
            { label: "Context", value: "Automated" },
            { label: "Cognitive Load", value: "Reduced" }
        ],
        githubUrl: "#",
        buttons: ["CASE_STUDY", "SOURCE_CODE"]
    },
    {
        status: "live",
        title: "PlaytimeFun",
        description: "Hyper-personalized AI entertainment app built to keep kids engaged. Features infinite AI-generated stories (text-to-speech) and coloring pages starring their favorite heroes. Built with React, Gemini API, and ElevenLabs.",
        tags: ["React", "Gemini API", "ElevenLabs", "Generative AI"],
        type: "web",
        metrics: [
            { label: "Engagement", value: "Infinite" },
            { label: "Content", value: "Personalized" }
        ],
        liveUrl: "#",
        buttons: ["CASE_STUDY", "INITIATE_LINK"]
    },
    {
        status: "development",
        title: "aicli",
        description: "An AI-powered command-line assistant that streamlines repetitive developer workflows, offering automated suggestions and acceleration for technical teams. Provides productivity boost for engineering teams with smart CLI.",
        tags: ["Python", "AI APIs", "CLI", "Automation"],
        type: "ai",
        metrics: [
            { label: "Productivity", value: "Boost" },
            { label: "Automation", value: "Rapid" }
        ],
        githubUrl: "#",
        buttons: ["CASE_STUDY", "SOURCE_CODE"]
    },
    {
        status: "live",
        title: "Codex-webui",
        description: "A robust, typed web interface for AI coding sessions. Born from the need to save context during connection drops. Features Markdown rendering, session persistence, and a clean grid-based UX. Fully rewritten in TypeScript.",
        tags: ["TypeScript", "WebSocket", "Markdown", "AI Coding"],
        type: "ai",
        metrics: [
            { label: "Reliability", value: "Persistent" },
            { label: "Architecture", value: "Modular" }
        ],
        liveUrl: "https://codex-webui-ts.hnpart.xyz",
        buttons: ["CASE_STUDY", "INITIATE_LINK"]
    },
    {
        status: "development",
        title: "PandaBanana",
        description: "A creative, web-based demo project for rapid prototyping and UI experimentation, showcasing innovative interactive concepts. Serves as a reference implementation for UI/UX design sprints.",
        tags: ["HTML", "CSS", "JavaScript", "Prototyping"],
        type: "web",
        metrics: [
            { label: "UI/UX", value: "Reference" },
            { label: "Prototyping", value: "Rapid" }
        ],
        githubUrl: "#",
        buttons: ["CASE_STUDY", "SOURCE_CODE"]
    },
    {
        status: "development",
        title: "Legacy Retail — Quotation Intelligence & Catalog Recovery",
        description: "A VLM-powered document extraction pipeline that transforms 491 historical PDFs into a queryable pricing memory. Features intelligent quotation MVP with autocomplete, last-sold price context, and full audit trails.",
        tags: ["FastAPI", "SQLite", "Sarvam AI Vision", "VLM", "OCR"],
        type: "ai",
        metrics: [
            { label: "Catalog Rows", value: "1,250+" },
            { label: "Time Savings", value: "40%" }
        ],
        buttons: ["CASE_STUDY"]
    },
    {
        status: "development",
        title: "WhatsApp Lead Management — Recovering Lost Ad Leads",
        description: "End-to-end lead management platform capturing 130+ daily WhatsApp leads from Meta/Google ads. Features 5-stage workflow, automated follow-ups, win/loss research, and real-time pipeline visibility to recover 80% of previously lost leads.",
        tags: ["FastAPI", "React", "TypeScript", "WhatsApp API", "SQLite"],
        type: "ai",
        metrics: [
            { label: "Daily Leads", value: "130+" },
            { label: "Recovery Rate", value: "50-60%" }
        ],
        buttons: ["CASE_STUDY"]
    }
];
