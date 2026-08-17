import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-[#FAF8F5] relative border-b-2 border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2.5 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/15 text-[#B89320]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] font-bold">
              Real Bride Stories
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-bold tracking-tight">
            Words From Our Brides
          </h2>

          <div className="w-10 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-white border-2 border-[#D4AF37]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 relative group"
            >
              <Quote className="w-8 h-8 text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors absolute top-4 right-4" />

              <div className="space-y-3">
                {/* 5 Star Rating */}
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="font-sans text-sm sm:text-base text-[#1A1A1A] font-semibold leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-3 border-t-2 border-[#D4AF37]/20 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A]">
                    — {t.author}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#B89320] uppercase tracking-wider font-bold">
                    {t.weddingYear}
                  </p>
                </div>
                {t.location && (
                  <span className="text-xs text-[#333333] font-sans uppercase tracking-widest font-bold">
                    {t.location}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
