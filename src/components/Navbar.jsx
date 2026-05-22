import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sparkles, Home, Info, Image as ImageIcon, GraduationCap, Star, Phone, BookOpen, FileText } from 'lucide-react';
import gsap from 'gsap';
import logo from '../assets/aquila-logo.png';

const PandaIcon = ({ size, className }) => (
  <span className={className} style={{ fontSize: size, lineHeight: 1 }}>🐼</span>
);

const navLinks = [
  { name: 'Home', to: 'home', icon: Home, color: 'text-wing-green' },
  { name: 'About', to: 'about', icon: Info, color: 'text-wing-blue' },
  { name: 'Teacher Training', to: 'teacher-training', icon: BookOpen, color: 'text-wing-green' },
  { name: 'Banda Activity', to: 'banda-activity', icon: PandaIcon, color: 'text-wing-red' },
  { name: 'Gallery', to: 'gallery', icon: ImageIcon, color: 'text-wing-orange' },
  { name: 'Reviews', to: 'reviews', icon: Star, color: 'text-wing-yellow' },
  { name: 'Blog', to: 'blog', icon: FileText, color: 'text-wing-blue' },
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
        '.navbar',
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'elastic.out(1, 0.5)', clearProps: 'all' }
      );
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`navbar fixed z-50 transition-all duration-300 flex justify-end 2xl:justify-center items-center pointer-events-none ${isScrolled
          ? 'top-6 left-0 right-0 mx-auto w-full px-4 md:px-8'
          : 'top-10 left-0 right-0 mx-auto w-full px-4 md:px-8'
        }`}
    >
      {/* Decorative Sparkles for Children when Scrolled */}
      {isScrolled && (
        <div className="absolute -top-4 -left-4 animate-float-kid text-wing-orange hidden md:block">
          <Sparkles size={28} className="fill-wing-orange" />
        </div>
      )}
      {isScrolled && (
        <div className="absolute -bottom-4 -right-4 animate-float-kid text-wing-blue hidden md:block" style={{ animationDelay: '1s' }}>
          <Sparkles size={28} className="fill-wing-blue" />
        </div>
      )}

      <div className={`fixed left-0 top-2 md:left-2 md:-top-6 flex items-center cursor-pointer group pointer-events-auto z-50 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Link to="home" smooth={true} duration={500} offset={-80} className="relative block">
          <img
            src={logo}
            alt="Aquila Montessori Logo"
            className="h-[190px] lg:h-[200px] xl:h-[230px] max-w-none object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/150x50?text=AQUILA'; }}
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className={`hidden lg:flex items-center space-x-4 xl:space-x-6 pointer-events-auto transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-xl border-2 border-wing-yellow/30 rounded-[3rem] px-4 xl:px-6 py-2' : 'bg-white/80 backdrop-blur-md shadow-lg border border-white/40 rounded-3xl px-4 xl:px-6 py-3'}`}>
        <ul className="flex space-x-4 xl:space-x-6 items-center">
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
                  className={`cursor-pointer flex items-center text-text-muted hover:${link.color} font-heading font-semibold text-lg transition-all duration-300 ${link.name !== 'Contact' ? 'rainbow-border-bottom' : ''} pb-1 group`}
                >
                  <Icon size={16} className={`mr-1.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 ${link.color}`} />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="admissions" smooth={true} duration={500} offset={-80}>
          <button className="btn-rainbow animate-float-kid shadow-lg shadow-wing-orange/20 border-2 border-white hover-wiggle">
            Join the Fun! <Sparkles size={16} className="inline ml-1" />
          </button>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden absolute right-4 flex items-center pointer-events-auto bg-white/90 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-white/40">
        <button onClick={toggleMenu} className="text-aquila-navy focus:outline-none transition-transform active:scale-95">
          {isOpen ? <X size={28} className="text-wing-red" /> : <Menu size={28} className="text-wing-blue" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`absolute top-full left-0 right-0 mx-4 mt-4 bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-wing-yellow/30 p-6 flex flex-col items-center space-y-4 lg:hidden transition-all duration-300 transform origin-top shadow-2xl pointer-events-auto ${isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
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
                  className={`cursor-pointer flex justify-center items-center text-text-muted hover:${link.color} font-heading font-semibold text-lg block py-2 transition-colors`}
                >
                  <Icon size={20} className={`mr-2 ${link.color}`} />
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="admissions" smooth={true} duration={500} offset={-80} onClick={closeMenu} className="w-full">
          <button className="btn-rainbow w-full mt-4 text-lg border-2 border-white shadow-xl hover-wiggle">Join the Fun! <Sparkles size={20} className="inline ml-1" /></button>
        </Link>
      </div>
    </nav>
  );
}
