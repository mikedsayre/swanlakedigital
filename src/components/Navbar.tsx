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
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-md border-b border-cyan-800/30">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Brand Logo - Always Visible */}
        <a href="#home" className="flex items-center gap-3 text-cyan-300 font-orbitron text-lg md:text-2xl no-underline z-[120] relative">
          <img src={IMAGES.SWAN_LAKE_FAVICON} alt="Logo" className="w-8 h-8 md:w-9 md:h-9" />
          <span className="whitespace-nowrap text-shadow-cyan">Swan Lake Digital</span>
        </a>

        {/* Desktop Navigation - Hidden on Mobile */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-cyan-300 hover:text-white hover:shadow-[0_0_10px_#00f0f0] transition-all duration-300 text-base no-underline font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button (Hamburger / X) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-cyan-300 p-2 z-[120] relative focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="w-7 h-6 flex flex-col justify-between">
            <span 
              className={`w-full h-0.5 bg-cyan-300 shadow-[0_0_5px_#00f0f0] rounded-full transition-all duration-300 ease-in-out origin-left ${
                isOpen ? 'rotate-45 -translate-y-0.5' : ''
              }`} 
            />
            <span 
              className={`w-full h-0.5 bg-cyan-300 shadow-[0_0_5px_#00f0f0] rounded-full transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`} 
            />
            <span 
              className={`w-full h-0.5 bg-cyan-300 shadow-[0_0_5px_#00f0f0] rounded-full transition-all duration-300 ease-in-out origin-left ${
                isOpen ? '-rotate-45 translate-y-0.5' : ''
              }`} 
            />
          </div>
        </button>

        {/* Mobile Menu Overlay - SOLID BACKGROUND FIXED */}
        <div
          className={`fixed inset-0 bg-black z-[110] flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-cyan-300 text-3xl font-orbitron font-bold tracking-wider hover:text-white hover:scale-110 transition-all duration-300 no-underline drop-shadow-[0_0_10px_rgba(0,240,240,0.5)]"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
