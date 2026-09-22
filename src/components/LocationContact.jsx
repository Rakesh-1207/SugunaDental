import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

export default function LocationContact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Consultation',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const text = `Hello Shree Suguna Dental, I would like to inquire about ${formData.service}. Name: ${formData.name}, Phone: ${formData.phone}. Notes: ${formData.message}`;
    const waUrl = `https://wa.me/919751865559?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-bold tracking-widest text-orange-600 uppercase">Contact & Directions</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2">
            Visit Our <span className="italic font-serif text-orange-600">Hospital Centre</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Address & Helplines */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-600 shrink-0" />
                <h3 className="font-heading font-bold text-lg text-slate-900">Shree Suguna Dental & Maxillofacial Centre</h3>
              </div>

              <div className="text-sm text-slate-600 leading-relaxed pl-8">
                Rathna Tower, Near Union Bank Of India,<br />
                Velur Road, Tiruchengode West,<br />
                Tiruchengode - 637211, Tamil Nadu.
              </div>

              <div className="pt-3 pl-8 flex items-center space-x-3">
                <a
                  href="https://jsdl.in/DT-99SHLM4XZF5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-orange-600 hover:underline"
                >
                  View on Justdial Profile <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-600 shrink-0" />
                <h4 className="font-heading font-bold text-base text-slate-900">Phone Helplines</h4>
              </div>

              <div className="pl-8 space-y-2 text-sm text-slate-700">
                <div>Primary: <a href="tel:9751865559" className="font-bold text-orange-600 hover:underline">9751865559</a></div>
                <div>Secondary: <a href="tel:9751875559" className="font-bold text-orange-600 hover:underline">9751875559</a></div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-600 shrink-0" />
                <h4 className="font-heading font-bold text-base text-slate-900">Clinic Hours</h4>
              </div>

              <div className="pl-8 text-xs text-slate-600 space-y-1">
                <div>Mon - Sat: <strong className="text-slate-900">9:00 AM - 9:00 PM</strong></div>
                <div>Sunday: <strong className="text-slate-900">9:00 AM - 1:30 PM</strong></div>
              </div>
            </div>

          </div>

          {/* Map & Form */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="rounded-3xl overflow-hidden border border-slate-200 h-72 shadow-md">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.175512838902!2d77.8860000!3d11.3780000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba964177b96fb89%3A0x892978bc15bb7c66!2sTiruchengode%2C%20Tamil%20Nadu%20637211!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-4">Send Doctor Inquiry</h3>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <div className="font-bold text-slate-900 text-sm">Dispatched via WhatsApp!</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-orange-500"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-orange-500"
                  >
                    <option value="Maxillofacial Surgery">Maxillofacial & Jaw Surgery</option>
                    <option value="Dental Implants">Dental Implants</option>
                    <option value="AI Smile Preview">Cosmetic Smile Preview / Veneers</option>
                    <option value="Clear Aligners">Invisible Clear Aligners</option>
                    <option value="Root Canal Treatment">Microscopic Root Canal</option>
                    <option value="General Consultation">General Checkup</option>
                  </select>

                  <textarea
                    rows="3"
                    placeholder="Message / Dental Concern..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-orange-500"
                  ></textarea>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5 mr-2" />
                    Send Inquiry via WhatsApp
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
