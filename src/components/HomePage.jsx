import React from 'react';
import {
  Cloud,
  Cpu,
  History,
  ChevronRight
} from 'lucide-react';
import { ParticleBackground, PandaHologram } from './SuperpositionComponents';
import { caseStudiesData } from '../caseStudiesData';
import TestimonialsSection from './TestimonialsSection';
import FAQSection from './FAQSection';
import { Section, FadeIn } from './SharedComponents';


const HomePage = ({ navigate }) => (
    <div className="relative min-h-screen bg-void text-white overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-32 pb-20 text-center px-4">
        <FadeIn delay={200}>
          <PandaHologram />
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-8 mb-4">
            <span className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase">
              Infrastructure Excellence Since 2013
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight max-w-4xl mx-auto leading-tight">
            Blue Panda — Responsible Infrastructure for the Long Term
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            We design resilient systems across infrastructure, applied AI,
            and custom engineering — focused on long-term stability,
            security, and clarity.
            <br /><br />
            <span className="text-cyan-400/80 italic">Problem-solving, not service selling.</span>
          </p>

          {/* Navigation Affordances */}
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { id: 'services', label: 'Services' },
              { id: 'projects', label: 'Case Studies' },
              { id: 'architect', label: 'AI Architect Demo' },
              { id: 'about', label: 'About' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => navigate(btn.id)}
                className="px-8 py-3 border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all duration-300 rounded text-sm font-mono tracking-widest uppercase group flex items-center gap-2"
              >
                {btn.label}
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* WHAT WE DO Section */}
      <Section className="relative z-10 border-t border-white/5">
        <FadeIn delay={600}>
          <div className="text-center mb-16">
            <h2 className="text-2xl font-mono text-white tracking-widest uppercase mb-4">What We Do</h2>
            <div className="w-24 h-px bg-cyan-500/50 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Infrastructure Stewardship",
                icon: <Cloud className="w-8 h-8 text-cyan-400" />,
                desc: "Designing, operating, and correcting infrastructure that must remain reliable under real-world conditions — across cloud platforms, servers, and long-running systems. The focus is durability, security, and proportional design, not novelty."
              },
              {
                title: "Applied AI Systems",
                icon: <Cpu className="w-8 h-8 text-purple-400" />,
                desc: "Building applied AI systems where control, privacy, and determinism matter more than experimentation. AI is embedded into real workflows to reduce cognitive load and operational friction — not to replace judgment."
              },
              {
                title: "System Correction & Engineering",
                icon: <History className="w-8 h-8 text-white" />,
                desc: "Taking responsibility for systems that have become fragile, bloated, or difficult to reason about. Restoring clarity and stability before introducing new complexity."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl bg-black/40 border border-white/10 hover:border-cyan-500/30 transition-all group">
                <div className="mb-6 p-4 rounded-lg bg-white/5 w-fit group-hover:bg-cyan-500/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <button onClick={() => navigate('projects')} className="text-xs font-mono text-cyan-400 hover:text-white transition-colors flex items-center gap-2">
                  VIEW CASE STUDY <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* PROJECT SUCCESS STORIES Section */}
      <Section className="relative z-10 border-t border-white/5">
        <FadeIn delay={800}>
          <div className="text-center mb-4">
            <h2 className="text-2xl font-mono text-white tracking-widest uppercase mb-4">Project Success Stories</h2>
          </div>
          <p className="text-center text-gray-400 text-sm mb-16 max-w-xl mx-auto italic font-light">
            "These are not demos. They are systems built to survive real-world constraints."
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudiesData.map((project, i) => (
              <div key={i} className="flex flex-col h-full">
                <div className="p-8 rounded-xl bg-white/5 border border-white/10 flex-grow hover:border-purple-500/30 transition-all group relative overflow-hidden">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="p-3 rounded bg-black/50 border border-white/5 group-hover:border-purple-500/20">
                      <project.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-4 text-white leading-tight">{project.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-8 line-clamp-3">{project.problem}</p>
                  <div className="mt-auto">
                    <button onClick={() => navigate('projects')} className="text-[10px] font-mono text-gray-500 hover:text-cyan-400 transition-colors flex items-center gap-2 tracking-[0.2em]">
                      VIEW CASE STUDY <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
      <TestimonialsSection />
      <FAQSection />
    </div>
  );

export default HomePage;