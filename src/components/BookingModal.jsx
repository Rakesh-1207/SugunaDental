import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: 'Dental Implants & Surgery',
    doctor: 'Dr. Suguna MDS (Maxillofacial Surgeon)',
    date: new Date().toISOString().split('T')[0],
    slot: '10:30 AM',
    name: '',
    phone: '',
    notes: ''
  });

  if (!isOpen) return null;

  const servicesList = [
    'Maxillofacial & Trauma Surgery',
    'Dental Implants & Rehabilitation',
    'AI Cosmetic Smile Design & Veneers',
    'Invisible Clear Aligners',
    'Painless Single-Visit Root Canal',
    'Wisdom Tooth Extraction',
    'General Dental Checkup'
  ];

  const doctorsList = [
    'Dr. Suguna MDS (Chief Maxillofacial Surgeon)',
    'Dr. R. Karthik BDS, MDS (Cosmetic & Endodontist)',
    'First Available Specialist'
  ];

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', '04:30 PM', '05:30 PM', '06:30 PM', '07:30 PM', '08:30 PM'
  ];

  const handleCompleteBooking = (e) => {
    e.preventDefault();
    setStep(4);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.5 } });
    } catch {
      // Ignore confetti errors if canvas is unsupported
    }
  };

  const handleSendWhatsApp = () => {
    const message = `*NEW APPOINTMENT BOOKING - SHREE SUGUNA DENTAL*\n\n` +
      `*Patient Name:* ${bookingData.name}\n` +
      `*Phone Number:* ${bookingData.phone}\n` +
      `*Service Required:* ${bookingData.service}\n` +
      `*Doctor:* ${bookingData.doctor}\n` +
      `*Date:* ${bookingData.date}\n` +
      `*Time Slot:* ${bookingData.slot}\n` +
      `*Notes:* ${bookingData.notes || 'None'}\n\n` +
      `Please confirm my appointment slot.`;
    
    const waUrl = `https://wa.me/919751865559?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="glass-card-dark rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-700 shadow-2xl relative text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-gradient text-white flex items-center justify-center shadow-md">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-xl text-white">Book Dental Visit</h3>
            <p className="text-xs text-orange-400 font-medium">Shree Suguna Dental & Maxillofacial Centre</p>
          </div>
        </div>

        {/* Wizard Steps indicator */}
        {step < 4 && (
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6 text-xs text-slate-400 font-semibold">
            <span className={step >= 1 ? 'text-orange-400 font-bold' : ''}>1. Service</span>
            <span>→</span>
            <span className={step >= 2 ? 'text-orange-400 font-bold' : ''}>2. Date & Time</span>
            <span>→</span>
            <span className={step >= 3 ? 'text-orange-400 font-bold' : ''}>3. Patient Info</span>
          </div>
        )}

        {/* Step 1: Select Service & Doctor */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Select Required Service:</label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {servicesList.map((srv, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setBookingData({...bookingData, service: srv})}
                    className={`w-full p-3 rounded-xl text-xs font-bold text-left transition border flex items-center justify-between cursor-pointer ${
                      bookingData.service === srv 
                        ? 'bg-orange-500/20 border-orange-500 text-white' 
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{srv}</span>
                    {bookingData.service === srv && <CheckCircle2 className="w-4 h-4 text-orange-400" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Select Specialist Doctor:</label>
              <select
                value={bookingData.doctor}
                onChange={(e) => setBookingData({...bookingData, doctor: e.target.value})}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
              >
                {doctorsList.map((d, i) => (
                  <option key={i} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3.5 rounded-xl bg-orange-gradient text-white font-extrabold text-xs shadow-lg orange-glow hover:opacity-95 transition cursor-pointer flex items-center justify-center mt-4"
            >
              Continue to Date & Time <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>
        )}

        {/* Step 2: Date & Slot */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Choose Date:</label>
              <input
                type="date"
                value={bookingData.date}
                onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-2">Select Time Slot:</label>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((slot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setBookingData({...bookingData, slot: slot})}
                    className={`py-2 px-1 rounded-xl text-xs font-bold text-center border cursor-pointer ${
                      bookingData.slot === slot
                        ? 'bg-orange-500 border-orange-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 cursor-pointer"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-2/3 py-3 rounded-xl bg-orange-gradient text-white font-extrabold text-xs shadow-lg orange-glow hover:opacity-95 cursor-pointer flex items-center justify-center"
              >
                Next: Patient Info <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Patient Info Form */}
        {step === 3 && (
          <form onSubmit={handleCompleteBooking} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Full Patient Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Saravanan K."
                value={bookingData.name}
                onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Mobile Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="97518XXXXX"
                value={bookingData.phone}
                onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">Additional Symptoms / Notes (Optional)</label>
              <textarea
                rows="2"
                placeholder="e.g. Severe tooth pain on lower right side"
                value={bookingData.notes}
                onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}
                className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-1/3 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 py-3 rounded-xl bg-orange-gradient text-white font-extrabold text-xs shadow-lg orange-glow hover:opacity-95 cursor-pointer flex items-center justify-center"
              >
                Confirm Booking Request 🎉
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Confirmation Screen */}
        {step === 4 && (
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h4 className="font-heading font-extrabold text-2xl text-white">Appointment Reserved!</h4>
              <p className="text-xs text-slate-300 mt-1">
                Your appointment request for <strong className="text-orange-400">{bookingData.service}</strong> on <strong className="text-white">{bookingData.date} @ {bookingData.slot}</strong> is registered.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1.5 text-left">
              <div><strong>Patient:</strong> {bookingData.name}</div>
              <div><strong>Doctor:</strong> {bookingData.doctor}</div>
              <div><strong>Location:</strong> Rathna Tower, Velur Road, Tiruchengode West</div>
              <div><strong>Contact:</strong> 9751865559 / 9751875559</div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs shadow-lg transition cursor-pointer flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                Dispatch Instant WhatsApp Confirmation
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-700 cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
