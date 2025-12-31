import React from 'react';

export const Section = ({ children, className = "" }) => (
  <section className={`max-w-7xl mx-auto px-6 py-20 ${className}`}>
    {children}
  </section>
);

export const FadeIn = ({ children, delay = 0 }) => (
  <div className="animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
);

export const Button = ({ children, variant = 'primary', className = "", ...props }) => {
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]",
    outline: "bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
    gradient: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold hover:scale-105 shadow-lg"
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};