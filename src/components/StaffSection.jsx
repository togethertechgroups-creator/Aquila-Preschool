import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Star, Sparkles, Award, Palette, Smile } from 'lucide-react';
import staffBg from '../assets/staff_bg.png';
import anieeImg from '../assets/aniee.jpeg';
import deepaImg from '../assets/deepa.jpeg';

gsap.registerPlugin(ScrollTrigger);

const staff = [
  {
    name: 'P.B. Deepa Senthil Kumar',
    role: 'Founder and Director of Aquila School',
    image: deepaImg,
    teaser: 'Founder & Director of Aquila School. Dedicated to child-centred, holistic learning, and mentoring educators through authentic Montessori practices.',
    bio: (
      <div className="space-y-4 text-left pr-1">
        <div className="mb-4 pt-3 border-b border-dashed border-wing-orange/20 bg-wing-orange/5 p-4 rounded-2xl italic text-xs leading-relaxed text-text-muted relative">
          <span className="absolute -top-3 left-4 text-wing-orange text-2xl font-serif">“</span>
          The child is both a hope and a promise for mankind.”
          <div className="text-right font-heading font-bold text-[10px] uppercase tracking-wider text-wing-orange mt-2">— Maria Montessori</div>
        </div>
        
        <p className="text-text-muted text-sm leading-relaxed">
          <strong>P.B. Deepa Senthil Kumar</strong>, Founder and Director of <strong>Aquila School</strong>, is a passionate educator committed to nurturing children through child-centred, holistic, and meaningful learning experiences. Holding a <strong>Master of Education (M.Ed.)</strong>, she is also a <strong>Special Educator</strong> and an <em>Early Literacy Trainer</em> with over <em>15 years of experience working with children</em> across diverse educational settings.
        </p>
        
        <p className="text-text-muted text-sm leading-relaxed">
          With a deep passion for the Montessori philosophy and its approach towards developing independent, confident, and joyful learners, she envisioned Aquila School as a space where children are respected as individuals and encouraged to learn naturally through exploration and discovery.
        </p>
        
        <p className="text-text-muted text-sm leading-relaxed">
          For the past <em>14 years</em>, Mrs. Deepa Senthil Kumar has been actively involved in teacher training and educational development, mentoring aspiring educators in the field of early childhood education. Over <strong>1000 teachers</strong> trained under her guidance have been successfully placed across various educational curricula and institutions, making meaningful contributions to the field of education.
        </p>
        
        <p className="text-text-muted text-sm leading-relaxed">
          Aquila School was founded not only with the vision of providing authentic Montessori education for children, but also to serve as a model preschool that truly reflects Montessori philosophy and practices in action. Her aim is to create an environment where educators and trainees visiting the school can observe, understand, and experience the Montessori method in its true essence, thereby setting an example for future educators and schools.
        </p>
        
        <p className="text-text-muted text-sm leading-relaxed">
          Inspired by the teachings of Maria Montessori, she strongly believes that education should nurture not only academic excellence, but also character, creativity, compassion, and lifelong learning. This philosophy forms the foundation of Aquila School’s vision and learning environment.
        </p>
        
        <p className="text-text-muted text-sm leading-relaxed">
          Through Aquila School, Mrs. Deepa Senthil Kumar continues her mission of creating a joyful and purposeful educational journey where every child feels valued, empowered, and inspired to reach their fullest potential.
        </p>
      </div>
    ),
    color: 'wing-orange',
    gradient: 'from-wing-orange to-wing-yellow',
    textColor: 'text-wing-orange'
  },
  {
    name: 'Annie Lavanya George',
    role: 'Coordinator of AQUILA Montessori Pre-School',
    image: anieeImg,
    teaser: 'Coordinator of AQUILA Montessori Pre-School. Passionate about creating a nurturing, safe, and child-centered Montessori environment.',
    bio: (
      <div className="space-y-4 text-left pr-1">
        <p className="text-text-muted text-sm leading-relaxed">
          <strong>Annie Lavanya George</strong>, Coordinator of AQUILA Montessori Pre-School, is passionate about creating a nurturing and inspiring environment where children feel safe, valued, and encouraged to explore their unique potential. With a deep love for early childhood education, her focus is on guiding children to develop confidence, independence, creativity, and a lifelong love for learning through the Montessori approach.
        </p>
        <p className="text-text-muted text-sm leading-relaxed">
          At AQUILA, we strive to support every child’s holistic growth by providing meaningful learning experiences in a joyful, child-centered atmosphere filled with care, respect, and encouragement.
        </p>
        <div className="mt-4 pt-3 border-t border-dashed border-wing-purple/20 bg-wing-purple/5 p-4 rounded-2xl italic text-xs leading-relaxed text-text-muted relative">
          <span className="absolute -top-3 left-4 text-wing-purple text-2xl font-serif">“</span>
          The child is both a hope and a promise for mankind.”
          <div className="text-right font-heading font-bold text-[10px] uppercase tracking-wider text-wing-purple mt-2">— Maria Montessori</div>
        </div>
      </div>
    ),
    color: 'wing-purple',
    gradient: 'from-wing-purple to-wing-blue',
    textColor: 'text-wing-purple'
  }
];

