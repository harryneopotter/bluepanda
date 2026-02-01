export const caseStudiesData = {
    "Telegram CMS Website": {
        challenge: "Created for a creative educator with limited mobility who needed a phone-first way to manage website content without relying on traditional CMS or laptop workflows. Updating PDFs, images, and student work through conventional CMS would be difficult due to physical constraints.",
        solution: "Built a Telegram bot interface for content management - upload showcase content and receive contact leads using just a phone. Uses GCP serverless infrastructure for stability and fits within Always Free tier.",
        techStack: ["Next.js 14 (App Router)", "Telegram bot via GCP Cloud Functions", "Cloud Storage for PDFs & thumbnails", "Firestore for content metadata", "Cloud Run (frontend + bot backend)", "Telegram alerts for monitoring"],
        keyFeatures: [
            "Phone-first content uploads via Telegram",
            "Auto-processing & publishing of files and metadata",
            "Real-time leads via contact form to Telegram",
            "Redundancy-aware notifications"
        ],
        impact: "Removes friction for users with mobility constraints, enables independent website management. Built to serve, not scale - focused on accessibility, simplicity, and dignity over features.",
        githubUrl: "https://github.com/harryneopotter/telegram-cms-website-public"
    },
    "Almaha Foods — Frontend Deconstruction & Security Hardening": {
        challenge: "Context: a simple marketing site with recurring compromises. Constraint: keep the exact visual design while removing the attack surface.",
        solution: "What was done: rebuilt as a deterministic React frontend and removed WordPress from the public surface. Static delivery and a locked-down pipeline replaced plugin-driven runtime behavior.",
        techStack: ["React", "Security Hardening", "Deterministic Frontend"],
        keyFeatures: [
            "Deterministic React frontend (no runtime CMS execution)",
            "Complete removal of WordPress and plugin attack surface",
            "Static asset delivery with controlled deployment pipeline",
            "Design parity with original site (no visual regression)",
            "Simplified hosting and monitoring model"
        ],
        impact: "Outcome: repeated incidents stopped and the site became stable, predictable, and low-maintenance without a redesign.",
        liveUrl: "https://bhaiyaji.co.in"
    },
    "Remote Cloud Dashboard — Secure VM Orchestration": {
        challenge: "Need for efficient remote monitoring and management of Google Cloud Platform resources without constant manual checking.",
        solution: "Built a comprehensive dashboard for real-time GCP resource monitoring and management with automated alerts and insights.",
        techStack: ["React", "GCP APIs", "Cloud Functions", "Real-time monitoring"],
        keyFeatures: [
            "Real-time resource monitoring",
            "Automated alerts and notifications",
            "Cost tracking and optimization",
            "Multi-project management"
        ],
        impact: "Streamlined GCP resource management, reduced manual monitoring time, improved cost visibility.",
        githubUrl: "https://github.com/harryneopotter/gcp-remote-dashboard"
    },
    "Smriti — AI Context Engine": {
        challenge: "Frustration with repeatedly providing project context to AI assistants across different tools. Context is a commodity - every new AI chat session requires re-pasting file trees, dependencies, and project structure. Different tools (Copilot, Cursor, Windsurf) each want context in their own format.",
        solution: "Automated context generation and management system that walks repos, generates structured context files, and auto-initializes for different AI tools. Evolved through 4 versions from basic script to semantic AST analysis.",
        techStack: ["Python (ast parsing)", "TypeScript (ts-morph for semantic analysis)", "SHA256 hashing for change detection", "AST parsing for semantic layer"],
        keyFeatures: [
            "Automatic repo scanning (skips node_modules, venv, .git)",
            "Multi-tool auto-initialization",
            "Hash-based change detection",
            "Diff tracking (added/removed/modified)",
            "Semantic AST analysis",
            "CI/CD integration friendly",
            "Metrics logging"
        ],
        impact: "Eliminates context re-entry, enables AI models to understand project structure without hallucinating, reduces token costs in CI. Stops 'where is file X?' friction. Turns noisy file dumps into actionable diffs and semantic summaries.",
        githubUrl: "https://github.com/harryneopotter/Smriti",
        status: "In Development"
    },
    "PlaytimeFun": {
        challenge: "Developer needed uninterrupted coding time during family visit with high-energy niece and nephew (ages 7 and 11). Kids are bored during holiday weekend, adults expect 'Cool Developer Uncle' to provide entertainment, but developer wants to code.",
        solution: "Built a hyper-personalized, culturally resonant app specifically for the kids to keep them engaged. Features AI-generated stories with their favorite heroes (Spider-Man, Luffy, Harry Potter) in culturally appropriate 'Hinglish' (Hindi-English mix).",
        techStack: ["React & Vite", "Google Gemini API (for story generation)", "ElevenLabs TTS (text-to-speech)"],
        keyFeatures: [
            "Hyper-personalized content featuring kids' favorite heroes",
            "Culturally resonant 'Hinglish' storytelling",
            "Infinitely replayable AI-generated stories",
            "AI-generated coloring pages",
            "Text-to-speech story narration",
            "Digital piano feature"
        ],
        impact: "Kids were mesmerized for 2 full days, developer got uninterrupted coding peace, parents were impressed. Monument to code solving human problems. Build it specifically for the audience - personalized, culturally appropriate, and infinitely engaging using generative AI.",
        githubUrl: "https://github.com/harryneopotter/PlaytimeFun"
    },
    "aicli": {
        challenge: "Need for efficient command-line interface for AI interactions and automation tasks.",
        solution: "Built a powerful CLI tool for AI-powered development workflows with seamless integration into existing development processes.",
        techStack: ["Python", "AI APIs", "CLI frameworks"],
        keyFeatures: [
            "Command-line AI interactions",
            "Workflow automation",
            "Integration with development tools",
            "Customizable commands"
        ],
        impact: "Streamlined AI-powered development workflows, improved developer productivity.",
        githubUrl: "https://github.com/harryneopotter/aicli"
    },
    "Codex-webui": {
        challenge: "Cloud server session went berserk - Codex CLI mangled terminal output, context lost on connection drop. Terminal-based AI coding assistant created unreadable output, lost all context when connection dropped.",
        solution: "Browser-based UI for clean, persistent AI coding sessions. Evolved from desperate survival tool (V1: vanilla JS) to production-ready TypeScript application (V2) after Reddit comment triggered full architectural upgrade.",
        techStack: ["TypeScript (fully typed)", "Modular architecture", "WebSocket for real-time streaming", "Markdown rendering 2.0", "Grid-based UX"],
        keyFeatures: [
            "Fully typed codebase (no 'any')",
            "Modular architecture",
            "Model switching UI",
            "Export/import chat sessions",
            "Markdown rendering",
            "Clean grid-based UX",
            "Session persistence",
            "Production-ready structure"
        ],
        impact: "Turned developer rage into usable product. Good tools don't come from planning - they come from pain and refusing to repeat it. Journey from desperate fix to typed, structured, maintainable product.",
        githubUrl: "https://github.com/harryneopotter/Codex-webui",
        liveUrl: "https://codex-webui-ts.hnpart.xyz"
    },
    "PandaBanana": {
        challenge: "Need for efficient project management and collaboration tool tailored for development teams.",
        solution: "Built a comprehensive project management platform with AI-powered insights and automation.",
        techStack: ["Modern web stack", "AI integration", "Real-time collaboration"],
        keyFeatures: [
            "AI-powered project insights",
            "Real-time collaboration",
            "Automated workflows",
            "Team management"
        ],
        impact: "Improved team productivity and project visibility with AI-driven automation.",
        githubUrl: "https://github.com/harryneopotter/PandaBanana",
        liveUrl: "https://banana.bluepanda.cloud/"
    },
    "Nobius Content Bot — Self-Healing CMS via Telegram": {
        challenge: "Client needed to update website content regularly but every change required code editing, GitHub commits, and hoping the build wouldn't break. A headline change shouldn't need a developer. And when builds failed at 2 AM from a misplaced quote, manual intervention was required.",
        solution: "Built a two-bot ecosystem: a Content Bot that lets non-technical users edit 60+ website sections via Telegram conversation, and an Auto-Fixer Bot that detects build failures, analyzes errors with AI, and applies fixes autonomously. Zero code knowledge required, zero manual intervention needed.",
        techStack: ["Node.js 20.x", "Telegram Bot API", "GitHub API (Octokit)", "Netlify API", "AI-powered error analysis", "PM2"],
        keyFeatures: [
            "60+ editable content sections via Telegram commands",
            "Auto-commit to GitHub with real-time build monitoring",
            "AI-powered auto-fixer for build failures",
            "Multi-user support with role-based access",
            "Guardrails: max 50 lines changed, single file, 3 attempts max",
            "Self-healing deployment pipeline"
        ],
        impact: "Client's reaction: 'Fuck bro, this is INSANELY easy!' Website updates went from developer-dependent to fully autonomous. Build failures auto-repair in minutes. Developer sleeps through the night.",
        githubUrl: "https://github.com/harryneopotter/nobius-telegram-bot"
    }
};
