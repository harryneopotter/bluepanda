/*
 * INSTRUCTIONS FOR UPDATING CASE STUDY MODAL:
 * 
 * 1. In src/App.jsx, add this import at line 5 (after the other imports):
 *    import { caseStudiesData } from './caseStudiesData';
 * 
 * 2. Find the CaseStudyModal component (around line 197-274)
 * 
 * 3. Replace the ENTIRE component with the code below
 */

// --- Case Study Modal with Dynamic Content ---
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
