import React from 'react';
import { FadeIn } from './SharedComponents';

const ServicesPage = () => (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Services</h1>
          <p className="text-xl text-gray-400 mb-16 leading-relaxed">
            Blue Panda works on systems that need to function reliably over time — not just launch successfully.
            The work spans infrastructure, applied AI, and engineering correction, depending on what the problem actually requires.
          </p>

          <div className="space-y-12">
            {[
              {
                title: "Cloud Infrastructure & DevOps",
                desc: "Designing and operating secure, resilient cloud systems with an emphasis on uptime, recoverability, and operational clarity. This includes server management, monitoring, security hardening, and long-term maintenance."
              },
              {
                title: "AI Integration & Automation",
                desc: "Integrating AI into existing systems and workflows in a controlled, privacy-first manner. Emphasis is placed on determinism, data sovereignty, and usefulness — avoiding black-box dependencies and unnecessary complexity."
              },
              {
                title: "Custom Development & Consulting",
                desc: "Solving long-term technical challenges through careful architecture, refactoring, migration, and system design. Technology choices are pragmatic and context-driven, not trend-led."
              }
            ].map((service, i) => (
              <div key={i} className="p-8 border border-white/5 bg-white/[0.02] rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 pt-20 border-t border-white/5">
            <h2 className="text-2xl font-mono text-white tracking-widest uppercase mb-12">Principles</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  q: "Why long-term focus matters",
                  a: "Because systems that last reduce risk, cost, and cognitive overhead over time."
                },
                {
                  q: "How AI is used responsibly",
                  a: "AI is treated as a tool, not an authority. Control and understanding remain with humans."
                },
                {
                  q: "When automation is avoided",
                  a: "When it increases fragility, obscures failure modes, or removes necessary judgment."
                }
              ].map((item, i) => (
                <div key={i}>
                  <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{item.q}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );

  export default ServicesPage;