import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import {
  Menu,
  X,
  Server,
  Cpu,
  Shield,
  CheckCircle2,
  ArrowRight,
  Activity,
  Bot,
  ChevronRight,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  Globe,
  Lightbulb,
  Lock,
  Mail,
  Sparkles,
  Terminal,
  User,
  Zap
} from 'lucide-react';
import { ParticleBackground, GlitchText, MonolithSection, ConstellationProjects, ProjectsGrid, BottomNav, HologramPanda, ServicesGrid, FeaturedProjects } from './SuperpositionComponents';
import { AI } from './services/ai';

// ============================================
// FRAMER MOTION ANIMATION VARIANTS
// ============================================
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardHover = {
  scale: 1.02,
  boxShadow: '0 0 30px rgba(0, 240, 230, 0.4)',
  transition: { duration: 0.3 }
};

// Page transition wrapper
const PageWrapper = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="page-content"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
import { caseStudiesData } from './caseStudiesData';



// --- Loading Screen ---
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  
  // Bot and crawler detection
  const isBot = /bot|googlebot|crawler|spider|curl|wget|slurp|bingbot|yandexbot|duckduckbot|baiduspider|facebot|ia_archiver/i.test(navigator.userAgent);
  const isScreenReader = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Skip loading for bots or screen readers
  useEffect(() => {
    if (isBot || isScreenReader) {
      onComplete();
      return;
    }
    
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
  }, [onComplete, isBot, isScreenReader]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-cyan-400 font-mono">
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-cyan-400 shadow-[0_0_10px_#00F0FF] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-sm animate-pulse">
        INITIALIZING CORE SYSTEM :: {Math.min(100, Math.floor(progress))}%
      </div>
    </div>
  );
};

// --- Shared Components with Framer Motion ---
const Section = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      initial={prefersReducedMotion ? {} : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={`max-w-7xl mx-auto px-6 py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

const FadeIn = ({ children, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: [0.2, 0.9, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Button = ({ children, variant = 'primary', className = "", ...props }) => {
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]",
    outline: "bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
    gradient: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:scale-105 shadow-lg"
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${variants[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none`}
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
      q: "What makes resilient hosting different?",
      a: "Our infrastructure is built on containerized microservices optimized for high-throughput parallel processing and predictable operations."
    },
    {
      q: "Do you offer migration services?",
      a: "Yes. Our 'Q-Agent' can assist by scanning your existing infrastructure and proposing a migration plan, which our human architects then verify and execute."
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
                      Live Website
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-8 border-t border-white/10">
          <Button variant="outline" onClick={onClose}>Close File</Button>
          <Button variant="primary" onClick={() => window.open('https://calendly.com/bluepandasolutions/30min', '_blank')}>
            Schedule Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

// --- Pages ---

const HomePage = ({ navigate }) => (
  <PageWrapper>
    <div className="relative min-h-screen bg-void text-white overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Panda Hologram - The Core Artifact */}
        <motion.div variants={fadeInUp} className="mb-0">
          <HologramPanda />
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-4 mb-4 relative">
          <span className="relative px-4 py-1 rounded-full border border-cyan-500/30 bg-black/50 text-cyan-400 font-mono text-xs md:text-lg tracking-widest uppercase">
            Problem-solving, not service selling.
          </span>
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight max-w-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-400">
            Blue Panda — Responsible Infrastructure for the Long Term
          </span>
        </motion.h1>

        <motion.div variants={fadeInUp} className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12 font-mono leading-relaxed space-y-4 text-left md:text-center mx-auto">
          <p>
            We design and maintain resilient infrastructure, applied systems, and custom engineering — focused on long-term stability, clarity, and reliability.
          </p>
        </motion.div>

        {/* Navigation Buttons (Affordances) */}
        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl mb-24">
          <Button onClick={() => navigate('services')} variant="outline" className="justify-center border-white/40 bg-black/40 hover:bg-cyan-900/20 hover:border-cyan-500 hover:text-cyan-400">
            Services
          </Button>
          <Button onClick={() => navigate('case-studies')} variant="outline" className="justify-center border-white/40 bg-black/40 hover:bg-cyan-900/20 hover:border-cyan-500 hover:text-cyan-400">
            Case Studies
          </Button>
          <Button onClick={() => navigate('architect')} variant="outline" className="justify-center border-white/40 bg-black/40 hover:bg-cyan-900/20 hover:border-cyan-500 hover:text-cyan-400">
            AI Architect Demo
          </Button>
          <Button onClick={() => navigate('about')} variant="outline" className="justify-center border-white/40 bg-black/40 hover:bg-cyan-900/20 hover:border-cyan-500 hover:text-cyan-400">
            About
          </Button>
          <Button onClick={() => navigate('contact')} variant="outline" className="justify-center border-white/40 bg-black/40 hover:bg-cyan-900/20 hover:border-cyan-500 hover:text-cyan-400">
            Contact
          </Button>
        </motion.div>
      </motion.div>

      {/* WHAT WE DO Section */}
      <div className="relative z-10 py-32 bg-black/20 backdrop-blur-sm border-t border-white/5">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">WHAT WE DO</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
        </motion.div>
        <ServicesGrid />
      </div>

      {/* CASE STUDIES Section */}
      <div className="relative z-10 py-32 border-t border-white/5">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">CASE STUDIES</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto" />
        </motion.div>
        <FeaturedProjects navigate={navigate} />

        <div className="text-center mt-12">
          <Button onClick={() => navigate('case-studies')} variant="outline" className="mx-auto">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Client Transmissions Moved to Services Page */}

    </div>
  </PageWrapper>
);

