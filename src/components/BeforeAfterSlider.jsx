import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const clinicalCases = [
    {
      id: 1,
      category: 'Maxillofacial Reconstruction',
      patient: 'Ramesh K.',
      procedure: 'Post-Trauma Facial Bone Realignment',
      timeframe: '3 Weeks',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
      afterImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
      desc: 'Restored jaw alignment and full chewing function after severe trauma.'
    },
    {
      id: 2,
      category: 'Dental Implants',
      patient: 'Saravanan M.',
      procedure: 'All-On-4 Immediate Fixed Bridge',
      timeframe: 'Single Visit',
      beforeImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      afterImg: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
      desc: 'Replaced missing upper arch with permanent titanium implants.'
    },
    {
      id: 3,
      category: 'Cosmetic Veneers',
      patient: 'Priya D.',
      procedure: '10 E-Max Porcelain Veneers',
      timeframe: '2 Visits',
      beforeImg: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
      afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
      desc: 'Corrected chipped enamel and discoloration with ultra-thin ceramic veneers.'
    }
  ];

  const current = clinicalCases[activeCase];

  return (
    <section id="results" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs font-bold tracking-widest text-orange-600 uppercase">Clinical Results</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2">
            Real Transformations, <span className="italic font-serif text-orange-600">Measured Care</span>
          </h2>
        </div>

        {/* Case Tabs */}
        <div className="flex space-x-3 mb-8 overflow-x-auto no-scrollbar pb-2">
          {clinicalCases.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCase(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                activeCase === idx 
                  ? 'bg-orange-600 text-white shadow-md' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Slider View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="lg:col-span-7">
            <div className="relative h-80 sm:h-[400px] rounded-2xl overflow-hidden select-none border border-slate-200">
              <img src={current.beforeImg} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
              
              <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                <img src={current.afterImg} alt="After" className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: '100%', height: '100%' }} />
                <span className="absolute top-4 left-4 bg-orange-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                  After Treatment
                </span>
              </div>

              <span className="absolute top-4 right-4 bg-slate-900/80 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-md">
                Before Condition
              </span>

              <div className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20 shadow-md" style={{ left: `${sliderPos}%` }}>
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-600 border border-white shadow-md flex items-center justify-center text-white">
                  <ArrowLeftRight className="w-4 h-4" />
                </div>
              </div>

              <input 
                type="range" 
                min="0" 
                max="100" 
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize z-25 w-full h-full"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="text-xs font-bold text-orange-600 uppercase">{current.category}</span>
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">{current.procedure}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{current.desc}</p>
            
            <div className="pt-2 text-xs text-slate-700 space-y-1 bg-white p-4 rounded-xl border border-slate-200">
              <div><strong>Patient:</strong> {current.patient}</div>
              <div><strong>Duration:</strong> {current.timeframe}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
