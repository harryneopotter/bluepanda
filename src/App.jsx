import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link, useLocation } from 'react-router-dom';
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
import { caseStudiesData } from './caseStudiesData';
import { projects } from './projects';
import { slugify } from './utils/slugify';

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
    primary: "bg-cyan-500 hover:enabled:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:enabled:shadow-[0_0_30px_rgba(0,240,255,0.5)]",
    outline: "bg-transparent border border-cyan-500 text-cyan-400 hover:enabled:bg-cyan-500/10",
    gradient: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:enabled:scale-105 shadow-lg"
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${variants[variant]} ${className} disabled:opacity-30 disabled:cursor-not-allowed disabled:shadow-none disabled:grayscale disabled:scale-100`}
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
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center font-bold text-cyan-400">
                {t.author[0]}
              </div>
              <div>
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-xs text-cyan-500 font-mono">{t.role} @ {t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

// --- Project Modal (Standard Case Study Viewer) ---
const CaseStudyModal = ({ project, onClose }) => {
  if (!project) return null;
  const caseStudy = caseStudiesData[project.id] || {
    challenge: "Developing a robust and scalable architecture for a mission-critical system.",
    solution: "Leveraged cloud-native technologies and automated workflows to ensure maximum uptime.",
    keyFeatures: ["Automated Scaling", "Real-time Monitoring", "High Availability Design"],
    impact: "Significantly improved system reliability and reduced operational overhead.",
    techStack: ["React", "Node.js", "AWS", "Docker"]
  };

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
                      {caseStudy.linkText || 'Live Website'}
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

const HomePage = () => {
  const navigate = useNavigate();
  return (
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
          <motion.div variants={fadeInUp} className="mb-0 flex justify-center">
            <HologramPanda />
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-4 mb-4 relative flex justify-center">
            <span className="relative px-4 py-1 rounded-full border border-cyan-500/30 bg-black/50 text-cyan-400 font-mono text-[10px] md:text-lg tracking-widest uppercase inline-block whitespace-nowrap">
              Infrastructure Excellence Since 2013
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
            <Button onClick={() => navigate('/services')} variant="outline" className="justify-center border-white/40 bg-black/40 hover:bg-cyan-900/20 hover:border-cyan-500 hover:text-cyan-400">
              Services
            </Button>
            <Button onClick={() => navigate('/case-studies')} variant="outline" className="justify-center border-white/40 bg-black/40 hover:bg-cyan-900/20 hover:border-cyan-500 hover:text-cyan-400">
              Case Studies
            </Button>
            <Button onClick={() => navigate('/architect')} variant="outline" className="justify-center border-white/40 bg-black/40 hover:bg-cyan-900/20 hover:border-cyan-500 hover:text-cyan-400">
              AI Architect Demo
            </Button>
            <Button onClick={() => navigate('/about')} variant="outline" className="justify-center border-white/40 bg-black/40 hover:bg-cyan-900/20 hover:border-cyan-500 hover:text-cyan-400">
              About
            </Button>
            <Button onClick={() => navigate('/contact')} variant="outline" className="justify-center border-white/40 bg-black/40 hover:bg-cyan-900/20 hover:border-cyan-500 hover:text-cyan-400">
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
          <FeaturedProjects navigate={(to) => navigate(to === 'case-studies' ? '/case-studies' : to)} />

          <div className="text-center mt-12">
            <Button onClick={() => navigate('/case-studies')} variant="outline" className="mx-auto">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
};

// --- Principles Section ---
const PrinciplesSection = () => {
  const principles = [
    {
      title: "PROPORTION",
      desc: "Systems should be sized for the problem, not the hype. We avoid over-engineering while ensuring headroom for growth.",
      icon: <Zap className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "CONTROL",
      desc: "If you don't understand your infrastructure, you don't own it. We build for clarity and direct maintainability.",
      icon: <Terminal className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "STABILITY",
      desc: "Scale is useless without stability. We prioritize uptime and resilience through pragmatic architectural choices.",
      icon: <Shield className="w-8 h-8 text-cyan-400" />
    }
  ];

  return (
    <Section>
      <div className="grid md:grid-cols-3 gap-12">
        {principles.map((p, i) => (
          <FadeIn key={i} delay={i * 200}>
            <div className="group text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all mx-auto md:mx-0">
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 font-mono tracking-wider">{p.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{p.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};

// --- Services Page ---
const ServicesPage = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-void text-white pt-24 pb-32">
        <ParticleBackground />

        <Section className="relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              CORE CAPABILITIES
            </motion.h1>
            <p className="text-xl text-gray-400 font-mono">
              &gt; Specialized in building systems that survive the real world.
            </p>
          </div>

          <div className="space-y-40">
            {/* AI Infrastructure */}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 text-cyan-400 font-mono mb-4">
                  <Cpu className="w-6 h-6" /> 01 // INTELLIGENCE
                </div>
                <h2 className="text-4xl font-bold mb-6">AI INFRASTRUCTURE</h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  We don't just 'use' AI; we build the pipelines that make it practical. From GPU-backed hosting to RAG-optimized vector databases.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-2 text-gray-400"><ChevronRight className="w-4 h-4 text-cyan-500" /> Vector Database Optimization</li>
                  <li className="flex items-center gap-2 text-gray-400"><ChevronRight className="w-4 h-4 text-cyan-500" /> Custom LLM Pipeline Deployment</li>
                  <li className="flex items-center gap-2 text-gray-400"><ChevronRight className="w-4 h-4 text-cyan-500" /> Autonomous Agent Infrastructure</li>
                </ul>
                <Button onClick={() => navigate('/contact')} variant="primary">Discuss AI Needs</Button>
              </div>
              <div className="p-8 bg-black/40 border border-cyan-500/20 rounded-2xl glow-box-cyan">
                <pre className="font-mono text-sm text-cyan-400 overflow-hidden">
                  {`$ bp-init --ai-stack
