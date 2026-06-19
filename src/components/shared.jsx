import { motion, useInView, useReducedMotion } from 'framer-motion';

// ============================================
// FRAMER MOTION ANIMATION VARIANTS
// ============================================
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// ============================================
// PAGE TRANSITION WRAPPER
// ============================================
export const PageWrapper = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="page-content"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// SECTION WRAPPER — scroll-triggered fade-up
// ============================================
export const Section = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      ref={ref}
      initial={prefersReducedMotion ? {} : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={`max-w-7xl mx-auto px-6 py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

// ============================================
// FADE-IN DIV
// ============================================
export const FadeIn = ({ children, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: [0.2, 0.9, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
};

// ============================================
// BUTTON COMPONENT
// ============================================
export const Button = ({ children, variant = 'primary', className = "", ...props }) => {
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]",
    outline: "bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
    gradient: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:scale-105 shadow-lg"
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${variants[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none`}
      {...props}
    >
      {children}
    </button>
  );
};
