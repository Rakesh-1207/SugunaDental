import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* WhatsApp Floating Chat Button */}
      <a
        href="https://wa.me/919751865559?text=Hello%20Shree%20Suguna%20Dental,%20I%20would%20like%20to%20book%20an%20appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 transition-all flex items-center justify-center group relative cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Doctor
        </span>
      </a>

      {/* Phone Call Floating Button */}
      <a
        href="tel:9751865559"
        className="w-13 h-13 rounded-full bg-slate-900 text-orange-400 border border-orange-500/40 shadow-xl hover:bg-slate-800 hover:scale-110 transition-all flex items-center justify-center group relative cursor-pointer"
        aria-label="Call Emergency Phone"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-slate-700 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call: 9751865559
        </span>
      </a>

    </div>
  );
}

