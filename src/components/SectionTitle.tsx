import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-10 md:mb-20 bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent text-shadow-cyan-title">
      {children}
    </h2>
  );
};