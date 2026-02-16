import React, { useEffect, useState } from 'react';
import { Instagram, ArrowDown } from 'lucide-react';

const Hero = ({ language }) => {
    const content = {
        he: {
            headline: 'הסטייל שלך מתחיל כאן',
            subheadline: 'חוויית ברבר פרימיום בבית שמש',
            primaryCTA: 'לקביעת תור',
            secondaryCTA: 'צפה בעבודות',
        },
        en: {
            headline: 'Your Style Starts Here',
            subheadline: 'Premium Barbering Experience in Beit Shemesh',
            primaryCTA: 'Book Appointment',
            secondaryCTA: 'View Gallery',
        },
    };

    const t = content[language];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleBooking = () => {
        window.open('https://wa.me/972502226952', '_blank');
    };

    // TEMP: Variations params
    const [variation, setVariation] = useState('1');
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const v = params.get('variation');
        if (v) setVariation(v);
    });

    return (
        <section
            id='hero'
            className='relative flex justify-center items-center h-screen overflow-hidden'
        >
            {/* Background Image with Overlay */}
            <div className='z-0 absolute inset-0'>
                <img
                    src={`background${variation}.png`}
                    alt='The Barbers Barbershop Interior'
                    className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black/70'></div>
            </div>

            {/* Gold Accent Line */}
            <div className='top-1/2 left-0 z-10 absolute bg-[#C6A75E] w-20 h-0.5'></div>
            <div className='top-1/2 right-0 z-10 absolute bg-[#C6A75E] w-20 h-0.5'></div>

            {/* Content */}
            <div className='z-10 relative mx-auto px-6 max-w-4xl text-center'>
                <h1 className='mb-6 animate-fade-in hero-large'>
                    {t.headline}
                </h1>
                <div className='bg-[#C6A75E] mx-auto mb-6 w-24 h-0.5'></div>
                <p className='mb-12 font-light text-[#f6f5e8] text-xl lg:text-2xl'>
                    {t.subheadline}
                </p>

                {/* CTA Buttons */}
                <div className='flex sm:flex-row flex-col justify-center items-center gap-6'>
                    <button
                        onClick={handleBooking}
                        className='btn-primary-filled'
                    >
                        {t.primaryCTA}
                    </button>
                    <button
                        onClick={() => scrollToSection('gallery')}
                        className='btn-primary'
                    >
                        {t.secondaryCTA}
                    </button>
                </div>

                {/* Instagram Ico */}
                <div className='mt-12'>
                    <a
                        href='https://www.instagram.com/yair_harush_thebarbers/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-[#C6A75E] hover:text-white transition-smooth'
                    >
                        <Instagram size={28} />
                        <span className='text-sm'>@yair_harush_thebarbers</span>
                    </a>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <button
                onClick={() => scrollToSection('about')}
                className='bottom-12 left-1/2 absolute text-white hover:text-[#C6A75E] transition-smooth -translate-x-1/2 animate-bounce cursor-pointer transform'
            >
                <ArrowDown size={32} />
            </button>
        </section>
    );
};

export default Hero;