[INFO] Initializing Vector DB...
[INFO] Mapping Neural Pathways...
[INFO] Setting up Inference Engine...
[OK] AI CORE OPERATIONAL`}
                </pre>
              </div>
            </div>

            {/* Cloud & Engineering */}
            <div className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
              <div className="md:order-2">
                <div className="flex items-center gap-3 text-cyan-400 font-mono mb-4">
                  <Server className="w-6 h-6" /> 02 // ARCHITECTURE
                </div>
                <h2 className="text-4xl font-bold mb-6">RESILLIENT CLOUD</h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Websites, apps, and APIs need more than just code. They need a home that's stable, secure, and ready for whatever the internet throws at it.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-2 text-gray-400"><ChevronRight className="w-4 h-4 text-cyan-500" /> High-Availability Cluster Design</li>
                  <li className="flex items-center gap-2 text-gray-400"><ChevronRight className="w-4 h-4 text-cyan-500" /> Automated Disaster Recovery</li>
                  <li className="flex items-center gap-2 text-gray-400"><ChevronRight className="w-4 h-4 text-cyan-500" /> Legacy System Modernization</li>
                </ul>
                <Button onClick={() => navigate('/contact')} variant="outline">Learn More</Button>
              </div>
              <div className="md:order-1 p-8 bg-black/40 border border-white/10 rounded-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded border border-white/10 text-center">
                    <Activity className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                    <span className="block text-xl font-bold">99.99%</span>
                    <span className="text-[10px] uppercase text-gray-500">Uptime Target</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded border border-white/10 text-center">
                    <Shield className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                    <span className="block text-xl font-bold">Encrypted</span>
                    <span className="text-[10px] uppercase text-gray-500">End-to-End</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <TestimonialsSection />
      </div>
    </PageWrapper>
  );
};

// --- About Page ---
const AboutPage = () => {
  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-void text-white pt-24 pb-32">
        <ParticleBackground />
        <Section className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-12"
          >
            <div>
              <h1 className="text-5xl font-bold mb-8">ENGINEERING FIRST.</h1>
              <p className="text-2xl text-gray-300 leading-relaxed font-mono">
                Blue Panda was founded on the idea that infrastructure shouldn't be a black box.
              </p>
            </div>

            <div className="space-y-8 text-xl text-gray-400 leading-relaxed">
              <p>
                Since 2013, we've helped companies move from fragile, complex setups to systems that are stable, understandable, and built for the long term.
              </p>
              <p>
                We don't chase the latest hype. We evaluate tools based on their reliability, their security footprint, and how well they serve the specific constraints of the problem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-12">
              <div className="p-8 bg-black/40 border border-cyan-500/20 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400 font-mono">2013-2018</h3>
                <p className="text-gray-300">Traditional web hosting and foundational infrastructure services.</p>
              </div>
              <div className="p-8 bg-black/40 border border-purple-500/20 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-purple-400 font-mono">2018-2024</h3>
                <p className="text-gray-300">Technical consulting, server optimization, and custom cloud engineering.</p>
              </div>
              <div className="md:col-span-2 p-8 bg-black/40 border border-white/20 rounded-2xl glow-box-cyan">
                <h3 className="text-2xl font-bold mb-4 text-white font-mono">2025+</h3>
                <p className="text-gray-300">Specializing in **Responsible Infrastructure** — ensuring AI and modern systems are built on stable ground.</p>
              </div>
            </div>
          </motion.div>
        </Section>
      </div>
    </PageWrapper>
  );
};

// --- Contact Page ---
const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle');
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

      if (!response.ok) throw new Error(await response.text());
      setFormStatus('success');
    } catch (err) {
      console.error('Contact form error:', err);
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
    <PageWrapper>
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
                <button onClick={handleReset} className="mt-8 text-cyan-400 hover:text-white font-mono text-sm underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <div hidden><input name="bot-field" /></div>

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
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
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

      * **High Intensity / Technical Directness.** Use precise engineering language (Kubernetes, Terraform, RAG, Latency, Throughput).
      * **No “quantum”, “neural”, “teleport”, “autonomous agents”** (unless the user explicitly requests it).
      * **Markdown Formatting.** Use ### for section headers. Use **bold** for key terms.
      * **Practicality First.** If the problem is small, don't recommend a global cluster. Recommend a VPS or serverless.

      ### Output Structure
      1.  ### Executive Summary (Brief, punchy summary of the approach)
      2.  ### What This Means for You (The business value and stability gains)
      3.  ### Recommended Architecture (Technical deep dive)
      4.  ### Scalability & Security (How it handles growth and threats)
      5.  ### Practical Next Steps (Actionable implementation list)
    `;

    try {
      const response = await fetch('/.netlify/functions/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: projectDesc,
          systemPrompt: systemPrompt,
          depth: depth
        }),
      });

      if (!response.ok) throw new Error(await response.text());
      const data = await response.json();
      setPlan(data.result);
    } catch (err) {
      console.error('AI Architect error:', err);
      setPlan("### ERROR\n\nFailed to established connection with the AI Core. Please check your network and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-void text-white pt-24 pb-32">
        <ParticleBackground />

        <Section className="relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-12">
                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-2xl">
                  <Sparkles className="w-10 h-10 text-purple-400" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold font-mono">AI ARCHITECT <span className="text-purple-500">v1.0</span></h1>
                  <p className="text-gray-400 font-mono tracking-wider">&gt; Autonomous System Design & Implementation Logic</p>
                </div>
              </div>

              <div className="glass-panel p-8 rounded-2xl border border-purple-500/30 glow-box-purple">
                <div className="mb-8">
                  <label className="block text-sm font-bold text-purple-300 mb-4 font-mono uppercase">Describe the system, problem, or constraint</label>
                  <textarea
                    value={projectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-6 text-white h-48 focus:border-purple-500 focus:outline-none transition-all font-sans text-xl"
                    placeholder="Describe your project here..."
                  />

                  <div className="mt-4 flex flex-col gap-2 text-sm text-gray-500 font-mono">
                    <p className="font-bold text-purple-400">Try these examples:</p>
                    <p className="cursor-pointer hover:text-white transition-colors" onClick={() => setProjectDesc("E-commerce site expecting 10K daily visitors with peaks during sales.")}>"E-commerce site expecting 10K daily visitors..."</p>
                    <p className="cursor-pointer hover:text-white transition-colors" onClick={() => setProjectDesc("Internal RAG system for searching 50,000 PDF documents securely.")}>"Internal RAG system for searching 50,000 PDF documents..."</p>
                  </div>

                  <div className="mb-8 mt-8">
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
                            a.download = 'blueprint.md';
                            a.click();
                          }}
                          className="text-purple-400 hover:text-white flex items-center gap-2 text-sm font-mono"
                        >
                          <Download className="w-4 h-4" /> EXPORT_MD
                        </button>
                      )}
                    </div>

                    {loading ? (
                      <div className="space-y-4 animate-pulse">
                        <div className="h-4 bg-white/5 rounded w-3/4"></div>
                        <div className="h-4 bg-white/5 rounded w-1/2"></div>
                        <div className="h-4 bg-white/5 rounded w-5/6"></div>
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
    </PageWrapper>
  );
};

