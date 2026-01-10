import React from 'react';

interface SkillListItemProps {
  icon: string;
}

export const SkillListItem: React.FC<SkillListItemProps> = ({ icon, children }) => {
  return (
    <li className="flex items-start gap-3 text-base md:text-lg text-shadow">
      <i className={`${icon} text-cyan-300 text-xl flex-shrink-0 mt-1`}></i>
      {children}
    </li>
  );
};
