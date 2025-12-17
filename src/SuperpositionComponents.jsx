import React, { useEffect, useRef, useState } from 'react';
import { Zap, Cpu, Server, Globe, Shield, Activity, Sparkles, Code2, Database, ExternalLink, Github, ArrowRight, Home, Briefcase, User, Mail, Terminal, FileText } from 'lucide-react';

// --- Particle Background ---
export const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = Math.random() > 0.5 ? '#00F0FF' : '#BF00FF'; // Cyan or Purple
            }

            update(mouseX, mouseY) {
                this.x += this.speedX;
                this.y += this.speedY;

                // Mouse attraction
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    this.x += dx * 0.02;
                    this.y += dy * 0.02;
                }

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < 150; i++) {
                particles.push(new Particle());
            }
        };

        initParticles();

        let mouseX = 0;
        let mouseY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update(mouseX, mouseY);
                particle.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-60" />;
};

// --- Glitch Text ---
export const GlitchText = ({ text, className = "" }) => (
    <div className={`glitch-wrapper inline-block ${className}`}>
        <span className="glitch font-bold text-white relative z-10" data-text={text}>
            {text}
        </span>
    </div>
);

// --- Monolith Services ---
export const MonolithSection = () => {
    const services = [
        {
            title: "Q PANDA CLOUD",
            icon: <Zap className="w-8 h-8 text-cyan" />,
            desc: "Intelligent Hosting",
            color: "border-cyan",
            glow: "glow-box-cyan"
        },
        {
            title: "AI INFRASTRUCTURE",
            icon: <Cpu className="w-8 h-8 text-neon-purple" />,
            desc: "Privacy-first Systems",
            color: "border-purple-500",
            glow: "glow-box-purple"
        },
        {
            title: "TRADITIONAL WEB",
            icon: <Server className="w-8 h-8 text-white" />,
            desc: "Reliable Hosting",
            color: "border-white",
            glow: "shadow-lg shadow-white/20"
        }
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4 py-20 relative z-10">
            {services.map((service, idx) => (
                <div
                    key={idx}
                    className={`group relative w-full md:w-64 h-96 bg-black/50 border ${service.color} transition-all duration-500 hover:w-full md:hover:w-80 hover:bg-black/80 ${service.glow} flex flex-col items-center justify-center overflow-hidden cursor-pointer backdrop-blur-sm`}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                    <div className="relative z-10 flex flex-col items-center text-center p-6 transition-transform duration-500 group-hover:scale-110">
                        <div className="mb-6 p-4 border border-white/10 rounded-full bg-white/5">
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold font-mono text-white mb-2 tracking-widest">{service.title}</h3>
                        <p className="text-gray-300 font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                            {service.desc}
                        </p>
                    </div>
                    {/* Scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-1 w-full animate-pulse pointer-events-none" style={{ top: '50%' }} />
                </div>
            ))}
        </div>
    );
};

// --- Constellation Projects Graph ---
export const ConstellationProjects = () => {
    const canvasRef = useRef(null);
    const [hoveredNode, setHoveredNode] = useState(null);
    const [isModalHovered, setIsModalHovered] = useState(false);
    const hoverTimeoutRef = useRef(null);

    const projects = [
        { id: 1, x: 200, y: 150, label: "Q Panda Cloud", type: "Product" },
        { id: 2, x: 400, y: 300, label: "AI Doc Parser", type: "Client" },
        { id: 3, x: 600, y: 150, label: "FinTech Core", type: "Client" },
        { id: 4, x: 500, y: 450, label: "Auto-Deploy", type: "Tool" },
        { id: 5, x: 800, y: 300, label: "Quantum API", type: "R&D" },
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Scale coordinates to canvas size
        const getScaledCoords = (node) => {
            const scaleX = canvas.width / 1000;
            const scaleY = canvas.height / 600;
            return { x: node.x * scaleX, y: node.y * scaleY };
        };

        const drawGraph = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            projects.forEach((node, i) => {
                const start = getScaledCoords(node);
                projects.forEach((other, j) => {
                    if (i !== j) {
                        const end = getScaledCoords(other);
                        ctx.moveTo(start.x, start.y);
                        ctx.lineTo(end.x, end.y);
                    }
                });
            });
            ctx.stroke();

            // Draw nodes
            projects.forEach(node => {
                const { x, y } = getScaledCoords(node);
                const isHovered = hoveredNode && hoveredNode.id === node.id;

                // Glow
                if (isHovered) {
                    ctx.shadowColor = '#00F0FF';
                    ctx.shadowBlur = 20;
                } else {
                    ctx.shadowBlur = 0;
                }

                ctx.fillStyle = isHovered ? '#00F0FF' : '#050505';
                ctx.strokeStyle = '#00F0FF';
                ctx.lineWidth = 2;

                ctx.beginPath();
                ctx.arc(x, y, isHovered ? 12 : 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Label
                ctx.fillStyle = '#fff';
                ctx.font = '12px JetBrains Mono';
                ctx.textAlign = 'center';
                ctx.fillText(node.label, x, y + 25);
            });

            animationFrameId = requestAnimationFrame(drawGraph);
        };

        drawGraph();

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            let found = null;
            projects.forEach(node => {
                const { x, y } = getScaledCoords(node);
                const dist = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
                if (dist < 20) {
                    found = node;
                }
            });

            if (found) {
                if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                setHoveredNode(found);
            } else if (!isModalHovered) {
                // Delay closing to allow moving to modal
                hoverTimeoutRef.current = setTimeout(() => {
                    setHoveredNode(null);
                }, 300);
            }
        };

        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            canvas.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
            if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        };
    }, [hoveredNode, isModalHovered]);

    return (
        <div className="relative w-full h-[600px] bg-black/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
            <div className="absolute top-4 left-4 z-10">
                <h2 className="text-xl font-mono text-cyan flex items-center gap-2">
                    <Activity className="w-4 h-4" /> DEPLOYED_SYSTEMS_LOG //
                </h2>
            </div>
            <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />

            {/* Holographic Modal Overlay */}
            {hoveredNode && (
                <div
                    className="absolute bottom-8 right-8 w-80 bg-black/90 border border-cyan p-6 backdrop-blur-md glow-box-cyan animate-pulse-neon z-20"
                    onMouseEnter={() => {
                        setIsModalHovered(true);
                        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                    }}
                    onMouseLeave={() => {
                        setIsModalHovered(false);
                        setHoveredNode(null);
                    }}
                >
                    <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-2">
                        <h3 className="text-lg font-bold text-white font-mono">{hoveredNode.label}</h3>
                        <span className="text-xs text-cyan border border-cyan px-2 py-0.5 rounded">{hoveredNode.type}</span>
                    </div>
                    <div className="space-y-2 font-mono text-sm text-gray-300">
                        <p>&gt; Status: Active</p>
                        <p>&gt; Uptime: 99.99%</p>
                        <p>&gt; Region: Global</p>
                    </div>
                    <button className="mt-4 w-full py-2 bg-cyan/10 border border-cyan text-cyan hover:bg-cyan hover:text-black transition-colors font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                        Access Node <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

// --- Project Card (Superposition Style) ---
export const ProjectCard = ({ project, index, onProjectClick }) => {
    const icons = {
        ai: <Cpu className="w-6 h-6 text-neon-purple" />,
        cloud: <Zap className="w-6 h-6 text-cyan" />,
        web: <Globe className="w-6 h-6 text-white" />,
    };

    const statusColors = {
        live: "text-green-400 border-green-500/50 bg-green-500/10 shadow-[0_0_10px_rgba(74,222,128,0.2)]",
        development: "text-yellow-400 border-yellow-500/50 bg-yellow-500/10 shadow-[0_0_10px_rgba(250,204,21,0.2)]",
        prototype: "text-pink-400 border-pink-500/50 bg-pink-500/10 shadow-[0_0_10px_rgba(244,114,182,0.2)]",
    };

    return (
        <div
            className="group relative bg-black/40 border border-white/10 rounded-xl p-6 hover:border-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-500 overflow-hidden backdrop-blur-sm"
            style={{ animation: `slide-up 0.5s ease-out forwards ${index * 0.1}s`, opacity: 0 }}
        >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-cyan/30">
                        {icons[project.type]}
                    </div>
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${statusColors[project.status]} uppercase tracking-wider`}>
                        {project.status}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors font-mono">
                    {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300 font-mono">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Metrics / Outcomes */}
                {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 mb-6">
                        {project.metrics.map((metric, idx) => (
                            <div key={idx} className="bg-cyan-500/5 border border-cyan-500/20 rounded p-2 text-center">
                                <span className="block text-cyan-400 font-bold text-sm">{metric.value}</span>
                                <span className="block text-gray-500 text-[10px] uppercase tracking-wider">{metric.label}</span>
                            </div>
                        ))}
                    </div>
                )}

                <button
                    onClick={() => onProjectClick && onProjectClick(project)}
                    className="flex items-center gap-2 text-sm text-cyan hover:text-white transition-colors font-mono group/link"
                >
                    <FileText className="w-4 h-4 group-hover/link:text-cyan" />
                    <span>CASE_STUDY</span>
                </button>
                {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors font-mono group/link" aria-label={`View ${project.title} source code on GitHub`}>
                        <Github className="w-4 h-4 group-hover/link:text-cyan" />
                        <span>SOURCE_CODE</span>
                    </a>
                )}
                {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-cyan hover:text-cyan/80 transition-colors font-mono group/link" aria-label={`Visit ${project.title} live site`}>
                        <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                        <span>INITIATE_LINK</span>
                    </a>
                )}
            </div>
        </div>

    );
};
// --- Projects Grid ---
export const ProjectsGrid = ({ onProjectClick }) => {
    const projects = [
        {
            status: "live",
            title: "Telegram CMS Website",
            description: "A mobile-first content management system built for a creative educator. Solves accessibility constraints by allowing full website management via a Telegram bot. Features auto-processing of PDFs and images, real-time lead generation, and runs on GCP free tier.",
            tags: ["Next.js 14", "Telegram Bot", "GCP Cloud Functions", "Firestore"],
            type: "web",
            metrics: [
                { label: "Accessibility", value: "Phone-First" },
                { label: "Cost", value: "$0/mo" }
            ],
            liveUrl: "#", // Client project, hidden
            buttons: ["CASE_STUDY"]
        },
        {
            status: "live",
            title: "GCP Remote Dashboard",
            description: "A Node.js dashboard for managing remote Docker containers via Tailscale SSH, allowing secure orchestration of Google Cloud Platform VMs from any location. Features centralized VM control, secure access, and instant status/log management.",
            tags: ["Node.js", "Docker", "Tailscale", "GCP"],
            type: "cloud",
            metrics: [
                { label: "Control", value: "Centralized" },
                { label: "Access", value: "Secure SSH" }
            ],
            githubUrl: "#",
            buttons: ["CASE_STUDY", "SOURCE_CODE"]
        },
        {
            status: "development",
            title: "Smriti",
            description: "Automated context management system for AI development. Walks repositories to generate structured context files (AST-parsed) and auto-initializes for tools like Cursor and Windsurf. Eliminates the friction of re-pasting file trees and dependencies.",
            tags: ["Python (AST)", "TypeScript", "Semantic Analysis", "Automation"],
            type: "ai",
            metrics: [
                { label: "Context", value: "Automated" },
                { label: "Tokens", value: "Optimized" }
            ],
            githubUrl: "#",
            buttons: ["CASE_STUDY", "SOURCE_CODE"]
        },
        {
            status: "live",
            title: "PlaytimeFun",
            description: "Hyper-personalized AI entertainment app built to keep kids engaged. Features infinite AI-generated stories (text-to-speech) and coloring pages starring their favorite heroes. Built with React, Gemini API, and ElevenLabs.",
            tags: ["React", "Gemini API", "ElevenLabs", "Generative AI"],
            type: "web",
            metrics: [
                { label: "Engagement", value: "Infinite" },
                { label: "Content", value: "Personalized" }
            ],
            liveUrl: "#",
            buttons: ["CASE_STUDY", "INITIATE_LINK"]
        },
        {
            status: "development",
            title: "aicli",
            description: "An AI-powered command-line assistant that streamlines repetitive developer workflows, offering automated suggestions and acceleration for technical teams. Provides productivity boost for engineering teams with smart CLI.",
            tags: ["Python", "AI APIs", "CLI", "Automation"],
            type: "ai",
            metrics: [
                { label: "Productivity", value: "Boost" },
                { label: "Automation", value: "Rapid" }
            ],
            githubUrl: "#",
            buttons: ["CASE_STUDY", "SOURCE_CODE"]
        },
        {
            status: "live",
            title: "Codex-webui",
            description: "A robust, typed web interface for AI coding sessions. Born from the need to save context during connection drops. Features Markdown rendering, session persistence, and a clean grid-based UX. Fully rewritten in TypeScript.",
            tags: ["TypeScript", "WebSocket", "Markdown", "AI Coding"],
            type: "ai",
            metrics: [
                { label: "Reliability", value: "Persistent" },
                { label: "Architecture", value: "Modular" }
            ],
            liveUrl: "https://codex-webui-ts.hnpart.xyz",
            buttons: ["CASE_STUDY", "INITIATE_LINK"]
        },
        {
            status: "development",
            title: "PandaBanana",
            description: "A creative, web-based demo project for rapid prototyping and UI experimentation, showcasing innovative interactive concepts. Serves as a reference implementation for UI/UX design sprints.",
            tags: ["HTML", "CSS", "JavaScript", "Prototyping"],
            type: "web",
            metrics: [
                { label: "UI/UX", value: "Reference" },
                { label: "Prototyping", value: "Rapid" }
            ],
            githubUrl: "#",
            buttons: ["CASE_STUDY", "SOURCE_CODE"]
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} onProjectClick={onProjectClick} />
            ))}
        </div>
    );
};

// --- Bottom Navigation ---
export const BottomNav = ({ currentPage, setPage }) => {
    const navItems = [
        { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
        { id: 'services', label: 'Services', icon: <Zap className="w-4 h-4" /> },
        { id: 'projects', label: 'Projects_', icon: <Code2 className="w-4 h-4" /> },
        { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
        { id: 'architect', label: 'AI Architect', icon: <Sparkles className="w-4 h-4" /> },
        { id: 'contact', label: 'Contact :: Initiate', icon: <Mail className="w-4 h-4" /> },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-2xl px-4">
            <div className="glass-panel rounded-full px-6 py-4 flex justify-between items-center shadow-2xl shadow-cyan/10">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setPage(item.id)}
                        className={`relative group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${currentPage === item.id
                            ? 'text-cyan bg-cyan/10'
                            : 'text-gray-400 hover:text-white'
                            }`}
                        aria-label={`Navigate to ${item.label}`}
                    >
                        {/* Tooltip */}
                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-cyan text-xs font-mono px-2 py-1 rounded border border-cyan/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                            {item.label}
                        </span>

                        {item.icon}
                        <span className={`text-sm font-mono font-bold ${currentPage === item.id ? 'block' : 'hidden md:block'}`}>
                            {item.label}
                        </span>
                        {currentPage === item.id && (
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-cyan shadow-[0_0_10px_#00F0FF]" />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};
