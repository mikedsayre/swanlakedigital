import React from 'react';
import { IMAGES } from '../constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-dark/98 backdrop-blur-xl py-3 px-2 sm:px-4 md:px-10 border-b border-cyan-400/20 shadow-xl flex items-center justify-start md:justify-between gap-1 md:gap-5 transition-all duration-300 ease-in-out">
      <a href="#home" className="flex flex-col items-center justify-center flex-shrink-0"> {/* Modified to flex-col to stack image and text */}
        <img
          src={IMAGES.SWAN_LAKE_MASCOT_512}
          alt="Swan Lake Digital Logo - Home"
          className="h-10 sm:h-12 md:h-14 w-auto drop-shadow-cyan-strong" // Removed horizontal margin as content is now stacked
        />
        <span className="font-orbitron text-cyan-400 text-[0.6rem] leading-none tracking-tight uppercase text-shadow-cyan-light mt-0.5 md:mt-1 hidden sm:block">
          Swan Lake Digital
        </span>
      </a>
      <ul className="flex list-none p-0 m-0 gap-0 flex-grow justify-evenly md:justify-end md:gap-10">
        <li>
          <a href="#home" className="group flex flex-col md:flex-row items-center gap-0 md:gap-2 text-blue-50 no-underline font-semibold transition-all duration-300 relative text-shadow-cyan-light whitespace-nowrap py-1 px-0.5 md:py-0 md:px-0">
            <i className="fa-solid fa-house-chimney text-lg sm:text-xl md:text-2xl text-cyan-400 drop-shadow-cyan-glow-light transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_25px_#00ffff]"></i>
            <span className="nav-text visible opacity-100 w-auto text-xs sm:text-sm md:invisible md:opacity-0 md:w-0 overflow-hidden transition-all duration-300 ease-in-out font-poppins text-shadow-cyan-light whitespace-nowrap group-hover:md:visible group-hover:md:opacity-100 group-hover:md:w-auto">
              Home
            </span>
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-400 group-hover:w-full hidden md:block"></span>
          </a>
        </li>
        <li>
          <a href="#about" className="group flex flex-col md:flex-row items-center gap-0 md:gap-2 text-blue-50 no-underline font-semibold transition-all duration-300 relative text-shadow-cyan-light whitespace-nowrap py-1 px-0.5 md:py-0 md:px-0">
            <i className="fa-solid fa-user-tie text-lg sm:text-xl md:text-2xl text-cyan-400 drop-shadow-cyan-glow-light transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_25px_#00ffff]"></i>
            <span className="nav-text visible opacity-100 w-auto text-xs sm:text-sm md:invisible md:opacity-0 md:w-0 overflow-hidden transition-all duration-300 ease-in-out font-poppins text-shadow-cyan-light whitespace-nowrap group-hover:md:visible group-hover:md:opacity-100 group-hover:md:w-auto">
              About
            </span>
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-400 group-hover:w-full hidden md:block"></span>
          </a>
        </li>
        <li>
          <a href="#portfolio" className="group flex flex-col md:flex-row items-center gap-0 md:gap-2 text-blue-50 no-underline font-semibold transition-all duration-300 relative text-shadow-cyan-light whitespace-nowrap py-1 px-0.5 md:py-0 md:px-0">
            <i className="fa-solid fa-laptop-code text-lg sm:text-xl md:text-2xl text-cyan-400 drop-shadow-cyan-glow-light transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_25px_#00ffff]"></i>
            <span className="nav-text visible opacity-100 w-auto text-xs sm:text-sm md:invisible md:opacity-0 md:w-0 overflow-hidden transition-all duration-300 ease-in-out font-poppins text-shadow-cyan-light whitespace-nowrap group-hover:md:visible group-hover:md:opacity-100 group-hover:md:w-auto">
              Portfolio
            </span>
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-400 group-hover:w-full hidden md:block"></span>
          </a>
        </li>
        <li>
          <a href="#capabilities" className="group flex flex-col md:flex-row items-center gap-0 md:gap-2 text-blue-50 no-underline font-semibold transition-all duration-300 relative text-shadow-cyan-light whitespace-nowrap py-1 px-0.5 md:py-0 md:px-0">
            <i className="fa-solid fa-gears text-lg sm:text-xl md:text-2xl text-cyan-400 drop-shadow-cyan-glow-light transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_25px_#00ffff]"></i>
            <span className="nav-text visible opacity-100 w-auto text-xs sm:text-sm md:invisible md:opacity-0 md:w-0 overflow-hidden transition-all duration-300 ease-in-out font-poppins text-shadow-cyan-light whitespace-nowrap group-hover:md:visible group-hover:md:opacity-100 group-hover:md:w-auto">
              Capabilities
            </span>
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-400 group-hover:w-full hidden md:block"></span>
          </a>
        </li>
        <li>
          <a href="#skills" className="group flex flex-col md:flex-row items-center gap-0 md:gap-2 text-blue-50 no-underline font-semibold transition-all duration-300 relative text-shadow-cyan-light whitespace-nowrap py-1 px-0.5 md:py-0 md:px-0">
            <i className="fa-solid fa-flask text-lg sm:text-xl md:text-2xl text-cyan-400 drop-shadow-cyan-glow-light transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_25px_#00ffff]"></i>
            <span className="nav-text visible opacity-100 w-auto text-xs sm:text-sm md:invisible md:opacity-0 md:w-0 overflow-hidden transition-all duration-300 ease-in-out font-poppins text-shadow-cyan-light whitespace-nowrap group-hover:md:visible group-hover:md:opacity-100 group-hover:md:w-auto">
              Skills
            </span>
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-400 group-hover:w-full hidden md:block"></span>
          </a>
        </li>
        <li>
          <a href="#contact" className="group flex flex-col md:flex-row items-center gap-0 md:gap-2 text-blue-50 no-underline font-semibold transition-all duration-300 relative text-shadow-cyan-light whitespace-nowrap py-1 px-0.5 md:py-0 md:px-0">
            <i className="fa-solid fa-address-card text-lg sm:text-xl md:text-2xl text-cyan-400 drop-shadow-cyan-glow-light transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_25px_#00ffff]"></i>
            <span className="nav-text visible opacity-100 w-auto text-xs sm:text-sm md:invisible md:opacity-0 md:w-0 overflow-hidden transition-all duration-300 ease-in-out font-poppins text-shadow-cyan-light whitespace-nowrap group-hover:md:visible group-hover:md:opacity-100 group-hover:md:w-auto">
              Contact
            </span>
            <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-400 group-hover:w-full hidden md:block"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};