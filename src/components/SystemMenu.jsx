import { useNavigate } from 'react-router-dom';
import { X, Github, Mail } from 'lucide-react';

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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full max-w-md h-full bg-black border-l border-cyan-500/30 p-8 flex flex-col shadow-[0_0_50px_rgba(0,240,255,0.2)] animate-slide-in-right">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="font-mono text-cyan-400 font-bold tracking-widest glow-text-cyan">SYSTEM ACCESS</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close Menu"><X className="w-8 h-8" /></button>
        </div>
        <nav className="flex-1 flex flex-col gap-8 justify-center">
          {menuItems.map((item) => (
            <button key={item.id} onClick={() => { navigate(item.id); onClose(); }}
              className="text-left text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 hover:from-cyan-400 hover:to-white transition-all duration-300 font-mono group flex items-center gap-4 py-2"
              aria-label={`Navigate to ${item.label}`}>
              <span className="text-sm text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-8 border-t border-white/10">
          <p className="text-gray-500 font-mono text-sm mb-4">EXTERNAL LINKS</p>
          <div className="flex gap-4">
            <a href="https://github.com/harryneopotter" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="GitHub"><Github className="w-6 h-6" /></a>
            <a href="mailto:contact@bluepanda.in" className="text-gray-400 hover:text-cyan-400 transition-colors" aria-label="Email"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemMenu;
