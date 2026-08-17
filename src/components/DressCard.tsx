import React from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { Dress } from '../types';

interface DressCardProps {
  dress: Dress;
  onSelectDress: (dress: Dress) => void;
}

export const DressCard: React.FC<DressCardProps> = ({ dress, onSelectDress }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white">
        <img
          src={dress.image}
          alt={dress.name}
          className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Style Tag - Bold Solid Gold Badge */}
        <div className="absolute top-3 left-3 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs uppercase font-sans tracking-widest font-bold shadow-sm">
          {dress.style}
        </div>

        {/* Hover Quick Action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
          <button
            onClick={() => onSelectDress(dress)}
            className="px-5 py-2.5 rounded-full bg-white text-[#1A1A1A] hover:bg-[#D4AF37] hover:text-white font-sans text-xs sm:text-sm uppercase tracking-[0.18em] font-bold shadow-lg transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 flex items-center gap-2 cursor-pointer border border-[#D4AF37]"
          >
            <Eye className="w-4 h-4" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3 text-center">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1A1A1A] font-bold group-hover:text-[#B89320] transition-colors leading-snug">
            {dress.name}
          </h3>
          
          <p className="font-sans text-xs sm:text-sm text-[#222222] font-semibold leading-relaxed line-clamp-2 mt-1.5">
            {dress.description}
          </p>
        </div>

        <div className="pt-3 border-t-2 border-[#D4AF37]/30">
          <button
            onClick={() => onSelectDress(dress)}
            className="w-full py-2.5 rounded-full bg-[#D4AF37] text-white hover:bg-[#B89320] font-sans text-xs uppercase tracking-widest font-bold shadow-xs transition-all duration-300 cursor-pointer"
          >
            View Dress Details
          </button>
        </div>
      </div>

    </div>
  );
};
