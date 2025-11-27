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
  ExternalLink
} from 'lucide-react';

// --- API Helper ---
const generateGeminiResponse = async (prompt) => {
  const apiKey = "AIzaSyDNfBg9aNBaLUV-POjTgFKjK2HWUm86x4Y"; // TODO: Replace with your actual Gemini API key
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

// --- Components ---

const Button = ({ children, variant = 'primary', onClick, className = '', disabled = false }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 shadow-lg shadow-blue-900/20 dark:bg-blue-600 dark:hover:bg-blue-500 dark:shadow-blue-600/20",
    secondary: "bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm dark:bg-slate-800 dark:text-gray-200 dark:border-slate-700 dark:hover:bg-slate-700",
    gradient: "bg-gradient-to-r from-violet-500 to-pink-500 text-white hover:opacity-90 shadow-lg shadow-purple-500/20"
  };

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 py-16 md:py-24 ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
};

// --- Pages ---

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Q Panda Cloud Dashboard",
      desc: "Next-gen hosting control panel with AI-driven resource scaling and anomaly detection. Built with React and Go.",
      status: "In Development",
      tags: ["React", "AI", "Cloud Infrastructure"],
      link: "#",
      github: "#",
      type: "Product"
    },
    {
      id: 2,
      title: "Blue Panda Official Site",
      desc: "The website you are looking at right now. A high-performance, single-page React application with Gemini AI integration.",
      status: "Live",
      tags: ["React", "Tailwind", "Gemini API"],
      link: "#",
      github: "#",
      type: "Website"
    },
    {
      id: 3,
      title: "Legacy Server Monitor",
      desc: "Open source tool for monitoring legacy Linux server clusters with low overhead.",
      status: "Maintained",
      tags: ["Python", "Linux", "Monitoring"],
      link: null,
      github: "#",
      type: "Tool"
    },
    {
      id: 4,
      title: "Auto-Deploy Agent",
      desc: "Internal tool for automated zero-downtime deployments across multi-region clusters.",
      status: "Internal",
      tags: ["Rust", "DevOps", "Automation"],
      link: null,
      github: "#",
      type: "Tool"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Section className="pt-32">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">Labs</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              From commercial products to open-source experiments. Here's what we're building.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={project.id} className="group relative bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${project.status === 'Live' ? 'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400' :
                      project.status === 'In Development' ? 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400' :
                        'bg-gray-100 text-gray-700 border-gray-200 dark:bg-slate-800 dark:text-gray-400'
                      }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-gray-100 dark:border-slate-700 group-hover:scale-110 transition-transform">
                    {project.type === 'Website' ? <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" /> : <Code2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-gray-200 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-slate-800">
                  {project.link && (
                    <a href={project.link} className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                      <ExternalLink className="w-4 h-4" /> Visit Site
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>
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
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Section className="pt-32">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" /> Powered by Gemini
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Q Panda <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-500">Architect</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Describe your project idea, and our AI will design a custom infrastructure blueprint, tech stack recommendation, and scalability strategy instantly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
            <div className="p-1 bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400"></div>
            <div className="p-8 md:p-12">
              <div className="mb-8">
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Describe your project</label>
                <textarea
                  value={projectDesc}
                  onChange={(e) => setProjectDesc(e.target.value)}
                  placeholder="e.g., I want to build a real-time auction platform for antique furniture with about 10,000 concurrent users during events..."
                  className="w-full h-32 p-4 rounded-xl border border-gray-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900 transition-all resize-none text-gray-700"
                />
              </div>

              <Button
                variant="gradient"
                onClick={handleGenerate}
                disabled={loading || !projectDesc.trim()}
                className="w-full md:w-auto"
              >
                {loading ? (
                  <>
                    <Activity className="w-4 h-4 animate-spin" /> Designing Infrastructure...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" /> Generate Blueprint
                  </>
                )}
              </Button>

              {/* Result Area */}
              {(plan || loading) && (
                <div className="mt-12 border-t border-gray-100 dark:border-slate-800 pt-8 animate-fade-in">
                  {loading ? (
                    <div className="space-y-4 max-w-2xl mx-auto opacity-50">
                      <div className="h-4 bg-gray-100 dark:bg-slate-800 rounded w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-gray-100 dark:bg-slate-800 rounded w-full animate-pulse"></div>
                      <div className="h-4 bg-gray-100 dark:bg-slate-800 rounded w-5/6 animate-pulse"></div>
                    </div>
                  ) : (
                    <div className="prose prose-blue dark:prose-invert max-w-none">
                      {/* Simple markdown rendering */}
                      {plan.split('###').map((section, index) => {
                        if (!section.trim()) return null;
                        const [title, ...content] = section.split('\n');
                        return (
                          <div key={index} className="mb-8 p-6 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                              {title.includes('Stack') && <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                              {title.includes('Scalability') && <Activity className="w-5 h-5 text-teal-600 dark:text-teal-400" />}
                              {title.includes('Security') && <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />}
                              {title.includes('Blue Panda') && <Cloud className="w-5 h-5 text-violet-600 dark:text-violet-400" />}
                              {title}
                            </h3>
                            <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">
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

const HomePage = ({ navigate }) => (
  <div className="space-y-8 bg-white dark:bg-slate-950 transition-colors duration-300">
    <Section className="text-center pt-32 pb-20">
      <FadeIn>
        <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800">
          Infrastructure Excellence Since 2013
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
          Blue Panda <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-pink-500 to-orange-400">
            Hosting & Designs
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building tomorrow's infrastructure today. From traditional reliable hosting to quantum-powered AI systems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gradient" onClick={() => navigate('architect')}>
            <Sparkles className="w-4 h-4" /> Try Q Panda AI
          </Button>
          <Button variant="secondary" onClick={() => navigate('projects')}>
            View Projects
          </Button>
        </div>
      </FadeIn>
    </Section>

    <div className="bg-white dark:bg-slate-950 border-y border-gray-100 dark:border-slate-800 transition-colors duration-300" id="services">
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center mb-6 text-blue-700 dark:text-blue-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Q Panda Cloud</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
              Next-generation hosting with AI-powered operations. Features intelligent onboarding, predictive optimization, and automated security audits.
            </p>
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Coming soon at qpanda.cloud</div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-blue-900 dark:from-slate-950 dark:to-blue-950 text-white hover:shadow-xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-white">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI Infrastructure</h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Privacy-first AI systems for enterprise. Document intelligence, multi-agent orchestration, and local-first deployment strategies.
            </p>
            <div className="text-sm font-medium text-blue-200">Learn more at qpanda.in</div>
          </div>

          <div className="p-8 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
            <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/40 rounded-lg flex items-center justify-center mb-6 text-teal-700 dark:text-teal-400">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Traditional Web</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
              Reliable hosting and development since 2013. Server management, technical consulting, and long-term client partnerships.
            </p>
            <div className="text-sm font-medium text-teal-600 dark:text-teal-400">12+ Years Experience</div>
          </div>
        </div>
      </Section>
    </div>

    <Section className="py-12">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 dark:text-gray-400 font-medium">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" /> GST Registered Business
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" /> Operating Since 2013
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" /> Enterprise & SMB Clients
        </div>
      </div>
    </Section>
  </div>
);

const AboutPage = ({ navigate }) => (
  <div className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-300">
    <Section className="pt-32">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">The Evolution of Infrastructure</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-16 leading-relaxed">
          Founded in 2013, we began with a simple mission: reliable hosting with exceptional support. Over 12 years, we've evolved from traditional hosting to building intelligent infrastructure that thinks, adapts, and anticipates.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-900 dark:text-white">
              <Activity className="w-6 h-6 text-blue-600 dark:text-blue-400" /> Our Journey
            </h2>
            <div className="space-y-12 border-l-2 border-gray-200 dark:border-slate-700 ml-3 pl-8 relative">
              <div className="relative">
                <div className="absolute -left-[41px] bg-blue-100 dark:bg-blue-900 border-4 border-white dark:border-slate-900 w-6 h-6 rounded-full"></div>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wider">2013 — 2018</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">Traditional Infrastructure</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Web hosting, domain management, and development. Building foundational relationships.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] bg-teal-100 dark:bg-teal-900 border-4 border-white dark:border-slate-900 w-6 h-6 rounded-full"></div>
                <span className="text-sm font-bold text-teal-600 dark:text-teal-400 tracking-wider">2018 — 2024</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">Expanding Capabilities</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Server management, technical consulting, and infrastructure optimization.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[41px] bg-gradient-to-r from-violet-500 to-pink-500 border-4 border-white dark:border-slate-900 w-6 h-6 rounded-full shadow-lg shadow-purple-200 dark:shadow-none"></div>
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400 tracking-wider">2025+</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">Quantum Leap</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Introducing Q Panda. AI-powered infrastructure that predicts failures and optimizes automatically.</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Philosophy</h2>
              <ul className="space-y-4">
                {[
                  "Build systems that anticipate problems before they happen.",
                  "Deploy infrastructure that adapts automatically.",
                  "Respect privacy - your data stays yours.",
                  "Ship quality, not just features."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-black dark:to-slate-900 p-8 rounded-2xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">🐼</span> Why "Quantum Panda"?
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Q Panda represents quantum superposition applied to infrastructure: deploying multiple versions simultaneously, collapsing to the best performer automatically.
                <br /><br />
                Also, pandas are cool and quantum sounds awesome.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>

    <div className="bg-white dark:bg-slate-950 py-16 text-center transition-colors duration-300">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Ready to upgrade your infrastructure?</h2>
      <Button variant="primary" onClick={() => navigate('contact')}>
        Start a Conversation
      </Button>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
    <Section className="pt-32">
      <FadeIn>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Whether you need traditional hosting, AI infrastructure, or just want to discuss intelligent systems.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-900">
                <h3 className="text-sm font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-4">Primary Contact</h3>
                <a href="mailto:sachin@bluepanda.in" className="flex items-center gap-3 text-lg font-medium text-blue-700 dark:text-blue-400 hover:underline mb-2">
                  <Mail className="w-5 h-5" /> sachin@bluepanda.in
                </a>
                <p className="text-sm text-blue-600/80 dark:text-blue-400/80 mt-4">
                  For fastest response, please include your project requirements, timeline, and technical constraints.
                </p>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-800">
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-300 uppercase tracking-wider mb-4">Business Info</h3>
                <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <p><strong className="text-gray-900 dark:text-gray-200">Legal Name:</strong> Blue Panda Hosting and Designs</p>
                  <p><strong className="text-gray-900 dark:text-gray-200">Est:</strong> 2013</p>
                  <p><strong className="text-gray-900 dark:text-gray-200">Region:</strong> Global (India based)</p>
                  <p><strong className="text-gray-900 dark:text-gray-200">GST:</strong> Registered</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-lg shadow-gray-200/50 dark:shadow-none transition-colors duration-300">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">What can we help you with?</h3>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { label: "Q Panda Cloud", sub: "Intelligent hosting & operations" },
                    { label: "AI Consulting", sub: "Custom privacy-first solutions" },
                    { label: "Web Services", sub: "Hosting & Development" },
                    { label: "General Inquiry", sub: "Partnerships & Questions" }
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer transition-colors group bg-white dark:bg-slate-800">
                      <div className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-1">{item.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{item.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-slate-800">
                  <p className="mb-4 text-gray-600 dark:text-gray-400">Ready to start? Send us an email directly.</p>
                  <Button onClick={() => window.location.href = 'mailto:sachin@bluepanda.in'} className="w-full">
                    Email Us Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  </div>
);

const App = () => {
  const [page, setPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (to) => {
    setPage(to);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const NavLink = ({ to, label, mobile = false }) => (
    <button
      onClick={() => navigate(to)}
      className={`
        font-medium transition-colors duration-200
        ${mobile ? 'text-2xl py-2 block w-full text-left' : 'text-sm'}
        ${page === to ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}
      `}
    >
      {label}
    </button>
  );

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-[#f9fafb] dark:bg-slate-950 font-sans text-gray-900 dark:text-white selection:bg-blue-100 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100 transition-colors duration-300">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 py-4' : 'bg-transparent py-6'}`}>
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <button onClick={() => navigate('home')} className="flex items-center gap-2 font-bold text-xl tracking-tight z-50 text-gray-900 dark:text-white">
              <div className="w-8 h-8 bg-gradient-to-tr from-blue-700 to-teal-500 rounded-lg flex items-center justify-center text-white">
                B
              </div>
              <span>Blue Panda</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <NavLink to="home" label="Home" />
              <NavLink to="projects" label="Projects" />
              <NavLink to="about" label="About" />
              <NavLink to="contact" label="Contact" />
              <button
                onClick={() => navigate('architect')}
                className={`text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${page === 'architect' ? 'text-violet-600 dark:text-violet-400' : 'text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400'}`}
              >
                <Sparkles className="w-3 h-3" /> Q Panda AI
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <Button variant="primary" onClick={() => navigate('contact')} className="!py-2 !px-4 text-sm shadow-none">
                Start Project
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex gap-4 items-center md:hidden z-50">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full text-gray-500 dark:text-gray-400"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                className="text-gray-600 dark:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-white dark:bg-slate-950 z-40 flex flex-col pt-32 px-6">
              <NavLink to="home" label="Home" mobile />
              <NavLink to="projects" label="Projects" mobile />
              <NavLink to="about" label="About" mobile />
              <NavLink to="contact" label="Contact" mobile />
              <NavLink to="architect" label="Q Panda AI ✨" mobile />
              <div className="mt-8">
                <Button variant="primary" onClick={() => navigate('contact')} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main>
          {page === 'home' && <HomePage navigate={navigate} />}
          {page === 'about' && <AboutPage navigate={navigate} />}
          {page === 'contact' && <ContactPage />}
          {page === 'architect' && <InfrastructureArchitect />}
          {page === 'projects' && <ProjectsPage />}
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 py-12 mt-12 transition-colors duration-300">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="font-bold text-xl mb-4 flex items-center gap-2 text-gray-900 dark:text-white">
                <div className="w-6 h-6 bg-blue-900 rounded flex items-center justify-center text-white text-xs">B</div>
                Blue Panda
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
                Providing reliable hosting and intelligent infrastructure solutions to businesses globally since 2013.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Services</h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>Q Panda Cloud</li>
                <li>AI Infrastructure</li>
                <li>Web Hosting</li>
                <li>Technical Consulting</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>GST Registered</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li><a href="mailto:sachin@bluepanda.in" className="hover:text-blue-600 dark:hover:text-blue-400">sachin@bluepanda.in</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-gray-50 dark:border-slate-900 text-center text-xs text-gray-400">
            © 2013-{new Date().getFullYear()} Blue Panda Hosting and Designs. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;