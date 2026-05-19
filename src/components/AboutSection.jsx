import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ctx = gsap.context(() => {
        // Text Entrance
        gsap.from('.about-text', {
          scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
          y: 50, opacity: 0, duration: 1, ease: 'power3.out'
        });

        // 3D Card Entrance
        gsap.from('.antigravity-card', {
          scrollTrigger: { trigger: '.cards-container', start: 'top 80%' },
          y: 120,
          rotationX: 30,
          rotationY: -15,
          z: -100,
          opacity: 0,
          duration: 1.2,
          stagger: 0.3,
          ease: 'back.out(1.2)'
        });

        // Continuous floating animation (Antigravity effect)
        gsap.to('.antigravity-card-1', {
          y: '-=15',
          rotationX: 2,
          rotationY: 2,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });

        gsap.to('.antigravity-card-2', {
          y: '+=15',
          rotationX: -2,
          rotationY: -2,
          duration: 5,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          delay: 0.5
        });

      }, containerRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="about" className="py-16 relative overflow-hidden bg-[#faf8f5] perspective-[2000px] scroll-mt-24" ref={containerRef}>
      {/* Deep spatial backgrounds */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-wing-yellow/20 to-wing-orange/20 rounded-full blur-[100px] pointer-events-none transform -translate-z-50"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-wing-blue/20 to-wing-purple/20 rounded-full blur-[80px] pointer-events-none transform -translate-z-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text & Stats */}
          <div className="lg:col-span-6 about-text z-20">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-wing-blue/20 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <Sparkles size={14} className="text-wing-blue" />
              <span className="font-heading font-bold text-xs tracking-widest text-wing-blue uppercase">
                The Aquila Philosophy
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-4 leading-[1.1] text-aquila-navy">
              A Place Where Every Child <br />
              <span className="relative inline-block mt-1">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-wing-orange via-wing-red to-wing-purple">Finds Their Wings</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-wing-yellow/30 -z-10 transform -rotate-1"></span>
              </span>
            </h2>
            
            <div className="space-y-4 text-text-muted text-lg leading-relaxed font-body mb-6">
              <p>
                AQUILA Montessori Pre - School is a warm and nurturing space where children learn with confidence, curiosity, and creativity through the Montessori approach. We encourage independent, hands-on learning in a joyful child-centered environment that supports holistic growth and lifelong learning.
              </p>
            </div>

          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-6 grid gap-6 mt-12 lg:mt-0">
            
            {/* Vision Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/60 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-wing-blue to-wing-green rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Eye size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-aquila-navy">Our Vision</h3>
              </div>
              <p className="text-text-muted leading-relaxed">
                To nurture confident, compassionate, and lifelong learners who grow into responsible individuals with strong values with a love for learning.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#1B2B6B] text-white rounded-3xl p-8 shadow-lg border border-[#1B2B6B]/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-wing-orange/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-wing-yellow to-wing-orange rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Target size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-wing-yellow">Our Mission</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  To provide a safe, happy, and stimulating Montessori environment where children are encouraged to explore, discover, and develop independence, creativity, and respect for others.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
