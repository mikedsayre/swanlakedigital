import React from 'react';

interface SkillListItemProps {
  icon: string;
  title: string;
  description: string;
}

export const SkillListItem: React.FC<SkillListItemProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-cyan-400/5 p-5 sm:p-6 rounded-xl border border-cyan-400/20 transition-all duration-400 flex flex-col items-center gap-4 sm:gap-5 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:-translate-y-1">
      <i className={`${icon} text-xl sm:text-2xl md:text-3xl text-cyan-400 drop-shadow-cyan-glow-medium flex-shrink-0 mt-1`}></i>
      <div className="text-center">
        <strong className="block text-cyan-400 font-orbitron text-lg sm:text-xl md:text-2xl text-shadow-cyan-subheading mb-1">
          {title}
        </strong>
        <p className="text-xs sm:text-sm leading-relaxed opacity-80 text-shadow">
          {description}
        </p>
      </div>
    </div>
  );
};