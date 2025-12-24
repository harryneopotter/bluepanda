import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Server,
  Cpu,
  Shield,
  CheckCircle2,
  ArrowRight,
  Mail,
  Globe,
  Zap,
  Activity,
  Lock,
  Sparkles,
  Bot,
  Database,
  Cloud,
  Moon,
  Sun,
  Github,
  Code2,
  ExternalLink,
  User,
  FileText,
  Brain,
  History,
  Workflow,
  Search,
  ChevronRight
} from 'lucide-react';
import { ParticleBackground, GlitchText, PandaHologram } from './SuperpositionComponents';
import { caseStudiesData } from './caseStudiesData';

// --- API Helper ---
const generateGeminiResponse = async (prompt) => {
  const apiKey = "AIzaSyDNfBg9aNBaLUV-POjTgFKjK2HWUm86x4Y";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{ parts: [{ text: prompt }] }]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error('API Error');

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a plan right now.";
  } catch (error) {
    console.error(error);
    return "Error connecting to Q Panda Intelligence. Please try again.";
  }
};

// --- Loading Screen ---
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-cyan-400 font-mono">
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-cyan-400 shadow-[0_0_10px_#00F0FF] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-sm animate-pulse">
        INITIALIZING QUANTUM CORE :: {Math.min(100, Math.floor(progress))}%
      </div>
    </div>
  );
};

