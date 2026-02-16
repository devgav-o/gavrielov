import React, { useState } from 'react';

const Gallery = ({ language }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const content = {
        he: {
            title: 'גלריית עבודות',
            subtitle: 'צפה בעבודות האחרונות שלנו',
        },
        en: {
            title: 'Our Work',
            subtitle: 'View our latest work',
        },
    };

    const t = content[language];

    const images = [
        {
            url: 'https://images.unsplash.com/photo-1596513057998-040d410e4623',
            alt: 'Professional barber at work',
        },
        {
            url: 'https://images.unsplash.com/photo-1654097800183-574ba7368f74',
            alt: 'Client receiving haircut',
        },
        {
            url: 'https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e',
            alt: 'Barber using clippers',
        },
        {
            url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486',
            alt: 'Barbershop environment',
        },
        {
            url: 'https://images.unsplash.com/photo-1654097803253-d481b6751f29',
            alt: 'Beard trimming with brush',
        },
        {
            url: 'https://images.unsplash.com/photo-1706087476945-e7e7ad1e12f8',
            alt: 'Professional styling',
        },
    ];

    return (
        <section id='gallery' className='bg-[#1a1a1a] section-padding'>
            <div className='mx-auto max-w-7xl'>
                {/* Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 text-white heading-1'>{t.title}</h2>
                    <div className='mx-auto gold-divider'></div>
                    <p className='mt-6 text-[#bcbbb4] body-large'>
                        {t.subtitle}
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className='group relative h-80 overflow-hidden cursor-pointer'
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300'></div>
                            <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <div className='flex justify-center items-center border-[#C6A75E] border-2 w-12 h-12'>
                                    <span className='text-[#C6A75E] text-2xl'>
                                        +
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Instagram Link */}
                <div className='mt-12 text-center'>
                    <a
                        href='https://www.instagram.com/yair_harush_thebarbers/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white btn-secondary'
                    >
                        {language === 'he'
                            ? 'צפה ב-Instagram'
                            : 'View on Instagram'}
                    </a>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className='z-50 fixed inset-0 flex justify-center items-center bg-black/95 p-4'
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className='top-6 right-6 absolute text-white hover:text-[#C6A75E] text-4xl transition-smooth'
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                    <img
                        src={selectedImage.url}
                        alt={selectedImage.alt}
                        className='max-w-full max-h-[90vh] object-contain'
                    />
                </div>
            )}
        </section>
    );
};

export default Gallery;
