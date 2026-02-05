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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-800/30">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 text-cyan-300 font-orbitron text-xl md:text-2xl no-underline z-50">
          <img src={IMAGES.SWAN_LAKE_FAVICON} alt="Swan Lake Digital Logo" className="w-8 h-8" />
          <span>Swan Lake Digital</span>
        </a>

        {/* Desktop Menu */}
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

        {/* Hamburger Toggle (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-cyan-300 focus:outline-none z-50"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-cyan-300 text-2xl font-orbitron hover:text-cyan-100 no-underline"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
