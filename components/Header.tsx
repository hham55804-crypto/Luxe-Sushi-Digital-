import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-neutral-900">
      {/* Background Image / Texture with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full opacity-40 bg-[url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in-up">
        <div className="mb-4">
             {/* Logo Placeholder */}
            <div className="w-24 h-24 mx-auto border-2 border-gold-500 rounded-full flex items-center justify-center mb-6 bg-black/50 backdrop-blur-sm">
                <span className="text-4xl font-serif text-gold-500">S</span>
            </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest uppercase mb-2">
          Sushi Brand
        </h1>
        <p className="text-gold-400 font-sans tracking-[0.2em] text-sm md:text-base uppercase mb-8">
          Premium Japanese Cuisine
        </p>
        
        <div className="flex justify-center space-x-2">
            <div className="h-px w-12 bg-gold-500/50 self-center"></div>
            <span className="text-white/60 text-xs tracking-widest uppercase">Est. 2024</span>
            <div className="h-px w-12 bg-gold-500/50 self-center"></div>
        </div>
      </div>
    </header>
  );
};