// --- Principles Section ---
const PrinciplesSection = () => {
  const principles = [
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
            <p className="text-gray-300 pl-8 leading-relaxed">
              {p.a}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ServicesPage = () => (
  <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
    <Suspense fallback={<div className="three-fallback fixed inset-0 z-0" />}>
      <ParticleBackground />
    </Suspense>
    <Section className="relative z-10">
      <h1 className="text-5xl font-bold mb-6 text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          PROBLEM DOMAINS
        </span>
      </h1>
      <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
        Blue Panda works on systems that need to function reliably over time — not just launch successfully. The work spans infrastructure, applied AI, and engineering correction, depending on what the problem actually requires.
      </p>

      <div className="grid gap-12 mb-20">
        {/* Service 1 */}
        <div className="glass-panel p-8 rounded-2xl border border-cyan-500/30 glow-box-cyan flex flex-col md:flex-row gap-8 items-center">
          <div className="p-6 bg-cyan-500/10 rounded-full border border-cyan-500/50">
            <Zap className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-white">Cloud Infrastructure & DevOps</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Problem: systems that are fragile or unclear under real-world load. Approach: design and operate secure, resilient cloud systems with emphasis on uptime and recoverability. Outcome: stable operations with clear ownership, monitoring, and maintenance.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              <li className="flex items-center gap-2 text-sm font-mono text-cyan-300">
                <CheckCircle2 className="w-4 h-4" /> Server Management
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-cyan-300">
                <CheckCircle2 className="w-4 h-4" /> Security Hardening
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-cyan-300">
                <CheckCircle2 className="w-4 h-4" /> Monitoring
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-cyan-300">
                <CheckCircle2 className="w-4 h-4" /> Long-term Maintenance
              </li>
            </ul>
          </div>
        </div>

        {/* Service 2 */}
        <div className="glass-panel p-8 rounded-2xl border border-purple-500/30 glow-box-purple flex flex-col md:flex-row gap-8 items-center">
          <div className="p-6 bg-purple-500/10 rounded-full border border-purple-500/50">
            <Cpu className="w-12 h-12 text-purple-400" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-white">AI Integration & Automation</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Problem: AI added without control or clarity. Approach: integrate AI into existing systems in a controlled, privacy-first way. Outcome: deterministic workflows, data sovereignty, and useful automation without black-box dependencies.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              <li className="flex items-center gap-2 text-sm font-mono text-purple-300">
                <CheckCircle2 className="w-4 h-4" /> Privacy-First
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-purple-300">
                <CheckCircle2 className="w-4 h-4" /> Data Sovereignty
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-purple-300">
                <CheckCircle2 className="w-4 h-4" /> Determinism
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-purple-300">
                <CheckCircle2 className="w-4 h-4" /> Controlled Workflows
              </li>
            </ul>
          </div>
        </div>

        {/* Service 3 */}
        <div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row gap-8 items-center">
          <div className="p-6 bg-white/5 rounded-full border border-white/20">
            <Server className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-white">Custom Development & Consulting</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Problem: systems that are bloated, brittle, or hard to change. Approach: careful architecture, refactoring, migration, and system design. Outcome: pragmatic systems that stay understandable and maintainable over time.
            </p>
            <ul className="grid md:grid-cols-2 gap-4 mb-6">
              <li className="flex items-center gap-2 text-sm font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4" /> Careful Architecture
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4" /> Legacy Refactoring
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4" /> System Migration
              </li>
              <li className="flex items-center gap-2 text-sm font-mono text-gray-300">
                <CheckCircle2 className="w-4 h-4" /> Pragmatic Design
              </li>
            </ul>
          </div>
        </div>
      </div>

      <PrinciplesSection />

      {/* Client Transmissions */}
      <TestimonialsSection />
    </Section>
  </div>
);

const ProjectsPage = ({ onOpenCaseStudy }) => (
  <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
    <Suspense fallback={<div className="three-fallback fixed inset-0 z-0" />}>
      <ParticleBackground />
    </Suspense>
    <Section className="relative z-10">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 border border-cyan-500/30 rounded-lg bg-cyan-500/10">
          <Database className="w-8 h-8 text-cyan-400" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-2">CASE STUDIES</h1>
          <p className="font-mono text-gray-400 text-sm">&gt; Systems built to survive real-world constraints.</p>
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
          <h2 className="text-2xl font-bold font-mono text-white">CASE_STUDIES //</h2>
        </div>
        <ProjectsGrid onProjectClick={onOpenCaseStudy} />
      </div>
    </Section>
  </div>
);

const AboutPage = () => (
  <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
    <Suspense fallback={<div className="three-fallback fixed inset-0 z-0" />}>
      <ParticleBackground />
    </Suspense>
    <Section className="relative z-10 max-w-4xl">
      <h1 className="text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
        THE HISTORY
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
          <h3 className="text-2xl font-bold mb-4 text-white">Responsible Infrastructure</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Blue Panda has worked on infrastructure and systems since 2013. The focus shifts with client needs, but the principle stays the same: systems should be understandable, stable, and designed for the long term.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white">OUR PHILOSOPHY</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-gray-300 font-mono">&gt; Proportion before complexity</p>
          </div>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-gray-300 font-mono">&gt; Control over novelty</p>
          </div>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-gray-300 font-mono">&gt; Stability before scale</p>
          </div>
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl">
            <p className="text-gray-300 font-mono">&gt; Human responsibility in system design</p>
          </div>
        </div>
      </div>

      {/* 
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white">THE TEAM</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-black/40 border border-white/10 rounded-xl text-center group hover:border-cyan-500 transition-colors">
            <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full mb-4 overflow-hidden border-2 border-gray-700 group-hover:border-cyan-500">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                <User className="w-8 h-8 text-gray-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">Sachin</h3>
            <p className="text-cyan-400 font-mono text-sm mb-2">Founder & Lead Architect</p>
            <p className="text-gray-300 text-sm">Experience across traditional infrastructure, modern cloud systems, and applied AI. Work emphasizes judgment, restraint, and long-term thinking.</p>
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
       */}
    </Section>
  </div>
);

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error
  const [formError, setFormError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormError('');

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      setFormStatus('success');
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus('error');
      setFormError('We could not send your message. Please try again or email directly.');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setFormStatus('idle');
    setFormError('');
  };

  return (
    <div className="relative min-h-screen bg-void text-white pt-24 pb-32 px-4 flex items-center justify-center">
      <ParticleBackground />
      <div className="relative z-10 w-full max-w-2xl">
        <div className="glass-panel p-8 md:p-12 rounded-2xl border border-cyan-500/30 glow-box-cyan">
          <h1 className="text-4xl font-bold mb-8 text-center">INITIATE CONTACT</h1>

          <div className="mb-8 text-center">
            <p className="text-gray-300 mb-4">If you have a system, problem, or idea that needs careful thought, feel free to reach out.</p>
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
                onClick={handleReset}
                className="mt-8 text-cyan-400 hover:text-white font-mono text-sm underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <input name="bot-field" />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs text-cyan-400 mb-2 uppercase">Your Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-cyan-400 mb-2 uppercase">Your Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div>
                <label className="block font-mono text-xs text-cyan-400 mb-2 uppercase">Describe the problem (optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white h-32 focus:border-cyan-500 focus:outline-none focus:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all resize-none"
                  placeholder="Describe the problem or system..."
                />
              </div>
              {formStatus === 'error' && (
                <p className="text-sm text-red-300 font-mono">{formError}</p>
              )}
              <Button variant="primary" className="w-full justify-center btn-hover" disabled={formStatus === 'submitting'}>
                {formStatus === 'submitting' ? (
                  <span className="flex items-center gap-2"><Activity className="w-4 h-4 animate-spin" /> TRANSMITTING...</span>
                ) : (
                  <span className="flex items-center gap-2">SEND TRANSMISSION <ArrowRight className="w-4 h-4" /></span>
                )}
              </Button>
              <p className="text-lg text-white font-medium text-center mt-4">
                <Lock className="w-5 h-5 inline mr-2" />
                We respect your privacy. Your data is encrypted and never shared.
              </p>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-white/10 text-center font-mono text-lg text-white">
            <p className="mb-4 text-white font-bold">Prefer to talk directly?</p>
            <Button variant="outline" className="mx-auto" onClick={() => window.open('https://calendly.com/bluepandasolutions/30min', '_blank')}>
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
            <p className="text-xl text-gray-300 font-mono">
              The AI Architect is a thinking demonstration of how Blue Panda approaches system design. It is not a product and not a sales funnel.
            </p>
          </div>

          <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-purple-500/30 overflow-hidden glow-box-purple">
            <div className="p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500"></div>
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <label className="block text-sm font-bold text-purple-300 mb-2 font-mono uppercase">Describe the system, problem, or constraint</label>
                <textarea
                  value={projectDesc}
                  onChange={(e) => setProjectDesc(e.target.value)}
                  placeholder="Describe your project here..."
                  className="w-full h-32 p-4 rounded-xl bg-black/50 border border-purple-500/30 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none font-mono mb-2"
                />
                <div className="text-xs text-gray-500 font-mono space-y-1 mb-6">
                  <p className="font-bold text-purple-400">Try these examples:</p>
                  <p className="cursor-pointer hover:text-white transition-colors" onClick={() => setProjectDesc("E-commerce site expecting 10K daily visitors with peaks during sales.")}>"E-commerce site expecting 10K daily visitors..."</p>
                  <p className="cursor-pointer hover:text-white transition-colors" onClick={() => setProjectDesc("Internal RAG system for searching 50,000 PDF documents securely.")}>"Internal RAG system for searching 50,000 PDF documents..."</p>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold text-purple-300 mb-2 font-mono uppercase">Analysis Depth</label>
                  <div className="flex gap-4">
                    {['overview', 'detailed', 'auto'].map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setDepth(mode)}
                        className={`px-4 py-2 rounded-lg font-mono text-sm uppercase transition-all ${depth === mode ? 'bg-purple-600 text-white shadow-[0_0_15px_#BF00FF]' : 'bg-black/40 text-gray-400 hover:text-white border border-white/10'}`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-400 italic mb-6">Clarity and density matter more than verbosity.</p>
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
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-white uppercase tracking-wider font-mono">Blueprint Output</h3>
                    {plan && (
                      <button
                        onClick={() => {
                          const blob = new Blob([plan], { type: 'text/markdown' });
                          const url = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = url;
                          a.download = 'blue-panda-blueprint.md';
                          a.click();
                        }}
                        className="flex items-center gap-2 text-sm text-purple-400 hover:text-white transition-colors"
                      >
                        <Download className="w-4 h-4" /> Download .MD
                      </button>
                    )}
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
                            <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2 font-mono uppercase">
                              {title.includes('Summary') && <FileText className="w-5 h-5" />}
                              {title.includes('Means for You') && <Lightbulb className="w-5 h-5" />}
                              {title.includes('Architecture') && <Cpu className="w-5 h-5" />}
                              {title.includes('Scalability') && <Activity className="w-5 h-5" />}
                              {title.includes('Security') && <Shield className="w-5 h-5" />}
                              {title.includes('Practical') && <CheckCircle2 className="w-5 h-5" />}
                              {title}
                            </h3>
                            <div className="text-white/90 leading-6 whitespace-pre-wrap font-sans text-lg">
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
  <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm mt-20 pb-32">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="font-mono text-cyan-400 font-bold tracking-widest text-xl">BLUE PANDA</span>
          </div>
          <p className="text-gray-300 text-xl leading-relaxed">
            Responsible infrastructure, applied systems, and system correction since 2013.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-mono text-white font-bold mb-6 uppercase text-xl">Quick Links</h3>
          <ul className="space-y-4 text-xl">
            <li><button onClick={() => navigate('services')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">Services</button></li>
            <li><button onClick={() => navigate('case-studies')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">Case Studies</button></li>
            <li><button onClick={() => navigate('about')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">About Us</button></li>
            <li><button onClick={() => navigate('architect')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">AI Architect</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-mono text-white font-bold mb-4 uppercase text-xl">Contact</h3>
          <ul className="space-y-2 text-xl">
            <li>
              <button onClick={() => navigate('contact')} className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
                <Mail className="w-6 h-6" />
              </button>
            </li>

          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xl font-mono">
          © 2013-2025 Blue Panda Hosting and Designs. All rights reserved.
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
    { id: 'case-studies', label: 'Case Studies' },
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

        <nav className="flex-1 flex flex-col gap-8 justify-center">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                navigate(item.id);
                onClose();
              }}
              className="text-left text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 hover:from-cyan-400 hover:to-white transition-all duration-300 font-mono group flex items-center gap-4 py-2"
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
            <a href="https://github.com/harryneopotter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
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
          <span className="font-mono text-cyan-400 font-bold tracking-widest glow-text-cyan shadow-black drop-shadow-md text-xl">BLUE PANDA</span>
        </div>
        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="font-mono text-base text-cyan-400/60 hidden md:block bg-black/50 px-3 py-1 rounded border border-cyan-500/20 backdrop-blur-sm">
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
        {page === 'case-studies' && <ProjectsPage onOpenCaseStudy={setSelectedCaseStudy} />}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Floating Bottom Navigation */}
      <BottomNav currentPage={page} setPage={navigate} />
    </div>
  );
};

export default App;
