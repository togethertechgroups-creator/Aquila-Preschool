import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import BlogModal from './BlogModal';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    category: "Montessori Basics",
    categoryColor: "var(--wing-blue)",
    title: "What Is Montessori Education? A Complete Guide for Chennai Parents",
    slug: "what-is-montessori-education-chennai-parents-guide",
    excerpt: "Thinking about Montessori for your child but not sure what it really means? Here's everything Indian parents need to know — explained simply and honestly.",
    readTime: "6 min read",
    publishDate: "May 10, 2025",
    coverImage: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&auto=format&fit=crop",
    author: "Aquila Teaching Team",
    metaTitle: "What Is Montessori Education? Guide for Chennai Parents | Aquila Montessori",
    metaDescription: "Understand the Montessori method simply — what it is, how it works, and why thousands of Chennai parents are choosing it for their children aged 1.5–6 years.",
    keywords: ["montessori education Chennai", "what is montessori", "montessori preschool Chennai", "montessori method India"],
    content: `
      <h2>What Is Montessori Education?</h2>
      <p>Montessori education is a child-centred approach to learning developed by Dr. Maria Montessori, an Italian physician and educator, over 100 years ago. Rather than one teacher instructing 30 children in a uniform way, the Montessori method treats every child as a unique individual with their own natural pace of development.</p>
      <p>At its core, Montessori believes that children have an innate desire to learn. The teacher's role is not to "fill the child with knowledge" but to prepare a rich, structured environment and guide the child's natural curiosity. This is why you will never see a Montessori classroom that looks like a conventional one — the materials, the furniture, the freedom of movement, and the mixed-age groupings are all intentional.</p>

      <h2>How Is Montessori Different from a Regular Preschool?</h2>
      <p>Most traditional preschools follow a teacher-directed model: the teacher decides what is taught, when it is taught, and how. Children sit, listen, repeat. Assessment happens through tests and marks.</p>
      <p>In a Montessori classroom, the child chooses their work from a set of specially designed materials. A three-year-old might spend 45 uninterrupted minutes arranging colour tablets by shade — not because the teacher asked them to, but because that is what captured their interest that morning. Meanwhile, a five-year-old nearby might be working silently with the golden bead material, building a concrete understanding of thousands, hundreds, tens, and units — the foundation of mathematics — entirely through touch and movement.</p>
      <p>This is called <strong>self-directed learning within a prepared environment</strong>. It is not chaos — it is a carefully designed freedom.</p>

      <h2>What Are the Key Principles of Montessori?</h2>
      <p><strong>1. The Prepared Environment:</strong> Every material in the classroom has a purpose. Everything is child-sized, accessible, and inviting. There are no random decorations — only things that serve the child's development.</p>
      <p><strong>2. Uninterrupted Work Periods:</strong> Children need long, uninterrupted blocks of time (typically 3 hours in the morning) to enter a state of deep focus. Montessori classrooms protect this time carefully.</p>
      <p><strong>3. Mixed Age Groups:</strong> Children aged 1.5–3 and 3–6 are grouped together intentionally. Older children reinforce their learning by teaching younger ones. Younger children are inspired by what they see their peers doing.</p>
      <p><strong>4. Intrinsic Motivation:</strong> There are no gold stars, no prize charts, no punishments. Children develop motivation from within — the satisfaction of mastering a task is its own reward.</p>
      <p><strong>5. Respect for the Child:</strong> In a Montessori environment, a child's choices, pace, and interests are genuinely respected. Teachers speak quietly, get down to the child's eye level, and never interrupt deep focus.</p>

      <h2>Is Montessori Right for Every Child?</h2>
      <p>This is one of the most common questions Chennai parents ask us. The honest answer is: Montessori works exceptionally well for most children, but the transition period matters. Some children who have only experienced highly structured environments may initially find the freedom of Montessori unfamiliar. This is normal — and it usually resolves within 4–6 weeks as the child discovers the joy of self-directed work.</p>
      <p>Children who are curious, who love hands-on activities, who prefer to do things themselves rather than be shown — these children thrive in Montessori from day one.</p>

      <h2>What Happens to Montessori Children as They Grow?</h2>
      <p>Long-term studies consistently show that children who attended Montessori preschools demonstrate stronger executive function skills (planning, focus, impulse control), greater social competence, and higher levels of intrinsic motivation through their school years. A landmark 2006 study published in Science journal found that by age five, Montessori children significantly outperformed peers in literacy, numeracy, executive function, and positive social interaction.</p>
      <p>At Aquila Montessori Pre-School in Sithalapakkam, Chennai, we have seen this firsthand — children who joined us as shy toddlers leave for primary school as confident, independent, and joyful learners.</p>

      <h2>How Do I Know If a School Is Truly Montessori?</h2>
      <p>Unfortunately, the word "Montessori" is not trademarked in India — any school can use the name. When evaluating a Montessori school in Chennai, look for: Montessori-trained and certified teachers, authentic Montessori materials (not photocopied worksheets), a 3-hour uninterrupted work period, mixed-age classrooms, child-sized furniture and accessible materials, and an environment that feels calm and purposeful — not chaotic, but also not rigidly controlled.</p>
      <p>We welcome every prospective parent at Aquila Montessori to visit our classroom, observe our educators at work, and ask us anything. A school with nothing to hide will always open its doors.</p>
    `
  },
  {
    id: 2,
    category: "Child Development",
    categoryColor: "var(--wing-green)",
    title: "The Right Age to Start Preschool: What Montessori Says (And What Science Backs)",
    slug: "right-age-to-start-preschool-montessori-guide",
    excerpt: "One of the most searched questions by Indian parents: when is my child ready for preschool? The answer might be earlier than you think.",
    readTime: "5 min read",
    publishDate: "April 22, 2025",
    coverImage: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=900&auto=format&fit=crop",
    author: "Aquila Teaching Team",
    metaTitle: "Right Age to Start Preschool in India | Montessori Guide for Parents",
    metaDescription: "When should your child start preschool? Montessori recommends starting as early as 18 months. Here's why early enrolment builds confidence, language, and independence.",
    keywords: ["when to start preschool India", "preschool age Chennai", "montessori age 18 months", "toddler programme Chennai"],
    content: `
      <h2>The Question Every Indian Parent Asks</h2>
      <p>"Is my child too young?" is the single most common question we hear from parents at Aquila Montessori Pre-School. Most families arrive with children between 2.5 and 3.5 years old, believing that is the "right" age to begin. Many are surprised to learn that Montessori welcomes children as young as 18 months — and that there are compelling developmental reasons to start early.</p>

      <h2>What the Science Says About Early Learning</h2>
      <p>The first three years of a child's life represent the most intensive period of brain development in human biology. By the age of three, a child's brain has formed over one million neural connections per second. These connections are built through sensory experience, movement, language, and social interaction — exactly what a well-designed Montessori environment provides.</p>
      <p>Research from the Harvard Center on the Developing Child consistently shows that early, quality educational experiences create the neural architecture for learning, behaviour, and health that persists throughout a person's life. In simple terms: what happens in the first three years shapes everything that follows.</p>

      <h2>The Montessori View: Sensitive Periods</h2>
      <p>Dr. Montessori described what she called <strong>sensitive periods</strong> — windows of time in a child's development when they are neurologically primed to absorb certain types of learning with extraordinary ease and joy.</p>
      <p>The sensitive period for <strong>language</strong> runs from birth to approximately age six — with the peak window between 18 months and 3 years. A child in this phase absorbs vocabulary, grammar, and two or more languages simultaneously without any formal instruction, simply through exposure. A rich language environment at this stage has lifelong effects on literacy and communication.</p>
      <p>The sensitive period for <strong>order</strong> — a love of routine, sequence, and predictability — is strongest between 18 months and 3 years. Children at this age are deeply comforted by consistent structures, which is why the Montessori classroom routine is so carefully maintained.</p>
      <p>The sensitive period for <strong>movement and refinement of the senses</strong> also peaks in the toddler years — which is why Montessori materials for this age involve pouring, sorting, threading, and practical life activities that build hand-eye coordination and fine motor control.</p>

      <h2>Signs Your Child Is Ready for Preschool</h2>
      <p>Rather than focusing on a specific age number, look for these developmental readiness signals. At 18–24 months: showing interest in other children, some ability to follow simple instructions, beginning to assert independence ("I do it!"), and basic self-help skills beginning to emerge. At 2.5–3 years: most children are ready for a full Montessori nursery programme — they can separate from parents with a brief adjustment period, communicate basic needs, and sustain interest in an activity for 5–10 minutes.</p>

      <h2>What If My Child Is "Shy" or "Not Ready"?</h2>
      <p>Shyness is a temperament, not a developmental problem. A warm, consistent Montessori environment is actually one of the best places for a shy child to build confidence — because the child is never forced to perform, compete, or be compared to others. They can observe, settle at their own pace, and engage when ready. We have seen some of the shyest toddlers become the most confident leaders in their classroom within a single term.</p>
      <p>At Aquila Montessori Sithalapakkam, our Toddler Programme (1.5–2.5 years) is specifically designed for this gentle transition — with smaller group sizes, deeply experienced caregivers, and a classroom environment built entirely around the toddler's sensory and developmental needs. We invite you to visit and see it for yourself.</p>
    `
  },
  {
    id: 3,
    category: "Parenting Tips",
    categoryColor: "var(--wing-orange)",
    title: "Montessori at Home: 7 Simple Habits That Support Your Child's Learning Every Day",
    slug: "montessori-at-home-habits-for-parents-india",
    excerpt: "You don't need expensive materials or a teacher's degree. These 7 everyday habits bring the Montessori spirit into your Chennai home.",
    readTime: "7 min read",
    publishDate: "March 15, 2025",
    coverImage: "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?w=900&auto=format&fit=crop",
    author: "Aquila Teaching Team",
    metaTitle: "Montessori at Home — 7 Daily Habits for Indian Parents | Aquila Montessori",
    metaDescription: "Support your child's Montessori learning at home with these 7 simple habits. No expensive materials needed — just intentional parenting that builds independence and confidence.",
    keywords: ["montessori at home India", "montessori parenting tips", "child independence home", "preschool learning at home Chennai"],
    content: `
      <h2>The School-Home Partnership</h2>
      <p>At Aquila Montessori Pre-School, we often say that the child's greatest classroom is their home. What happens in those 6–8 hours outside school either reinforces or undermines everything we build during the day. The good news: you do not need to buy expensive Montessori materials or follow a complicated programme. A few intentional shifts in how you interact with your child at home can make a profound difference.</p>

      <h2>Habit 1: Slow Down and Let Them Do It</h2>
      <p>The most powerful Montessori principle you can apply at home costs nothing: resist the urge to do things for your child that they can do themselves. Putting on shoes, pouring water, peeling a banana, zipping a bag, arranging their books — these are not just chores. They are rich sensory-motor learning experiences that build coordination, concentration, and self-confidence. The next time your child struggles with a button, watch your instinct to intervene. Wait 10 seconds longer than feels comfortable. More often than not, they will figure it out — and the satisfaction on their face when they do is worth every second.</p>

      <h2>Habit 2: Give Real Choices Within Limits</h2>
      <p>Instead of "What do you want to wear today?" (overwhelming), try "Do you want the blue shirt or the red one?" Instead of "What do you want for breakfast?" try "Idli or dosa?" Real choices within clear limits build decision-making skills, reduce power struggles, and give children a genuine sense of agency. This is at the heart of Montessori's respect for the child's will.</p>

      <h2>Habit 3: Create a "Yes" Space</h2>
      <p>Designate one area of your home — even just a corner — where your child can freely explore without being told "no, don't touch that." Keep safe, interesting materials at their level: a basket of natural objects, stackable containers, fabric scraps, a bowl of dried lentils for pouring. A child who has a "yes" space is less likely to get into the "no" spaces. This is the Montessori prepared environment in miniature.</p>

      <h2>Habit 4: Narrate the World Around Them</h2>
      <p>Language-rich environments produce language-rich children. While cooking, narrate what you are doing: "Now I am adding the turmeric — see the yellow colour? It smells strong." While driving, name what you see. While folding laundry, name the colours and textures. This constant, natural language exposure during the sensitive period for language (18 months–6 years) builds vocabulary, grammar, and comprehension faster than any flashcard ever could.</p>

      <h2>Habit 5: Involve Them in Real Work</h2>
      <p>Children between 2 and 6 love to help with real household tasks — they just need them presented at the right level. A two-year-old can wipe a table with a small cloth. A three-year-old can sort laundry by colour. A four-year-old can water plants or help arrange flowers in a vase. A five-year-old can peel vegetables with an appropriate peeler. Practical life skills — the foundation of the Montessori curriculum — are all around your home already. Involve your child and watch their sense of purpose and belonging deepen.</p>

      <h2>Habit 6: Protect Deep Focus</h2>
      <p>When your child is deeply absorbed in building with blocks, drawing, or arranging toy animals — do not interrupt. Even with a positive comment ("Wow, what are you making?") you break their concentration. Deep focus in young children is precious and should be protected. Montessori calls this the <strong>normalised child</strong> — a child who can enter a state of joyful concentration. This capacity for focus, built in early childhood, is one of the greatest predictors of academic and life success.</p>

      <h2>Habit 7: Follow Their Interest, Not Your Anxiety</h2>
      <p>Many parents in Chennai come to us worried: "Should my three-year-old know the alphabet by now? All his cousin's children do." The comparison trap is one of the greatest threats to a child's natural development. Every child has a unique inner timetable. Montessori education is built entirely on this truth. Your child's deep interest in insects, trains, colour mixing, or arranging stones is not a distraction from learning — it IS learning. Follow it. Feed it. Trust it.</p>
      <p>When school and home work together with this shared understanding, children do not just learn — they flourish.</p>
    `
  },
  {
    id: 4,
    category: "Admissions Guide",
    categoryColor: "var(--wing-purple)",
    title: "How to Choose the Right Preschool in Chennai: 10 Questions Every Parent Must Ask",
    slug: "how-to-choose-preschool-chennai-questions-to-ask",
    excerpt: "With dozens of preschools in Chennai, how do you know which one is right for your child? These 10 questions cut through the marketing and reveal the truth.",
    readTime: "6 min read",
    publishDate: "February 28, 2025",
    coverImage: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=900&auto=format&fit=crop",
    author: "Aquila Teaching Team",
    metaTitle: "How to Choose a Preschool in Chennai — 10 Questions to Ask | Aquila Montessori",
    metaDescription: "Choosing a preschool in Chennai? These 10 honest questions help parents cut through the brochures and identify schools that truly serve their child's development.",
    keywords: ["how to choose preschool Chennai", "best preschool Sithalapakkam", "preschool admission Chennai 2025", "questions to ask preschool"],
    content: `
      <h2>Why This Decision Matters More Than People Realise</h2>
      <p>The preschool years — ages 1.5 to 6 — are the most neurologically significant years of a child's life. The environment, relationships, and experiences a child has during these years literally shape the architecture of their developing brain. This is not a decision to make based on proximity to your flat or which school has the most colourful Instagram page.</p>
      <p>Here are the 10 questions we encourage every Chennai parent to ask — whether you are considering Aquila Montessori or any other school in the city.</p>

      <h2>1. What is your educational philosophy, and how do you apply it daily?</h2>
      <p>Every school will say "child-centred" and "holistic." Ask them to explain what that means in their specific classroom on a specific Tuesday morning. What does a typical 9am to 12pm look like? The answer reveals whether the philosophy is real or just marketing language.</p>

      <h2>2. What are your teacher qualifications and training?</h2>
      <p>A preschool teacher's qualification matters enormously at this age. Look for Montessori certification (AMI or AMS), early childhood education degrees, or extensive specialised training. Ask how often teachers receive ongoing professional development. A school that invests in its teachers invests in your child.</p>

      <h2>3. What is the teacher-to-child ratio?</h2>
      <p>For toddlers (under 2.5 years), the ideal ratio is 1:5 or better. For children 3–6 years, 1:10 to 1:12 is reasonable in a well-designed Montessori environment. Anything higher and individual attention becomes impossible. Do not accept vague answers here — ask for specific numbers.</p>

      <h2>4. Can I observe a classroom session before enrolling?</h2>
      <p>Any school confident in its practice will welcome observation visits. A refusal or a heavily staged "open day" that prevents natural observation is a red flag. When you observe, watch the children — not the teachers. Are children engaged and purposeful? Is there calm focus? Do children move freely and help each other?</p>

      <h2>5. How do you handle separation anxiety?</h2>
      <p>This is a critical transition for both child and parent. Ask for a specific process: Is there a gradual transition period? Can parents stay initially? How do teachers manage a crying child? A school with a thoughtful, compassionate separation protocol signals that they understand child development deeply.</p>

      <h2>6. How do you communicate with parents?</h2>
      <p>Regular, specific communication is a sign of a professionally run school. Ask whether they provide daily or weekly updates, how they handle concerns, and whether there is a structured parent-teacher meeting schedule. A school that only contacts you when there is a problem is not a partner in your child's education.</p>

      <h2>7. What is your approach to discipline?</h2>
      <p>In quality Montessori schools, punishment, shaming, and time-outs are not used. Ask directly: "What do you do when a child hits another child?" or "What happens when a child refuses to participate?" The answer will tell you everything about the school's understanding of child psychology.</p>

      <h2>8. What does the outdoor space and physical environment look like?</h2>
      <p>Young children need daily outdoor time for gross motor development, sensory experience, and emotional regulation. A school without meaningful outdoor space — or one that treats outdoor time as a "reward" — is missing a fundamental developmental requirement.</p>

      <h2>9. How do you support children with different learning paces?</h2>
      <p>In any classroom, some children will be ahead of the typical developmental curve and some will need more time. Ask specifically how the school handles both situations. A quality answer involves individualised observation, differentiated materials, and patience — not labelling or pushing.</p>

      <h2>10. What happens at the end of the programme — are children ready for primary school?</h2>
      <p>This is every parent's underlying anxiety. Research consistently shows that Montessori children transition to primary school with strong foundational skills AND — more importantly — with the self-regulation, curiosity, and love of learning that helps them thrive for years to come. Ask to speak with parents of alumni if possible.</p>

      <p>At Aquila Montessori Pre-School, Sithalapakkam, we welcome every one of these questions and more. We believe a parent who asks good questions is a parent who will be our best partner in their child's journey. Book a school visit — we would love to show you what a day at Aquila looks like.</p>
    `
  },
  {
    id: 5,
    category: "School Life",
    categoryColor: "var(--wing-red)",
    title: "A Day in the Life at Aquila Montessori: What Your Child Actually Does From 8:30am to 4pm",
    slug: "day-in-life-aquila-montessori-preschool-sithalapakkam",
    excerpt: "Curious what really happens inside our classroom? Walk through a full day at Aquila Montessori — hour by hour, through your child's eyes.",
    readTime: "5 min read",
    publishDate: "January 20, 2025",
    coverImage: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=900&auto=format&fit=crop",
    author: "Aquila Teaching Team",
    metaTitle: "A Day in Life at Aquila Montessori Pre-School Sithalapakkam Chennai",
    metaDescription: "See exactly what your child experiences at Aquila Montessori Pre-School in Sithalapakkam, Chennai — from morning arrival to afternoon farewell. A window into our world.",
    keywords: ["aquila montessori preschool", "preschool sithalapakkam", "montessori day life Chennai", "best preschool Sithalapakkam Chennai"],
    content: `
      <h2>8:30 AM — Morning Arrival & Settling In</h2>
      <p>The Aquila classroom comes alive from 8:30am. Children arrive, place their bags on their personal hooks, change into their indoor slippers, and enter the classroom independently. Our educators greet each child by name at the door — a small but significant act that signals: you are seen, you are known, you belong here.</p>
      <p>The first ten minutes are a gentle transition. Some children go immediately to a favourite material. Some sit on the mat and observe the room. A few might need a brief moment with their teacher before feeling settled. All of this is normal and expected. We never rush the morning arrival.</p>

      <h2>9:00 AM — The Three-Hour Work Cycle Begins</h2>
      <p>This is the heart of the Montessori day. For three uninterrupted hours, children choose their own work from the prepared environment — independently or with a partner. A teacher never says "now it's time to do this." Instead, educators move quietly through the room: presenting a new material to one child, observing another's concentration, offering a gentle redirect if needed.</p>
      <p>On any given morning in our classroom you might see a three-year-old carefully transferring water between two jugs with a small ladle (practical life, fine motor, concentration), a four-year-old working with the pink tower (sensory discrimination, mathematical concepts of size), and a five-year-old using the movable alphabet to compose their first written sentence (literacy, creativity, independence).</p>
      <p>The variety of work happening simultaneously — all self-chosen, all purposeful — is one of the most remarkable things first-time visitors notice. The room is calm and focused, not noisy and chaotic.</p>

      <h2>10:30 AM — Snack Time & Community Circle</h2>
      <p>Children wash their hands, set out their snacks, and eat together at the snack table — a real wooden table with real ceramic plates, not plastic disposables. Snack time is a social occasion: children practise table manners, conversation, and the practical life skill of preparing and clearing their own space. After snack, we gather for a short community circle — songs, seasonal activities, a story, or a brief lesson — depending on the day.</p>

      <h2>11:00 AM — Outdoor Time</h2>
      <p>Every day, children spend time outdoors regardless of Chennai's weather (we monitor heat sensibly). The outdoor space at Aquila provides opportunities for gross motor development through running, climbing, and balancing, as well as gardening, nature observation, and group games. Outdoor play is not a break from learning — it is learning in a different environment. Physical development and cognitive development are inseparable in early childhood.</p>

      <h2>12:00 PM — Lunch & Rest</h2>
      <p>Lunch at Aquila is a warm, nutritious, home-style meal. Children who bring tiffins from home eat alongside their friends. After lunch, younger children (toddlers and nursery) have a rest period. Older children engage in quieter afternoon activities — drawing, reading picture books, or working with quieter materials.</p>

      <h2>2:00 PM — Afternoon Extended Programme</h2>
      <p>For children in our full-day programme, the afternoon brings enrichment activities: music and movement, storytelling in Tamil and English, art with natural materials, and special cultural activities linked to the Tamil calendar and Indian traditions. We believe deeply that language, music, and cultural identity are foundational — not extracurricular.</p>

      <h2>4:00 PM — Farewell</h2>
      <p>As the school day ends, children pack their bags independently, collect their notes for parents, and wait for their family. Our educators give each child and parent a brief, specific update — not just "he was fine," but "today Arjun was deeply focused on the knobbed cylinders for nearly 20 minutes — he is really developing his concentration." That specificity is intentional. It is how we keep the school-home partnership real.</p>
      <p>Would you like to see this for yourself? We invite all prospective families to visit Aquila Montessori Pre-School in Sithalapakkam, Chennai — and watch a real morning unfold. Book your visit today.</p>
    `
  }
];

