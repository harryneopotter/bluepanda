import React from 'react';
import { User } from 'lucide-react';
import { FadeIn } from './SharedComponents';

const AboutPage = ({ navigate }) => (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-8">About</h1>
          <p className="text-xl text-gray-400 mb-16 leading-relaxed max-w-3xl">
            Blue Panda has been working with infrastructure and systems since 2013.
            The focus has evolved, but the core principle remains the same:
            systems should be understandable, stable, and designed for the long term.
          </p>

          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-mono text-cyan-500 tracking-widest uppercase mb-8">Philosophy</h2>
              <ul className="space-y-6">
                {[
                  "Proportion before complexity",
                  "Control over novelty",
                  "Stability before scale",
                  "Human responsibility in system design"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                     <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform" />
                     <span className="text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-mono text-cyan-500 tracking-widest uppercase mb-8">Founder</h2>
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded bg-white/5 border border-white/10 flex items-center justify-center text-gray-500">
                  <User className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Sachin</h3>
                  <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Lead Engineer</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Blue Panda is led by Sachin, with experience across traditional infrastructure, modern cloud systems, and applied AI.
                The work emphasizes judgment, restraint, and long-term thinking over rapid experimentation.
              </p>
            </div>
          </div>

          <div className="mt-32 p-12 bg-white/[0.02] border border-white/5 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-6">Let's build for the long term.</h3>
            <button
              onClick={() => navigate('contact')}
              className="px-10 py-4 border border-cyan-500/30 text-cyan-400 font-mono text-sm uppercase tracking-widest hover:bg-cyan-500/5 transition-all"
            >
              Get in touch
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );

  export default AboutPage;