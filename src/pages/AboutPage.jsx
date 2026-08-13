import { Suspense } from 'react';
import { ParticleBackground } from '../SuperpositionComponents';
import { PageWrapper, Section } from '../components/shared';

const AboutPage = () => (
  <PageWrapper>
    <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
      <Suspense fallback={<div className="three-fallback fixed inset-0 z-0" />}><ParticleBackground /></Suspense>
      <Section className="relative z-10 max-w-5xl">
        <p className="font-mono text-cyan-400 text-sm mb-4">BLUE PANDA // SINCE 2013</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">ABOUT BLUE PANDA</h1>
        <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mb-16">Blue Panda helps people regain control of systems that have become fragile, manual, inaccessible, or difficult to reason about.</p>

        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-3xl font-bold text-white mb-5">The work after launch</h2>
            <p>Blue Panda began around 2004–05 building HTML sites for cafes, then grew through Joomla, Magento, WordPress, WooCommerce, and OpenCart as a straightforward freelance web development practice.</p>
            <p className="mt-5">Hosting was never the original plan. It became necessary because clients do not distinguish between a slow site and a throttled hosting account. They know the thing they paid for does not work, and they call the person who built it.</p>
            <p className="mt-5">By 2013, that responsibility had become a full-time operation. The standard was set early: infrastructure is part of the outcome, and if the result fails, it is our problem to fix.</p>
          </section>

          <section className="p-8 rounded-2xl bg-black/40 border border-cyan-500/20">
            <p className="font-mono text-cyan-400 text-sm mb-3">THE RECURRING PROBLEM //</p>
            <h2 className="text-3xl font-bold text-white mb-5">Systems drift away from the people using them</h2>
            <p>Over time, software and infrastructure collect friction. A CMS becomes a security liability. A team loses leads because there is no workable follow-up system. Historical documents become impossible to search. A user cannot manage a site because the workflow assumes access to a laptop. An AI tool forgets the context it needs every time a session starts.</p>
            <p className="mt-5">These are different technical problems, but the underlying failure is similar: the system no longer fits the reality around it.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-5">What the work has in common</h2>
            <p>Blue Panda restores control by reducing unnecessary dependencies, making important state visible, and designing around the actual people and constraints involved.</p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 rounded-xl border border-cyan-500/20 bg-cyan-500/5"><h3 className="text-xl font-bold text-white mb-3">Remove what creates risk</h3><p className="text-base">Almaha Foods moved from a repeatedly compromised WordPress runtime to a deterministic React frontend without changing the visual identity.</p></div>
              <div className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5"><h3 className="text-xl font-bold text-white mb-3">Make work usable</h3><p className="text-base">Telegram CMS gave a creative educator a phone-first way to manage content, while WhatsApp Lead Management gave a small team a visible workflow for leads they were losing.</p></div>
              <div className="p-6 rounded-xl border border-white/10 bg-white/5"><h3 className="text-xl font-bold text-white mb-3">Turn noise into working knowledge</h3><p className="text-base">Legacy Retail turned 491 historical PDFs into a verified pricing memory, while Smriti and Codex-webui reduce the context loss that makes AI-assisted work unreliable.</p></div>
            </div>
            <p className="mt-8">The answer is not always AI, a larger server, or a new platform. Sometimes it is removing a dependency. Sometimes it is adding verification, visibility, or a safer operational boundary. The solution should fit the actual failure.</p>
          </section>

          <section className="p-8 rounded-2xl bg-black/40 border border-purple-500/20">
            <p className="font-mono text-purple-400 text-sm mb-3">CURRENT FOCUS //</p>
            <h2 className="text-3xl font-bold text-white mb-5">Applied AI that stays accountable</h2>
            <p>The current work is increasingly focused on applied AI: systems that classify and verify messy documents, recover lost leads, preserve context for developers, repair routine deployment failures, and turn repetitive decisions into understandable workflows.</p>
            <p className="mt-5">The common requirement is not to add AI for its own sake. It is to make useful intelligence available inside an existing process, with clear boundaries, human review where it matters, and enough structure to understand what happened when something goes wrong.</p>
          </section>

          <section className="p-8 rounded-2xl bg-black/40 border border-cyan-500/20">
            <p className="font-mono text-cyan-400 text-sm mb-3">RESPONSIBLE OPERATOR //</p>
            <h2 className="text-3xl font-bold text-white mb-5">Sachin</h2>
            <p>Blue Panda is built and operated by Sachin, based in Delhi. Independently self-directed since the age of 17, he has roughly three decades of self-taught technical work behind him—from freelance web development and CMS platforms to hosting infrastructure and applied AI systems.</p>
            <p className="mt-5">The work is supported by automation and AI agents where they are useful, but the tools do not replace judgment. They handle execution, reduce coordination overhead, and cross-check output; one accountable operator remains responsible for the decisions and the result.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-5">Remove friction, keep judgment</h2>
            <p>Infrastructure and software work are often bottlenecked by coordination overhead rather than underlying difficulty. Blue Panda is built to shorten the distance between understanding a problem and making a sound change, without pretending that every problem has a simple answer.</p>
            <p className="mt-5">If a system is difficult to operate, difficult to trust, or difficult to change, that is the kind of problem Blue Panda is built for.</p>
          </section>
        </div>
      </Section>
    </div>
  </PageWrapper>
);

export default AboutPage;
