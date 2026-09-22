import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-left">
          
          <div className="lg:col-span-4 space-y-4">
            {/* Simple logo without extra border or container */}
            <a href="#" className="flex items-center space-x-3">
              <img src="/logo.png" alt="Sree Suguna Dental" className="h-10 w-auto object-contain" />
              <img src="/logo-text.png" alt="Sree SUGUNA Dental & Maxillofacial Centre" className="h-8 w-auto object-contain bg-white px-2 py-1 rounded-md shadow-xs" />
            </a>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Tiruchengode West's premier dental & maxillofacial hospital. Precision dentistry, 3D smile design, and painless surgical care.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-1.5">
              <li><a href="#approach" className="hover:text-orange-400 transition">Approach</a></li>
              <li><a href="#services" className="hover:text-orange-400 transition">Services</a></li>
              <li><a href="#ai-smile-preview" className="hover:text-orange-400 transition">AI Smile Tool</a></li>
              <li><a href="#cost-estimator" className="hover:text-orange-400 transition">Pricing & EMI</a></li>
              <li><a href="#results" className="hover:text-orange-400 transition">Results</a></li>
              <li><a href="#team" className="hover:text-orange-400 transition">Specialist Team</a></li>
              <li><button onClick={onOpenBooking} className="hover:text-orange-400 transition cursor-pointer text-left">Book Appointment</button></li>
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-2">
            <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider">Hospital Address & Helplines</h4>
            <p className="text-slate-300 leading-relaxed">
              <strong>Shree Suguna Dental & Maxillofacial Centre</strong><br />
              Rathna Tower, Near Union Bank Of India, Velur Road, Tiruchengode West-637211, Tamil Nadu.
            </p>
            <div className="pt-1 text-slate-300">
              Helplines: <a href="tel:9751865559" className="text-orange-400 font-bold hover:underline">9751865559</a> / <a href="tel:9751875559" className="text-orange-400 font-bold hover:underline">9751875559</a>
            </div>
            <div className="pt-2">
              <a 
                href="https://jsdl.in/DT-99SHLM4XZF5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs text-orange-400 hover:underline font-semibold"
              >
                View Justdial Profile <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-[11px] gap-4">
          <div>
            © {new Date().getFullYear()} Shree Suguna Dental & Maxillofacial Centre. All Rights Reserved.
          </div>
          <div>
            Tiruchengode West, Tamil Nadu
          </div>
        </div>

      </div>
    </footer>
  );
}
