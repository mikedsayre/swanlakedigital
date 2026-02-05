import React from 'react';
import { IMAGES } from '../constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-cyan-800/30 py-3 px-3 md:py-4 md:px-5 flex items-center justify-between">
      {/* Brand Logo & Name */}
      <a 
        href="#home" 
        className="flex items-center gap-2 text-cyan-300 font-orbitron text-base xs:text-lg md:text-2xl no-underline flex-shrink-0"
      >
        <img 
          src={IMAGES.SWAN_LAKE_FAVICON} 
          alt="Swan Lake Digital Logo" 
          className="w-6 h-6 md:w-8 md:h-8" 
        />
        <span className="whitespace-nowrap">
          Swan Lake<span className="hidden xs:inline"> Digital</span>
        </span>
      </a>

      {/* Navigation Links */}
      <div className="flex gap-2 xs:gap-3 md:gap-8 ml-2 overflow-x-auto no-scrollbar py-1">
        <a href="#home" className="text-cyan-300 hover:text-cyan-100 transition-colors text-[10px] xs:text-xs md:text-base no-underline whitespace-nowrap">Home</a>
        <a href="#about" className="text-cyan-300 hover:text-cyan-100 transition-colors text-[10px] xs:text-xs md:text-base no-underline whitespace-nowrap">About</a>
        <a href="#portfolio" className="text-cyan-300 hover:text-cyan-100 transition-colors text-[10px] xs:text-xs md:text-base no-underline whitespace-nowrap">Portfolio</a>
        <a href="#capabilities" className="text-cyan-300 hover:text-cyan-100 transition-colors text-[10px] xs:text-xs md:text-base no-underline whitespace-nowrap">Capabilities</a>
        <a href="#toolkit" className="text-cyan-300 hover:text-cyan-100 transition-colors text-[10px] xs:text-xs md:text-base no-underline whitespace-nowrap">Skills</a>
        <a href="#contact" className="text-cyan-300 hover:text-cyan-100 transition-colors text-[10px] xs:text-xs md:text-base no-underline whitespace-nowrap">Contact</a>
      </div>
    </nav>
  );
};
