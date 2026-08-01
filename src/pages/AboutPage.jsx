import { Suspense } from "react";
import { ParticleBackground } from "../SuperpositionComponents";
import { PageWrapper, Section } from "../components/shared";

const AboutPage = () => (
  <PageWrapper>
    <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
      <Suspense fallback={<div className="three-fallback fixed inset-0 z-0" />}><ParticleBackground /></Suspense>
      <Section className="relative z-10 max-w-5xl">
        <p className="font-mono text-cyan-400 text-sm mb-4">BLUE PANDA // SINCE 2013</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">ABOUT BLUE PANDA</h1>
        <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mb-16">Responsible infrastructure, applied AI, and system correction since 2013.</p>

        <div className="space-y-12 text-gray-300 leading-relaxed text-lg">
          <section>
            <h2 className="text-3xl font-bold text-white mb-5">It started with the work after delivery</h2>
            <p>Blue Panda began around 2004–05 building HTML sites for cafes, then grew through Joomla, Magento, WordPress, WooCommerce, and OpenCart as a straightforward freelance web development practice.</p>
            <p className="mt-5">Hosting was never the original plan. It became necessary because clients do not distinguish between a slow site and a throttled hosting account. They know the thing they paid for does not work, and they call the person who built it.</p>
            <p className="mt-5">By 2013, that responsibility had become a full-time operation, with dedicated sites launched for both hosting and web development. The standard was set early: infrastructure is part of the outcome, and if the result fails, it is our problem to fix.</p>
          </section>

          <section className="p-8 rounded-2xl bg-black/40 border border-cyan-500/20">
            <p className="font-mono text-cyan-400 text-sm mb-3">RESPONSIBLE OPERATOR //</p>
            <h2 className="text-3xl font-bold text-white mb-5">Sachin</h2>
            <p>Blue Panda is built and operated by Sachin, based in Delhi. Independently self-directed since the age of 17, he has roughly three decades of self-taught technical work behind him—from freelance web development and CMS platforms to hosting infrastructure and applied AI systems.</p>
            <p className="mt-5">The work today includes a public open-source portfolio, live agent-orchestration infrastructure, and multi-model review processes intended to keep solo-operator work honest.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-5">The philosophy: remove friction, keep judgment</h2>
            <p>Infrastructure and software work are often bottlenecked by coordination overhead rather than underlying difficulty. Meetings replace work, review cycles multiply, and decisions become diffused until no one owns them.</p>
            <p className="mt-5">Blue Panda is built around the opposite principle: one accountable operator, supported by AI agents that handle execution and cross-check output, can move quickly without removing the judgment that makes decisions sound.</p>
            <p className="mt-5">The hosting infrastructure, agent fleet, and review loops all exist to remove friction between a decision and its execution while keeping responsibility clear.</p>
          </section>

          <section className="p-8 rounded-2xl bg-black/40 border border-purple-500/20">
            <p className="font-mono text-purple-400 text-sm mb-3">A CASE STUDY, NOT A CLAIM //</p>
            <h2 className="text-3xl font-bold text-white mb-5">When the fix was a better-run server</h2>
            <p>An agency running a popular WordPress publication with multiple daily writers and 70,000–100,000 daily visitors faced repeated downtime despite a managed dedicated server costing more than $500 per month.</p>
            <p className="mt-5">The solution was not a larger server. A locally sourced bare-metal server was configured with CentminMod, memcached, a paid CDN, and lighter custom-coded functionality. The result was delivered as an all-inclusive $250 per month hosting package.</p>
            <p className="mt-5">The site then ran without downtime for years. The point was not the hardware; it was taking responsibility for the whole system.</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-5">What this means for you</h2>
            <p>If you work with Blue Panda, you are not routed through a support queue or a rotating cast of engineers. You get one accountable operator, backed by infrastructure and AI tooling built to make that accountability scale without adding unnecessary coordination.</p>
          </section>
        </div>
      </Section>
    </div>
  </PageWrapper>
);

export default AboutPage;
