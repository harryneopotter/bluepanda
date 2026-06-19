import { useState } from 'react';
import { Mail, Send, RefreshCw } from 'lucide-react';
import { PageWrapper, Section, Button } from '../components/shared';

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
      if (!response.ok) throw new Error('Failed to send');
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setFormStatus('error');
      setFormError('Connection error. Please email us directly at info@bluepanda.in');
    }
  };

  const handleReset = () => {
    setFormStatus('idle');
    setFormError('');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-void text-white pt-8 pb-32 px-4">
        <Section className="relative z-10 max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-900/30 border border-cyan-500/50 text-cyan-300 text-sm font-bold mb-6 font-mono">
              <Mail className="w-4 h-4" /> OPEN_CHANNEL //
            </div>
            <h1 className="text-5xl font-bold mb-6">CONTACT</h1>
            <p className="text-xl text-gray-300 font-mono">Questions, collaborations, or infrastructure challenges — send a message.</p>
          </div>
          <div className="glass-panel rounded-2xl border border-cyan-500/30 overflow-hidden glow-box-cyan">
            <div className="p-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600" />
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-sm font-bold text-cyan-300 mb-2 font-mono uppercase">Name</label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="Your name" className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-cyan-300 mb-2 font-mono uppercase">Email</label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required placeholder="your@email.com" className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-cyan-300 mb-2 font-mono uppercase">Message</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} placeholder="Describe your project, question, or infrastructure challenge..." className="w-full p-4 rounded-xl bg-black/50 border border-cyan-500/30 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none" />
              </div>
              {formStatus === 'error' && <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-xl text-red-300 font-mono text-sm">{formError}</div>}
              {formStatus === 'success' && <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-xl text-green-300 font-mono text-sm">Message sent successfully! We'll respond within 24 hours.</div>}
              <div className="flex gap-4">
                <Button type="submit" disabled={formStatus === 'submitting'} variant="primary" className="flex-1">
                  {formStatus === 'submitting' ? <><RefreshCw className="w-4 h-4 animate-spin" /> SENDING...</> : <><Send className="w-4 h-4" /> SEND MESSAGE</>}
                </Button>
                {formStatus !== 'idle' && <Button type="button" variant="outline" onClick={handleReset}>RESET</Button>}
              </div>
            </form>
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
