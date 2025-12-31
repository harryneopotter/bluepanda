import React from 'react';

export const ParticleBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* This is a simplified placeholder. A real implementation would use a library like particles.js or a custom WebGL solution. */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-cyan-400/10 animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 5 + 5}s`,
          }}
        />
      ))}
    </div>
  );

  export const GlitchText = ({ children }) => (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 z-0 text-red-500 animate-glitch-1">{children}</span>
      <span className="absolute inset-0 z-0 text-blue-500 animate-glitch-2">{children}</span>
    </span>
  );

  export const PandaHologram = () => (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <div className="absolute inset-0 bg-cyan-400/10 rounded-full animate-ping" />
      <div className="absolute inset-4 bg-cyan-400/10 rounded-full animate-ping animation-delay-300" />
      <span className="text-5xl">🐼</span>
    </div>
  );