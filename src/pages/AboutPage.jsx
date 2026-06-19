import { Suspense } from 'react';
import { ParticleBackground } from '../SuperpositionComponents';
import { PageWrapper, Section } from '../components/shared';

const AboutPage = () => (
  <PageWrapper>
    <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
      <Suspense fallback={<div className="three-fallback fixed inset-0 z-0" />}><ParticleBackground /></Suspense>
      <Section className="relative z-10 max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">THE HISTORY</h1>
        <div className="space-y-12 border-l border-cyan-500/20 ml-4 pl-8">
          <div className="relative group">
            <div className="absolute -left-[37px] w-4 h-4 bg-black border-2 border-cyan-500 rounded-full group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_#00F0FF] transition-all" />
            <span className="font-mono text-cyan-400 text-sm mb-2 block">2013 — 2018</span>
            <h3 className="text-2xl font-bold mb-4">Traditional Infrastructure</h3>
            <p className="text-gray-300 leading-relaxed text-lg">Web hosting, domain management, and website development. Building foundational relationships with clients who trusted us with their digital presence.</p>
          </div>
          <div className="relative group">
            <div className="absolute -left-[37px] w-4 h-4 bg-black border-2 border-purple-500 rounded-full group-hover:bg-purple-500 group-hover:shadow-[0_0_10px_#BF00FF] transition-all" />
            <span className="font-mono text-purple-400 text-sm mb-2 block">2018 — 2024</span>
            <h3 className="text-2xl font-bold mb-4">Expanding Capabilities</h3>
            <p className="text-gray-300 leading-relaxed text-lg">Server management, technical consulting, and infrastructure optimization. Growing alongside our clients' needs.</p>
          </div>
          <div className="relative group">
            <div className="absolute -left-[37px] w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#00F0FF] animate-pulse" />
            <span className="font-mono text-cyan-400 text-sm mb-2 block">2025+</span>
            <h3 className="text-2xl font-bold mb-4 text-white">Responsible Infrastructure</h3>
            <p className="text-gray-300 leading-relaxed text-lg">Blue Panda has worked on infrastructure and systems since 2013. The focus shifts with client needs, but the principle stays the same: systems should be understandable, stable, and designed for the long term.</p>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-white">OUR PHILOSOPHY</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-black/40 border border-white/10 rounded-xl"><p className="text-gray-300 font-mono">&gt; Proportion before complexity</p></div>
            <div className="p-6 bg-black/40 border border-white/10 rounded-xl"><p className="text-gray-300 font-mono">&gt; Control over novelty</p></div>
            <div className="p-6 bg-black/40 border border-white/10 rounded-xl"><p className="text-gray-300 font-mono">&gt; Stability before scale</p></div>
            <div className="p-6 bg-black/40 border border-white/10 rounded-xl"><p className="text-gray-300 font-mono">&gt; Human responsibility in system design</p></div>
          </div>
        </div>
      </Section>
    </div>
  </PageWrapper>
);

export default AboutPage;
