import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import { BottomNav } from './SuperpositionComponents';
import { projects } from './projects';
import { slugify } from './utils/slugify';
import { PageWrapper } from './components/shared';
import Footer from './components/Footer';
import SystemMenu from './components/SystemMenu';

// Lazy-loaded pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const InfrastructureArchitect = lazy(() => import('./pages/InfrastructureArchitect'));

const SITE_URL = 'https://bluepanda.in';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;

const routeMeta = {
  '/': {
    title: 'Blue Panda - Responsible Infrastructure & Applied AI',
    description: 'Responsible infrastructure, applied AI, and system correction since 2013. Focusing on long-term stability and resilience.',
  },
  '/services': {
    title: 'Services - Blue Panda Infrastructure, AI & Engineering',
    description: 'Explore Blue Panda services across resilient cloud infrastructure, controlled AI integration, automation, and custom engineering correction.',
  },
  '/case-studies': {
    title: 'Case Studies - Blue Panda Systems Work',
    description: 'Detailed Blue Panda case studies covering secure infrastructure, applied AI, custom engineering, automation, and measurable system outcomes.',
  },
  '/about': {
    title: 'About - Blue Panda Hosting and Designs',
    description: 'Learn how Blue Panda has built and maintained infrastructure, websites, and applied systems since 2013 with a long-term reliability focus.',
  },
  '/contact': {
    title: 'Contact - Blue Panda',
    description: 'Contact Blue Panda to discuss resilient infrastructure, applied AI, automation, system correction, or careful long-term engineering support.',
  },
  '/architect': {
    title: 'AI Architect Demo - Blue Panda',
    description: 'Use the Blue Panda AI Architect demo to turn messy system constraints into a practical infrastructure and implementation blueprint.',
  },
};

const buildStructuredData = (canonicalUrl) => [
  { '@context': 'https://schema.org', '@type': 'Organization', name: 'Blue Panda Hosting and Designs', url: SITE_URL, logo: DEFAULT_IMAGE, foundingDate: '2013', email: 'mailto:sachin@bluepanda.in', sameAs: ['https://github.com/harryneopotter'] },
  { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Blue Panda', url: SITE_URL, description: 'Responsible infrastructure, applied AI, and system correction since 2013.' },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Responsible Infrastructure and Applied AI Engineering', provider: { '@type': 'Organization', name: 'Blue Panda Hosting and Designs', url: SITE_URL }, areaServed: 'Worldwide', serviceType: ['Cloud Infrastructure', 'AI Integration', 'Automation', 'Custom Development', 'Technical Consulting'], url: canonicalUrl },
];

const SEOHead = () => {
  const location = useLocation();
  useEffect(() => {
    const normalizedPath = location.pathname.replace(/\/$/, '') || '/';
    const projectSlug = normalizedPath.startsWith('/case-studies/') ? normalizedPath.split('/').pop() : null;
    const project = projectSlug ? projects.find((item) => slugify(item.title) === projectSlug) : null;
    const meta = project ? { title: `${project.title} - Blue Panda Case Study`, description: project.description }
      : normalizedPath.startsWith('/case-studies') ? routeMeta['/case-studies']
      : routeMeta[normalizedPath] || routeMeta['/'];
    const canonicalUrl = `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
    document.title = meta.title;

    const upsertMeta = (selector, attributes) => {
      let el = document.head.querySelector(selector);
      if (!el) { el = document.createElement('meta'); document.head.appendChild(el); }
      Object.entries(attributes).forEach(([k, v]) => el.setAttribute(k, v));
    };
    const upsertLink = (rel, href) => {
      let el = document.head.querySelector(`link[rel="${rel}"]`);
      if (!el) { el = document.createElement('link'); el.setAttribute('rel', rel); document.head.appendChild(el); }
      el.setAttribute('href', href);
    };

    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: meta.description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: project ? 'article' : 'website' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: DEFAULT_IMAGE });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: meta.description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: DEFAULT_IMAGE });
    upsertLink('canonical', canonicalUrl);

    let script = document.head.querySelector('script[data-blue-panda-schema="site"]');
    if (!script) { script = document.createElement('script'); script.type = 'application/ld+json'; script.dataset.bluePandaSchema = 'site'; document.head.appendChild(script); }
    script.textContent = JSON.stringify(buildStructuredData(canonicalUrl));
  }, [location.pathname]);
  return null;
};

const AppContent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPageId = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/case-studies')) return 'case-studies';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/contact')) return 'contact';
    if (path.startsWith('/architect')) return 'architect';
    return 'home';
  };

  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <div className="bg-void min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      <SEOHead />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[120] focus:rounded focus:bg-cyan-400 focus:px-4 focus:py-2 focus:font-mono focus:font-bold focus:text-black">Skip to content</a>
      <SystemMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-40 pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto cursor-pointer" onClick={() => navigate('/')} role="button" aria-label="Go to Home">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="font-mono text-cyan-400 font-bold tracking-widest glow-text-cyan shadow-black drop-shadow-md text-xl">BLUE PANDA</span>
        </div>
        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="font-mono text-base text-cyan-400/60 hidden md:block bg-black/50 px-3 py-1 rounded border border-cyan-500/20 backdrop-blur-sm">SYSTEM STATUS: STABLE</div>
          <button onClick={() => setIsMenuOpen(true)} className="p-2 bg-black/50 border border-cyan-500/30 rounded text-cyan-400 hover:bg-cyan-500/10 hover:text-white transition-all backdrop-blur-sm" aria-label="Open Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
      <main id="main-content" className="animate-fade-in pt-20" tabIndex="-1">
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" /></div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname.split('/')[1]}>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/architect" element={<InfrastructureArchitect />} />
              <Route path="/case-studies/*" element={<ProjectsPage />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <BottomNav currentPage={getCurrentPageId()} setPage={(id) => navigate(id === 'home' ? '/' : `/${id}`)} />
    </div>
  );
};

const App = () => {
  React.useEffect(() => {
    import('./services/webmcp.js').then(({ registerWebMCPTools }) => { registerWebMCPTools(); });
  }, []);
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
