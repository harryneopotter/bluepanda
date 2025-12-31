import React from 'react';
import { X } from 'lucide-react';

const SystemMenu = ({ isOpen, onClose, navigate }) => {
    if (!isOpen) return null;

    const menuItems = [
      { id: 'home', label: 'HOME' },
      { id: 'services', label: 'SERVICES' },
      { id: 'projects', label: 'CASE STUDIES' },
      { id: 'architect', label: 'AI ARCHITECT' },
      { id: 'about', label: 'ABOUT' },
      { id: 'contact', label: 'CONTACT' },
    ];

    return (
      <div className="fixed inset-0 z-[100] flex justify-end">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <div className="relative w-full max-w-md h-full bg-void border-l border-white/5 p-12 flex flex-col animate-slide-in-right">
          <div className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2 font-mono text-cyan-400 font-bold tracking-widest uppercase">
              System Access
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.id);
                  onClose();
                }}
                className="text-left text-3xl font-bold text-gray-700 hover:text-cyan-400 transition-all duration-300 font-mono tracking-tighter"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-white/5">
            <p className="text-gray-600 font-mono text-[10px] tracking-widest uppercase mb-4 text-center">
              Operating Since 2013
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default SystemMenu;