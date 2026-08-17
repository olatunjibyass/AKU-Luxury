import React from 'react';
import { Phone, Mail, Clock, Sparkles, Calendar, Heart, ShieldCheck } from 'lucide-react';
import { ACUITY_BOOKING_URL } from '../types';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-8 sm:py-10 bg-white relative border-b border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-2.5 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/15 text-[#B89320]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] font-bold">
              Concierge & Inquiries
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-bold tracking-tight">
            Connect With Us
          </h2>

          <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Info Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            
            {/* Phone */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border-2 border-[#D4AF37]/50 shadow-sm hover:border-[#D4AF37] transition-all flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B89320] text-black border border-[#E8D396] flex items-center justify-center shrink-0 shadow-xs">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                  Direct Concierge
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#1A1A1A] font-bold">
                  <a href="tel:919673215" className="hover:text-[#B89320] transition-colors">(919) 673-215</a>
                </p>
                <p className="font-sans text-xs text-[#222222]/80 font-medium">
                  Direct styling assistance & appointment inquiries
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border-2 border-[#D4AF37]/50 shadow-sm hover:border-[#D4AF37] transition-all flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B89320] text-black border border-[#E8D396] flex items-center justify-center shrink-0 shadow-xs">
                <Mail className="w-5 h-5 text-black" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                  Email Inquiries
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#1A1A1A] font-bold truncate">
                  <a href="mailto:info@akuluxury.com" className="hover:text-[#B89320] transition-colors">
                    info@akuluxury.com
                  </a>
                </p>
                <p className="font-sans text-xs text-[#222222]/80 font-medium">
                  General inquiries, bespoke requests & consultations
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="p-4 sm:p-5 rounded-xl bg-white border-2 border-[#D4AF37]/50 shadow-sm hover:border-[#D4AF37] transition-all flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B89320] text-black border border-[#E8D396] flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-5 h-5 text-black" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                  Concierge Hours
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#1A1A1A] font-semibold leading-snug">
                  <strong>Mon–Sat:</strong> 10:00 AM – 6:00 PM | <strong>Sun:</strong> By Appointment
                </p>
                <p className="font-sans text-xs text-[#222222]/80 font-medium">
                  Private fittings arranged exclusively by appointment
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Private VIP Fitting Reservation Card */}
          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-2xl overflow-hidden border-2 border-[#D4AF37] shadow-md bg-gradient-to-br from-[#FAF8F2] via-white to-[#FAF8F2] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#B89320] border border-[#D4AF37]/40 text-xs uppercase font-sans tracking-widest font-bold">
                  <Heart className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  <span>VIP Experience</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] font-bold leading-tight">
                  Book Your Private Bridal Fitting
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#1A1A1A] font-medium leading-relaxed">
                  Enjoy a dedicated 90-minute private styling suite with our senior bridal consultants. Explore our exclusive gown collections with complimentary champagne for you and your guests.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#1A1A1A]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>1-on-1 Dedicated Stylist</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#1A1A1A]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Complimentary Champagne</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#1A1A1A]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Full Gown Collection Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-sans font-semibold text-[#1A1A1A]">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Custom Alteration Consult</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-[#D4AF37]/30">
                <a
                  href={ACUITY_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#B89320] text-white font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule Private Appointment</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
