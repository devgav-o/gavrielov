import React, { useState } from 'react';

const Gallery = ({ language }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const content = {
    he: {
      title: 'גלריית עבודות',
      subtitle: 'צפה בעבודות האחרונות שלנו'
    },
    en: {
      title: 'Our Work',
      subtitle: 'View our latest work'
    }
  };

  const t = content[language];

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1596513057998-040d410e4623',
      alt: 'Professional barber at work'
    },
    {
      url: 'https://images.unsplash.com/photo-1654097800183-574ba7368f74',
      alt: 'Client receiving haircut'
    },
    {
      url: 'https://images.unsplash.com/photo-1654097801176-cb1795fd0c5e',
      alt: 'Barber using clippers'
    },
    {
      url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486',
      alt: 'Barbershop environment'
    },
    {
      url: 'https://images.unsplash.com/photo-1654097803253-d481b6751f29',
      alt: 'Beard trimming with brush'
    },
    {
      url: 'https://images.unsplash.com/photo-1706087476945-e7e7ad1e12f8',
      alt: 'Professional styling'
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4 text-white">{t.title}</h2>
          <div className="gold-divider mx-auto"></div>
          <p className="body-large text-[#bcbbb4] mt-6">{t.subtitle}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden cursor-pointer group h-80"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 border-2 border-[#C6A75E] flex items-center justify-center">
                  <span className="text-[#C6A75E] text-2xl">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/gavrielov_barbershop/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-white"
          >
            {language === 'he' ? 'צפה ב-Instagram' : 'View on Instagram'}
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-[#C6A75E] text-4xl transition-smooth"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
