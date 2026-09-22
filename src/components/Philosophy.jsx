import React from 'react';

export default function Philosophy() {
  const pillars = [
    {
      num: '01',
      title: 'Diagnostics First',
      subtitle: '3D CBCT & Digital Imaging',
      desc: 'We never guess. Low-radiation 3D imaging allows sub-millimeter precision mapping of jaw bone and teeth before any procedure begins.'
    },
    {
      num: '02',
      title: 'Zero-Pain Commitment',
      subtitle: 'Gentle & Laser Care',
      desc: 'Dental care should be tranquil and comfortable. Laser dentistry and computer-guided local anesthesia ensure zero discomfort.'
    },
    {
      num: '03',
      title: 'Facially-Driven Aesthetics',
      subtitle: 'Natural Smile Harmony',
      desc: 'Every smile design is customized to harmonize with your lip curve, skin undertone, and natural facial symmetry.'
    }
  ];

  return (
    <section id="approach" className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-bold tracking-widest text-orange-600 uppercase">Our Approach</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2">
            Care, Designed with <span className="italic font-serif text-orange-600">Intention.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            We focus on long-term oral health, natural aesthetics, and absolute patient comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {pillars.map((p, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-orange-500 hover:shadow-md transition-all space-y-4"
            >
              <div className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full inline-block">
                {p.num}
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">{p.title}</h3>
              <div className="text-xs font-semibold text-orange-600">{p.subtitle}</div>
              <p className="text-slate-600 text-sm leading-relaxed pt-2">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
