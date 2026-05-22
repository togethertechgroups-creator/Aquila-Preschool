import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, X, ZoomIn, LayoutGrid, Sun, PartyPopper, GraduationCap, Palette } from 'lucide-react';

// New images from aquila-gallery folder
import gal1 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.23.34 AM.jpeg';
import gal2 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.23.35 AM (1).jpeg';
import gal3 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.23.35 AM (2).jpeg';
import gal4 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.23.35 AM.jpeg';
import gal5 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.23.36 AM (1).jpeg';
import gal6 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.23.36 AM (2).jpeg';
import gal7 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.23.36 AM.jpeg';
import gal8 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.23.37 AM (1).jpeg';
import gal9 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.23.37 AM.jpeg';
import gal10 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.34.41 AM (1).jpeg';
import gal11 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.34.41 AM.jpeg';
import gal12 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.34.42 AM (1).jpeg';
import gal13 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.34.42 AM.jpeg';
import gal14 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.43.05 AM.jpeg';
import gal15 from '../assets/aquila-gallery/WhatsApp Image 2026-05-19 at 11.43.06 AM.jpeg';
import gal16 from '../assets/aquila-gallery/WhatsApp Image 2026-05-22 at 2.13.21 PM (1).jpeg';
import gal17 from '../assets/aquila-gallery/WhatsApp Image 2026-05-22 at 2.13.22 PM (1).jpeg';
import gal18 from '../assets/aquila-gallery/WhatsApp Image 2026-05-22 at 2.13.23 PM.jpeg';
import gal19 from '../assets/aquila-gallery/WhatsApp Image 2026-05-22 at 2.13.24 PM.jpeg';

// Images from assets/gallery folder
import gal20 from '../assets/gallery/WhatsApp Image 2026-05-16 at 11.56.11 AM.jpeg';
import gal21 from '../assets/gallery/WhatsApp Image 2026-05-16 at 11.56.12 AM (1).jpeg';
import gal22 from '../assets/gallery/WhatsApp Image 2026-05-16 at 11.56.12 AM.jpeg';
import gal23 from '../assets/gallery/WhatsApp Image 2026-05-16 at 11.56.13 AM (1).jpeg';
import gal24 from '../assets/gallery/WhatsApp Image 2026-05-16 at 11.56.13 AM.jpeg';
import gal25 from '../assets/gallery/WhatsApp Image 2026-05-16 at 11.56.14 AM (1).jpeg';
import gal26 from '../assets/gallery/WhatsApp Image 2026-05-16 at 11.56.14 AM (2).jpeg';
import gal27 from '../assets/gallery/WhatsApp Image 2026-05-16 at 11.56.14 AM.jpeg';
import gal28 from '../assets/gallery/WhatsApp Image 2026-05-16 at 11.56.15 AM.jpeg';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  { name: 'All', icon: LayoutGrid, activeClass: 'bg-wing-blue text-white border-wing-blue shadow-lg shadow-wing-blue/30 scale-105', inactiveClass: 'bg-white text-text-muted border-gray-100 hover:border-wing-blue hover:text-wing-blue hover:shadow-md hover:-translate-y-0.5' },
  { name: 'Summer camp', icon: Sun, activeClass: 'bg-wing-orange text-white border-wing-orange shadow-lg shadow-wing-orange/30 scale-105', inactiveClass: 'bg-white text-text-muted border-gray-100 hover:border-wing-orange hover:text-wing-orange hover:shadow-md hover:-translate-y-0.5' },
  { name: 'Celebrations', icon: PartyPopper, activeClass: 'bg-wing-red text-white border-wing-red shadow-lg shadow-wing-red/30 scale-105', inactiveClass: 'bg-white text-text-muted border-gray-100 hover:border-wing-red hover:text-wing-red hover:shadow-md hover:-translate-y-0.5' },
  { name: 'Teachers training', icon: GraduationCap, activeClass: 'bg-wing-green text-white border-wing-green shadow-lg shadow-wing-green/30 scale-105', inactiveClass: 'bg-white text-text-muted border-gray-100 hover:border-wing-green hover:text-wing-green hover:shadow-md hover:-translate-y-0.5' },
  { name: 'Drawing', icon: Palette, activeClass: 'bg-wing-purple text-white border-wing-purple shadow-lg shadow-wing-purple/30 scale-105', inactiveClass: 'bg-white text-text-muted border-gray-100 hover:border-wing-purple hover:text-wing-purple hover:shadow-md hover:-translate-y-0.5' }
];

