import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/aquila-logo.png';
import TermsModal from './TermsModal';

const FacebookIcon = ({ size = 20, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer className="bg-[#0D1B4B] text-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <img src={logo} alt="Aquila Montessori Logo" className="h-[110px] w-auto mb-4 object-contain" />
            <h3 className="font-heading font-bold text-xl mb-2 text-white">Aquila Montessori Pre-School</h3>
            <p className="font-heading font-bold text-sm tracking-widest text-wing-orange uppercase mb-4">
              Where Every Child Learns Their Way
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Nurturing young minds in Sithalapakkam, Chennai through authentic Montessori education since our founding.
            </p>
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/share/1GbXhNN15k/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-wing-blue hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
              <a 
                href="https://www.instagram.com/aquilamontessoripreschool?utm_source=qr&igsh=MXE0cDNyMXI5MG42aw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-wing-orange hover:text-white transition-all duration-300 transform hover:scale-110 shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Admissions', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    duration={500} 
                    offset={-80}
                    className="text-white/70 hover:text-white cursor-pointer transition-colors hover:rainbow-text inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsTermsOpen(true)}
                  className="text-white/70 hover:text-white cursor-pointer transition-colors hover:rainbow-text inline-block text-left"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Contact Us</h4>
            <div className="space-y-4 text-sm text-white/70">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                <span>
                  <a 
                    href="https://www.google.com/maps/place/AQUILA+MONTESSORI+PRE-SCHOOL/@12.8932059,80.1796102,17z/data=!3m1!4b1!4m6!3m5!1s0x3a52592133336bf1:0xf1d7c6027bb1bcc5!8m2!3d12.8932059!4d80.1821851" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-wing-orange transition-colors cursor-pointer"
                  >
                    AQUILA MONTESSORI PRE-SCHOOL,<br />
                    1351, Ground, HIG TNHB, Plot No, Road,<br />
                    TNHB Colony Road, Sithalapakkam,<br />
                    Chennai, Tamil Nadu 600126
                  </a>
                </span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">📞</span>
                <span>
                  <a href="tel:+917200083468" className="hover:text-white transition-colors">+91 72000 83468</a> <br />
                  <a href="tel:+917200083155" className="hover:text-white transition-colors">+91 72000 83155</a>
                </span>
              </p>
              <p className="flex items-start">
                <span className="mr-2">📧</span>
                <a href="mailto:Aquilamontessoripreschool@gmail.com" className="hover:text-white transition-colors break-all">
                  Aquilamontessoripreschool@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full mb-6" style={{ background: 'linear-gradient(90deg, #4CAF50, #2196F3, #FF9800, #FFC107, #9C27B0, #F44336)' }}></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/50 text-center md:text-left space-y-2 md:space-y-0">
          <p>© 2025 Aquila Montessori Pre-School. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="hidden md:inline">|</span>
            <p>Designed with ❤️ for early learners.</p>
          </div>
        </div>
      </div>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
}
