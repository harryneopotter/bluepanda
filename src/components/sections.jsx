import { motion } from 'framer-motion';
import { FileText, Github, ExternalLink, X } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../projects';
import { caseStudiesData } from '../caseStudiesData';
import { slugify } from '../utils/slugify';
import { Button, Section } from './shared';

export const PrinciplesSection = () => {
  const principles = [
    { q: "Why long-term focus matters", a: "Because systems that last reduce risk, cost, and cognitive overhead over time." },
    { q: "How AI is used responsibly", a: "AI is treated as a tool, not an authority. Control and understanding remain with humans." },
    { q: "When automation is avoided", a: "When it increases fragility, obscures failure modes, or removes necessary judgment." }
  ];

  return (
    <Section className="relative z-10 max-w-3xl">
      <h2 className="text-3xl font-bold mb-12 text-center font-mono text-purple-400">CORE_PRINCIPLES //</h2>
      <div className="space-y-6">
        {principles.map((p, i) => (
          <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
              <span className="text-cyan-500 font-mono">&gt;</span>
              {p.q}
            </h3>
            <p className="text-gray-300 pl-8 leading-relaxed">{p.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const testimonials = [
  { text: "I run my own software company and have used hosting services of so many branded vendors..but no one has ever delivered the services like bluepanda..thanks bluepanda and team for your support.", author: "Yogesh", role: "CEO" },
  { text: "Amazing hosting company. Far better than GoDaddy and any other hosting company I have used in 25 years of being on the internet and having my own websites.", author: "Darren", role: "Web Professional/Musician" }
];

export const TestimonialsSection = () => (
  <Section className="relative z-10">
    <h2 className="text-3xl font-bold mb-12 text-center font-mono text-cyan-400">CLIENT_TRANSMISSIONS //</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((t, i) => (
        <div key={i} className="p-8 rounded-2xl bg-black/40 border border-cyan-500/20 group hover:border-cyan-500/50 transition-colors">
          <p className="text-gray-300 text-lg mb-6 italic">{t.text}</p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-black">{t.author[0]}</div>
            <div>
              <h4 className="font-bold text-white">{t.author}</h4>
              <p className="text-sm text-cyan-400 font-mono">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export const FAQSection = () => {
  const faqs = [
    { q: "What makes resilient hosting different?", a: "Our infrastructure is built on containerized microservices optimized for high-throughput parallel processing and predictable operations." },
    { q: "Do you offer migration services?", a: "Yes. Our 'Q-Agent' can assist by scanning your existing infrastructure and proposing a migration plan, which our human architects then verify and execute." },
    { q: "Is my data secure with AI agents?", a: "Absolutely. We use local LLMs and private vector databases. Your data never leaves your isolated environment and is never used to train public models." }
  ];

  return (
    <Section className="relative z-10 max-w-3xl">
      <h2 className="text-3xl font-bold mb-12 text-center font-mono text-purple-400">SYSTEM_PROTOCOLS (FAQ)</h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
              <span className="text-cyan-500 font-mono">Q:</span> {faq.q}
            </h3>
            <p className="text-gray-300 pl-8 leading-relaxed">
              <span className="text-purple-500 font-mono font-bold mr-2">A:</span> {faq.a}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export const CaseStudyModal = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => slugify(p.title) === slug);
  if (!project) return null;
  const onClose = () => navigate('/case-studies');
  const caseStudy = caseStudiesData[project.title];

  if (!caseStudy) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
        <div className="relative w-full max-w-2xl bg-black border border-cyan-500/30 rounded-2xl p-8">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"><X className="w-6 h-6" /></button>
          <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-gray-300">Case study coming soon...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-cyan-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)]">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full"><X className="w-6 h-6" /></button>
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-mono">{tag}</span>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed">
            <div><h3 className="text-xl font-bold text-white mb-2">The Challenge</h3><p>{caseStudy.challenge}</p></div>
            <div><h3 className="text-xl font-bold text-white mb-2">The Solution</h3><p>{caseStudy.solution}</p></div>
            <div><h3 className="text-xl font-bold text-white mb-2">Key Features</h3><ul className="list-disc list-inside space-y-2">{caseStudy.keyFeatures.map((f, i) => <li key={i}>{f}</li>)}</ul></div>
            <div><h3 className="text-xl font-bold text-white mb-2">Impact</h3><p>{caseStudy.impact}</p></div>
          </div>
          <div className="space-y-6">
            {project.metrics && project.metrics.length > 0 && (
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-sm font-mono text-gray-400 mb-4 uppercase">Key Metrics</h4>
                {project.metrics.map((m, i) => (
                  <div key={i} className="mb-4"><div className="text-3xl font-bold text-cyan-400">{m.value}</div><div className="text-xs text-gray-500 uppercase">{m.label}</div></div>
                ))}
              </div>
            )}
            <div className="p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <h4 className="text-sm font-mono text-purple-300 mb-2 uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">{caseStudy.techStack.map(t => <span key={t} className="text-xs text-purple-200 bg-purple-500/20 px-2 py-1 rounded">{t}</span>)}</div>
            </div>
            {(caseStudy.githubUrl || caseStudy.liveUrl) && (
              <div className="p-6 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <h4 className="text-sm font-mono text-cyan-300 mb-3 uppercase">Links</h4>
                {caseStudy.githubUrl && <a href={caseStudy.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 mb-2"><Github className="w-4 h-4" /> View on GitHub</a>}
                {caseStudy.liveUrl && <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400"><ExternalLink className="w-4 h-4" /> {caseStudy.linkText || 'Live Website'}</a>}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-4 pt-8 border-t border-white/10">
          <Button variant="outline" onClick={onClose}>Close File</Button>
          <Button variant="primary" onClick={() => window.open('https://calendly.com/bluepandasolutions/30min', '_blank')}>Schedule Consultation</Button>
        </div>
      </div>
    </div>
  );
};
