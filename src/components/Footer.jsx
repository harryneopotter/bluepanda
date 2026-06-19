import { useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm mt-20 pb-32">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="font-mono text-cyan-400 font-bold tracking-widest text-xl">BLUE PANDA</span>
            </div>
            <p className="text-gray-300 text-xl leading-relaxed">Responsible infrastructure, applied systems, and system correction since 2013.</p>
          </div>
          <div>
            <h3 className="font-mono text-white font-bold mb-6 uppercase text-xl">Quick Links</h3>
            <ul className="space-y-4 text-xl">
              <li><button onClick={() => navigate('/services')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">Services</button></li>
              <li><button onClick={() => navigate('/case-studies')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">Case Studies</button></li>
              <li><button onClick={() => navigate('/about')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">About Us</button></li>
              <li><button onClick={() => navigate('/architect')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">AI Architect</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-white font-bold mb-4 uppercase text-xl">Contact</h3>
            <button onClick={() => navigate('/contact')} className="w-12 h-12 rounded-full border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all">
              <Mail className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xl font-mono">© 2013-2025 Blue Panda Hosting and Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
