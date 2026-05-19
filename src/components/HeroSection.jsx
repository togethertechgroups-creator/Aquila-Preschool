import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { ArrowDown, Star, Cloud, Sun, Heart, Sparkles, Rainbow } from 'lucide-react';
import heroImg from '../assets/hero.jpeg';

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let ctx;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ctx = gsap.context(() => {
        // Staggered text entrance
        gsap.from('.hero-text > *', {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          delay: 0.3,
        });

        // Floating decorative icons
        gsap.to('.float-icon', {
          y: -25,
          rotation: 10,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          stagger: 0.4,
        });
        
        // Bouncing arrow
        gsap.to('.scroll-arrow', {
          y: 12,
          duration: 1.5,
          yoyo: true,
          repeat: -1,
          ease: 'power1.inOut'
        });

        // Image tilt effect
        gsap.to('.hero-image-container', {
          rotation: 2,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut'
        });

        // Sun animation - moves left and stops above "N" in Nurturing
        gsap.to('.sun-animated', {
          x: '-82vw',
          duration: 4,
          ease: 'power2.out',
          delay: 0.5
        });

      }, containerRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  const decorativeIcons = [
    { Icon: Cloud, color: 'text-wing-blue', top: '25%', left: '85%', size: 64 },
    { Icon: Star, color: 'text-wing-orange', top: '75%', left: '10%', size: 40 },
    { Icon: Rainbow, color: 'text-wing-purple', top: '80%', left: '80%', size: 56 },
    { Icon: Heart, color: 'text-wing-red', top: '45%', left: '48%', size: 32 },
    { Icon: Sparkles, color: 'text-wing-green', top: '65%', left: '55%', size: 48 },
  ];

  return (
    <section id="home" className="relative min-h-[100vh] flex flex-col justify-center pt-48 pb-24 overflow-hidden bg-rainbow-light" ref={containerRef}>
      
      {/* Animated Sun - Starts in top right, moves left */}
      <div className="sun-animated absolute text-wing-yellow z-0" style={{ top: '15%', right: '5%' }}>
        <div className="relative flex items-center justify-center">
          {/* Outer glow */}
          <div className="absolute w-[200px] h-[200px] bg-wing-yellow/15 rounded-full blur-3xl animate-pulse"></div>
          {/* Inner glow */}
          <div className="absolute w-[150px] h-[150px] bg-wing-orange/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <Sun size={120} className="fill-current animate-spin relative z-10 opacity-40" style={{ animationDuration: '20s' }} />
        </div>
      </div>

      {/* Decorative Icons instead of plain orbs */}
      {decorativeIcons.map((item, i) => {
        const { Icon, color, top, left, size } = item;
        return (
          <div
            key={i}
            className={`float-icon absolute ${color} opacity-40 z-0 drop-shadow-md`}
            style={{ top, left }}
          >
            <Icon size={size} className="fill-current" />
          </div>
        );
      })}

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 flex-grow">
        {/* Left: Text Content */}
        <div className="hero-text text-center lg:text-left">
          <div className="inline-block bg-white border-2 border-wing-yellow/40 shadow-sm px-5 py-2 rounded-full mb-8">
            <span className="font-heading font-bold text-sm tracking-widest rainbow-text uppercase flex items-center">
              <Sparkles size={16} className="mr-2 text-wing-orange" />
              Where Every Child Learns Their Way
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 leading-[1.1] drop-shadow-sm">
            Nurturing Curious Minds, <br className="hidden lg:block" />
            <span className="rainbow-text block mt-2">One Discovery at a Time</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-muted font-heading max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed bg-white/40 p-4 rounded-2xl backdrop-blur-sm border border-white/50">
            Aquila Montessori Pre-School offers a joyful, child-led learning
            environment rooted in the authentic Montessori philosophy —
            where your child's uniqueness is celebrated, not standardized.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
            <Link to="admissions" smooth={true} duration={500} offset={-80}>
              <button className="btn-rainbow w-full sm:w-auto text-xl shadow-[0_8px_30px_rgba(255,152,0,0.3)] px-8 py-4 border-2 border-white/50 group">
                Book a Free Visit 
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">➔</span>
              </button>
            </Link>
            <Link to="about" smooth={true} duration={500} offset={-80}>
              <button className="btn-primary bg-white text-aquila-navy border-2 border-aquila-navy/10 hover:bg-aquila-navy hover:text-white w-full sm:w-auto text-xl px-8 py-4 shadow-sm">
                Learn More
              </button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 text-sm font-heading font-bold text-aquila-navy">
            <span className="bg-white px-5 py-3 rounded-full shadow-sm border border-wing-blue/20 flex items-center">
              <span className="bg-wing-blue/20 p-1 rounded-full mr-2">🎓</span> Admissions Open 2025–26
            </span>
            <span className="bg-white px-5 py-3 rounded-full shadow-sm border border-wing-green/20 flex items-center">
              <span className="bg-wing-green/20 p-1 rounded-full mr-2">📍</span> Sithalapakkam, Chennai
            </span>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="hero-text relative w-full max-w-lg mx-auto lg:max-w-none hero-image-container">
          <div className="relative aspect-[4/3] rounded-[3rem] p-2 shadow-2xl" style={{
            background: 'linear-gradient(135deg, var(--wing-green), var(--wing-blue), var(--wing-orange), var(--wing-yellow), var(--wing-purple), var(--wing-red))'
          }}>
            <div className="absolute inset-0 bg-white rounded-[3rem] opacity-20"></div>
            <img 
              src={heroImg} 
              alt="Joyful children learning in Montessori environment"
              className="w-full h-full object-cover rounded-[2.6rem] border-4 border-white"
              loading="eager"
              decoding="async"
            />
          </div>
          
          {/* Floating glass badge */}
          <div className="absolute -bottom-8 -left-8 glass-panel px-6 py-4 flex items-center space-x-4 border-2 border-white shadow-xl transform rotate-[-3deg] hover:rotate-0 transition-transform cursor-pointer">
            <div className="w-14 h-14 bg-wing-yellow/20 rounded-full flex items-center justify-center relative">
              <Star size={32} className="text-wing-yellow fill-wing-yellow absolute animate-spin" style={{animationDuration: '6s'}} />
            </div>
            <div>
              <p className="font-heading font-black text-aquila-navy text-lg">Authentic</p>
              <p className="text-sm font-bold text-text-muted">Montessori Method</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cloud border at bottom to blend into next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform translate-y-1">
        <svg relative="true" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-[60px] md:h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,112.56,187.5,91.24,233.18,74.05,278.4,64.44,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 hidden md:block">
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-wing-blue/20 scroll-arrow text-aquila-navy hover:text-wing-orange transition-colors">
            <ArrowDown size={28} />
          </div>
        </Link>
      </div>
    </section>
  );
}