// --- Footer Component ---
const Footer = () => {
  const navigate = useNavigate();
  return (
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
              <li><button onClick={() => navigate('/services')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">Services</button></li>
              <li><button onClick={() => navigate('/case-studies')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">Case Studies</button></li>
              <li><button onClick={() => navigate('/about')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">About Us</button></li>
              <li><button onClick={() => navigate('/architect')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">AI Architect</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-white font-bold mb-4 uppercase text-xl">Contact</h3>
            <ul className="space-y-2 text-xl">
              <li>
                <button onClick={() => navigate('/contact')} className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
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
};

// --- System Menu ---
const SystemMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const menuItems = [
    { id: '/', label: 'HOME' },
    { id: '/services', label: 'SERVICES' },
    { id: '/case-studies', label: 'Case Studies' },
    { id: '/about', label: 'ABOUT' },
    { id: '/architect', label: 'AI ARCHITECT' },
    { id: '/contact', label: 'CONTACT' },
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

// --- Projects Page ---
const ProjectsPage = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-void text-white pt-24 pb-32">
        <ParticleBackground />

        <Section className="relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              CASE STUDIES
            </motion.h1>
            <p className="text-xl text-gray-400 font-mono">
              &gt; Deep dives into systems built to survive.
            </p>
          </div>

          <ProjectsGrid onProjectClick={(p) => navigate(`/case-studies/${slugify(p.title)}`)} />

          <Routes>
            <Route path=":slug" element={<CaseStudyDetailWrapper />} />
          </Routes>
        </Section>
      </div>
    </PageWrapper>
  );
};

const CaseStudyDetailWrapper = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => slugify(p.title) === slug);
  if (!project) return null;

  return <CaseStudyModal project={project} onClose={() => navigate('/case-studies')} />;
};

// --- Main App Component ---
const AppContent = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPageId = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/case-studies')) return 'case-studies';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/contact')) return 'contact';
    if (path.startsWith('/architect')) return 'architect';
    return 'home';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;

  return (
    <div className="bg-void min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      <SystemMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Global Top Bar (Visible on all pages) */}
      <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto cursor-pointer" onClick={() => navigate('/')} role="button" aria-label="Go to Home">
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
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname.split('/')[1] || 'root'}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/architect" element={<InfrastructureArchitect />} />
            <Route path="/case-studies/*" element={<ProjectsPage />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Bottom Navigation */}
      <BottomNav
        currentPage={getCurrentPageId()}
        setPage={(id) => navigate(id === 'home' ? '/' : `/${id}`)}
      />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