export default function StaffSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ctx = gsap.context(() => {
        gsap.from('.staff-card', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'all'
        });
      }, containerRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="staff" className="py-24 bg-[#FAF8F5] relative overflow-hidden" ref={containerRef}>
      <style dangerouslySetInnerHTML={{__html: `
        .flip-card-container {
          perspective: 2000px;
          width: 100%;
          max-width: 460px;
          height: 620px;
          position: relative;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.05);
          transform-style: preserve-3d;
        }
        .flip-card-container:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 2rem;
          border: 1px solid rgba(229, 231, 235, 0.5);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
        }
        .flip-card-front {
          background-color: #ffffff;
          transform: rotateY(0deg);
          z-index: 2;
        }
        .flip-card-back {
          background-color: #ffffff;
          transform: rotateY(180deg);
          z-index: 1;
        }
        
        /* Custom thin scrollbar for bio text */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `}} />

      {/* Background Image with low opacity */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img src={staffBg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Decorative colorful background shapes for a vibrant feel */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-wing-yellow/15 to-wing-orange/15 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-wing-blue/15 to-wing-purple/15 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-wing-green/10 rounded-full blur-[60px] pointer-events-none"></div>

      {/* Floating illustrations/icons to fill empty space */}
      <div className="absolute top-[15%] left-[5%] text-wing-yellow opacity-20 animate-float-kid pointer-events-none" style={{ animationDelay: '0s' }}>
        <Star size={64} fill="currentColor" />
      </div>
      <div className="absolute top-[20%] right-[10%] text-wing-blue opacity-20 animate-float-kid pointer-events-none" style={{ animationDelay: '1s' }}>
        <Sparkles size={80} />
      </div>
      <div className="absolute bottom-[15%] left-[10%] text-wing-red opacity-20 animate-float-kid pointer-events-none" style={{ animationDelay: '2s' }}>
        <Heart size={72} fill="currentColor" />
      </div>
      <div className="absolute bottom-[20%] right-[5%] text-wing-green opacity-20 animate-float-kid pointer-events-none" style={{ animationDelay: '0.5s' }}>
        <Palette size={64} />
      </div>
      <div className="absolute top-[50%] left-[5%] text-wing-purple opacity-20 animate-float-kid pointer-events-none" style={{ animationDelay: '1.5s' }}>
        <Smile size={56} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-wing-purple/20 px-5 py-2 rounded-full mb-6 shadow-sm">
            <Sparkles size={16} className="text-wing-purple" />
            <span className="font-heading font-bold text-xs tracking-widest text-wing-purple uppercase">
              Our Leadership Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl leading-tight font-display mb-4">
            Meet Our <span className="rainbow-text">Caring Leaders</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A team of passionate Montessori professionals dedicated to nurturing your child's innate potential.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          {staff.map((person, index) => (
            <div 
              key={index} 
              className="staff-card flip-card-container group"
            >
              <div className="flip-card-inner">
                {/* CARD FRONT */}
                <div className="flip-card-front p-6 md:p-8 flex flex-col justify-between items-center relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
                  {/* Animated Gradient Border on Hover */}
                  <div className={`absolute -inset-[1px] bg-gradient-to-r ${person.gradient} rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                  <div className="absolute inset-0 bg-white rounded-[2rem] -z-10"></div>
                  {/* Colorful fill on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${person.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-[2rem] -z-10`}></div>
                  
                  <div className="w-full flex flex-col items-center">
                    {/* Image Wrapper with Premium Shape */}
                    <div className="relative w-full aspect-square max-w-[180px] mx-auto mb-6 mt-4">
                      <div className={`absolute inset-0 bg-gradient-to-br ${person.gradient} rounded-3xl rotate-6 scale-95 opacity-20 group-hover:rotate-12 group-hover:scale-100 transition-transform duration-500`}></div>
                      <div className="absolute inset-0 bg-white rounded-3xl -rotate-3 border-2 border-gray-100 group-hover:rotate-0 transition-transform duration-500 shadow-sm overflow-hidden">
                        <img 
                          src={person.image} 
                          alt={person.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      
                      {/* Decorative Icon Badge */}
                      <div className={`absolute -bottom-3 -right-3 w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center border border-gray-50 text-${person.color} transform group-hover:scale-110 transition-transform`}>
                        <Award size={20} className="fill-current opacity-20 absolute" />
                        <Star size={18} className="fill-current" />
                      </div>
                    </div>
                    
                    <h3 className={`text-2xl font-heading font-bold text-aquila-navy mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${person.gradient} transition-all duration-300`}>
                      {person.name}
                    </h3>
                    
                    <div className="mb-6">
                      <span className={`inline-flex items-center text-xs font-heading font-bold uppercase tracking-wider ${person.textColor}`}>
                        <Sparkles size={12} className="mr-1" />
                        {person.role}
                      </span>
                    </div>
                    
                    <p className="text-text-muted text-sm leading-relaxed italic text-center max-w-[320px] px-2 mb-6">
                      {person.teaser}
                    </p>
                  </div>

                  <div className="w-full flex flex-col items-center mt-auto">
                    <div className={`inline-flex items-center space-x-2 text-xs font-heading font-bold uppercase tracking-wider ${person.textColor} bg-gray-50 group-hover:bg-white px-4 py-2.5 rounded-full transition-all duration-300 shadow-sm border border-gray-100/50`}>
                      <span>Hover to read story</span>
                      <Sparkles size={12} className="animate-pulse" />
                    </div>
                    
                    <div className="flex justify-center items-center space-x-2 border-t border-gray-50 pt-4 mt-6 w-full">
                      <Heart size={14} className="text-wing-red fill-wing-red" />
                      <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                      <Heart size={14} className="text-wing-red fill-wing-red" />
                      <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
                      <Heart size={14} className="text-wing-red fill-wing-red" />
                    </div>
                  </div>
                </div>

                {/* CARD BACK */}
                <div className="flip-card-back p-6 md:p-8 flex flex-col justify-between items-center relative overflow-hidden">
                  {/* Soft color tint on back */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${person.gradient} opacity-[0.03] -z-10`}></div>
                  <div className="absolute inset-0 bg-white rounded-[2rem] -z-10"></div>
                  
                  <div className="w-full flex items-center space-x-4 border-b border-gray-100 pb-4 mb-4">
                    {/* Small Profile Image Thumbnail */}
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${person.gradient} rounded-xl opacity-20 scale-95`}></div>
                      <div className="absolute inset-0 bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                        <img 
                          src={person.image} 
                          alt={person.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="text-left">
                      <h4 className="text-lg font-heading font-bold text-aquila-navy leading-none mb-1">
                        {person.name}
                      </h4>
                      <span className={`inline-flex items-center text-[10px] font-heading font-bold uppercase tracking-wider ${person.textColor}`}>
                        {person.role}
                      </span>
                    </div>
                  </div>

                  {/* Scrollable biography content */}
                  <div className="w-full flex-grow overflow-y-auto pr-1 custom-scrollbar scroll-smooth">
                    {person.bio}
                  </div>

                  {/* Footer with return hint */}
                  <div className="w-full flex flex-col items-center pt-4 mt-4 border-t border-gray-50">
                    <div className="text-[10px] font-heading font-bold text-text-muted uppercase tracking-widest flex items-center space-x-1.5 opacity-80">
                      <Heart size={10} className="text-wing-red fill-wing-red" />
                      <span>Hover out to return</span>
                      <Heart size={10} className="text-wing-red fill-wing-red" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

