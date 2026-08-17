import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DreamDressSection } from './components/DreamDressSection';
import { DressCollection } from './components/DressCollection';
import { DressModal } from './components/DressModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Dress } from './types';

export default function App() {
  const [selectedDress, setSelectedDress] = useState<Dress | null>(null);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState<boolean>(false);
  const [prefilledDressName, setPrefilledDressName] = useState<string>('');

  const handleOpenAppointment = (dressName?: string) => {
    if (dressName) {
      setPrefilledDressName(dressName);
    } else {
      setPrefilledDressName('');
    }
    setAppointmentModalOpen(true);
  };

  const handleBookDress = (dressName: string) => {
    setPrefilledDressName(dressName);
    setAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#222222] font-sans selection:bg-[#D4AF37]/20 selection:text-[#8C6D1F]">
      
      {/* Navigation Header */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Page Layout */}
      <main>
        {/* Hero Section */}
        <Hero onOpenAppointment={() => handleOpenAppointment()} />

        {/* Short "Your Dream Dress Awaits" Section */}
        <DreamDressSection />

        {/* Product Gallery Section */}
        <DressCollection onSelectDress={(dress) => setSelectedDress(dress)} />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenAppointment={() => handleOpenAppointment()} />

      {/* Quick View Dress Modal */}
      <DressModal
        dress={selectedDress}
        onClose={() => setSelectedDress(null)}
        onBookDress={(dressName) => handleBookDress(dressName)}
      />

      {/* VIP Appointment Popup Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
        prefilledDressName={prefilledDressName}
      />

    </div>
  );
}
