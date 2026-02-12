import React from 'react';
import { Instagram, ArrowDown } from 'lucide-react';

const Hero = ({ language }) => {
  const content = {
    he: {
      headline: 'הסטייל שלך מתחיל כאן',
      subheadline: 'חוויית ברבר פרימיום בבית שמש',
      primaryCTA: 'לקביעת תור',
      secondaryCTA: 'צפה בעבודות'
    },
    en: {
      headline: 'Your Style Starts Here',
      subheadline: 'Premium Barbering Experience in Beit Shemesh',
      primaryCTA: 'Book Appointment',
      secondaryCTA: 'View Gallery'
    }
  };

  const t = content[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBooking = () => {
    window.open('https://wa.me/972543181489', '_blank');
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1702865262133-c10351acc1ca"
          alt="Gavrielov Barbershop Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Gold Accent Line */}
      <div className="absolute top-1/2 left-0 w-20 h-0.5 bg-[#C6A75E] z-10"></div>
      <div className="absolute top-1/2 right-0 w-20 h-0.5 bg-[#C6A75E] z-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="hero-large mb-6 animate-fade-in">
          {t.headline}
        </h1>
        <div className="w-24 h-0.5 bg-[#C6A75E] mx-auto mb-6"></div>
        <p className="text-[#f6f5e8] text-xl lg:text-2xl mb-12 font-light">
          {t.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={handleBooking}
            className="btn-primary-filled"
          >
            {t.primaryCTA}
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="btn-primary"
          >
            {t.secondaryCTA}
          </button>
        </div>

        {/* Instagram Icon */}
        <div className="mt-12">
          <a
            href="https://www.instagram.com/gavrielov_barbershop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C6A75E] hover:text-white transition-smooth"
          >
            <Instagram size={28} />
            <span className="text-sm">@gavrielov_barbershop</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white hover:text-[#C6A75E] transition-smooth animate-bounce cursor-pointer"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
