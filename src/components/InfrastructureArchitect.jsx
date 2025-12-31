import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { FadeIn } from './SharedComponents';

  const CollapsibleSection = ({ title, children, isOpen, onToggle }) => (
    <div className="border border-white/10 rounded-lg">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 bg-white/[0.02] hover:bg-white/[0.03] transition-colors"
      >
        <h3 className="text-lg font-semibold text-cyan-400">{title}</h3>
        {isOpen ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="p-6 prose prose-invert prose-sm max-w-none">
          {children}
        </div>
      )}
    </div>
  );

const InfrastructureArchitect = () => {
    const [input, setInput] = useState('');
    const [depth, setDepth] = useState('auto');
    const [view, setView] = useState('guided');
    const [analyzing, setAnalyzing] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [openSections, setOpenSections] = useState({});

    const handleAnalyze = async () => {
        if (!input.trim()) return;
        setAnalyzing(true);
        setResult(null);
        setError(null);
        setOpenSections({});

        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        if (!apiKey) {
          setError("API key is missing. Please configure the VITE_GEMINI_API_KEY environment variable.");
          setAnalyzing(false);
          return;
        }

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;

        const prompt = `
          You are the AI Architect, a calm senior engineer who explains their thinking out loud with restraint and honesty. Your purpose is to demonstrate how BluePanda approaches messy, real-world problems and to help users articulate their challenges. You do not make assumptions about the user's intelligence or role. You are responsive to their desired output density.

          The user has provided the following problem description:
          "${input}"

          The user has selected the following response density: "${depth}".
          - If 'auto', you must infer the appropriate density from the query.
          - If 'overview', provide a clear, plain-English framing.
          - If 'detailed', provide direct, dense, technical output with minimal framing.

          You MUST structure your response in the following six sections, in this exact order, using Markdown for formatting. Use "###" for each section title. Do not add any other preamble or closing remarks.

          ### Plain-English Summary
          - What kind of system/problem this appears to be.
          - What is known vs. what needs confirmation.
          - No assumptions about simplicity, cost, or size unless stated by the user.

          ### What This Means for You
          - Practical implications.
          - Risks, tradeoffs, and next steps, written without jargon.

          ### Recommended Architecture / Approach
          - Technical details appropriate to the selected density.

          ### Scalability & Growth Considerations
          - How this architecture adapts over time.
          - Explicit acknowledgement of uncertainty where applicable.

          ### Security & Reliability Baseline
          - What is assumed as a minimum standard, not as a premium feature.

          ### How This Would Be Approached in Practice
          - Phased thinking for implementation.
          - Mention migration safety if relevant.
        `;

        const payload = {
          contents: [{ parts: [{ text: prompt }] }]
        };

        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });

          if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorBody.error.message}`);
          }

          const data = await response.json();
          const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

          if (textResponse) {
            const sections = textResponse.split('### ').slice(1).reduce((acc, section) => {
                const [title, ...content] = section.split('\n');
                acc[title.trim()] = content.join('\n').trim();
                return acc;
            }, {});
            setResult(sections);
            if (view === 'full') {
                const allOpen = Object.keys(sections).reduce((acc, title) => {
                    acc[title] = true;
                    return acc;
                }, {});
                setOpenSections(allOpen);
            } else {
                // In guided view, open the first two sections by default
                const firstTwoOpen = Object.keys(sections).slice(0, 2).reduce((acc, title) => {
                    acc[title] = true;
                    return acc;
                }, {});
                setOpenSections(firstTwoOpen);
            }
          } else {
            throw new Error("Received an empty response from the AI.");
          }

        } catch (err) {
          console.error(err);
          setError(`An error occurred while analyzing the request. Please check the console for details. Details: ${err.message}`);
        } finally {
          setAnalyzing(false);
        }
      };

      const toggleSection = (title) => {
        setOpenSections(prev => ({ ...prev, [title]: !prev[title] }));
      };

    return (
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">AI Architect</h1>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                The AI Architect is a reasoning tool that demonstrates how Blue Panda approaches system design.
                It is not a product and not a sales mechanism.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 mb-8">
              <div className="mb-6">
                <label htmlFor="problemStatement" className="block text-xs font-mono uppercase tracking-widest text-cyan-500/60 mb-3">System Context / Problem Statement</label>
                <textarea
                  id="problemStatement"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Describe the system, problem, or constraint you are working with. Technical precision is optional — clarity of intent is enough."
                  className="w-full h-40 bg-black/40 border border-white/10 rounded-lg p-4 text-gray-300 focus:border-cyan-500/50 outline-none transition-all resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex items-center gap-x-8 gap-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Depth:</span>
                    <div className="flex bg-black/60 p-1 rounded border border-white/5">
                      {['overview', 'detailed', 'auto'].map((d) => (
                        <button
                          key={d}
                          onClick={() => setDepth(d.toLowerCase())}
                          className={`px-4 py-1 text-[10px] font-mono uppercase tracking-widest transition-all rounded ${
                            depth === d.toLowerCase() ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-600 hover:text-gray-400'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">View:</span>
                  <div className="flex bg-black/60 p-1 rounded border border-white/5">
                    {['guided', 'full'].map((v) => (
                      <button
                        key={v}
                        onClick={() => setView(v)}
                        className={`px-4 py-1 text-[10px] font-mono uppercase tracking-widest transition-all rounded ${
                          view === v ? 'bg-purple-500/20 text-purple-400' : 'text-gray-600 hover:text-gray-400'
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={analyzing || !input.trim()}
                  className="px-8 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] hover:bg-cyan-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  {analyzing ? 'Reasoning...' : 'Initiate Analysis'}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-6 bg-red-500/[0.05] border border-red-500/20 rounded-xl text-red-400/80 font-mono text-sm">
                <h4 className="font-bold mb-2">Error</h4>
                <p>{error}</p>
              </div>
            )}

            {result && (
              <div className="animate-fade-in space-y-4">
                {Object.entries(result).map(([title, content]) => (
                    <CollapsibleSection
                        key={title}
                        title={title}
                        isOpen={!!openSections[title]}
                        onToggle={() => toggleSection(title)}
                    >
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                    </CollapsibleSection>
                ))}
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    );
  };

  export default InfrastructureArchitect;