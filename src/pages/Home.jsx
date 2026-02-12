import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  const [language, setLanguage] = useState('he');

  useEffect(() => {
    document.body.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'he' ? 'en' : 'he');
  };

  return (
    <div>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <Gallery language={language} />
      <Reviews language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Home;
