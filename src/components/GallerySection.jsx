import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

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

gsap.registerPlugin(ScrollTrigger);

const images = [
  gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, 
  gal10, gal11, gal12, gal13, gal14, gal15
];

export default function GallerySection() {
  const containerRef = useRef(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);

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
    setActivePhotoIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActivePhotoIndex((prev) => (prev - 1 + images.length) % images.length);
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

        <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="gallery-item relative overflow-hidden rounded-[2rem] bg-gray-50 border-4 border-white shadow-md hover:shadow-xl hover:border-wing-purple/20 transition-all duration-300 cursor-pointer aspect-[4/3]"
              onClick={() => setActivePhotoIndex(index)}
            >
              <img
                src={src}
                alt={`Aquila Montessori Gallery ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
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
              src={images[activePhotoIndex]}
              alt={`Aquila Gallery Preview`}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
            />
            <div className="mt-4 text-white/80 font-heading text-sm bg-black/35 px-4 py-1.5 rounded-full backdrop-blur-sm select-none">
              Photo {activePhotoIndex + 1} of {images.length}
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
