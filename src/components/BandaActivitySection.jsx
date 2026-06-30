import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, CheckCircle2, Clock } from 'lucide-react';
import activityImg from '../assets/panda activity.png';
import pandaLogo from '../assets/aquila-gallery/panda.jpeg';

gsap.registerPlugin(ScrollTrigger);

const classes = [
  'Phonics',
  'Comprehension and Grammar',
  'Public Speaking and Personality Development',
  'Drawing',
  'Abacus',
  'Art & Craft',
  'Piano',
  'Handwriting',
  'Summer Camp Activities',
];

export default function BandaActivitySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ctx = gsap.context(() => {
        // Entrance animation
        gsap.from('.banda-image', {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });

        gsap.from('.banda-content', {
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

  return (
    <section id="banda-activity" className="py-24 bg-white relative overflow-hidden" ref={containerRef}>
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-wing-orange/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Image */}
          <div className="lg:col-span-5 banda-image">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-wing-red to-wing-orange rounded-[3rem] -rotate-3 scale-95 opacity-20"></div>
              
              <div className="relative bg-white p-4 rounded-[3rem] shadow-xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={activityImg} 
                  alt="BANDA Activity Hub" 
                  className="w-full h-auto rounded-[2rem] object-cover aspect-[4/5]"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-50 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wing-red rounded-xl flex items-center justify-center text-white">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-aquila-navy text-sm">After School</div>
                    <div className="text-xs text-text-muted">Evenings & Saturdays</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 banda-content">
            <div className="inline-flex items-center space-x-2 bg-wing-orange/10 px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <Star size={14} className="text-wing-orange" />
              <span className="font-heading font-bold text-xs tracking-widest text-wing-orange uppercase">
                Est. 2016
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl mb-4 leading-[1.1] text-wing-red font-display">
              The Activity Hub
            </h2>
            
            <img 
              src={pandaLogo} 
              alt="BANDA Logo" 
              className="max-w-[280px] w-full h-auto object-contain mb-6 mix-blend-multiply cursor-pointer transition-transform duration-300 hover-wiggle hover:scale-110" 
            />
            
            <p className="text-text-muted text-lg leading-relaxed mb-4">
              BANDA – the Activity Hub is a forerunner in engaging children in activities beyond the classroom having been established in the year 2016. At BANDA, we believe learning goes beyond the classroom. We offer engaging and skill-based after-school activities for children above 3 years in a fun, safe and encouraging environment.
            </p>
            
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Our programs are designed to nurture creativity, confidence, communication, and overall development through hands-on learning and interactive experiences.
            </p>

            <h3 className="font-heading font-bold text-xl text-aquila-navy mb-4">Classes Offered:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 mb-8">
              {classes.map((className, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <CheckCircle2 size={20} className="text-wing-green shrink-0 mt-0.5" />
                  <span className="text-aquila-navy font-medium text-sm leading-tight">{className}</span>
                </div>
              ))}
            </div>

            <div className="bg-wing-blue/5 border border-wing-blue/10 rounded-2xl p-6 relative">
               <p className="text-aquila-navy italic relative z-10 text-base">
                 "At BANDA, every child is encouraged to explore their talents, build new skills, and enjoy learning with joy and confidence. Classes are scheduled in the evenings on weekdays and on Saturdays to avoid any disturbance to your child’s regular school."
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
