import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onFinish }) {
  const [isExiting, setIsExiting] = useState(false);
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Animated loading dots
    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 400);

    // Screen exit timer after brief load
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        if (onFinish) onFinish();
      }, 500); // match fade duration
    }, 1600);

    return () => {
      clearInterval(dotsInterval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white text-slate-900 transition-opacity duration-500 ease-out select-none ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-6 text-center px-4">
        
        {/* Brand Logo & Brand Name Container */}
        <div className="flex items-center space-x-3 sm:space-x-4 animate-pulse">
          <img
            src="/logo.png"
            alt="Sree Suguna Dental Logo"
            className="h-12 sm:h-16 w-auto object-contain transition-transform"
          />
          <img
            src="/logo-text.png"
            alt="Sree SUGUNA Dental & Maxillofacial Centre"
            className="h-8 sm:h-11 w-auto object-contain"
          />
        </div>

        {/* Minimalist Loading Dots Animation */}
        <div className="pt-2">
          <span className="text-sm font-semibold tracking-wider text-slate-400 font-sans">
            Loading<span className="inline-block w-6 text-left text-orange-600 font-bold">{dots}</span>
          </span>
        </div>

      </div>
    </div>
  );
}
