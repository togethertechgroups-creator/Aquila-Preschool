import React, { useState } from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';

const steps = [
  { title: 'Fill the Application Form', color: 'bg-wing-green', textColor: 'text-wing-green' },
  { title: 'Schedule a School Visit', color: 'bg-wing-blue', textColor: 'text-wing-blue' },
  { title: 'Meet Our Educators', color: 'bg-wing-orange', textColor: 'text-wing-orange' },
  { title: 'Complete Admission Formalities', color: 'bg-wing-yellow', textColor: 'text-wing-yellow' },
  { title: 'Welcome to the Aquila Family!', color: 'bg-wing-purple', textColor: 'text-wing-purple' },
];

export default function AdmissionSection() {
  const [formData, setFormData] = useState({
    childName: '', dob: '', parentName: '', mobile: '', email: '', programme: '', startDate: '', message: ''
  });
  

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Trigger party confetti pop up
    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
    
    const message = `*Admission Application*%0A%0A` +
      `*Parent Name:* ${formData.parentName}%0A` +
      `*Child Name:* ${formData.childName}%0A` +
      `*DOB:* ${formData.dob}%0A` +
      `*Mobile:* ${formData.mobile}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Programme:* ${formData.programme}%0A` +
      `*Start Date:* ${formData.startDate}%0A` +
      `*Message:* ${formData.message}`;
      
    const whatsappUrl = `https://wa.me/919941888840?text=${message}`;
    
    // Delay slightly to let the animation be seen before opening a new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1000);
    
    setFormData({ childName: '', dob: '', parentName: '', mobile: '', email: '', programme: '', startDate: '', message: '' });
  };

  return (
    <section id="admissions" className="py-32 bg-rainbow-light relative overflow-hidden">
      {/* Playful background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-wing-yellow/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-wing-purple/20 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-wing-red/10 px-5 py-2 rounded-full mb-6">
            <Sparkles size={16} className="text-wing-red" />
            <span className="font-heading font-bold text-sm tracking-widest text-wing-red uppercase">
              Admissions
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl leading-tight font-display drop-shadow-sm">
            Begin Your Child's <br />
            <span className="rainbow-text">Journey With Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Admission Process Steps */}
          <div className="space-y-6 relative bg-white/60 backdrop-blur-md p-10 rounded-[3rem] border-2 border-white shadow-xl">
            <h3 className="text-2xl font-heading font-bold text-aquila-navy mb-8 flex items-center">
              Simple 5-Step Process
            </h3>
            <div className="absolute left-[3.25rem] top-[6rem] bottom-[4rem] w-1 bg-gray-200 rounded-full hidden sm:block"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-6 relative z-10 group">
                <div className={`w-12 h-12 rounded-full ${step.color} shadow-lg shrink-0 flex items-center justify-center border-4 border-white transform group-hover:scale-110 transition-transform`}>
                  <CheckCircle size={20} className="text-white" />
                </div>
                <div className="bg-white px-6 py-5 rounded-2xl shadow-sm border border-gray-100 flex-grow hover:shadow-md transition-shadow group-hover:-translate-y-1 duration-300">
                  <h3 className="font-heading font-bold text-lg">
                    <span className={`text-sm ${step.textColor} mr-2 bg-gray-50 px-3 py-1 rounded-full`}>Step {index + 1}</span> 
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Admission Form */}
          <div className="glass-panel border-t-8 border-t-wing-blue p-10 rounded-[3rem] shadow-2xl bg-white/90">
            <h3 className="text-3xl font-heading font-bold text-aquila-navy mb-2">Application Form</h3>
            <p className="text-text-muted mb-8">
              Enroll your child in a joyful learning journey where education meets care, creativity, and discovery. <br /><br />
              <span className="font-bold text-aquila-navy">Age criteria:</span> from 2.5 yrs to 4 yrs
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="childName" className="block font-heading font-bold text-aquila-navy mb-2 text-sm">Child's Name *</label>
                  <input type="text" id="childName" name="childName" value={formData.childName} onChange={handleChange} required aria-required="true"
                    className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 hover:border-wing-blue focus:border-wing-blue focus:ring-4 focus:ring-wing-blue/20 outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label htmlFor="dob" className="block font-heading font-bold text-aquila-navy mb-2 text-sm">Date of Birth *</label>
                  <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required aria-required="true"
                    className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 hover:border-wing-blue focus:border-wing-blue focus:ring-4 focus:ring-wing-blue/20 outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
              </div>

              <div>
                <label htmlFor="parentName" className="block font-heading font-bold text-aquila-navy mb-2 text-sm">Parent/Guardian Name *</label>
                <input type="text" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} required aria-required="true"
                  className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 hover:border-wing-green focus:border-wing-green focus:ring-4 focus:ring-wing-green/20 outline-none transition-all bg-gray-50 focus:bg-white" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="mobile" className="block font-heading font-bold text-aquila-navy mb-2 text-sm">Mobile Number *</label>
                  <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required aria-required="true"
                    className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 hover:border-wing-orange focus:border-wing-orange focus:ring-4 focus:ring-wing-orange/20 outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block font-heading font-bold text-aquila-navy mb-2 text-sm">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required aria-required="true"
                    className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 hover:border-wing-orange focus:border-wing-orange focus:ring-4 focus:ring-wing-orange/20 outline-none transition-all bg-gray-50 focus:bg-white" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block font-heading font-bold text-aquila-navy mb-2 text-sm">Message / Special Requirements</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="3"
                  className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 hover:border-wing-purple focus:border-wing-purple focus:ring-4 focus:ring-wing-purple/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"></textarea>
              </div>

              <button type="submit" className="btn-rainbow w-full py-4 text-xl shadow-xl mt-6 border-2 border-white hover:-translate-y-1 transition-transform">
                Submit Application 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
