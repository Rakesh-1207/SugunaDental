import React, { useState } from 'react';
import { Calculator, CheckCircle2, CreditCard, Calendar, Clock } from 'lucide-react';

export default function CostCalculator({ onOpenBooking }) {
  const [selectedService, setSelectedService] = useState('implants');

  const treatments = [
    {
      id: 'implants',
      name: 'Single Dental Implant',
      category: 'Implantology',
      estPriceMin: 18000,
      estPriceMax: 28000,
      visits: '2 Visits',
      duration: '45 mins per session',
      warranty: 'Lifetime Warranty',
      emi: '₹1,999 / mo',
      includes: ['3D CBCT Scan', 'Titanium Abutment', 'Zirconia Crown', 'Zero-Pain Anesthesia']
    },
    {
      id: 'maxillofacial',
      name: 'Maxillofacial Trauma / Jaw Alignment',
      category: 'Oral Surgery',
      estPriceMin: 25000,
      estPriceMax: 45000,
      visits: 'Specialist Evaluation',
      duration: 'Case Dependent',
      warranty: 'Hospital Grade Care',
      emi: '₹2,799 / mo',
      includes: ['Specialist Surgeon Review', 'Internal Fixation', 'Post-Op Monitoring', 'Medication Plan']
    },
    {
      id: 'aligners',
      name: 'Invisible Clear Aligners',
      category: 'Orthodontics',
      estPriceMin: 35000,
      estPriceMax: 65000,
      visits: 'Monthly Checkups',
      duration: '6 - 10 Months Total',
      warranty: 'Guaranteed Alignment',
      emi: '₹3,499 / mo',
      includes: ['3D Digital Impression', 'Full Aligner Set', 'Retainers Included', 'Progress Monitoring']
    },
    {
      id: 'rootcanal',
      name: 'Microscopic Painless Root Canal + Crown',
      category: 'Endodontics',
      estPriceMin: 4500,
      estPriceMax: 8500,
      visits: 'Single Visit Option',
      duration: '60 minutes',
      warranty: '10-Year Crown Guarantee',
      emi: '₹699 / mo',
      includes: ['Rotary Endodontics', 'Rubber Dam Sterilization', 'Ceramic Crown', 'Pain-Free Guarantee']
    },
    {
      id: 'veneers',
      name: 'Cosmetic Porcelain Veneers (Per Tooth)',
      category: 'Cosmetic Design',
      estPriceMin: 8000,
      estPriceMax: 14000,
      visits: '2 Visits',
      duration: '7 Days Total',
      warranty: '15-Year Porcelain Warranty',
      emi: '₹999 / mo',
      includes: ['Digital Smile Mockup', 'E-Max Swiss Ceramic', 'Custom Shade Match', 'Micro-Preparation']
    },
    {
      id: 'wisdom',
      name: 'Wisdom Tooth Surgical Extraction',
      category: 'Oral Surgery',
      estPriceMin: 3500,
      estPriceMax: 6500,
      visits: '1 Visit',
      duration: '30 - 45 minutes',
      warranty: 'Full Recovery Support',
      emi: '₹499 / mo',
      includes: ['Digital X-Ray', 'Painless Local Anesthesia', 'Dissolvable Sutures', 'Post-Op Care Kit']
    }
  ];

  const currentTreatment = treatments.find(t => t.id === selectedService);

  return (
    <section id="cost-estimator" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 px-4 py-1.5 rounded-full text-xs font-bold text-orange-400">
            <Calculator className="w-4 h-4 text-orange-500" />
            <span>Transparent Pricing & EMI Calculator</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Treatment & <span className="text-orange-gradient">Cost Estimator</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg">
            No hidden costs. Calculate estimated procedure costs, 0% interest monthly EMI, and included hospital services instantly.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Procedure Selection */}
          <div className="lg:col-span-6 space-y-3">
            <h3 className="font-heading font-bold text-base text-slate-300 mb-3 text-left">
              1. Select Required Dental Procedure:
            </h3>

            {treatments.map((t) => {
              const isSelected = selectedService === t.id;
              return (
                <div
                  key={t.id}
                  onClick={() => setSelectedService(t.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between text-left ${
                    isSelected 
                      ? 'bg-slate-950 border-orange-500 shadow-lg orange-glow-sm' 
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                      isSelected ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-600'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="font-heading font-bold text-sm text-white">{t.name}</div>
                      <div className="text-xs text-slate-400">{t.category} • {t.visits}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs font-bold text-orange-400">
                      ₹{t.estPriceMin.toLocaleString('en-IN')} - ₹{t.estPriceMax.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[10px] text-slate-400">EMI from {t.emi}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Cost Breakdown & Payment Summary Card */}
          <div className="lg:col-span-6">
            <div className="glass-card-dark rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">Estimate Summary</span>
                  <h3 className="font-heading font-extrabold text-xl text-white mt-1">{currentTreatment.name}</h3>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/30">
                  {currentTreatment.warranty}
                </div>
              </div>

              {/* Price Breakdown display */}
              <div className="py-6 space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm text-slate-300">Estimated Procedure Cost:</span>
                  <div className="text-right">
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-orange-400">
                      ₹{currentTreatment.estPriceMin.toLocaleString('en-IN')} - ₹{currentTreatment.estPriceMax.toLocaleString('en-IN')}
                    </span>
                    <div className="text-[11px] text-slate-400">*Final price depends on clinical case complexity</div>
                  </div>
                </div>

                {/* EMI Option Banner */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-950/40 to-slate-900 border border-orange-500/30 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="w-5 h-5 text-orange-400 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">0% Interest Easy Monthly EMI</div>
                      <div className="text-xs text-slate-300">Pay as low as <strong className="text-amber-400">{currentTreatment.emi}</strong></div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
                    No Hidden Fee
                  </span>
                </div>

                {/* Treatment Details Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs pt-2">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-slate-400 flex items-center mb-1"><Clock className="w-3.5 h-3.5 mr-1 text-orange-400" /> Duration</div>
                    <div className="font-bold text-white">{currentTreatment.duration}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="text-slate-400 flex items-center mb-1"><Calendar className="w-3.5 h-3.5 mr-1 text-orange-400" /> Clinic Visits</div>
                    <div className="font-bold text-white">{currentTreatment.visits}</div>
                  </div>
                </div>

                {/* Included Services list */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-300 mb-2.5">What is Included in This Package:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {currentTreatment.includes.map((inc, i) => (
                      <div key={i} className="flex items-center space-x-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 rounded-2xl bg-orange-gradient text-white font-extrabold text-sm shadow-xl orange-glow hover:opacity-95 transition-all cursor-pointer flex items-center justify-center"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Lock In Estimate & Book Visit
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
