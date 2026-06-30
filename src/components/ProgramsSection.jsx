import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Baby, Flower, BookOpen, GraduationCap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: 'Toddler Programme',
    age: '1.5–2.5 yrs',
    icon: Baby,
    color: 'bg-wing-green',
    borderColor: 'border-t-wing-green',
    desc: 'Gentle introduction to the Montessori environment. Sensory play, practical life skills, and social bonding in a safe, nurturing space.',
  },
  {
    title: 'Nursery',
    age: '2.5–3.5 yrs',
    icon: Flower,
    color: 'bg-wing-blue',
    borderColor: 'border-t-wing-blue',
    desc: 'Language development, fine motor activities, cultural exploration, and early mathematical concepts through hands-on Montessori materials.',
  },
  {
    title: 'Junior KG',
    age: '3.5–4.5 yrs',
    icon: BookOpen,
    color: 'bg-wing-orange',
    borderColor: 'border-t-wing-orange',
    desc: 'Deepening literacy and numeracy through Montessori language materials, sandpaper letters, number rods, and rich storytelling.',
  },
  {
    title: 'Senior KG',
    age: '4.5–6 yrs',
    icon: GraduationCap,
    color: 'bg-wing-yellow',
    borderColor: 'border-t-wing-yellow',
    desc: 'Preparing children for primary school through advanced Montessori work, collaborative projects, and building strong self-management skills.',
  },
];

export default function ProgramsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ctx = gsap.context(() => {
        gsap.from('.program-card', {
          scrollTrigger: { 
            trigger: '.programs-grid', 
            start: 'top 80%' 
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.4)'
        });
      }, containerRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="programmes" className="py-24 bg-cream relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-heading font-bold text-sm tracking-widest text-wing-orange uppercase mb-2 block">
            Our Programmes
          </span>
          <h2 className="text-4xl md:text-5xl leading-tight">
            Learning That Grows With <br className="hidden md:block" />
            <span className="rainbow-text">Your Child</span>
          </h2>
        </div>

        <div className="programs-grid grid md:grid-cols-2 gap-8">
          {programs.map((prog, index) => {
            const Icon = prog.icon;
            return (
              <div 
                key={index} 
                className={`program-card glass-panel bg-white border-t-4 ${prog.borderColor} p-8 hover:-translate-y-2 transition-transform duration-300 ease-out`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-4">
                  <div className={`shrink-0 w-16 h-16 rounded-2xl ${prog.color} bg-opacity-20 flex items-center justify-center`}>
                    <Icon size={32} className={`text-${prog.color.replace('bg-', '')}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2">{prog.title}</h3>
                    <span className="inline-block bg-gray-100 text-aquila-navy font-heading font-bold text-xs px-3 py-1 rounded-full">
                      {prog.age}
                    </span>
                  </div>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {prog.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
