import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer = ({ language }) => {
    const content = {
        he: {
            brand: 'הספּרים',
            tagline: 'הסטייל שלך מתחיל כאן',
            copyright: '© כל הזכויות שמורות',
            phone: '050-222-6952',
            address: 'עליית הנוער 17 בית שמש',
        },
        en: {
            brand: 'The Barbers',
            tagline: 'Your Style Starts Here',
            copyright: '© All Rights Reserved',
            phone: '050-222-6952',
            address: "Aliyat Hano'ar St 17, Bet Shemesh",
        },
    };

    const t = content[language];
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-black text-white'>
            {/* Main Footer */}
            <div className='mx-auto px-6 py-16 max-w-7xl'>
                <div className='gap-12 grid grid-cols-1 md:grid-cols-3'>
                    {/* Brand Section */}
                    <div>
                        <h3
                            className='mb-4 font-bold text-[#C6A75E] text-2xl'
                            style={{
                                fontFamily:
                                    "'Playfair Display', 'Heebo', serif",
                            }}
                        >
                            {t.brand}
                        </h3>
                        <div className='bg-[#C6A75E] mb-4 w-16 h-0.5'></div>
                        <p className='mb-6 text-[#bcbbb4]'>{t.tagline}</p>
                        <a
                            href='https://www.instagram.com/yair_harush_thebarbers/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 text-[#C6A75E] hover:text-white transition-smooth'
                        >
                            <Instagram size={24} />
                            <span>@yair_harush_thebarbers</span>
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className='mb-4 font-semibold text-[#C6A75E] text-xl'>
                            {language === 'he' ? 'צור קשר' : 'Contact'}
                        </h4>
                        <div className='bg-[#C6A75E] mb-4 w-16 h-0.5'></div>
                        <div className='space-y-3'>
                            <a
                                href='tel:0502226952'
                                className='flex items-center gap-3 text-[#bcbbb4] hover:text-[#C6A75E] transition-smooth'
                            >
                                <Phone size={18} />
                                <span dir='ltr'>{t.phone}</span>
                            </a>
                            <a
                                href='https://www.google.com/maps/search/?api=1&query=עליית+הנוער+17+בית+שמש'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-start gap-3 text-[#bcbbb4] hover:text-[#C6A75E] transition-smooth'
                            >
                                <MapPin
                                    size={18}
                                    className='flex-shrink-0 mt-1'
                                />
                                <span>{t.address}</span>
                            </a>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className='mb-4 font-semibold text-[#C6A75E] text-xl'>
                            {language === 'he'
                                ? 'שעות פעילות'
                                : 'Business Hours'}
                        </h4>
                        <div className='bg-[#C6A75E] mb-4 w-16 h-0.5'></div>
                        <div className='space-y-2 text-[#bcbbb4]'>
                            <p>
                                {language === 'he'
                                    ? 'ראשון - חמישי'
                                    : 'Sunday - Thursday'}
                                : 09:00 - 20:00
                            </p>
                            <p>
                                {language === 'he' ? 'שישי' : 'Friday'}: 08:00 -
                                14:00
                            </p>
                            <p>
                                {language === 'he'
                                    ? 'שבת: סגור'
                                    : 'Saturday: Closed'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='border-[#C6A75E]/30 border-t'>
                <div className='mx-auto px-6 py-6 max-w-7xl'>
                    <div className='flex md:flex-row flex-col justify-between items-center gap-4'>
                        <p className='text-[#bcbbb4] text-sm'>
                            {currentYear} {t.brand} {t.copyright}
                        </p>
                        <div className='flex items-center gap-6'>
                            <a
                                href='https://wa.me/972502226952'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-[#bcbbb4] hover:text-[#C6A75E] text-sm transition-smooth'
                            >
                                WhatsApp
                            </a>
                            <a
                                href='https://www.instagram.com/yair_harush_thebarbers/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-[#bcbbb4] hover:text-[#C6A75E] text-sm transition-smooth'
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
