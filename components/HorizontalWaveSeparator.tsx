
import React from 'react';

export const HorizontalWaveSeparator: React.FC = () => {
  return (
    <div
      className="w-1/2 md:w-1/3 mx-auto h-[1px] my-10 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent shadow-[0_0_20px_rgba(0,255,255,0.2)]"
      role="separator"
      aria-orientation="horizontal"
    ></div>
  );
};