import React from 'react';
import { Crown, Heart, Sparkles, ShieldCheck } from 'lucide-react';

export const DreamDressSection: React.FC = () => {
  const bridalStyles = [
    { title: 'Classic & Timeless', desc: 'Regal satin and Mikado silhouettes with traditional cathedral trains.' },
    { title: 'Modern & Sophisticated', desc: 'Clean architectural lines, liquid silk crepe, and minimalist back drops.' },
    { title: 'Romantic & Floral', desc: 'Hand-sewn 3D botanical lace appliques, illusion tulle, and ethereal volume.' }
  ];

  return (
    <section className="py-8 sm:py-10 bg-[#FAF8F5] border-y-2 border-[#D4AF37]/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        {/* Crown Icon Emblem */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D4AF37] text-white shadow-md">
          <Crown className="w-6 h-6 stroke-[2.5]" />
        </div>

        {/* Section Heading */}
        <div className="space-y-2">
          <p className="text-xs sm:text-sm uppercase font-sans tracking-[0.3em] text-[#B89320] font-bold">
            Bespoke Bridal Elegance
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-bold tracking-tight">
            Your Dream Dress Awaits
          </h2>
          <div className="w-10 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Short Paragraph */}
        <p className="font-sans text-base sm:text-lg text-[#1A1A1A] max-w-2xl mx-auto font-medium leading-relaxed">
          At AKU, we believe every bride deserves an extraordinary experience finding the dress of her dreams. Our boutique offers a carefully curated selection of wedding gowns crafted for diverse bridal aesthetics.
        </p>

        {/* Style Cards - Extra Bold & High Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-3">
          {bridalStyles.map((style, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-[#D4AF37]/60 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 text-left group shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-white flex items-center justify-center mb-3.5 shadow-sm group-hover:bg-[#B89320] transition-colors">
                  <Sparkles className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] font-bold mb-2 group-hover:text-[#B89320] transition-colors leading-snug">
                  {style.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#333333] leading-relaxed font-semibold">
                  {style.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
