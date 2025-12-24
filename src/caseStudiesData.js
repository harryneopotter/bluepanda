import { Globe, Brain, Cloud } from 'lucide-react';

export const caseStudiesData = [
  {
    id: "almaha-foods",
    title: "Almaha Foods — Frontend Deconstruction & Security Hardening",
    category: "Infrastructure / Security",
    icon: Globe,
    context: "A repeatedly compromised WordPress website with growing instability and security risk.",
    problem: "Bloated frontend, expanding attack surface, and unreliable behavior under maintenance and updates.",
    approach: [
      "Rebuilt frontend using a deterministic React architecture",
      "Eliminated unnecessary dynamic surfaces",
      "Preserved pixel-level visual fidelity while simplifying internals"
    ],
    outcome: "Improved stability, reduced attack surface, and a maintainable long-term frontend."
  },
  {
    id: "smriti",
    title: "Smriti — AI Context Engine",
    category: "Applied AI",
    icon: Brain,
    context: "AI-assisted coding workflows suffer from context loss and repeated explanation.",
    problem: "Developers repeatedly reconstruct project context for tools and assistants.",
    approach: [
      "Extract and structure project context",
      "Persist meaningful technical state",
      "Feed context into AI tools deterministically"
    ],
    outcome: "Reduced repetition, lower cognitive overhead, and more reliable AI-assisted development."
  },
  {
    id: "remote-cloud",
    title: "Remote Cloud Dashboard — Secure VM Orchestration",
    category: "Cloud / DevOps",
    icon: Cloud,
    context: "Managing cloud infrastructure securely without exposing control surfaces.",
    problem: "Traditional dashboards increase attack surface and operational noise.",
    approach: [
      "Secure control plane using private networking",
      "Centralized orchestration and monitoring",
      "Minimal exposed interfaces"
    ],
    outcome: "Clear, secure infrastructure control without unnecessary complexity."
  }
];
