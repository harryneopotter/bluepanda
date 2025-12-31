import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import InfrastructureArchitect from './components/InfrastructureArchitect';
import Footer from './components/Footer';
import SystemMenu from './components/SystemMenu';
import CaseStudyModal from './components/CaseStudyModal';
import { caseStudiesData } from './caseStudiesData'; // This might need to be moved or adjusted

// --- Loading Screen ---
const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-cyan-400 font-mono">
      <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-cyan-400 shadow-[0_0_10px_#00F0FF] transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-sm animate-pulse">
        LOADING :: {Math.min(100, Math.floor(progress))}%
      </div>
    </div>
  );
};


// --- Main App Component ---
const App = () => {
  const [page, setPage] = useState('home');
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const navigate = (to) => {
    setPage(to);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Check for direct navigation or refresh
    const path = window.location.pathname.replace('/', '');
    if (path && ['home', 'services', 'projects', 'about', 'contact', 'architect'].includes(path)) {
      setPage(path);
    }
  }, []);

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;

  return (
    <div className="bg-void min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      <SystemMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navigate={navigate} />
      <CaseStudyModal project={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />

      {/* Global Header */}
      <header className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-40 pointer-events-none">
        <div 
          className="flex items-center gap-2 pointer-events-auto cursor-pointer group" 
          onClick={() => navigate('home')} 
          role="button" 
        >
          <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:animate-ping" />
          <span className="font-mono text-white font-bold tracking-[0.3em] uppercase text-sm group-hover:text-cyan-400 transition-colors">
            Blue Panda
          </span>
        </div>
        
        <div className="flex items-center gap-6 pointer-events-auto">
          <nav className="hidden md:flex gap-8">
             {[
               { id: 'services', label: 'Services' },
               { id: 'projects', label: 'Case Studies' },
               { id: 'about', label: 'About' }
             ].map(link => (
               <button 
                 key={link.id}
                 onClick={() => navigate(link.id)}
                 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors"
               >
                 {link.label}
               </button>
             ))}
          </nav>
          
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 border border-white/10 rounded hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all group"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5 text-gray-400 group-hover:text-cyan-400" />
          </button>
        </div>
      </header>

      <main className="animate-fade-in">
        {page === 'home' && <HomePage navigate={navigate} />}
        {page === 'services' && <ServicesPage />}
        {page === 'about' && <AboutPage navigate={navigate} />}
        {page === 'contact' && <ContactPage />}
        {page === 'architect' && <InfrastructureArchitect />}
        {page === 'projects' && <ProjectsPage onOpenCaseStudy={setSelectedCaseStudy} />}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;