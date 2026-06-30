import { useEffect, useCallback, useRef } from 'react';
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
  },
  {
    name: 'Jacob Cherian',
    child: 'Parent',
    initials: 'JC',
    color: 'bg-wing-green',
    text: "Great place for a child to start his/her life. Dedicated teachers and staff. Lovely Montessori atmosphere that would help children to develop their learning abilities at their formative phase itself. Beautiful ambience that will make children feel at home. Banda is a place for a wholesome experience.",
  },
  {
    name: 'Selvi senthilkumar',
    child: 'Parent',
    initials: 'SS',
    color: 'bg-wing-blue',
    text: "Hi I'm Nagaselvi, working in a CBSE school as a kindergarten teacher.I love my profession. Coming to Banda Montessori learning institution it was a safe, professional and …More",
  },
  {
    name: 'Priya Amirthalingam',
    child: 'Parent',
    initials: 'PA',
    color: 'bg-wing-orange',
    text: "One of the best Montessori schools in Sithalapakkam. Kids improve themselves, caring and improving their listening skills ... They provide a good environment for the children.",
  },
  {
    name: 'Ranjini Prasanna',
    child: 'Parent',
    initials: 'RP',
    color: 'bg-wing-purple',
    text: "I highly recommend this institution for Montessori training. Best place for you to become a Montessori teacher. Teachers are fantastic. Had a good experience. Flexible timing and framed curriculum..",
  },
  {
    name: 'Savitha AShok',
    child: 'Parent',
    initials: 'SA',
    color: 'bg-wing-yellow',
    text: "Exact place for kids to find out the real talents. Thera are lots of montessori materials are in the classroom it makes kids to understand logical,concrete to abstract thinking. Kids will Enjoy and learn with fun.",
  },
  {
    name: 'Sarah Jacob',
    child: 'Parent',
    initials: 'SJ',
    color: 'bg-wing-red',
    text: "It's a great place for Montessori method of teaching.. I am pretty sure kids will learn new things in different subject s.",
  },
  {
    name: 'ponvidhya s',
    child: 'Parent',
    initials: 'PS',
    color: 'bg-wing-green',
    text: "I'm happy to share that my kids enjoyed the summer camp in Banda activity hub. Every day they learned new things and kept my kids engaged in the class.",
  },
  {
    name: 'sakkthi sivakumar',
    child: 'Parent',
    initials: 'SS',
    color: 'bg-wing-blue',
    text: "It's a great place for the Montessori method of teaching for your kids... Super environment and friendly staff members...",
  },
  {
    name: 'Shanthamma',
    child: 'Parent',
    initials: 'S',
    color: 'bg-wing-orange',
    text: "Good place for kids to enhance there potential capabilities .. and fun activities for there motor skills and best places for kids and montessori teaching.",
  },
  {
    name: 'Aruna Navarathinam',
    child: 'Parent',
    initials: 'AN',
    color: 'bg-wing-purple',
    text: "Good institution for acquiring knowledge on Montessori methods of teaching.",
  },
  {
    name: 'Sindhuja Gajapathy',
    child: 'Parent',
    initials: 'SG',
    color: 'bg-wing-yellow',
    text: "My kid is having a great learning experience at Banda!!",
  },
  {
    name: 'Ramalakshmi Navarathinam',
    child: 'Parent',
    initials: 'RN',
    color: 'bg-wing-red',
    text: "It's a great educational hub for the kids And a very valuable experience for them",
  },
  {
    name: 'ASWINI R',
    child: 'Parent',
    initials: 'AR',
    color: 'bg-wing-green',
    text: "I’m extremely happy with this phonics online class. My child has been learning here for the past 2.5 years, and the improvement has been honestly amazing. From learning basic sounds to reading confidently, the progress has been very clear …More",
  },
  {
    name: 'Prabu L',
    child: 'Parent',
    initials: 'PL',
    color: 'bg-wing-blue',
    text: "Environment and teaching is good...",
  },
  {
    name: 't.sundravadivel',
    child: 'Parent',
    initials: 'TS',
    color: 'bg-wing-orange',
    text: "Excellent place for ur child to increase there skills 🤩👏🤗",
  },
  {
    name: 'MANIKUMARAN MANIVASAGAN',
    child: 'Parent',
    initials: 'MM',
    color: 'bg-wing-purple',
    text: "Nice and friendly environment to develop your skills such as phonics ,arts , etc",
  },
  {
    name: 'Balaji Jayaraman',
    child: 'Parent',
    initials: 'BJ',
    color: 'bg-wing-yellow',
    text: "The Art class is good here and I could see a great improvement in my ward's drawing skills. Highly recommended. They also have Phonics and Bharatham classes. Kudos to Art class faculty Mr.Manikumaran.",
  },
  {
    name: 'Nirmaldasan',
    child: 'Parent',
    initials: 'N',
    color: 'bg-wing-red',
    text: "குழந்தைகள் விரும்பி கற்கும் இடம், மகிழ்ந்து ஆடும் இடம், கைவண்ணம் காட்டும் இடம்.",
  },
  {
    name: 'Simla A',
    child: 'Parent',
    initials: 'SA',
    color: 'bg-wing-green',
    text: "The atmosphere was wonderful, with a spacious classroom and a highly supportive educator. #Banda",
  },
  {
    name: 'Kavitha Lakshmi Gopalakrishnan',
    child: 'Parent',
    initials: 'KG',
    color: 'bg-wing-blue',
    text: "Nice and hygienic place for kids for learning and activities done there are very nice and friendly staff and excellent teaching facilities for children.",
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
        gsap.from('.section-header', {
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
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
