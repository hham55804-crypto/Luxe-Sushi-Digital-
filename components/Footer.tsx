import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 pt-16 pb-12 px-6 border-t border-white/5 mt-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="mb-8">
            <span className="text-2xl font-serif text-gold-500 tracking-widest">SUSHI BRAND</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            <div className="flex flex-col items-center">
                <h4 className="text-white font-serif tracking-widest mb-4">LOCATION</h4>
                <p className="text-neutral-500 text-sm">123 Culinary Avenue</p>
                <p className="text-neutral-500 text-sm">Metropolis District</p>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="text-white font-serif tracking-widest mb-4">HOURS</h4>
                <p className="text-neutral-500 text-sm">Mon-Sun: 12:00 - 23:00</p>
                <p className="text-neutral-500 text-sm">Happy Hour: 17:00 - 19:00</p>
            </div>
            <div className="flex flex-col items-center">
                <h4 className="text-white font-serif tracking-widest mb-4">CONTACT</h4>
                <p className="text-neutral-500 text-sm">+212 6 00 00 00 00</p>
                <p className="text-neutral-500 text-sm">info@sushibrand.com</p>
            </div>
        </div>

        <div className="text-neutral-700 text-xs tracking-wider uppercase">
          © {new Date().getFullYear()} Sushi Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};