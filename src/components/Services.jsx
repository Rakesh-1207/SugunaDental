import React from 'react';
import { Activity, ShieldCheck, Sparkles, Zap, Stethoscope, HeartHandshake, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Services({ onOpenBooking }) {
  const servicesList = [
    {
      icon: Activity,
      title: 'Oral & Maxillofacial Surgery',
      desc: 'Specialized management of jaw bone alignment, facial trauma, TMJ pain, and complex impacted wisdom teeth extractions.',
      tag: 'Hospital Specialty'
    },
    {
      icon: ShieldCheck,
      title: 'Dental Implants & Rehabilitation',
      desc: 'Single tooth to full arch All-on-4 implants using biocompatible titanium & zirconia for natural look and lifetime strength.',
      tag: 'Lifetime Guarantee'
    },
    {
      icon: Sparkles,
      title: 'Digital Cosmetic Smile Design',
      desc: 'Ultra-thin E-Max porcelain veneers, digital smile simulation, and 45-minute laser teeth whitening tailored to your facial proportions.',
      tag: 'Cosmetic Design'
    },
    {
      icon: Zap,
      title: 'Clear Invisible Aligners',
      desc: 'Straighten crowded teeth and gaps discreetly with removable clear aligners or low-profile aesthetic ceramic braces.',
      tag: '100% Invisible'
    },
    {
      icon: Stethoscope,
      title: 'Microscopic Painless Root Canal',
      desc: 'Single-visit endodontic treatment eliminating tooth pain using microscopic optics and flexible rotary titanium instruments.',
      tag: 'Pain-Free Tech'
    },
    {
      icon: HeartHandshake,
      title: 'Pediatric & Family Dentistry',
      desc: 'Gentle cavity prevention sealants, routine scaling, child-friendly care, and comprehensive senior oral healthcare.',
      tag: 'Family Care'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 text-left">
            <div>
              <span className="text-xs font-bold tracking-widest text-orange-600 uppercase">Clinical Specialties</span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2">
                Comprehensive Dental & <span className="italic font-serif text-orange-600">Surgical Care</span>
              </h2>
            </div>
            <p className="text-slate-600 text-sm sm:text-base max-w-md mt-4 md:mt-0">
              Hospital-grade treatments performed under single-use sterilization protocols in Tiruchengode West.
            </p>
          </div>
        </ScrollReveal>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {servicesList.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={150 + idx * 80}>
                <div 
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-orange-500 hover:bg-white hover-glow-card transition-all flex flex-col justify-between group h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all transform group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-white text-orange-600 border border-orange-200 shadow-xs group-hover:border-orange-400 transition-colors">
                        {srv.tag}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-orange-600 transition-colors">{srv.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{srv.desc}</p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/80">
                    <button
                      onClick={onOpenBooking}
                      className="text-xs font-bold text-orange-600 group-hover:text-orange-700 flex items-center transition cursor-pointer"
                    >
                      <span>Book Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}

