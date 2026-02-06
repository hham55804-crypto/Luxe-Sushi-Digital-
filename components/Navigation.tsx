import React from 'react';
import { MENU_DATA } from '../data';

export const Navigation: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-4xl mx-auto overflow-x-auto no-scrollbar py-4 px-4">
        <div className="flex space-x-6 whitespace-nowrap">
          {MENU_DATA.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className="text-sm font-medium tracking-wider text-neutral-400 hover:text-gold-400 transition-colors uppercase font-sans"
            >
              {section.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};