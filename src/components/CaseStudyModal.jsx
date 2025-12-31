import React from 'react';
import { X, FileText } from 'lucide-react';

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

  export default CaseStudyModal;