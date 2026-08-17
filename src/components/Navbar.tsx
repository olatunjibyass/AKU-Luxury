import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Calendar } from 'lucide-react';
import { ACUITY_BOOKING_URL } from '../types';

interface NavbarProps {
  onOpenAppointment?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section tracker based on scroll
      const sections = ['home', 'dresses', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'WEDDING DRESSES', href: '#dresses', id: 'dresses' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#E6D7B8] ${
        isScrolled ? 'shadow-xs py-1' : 'py-1.5 sm:py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <a
            href="#home"
            className="group flex items-center gap-3 sm:gap-3.5 focus:outline-none py-1"
          >
            <div className="relative p-1 bg-gradient-to-tr from-[#D4AF37] via-[#F3E5AB] to-[#B89320] rounded-xl sm:rounded-2xl shadow-md border-2 border-[#D4AF37] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] shrink-0">
              <img 
                src="https://i.postimg.cc/L52byBRL/PHOTO-2026-08-07-13-08-21.jpg" 
                alt="AKU Luxury Bride Logo" 
                className="h-11 sm:h-14 w-11 sm:w-14 object-cover rounded-lg sm:rounded-xl bg-white shadow-inner"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl tracking-[0.22em] font-extrabold text-[#B89320] group-hover:text-[#D4AF37] transition-colors leading-none drop-shadow-xs">
                AKU
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.38em] uppercase font-sans font-extrabold text-[#B89320] mt-1">
                LUXURY BRIDE
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-5 lg:space-x-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs sm:text-sm uppercase tracking-[0.18em] font-sans font-medium transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#C8A236] font-bold'
                      : 'text-[#222222] hover:text-[#C8A236]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C8A236]" />
                  )}
                </a>
              );
            })}

            {/* Book an Appointment Tab / Button */}
            <a
              href={ACUITY_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37] text-white hover:bg-[#B89320] hover:border-[#B89320] font-sans text-xs uppercase tracking-[0.18em] font-bold shadow-xs hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Book an Appointment</span>
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#222222] hover:bg-[#C8A236]/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full bg-white border-b-2 border-[#C8A236] shadow-2xl animate-fade-in py-6 px-6 z-50">
          <div className="flex flex-col space-y-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 text-xs uppercase tracking-[0.22em] font-medium border-b border-[#E6D7B8]/50 ${
                  activeSection === link.id
                    ? 'text-[#C8A236] font-bold'
                    : 'text-[#222222] hover:text-[#C8A236]'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={ACUITY_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-full bg-[#C8A236] hover:bg-[#B89320] text-white font-sans text-xs uppercase tracking-[0.2em] font-bold shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


