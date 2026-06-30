import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import kidsPark from '../assets/kids-park.png';

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childAge: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Trigger party confetti pop up
    if (window.confetti) {
      window.confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    
    const message = `*Quick Enquiry*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Child's Age:* ${formData.childAge}%0A` +
      `*Query:* ${formData.query}`;
      
    const whatsappUrl = `https://wa.me/917200083155?text=${message}`;
    
    // Delay slightly to let the animation be seen before opening a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);
    
    setFormData({ name: '', phone: '', childAge: '', query: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={kidsPark} alt="Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-aquila-navy/85 to-[#0F1F5C]/85 backdrop-blur-sm"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl leading-tight text-aquila-navy font-bold mb-4">
            Have Questions? We'd Love to <span className="rainbow-text">Hear From You</span>
          </h2>
          <p className="text-aquila-navy/80 font-medium text-lg">
            Our friendly team is always here to help you find the
            best path for your child's early learning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 flex items-start space-x-4 shadow-lg text-aquila-navy">
              <div className="shrink-0">
                <MapPin className="text-wing-red mt-1" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1 text-aquila-navy">Address</h4>
                <p className="font-semibold text-aquila-navy leading-relaxed">
                  <a 
                    href="https://www.google.com/maps/place/AQUILA+MONTESSORI+PRE-SCHOOL/@12.8932059,80.1796102,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52592133336bf1:0xf1d7c6027bb1bcc5!8m2!3d12.8932059!4d80.1821851" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-wing-blue transition-colors cursor-pointer"
                  >
                    AQUILA MONTESSORI PRE-SCHOOL,<br />
                    1351, Ground, HIG TNHB, Plot No, Road,<br />
                    TNHB Colony Road, Sithalapakkam,<br />
                    Chennai, Tamil Nadu 600126
                  </a>
                </p>
                <a 
                  href="https://www.google.com/maps/place/AQUILA+MONTESSORI+PRE-SCHOOL/@12.8932059,80.1796102,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52592133336bf1:0xf1d7c6027bb1bcc5!8m2!3d12.8932059!4d80.1821851" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 mt-3 text-sm font-heading font-bold text-wing-blue hover:text-aquila-navy transition-colors group"
                >
                  <MapPin size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 flex items-start space-x-4 shadow-lg text-aquila-navy">
              <div className="shrink-0">
                <Phone className="text-wing-blue mt-1" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1 text-aquila-navy">Phone</h4>
                <div className="font-semibold text-aquila-navy flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                  <a href="tel:+917200083468" className="hover:text-wing-blue transition-colors">+91 72000 83468</a>
                  <a href="tel:+917200083155" className="hover:text-wing-blue transition-colors">+91 72000 83155</a>
                </div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 flex items-start space-x-4 shadow-lg text-aquila-navy">
              <div className="shrink-0">
                <Mail className="text-wing-yellow mt-1" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1 text-aquila-navy">Email</h4>
                <a href="mailto:aquilamontessoripreschool@gmail.com" className="font-semibold text-aquila-navy hover:text-wing-blue transition-colors break-all">
                  aquilamontessoripreschool@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-lg rounded-2xl p-6 flex items-start space-x-4 shadow-lg text-aquila-navy">
              <div className="shrink-0">
                <Clock className="text-wing-green mt-1" size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1 text-aquila-navy">School Hours</h4>
                <p className="font-semibold text-aquila-navy">
                  Monday – Friday: 9:30 AM – 12:30 PM<br />
                  Saturday & Sunday: Holiday
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg h-64 border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9748530349884!2d80.1796102!3d12.8932059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52592133336bf1%3A0xf1d7c6027bb1bcc5!2sAQUILA%20MONTESSORI%20PRE-SCHOOL!5e0!3m2!1sen!2sin!4v1715850000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Aquila Montessori Pre-School Location"
              ></iframe>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-aquila-navy">
            <h3 className="font-heading font-bold text-2xl mb-6 text-aquila-navy">Quick Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div>
                <label htmlFor="name" className="block font-heading mb-1 text-sm font-semibold text-aquila-navy">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-aquila-navy placeholder-gray-400 focus:border-wing-blue focus:ring-2 focus:ring-wing-blue/20 outline-none transition-all" placeholder="Enter your name" />
              </div>

              <div>
                <label htmlFor="phone" className="block font-heading mb-1 text-sm font-semibold text-aquila-navy">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-aquila-navy placeholder-gray-400 focus:border-wing-blue focus:ring-2 focus:ring-wing-blue/20 outline-none transition-all" placeholder="Enter your phone number" />
              </div>

              <div>
                <label htmlFor="childAge" className="block font-heading mb-1 text-sm font-semibold text-aquila-navy">Child's Age</label>
                <div className="relative">
                  <select id="childAge" name="childAge" value={formData.childAge} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-aquila-navy outline-none transition-all appearance-none focus:border-wing-blue focus:ring-2 focus:ring-wing-blue/20">
                    <option value="">Select Age</option>
                    <option value="Under 1.5 yrs">Under 1.5 yrs</option>
                    <option value="1.5–2.5">1.5–2.5 yrs</option>
                    <option value="2.5–3.5">2.5–3.5 yrs</option>
                    <option value="3.5–4.5">3.5–4.5 yrs</option>
                    <option value="4.5–6">4.5–6 yrs</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="query" className="block font-heading mb-1 text-sm font-semibold text-aquila-navy">Your Query</label>
                <textarea id="query" name="query" value={formData.query} onChange={handleChange} rows="4" required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-aquila-navy placeholder-gray-400 focus:border-wing-blue focus:ring-2 focus:ring-wing-blue/20 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl font-heading font-bold text-white transition-transform hover:scale-[1.02]" style={{ background: 'linear-gradient(90deg, #4CAF50, #2196F3, #FF9800, #FFC107, #9C27B0, #F44336)' }}>
                Send Enquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
