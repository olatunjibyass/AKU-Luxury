import React, { useState } from 'react';
import { X, Sparkles, Calendar, Check, ShieldCheck, Heart } from 'lucide-react';
import { Dress, ACUITY_BOOKING_URL } from '../types';

interface DressModalProps {
  dress: Dress | null;
  onClose: () => void;
  onBookDress?: (dressName: string) => void;
}

export const DressModal: React.FC<DressModalProps> = ({ dress, onClose, onBookDress }) => {
  if (!dress) return null;

  const [activeImage, setActiveImage] = useState(
    dress.image
  );
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden my-auto max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#222222] border border-[#D4AF37]/30 flex items-center justify-center shadow-md transition-all duration-200 cursor-pointer"
          aria-label="Close dress modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Images */}
        <div className="md:w-1/2 p-6 bg-white flex flex-col items-center justify-between border-b md:border-b-0 md:border-r border-[#D4AF37]/20">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-inner group">
            <img
              src={activeImage}
              alt={dress.name}
              className="w-full h-full object-cover object-top transition-all duration-500"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setFavorite(!favorite)}
              className="absolute top-4 left-4 p-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-md text-[#D4AF37] hover:scale-110 transition-all cursor-pointer"
              aria-label="Save to favorites"
            >
              <Heart className={`w-5 h-5 ${favorite ? 'fill-[#D4AF37]' : ''}`} />
            </button>
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 text-white text-[10px] tracking-widest uppercase">
              {dress.style}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          {dress.additionalImages && dress.additionalImages.length > 1 && (
            <div className="flex gap-3 mt-4 w-full justify-center">
              {dress.additionalImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-14 h-18 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImage === img ? 'border-[#D4AF37] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Details & Specs */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#8C6D1F] text-[11px] uppercase tracking-widest font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              Signature Collection
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#222222] font-medium">
              {dress.name}
            </h2>
            
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#8C6D1F] font-semibold mt-1">
              {dress.tagline}
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#222222]/80 leading-relaxed font-light mt-4 pt-4 border-t border-[#D4AF37]/20">
              {dress.description}
            </p>

            {/* Technical Specifications */}
            <div className="mt-6 space-y-3 bg-white p-4 rounded-xl border border-[#D4AF37]/20 text-xs">
              <div className="flex justify-between py-1 border-b border-[#D4AF37]/10">
                <span className="text-[#222222]/60 font-medium">Silhouette:</span>
                <span className="text-[#222222] font-semibold">{dress.silhouette}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D4AF37]/10">
                <span className="text-[#222222]/60 font-medium">Fabric:</span>
                <span className="text-[#222222] font-semibold">{dress.fabric}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#D4AF37]/10">
                <span className="text-[#222222]/60 font-medium">Neckline:</span>
                <span className="text-[#222222] font-semibold">{dress.neckline}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#222222]/60 font-medium">Fitting:</span>
                <span className="text-[#8C6D1F] font-semibold">Private VIP Suite</span>
              </div>
            </div>

            {/* Included Services */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-[11px] text-[#222222]/80">
                <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Complimentary champagne during fitting</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-[#222222]/80">
                <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>In-house master seamstress alterations</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4 border-t border-[#D4AF37]/20">
            <a
              href={ACUITY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#B89320] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment For This Dress</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
