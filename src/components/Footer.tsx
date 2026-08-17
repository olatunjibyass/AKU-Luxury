import React from 'react';
import { Instagram, Facebook, Calendar, Sparkles } from 'lucide-react';
import { ACUITY_BOOKING_URL } from '../types';

interface FooterProps {
  onOpenAppointment?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  return (
    <footer className="bg-[#111111] text-white pt-10 pb-8 border-t-2 border-[#D4AF37] relative overflow-hidden">
      
      {/* Background subtle gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-[0_0_20px_#D4AF37]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Tagline Column */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-4 group">
              <div className="relative p-1 bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#B89320] rounded-2xl shadow-xl border-2 border-[#D4AF37] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] shrink-0">
                <img 
                  src="https://i.postimg.cc/L52byBRL/PHOTO-2026-08-07-13-08-21.jpg" 
                  alt="AKU Luxury Bride Logo" 
                  className="h-16 sm:h-20 w-16 sm:w-20 object-cover rounded-xl bg-white shadow-inner"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-3xl sm:text-4xl tracking-[0.25em] font-extrabold text-[#D4AF37] group-hover:text-[#F3E5AB] transition-colors block drop-shadow-md">
                  AKU
                </span>
                <span className="text-[11px] sm:text-xs tracking-[0.4em] uppercase font-sans text-white font-extrabold block mt-1">
                  LUXURY BRIDE
                </span>
              </div>
            </a>

            <p className="font-sans text-xs sm:text-sm text-white/90 font-medium leading-relaxed max-w-sm">
              Discover timeless wedding gowns designed to make your special day unforgettable. Experience ultimate luxury and bespoke bridal craftsmanship.
            </p>

            {/* Social Links */}
            <div className="pt-1 flex items-center justify-center md:justify-start gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-[#D4AF37] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B89320] text-[#D4AF37] hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-[#D4AF37] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B89320] text-[#D4AF37] hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-[#D4AF37] hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#B89320] text-[#D4AF37] hover:text-black flex items-center justify-center transition-all cursor-pointer font-sans text-[10px] font-bold shadow-xs"
                aria-label="TikTok"
              >
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3 text-center md:text-left">
            <h4 className="font-serif text-lg text-[#D4AF37] font-bold tracking-wider uppercase border-b border-[#D4AF37]/30 pb-1.5 inline-block">
              Navigation Menu
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans uppercase tracking-[0.18em] font-bold text-[#E8D396]">
              <li>
                <a href="#home" className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                  <span className="text-[#D4AF37]">✦</span> Home
                </a>
              </li>
              <li>
                <a href="#dresses" className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2">
                  <span className="text-[#D4AF37]">✦</span> Wedding Dresses
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors flex items-center justify-center md:justify-start gap-2">
                  <span className="text-[#D4AF37]">✦</span> Contact
                </a>
              </li>
              <li>
                <a 
                  href={ACUITY_BOOKING_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 text-[#D4AF37]"
                >
                  <span className="text-[#D4AF37]">✦</span> Book an Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* VIP Fitting Action */}
          <div className="md:col-span-3 space-y-3 text-center md:text-left bg-black/60 p-4 rounded-xl border border-[#D4AF37] shadow-lg">
            <h4 className="font-serif text-lg text-[#D4AF37] font-bold">
              Private Fittings
            </h4>
            <p className="font-sans text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
              Reserve your exclusive 90-minute private fitting suite for you and your guests.
            </p>
            <a
              href={ACUITY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E8D396] to-[#B89320] text-black font-sans text-xs uppercase tracking-[0.18em] font-bold transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center gap-1.5 cursor-pointer border border-[#E8D396]"
            >
              <Calendar className="w-3.5 h-3.5 text-black" />
              <span>Book Appointment</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between text-[10px] font-sans text-white/70 space-y-2 sm:space-y-0 font-medium">
          <p>© 2026 AKU Luxury Bride. All Rights Reserved.</p>
          <div className="flex gap-4 text-[#D4AF37]">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Fitting FAQs</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
