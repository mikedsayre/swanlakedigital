import React from 'react';

export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 md:mb-20 bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent text-shadow-cyan-title leading-[1.5] lg:leading-[1.5]">
    {children}
  </h2>
);
