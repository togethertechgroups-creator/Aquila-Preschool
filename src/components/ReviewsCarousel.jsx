import React, { useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: 'Ranjini Gurusamy',
    child: 'Parent',
    initials: 'RG',
    color: 'bg-wing-green',
    text: "Excellent Montessori school with a warm and caring environment. Ms. Deepa mam is very patient, loving, and dedicated to every child’s growth and happiness. Highly recommended!",
  },
  {
    name: 'Balarengan Rajeswari',
    child: 'Parent',
    initials: 'BR',
    color: 'bg-wing-blue',
    text: "Excellent teaching and faculties.",
  },
  {
    name: 'mariya aswin',
    child: 'Parent',
    initials: 'MA',
    color: 'bg-wing-orange',
    text: "Super education 💖💯 my son read in Play School. 🌹Abacus.🌹Phonics .💐",
  },
  {
    name: 'CCN Vijaya Lakshmi. S',
    child: 'Parent',
    initials: 'VL',
    color: 'bg-wing-purple',
    text: "Very good teaching and friendly teachers Thank you so much mam",
  },
  {
    name: 'Sakthivel Keerthi18',
    child: 'Parent',
    initials: 'SK',
    color: 'bg-wing-yellow',
    text: "Good teaching method",
  },
  {
    name: 'divya mary',
    child: 'Parent',
    initials: 'DM',
    color: 'bg-wing-red',
    text: "My child loves going to AQUILA Montessori. The teachers are caring and patient. Kids learn through play and activities. Classrooms are clean and colorful. My kid has become more confident and independent.",
  },
  {
    name: 'Kavitha',
    child: 'Parent',
    initials: 'K',
    color: 'bg-wing-green',
    text: "The school has a warm, welcoming, and child-friendly atmosphere where children feel safe, happy, and confident. The classrooms are clean, well organized, and thoughtfully prepared for learning. The Montessori materials are of excellent …More",
  },
  {
    name: 'vijaya anand',
    child: 'Parent',
    initials: 'VA',
    color: 'bg-wing-blue',
    text: "Excellent teaching",
  },
  {
    name: 'Sreepavitra Prabhu',
    child: 'Parent',
    initials: 'SP',
    color: 'bg-wing-orange',
    text: "Mrs .Deepa sendhil ma'am is really proud teacher.Good analyser . Very good place for kindergarten children because deepa ma'am following Maria's principles in nurturing child .",
  },
  {
    name: 'Nisha Kumar',
    child: 'Parent',
    initials: 'NK',
    color: 'bg-wing-purple',
    text: "Excellent care and attention given to every child.A warm, safe, and happy learning environment.Teachers are patient, kind, and very supportive.Wonderful improvement in communication and social skills.The Montessori method is followed …More",
  },
  {
    name: 'kokila ravichandran',
    child: 'Parent',
    initials: 'KR',
    color: 'bg-wing-yellow',
    text: "Aquila School provides holistic experience, focusing on independence,hands on learning.The guides are attentive and treat the children with such respect, fostering a genuine love for learning rather than just rote memorization.",
  },
  {
    name: 'Manjula Devi',
    child: 'Parent',
    initials: 'MD',
    color: 'bg-wing-red',
    text: "It's a great place for children for hands-on learning. Safe and neat environment with all montessori equipments, so children can explore alot.",
  },
  {
    name: 'anita Muthiah',
    child: 'Parent',
    initials: 'AM',
    color: 'bg-wing-green',
    text: "Excellent teaching method. Experienced teachers. Montessori way of teaching encourages children to explore more and learn more.",
  },
  {
    name: 'Gayathri Gayu',
    child: 'Parent',
    initials: 'GG',
    color: 'bg-wing-blue',
    text: "Great learning experience... Good school!!!!",
  },
  {
    name: 'madhu devi',
    child: 'Parent',
    initials: 'MD',
    color: 'bg-wing-orange',
    text: "Excellent teaching",
  },
  {
    name: 'Moses G',
    child: 'Parent',
    initials: 'MG',
    color: 'bg-wing-purple',
    text: "The children will have extraordinary learning experience and they will enjoy learning .",
  },
  {
    name: 'karthika blessing',
    child: 'Parent',
    initials: 'KB',
    color: 'bg-wing-yellow',
    text: "Great Pre school for Montessori!!!!",
  },
  {
    name: 'Meenakshi T',
    child: 'Parent',
    initials: 'MT',
    color: 'bg-wing-red',
    text: "The school offers a child centric environment with kind teachers.",
  },
  {
    name: 'Vinitha A',
    child: 'Parent',
    initials: 'VA',
    color: 'bg-wing-green',
    text: "Excellent montessori syllabus taught to the kids , A place where kids enjoy and grow in education",
  },
  {
    name: 'lavanya lavu',
    child: 'Parent',
    initials: 'LL',
    color: 'bg-wing-blue',
    text: "It's a excellent preschool.",
  },
  {
    name: 'Anjana Devi',
    child: 'Parent',
    initials: 'AD',
    color: 'bg-wing-orange',
    text: "Excellent place for kids to explore Montessori",
  },
  {
    name: 'Annie Elka',
    child: 'Parent',
    initials: 'AE',
    color: 'bg-wing-purple',
    text: "Excellent atmosphere for children’s overall development. The staff are friendly, approachable, and truly care about every child.",
  },
  {
    name: 'annushree bidwai',
    child: 'Parent',
    initials: 'AB',
    color: 'bg-wing-yellow',
    text: "I have the most recent and reliable experience of the expertise delivered by the team at Aquila Montessori. The teachers are amazing at understanding the little ones. The interaction and …More",
  }
];

export default function ReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center', skipSnaps: false });
  const containerRef = useRef(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Auto-carousel effect
  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  useEffect(() => {
    let ctx;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ctx = gsap.context(() => {
        gsap.from('.reviews-section .section-header', {
          scrollTrigger: { trigger: '.reviews-section', start: 'top 80%' },
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: 'power2.out'
        });
      }, containerRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section id="reviews" className="reviews-section py-24 bg-gradient-to-b from-aquila-navy/5 to-white relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="section-header text-center max-w-3xl mx-auto mb-16">
          <span className="font-heading font-bold text-sm tracking-widest text-wing-blue uppercase mb-2 block">
            Parent Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl leading-tight">
            What Our <span className="rainbow-text">Families Say</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4">
              {reviews.map((review, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/60 h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden">
                    {/* Top colored accent bar */}
                    <div className={`absolute top-0 left-0 w-full h-2 ${review.color}`}></div>
                    
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-wing-yellow fill-wing-yellow" />
                      ))}
                    </div>
                    
                    <p className="text-text-muted italic flex-grow mb-6 leading-relaxed relative z-10">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center space-x-4 mt-auto border-t border-gray-100 pt-4">
                      <div className={`w-12 h-12 rounded-2xl ${review.color} text-white flex items-center justify-center font-heading font-bold text-lg transform group-hover:rotate-6 transition-transform`}>
                        {review.initials}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-aquila-navy">{review.name}</h4>
                        <p className="text-xs text-text-muted">{review.child}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-aquila-navy hover:text-wing-blue transition-colors focus:outline-none z-10 hover:scale-110 transform"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-aquila-navy hover:text-wing-blue transition-colors focus:outline-none z-10 hover:scale-110 transform"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
