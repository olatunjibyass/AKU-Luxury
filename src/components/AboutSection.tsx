import React from 'react';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenAppointment: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white relative overflow-hidden border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image with Luxury Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/40 bg-white group">
              <img
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85"
                alt="AKU Luxury Bridal Boutique Salon"
                className="w-full h-[380px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              
              {/* Decorative Corner Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/40 flex items-center gap-2 shadow-md">
                <Heart className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#8C6D1F]">
                  Est. 2018 • Luxury Bridal
                </span>
              </div>
            </div>

            {/* Floating Gold Frame Accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#D4AF37]/30 rounded-3xl pointer-events-none hidden sm:block -z-0" />
          </div>

          {/* Right Column: Text Story */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#8C6D1F]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs font-sans uppercase tracking-[0.25em] font-semibold">
                Our Story & Philosophy
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-normal leading-[1.15] tracking-tight">
              More Than a Dress. <br />
              <span className="italic text-[#D4AF37] font-light">It's Your Moment.</span>
            </h2>

            <div className="w-16 h-[2px] bg-[#D4AF37] rounded-full" />

            <p className="font-sans text-base text-[#222222]/80 font-light leading-relaxed">
              At AKU Bridal Atelier, we understand that finding your wedding gown is not merely shopping for a garment — it is one of the most emotional, sacred, and memorable chapters of your wedding journey.
            </p>

            <p className="font-sans text-base text-[#222222]/80 font-light leading-relaxed">
              Our boutique was created to offer an intimate, pressure-free sanctuary where every bride receives undivided personal attention, expert styling guidance, and access to world-renowned designer collections. We are dedicated to helping you discover a gown that flawlessly mirrors your unique personality, silhouette, and romantic vision.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenAppointment}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#B89320] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Meet Our Boutique</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
