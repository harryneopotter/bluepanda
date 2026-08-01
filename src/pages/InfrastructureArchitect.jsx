import { useState } from 'react';
import { Activity, Sparkles, Download, FileText, Lightbulb, Cpu, Shield, CheckCircle2 } from 'lucide-react';
import { ParticleBackground } from '../SuperpositionComponents';
import { PageWrapper, Section, FadeIn, Button } from '../components/shared';
import { AI } from '../services/ai';

const InfrastructureArchitect = () => {
  const [projectDesc, setProjectDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);
  const [depth, setDepth] = useState('auto');

  const handleGenerate = async () => {
    if (!projectDesc.trim()) return;
    setLoading(true);
    setPlan(null);
    const systemPrompt = `
      ## AI Architect — Blueprint Output Prompt (Drop-in)

      You are **Blue Panda AI Architect**. Your job is to produce a **high-signal infrastructure + implementation blueprint** from a messy, incomplete problem statement.

      ### Non-negotiables

      * **No marketing. No hype. No buzzword filler.**
      * **No “quantum”, “neural”, “teleport”, “autonomous agents”** (unless the user explicitly requests it).
      * **Do not assume the user is technical or non-technical.** Write as if the reader is smart but busy.
      * **Clarity + density > verbosity.**
      * **If details are missing, infer sensible defaults** and list them under “Assumptions”. Do **not** ask questions unless absolutely required.
      * **Never exceed what can be acted on.** If you mention a tool/service, explain *why* in one line.

      ### Output format (MUST follow exactly)

      Return valid Markdown with **exactly these 6 sections**, in this order, using the same headings:

      #### 1) PLAIN-ENGLISH SUMMARY

      * 4–6 bullets max.
      * Each bullet: **one sentence**, max 18 words.
      * End with: \`Outcome: <one-line outcome>\`

      #### 2) WHAT THIS MEANS FOR YOU

      Use exactly these subsections:

      * **Decisions you must make (now):** 3–5 bullets
      * **What I’m assuming:** 4–8 bullets (defaults allowed)
      * **Risks & tradeoffs:** 3–6 bullets (each includes mitigation in the same bullet)

      #### 3) RECOMMENDED ARCHITECTURE

      Use exactly this structure:

      * **Architecture at a glance:** 6–10 bullets (components + purpose)
      * **Data flow:** 5–8 bullets (request path)
      * **Storage & state:** bullets (what goes where)
      * **Deployment model:** bullets (container/serverless/VM, etc.)
      * **Cost posture:** one of: \`Lean\` / \`Balanced\` / \`Performance\`

      #### 4) SCALABILITY & GROWTH

      * **Scale triggers:** 3–6 bullets (what causes scaling)
      * **Scale plan:** 3 stages (\`Now\`, \`Next\`, \`Later\`) with 2–4 bullets each
      * **Observability minimum:** 4–6 bullets

      #### 5) SECURITY & RELIABILITY BASELINE

      Use exactly these subsections:

      * **Baseline controls:** 6–10 bullets
      * **Common failure modes:** 4–8 bullets (each includes detection + response)
      * **Backup & recovery:** RPO/RTO targets + 3–6 bullets

      #### 6) PRACTICAL APPROACH

      Use exactly this structure:

      * **Week 1 plan:** checklist (6–10 items)
      * **Week 2 plan:** checklist (6–10 items)
      * **Acceptance criteria:** 6–10 bullets (testable statements)
      * **Nice-to-have (optional):** 3–6 bullets only

      ### Hard limits

      * **No section may exceed 160 words**, except section 3 which may go up to 220 words.
      * Prefer bullets over paragraphs. Paragraphs allowed only in section 3, max 2 short paragraphs.

      ### Style rules

      * Use **simple English**, short sentences.
      * If you must use a technical term, follow it with a **plain one-liner**.
      * Use consistent labels: \`Assumption:\`, \`Risk:\`, \`Mitigation:\` where relevant.

      ### Input

      User problem statement:
      ${projectDesc}

      Depth mode:
      ${depth} where depth mode is one of: AUTO, OVERVIEW, DETAILED.

      ### Depth behavior

      * \`OVERVIEW\`: tighten bullets, prefer fewer items per subsection.
      * \`DETAILED\`: include fuller “Data flow” and “Failure modes” bullets, but still obey word limits.
      * \`AUTO\`: choose based on complexity; default to \`OVERVIEW\` unless multiple systems/integrations exist.
    `;
    const result = await AI.generateBlueprint(systemPrompt);
    setPlan(result);
    setLoading(false);
  };

  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
        <ParticleBackground />
        <Section className="relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/50 text-purple-300 text-sm font-bold mb-6 font-mono">
                <Sparkles className="w-4 h-4" /> POWERED BY GEMINI
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">ARCHITECT</span>
              </h1>
              <p className="text-xl text-gray-300 font-mono">The AI Architect is a thinking demonstration of how Blue Panda approaches system design.</p>
            </div>
            <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-purple-500/30 overflow-hidden glow-box-purple">
              <div className="p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500"></div>
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <label className="block text-sm font-bold text-purple-300 mb-2 font-mono uppercase">Describe the system, problem, or constraint</label>
                  <textarea value={projectDesc} onChange={(e) => setProjectDesc(e.target.value)} placeholder="Describe your project here..." className="w-full h-32 p-4 rounded-xl bg-black/50 border border-purple-500/30 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none font-mono mb-2" />
                  <div className="text-xs text-gray-500 font-mono space-y-1 mb-6">
                    <p className="font-bold text-purple-400">Try these examples:</p>
                    <button type="button" className="block text-left hover:text-white transition-colors" onClick={() => setProjectDesc("E-commerce site expecting 10K daily visitors with peaks during sales.")}>"E-commerce site expecting 10K daily visitors..."</button>
                    <button type="button" className="block text-left hover:text-white transition-colors" onClick={() => setProjectDesc("Internal RAG system for searching 50,000 PDF documents securely.")}>"Internal RAG system for searching 50,000 PDF documents..."</button>
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-bold text-purple-300 mb-2 font-mono uppercase">Analysis Depth</label>
                  <div className="flex gap-4">
                    {['overview', 'detailed', 'auto'].map((mode) => (
                      <button key={mode} onClick={() => setDepth(mode)}
                        className={`px-4 py-2 rounded-lg font-mono text-sm uppercase transition-all ${depth === mode ? 'bg-purple-600 text-white shadow-[0_0_15px_#BF00FF]' : 'bg-black/40 text-gray-400 hover:text-white border border-white/10'}`}>{mode}</button>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-400 italic mb-6">Do not submit passwords, API keys, private keys, personal data, or confidential client information. See the <a href="/privacy" className="text-purple-300 hover:text-white">Privacy Policy</a>.</p>
                <Button variant="gradient" onClick={handleGenerate} disabled={loading || !projectDesc.trim()} className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 border-none">
                  {loading ? <><Activity className="w-4 h-4 animate-spin" /> PROCESSING...</> : <><Sparkles className="w-4 h-4" /> GENERATE BLUEPRINT</>}
                </Button>
                {(plan || loading) && (
                  <div className="mt-12 border-t border-white/10 pt-8 animate-fade-in">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Blueprint Output</h3>
                      {plan && <button onClick={() => { const blob = new Blob([plan], { type: 'text/markdown' }); const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'blue-panda-blueprint.md'; a.click(); }} className="flex items-center gap-2 text-sm text-purple-400 hover:text-white"><Download className="w-4 h-4" /> Download .MD</button>}
                    </div>
                    {loading ? (
                      <div className="space-y-4 max-w-2xl mx-auto opacity-50">
                        <div className="h-4 bg-purple-900/30 rounded w-3/4 animate-pulse"></div>
                        <div className="h-4 bg-purple-900/30 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-purple-900/30 rounded w-5/6 animate-pulse"></div>
                      </div>
                    ) : (
                      <div className="prose prose-invert max-w-none">
                        {plan.split('###').map((section, index) => {
                          if (!section.trim()) return null;
                          const [title, ...content] = section.split('\n');
                          return (
                            <div key={index} className="mb-8 p-6 rounded-xl bg-black/30 border border-purple-500/20">
                              <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2 font-mono uppercase">{title}</h3>
                              <div className="text-white/90 leading-6 whitespace-pre-wrap font-sans text-lg">{content.join('\n').trim()}</div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </Section>
      </div>
    </PageWrapper>
  );
};

export default InfrastructureArchitect;
