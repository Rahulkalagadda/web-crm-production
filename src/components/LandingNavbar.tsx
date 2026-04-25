import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const LandingNavbar: React.FC = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-white/70 backdrop-blur-2xl border-b shadow-sm' : 'py-6 bg-transparent border-b border-transparent'
      }`}
      style={{ borderColor: scrolled ? 'var(--surface-container)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
            <div className="w-11 h-11 bg-primary rounded-[14px] flex items-center justify-center shadow-2xl shadow-primary/30 group-hover:rotate-6 transition-transform duration-500">
              <span className="material-symbols-outlined text-white text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>apartment</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-on-surface tracking-tighter leading-none">EstateFlow</span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-primary">Elite Platform</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-10">
            {['Features', 'Solutions', 'Pricing', 'Resources'].map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-[13px] font-black uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/auth')} 
            className="text-[13px] font-black uppercase tracking-widest text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Log in
          </button>
          <button 
            onClick={() => navigate('/auth')} 
            className="px-8 py-3.5 bg-primary text-white rounded-2xl font-black text-[13px] uppercase tracking-widest shadow-2xl shadow-primary/25 hover:scale-105 hover:shadow-primary/40 active:scale-95 transition-all duration-500"
          >
            Join Elite
          </button>
        </div>
      </div>
    </nav>
  );
};
