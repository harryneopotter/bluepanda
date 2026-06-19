import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ParticleBackground, HologramPanda, ServicesGrid, FeaturedProjects } from '../SuperpositionComponents';
import { PageWrapper, fadeInUp, staggerContainer, Button } from '../components/shared';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-void text-white overflow-hidden">
        <ParticleBackground />
        <motion.div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp} className="mb-0"><HologramPanda /></motion.div>
          <motion.div variants={fadeInUp} className="mt-4 mb-4 relative">
            <span className="relative px-4 py-1 rounded-full border border-cyan-500/30 bg-black/50 text-cyan-400 font-mono text-xs md:text-lg tracking-widest uppercase">Problem-solving, not service selling.</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight max-w-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-400">Blue Panda — Responsible Infrastructure for the Long Term</span>
          </motion.h1>
          <motion.div variants={fadeInUp} className="text-lg md:text-xl text-gray-300 max-w-3xl mb-12 font-mono leading-relaxed space-y-4 text-left md:text-center mx-auto">
            <p>We design and maintain resilient infrastructure, applied systems, and custom engineering — focused on long-term stability, clarity, and reliability.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full max-w-5xl mb-24">
            <Button onClick={() => navigate('/services')} variant="outline">Services</Button>
            <Button onClick={() => navigate('/case-studies')} variant="outline">Case Studies</Button>
            <Button onClick={() => navigate('/architect')} variant="outline">AI Architect Demo</Button>
            <Button onClick={() => navigate('/about')} variant="outline">About</Button>
            <Button onClick={() => navigate('/contact')} variant="outline">Contact</Button>
          </motion.div>
        </motion.div>
        <div className="relative z-10 py-32 bg-black/20 backdrop-blur-sm border-t border-white/5">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold mb-4">WHAT WE DO</h2><div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" /></div>
          <ServicesGrid />
        </div>
        <div className="relative z-10 py-32 border-t border-white/5">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold mb-4">CASE STUDIES</h2><div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto" /></div>
          <FeaturedProjects navigate={(to) => navigate(to === 'case-studies' ? '/case-studies' : to)} />
          <div className="text-center mt-12">
            <Button onClick={() => navigate('/case-studies')} variant="outline" className="mx-auto">View All Case Studies <ArrowRight className="w-4 h-4" /></Button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HomePage;
