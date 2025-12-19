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

  // Get case study data for this project
  const caseStudy = caseStudiesData[project.title];

  // Fallback if no case study data exists
  if (!caseStudy) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
        <div className="relative w-full max-w-2xl bg-black border border-cyan-500/30 rounded-2xl p-8">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-2xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-gray-300">Case study coming soon...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black border border-cyan-500/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,240,255,0.2)] animate-scale-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-8">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm mb-2">
            <FileText className="w-4 h-4" /> CASE_STUDY_FILE
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-300 text-xs font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">The Challenge</h3>
              <p>{caseStudy.challenge}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">The Solution</h3>
              <p>{caseStudy.solution}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                {caseStudy.keyFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Impact</h3>
              <p>{caseStudy.impact}</p>
            </div>
          </div>
          <div className="space-y-6">
            {project.metrics && project.metrics.length > 0 && (
              <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-sm font-mono text-gray-400 mb-4 uppercase">Key Metrics</h4>
                <div className="space-y-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold text-cyan-400">{metric.value}</div>
                      <div className="text-xs text-gray-500 uppercase">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <h4 className="text-sm font-mono text-purple-300 mb-2 uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techStack.map(tech => (
                  <span key={tech} className="text-xs text-purple-200 bg-purple-500/20 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {(caseStudy.githubUrl || caseStudy.liveUrl) && (
              <div className="p-6 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <h4 className="text-sm font-mono text-cyan-300 mb-3 uppercase">Links</h4>
                <div className="space-y-2">
                  {caseStudy.githubUrl && (
                    <a
                      href={caseStudy.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  )}
                  {caseStudy.liveUrl && (
                    <a
                      href={caseStudy.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-8 border-t border-white/10">
          <Button variant="outline" onClick={onClose}>Close File</Button>
          <Button variant="primary" onClick={() => window.open('https://calendly.com/bluepanda/consultation', '_blank')}>
            Schedule Consultation
          </Button>
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
              desc: "Designing, operating, and correcting infrastructure that must remain reliable under real-world conditions — across cloud, servers, and long-running systems."
            },
            {
              title: "Applied AI Systems",
              icon: <Cpu className="w-8 h-8 text-purple-400" />,
              desc: "Building applied AI systems where control, privacy, and determinism matter more than novelty — embedding AI into real workflows to reduce cognitive load."
            },
            {
              title: "System Correction & Engineering",
              icon: <History className="w-8 h-8 text-white" />,
              desc: "Taking responsibility for existing systems that have become fragile, bloated, or hard to reason about — restoring proportionality before adding new complexity."
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
        <p className="text-center text-gray-400 text-sm mb-16 max-w-xl mx-auto">
          Real-world examples demonstrating our problem solving approach and technical expertise.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Almaha Foods — Frontend Deconstruction & Security Hardening",
              icon: <Globe className="w-8 h-8 text-cyan-400" />,
              desc: "Rebuilt a repeatedly compromised WordPress website into a deterministic React frontend, eliminating attack surface while preserving pixel-perfect visual fidelity."
            },
            {
              title: "Smriti — AI Context Engine",
              icon: <Brain className="w-8 h-8 text-purple-400" />,
              desc: "An internal tool designed to extract, structure, and persist project context for AI coding assistants — reducing repetition and cognitive overhead."
            },
            {
              title: "Remote Cloud Dashboard — Secure VM Orchestration",
              icon: <Cloud className="w-8 h-8 text-white" />,
              desc: "A secure, low-friction control layer for managing remote cloud infrastructure using Tailscale-based access and custom observability."
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col h-full">
              <div className="p-8 rounded-xl bg-white/5 border border-white/10 flex-grow hover:border-purple-500/30 transition-all group relative overflow-hidden">
                <div className="mb-6 flex items-start justify-between">
                  <div className="p-3 rounded bg-black/50 border border-white/5 group-hover:border-purple-500/20">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-4 text-white leading-tight">{item.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-8">{item.desc}</p>
                <div className="mt-auto">
                  <button onClick={() => navigate('projects')} className="text-[10px] font-mono text-gray-500 hover:text-cyan-400 transition-colors flex items-center gap-2 tracking-[0.2em]">
                    VIEW CASE STUDY <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                
                {item.title.includes("Smriti") && (
                   <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Brain className="w-40 h-40" />
                   </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  </div>
);

const ServicesPage = () => (
  <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
    <ParticleBackground />
    <Section className="relative z-10">
      <h1 className="text-5xl font-bold mb-12 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          CORE CAPABILITIES
        </span>
      </h1>

      <div className="grid gap-12 mb-20">
        {/* Service 1 */}
        <div className="glass-panel p-8 rounded-2xl border border-cyan-500/30 glow-box-cyan flex flex-col md:flex-row gap-8 items-center">
          <div className="p-6 bg-cyan-500/10 rounded-full border border-cyan-500/50">
            <Zap className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-white">Q Panda Cloud</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Next-generation hosting infrastructure that thinks for itself. Our autonomous agents monitor your applications 24/7, predicting traffic spikes and optimizing resources in real-time.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              <li className="flex items-center gap-2 text-sm font-mono text-cyan-300">
                <CheckCircle2 className="w-4 h-4" /> Predictive Auto-Scaling
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-cyan-300">
                <CheckCircle2 className="w-4 h-4" /> Self-Healing Containers
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-cyan-300">
                <CheckCircle2 className="w-4 h-4" /> AI-Driven Security Audits
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-cyan-300">
                <CheckCircle2 className="w-4 h-4" /> Zero-Downtime Deployments
              </li>
            </ul>
            <Button variant="outline" onClick={() => window.open('https://qpanda.cloud', '_blank')}>Explore Cloud Plans</Button>
          </div>
        </div>

        {/* Service 2 */}
        <div className="glass-panel p-8 rounded-2xl border border-purple-500/30 glow-box-purple flex flex-col md:flex-row gap-8 items-center">
          <div className="p-6 bg-purple-500/10 rounded-full border border-purple-500/50">
            <Cpu className="w-12 h-12 text-purple-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-white">AI Infrastructure</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Deploy private, secure AI models within your own infrastructure. We specialize in RAG (Retrieval-Augmented Generation) systems that keep your data sovereign.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              <li className="flex items-center gap-2 text-sm font-mono text-purple-300">
                <CheckCircle2 className="w-4 h-4" /> Local LLM Deployment
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-purple-300">
                <CheckCircle2 className="w-4 h-4" /> Private Vector Databases
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-purple-300">
                <CheckCircle2 className="w-4 h-4" /> Custom Agent Workflows
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-purple-300">
                <CheckCircle2 className="w-4 h-4" /> Enterprise Data Privacy
              </li>
            </ul>
            <Button variant="outline" onClick={() => window.open('https://bluepanda.cloud', '_blank')}>Consult AI Architect</Button>
          </div>
        </div>

        {/* Service 3 */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-8 items-center">
          <div className="p-6 bg-white/5 rounded-full border border-white/20">
            <Server className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-white">Traditional Web Services</h2>
            <p className="text-gray-300 mb-6 text-lg">
              The rock-solid foundation we've built our reputation on. Reliable, fast, and secure hosting for businesses that need stability above all else.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              <li className="flex items-center gap-2 text-sm font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4" /> Managed cPanel Hosting
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4" /> Domain Management
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4" /> Daily Off-site Backups
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4" /> 24/7 Human Support
              </li>
            </ul>
            <Button variant="outline" onClick={() => window.open('https://qpanda.online', '_blank')}>View Hosting Packages</Button>
          </div>
        </div>
      </div>

      <TestimonialsSection />
      <FAQSection />
    </Section>
  </div>
);

const ProjectsPage = ({ onOpenCaseStudy }) => (
  <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
    <ParticleBackground />
    <Section className="relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 border border-cyan-500/30 rounded-lg bg-cyan-500/10">
          <Database className="w-8 h-8 text-cyan-400" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">SYSTEM LOGS</h1>
          <p className="font-mono text-gray-400 text-sm">&gt; Accessing deployed infrastructure nodes...</p>
        </div>
      </div>

      {/* Constellation Graph */}
      <div className="mb-20">
        <ConstellationProjects />
      </div>

      {/* Detailed Project Grid */}
      <div>
        <div className="flex items-center gap-2 mb-8">
          <div className="w-1 h-6 bg-cyan-500" />
          <h2 className="text-2xl font-bold font-mono text-white">DETAILED_RECORDS //</h2>
        </div>
        <ProjectsGrid onProjectClick={onOpenCaseStudy} />
      </div>
    </Section>
  </div>
);

const AboutPage = () => (
  <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
    <ParticleBackground />
    <Section className="relative z-10 max-w-4xl">
      <h1 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
        THE EVOLUTION
      </h1>

      <div className="space-y-12 border-l border-cyan-500/20 ml-4 pl-8">
        <div className="relative group">
          <div className="absolute -left-[37px] w-4 h-4 bg-black border-2 border-cyan-500 rounded-full group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_#00F0FF] transition-all duration-300" />
          <span className="font-mono text-cyan-400 text-sm mb-2 block">2013 — 2018</span>
          <h3 className="text-2xl font-bold mb-4">Traditional Infrastructure</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Web hosting, domain management, and website development. Building foundational relationships with clients who trusted us with their digital presence.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -left-[37px] w-4 h-4 bg-black border-2 border-purple-500 rounded-full group-hover:bg-purple-500 group-hover:shadow-[0_0_10px_#BF00FF] transition-all duration-300" />
          <span className="font-mono text-purple-400 text-sm mb-2 block">2018 — 2024</span>
          <h3 className="text-2xl font-bold mb-4">Expanding Capabilities</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Server management, technical consulting, and infrastructure optimization. Growing alongside our clients' needs.
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -left-[37px] w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#00F0FF] animate-pulse" />
          <span className="font-mono text-cyan-400 text-sm mb-2 block">2025+</span>
          <h3 className="text-2xl font-bold mb-4 text-white">Quantum Leap</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Introducing Q Panda - our vision for AI-powered infrastructure. Not just hosting websites, but building systems that predict failures, optimize performance automatically, and provide intelligent support.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white">OUR PHILOSOPHY</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-gray-300 font-mono">&gt; Build systems that anticipate problems before they happen.</p>
          </div>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-gray-300 font-mono">&gt; Deploy infrastructure that adapts to needs automatically.</p>
          </div>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-gray-300 font-mono">&gt; Respect privacy - your data stays yours.</p>
          </div>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-gray-300 font-mono">&gt; Ship quality, not just features.</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white">THE TEAM</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl text-center group hover:border-cyan-500 transition-colors">
            <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full mb-4 overflow-hidden border-2 border-gray-700 group-hover:border-cyan-500">
              {/* Placeholder for team image */}
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">Sachin</h3>
            <p className="text-cyan-400 font-mono text-sm mb-2">Founder & Lead Architect</p>
            <p className="text-gray-300 text-sm">10+ years in infrastructure and DevOps.</p>
          </div>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl text-center group hover:border-purple-500 transition-colors">
            <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full mb-4 overflow-hidden border-2 border-gray-700 group-hover:border-purple-500">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <Bot className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">Q-Agent</h3>
            <p className="text-purple-400 font-mono text-sm mb-2">AI Operations</p>
            <p className="text-gray-300 text-sm">Automated monitoring and optimization.</p>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-void text-white pt-24 pb-32 px-4 flex items-center justify-center">
      <ParticleBackground />
      <div className="relative z-10 w-full max-w-2xl">
        <div className="glass-panel p-8 md:p-12 rounded-2xl border border-cyan-500/30 glow-box-cyan">
          <h1 className="text-4xl font-bold mb-8 text-center">INITIATE CONTACT</h1>

          <div className="mb-8 text-center">
            <p className="text-gray-300 mb-4">Whether you need traditional hosting, AI infrastructure, or just want to discuss what's possible with intelligent systems.</p>
            <a href="mailto:sachin@bluepanda.in" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-mono text-lg">
              <Mail className="w-5 h-5" /> sachin@bluepanda.in
            </a>
          </div>

          {formStatus === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-500 mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Transmission Received</h3>
              <p className="text-gray-300">We will establish a connection shortly.</p>
              <button
                onClick={() => setFormStatus('idle')}
                className="mt-8 text-cyan-400 hover:text-white font-mono text-sm underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-cyan-400 mb-2 uppercase">Your Name</label>
                  <input required type="text" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block font-mono text-xs text-cyan-400 mb-2 uppercase">Your Email</label>
                  <input required type="email" className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all" placeholder="Enter your email" />
                </div>
              </div>
              <div>
                <label className="block font-mono text-xs text-cyan-400 mb-2 uppercase">Project Details</label>
                <textarea required className="w-full bg-black/50 border border-white/10 rounded p-3 text-white h-32 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all resize-none" placeholder="Tell us about your project requirements, timeline, and budget..." />
              </div>
              <Button variant="primary" className="w-full justify-center" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? (
                  <span className="flex items-center gap-2"><Activity className="w-4 h-4 animate-spin" /> TRANSMITTING...</span>
                ) : (
                  <span className="flex items-center gap-2">SEND TRANSMISSION <ArrowRight className="w-4 h-4" /></span>
                )}
              </Button>
              <p className="text-xs text-gray-500 text-center mt-4">
                <Lock className="w-3 h-3 inline mr-1" />
                We respect your privacy. Your data is encrypted and never shared.
              </p>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-white/10 text-center font-mono text-sm text-gray-500">
            <p className="mb-4">Prefer to talk directly?</p>
            <Button variant="outline" className="mx-auto" onClick={() => window.open('https://calendly.com/bluepanda/consultation', '_blank')}>
              <Activity className="w-4 h-4" /> Schedule a Consultation
            </Button>
            <p className="mt-8">Blue Panda Hosting and Designs</p>
            <p>Operating since 2013</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfrastructureArchitect = () => {
  const [projectDesc, setProjectDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState(null);

  const handleGenerate = async () => {
    if (!projectDesc.trim()) return;
    setLoading(true);
    setPlan(null);

    const systemPrompt = `
      Act as "Q Panda Architect", a senior innovative DevOps engineer from Blue Panda Hosting. 
      Analyze the user's project description and provide a structured infrastructure plan.
      
      Format the response using Markdown.
      Use these headers: 
      ### 🏗 Recommended Tech Stack
      ### 🚀 Scalability Strategy
      ### 🛡 Security Measures
      ### 🐼 Blue Panda Solution
      
      Keep the tone professional, technical, yet encouraging.
      Project Description: ${projectDesc}
    `;

    const result = await generateGeminiResponse(systemPrompt);
    setPlan(result);
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
      <ParticleBackground />
      <Section className="relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/50 text-purple-300 text-sm font-bold mb-6 font-mono">
              <Sparkles className="w-4 h-4" /> POWERED BY GEMINI
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Q PANDA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">ARCHITECT</span>
            </h1>
            <p className="text-xl text-gray-300 font-mono">
              Describe your project parameters. AI will generate the optimal infrastructure blueprint.
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-purple-500/30 overflow-hidden glow-box-purple">
            <div className="p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500"></div>
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <label className="block text-sm font-bold text-purple-300 mb-2 font-mono uppercase">Project Parameters</label>
                <textarea
                  value={projectDesc}
                  onChange={(e) => setProjectDesc(e.target.value)}
                  placeholder="Describe your project here..."
                  className="w-full h-32 p-4 rounded-xl bg-black/50 border border-purple-500/30 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none font-mono mb-2"
                />
                <div className="text-xs text-gray-500 font-mono space-y-1">
                  <p className="font-bold text-purple-400">Try these examples:</p>
                  <p className="cursor-pointer hover:text-white transition-colors" onClick={() => setProjectDesc("E-commerce site expecting 10K daily visitors with peaks during sales.")}>"E-commerce site expecting 10K daily visitors..."</p>
                  <p className="cursor-pointer hover:text-white transition-colors" onClick={() => setProjectDesc("Internal RAG system for searching 50,000 PDF documents securely.")}>"Internal RAG system for searching 50,000 PDF documents..."</p>
                </div>
              </div>

              <Button
                variant="gradient"
                onClick={handleGenerate}
                disabled={loading || !projectDesc.trim()}
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 border-none"
              >
                {loading ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin" /> PROCESSING...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" /> GENERATE BLUEPRINT
                  </>
                )}
              </Button>

              {/* Result Area */}
              {(plan || loading) && (
                <div className="mt-12 border-t border-white/10 pt-8 animate-fade-in">
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
                            <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2 font-mono uppercase">
                              {title.includes('Stack') && <Database className="w-5 h-5" />}
                              {title.includes('Scalability') && <Activity className="w-5 h-5" />}
                              {title.includes('Security') && <Shield className="w-5 h-5" />}
                              {title.includes('Blue Panda') && <Cloud className="w-5 h-5" />}
                              {title}
                            </h3>
                            <div className="text-gray-300 leading-relaxed whitespace-pre-wrap font-mono text-sm">
                              {content.join('\n').trim()}
                            </div>
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