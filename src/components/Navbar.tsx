import React, { useState } from 'react';
import { IMAGES } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Skills', href: '#toolkit' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/60 backdrop-blur-lg border-b border-cyan-800/30">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand - Scaled down slightly for mobile to ensure fit */}
        <a href="#home" className="flex items-center gap-2 text-cyan-300 font-orbitron text-lg xs:text-xl md:text-2xl no-underline z-[110]">
          <img src={IMAGES.SWAN_LAKE_FAVICON} alt="Logo" className="w-7 h-7 md:w-8 md:h-8" />
          <span className="whitespace-nowrap">Swan Lake Digital</span>
        </a>

        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-cyan-300 hover:text-cyan-100 transition-colors text-base no-underline"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-cyan-300 p-2 z-[110] focus:outline-none"
          aria-label="Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-cyan-300 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-cyan-300 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-cyan-300 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-cyan-300 text-2xl font-orbitron hover:text-cyan-100 no-underline tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
