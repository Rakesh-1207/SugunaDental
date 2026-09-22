import React, { useState } from 'react';
import { Sparkles, Scan, ArrowLeftRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AISmileScanner({ onOpenBooking }) {
  const [selectedOption, setSelectedOption] = useState('veneers');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [sliderPos, setSliderPos] = useState(50);

  const smileOptions = [
    {
      id: 'veneers',
      title: 'Hollywood Porcelain Veneers',
      desc: 'Flawless tooth shape & natural translucent brightness.',
      duration: '2 Visits',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
      afterImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'aligners',
      title: 'Clear Invisible Aligners',
      desc: 'Correct crowded teeth & gaps without metal braces.',
      duration: '4 - 8 Months',
      beforeImg: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
      afterImg: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'whitening',
      title: 'Laser Teeth Whitening',
      desc: 'Up to 8 shades whiter in 45 minutes.',
      duration: '45 Minutes',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
      afterImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'implants',
      title: 'Full Mouth Implant Restoration',
      desc: 'Permanent titanium implant roots for missing teeth.',
      duration: 'Single Visit Setup',
      beforeImg: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
      afterImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    }
  ];

  const currentSmile = smileOptions.find(o => o.id === selectedOption);

  const scanStepsText = [
    'Mapping facial symmetry & lip line curve...',
    'Analyzing gingival margin & tooth shade index...',
    'Simulating 3D smile proportion algorithms...',
    'Generating high-definition cosmetic preview...'
  ];

  const handleStartScan = () => {
    setIsScanning(true);
    setIsCompleted(false);
    setScanStep(0);
    setScanProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      setScanProgress(progress);

      if (progress === 25) setScanStep(1);
      if (progress === 50) setScanStep(2);
      if (progress === 75) setScanStep(3);

      if (progress >= 100) {
        clearInterval(interval);
        setIsScanning(false);
        setIsCompleted(true);
        try {
          confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
        } catch {
          // Ignore confetti error
        }
      }
    }, 35);
  };

  return (
    <section id="ai-smile-preview" className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-bold tracking-widest text-orange-600 uppercase">Digital Simulation</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2">
            See Your <span className="italic font-serif text-orange-600">New Smile</span> First
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            Select your smile goal below and run our digital preview tool to see your transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Options List */}
          <div className="lg:col-span-5 space-y-3">
            {smileOptions.map((opt) => {
              const isSelected = selectedOption === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => {
                    setSelectedOption(opt.id);
                    setIsCompleted(false);
                  }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start space-x-4 text-left ${
                    isSelected 
                      ? 'bg-orange-50/80 border-orange-500 shadow-sm' 
                      : 'bg-white border-slate-200 hover:border-orange-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                    isSelected ? 'bg-orange-600 border-orange-600 text-white' : 'border-slate-300'
                  }`}>
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <div className="flex-1">
                    <div className="font-heading font-bold text-base text-slate-900">{opt.title}</div>
                    <p className="text-xs text-slate-600 mt-1">{opt.desc}</p>
                    <div className="mt-2 text-[11px] font-bold text-orange-600">
                      Est. Duration: {opt.duration}
                    </div>
                  </div>
                </div>
              );
            })}

            <button
              onClick={handleStartScan}
              disabled={isScanning}
              className="w-full py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-50 mt-4 flex items-center justify-center"
            >
              {isScanning ? (
                <>
                  <Scan className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing ({scanProgress}%)...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2 text-amber-200" />
                  Run AI 3D Simulation
                </>
              )}
            </button>
          </div>

          {/* Preview Canvas */}
          <div className="lg:col-span-7">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xl relative">
              
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 select-none border border-slate-200">
                {isScanning && (
                  <div className="absolute inset-0 z-30 bg-slate-900/95 flex flex-col items-center justify-center p-6 text-center text-white">
                    <Scan className="w-10 h-10 text-orange-500 animate-pulse mb-3" />
                    <div className="font-heading font-bold text-sm text-white mb-2">
                      {scanStepsText[scanStep]}
                    </div>
                    <div className="w-48 bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full transition-all duration-300" style={{ width: `${scanProgress}%` }}></div>
                    </div>
                  </div>
                )}

                {!isScanning && (
                  <>
                    <img src={currentSmile.beforeImg} alt="Before" className="absolute inset-0 w-full h-full object-cover" />
                    
                    <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
                      <img src={currentSmile.afterImg} alt="After" className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: '100%', height: '100%' }} />
                      <span className="absolute top-4 left-4 bg-orange-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                        {isCompleted && <Sparkles className="w-3 h-3 text-amber-200" />}
                        {isCompleted ? 'AI Scan Completed' : 'AI Transformation'}
                      </span>
                    </div>

                    <span className="absolute top-4 right-4 bg-slate-900/80 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-md">
                      Before
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
                  </>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                <span>Drag slider to compare Before vs After</span>
                <button onClick={onOpenBooking} className="text-orange-600 hover:underline font-bold">
                  Book Consultation →
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