export default function BlogSection() {
  const sectionRef = useRef(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const triggerRefs = useRef({});

  useEffect(() => {
    let ctx;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      ctx = gsap.context(() => {
        gsap.from(".blog-section-header > *", {
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
          y: 30, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out", clearProps: "all"
        });

        gsap.from(".blog-card", {
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          y: 50, opacity: 0, duration: 0.6, stagger: 0.12, ease: "power2.out", clearProps: "all"
        });
      }, sectionRef);
    }
    return () => ctx && ctx.revert();
  }, []);

  const handleOpenPost = (post, id) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleClosePost = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedPost(null);
    }, 400); // Wait for modal transition
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Aquila Montessori Insights",
    "description": "Expert insights on Montessori education, child development, and parenting from Aquila Montessori Pre-School, Sithalapakkam, Chennai",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "Aquila Montessori Pre-School",
      "url": "https://aquilamontessori.in"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": new Date(post.publishDate).toISOString().split('T')[0],
      "author": { "@type": "Organization", "name": post.author },
      "description": post.metaDescription,
      "keywords": post.keywords.join(", ")
    }))
  };

  return (
    <section id="blog" className="py-24 bg-aquila-cream relative blog-section" ref={sectionRef}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="blog-section-header text-center mb-16 max-w-3xl mx-auto">
          <h3 className="text-aquila-navy font-bold tracking-widest uppercase text-sm mb-4">Insights & Resources</h3>
          <h2 className="text-4xl md:text-5xl font-display text-aquila-navy mb-6">
            Learning Together — <br className="hidden md:block"/> For Parents Who Care
          </h2>
          <p className="text-text-muted font-body text-lg">
            Expert insights on Montessori education, child development, and making the right choices for your child's early years.
          </p>
        </div>

        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => {
            const isFeatured = index === 0;
            return (
              <div 
                key={post.id}
                className={`blog-card group bg-white/90 backdrop-blur-[8px] rounded-[2rem] border border-aquila-navy/5 overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl flex flex-col ${isFeatured ? 'lg:col-span-2 lg:flex-row' : ''}`}
              >
                <div className={`relative overflow-hidden ${isFeatured ? 'lg:w-1/2' : 'w-full aspect-[16/10]'}`}>
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span 
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                      style={{ backgroundColor: post.categoryColor }}
                      aria-label={`Category: ${post.category}`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className={`p-6 md:p-8 flex flex-col flex-grow ${isFeatured ? 'lg:w-1/2 lg:justify-center' : ''}`}>
                  <div className="flex items-center text-xs text-text-muted mb-4 font-heading font-medium">
                    <Clock size={14} className="mr-1.5" />
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full">{post.readTime}</span>
                  </div>
                  
                  <h3 className={`font-heading font-bold text-aquila-navy mb-3 line-clamp-2 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {post.title}
                  </h3>
                  
                  <p className="font-body text-text-muted text-sm md:text-base leading-relaxed line-clamp-2 mb-6">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-aquila-navy text-white flex items-center justify-center font-bold text-xs">
                        AT
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-aquila-navy">{post.author}</span>
                        <span className="text-[10px] text-text-muted">{post.publishDate}</span>
                      </div>
                    </div>
                    
                    <button 
                      ref={el => triggerRefs.current[post.id] = el}
                      onClick={() => handleOpenPost(post, post.id)}
                      className="flex items-center text-aquila-navy font-bold text-sm hover:text-wing-blue transition-colors group/btn"
                      aria-label={`Read article: ${post.title}`}
                    >
                      Read Article
                      <ArrowRight size={16} className="ml-1.5 transition-transform duration-300 ease-out group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <BlogModal 
        post={selectedPost} 
        isOpen={isModalOpen} 
        onClose={handleClosePost}
        triggerRef={{ current: selectedPost ? triggerRefs.current[selectedPost.id] : null }}
      />
    </section>
  );
}
