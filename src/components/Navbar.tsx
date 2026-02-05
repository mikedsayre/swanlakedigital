import React from 'react';
import { IMAGES } from '../constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-cyan-800/30 py-4 px-3 md:px-5 flex items-center justify-between">
      <a href="#home" className="flex items-center gap-2 md:gap-3 text-cyan-300 font-orbitron text-lg md:text-2xl no-underline shrink-0">
        <img src={IMAGES.SWAN_LAKE_FAVICON} alt="Swan Lake Digital Logo" className="w-6 h-6 md:w-8 md:h-8" />
        <span className="leading-none">
          Swan Lake <span className="hidden sm:inline">Digital</span>
        </span>
      </a>
      
      {/* Scrollable container for links on mobile to prevent breaking the layout */}
      <div className="flex gap-3 md:gap-8 overflow-x-auto no-scrollbar ml-4">
        <a href="#home" className="text-cyan-300 hover:text-cyan-100 transition-colors text-xs md:text-base no-underline whitespace-nowrap">Home</a>
        <a href="#about" className="text-cyan-300 hover:text-cyan-100 transition-colors text-xs md:text-base no-underline whitespace-nowrap">About</a>
        <a href="#portfolio" className="text-cyan-300 hover:text-cyan-100 transition-colors text-xs md:text-base no-underline whitespace-nowrap">Portfolio</a>
        <a href="#capabilities" className="text-cyan-300 hover:text-cyan-100 transition-colors text-xs md:text-base no-underline whitespace-nowrap">Capabilities</a>
        <a href="#toolkit" className="text-cyan-300 hover:text-cyan-100 transition-colors text-xs md:text-base no-underline whitespace-nowrap">Skills</a>
        <a href="#contact" className="text-cyan-300 hover:text-cyan-100 transition-colors text-xs md:text-base no-underline whitespace-nowrap">Contact</a>
      </div>
    </nav>
  );
};