const imagesData = [
  gal5, gal8, gal11,
  gal1, gal2, gal3, gal4, gal6, gal7, gal9, 
  gal20, gal21, gal22, gal23, gal24, gal25, gal26, gal27, gal28,
  gal10, gal12, gal13, gal14, gal15, gal16, gal17, gal18, gal19
].map((src, index) => {
  const cats = ['Summer camp', 'Celebrations', 'Teachers training', 'Drawing'];
  return { src, category: cats[index % cats.length] };
});

export default function GallerySection() {
  const containerRef = useRef(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? imagesData 
    : imagesData.filter(img => img.category === activeCategory);
  
  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 15);

  useEffect(() => {
    let ctx;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ctx = gsap.context(() => {
        gsap.fromTo('.gallery-item', 
          {
            scale: 0.9,
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: '.gallery-grid',
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.04,
            ease: 'power2.out'
          }
        );
      }, containerRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  // Handle Keyboard Navigation for Lightbox
  useEffect(() => {
    if (activePhotoIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActivePhotoIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhotoIndex]);

  const handleNext = () => {
    setActivePhotoIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setActivePhotoIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 pointer-events-none bg-rainbow-light opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-heading font-bold text-sm tracking-widest text-wing-purple uppercase mb-2 block animate-pulse">
            Gallery
          </span>
          <h2 className="text-4xl md:text-5xl leading-tight text-aquila-navy font-display">
            Moments That Make <span className="rainbow-text font-bold">Memories</span>
          </h2>
          <p className="text-text-muted mt-4 font-heading text-lg max-w-xl mx-auto">
            Take a beautiful peek into the daily adventures, celebrations, and playful learning experiences at Aquila!
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.name;
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setShowAll(false);
                  setTimeout(() => ScrollTrigger.refresh(), 100);
                }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-heading font-bold text-sm transition-all duration-300 border-2 ${
                  isActive ? cat.activeClass : cat.inactiveClass
                }`}
              >
                <Icon size={16} className={isActive ? 'animate-bounce' : ''} />
                {cat.name}
              </button>
            );
          })}
        </div>

        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((img, index) => (
            <div
              key={`${img.src}-${index}`}
              className="gallery-item relative overflow-hidden rounded-[2rem] bg-gray-50 border-4 border-white shadow-md hover:shadow-xl hover:border-wing-purple/20 transition-all duration-300 cursor-pointer aspect-[4/3]"
              onClick={() => setActivePhotoIndex(index)}
            >
              <img
                src={img.src}
                alt={`Aquila Montessori Gallery ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {filteredImages.length > 15 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => {
                setShowAll(!showAll);
                // Trigger a refresh for scroll trigger when height changes
                setTimeout(() => ScrollTrigger.refresh(), 100);
              }}
              className="btn-rainbow inline-flex items-center space-x-2 shadow-lg shadow-wing-blue/20 border-2 border-white hover-wiggle px-8 py-3"
            >
              <span className="font-heading font-bold">{showAll ? 'Show Less' : 'View More Photos'}</span>
              <svg 
                className={`w-5 h-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Premium Full-screen Lightbox Modal */}
      {activePhotoIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-aquila-navy/90 backdrop-blur-md transition-all duration-300">
          {/* Close Area */}
          <div className="absolute inset-0 cursor-default" onClick={() => setActivePhotoIndex(null)}></div>

          {/* Close button */}
          <button
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
          >
            <X size={28} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 hidden sm:block"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Center Content */}
          <div className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center z-40 select-none">
            <img
              src={filteredImages[activePhotoIndex]?.src}
              alt={`Aquila Gallery Preview`}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
            />
            <div className="mt-4 text-white/80 font-heading text-sm bg-black/35 px-4 py-1.5 rounded-full backdrop-blur-sm select-none flex items-center space-x-2">
              <span>{activeCategory !== 'All' ? activeCategory : ''} Photo {activePhotoIndex + 1} of {filteredImages.length}</span>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 hidden sm:block"
          >
            <ChevronRight size={32} />
          </button>

          {/* Mobile swipe guides or simple bottom pagination */}
          <div className="absolute bottom-6 flex space-x-6 sm:hidden z-50">
            <button onClick={handlePrev} className="bg-white/10 text-white p-3 rounded-full active:bg-white/25">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className="bg-white/10 text-white p-3 rounded-full active:bg-white/25">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
