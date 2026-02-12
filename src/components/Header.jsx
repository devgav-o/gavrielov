import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Header = ({ language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    he: {
      brand: 'גבריאלוב ברברשופ',
      nav: ['בית', 'אודות', 'שירותים', 'גלריה', 'ליצור קשר'],
      langButton: 'EN'
    },
    en: {
      brand: 'Gavrielov Barbershop',
      nav: ['Home', 'About', 'Services', 'Gallery', 'Contact'],
      langButton: 'HE'
    }
  };

  const t = content[language];

  const scrollToSection = (index) => {
    const sections = ['hero', 'about', 'services', 'gallery', 'contact'];
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl lg:text-2xl font-bold text-white hover:text-[#C6A75E] transition-smooth"
            style={{ fontFamily: "'Playfair Display', 'Heebo', serif" }}
          >
            {t.brand}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {t.nav.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className="relative text-white hover:text-[#C6A75E] transition-smooth font-medium group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A75E] group-hover:w-full transition-all duration-500"></span>
              </button>
            ))}
          </nav>

          {/* Right Side - Instagram + Language Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.instagram.com/gavrielov_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#C6A75E] transition-smooth"
            >
              <Instagram size={24} />
            </a>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 border-2 border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black transition-smooth font-semibold"
            >
              {t.langButton}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#C6A75E] transition-smooth"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/98 backdrop-blur-md absolute top-20 left-0 right-0 border-t border-[#C6A75E]/30">
            <nav className="flex flex-col p-6 gap-4">
              {t.nav.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className="text-left text-white hover:text-[#C6A75E] transition-smooth font-medium py-2 border-b border-gray-800"
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://www.instagram.com/gavrielov_barbershop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#C6A75E] transition-smooth"
                >
                  <Instagram size={24} />
                </a>
                <button
                  onClick={toggleLanguage}
                  className="px-4 py-2 border-2 border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black transition-smooth font-semibold"
                >
                  {t.langButton}
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
