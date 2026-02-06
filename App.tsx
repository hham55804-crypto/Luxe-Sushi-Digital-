import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { MenuSection } from './components/MenuSection';
import { Footer } from './components/Footer';
import { MENU_DATA } from './data';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gold-500 selection:text-black">
      {/* Hero Section */}
      <Header />

      {/* Sticky Navigation */}
      <Navigation />

      {/* Menu Content */}
      <main className="relative z-0">
        <div className="max-w-4xl mx-auto px-4 pt-12">
            <p className="text-center text-neutral-500 italic font-serif mb-12">
                "Experience the art of Japanese culinary excellence in every bite."
            </p>
        </div>

        {MENU_DATA.map((section) => (
          <MenuSection key={section.id} data={section} />
        ))}
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 bg-gold-500 text-black p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-white ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;