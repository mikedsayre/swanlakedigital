import React from 'react';
import { IMAGES } from '../constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-cyan-800/30 py-4 px-5 flex items-center justify-between">
      <a href="#home" className="flex items-center gap-3 text-cyan-300 font-orbitron text-xl md:text-2xl no-underline">
        <img src={IMAGES.SWAN_LAKE_FAVICON} alt="Swan Lake Digital Logo" className="w-8 h-8" />
        Swan Lake Digital
      </a>
      <div className="flex gap-4 md:gap-8">
        <a href="#home" className="text-cyan-300 hover:text-cyan-100 transition-colors text-sm md:text-base no-underline">Home</a>
        <a href="#about" className="text-cyan-300 hover:text-cyan-100 transition-colors text-sm md:text-base no-underline">About</a>
        <a href="#portfolio" className="text-cyan-300 hover:text-cyan-100 transition-colors text-sm md:text-base no-underline">Portfolio</a>
        <a href="#capabilities" className="text-cyan-300 hover:text-cyan-100 transition-colors text-sm md:text-base no-underline">Capabilities</a>
        <a href="#toolkit" className="text-cyan-300 hover:text-cyan-100 transition-colors text-sm md:text-base no-underline">Skills</a>
        <a href="#contact" className="text-cyan-300 hover:text-cyan-100 transition-colors text-sm md:text-base no-underline">Contact</a>
      </div>
    </nav>
  );
};
