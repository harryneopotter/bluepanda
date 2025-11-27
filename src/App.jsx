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
  FileText
} from 'lucide-react';
import { ParticleBackground, GlitchText, MonolithSection, ConstellationProjects, ProjectsGrid, BottomNav } from './SuperpositionComponents';

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
      text: "Blue Panda's AI infrastructure predicted a critical load spike 2 hours before it happened, auto-scaling our resources and saving our Black Friday launch.",
      author: "Sarah J.",
      role: "CTO, FinTech Corp",
      company: "FinTech Corp"
    },
    {
      text: "The transition to their quantum-ready cloud was seamless. We've seen a 40% reduction in latency and our dev team loves the autonomous agents.",
      author: "Marcus R.",
      role: "Lead DevOps",
      company: "DataFlow Systems"
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
              <p>Legacy infrastructure was unable to handle burst traffic during peak operational hours, leading to 15% revenue loss and customer dissatisfaction.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">The Solution</h3>
              <p>We deployed a custom cluster of autonomous agents to monitor real-time traffic patterns. The system now predicts load spikes with 94% accuracy and pre-scales resources automatically.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Technical Implementation</h3>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Containerized microservices architecture</li>
                <li>Redis-based caching layer for sub-millisecond response times</li>
                <li>Custom predictive model trained on 3 years of historical data</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h4 className="text-sm font-mono text-gray-400 mb-4 uppercase">Key Metrics</h4>
              <div className="space-y-4">
                {project.metrics?.map((metric, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-cyan-400">{metric.value}</div>
                    <div className="text-xs text-gray-500 uppercase">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
              <h4 className="text-sm font-mono text-purple-300 mb-2 uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Python', 'Docker', 'AWS'].map(tech => (
                  <span key={tech} className="text-xs text-purple-200 bg-purple-500/20 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-8 border-t border-white/10">
          <Button variant="outline" onClick={onClose}>Close File</Button>
          <Button variant="primary">Schedule Consultation</Button>
        </div>
      </div>
    </div>
  );
};

// --- Pages ---

const HomePage = ({ navigate }) => (
  <div className="relative min-h-screen bg-void text-white overflow-hidden">
    <ParticleBackground />

    {/* Top Bar */}


    {/* Hero Section */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="mb-8 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 animate-pulse"></div>
        <span className="relative px-4 py-1 rounded-full border border-cyan-500/30 bg-black/50 text-cyan-400 font-mono text-xs tracking-widest uppercase">
          Infrastructure Excellence Since 2013
        </span>
      </div>

      <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-none">
        <GlitchText text="BUILDING TOMORROW'S" />
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-500 glow-text-cyan">
          INFRASTRUCTURE
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 font-mono">
        From traditional hosting to <span className="text-cyan-400">quantum-powered</span> AI systems.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <Button onClick={() => navigate('projects')} variant="primary" className="text-lg px-8 py-4">
          <Code2 className="w-5 h-5" /> View Our Work
        </Button>
        <Button onClick={() => navigate('contact')} variant="outline" className="text-lg px-8 py-4">
          <Mail className="w-5 h-5" /> Get In Touch
        </Button>
      </div>
    </div>

    {/* Monolith Services Section */}
    <div className="relative z-10 pb-32">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-mono text-cyan-400 tracking-widest uppercase mb-2">Capabilities</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
      </div>
      <MonolithSection />
      <div className="text-center mt-12">
        <Button onClick={() => navigate('services')} variant="outline" className="mx-auto">
          Explore All Services <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
);

const ServicesPage = () => (
  <div className="relative min-h-screen bg-void text-white pt-24 pb-32 px-4">
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
  <div className="relative min-h-screen bg-void text-white pt-24 pb-32 px-4">
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
  <div className="relative min-h-screen bg-void text-white pt-24 pb-32 px-4">
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
    <div className="relative min-h-screen bg-void text-white pt-24 pb-32 px-4">
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
const Footer = () => (
  <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm mt-20 pb-32">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="font-mono text-cyan-400 font-bold tracking-widest">BLUE PANDA</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building tomorrow's infrastructure today. From traditional hosting to quantum-powered AI systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-mono text-white font-bold mb-4 uppercase text-sm">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">AI Architect</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-mono text-white font-bold mb-4 uppercase text-sm">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:sachin@bluepanda.in" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                sachin@bluepanda.in
              </a>
            </li>
            <li>
              <a href="https://github.com/harryneopotter/bluepanda" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm font-mono">
          © 2013-2025 Blue Panda Hosting and Designs. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm font-mono">
          Operating since 2013 • Quantum-Ready Infrastructure
        </p>
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
    { id: 'projects', label: 'PROJECTS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'architect', label: 'AI ARCHITECT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="relative w-full max-w-md h-full bg-black border-l border-cyan-500/30 p-8 flex flex-col shadow-[0_0_50px_rgba(0,240,255,0.2)] animate-slide-in-right">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="font-mono text-cyan-400 font-bold tracking-widest glow-text-cyan">SYSTEM ACCESS</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                navigate(item.id);
                onClose();
              }}
              className="text-left text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 hover:from-cyan-400 hover:to-white transition-all duration-300 font-mono group flex items-center gap-4"
              aria-label={`Navigate to ${item.label}`}
            >
              <span className="text-sm text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/10">
          <p className="text-gray-500 font-mono text-sm mb-4">EXTERNAL LINKS</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:sachin@bluepanda.in" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>
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

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;

  return (
    <div className="bg-void min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      <SystemMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navigate={navigate} />
      <CaseStudyModal project={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />

      {/* Global Top Bar (Visible on all pages) */}
      <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto cursor-pointer" onClick={() => navigate('home')} role="button" aria-label="Go to Home">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="font-mono text-cyan-400 font-bold tracking-widest glow-text-cyan shadow-black drop-shadow-md">BLUE PANDA</span>
        </div>
        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="font-mono text-xs text-cyan-400/60 hidden md:block bg-black/50 px-3 py-1 rounded border border-cyan-500/20 backdrop-blur-sm">
            SYSTEM STATUS: STABLE
          </div>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 bg-black/50 border border-cyan-500/30 rounded text-cyan-400 hover:bg-cyan-500/10 hover:text-white transition-all backdrop-blur-sm"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <main className="animate-fade-in pt-20">
        {page === 'home' && <HomePage navigate={navigate} />}
        {page === 'services' && <ServicesPage />}
        {page === 'about' && <AboutPage navigate={navigate} />}
        {page === 'contact' && <ContactPage />}
        {page === 'architect' && <InfrastructureArchitect />}
        {page === 'projects' && <ProjectsPage onOpenCaseStudy={setSelectedCaseStudy} />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Navigation */}
      {/* <BottomNav currentPage={page} setPage={navigate} />*/}
    </div>
  );
};

export default App;