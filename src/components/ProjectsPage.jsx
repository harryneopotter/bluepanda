import React from 'react';
import { FadeIn } from './SharedComponents';

const ProjectsPage = ({ onOpenCaseStudy }) => (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
              <p className="text-xl text-gray-400 max-w-2xl font-light">
                Real-world examples of infrastructure stewardship and applied AI.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Almaha Foods — Frontend Deconstruction & Security Hardening",
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
                title: "Smriti — AI Context Engine",
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
                title: "Remote Cloud Dashboard — Secure VM Orchestration",
                context: "Managing cloud infrastructure securely without exposing control surfaces.",
                problem: "Traditional dashboards increase attack surface and operational noise.",
                approach: [
                  "Secure control plane using private networking",
                  "Centralized orchestration and monitoring",
                  "Minimal exposed interfaces"
                ],
                outcome: "Clear, secure infrastructure control without unnecessary complexity."
              }
            ].map((project, i) => (
              <div key={i} className="flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all group">
                <div className="p-8 flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-6 text-white leading-tight">{project.title}</h3>

                  <div className="space-y-6 flex-grow">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-500/60 block mb-2">Context</span>
                      <p className="text-sm text-gray-400">{project.context}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-red-400/60 block mb-2">Problem</span>
                      <p className="text-sm text-gray-400">{project.problem}</p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400/60 block mb-2">Approach</span>
                      <ul className="text-xs text-gray-500 space-y-2">
                        {project.approach.map((step, si) => (
                          <li key={si} className="flex gap-2">
                            <span className="text-purple-500/40">•</span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-green-400/60 block mb-2">Outcome</span>
                    <p className="text-sm text-gray-300 font-medium">{project.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );

  export default ProjectsPage;