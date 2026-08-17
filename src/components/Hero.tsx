import React from 'react';
import { ArrowRight, Sparkles, Heart, Calendar } from 'lucide-react';
import { ACUITY_BOOKING_URL } from '../types';

interface HeroProps {
  onOpenAppointment?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section id="home" className="relative min-h-[48vh] sm:min-h-[56vh] flex items-center justify-center pt-20 sm:pt-24 pb-8 overflow-hidden bg-white">
      {/* Uploaded Background Wallpaper Image */}
      <div 
        className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat z-0 transition-all duration-500" 
        style={{ backgroundImage: `url('https://i.postimg.cc/CxNdtvww/af54b652-1c0a-47a4-8b25-7ea27f485859.png')` }}
      />
      
      {/* Elegant Soft Light Gradient Overlay for Optimal Text Legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40 sm:to-white/20 z-[1] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-xl space-y-3 sm:space-y-4">
          
          {/* Brand Emblem Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 border-2 border-[#D4AF37] shadow-sm backdrop-blur-sm">
            <img 
              src="https://i.postimg.cc/L52byBRL/PHOTO-2026-08-07-13-08-21.jpg" 
              alt="AKU Logo" 
              className="w-6 h-6 object-cover rounded-full border border-[#D4AF37]"
              referrerPolicy="no-referrer"
            />
            <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] font-extrabold text-[#B89320]">
              AKU Luxury Bride
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.12] tracking-tight">
            Find the Dress <br />
            <span className="italic font-bold text-[#B89320] relative inline-block">
              You'll Say Yes To.
              <svg className="absolute -bottom-1 left-0 w-full h-1.5 text-[#D4AF37]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,15 Q50,5 100,15" stroke="currentColor" strokeWidth="3.5" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="font-sans text-sm sm:text-base text-[#1A1A1A] font-semibold leading-relaxed max-w-lg">
            Discover timeless wedding gowns designed to make your special day unforgettable. Personalized private fittings tailored to your unique love story.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
            <a
              href="#dresses"
              className="w-full sm:w-auto px-6 py-3 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.18em] font-bold hover:bg-[#B89320] hover:border-[#B89320] shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Explore Our Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
            </a>

            <a
              href={ACUITY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-full border-2 border-[#D4AF37] bg-white hover:bg-[#FAF8F2] text-[#1A1A1A] hover:text-[#B89320] font-sans text-xs sm:text-sm uppercase tracking-[0.18em] font-bold shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
              <span>Book an Appointment</span>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="pt-3.5 border-t-2 border-[#D4AF37]/30 flex flex-wrap items-center gap-4 text-[#1A1A1A] text-xs sm:text-sm tracking-wider font-bold">
            <div className="flex items-center gap-2">
              <span className="text-[#B89320] font-serif text-lg font-bold">100%</span>
              <span>Exclusive Designer Gowns</span>
            </div>
            <span className="text-[#D4AF37] hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="text-[#B89320] font-serif text-lg font-bold">1-on-1</span>
              <span>Private VIP Fitting Suite</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
