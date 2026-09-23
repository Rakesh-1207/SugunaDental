import React from 'react';
import { Star, Sparkles, ArrowRight, Calendar, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero({ onOpenBooking, onOpenAISmile }) {
  return (
    <section className="relative bg-gradient-to-b from-orange-50/60 via-white to-slate-50 text-slate-900 pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-32 overflow-hidden">
      {/* Soft Decorative Animated Glow - Richer tone with delayed motion */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-orange-500/35 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" 
        style={{ animationDelay: '1.2s', animationDuration: '5.5s' }}
      />
      <div 
        className="absolute top-10 left-10 w-80 h-80 bg-orange-600/25 rounded-full blur-[110px] pointer-events-none animate-float-slow" 
        style={{ animationDelay: '2.2s', animationDuration: '8s' }}
      />
      <div 
        className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/30 rounded-full blur-[120px] pointer-events-none animate-float" 
        style={{ animationDelay: '3.5s', animationDuration: '7s' }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Rating Pill with subtle pulse */}
        <ScrollReveal direction="down" delay={100}>
          <div className="inline-flex items-center space-x-2 bg-white/90 border border-orange-200 rounded-full px-4 py-1.5 text-xs text-slate-700 shadow-md backdrop-blur-md hover:border-orange-400 transition-all hover:scale-105 cursor-pointer">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-500 animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </div>
            <span className="font-bold text-slate-900">4.9 / 5.0 Rating on Justdial</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-600 font-medium">15,000+ Happy Smiles</span>
          </div>
        </ScrollReveal>

        {/* Hero Headline */}
        <ScrollReveal direction="up" delay={200}>
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-slate-900 leading-[1.1]">
              Precision Dentistry, <br className="hidden sm:block" />
              <span className="text-orange-600 italic font-serif relative inline-block">
                Composed for You.
                <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full opacity-60" />
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl font-normal max-w-2xl mx-auto leading-relaxed pt-2">
              A quiet standard of dental & maxillofacial excellence in Tiruchengode West. Advanced 3D smile design, painless surgery, and lifetime implants.
            </p>
          </div>
        </ScrollReveal>

        {/* Clean CTA Buttons */}
        <ScrollReveal direction="up" delay={350}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm transition-all shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              <Calendar className="w-4 h-4 mr-2" />
              Book a Visit
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
            </button>

            <button
              onClick={onOpenAISmile}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-orange-50/80 text-slate-800 font-semibold text-sm border border-orange-200 hover:border-orange-400 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center justify-center group"
            >
              <Sparkles className="w-4 h-4 mr-2 text-orange-600 group-hover:rotate-12 transition-transform" />
              Try AI Smile Tool
            </button>
          </div>
        </ScrollReveal>

        {/* Minimalist Animated Metrics Strip */}
        <ScrollReveal direction="up" delay={500}>
          <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-slate-200/80 max-w-4xl mx-auto text-left sm:text-center">
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs hover-glow-card">
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-orange-600">15,000+</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Patients Treated</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs hover-glow-card">
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">4.9 / 5.0</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Justdial Rating</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs hover-glow-card">
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-orange-600">14+ Yrs</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Specialist Experience</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs hover-glow-card">
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">100%</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Pain-Free Protocol</div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