// --- Shared Components ---
const Section = ({ children, className = "" }) => (
  <section className={`max-w-7xl mx-auto px-6 py-20 ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0 }) => (
  <div className="animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

const Button = ({ children, variant = 'primary', className = "", ...props }) => {
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]",
    outline: "bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
    gradient: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:scale-105 shadow-lg"
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- Testimonials Section ---
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "I run my own software company and have used hosting services of so many branded vendors..but no one has ever delivered the services like bluepanda..thanks bluepanda and team for your support.",
      author: "Yogesh",
      role: "CEO",
      company: "Syndicated Technologies"
    },
    {
      text: "Amazing hosting company. Far better than GoDaddy and any other hosting company I have used in 25 years of being on the internet and having my own websites. So much so, that I have recommended their services to many of my current clients.",
      author: "Darren",
      role: "Web Professional/Musician",
      company: "SEO for Music"
    }
  ];

  return (
    <Section className="relative z-10">
      <h2 className="text-3xl font-bold mb-12 text-center font-mono text-cyan-400">CLIENT_TRANSMISSIONS //</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-8 rounded-2xl bg-black/40 border border-cyan-500/20 relative group hover:border-cyan-500/50 transition-colors">
            <div className="absolute -top-4 -left-4 text-6xl text-cyan-500/20 font-serif">"</div>
            <p className="text-gray-300 text-lg mb-6 italic relative z-10">{t.text}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-black">
                {t.author[0]}
              </div>
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
};

// --- FAQ Section ---
const FAQSection = () => {
  const faqs = [
    {
      q: "What makes 'Quantum-Ready' hosting different?",
      a: "Our infrastructure is built on containerized microservices that are optimized for high-throughput parallel processing, mimicking quantum superposition states for maximum efficiency."
    },
    {
      q: "Do you offer migration services?",
      a: "Yes. Our 'Q-Agent' can autonomously scan your existing infrastructure and propose a migration plan, which our human architects then verify and execute."
    },
    {
      q: "Is my data secure with AI agents?",
      a: "Absolutely. We use local LLMs and private vector databases. Your data never leaves your isolated environment and is never used to train public models."
    }
  ];

  return (
    <Section className="relative z-10 max-w-3xl">
      <h2 className="text-3xl font-bold mb-12 text-center font-mono text-purple-400">SYSTEM_PROTOCOLS (FAQ)</h2>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-3 flex items-start gap-3">
              <span className="text-cyan-500 font-mono">Q:</span>
              {faq.q}
            </h3>
            <p className="text-gray-300 pl-8 leading-relaxed">
              <span className="text-purple-500 font-mono font-bold mr-2">A:</span>
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- Case Study Modal ---
const CaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-black border border-white/10 rounded-2xl p-8 md:p-12 animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-12">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-4">
            <FileText className="w-4 h-4" /> Project Case Study
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-cyan-400/60 font-mono text-sm uppercase tracking-wider">{project.category}</p>
        </div>

        <div className="space-y-12">
          <section>
            <h3 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Context</h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.context}</p>
          </section>

          <section>
            <h3 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Problem</h3>
            <p className="text-gray-300 text-lg leading-relaxed font-light">{project.problem}</p>
          </section>

          <section>
            <h3 className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] mb-4">Approach</h3>
            <ul className="space-y-4">
              {project.approach.map((step, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 font-light">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500/50 flex-shrink-0" />
                  {step}
                </li>
              ))}
            </ul>
          </section>

          <section className="pt-8 border-t border-white/5">
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-[0.2em] mb-4">Outcome</h3>
            <p className="text-white text-lg leading-relaxed font-medium">{project.outcome}</p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex justify-end">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-mono tracking-widest uppercase transition-all rounded"
          >
            Close Record
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Pages ---

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
    <Section className="relative z-10 border-t border-white/5 pb-32">
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
  </div>
);

const ServicesPage = () => (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Services</h1>
        <p className="text-xl text-gray-400 mb-16 leading-relaxed">
          Blue Panda works on systems that need to function reliably over time — not just launch successfully. 
          The work spans infrastructure, applied AI, and engineering correction, depending on what the problem actually requires.
        </p>

        <div className="space-y-12">
          {[
            {
              title: "Cloud Infrastructure & DevOps",
              desc: "Designing and operating secure, resilient cloud systems with an emphasis on uptime, recoverability, and operational clarity. This includes server management, monitoring, security hardening, and long-term maintenance."
            },
            {
              title: "AI Integration & Automation",
              desc: "Integrating AI into existing systems and workflows in a controlled, privacy-first manner. Emphasis is placed on determinism, data sovereignty, and usefulness — avoiding black-box dependencies and unnecessary complexity."
            },
            {
              title: "Custom Development & Consulting",
              desc: "Solving long-term technical challenges through careful architecture, refactoring, migration, and system design. Technology choices are pragmatic and context-driven, not trend-led."
            }
          ].map((service, i) => (
            <div key={i} className="p-8 border border-white/5 bg-white/[0.02] rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-20 border-t border-white/5">
          <h2 className="text-2xl font-mono text-white tracking-widest uppercase mb-12">Principles</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                q: "Why long-term focus matters",
                a: "Because systems that last reduce risk, cost, and cognitive overhead over time."
              },
              {
                q: "How AI is used responsibly",
                a: "AI is treated as a tool, not an authority. Control and understanding remain with humans."
              },
              {
                q: "When automation is avoided",
                a: "When it increases fragility, obscures failure modes, or removes necessary judgment."
              }
            ].map((item, i) => (
              <div key={i}>
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{item.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </div>
);

const ProjectsPage = ({ onOpenCaseStudy }) => (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
              Real-world examples of infrastructure stewardship and applied AI.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Almaha Foods — Frontend Deconstruction & Security Hardening",
              context: "A repeatedly compromised WordPress website with growing instability and security risk.",
              problem: "Bloated frontend, expanding attack surface, and unreliable behavior under maintenance and updates.",
              approach: [
                "Rebuilt frontend using a deterministic React architecture",
                "Eliminated unnecessary dynamic surfaces",
                "Preserved pixel-level visual fidelity while simplifying internals"
              ],
              outcome: "Improved stability, reduced attack surface, and a maintainable long-term frontend."
            },
            {
              title: "Smriti — AI Context Engine",
              context: "AI-assisted coding workflows suffer from context loss and repeated explanation.",
              problem: "Developers repeatedly reconstruct project context for tools and assistants.",
              approach: [
                "Extract and structure project context",
                "Persist meaningful technical state",
                "Feed context into AI tools deterministically"
              ],
              outcome: "Reduced repetition, lower cognitive overhead, and more reliable AI-assisted development."
            },
            {
              title: "Remote Cloud Dashboard — Secure VM Orchestration",
              context: "Managing cloud infrastructure securely without exposing control surfaces.",
              problem: "Traditional dashboards increase attack surface and operational noise.",
              approach: [
                "Secure control plane using private networking",
                "Centralized orchestration and monitoring",
                "Minimal exposed interfaces"
              ],
              outcome: "Clear, secure infrastructure control without unnecessary complexity."
            }
          ].map((project, i) => (
            <div key={i} className="flex flex-col h-full bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all group">
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6 text-white leading-tight">{project.title}</h3>
                
                <div className="space-y-6 flex-grow">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-500/60 block mb-2">Context</span>
                    <p className="text-sm text-gray-400">{project.context}</p>
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-red-400/60 block mb-2">Problem</span>
                    <p className="text-sm text-gray-400">{project.problem}</p>
                  </div>
                  
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400/60 block mb-2">Approach</span>
                    <ul className="text-xs text-gray-500 space-y-2">
                      {project.approach.map((step, si) => (
                        <li key={si} className="flex gap-2">
                          <span className="text-purple-500/40">•</span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-green-400/60 block mb-2">Outcome</span>
                  <p className="text-sm text-gray-300 font-medium">{project.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </div>
);

// --- About Page ---
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

// --- Contact Page ---
const ContactPage = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-6">Contact</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              If you have a system, problem, or idea that needs careful thought rather than a quick pitch, feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-4">Email Access</h3>
                  <a href="mailto:sachin@bluepanda.in" className="text-2xl font-light text-white hover:text-cyan-400 transition-colors">
                    sachin@bluepanda.in
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xs font-mono text-cyan-500 tracking-widest uppercase mb-4">Operating Principle</h3>
                  <p className="text-gray-400 text-sm leading-relaxed italic">
                    "No required budgets. No forced timelines. Just technical clarity and long-term focus."
                  </p>
                </div>
              </div>
            </div>

            <div>
              {formState === 'success' ? (
                <div className="p-8 border border-green-500/20 bg-green-500/5 rounded-xl animate-fade-in">
                  <h4 className="text-green-400 font-bold mb-2">Message Received</h4>
                  <p className="text-green-500/60 text-sm font-mono">System will respond via email shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/[0.02] border border-white/10 rounded p-3 text-gray-300 focus:border-cyan-500/50 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-white/[0.02] border border-white/10 rounded p-3 text-gray-300 focus:border-cyan-500/50 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">Describe the problem or system</label>
                    <textarea 
                      className="w-full bg-white/[0.02] border border-white/10 rounded p-3 text-gray-300 focus:border-cyan-500/50 outline-none transition-all h-32 resize-none"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full py-4 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest hover:bg-cyan-500/20 transition-all disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Transmitting...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

const InfrastructureArchitect = () => {
  const [input, setInput] = useState('');
  const [depth, setDepth] = useState('auto');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = () => {
    if (!input.trim()) return;
    setAnalyzing(true);
    setResult(null);
    
    // Simulate architectural reasoning
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        reasoning: "Based on the provided constraints, the system requires a decoupled architecture focusing on data sovereignty and proportional scaling.",
        suggestions: [
          "Implement Tailscale-based private overlay for control plane security.",
          "Use deterministic state management for frontend synchronization.",
          "Adopt a 'security-by-default' stance by minimizing public surface area."
        ],
        assumptions: [
          "Uptime requirements exceed 99.9%",
          "Internal team possesses basic Linux proficiency",
          "Privacy is a non-negotiable constraint"
        ],
        tradeoffs: "Higher initial configuration overhead in exchange for significantly reduced long-term maintenance risk."
      });
    }, 2000);
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
              <label className="block text-xs font-mono uppercase tracking-widest text-cyan-500/60 mb-3">System Context / Problem Statement</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe the system, problem, or constraint you are working with. Technical precision is optional — clarity of intent is enough."
                className="w-full h-40 bg-black/40 border border-white/10 rounded-lg p-4 text-gray-300 focus:border-cyan-500/50 outline-none transition-all resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Depth Selector:</span>
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

              <button
                onClick={handleAnalyze}
                disabled={analyzing || !input.trim()}
                className="px-8 py-3 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-[0.2em] hover:bg-cyan-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                {analyzing ? 'Reasoning...' : 'Initiate Analysis'}
              </button>
            </div>
          </div>

          {result && (
            <div className="animate-fade-in space-y-8">
               <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                    <h4 className="text-xs font-mono text-white tracking-widest uppercase mb-4 opacity-50">Structured Reasoning</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{result.reasoning}</p>
                  </div>
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                    <h4 className="text-xs font-mono text-white tracking-widest uppercase mb-4 opacity-50">Explicit Assumptions</h4>
                    <ul className="space-y-2">
                      {result.assumptions.map((a, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-3">
                          <span className="text-cyan-500/40">•</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>
               
               <div className="p-8 border-l-2 border-cyan-500/20 bg-cyan-500/[0.02]">
                  <h4 className="text-xs font-mono text-cyan-400 tracking-widest uppercase mb-6">Architectural Suggestions</h4>
                  <div className="space-y-4">
                    {result.suggestions.map((s, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="w-6 h-6 rounded bg-cyan-500/10 flex items-center justify-center flex-shrink-0 text-[10px] text-cyan-400 font-mono">
                          0{i+1}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{s}</p>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl">
                  <h4 className="text-xs font-mono text-white tracking-widest uppercase mb-4 opacity-50">Trade-offs and Constraints</h4>
                  <p className="text-gray-400 text-sm leading-relaxed italic">"{result.tradeoffs}"</p>
               </div>
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  );
};


// --- Footer Component ---
const Footer = ({ navigate }) => (
  <footer className="relative z-10 border-t border-white/5 bg-void pt-20 pb-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="font-mono text-cyan-400 font-bold tracking-widest uppercase">Blue Panda</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Responsible infrastructure, applied AI, and system correction since 2013.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-mono text-white text-xs tracking-widest uppercase mb-6 opacity-50">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => navigate('services')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Services</button></li>
              <li><button onClick={() => navigate('projects')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Case Studies</button></li>
              <li><button onClick={() => navigate('architect')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AI Architect</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-white text-xs tracking-widest uppercase mb-6 opacity-50">Company</h4>
            <ul className="space-y-4">
              <li><button onClick={() => navigate('about')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About</button></li>
              <li><button onClick={() => navigate('contact')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</button></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-[10px] font-mono tracking-widest">
          © 2013-2025 BLUE PANDA HOSTING AND DESIGNS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-6">
          <a href="mailto:sachin@bluepanda.in" className="text-gray-600 hover:text-cyan-400 transition-colors font-mono text-[10px] tracking-widest uppercase">
            sachin@bluepanda.in
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// --- System Menu ---
const SystemMenu = ({ isOpen, onClose, navigate }) => {
  if (!isOpen) return null;

  const menuItems = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'projects', label: 'CASE STUDIES' },
    { id: 'architect', label: 'AI ARCHITECT' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="relative w-full max-w-md h-full bg-void border-l border-white/5 p-12 flex flex-col animate-slide-in-right">
        <div className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2 font-mono text-cyan-400 font-bold tracking-widest uppercase">
            System Access
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                navigate(item.id);
                onClose();
              }}
              className="text-left text-3xl font-bold text-gray-700 hover:text-cyan-400 transition-all duration-300 font-mono tracking-tighter"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5">
          <p className="text-gray-600 font-mono text-[10px] tracking-widest uppercase mb-4 text-center">
            Operating Since 2013
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
const App = () => {
  const [page, setPage] = useState('home');
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const navigate = (to) => {
    setPage(to);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Check for direct navigation or refresh
    const path = window.location.pathname.replace('/', '');
    if (path && ['home', 'services', 'projects', 'about', 'contact', 'architect'].includes(path)) {
      setPage(path);
    }
  }, []);

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;

  return (
    <div className="bg-void min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      <SystemMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navigate={navigate} />
      <CaseStudyModal project={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />

      {/* Global Header */}
      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-40 pointer-events-none">
        <div 
          className="flex items-center gap-2 pointer-events-auto cursor-pointer group" 
          onClick={() => navigate('home')} 
          role="button" 
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-ping" />
          <span className="font-mono text-white font-bold tracking-[0.3em] uppercase text-sm group-hover:text-cyan-400 transition-colors">
            Blue Panda
          </span>
        </div>
        
        <div className="flex items-center gap-6 pointer-events-auto">
          <nav className="hidden md:flex gap-8">
             {[
               { id: 'services', label: 'Services' },
               { id: 'projects', label: 'Case Studies' },
               { id: 'about', label: 'About' }
             ].map(link => (
               <button 
                 key={link.id}
                 onClick={() => navigate(link.id)}
                 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
               >
                 {link.label}
               </button>
             ))}
          </nav>
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 border border-white/10 rounded hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all group"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
          </button>
        </div>
      </header>

      <main className="animate-fade-in">
        {page === 'home' && <HomePage navigate={navigate} />}
        {page === 'services' && <ServicesPage />}
        {page === 'about' && <AboutPage navigate={navigate} />}
        {page === 'contact' && <ContactPage />}
        {page === 'architect' && <InfrastructureArchitect />}
        {page === 'projects' && <ProjectsPage onOpenCaseStudy={setSelectedCaseStudy} />}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;