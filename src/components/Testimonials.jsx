import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Kavitha Ramasamy',
      location: 'Tiruchengode',
      treatment: 'Maxillofacial Wisdom Tooth Surgery',
      rating: 5,
      date: '1 week ago',
      review: 'I was extremely terrified of wisdom tooth extraction due to severe pain in my jaw. Dr. Suguna made the procedure completely painless! The clinic sterilization and hospital standards are outstanding.'
    },
    {
      name: 'Suresh Kumar V.',
      location: 'Namakkal',
      treatment: 'Single Dental Implant',
      rating: 5,
      date: '2 weeks ago',
      review: 'Got my front tooth replaced with a titanium implant. The 3D scanning and zirconia crown look so natural that nobody can tell it is an implant. Highly recommend Shree Suguna Dental Centre!'
    },
    {
      name: 'Deepa Muthusamy',
      location: 'Velur Road, Tiruchengode',
      treatment: 'Invisible Clear Aligners',
      rating: 5,
      date: '1 month ago',
      review: 'The AI smile preview showed me how my teeth would look after aligners. After 6 months of clear aligner treatment, my teeth gap is fully closed without any wire pain.'
    },
    {
      name: 'Gokulakrishnan T.',
      location: 'Erode',
      treatment: 'Painless Root Canal',
      rating: 5,
      date: '3 weeks ago',
      review: 'Had severe toothache at night. Visited Shree Suguna Dental the next morning. They performed a single-visit root canal in under an hour with zero pain. Very professional team!'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 border-b border-slate-800 pb-8 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-orange-400">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Verified Patient Ratings</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Trusted By Thousands Of <span className="text-orange-gradient">Happy Smiles</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Read real experiences from patients treated at Shree Suguna Dental & Maxillofacial Centre.
            </p>
          </div>

          {/* Justdial Ratings Box */}
          <div className="mt-6 lg:mt-0 glass-card-dark p-4 rounded-2xl border border-slate-700 flex items-center space-x-4">
            <div className="text-center border-r border-slate-700 pr-4">
              <div className="font-heading font-extrabold text-3xl text-orange-400">4.9</div>
              <div className="flex text-amber-400 my-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-[10px] text-slate-400 font-medium">Justdial Rating</span>
            </div>

            <div>
              <div className="text-xs font-bold text-white">Shree Suguna Dental Profile</div>
              <div className="text-xs text-slate-400">15,000+ Satisfied Patients</div>
              <a 
                href="https://jsdl.in/DT-99SHLM4XZF5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-bold text-orange-400 hover:text-orange-300 mt-1 transition"
              >
                View Justdial Reviews <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-slate-950 rounded-3xl p-6 border border-slate-800 flex flex-col justify-between text-left hover:border-orange-500/40 transition group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-mono">{rev.date}</span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-sm text-white">{rev.name}</div>
                  <div className="text-xs text-slate-400">{rev.location}</div>
                </div>

                <div className="text-right">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    {rev.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
