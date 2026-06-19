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
    const systemPrompt = `...`; // Full prompt from original
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
