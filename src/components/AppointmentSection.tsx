import React, { useState } from 'react';
import { Calendar, Clock, Users, Mail, Phone, User, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  prefilledDress?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ prefilledDress }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    guestCount: 2,
    interestedDress: prefilledDress || '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const timeSlots = [
    '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.preferredDate) {
      setErrorMsg('Please fill in all required fields (Name, Email, Phone, Preferred Date).');
      return;
    }

    setErrorMsg('');
    const code = 'AUR-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="py-12 sm:py-16 bg-white relative overflow-hidden border-b border-[#D4AF37]/20">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#8C6D1F]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-sans uppercase tracking-[0.25em] font-semibold">
              Private VIP Fitting Suite
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-normal tracking-tight">
            Ready to Find Your Dress?
          </h2>

          <p className="font-sans text-base text-[#222222]/80 font-light leading-relaxed max-w-2xl mx-auto">
            Book your bridal appointment and let us help you find the gown you've been dreaming of. Enjoy an exclusive 90-minute private suite with your loved ones.
          </p>

          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Appointment Card Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 shadow-xl">
          
          {submitted ? (
            /* Confirmation State */
            <div className="text-center py-10 space-y-6 animate-fade-in max-w-lg mx-auto">
              <div className="w-20 h-20 bg-[#D4AF37]/10 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#8C6D1F] font-semibold font-sans">
                  Appointment Request Received
                </span>
                <h3 className="font-serif text-3xl text-[#222222]">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="font-sans text-xs text-[#222222]/70">
                  Your reference code is <span className="font-mono font-bold text-[#D4AF37]">{confirmationCode}</span>
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#D4AF37]/20 text-left text-xs space-y-2.5">
                <div className="flex justify-between py-1 border-b border-[#D4AF37]/10">
                  <span className="text-[#222222]/60">Date & Time:</span>
                  <span className="font-semibold text-[#222222]">{formData.preferredDate} at {formData.preferredTime}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#D4AF37]/10">
                  <span className="text-[#222222]/60">Guests:</span>
                  <span className="font-semibold text-[#222222]">{formData.guestCount} Guest(s)</span>
                </div>
                {formData.interestedDress && (
                  <div className="flex justify-between py-1 border-b border-[#D4AF37]/10">
                    <span className="text-[#222222]/60">Requested Dress:</span>
                    <span className="font-semibold text-[#8C6D1F]">{formData.interestedDress}</span>
                  </div>
                )}
                <div className="flex justify-between py-1">
                  <span className="text-[#222222]/60">Location:</span>
                  <span className="font-semibold text-[#222222]">Beverly Hills Atelier</span>
                </div>
              </div>

              <p className="font-sans text-xs text-[#222222]/70 font-light">
                Our lead bridal stylist will reach out via phone or email within 24 hours to confirm your private suite.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    preferredDate: '',
                    preferredTime: '10:00 AM',
                    guestCount: 2,
                    interestedDress: '',
                    message: ''
                  });
                }}
                className="px-8 py-3 rounded-full border border-[#D4AF37] text-[#8C6D1F] hover:bg-[#D4AF37] hover:text-white font-sans text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs text-center font-sans">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-sans text-[#222222] font-semibold flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#222222] transition-all font-sans"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-sans text-[#222222] font-semibold flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#222222] transition-all font-sans"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-sans text-[#222222] font-semibold flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(310) 555-0192"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#222222] transition-all font-sans"
                  />
                </div>

                {/* Preferred Date */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-sans text-[#222222] font-semibold flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#222222] transition-all font-sans"
                  />
                </div>

                {/* Preferred Time */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-sans text-[#222222] font-semibold flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#222222] transition-all font-sans"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                {/* Number of Guests */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-sans text-[#222222] font-semibold flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Number of Guests</span>
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#222222] transition-all font-sans"
                  >
                    <option value={1}>1 Guest (Bride solo)</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5 Guests (VIP Suite Max)</option>
                  </select>
                </div>
              </div>

              {/* Message / Additional Preferences */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-sans text-[#222222] font-semibold flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Bridal Preferences & Message</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your wedding date, venue style, or specific gowns you'd love to try on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none text-sm text-[#222222] transition-all font-sans resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-4 rounded-full bg-[#D4AF37] hover:bg-[#B89320] text-white font-sans text-xs uppercase tracking-[0.2em] font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Request Appointment
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
