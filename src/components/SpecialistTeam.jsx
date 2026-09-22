import React from 'react';
import { Calendar } from 'lucide-react';

export default function SpecialistTeam({ onOpenBooking }) {
  const doctors = [
    {
      name: 'Dr. Suguna MDS',
      role: 'Chief Maxillofacial & Trauma Surgeon',
      qualification: 'BDS, MDS - Oral & Maxillofacial Surgery',
      exp: '14+ Years Clinical Experience',
      bio: 'Specializing in facial bone trauma, jaw realignment surgery, complex dental implants, and surgical wisdom teeth extractions.',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800'
    },
    {
      name: 'Dr. R. Karthik BDS, MDS',
      role: 'Senior Cosmetic Dentist & Endodontist',
      qualification: 'BDS, MDS - Aesthetic Dentistry & Root Canal',
      exp: '10+ Years Clinical Practice',
      bio: 'Focused on digital smile design, porcelain veneers, microscopic single-visit root canals, and invisible clear aligner treatments.',
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-bold tracking-widest text-orange-600 uppercase">Specialist Team</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2">
            Led by Experienced <span className="italic font-serif text-orange-600">Surgeons & Doctors</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            Compassionate experts committed to high-precision surgical care in Tiruchengode.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {doctors.map((doc, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-6 items-start hover:border-orange-500 hover:shadow-md transition"
            >
              <img 
                src={doc.img} 
                alt={doc.name} 
                className="w-full sm:w-40 h-48 rounded-2xl object-cover shrink-0"
              />

              <div className="space-y-3 flex-1">
                <div>
                  <span className="text-xs font-bold text-orange-600">{doc.role}</span>
                  <h3 className="font-heading font-bold text-xl text-slate-900 mt-0.5">{doc.name}</h3>
                  <div className="text-xs text-slate-500 font-medium">{doc.qualification} • {doc.exp}</div>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">{doc.bio}</p>

                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="px-4 py-2 rounded-full bg-orange-50 hover:bg-orange-600 hover:text-white text-xs font-bold text-orange-700 border border-orange-200 transition cursor-pointer flex items-center"
                  >
                    <Calendar className="w-3.5 h-3.5 mr-1.5" />
                    Book Visit with Doctor
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
