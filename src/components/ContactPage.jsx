import React, { useState } from 'react';
import { FadeIn } from './SharedComponents';

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

  export default ContactPage;