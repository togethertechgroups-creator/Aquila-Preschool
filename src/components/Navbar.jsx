import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sparkles, Home, Info, Image as ImageIcon, GraduationCap, Star, Phone } from 'lucide-react';
import gsap from 'gsap';
import logo from '../assets/aquila-logo.png';

const PandaIcon = ({ size, className }) => (
  <span className={className} style={{ fontSize: size, lineHeight: 1 }}>🐼</span>
);

const navLinks = [
  { name: 'Home', to: 'home', icon: Home, color: 'text-wing-green' },
  { name: 'About', to: 'about', icon: Info, color: 'text-wing-blue' },
  { name: 'Gallery', to: 'gallery', icon: ImageIcon, color: 'text-wing-orange' },
  { name: 'Banda', to: 'banda-activity', icon: PandaIcon, color: 'text-wing-red' },
  { name: 'Admissions', to: 'admissions', icon: GraduationCap, color: 'text-wing-purple' },
  { name: 'Reviews', to: 'reviews', icon: Star, color: 'text-wing-yellow' },
  { name: 'Contact', to: 'contact', icon: Phone, color: 'text-aquila-navy' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.fromTo(
        ['.floating-logo-badge', '.floating-nav-pill', '.floating-mobile-toggle'],
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Floating Logo Badge (Left) */}
      <div 
        className={`floating-logo-badge fixed z-50 transition-all duration-300 ${
          isScrolled 
            ? 'top-3 left-4 md:left-8 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-2 md:p-3' 
            : 'top-4 left-4 md:left-8 bg-white/5 backdrop-blur-sm border border-white/5 rounded-2xl p-3 md:p-4'
        }`}
      >
        <Link to="home" smooth={true} duration={500} offset={-80} className="flex items-center cursor-pointer">
          <img 
            src={logo} 
            alt="Aquila Montessori Logo" 
            className="h-24 md:h-32 w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-sm" 
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150x50?text=AQUILA'; }} 
          />
        </Link>
      </div>

      {/* Floating Navigation Pill (Center) */}
      <div 
        className={`floating-nav-pill fixed z-50 left-1/2 transform -translate-x-1/2 transition-all duration-300 hidden md:flex items-center shadow-lg border border-white/40 ${
          isScrolled 
            ? 'top-3 bg-white/90 backdrop-blur-xl rounded-full px-5 py-2' 
            : 'top-4 bg-white/80 backdrop-blur-lg rounded-full px-6 py-2.5'
        }`}
      >
        {/* Nav Links */}
        <ul className="flex items-center space-x-6 mr-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass={`active font-bold scale-110 ${link.color}`}
                  className={`cursor-pointer flex items-center text-text-muted hover:${link.color} font-heading font-semibold text-[15px] transition-all duration-300 pb-0.5 border-b-2 border-transparent hover:border-current group`}
                >
                  <Icon size={14} className={`mr-1.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 ${link.color}`} />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Join CTA */}
        <Link to="admissions" smooth={true} duration={500} offset={-80} className="whitespace-nowrap">
          <button className="btn-rainbow shadow-md shadow-wing-orange/20 border border-white text-sm py-1.5 px-4 rounded-full font-semibold hover-wiggle whitespace-nowrap">
            Join the Fun! <Sparkles size={13} className="inline ml-0.5" />
          </button>
        </Link>
      </div>

      {/* Floating Mobile Toggle (Right) */}
      <div 
        className={`floating-mobile-toggle fixed z-50 md:hidden transition-all duration-300 ${
          isScrolled ? 'top-3 right-4' : 'top-4 right-4'
        }`}
      >
        <button 
          onClick={toggleMenu} 
          className="bg-white/80 backdrop-blur-md border border-white/40 shadow-md p-2.5 rounded-2xl text-aquila-navy focus:outline-none transition-all active:scale-95 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} className="text-wing-red" /> : <Menu size={26} className="text-wing-blue" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/40 p-6 flex flex-col items-center space-y-4 md:hidden transition-all duration-300 transform origin-top shadow-2xl z-40 ${
          isOpen 
            ? 'top-24 scale-y-100 opacity-100 visible' 
            : 'top-24 scale-y-0 opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 w-full">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name} className="w-full text-center">
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                  activeClass={`font-bold text-xl ${link.color}`}
                  className={`cursor-pointer flex justify-center items-center text-text-muted hover:${link.color} font-heading font-semibold text-lg py-2 transition-colors`}
                >
                  <Icon size={18} className={`mr-2 ${link.color}`} />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="admissions" smooth={true} duration={500} offset={-80} onClick={closeMenu} className="w-full">
          <button className="btn-rainbow w-full mt-2 text-md py-2.5 border-2 border-white shadow-xl hover-wiggle">
            Join the Fun! <Sparkles size={18} className="inline ml-1" />
          </button>
        </Link>
      </div>
    </>
  );
}
