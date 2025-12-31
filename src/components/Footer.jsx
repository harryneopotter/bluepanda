import React from 'react';

const Footer = ({ navigate }) => (
    <footer className="relative z-10 border-t border-white/5 bg-void pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="font-mono text-cyan-400 font-bold tracking-widest uppercase">Blue Panda</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Responsible infrastructure, applied AI, and system correction since 2013.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-white text-xs tracking-widest uppercase mb-6 opacity-50">Navigation</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigate('services')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Services</button></li>
                <li><button onClick={() => navigate('projects')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Case Studies</button></li>
                <li><button onClick={() => navigate('architect')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AI Architect</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-white text-xs tracking-widest uppercase mb-6 opacity-50">Company</h4>
              <ul className="space-y-4">
                <li><button onClick={() => navigate('about')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About</button></li>
                <li><button onClick={() => navigate('contact')} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] font-mono tracking-widest">
            © 2013-2025 BLUE PANDA HOSTING AND DESIGNS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            <a href="mailto:sachin@bluepanda.in" className="text-gray-600 hover:text-cyan-400 transition-colors font-mono text-[10px] tracking-widest uppercase">
              sachin@bluepanda.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  export default Footer;