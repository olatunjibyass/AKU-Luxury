import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Mail, Phone, User, MessageSquare, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { ACUITY_BOOKING_URL } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledDressName?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, prefilledDressName }) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('11:30 AM');
  const [guestCount, setGuestCount] = useState(2);
  const [message, setMessage] = useState(prefilledDressName ? `Interested in trying on: ${prefilledDressName}` : '');
  const [submitted, setSubmitted] = useState(false);
  const [code, setCode] = useState('');

  const timeSlots = ['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = 'AUR-' + Math.floor(100000 + Math.random() * 900000);
    setCode(generatedCode);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#D4AF37]/50 p-6 sm:p-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-[#D4AF37] text-[#222222] hover:text-white transition-all shadow-xs cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-[#D4AF37]/20 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-[#8C6D1F] font-semibold font-sans">
                Fitting Confirmed
              </span>
              <h3 className="font-serif text-3xl text-[#222222]">
                We Look Forward to Meeting You!
              </h3>
              <p className="font-sans text-xs text-[#222222]/70">
                Confirmation ID: <span className="font-mono font-bold text-[#D4AF37]">{code}</span>
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#D4AF37]/20 text-left text-xs space-y-2">
              <p><strong>Name:</strong> {fullName}</p>
              <p><strong>Date & Time:</strong> {preferredDate} at {preferredTime}</p>
              <p><strong>Guests:</strong> {guestCount}</p>
              {prefilledDressName && <p><strong>Dress Focus:</strong> {prefilledDressName}</p>}
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full bg-[#D4AF37] text-white font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[#B89320] transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#8C6D1F] text-[10px] uppercase tracking-widest font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                VIP Private Fitting Suite
              </div>
              <h2 className="font-serif text-3xl text-[#222222]">
                Book Your Bridal Appointment
              </h2>
              {prefilledDressName && (
                <p className="font-sans text-xs text-[#8C6D1F] font-medium">
                  Requesting fitting for: <span className="font-semibold underline">{prefilledDressName}</span>
                </p>
              )}

              <div className="pt-2">
                <a
                  href={ACUITY_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#B89320] text-white font-sans text-xs uppercase tracking-widest font-bold shadow-md transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open Acuity Online Scheduler</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-sans text-[#222222] font-semibold block mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Eleanor Vance"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-xs focus:border-[#D4AF37] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-sans text-[#222222] font-semibold block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-xs focus:border-[#D4AF37] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-sans text-[#222222] font-semibold block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(310) 555-0192"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-xs focus:border-[#D4AF37] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-sans text-[#222222] font-semibold block mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-xs focus:border-[#D4AF37] outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-sans text-[#222222] font-semibold block mb-1">Preferred Time</label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-xs focus:border-[#D4AF37] outline-none"
                  >
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-wider font-sans text-[#222222] font-semibold block mb-1">Number of Guests</label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-xs focus:border-[#D4AF37] outline-none"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5 Guests (Max)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider font-sans text-[#222222] font-semibold block mb-1">Message / Special Requests</label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any specific dresses or styles you'd like us to prepare for you..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D4AF37]/30 text-xs focus:border-[#D4AF37] outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#B89320] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-md transition-all cursor-pointer"
                >
                  Request Appointment
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
