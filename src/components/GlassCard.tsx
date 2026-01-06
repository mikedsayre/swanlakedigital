import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`group bg-dark/60 backdrop-blur-3xl rounded-2xl p-6 sm:p-8 md:p-10 my-6 md:my-8 border border-cyan-400/30 shadow-xl transition-all duration-500 ease-in-out relative overflow-hidden pointer-events-auto
      before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-br before:from-cyan-400/8 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 before:pointer-events-none
      group-hover:before:opacity-100 group-hover:-translate-y-4 group-hover:shadow-[0_20px_60px_rgba(0,255,255,0.4)] ${className}`}
    >
      {children}
    </div>
  );
};