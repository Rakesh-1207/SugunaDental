import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Header({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Approach', href: '#approach' },
    { name: 'Services', href: '#services' },
    { name: 'AI Smile Tool', href: '#ai-smile-preview' },
    { name: 'Pricing', href: '#cost-estimator' },
    { name: 'Results', href: '#results' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Main Navigation - Glassmorphic Transparency Style */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/75 backdrop-blur-xl shadow-lg shadow-slate-900/5 py-3 border-b border-slate-200/60 text-slate-900' 
          : 'bg-white/50 backdrop-blur-md py-4 text-slate-900 border-b border-slate-200/40'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Clinic Brand Name */}
          <a href="#" className="flex items-center space-x-3 group">
            <img 
              src="/logo.png" 
              alt="Sree Suguna Dental Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <img 
              src="/logo-text.png" 
              alt="Sree SUGUNA Dental & Maxillofacial Centre" 
              className="h-7 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full text-xs font-bold bg-orange-600 hover:bg-orange-700 text-white transition-all shadow-md hover:shadow-orange-500/20 cursor-pointer flex items-center"
            >
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              Book a Visit
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-bold bg-orange-600 text-white"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-orange-600"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white text-slate-900 px-6 pt-4 pb-6 border-t border-slate-200 space-y-4 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 border-b border-slate-100"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full text-xs font-bold bg-orange-600 text-white shadow-lg"
              >
                Book a Visit
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
