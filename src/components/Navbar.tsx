import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config.ts';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Get Quote', href: '#quote' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1F3A]/90 backdrop-blur-md border-b border-sky-400/20 py-3 shadow-lg shadow-black/10'
          : 'bg-[#0B1F3A]/70 backdrop-blur-sm border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white group focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-400 to-amber-300 p-[1.5px] shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0B1F3A] rounded-[10px] flex items-center justify-center">
                {/* Window Pane SVG Icon */}
                <div className="relative w-5 h-5 grid grid-cols-2 gap-[2px]">
                  <div className="bg-sky-400 rounded-tl-sm opacity-90" />
                  <div className="bg-sky-200 rounded-tr-sm opacity-90" />
                  <div className="bg-sky-500 rounded-bl-sm opacity-90" />
                  <div className="bg-sky-300 rounded-br-sm opacity-90" />
                  <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-amber-300 animate-pulse pointer-events-none" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-white leading-tight">
                Marín <span className="text-sky-400 font-semibold">Window Services</span>
              </span>
              <span className="text-[11px] text-slate-300 font-medium tracking-wider uppercase">
                Chicago & Suburbs
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-sky-300 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 rounded py-1 px-1.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Call button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={SITE_CONFIG.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm shadow-md shadow-sky-500/25 hover:shadow-sky-500/40 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-300"
              aria-label={`Call ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={SITE_CONFIG.phoneTel}
              className="p-2 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-400/30 active:scale-95 sm:hidden"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden bg-[#0B1F3A]/98 backdrop-blur-xl border-b border-sky-500/20 px-5 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200"
          id="mobile-menu"
        >
          <nav className="flex flex-col space-y-3 pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-sky-300 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-700/60 flex flex-col gap-3">
            <a
              href={SITE_CONFIG.phoneTel}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-center shadow-lg shadow-sky-500/30"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>Call {SITE_CONFIG.phoneDisplay}</span>
            </a>
            <div className="text-center text-xs text-slate-400">
              Serving {SITE_CONFIG.serviceArea}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
