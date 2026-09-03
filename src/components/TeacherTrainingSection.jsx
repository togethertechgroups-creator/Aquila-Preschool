import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Award, Users, Check, Sparkles, ArrowRight, X, ChevronLeft, ChevronRight, Images, ZoomIn } from 'lucide-react';
import teacherTrainingImg from '../assets/teacher_training.png';

// Import all teacher training images dynamically (including New folder)
const ttImagesMap = import.meta.glob('../assets/teacher training/**/*.{jpeg,jpg,png,mp4}', { eager: true, import: 'default' });
const loadedTTImages = Object.values(ttImagesMap);
const allTrainingImages = [teacherTrainingImg, ...loadedTTImages];

gsap.registerPlugin(ScrollTrigger);

export default function TeacherTrainingSection() {
  const containerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [galleryPhotoIndex, setGalleryPhotoIndex] = useState(null);

  useEffect(() => {
    let ctx;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ctx = gsap.context(() => {
        // Entrance animation for content
        gsap.from('.training-content', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });

        // Entrance animation for image
        gsap.from('.training-image', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
          x: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.2
        });
      }, containerRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  const handleNextPhoto = useCallback(() => {
    if (galleryPhotoIndex !== null) {
      setGalleryPhotoIndex((prev) => (prev + 1) % allTrainingImages.length);
    }
  }, [allTrainingImages.length, galleryPhotoIndex]);

  const handlePrevPhoto = useCallback(() => {
    if (galleryPhotoIndex !== null) {
      setGalleryPhotoIndex((prev) => (prev - 1 + allTrainingImages.length) % allTrainingImages.length);
    }
  }, [allTrainingImages.length, galleryPhotoIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (galleryPhotoIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setGalleryPhotoIndex(null);
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [galleryPhotoIndex, handleNextPhoto, handlePrevPhoto]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const qualification = formData.get('qualification');
    
    const message = `Hello, I am interested in the Montessori Teacher Training Program.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Qualification:* ${qualification}`;
    
    const whatsappUrl = `https://wa.me/917200083468?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
  };

  return (
    <section id="teacher-training" className="py-24 bg-gradient-to-b from-white to-wing-blue/5 relative overflow-hidden" ref={containerRef}>
      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-wing-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-wing-purple/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-7 training-content order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-wing-blue/10 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <BookOpen size={14} className="text-wing-blue" />
              <span className="font-heading font-bold text-xs tracking-widest text-wing-blue uppercase">
                Professional Development
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-6 leading-[1.1] text-aquila-navy font-display">
              Montessori Teacher <br />
              <span className="rainbow-text">Training Program</span>
            </h2>
            
            <div className="mb-8">
              <p className="text-text-muted text-lg leading-relaxed mb-4 max-w-2xl">
                <strong className="text-aquila-navy font-heading text-xl">The Pedagogical Academy (TPA)</strong><br />
                TPA is a unique Institute established in the year 2015 to focus on the art and science of teaching young learners through child-centered education with an ideal blend of Montessori Learning method and other Philosophies. TPA is equipped with a full Montessori Environment which helps in understanding the concepts better.
              </p>
              <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
                It helps aspiring educators understand children’s developmental needs, learning styles, and effective teaching methods that encourage independence, creativity, and holistic growth. Through practical learning and educational theories, teachers are guided to create meaningful and engaging classroom experiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: Award, title: 'Certified Course', desc: 'Internationally recognized certification.' },
                { icon: Users, title: 'Expert Mentorship', desc: 'Learn from experienced Montessori trainers.' },
                { icon: BookOpen, title: 'Hands-on Practice', desc: 'Work with authentic Montessori materials.' },
                { icon: Check, title: 'Career Support', desc: 'Job placement assistance after completion.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0 text-wing-blue">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-aquila-navy text-base">{item.title}</h3>
                    <p className="text-text-muted text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-rainbow inline-flex items-center space-x-2 shadow-lg shadow-wing-orange/20 border-2 border-white hover-wiggle"
              >
                <span>Enquire About the Program</span>
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => setIsLearnMoreOpen(true)}
                className="btn-rainbow inline-flex items-center justify-center shadow-lg shadow-wing-purple/20 border-2 border-white hover-wiggle font-heading font-bold px-6 py-3"
              >
                Learn More
              </button>
              <button
                onClick={() => setIsGalleryModalOpen(true)}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full font-heading font-bold text-aquila-navy bg-white border-2 border-gray-200 hover:border-wing-blue hover:text-wing-blue shadow-sm hover:shadow-md transition-all hover-wiggle"
              >
                <Images size={18} />
                <span>Training Photos ({allTrainingImages.length})</span>
              </button>
            </div>
          </div>

          {/* Right: Interactive Image & Slideshow */}
          <div className="lg:col-span-5 training-image order-1 lg:order-2">
            <div className="relative">
              {/* Background decorative frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-wing-orange to-wing-yellow rounded-[3rem] rotate-3 scale-95 opacity-20"></div>
              
              <div className="relative bg-white p-4 rounded-[3rem] shadow-xl border border-gray-100 -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-gray-50 flex items-center justify-center group">
                  <img 
                    src={allTrainingImages[currentImageIndex]} 
                    alt={`Montessori Teacher Training Photo ${currentImageIndex + 1}`} 
                    className="w-full h-full object-cover rounded-[2rem] transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    onClick={() => setGalleryPhotoIndex(currentImageIndex)}
                  />
                  
                  {/* Prev / Next Controls */}
                  {allTrainingImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => (prev - 1 + allTrainingImages.length) % allTrainingImages.length);
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/75 text-white p-2 rounded-full backdrop-blur-sm transition-all shadow-md"
                        aria-label="Previous training image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => (prev + 1) % allTrainingImages.length);
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/75 text-white p-2 rounded-full backdrop-blur-sm transition-all shadow-md"
                        aria-label="Next training image"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}

                  {/* Zoom indicator button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setGalleryPhotoIndex(currentImageIndex);
                    }}
                    className="absolute top-3 right-3 bg-black/40 hover:bg-black/70 text-white p-2 rounded-xl backdrop-blur-sm transition-all shadow-md flex items-center gap-1.5 text-xs font-heading font-bold"
                  >
                    <ZoomIn size={16} />
                    <span>Expand</span>
                  </button>

                  {/* Photo Counter Badge */}
                  <div className="absolute bottom-3 left-3 bg-aquila-navy/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-heading font-semibold shadow-md flex items-center gap-1.5">
                    <Images size={13} />
                    <span>{currentImageIndex + 1} / {allTrainingImages.length}</span>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-50 flex items-center space-x-3 z-10">
                  <div className="w-12 h-12 bg-wing-green rounded-xl flex items-center justify-center text-white shrink-0">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-aquila-navy text-sm">Admissions Open</div>
                    <div className="text-xs text-text-muted">Limited seats available</div>
                  </div>
                </div>

                {/* View All Photos trigger */}
                <button
                  type="button"
                  onClick={() => setIsGalleryModalOpen(true)}
                  className="mt-4 w-full py-2.5 bg-wing-blue/10 hover:bg-wing-blue/20 text-wing-blue font-heading font-bold rounded-2xl transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Images size={16} />
                  <span>View All {allTrainingImages.length} Training Photos</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full Teacher Training Photo Gallery Grid Modal */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] w-full max-w-5xl relative shadow-2xl border-2 border-wing-blue/20 max-h-[90vh] flex flex-col overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-wing-blue/5 to-transparent">
              <div>
                <h3 className="text-2xl font-display text-aquila-navy">Teacher Training Photo Gallery</h3>
                <p className="text-text-muted text-sm font-heading">Showing all {allTrainingImages.length} photos from our Montessori training sessions</p>
              </div>
              <button 
                onClick={() => setIsGalleryModalOpen(false)}
                className="text-text-muted hover:text-aquila-navy transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow-sm"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {allTrainingImages.map((src, index) => (
                <div 
                  key={index}
                  onClick={() => setGalleryPhotoIndex(index)}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer border-2 border-gray-100 hover:border-wing-blue hover:shadow-lg transition-all duration-300 group"
                >
                  <img 
                    src={src} 
                    alt={`Training session ${index + 1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <ZoomIn size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Zoom Modal */}
      {galleryPhotoIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-aquila-navy/90 backdrop-blur-md transition-all duration-300">
          <div className="absolute inset-0 cursor-default" onClick={() => setGalleryPhotoIndex(null)}></div>

          <button
            onClick={() => setGalleryPhotoIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
          >
            <X size={28} />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 hidden sm:block"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center z-40 select-none">
            <img 
              src={allTrainingImages[galleryPhotoIndex]} 
              alt={`Training photo ${galleryPhotoIndex + 1}`} 
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border-4 border-white/10"
            />
            <div className="mt-4 text-white/80 font-heading text-sm bg-black/35 px-4 py-1.5 rounded-full backdrop-blur-sm select-none">
              Photo {galleryPhotoIndex + 1} of {allTrainingImages.length}
            </div>
          </div>

          <button
            onClick={handleNextPhoto}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50 hidden sm:block"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      {/* Learn More Modal */}
      {isLearnMoreOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] w-full max-w-2xl relative shadow-2xl border-2 border-wing-blue/20 max-h-[90vh] flex flex-col overflow-hidden">
            <button 
              onClick={() => setIsLearnMoreOpen(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-aquila-navy transition-colors bg-gray-100 hover:bg-gray-200 rounded-full p-2 z-20 shadow-sm"
            >
              <X size={24} />
            </button>
            
            <div className="p-8 overflow-y-auto relative z-0 w-full">
              <h3 className="text-2xl md:text-3xl font-display text-aquila-navy mb-6 pr-8">The Pedagogical Academy (TPA)</h3>
              
              <div className="space-y-6 text-text-muted leading-relaxed">
                <p>
                  TPA is a unique Institute established in the year 2015 to focus on the art and science of teaching young learners through child-centered education with an ideal blend of Montessori Learning method and other Philosophies. TPA is equipped with a full Montessori Environment which helps in understanding the concepts better.
                </p>
                <p>
                  It helps aspiring educators understand children’s developmental needs, learning styles, and effective teaching methods that encourage independence, creativity, and holistic growth. Through practical learning and educational theories, teachers are guided to create meaningful and engaging classroom experiences.
                </p>

                <h4 className="font-heading font-bold text-aquila-navy text-xl mt-8">Crash Courses Offered</h4>
                <p>
                  We offer specially designed crash courses in a flexible and compact format to suit the schedules of school teachers, aspiring educators, and students. These programs focus on essential concepts and practical learning while maintaining high standards of quality and depth.
                </p>

                <h4 className="font-heading font-bold text-aquila-navy text-xl mt-8">Courses Offered:</h4>
                <ul className="list-disc pl-5 space-y-2 text-aquila-navy/80 font-medium">
                  <li>Advanced Diploma in Montessori and Child Care Education</li>
                  <li>Diploma in Montessori and Child Care Education</li>
                  <li>Diploma in Primary School Education</li>
                  <li>Diploma in Early Childhood Education</li>
                  <li>Diploma in Elementary Education</li>
                  <li>Diploma in Remedial Education</li>
                </ul>

                <div className="bg-wing-yellow/10 p-4 rounded-xl mt-8 border border-wing-yellow/20">
                  <p className="text-aquila-navy font-medium italic text-sm">
                    All courses are certified by the Pedagogical Academy and independently by . An added feature is that almost 100% of our students are appointed immediately after course completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 w-full max-w-md relative shadow-2xl border-2 border-wing-blue/20">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-aquila-navy transition-colors"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-heading font-bold text-aquila-navy mb-2">Enquire About Training</h3>
            <p className="text-text-muted text-sm mb-6">Fill in your details and we'll connect on WhatsApp.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-heading font-bold text-aquila-navy mb-1">Full Name</label>
                <input type="text" name="name" required className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-wing-blue" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-heading font-bold text-aquila-navy mb-1">Phone Number</label>
                <input type="tel" name="phone" required className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-wing-blue" placeholder="Your Phone Number" />
              </div>
              <div>
                <label className="block text-sm font-heading font-bold text-aquila-navy mb-1">Highest Qualification</label>
                <input type="text" name="qualification" required className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-wing-blue" placeholder="e.g. B.Ed, Graduate" />
              </div>
              
              <button type="submit" className="w-full btn-rainbow py-3 rounded-xl font-heading font-bold text-white shadow-lg shadow-wing-orange/20 flex items-center justify-center space-x-2">
                <span>Send on WhatsApp</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
