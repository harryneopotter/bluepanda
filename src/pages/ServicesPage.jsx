import { Suspense } from 'react';
import { Zap, Cpu, Server, CheckCircle2 } from 'lucide-react';
import { ParticleBackground } from '../SuperpositionComponents';
import { PageWrapper, Section } from '../components/shared';
import { PrinciplesSection, TestimonialsSection } from '../components/sections';

const ServicesPage = () => (
  <PageWrapper>
    <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
      <Suspense fallback={<div className="three-fallback fixed inset-0 z-0" />}><ParticleBackground /></Suspense>
      <Section className="relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">PROBLEM DOMAINS</span>
        </h1>
        <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Blue Panda works on systems that need to function reliably over time — not just launch successfully. The work spans infrastructure, applied AI, and engineering correction, depending on what the problem actually requires.
        </p>
        <div className="grid gap-12 mb-20">
          <div className="glass-panel p-8 rounded-2xl border border-cyan-500/30 glow-box-cyan flex flex-col md:flex-row gap-8 items-center">
            <div className="p-6 bg-cyan-500/10 rounded-full border border-cyan-500/50"><Zap className="w-12 h-12 text-cyan-400" /></div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-white">Cloud Infrastructure & DevOps</h2>
              <p className="text-gray-300 mb-6 text-lg">Problem: systems that are fragile or unclear under real-world load. Approach: design and operate secure, resilient cloud systems with emphasis on uptime and recoverability. Outcome: stable operations with clear ownership, monitoring, and maintenance.</p>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                <li className="flex items-center gap-2 text-sm font-mono text-cyan-300"><CheckCircle2 className="w-4 h-4" /> Server Management</li>
                <li className="flex items-center gap-2 text-sm font-mono text-cyan-300"><CheckCircle2 className="w-4 h-4" /> Security Hardening</li>
                <li className="flex items-center gap-2 text-sm font-mono text-cyan-300"><CheckCircle2 className="w-4 h-4" /> Monitoring</li>
                <li className="flex items-center gap-2 text-sm font-mono text-cyan-300"><CheckCircle2 className="w-4 h-4" /> Long-term Maintenance</li>
              </ul>
            </div>
          </div>
          <div className="glass-panel p-8 rounded-2xl border border-purple-500/30 glow-box-purple flex flex-col md:flex-row gap-8 items-center">
            <div className="p-6 bg-purple-500/10 rounded-full border border-purple-500/50"><Cpu className="w-12 h-12 text-purple-400" /></div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-white">AI Integration & Automation</h2>
              <p className="text-gray-300 mb-6 text-lg">Problem: AI added without control or clarity. Approach: integrate AI into existing systems in a controlled, privacy-first way. Outcome: deterministic workflows, data sovereignty, and useful automation without black-box dependencies.</p>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                <li className="flex items-center gap-2 text-sm font-mono text-purple-300"><CheckCircle2 className="w-4 h-4" /> Privacy-First</li>
                <li className="flex items-center gap-2 text-sm font-mono text-purple-300"><CheckCircle2 className="w-4 h-4" /> Data Sovereignty</li>
                <li className="flex items-center gap-2 text-sm font-mono text-purple-300"><CheckCircle2 className="w-4 h-4" /> Determinism</li>
                <li className="flex items-center gap-2 text-sm font-mono text-purple-300"><CheckCircle2 className="w-4 h-4" /> Controlled Workflows</li>
              </ul>
            </div>
          </div>
          <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-8 items-center">
            <div className="p-6 bg-white/5 rounded-full border border-white/20"><Server className="w-12 h-12 text-white" /></div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-white">Custom Development & Consulting</h2>
              <p className="text-gray-300 mb-6 text-lg">Problem: systems that are bloated, brittle, or hard to change. Approach: careful architecture, refactoring, migration, and system design. Outcome: pragmatic systems that stay understandable and maintainable over time.</p>
              <ul className="grid md:grid-cols-2 gap-4 mb-6">
                <li className="flex items-center gap-2 text-sm font-mono text-gray-300"><CheckCircle2 className="w-4 h-4" /> Careful Architecture</li>
                <li className="flex items-center gap-2 text-sm font-mono text-gray-300"><CheckCircle2 className="w-4 h-4" /> Legacy Refactoring</li>
                <li className="flex items-center gap-2 text-sm font-mono text-gray-300"><CheckCircle2 className="w-4 h-4" /> System Migration</li>
                <li className="flex items-center gap-2 text-sm font-mono text-gray-300"><CheckCircle2 className="w-4 h-4" /> Pragmatic Design</li>
              </ul>
            </div>
          </div>
        </div>
        <PrinciplesSection />
        <TestimonialsSection />
      </Section>
    </div>
  </PageWrapper>
);

export default ServicesPage;
