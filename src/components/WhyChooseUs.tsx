import React from 'react';
import { Crown, HeartHandshake, Gem, CalendarCheck } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Crown,
      title: 'Curated Bridal Collection',
      desc: 'Beautiful wedding dresses carefully selected for modern brides seeking timeless beauty and craftsmanship.'
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Experience',
      desc: 'A welcoming bridal experience focused on helping every bride find the right dress with dedicated styling.'
    },
    {
      icon: Gem,
      title: 'Quality & Elegance',
      desc: 'Beautiful gowns selected for quality, world-class craftsmanship, hand-embroidery, and timeless style.'
    },
    {
      icon: CalendarCheck,
      title: 'Bridal Appointments',
      desc: 'Private appointments designed to make finding your dress comfortable, intimate, and truly memorable.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-[#D4AF37]/20 relative overflow-hidden">
      
      {/* Background Decorative Gold Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <p className="text-xs uppercase font-sans tracking-[0.3em] text-[#8C6D1F] font-semibold">
            The Aurelia Difference
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-normal tracking-tight">
            Why Choose Us
          </h2>
          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* 4 Feature Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 text-center space-y-4 group"
              >
                {/* Gold Line Style Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#D4AF37]/40 flex items-center justify-center mx-auto text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300 shadow-xs">
                  <IconComponent className="w-8 h-8 stroke-[1.5]" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#222222] font-medium group-hover:text-[#8C6D1F] transition-colors">
                  {feature.title}
                </h3>

                <p className="font-sans text-xs text-[#222222]/75 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
