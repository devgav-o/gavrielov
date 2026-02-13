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
            nav: ['בית', 'אודות', 'שירותים', 'גלריה', 'צור קשר'],
            langButton: 'EN',
        },
        en: {
            brand: 'Gavrielov Barbershop',
            nav: ['Home', 'About', 'Services', 'Gallery', 'Contact'],
            langButton: 'HE',
        },
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
                isScrolled
                    ? 'bg-black/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className='mx-auto px-6 lg:px-12 max-w-7xl'>
                <div className='flex justify-between items-center h-20'>
                    {/* Logo */}
                    <a
                        href='#hero'
                        className='flex items-center gap-2 font-bold text-white hover:text-[#C6A75E] text-xl lg:text-2xl transition-smooth cursor-pointer'
                        style={{
                            fontFamily: "'Playfair Display', 'Heebo', serif",
                        }}
                    >
                        <img src='logo2.png' alt='Logo' className='w-36' />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className='hidden lg:flex items-center gap-8'>
                        {t.nav.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSection(index)}
                                className='group relative font-medium text-white hover:text-[#C6A75E] transition-smooth'
                            >
                                {item}
                                <span className='bottom-0 left-0 absolute bg-[#C6A75E] w-0 group-hover:w-full h-0.5 transition-all duration-500'></span>
                            </button>
                        ))}
                    </nav>

                    {/* Right Side - Instagram + Language Toggle */}
                    <div className='hidden lg:flex items-center gap-4'>
                        <a
                            href='https://www.instagram.com/gavrielov_barbershop/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white hover:text-[#C6A75E] transition-smooth'
                        >
                            <Instagram size={24} />
                        </a>
                        <button
                            onClick={toggleLanguage}
                            className='hover:bg-[#C6A75E] px-4 py-2 border-[#C6A75E] border-2 font-semibold text-[#C6A75E] hover:text-black transition-smooth'
                        >
                            {t.langButton}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='lg:hidden text-white hover:text-[#C6A75E] transition-smooth'
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} />
                        ) : (
                            <Menu size={28} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className='lg:hidden top-20 right-0 left-0 absolute bg-black/90 border-[#C6A75E]/30 border-t'>
                        <nav className='flex flex-col gap-4 p-6'>
                            {t.nav.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(index)}
                                    className='py-2 border-gray-800 border-b font-medium text-white hover:text-[#C6A75E] text-left transition-smooth'
                                >
                                    {item}
                                </button>
                            ))}
                            <div className='flex items-center gap-4 pt-4'>
                                <a
                                    href='https://www.instagram.com/gavrielov_barbershop/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-white hover:text-[#C6A75E] transition-smooth'
                                >
                                    <Instagram size={24} />
                                </a>
                                <button
                                    onClick={toggleLanguage}
                                    className='hover:bg-[#C6A75E] px-4 py-2 border-[#C6A75E] border-2 font-semibold text-[#C6A75E] hover:text-black transition-smooth'
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
