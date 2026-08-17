import React, { useState } from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { DRESSES_DATA } from '../data/dresses';
import { DressCard } from './DressCard';
import { Dress } from '../types';

interface DressCollectionProps {
  onSelectDress: (dress: Dress) => void;
}

export const DressCollection: React.FC<DressCollectionProps> = ({ onSelectDress }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Classic', 'Romantic', 'Modern Minimalist', 'Princess', 'Couture'];

  const filteredDresses = DRESSES_DATA.filter(dress => {
    if (selectedFilter === 'All') return true;
    return dress.style.toLowerCase().includes(selectedFilter.toLowerCase()) || 
           dress.silhouette.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  const displayedDresses = showAll ? filteredDresses : filteredDresses.slice(0, 6);

  return (
    <section id="dresses" className="py-8 sm:py-10 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border-2 border-[#D4AF37] bg-[#D4AF37]/15 text-[#B89320]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs sm:text-sm font-sans uppercase tracking-[0.25em] font-bold">
              Exquisite Gowns
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-bold tracking-tight">
            Our Wedding Dress Collection
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#1A1A1A] font-semibold leading-relaxed">
            Each gown in our boutique is meticulously chosen for its exceptional craftsmanship, fine silks, delicate lace, and flattering silhouette.
          </p>

          <div className="w-10 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Filter Pills - Bold & Clear */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);
                setShowAll(true);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm uppercase tracking-wider font-sans font-bold transition-all duration-300 cursor-pointer ${
                selectedFilter === filter
                  ? 'bg-[#D4AF37] text-white border-2 border-[#D4AF37] shadow-sm'
                  : 'bg-white text-[#1A1A1A] border-2 border-[#D4AF37]/40 hover:border-[#D4AF37] hover:text-[#B89320]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayedDresses.map((dress) => (
            <DressCard
              key={dress.id}
              dress={dress}
              onSelectDress={onSelectDress}
            />
          ))}
        </div>

        {/* View All / Toggle Button */}
        {!showAll && DRESSES_DATA.length > 6 && (
          <div className="text-center pt-4">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full border-2 border-[#D4AF37] bg-white text-[#222222] hover:bg-[#D4AF37] hover:text-white font-sans text-[11px] uppercase tracking-[0.22em] font-semibold shadow-xs hover:shadow-sm transition-all duration-300 inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>View All Dresses ({DRESSES_DATA.length})</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
