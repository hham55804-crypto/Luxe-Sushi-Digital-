import React from 'react';
import { MenuSection as MenuSectionType, MenuItem } from '../types';

interface MenuSectionProps {
  data: MenuSectionType;
}

const StandardItem: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="flex flex-col mb-6 group">
    <div className="flex justify-between items-baseline w-full">
      <h3 className="text-lg font-serif font-medium text-white group-hover:text-gold-400 transition-colors">
        {item.name}
      </h3>
      {item.price && (
        <span className="ml-4 text-gold-400 font-sans font-semibold text-sm whitespace-nowrap">
          {item.price}
        </span>
      )}
    </div>
    {item.description && (
      <p className="text-sm text-neutral-500 font-sans mt-1 leading-relaxed max-w-[90%]">
        {item.description}
      </p>
    )}
    <div className="w-full h-px bg-neutral-900 mt-4 group-last:hidden" />
  </div>
);

const GridItem: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="bg-neutral-900/50 p-4 rounded border border-white/5 hover:border-gold-500/30 transition-colors flex flex-col items-center text-center">
    <h3 className="text-base font-serif font-medium text-white mb-2">
      {item.name}
    </h3>
    {item.price && (
      <span className="text-gold-400 font-sans font-semibold text-sm">
        {item.price}
      </span>
    )}
  </div>
);

const SimpleItem: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="bg-neutral-900/30 px-4 py-2 rounded-full border border-white/5 text-sm text-neutral-300 font-sans text-center">
    {item.name}
  </div>
);

const CardItem: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="aspect-[4/3] bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center border border-gold-500/20 rounded shadow-lg">
    <h3 className="text-xl font-serif text-gold-400">
      {item.name}
    </h3>
  </div>
);

export const MenuSection: React.FC<MenuSectionProps> = ({ data }) => {
  return (
    <section id={data.id} className="py-10 px-6 max-w-4xl mx-auto scroll-mt-24">
      <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white tracking-widest uppercase border-b-2 border-gold-500 pb-2 mb-2">
          {data.title}
        </h2>
        {data.subtitle && (
          <span className="text-gold-500/80 font-sans text-sm tracking-widest uppercase">
            {data.subtitle}
          </span>
        )}
      </div>

      <div className="mt-6">
        {data.type === 'standard' && (
          <div className="flex flex-col">
            {data.items.map((item) => (
              <StandardItem key={item.id} item={item} />
            ))}
          </div>
        )}

        {data.type === 'grid' && (
          <div className="grid grid-cols-2 gap-4">
            {data.items.map((item) => (
              <GridItem key={item.id} item={item} />
            ))}
          </div>
        )}

        {data.type === 'simple' && (
          <div className="flex flex-wrap justify-center gap-3">
            {data.items.map((item) => (
              <SimpleItem key={item.id} item={item} />
            ))}
          </div>
        )}

        {data.type === 'cards' && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.items.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};