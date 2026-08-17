import React, { useState } from 'react';
import { Sparkles, Maximize2, X } from 'lucide-react';
import { GALLERY_DATA } from '../data/gallery';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Gowns', 'Details', 'Accessories', 'Boutique', 'Real Brides'];

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#8C6D1F]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs font-sans uppercase tracking-[0.25em] font-semibold">
              Inspiration & Moments
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#222222] font-normal tracking-tight">
            Bridal Gallery
          </h2>

          <p className="font-sans text-sm text-[#222222]/80 font-light leading-relaxed">
            Step inside our world of fine craftsmanship, delicate lace, heirloom accessories, and unforgettable real bride moments.
          </p>

          <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-white font-semibold shadow-xs'
                  : 'bg-white text-[#222222]/70 border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:text-[#8C6D1F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Masonry/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#D4AF37]/30 shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer aspect-[3/4]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg text-white font-medium mt-1">
                  {item.title}
                </h4>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-white/90 font-sans tracking-widest uppercase">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Enlarge View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative max-w-4xl w-full bg-black rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative aspect-[4/3] sm:aspect-[16/10] bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 bg-white border-t border-[#D4AF37]/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest font-sans font-semibold text-[#8C6D1F]">
                  {lightboxItem.category}
                </span>
                <h3 className="font-serif text-2xl text-[#222222]">
                  {lightboxItem.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#B89320] transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
