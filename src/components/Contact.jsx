import React from 'react';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = ({ language }) => {
    const content = {
        he: {
            title: 'צור קשר',
            subtitle: 'קבע תור עכשיו ותתחיל את המסע לסטייל המושלם',
            cta: 'לקביעת תור עכשיו',
            phone: 'טלפון',
            whatsapp: 'WhatsApp',
            address: 'כתובת',
            addressText: 'עליית הנוער 17 בית שמש',
            hours: 'שעות פעילות',
            hoursText: [
                'ראשון - חמישי: 09:00 - 20:00',
                'שישי: 08:00 - 14:00',
                'שבת: סגור',
            ],
        },
        en: {
            title: 'Contact Us',
            subtitle:
                'Book your appointment now and start your journey to the perfect style',
            cta: 'Book Your Appointment Today',
            phone: 'Phone',
            whatsapp: 'WhatsApp',
            address: 'Address',
            addressText: "Aliyat Hano'ar St 17, Bet Shemesh",
            hours: 'Business Hours',
            hoursText: [
                'Sunday - Thursday: 09:00 - 20:00',
                'Friday: 08:00 - 14:00',
                'Saturday: Closed',
            ],
        },
    };

    const t = content[language];

    const handleWhatsApp = () => {
        window.open('https://wa.me/972502226952', '_blank');
    };

    const handlePhone = () => {
        window.location.href = 'tel:0502226952';
    };

    const handleGoogleMaps = () => {
        window.open(
            'https://www.google.com/maps/search/?api=1&query=עליית+הנוער+17+בית+שמש',
            '_blank',
        );
    };

    return (
        <section id='contact' className='bg-[#f6f5e8] section-padding'>
            <div className='mx-auto max-w-7xl'>
                {/* Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 heading-1'>{t.title}</h2>
                    <div className='mx-auto gold-divider'></div>
                    <p className='mt-6 text-[#666666] body-large'>
                        {t.subtitle}
                    </p>
                </div>

                <div className='gap-12 grid grid-cols-1 lg:grid-cols-2'>
                    {/* Contact Info */}
                    <div className='space-y-8'>
                        {/* Phone */}
                        <div
                            className='flex items-start gap-4 bg-[#fffef2] p-6 cursor-pointer hover-lift'
                            onClick={handlePhone}
                        >
                            <div className='flex flex-shrink-0 justify-center items-center bg-[#C6A75E] w-14 h-14'>
                                <Phone size={24} color='#000' />
                            </div>
                            <div>
                                <h3 className='mb-2 heading-3'>{t.phone}</h3>
                                <p
                                    className='text-[#666666] body-regular'
                                    dir='ltr'
                                >
                                    050-222-6952
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div
                            className='flex items-start gap-4 bg-[#fffef2] p-6 cursor-pointer hover-lift'
                            onClick={handleWhatsApp}
                        >
                            <div className='flex flex-shrink-0 justify-center items-center bg-[#C6A75E] w-14 h-14'>
                                <MessageCircle size={24} color='#000' />
                            </div>
                            <div>
                                <h3 className='mb-2 heading-3'>{t.whatsapp}</h3>
                                <p
                                    className='text-[#666666] body-regular'
                                    dir='ltr'
                                >
                                    050-222-6952
                                </p>
                            </div>
                        </div>

                        {/* Address */}
                        <div
                            className='flex items-start gap-4 bg-[#fffef2] p-6 cursor-pointer hover-lift'
                            onClick={handleGoogleMaps}
                        >
                            <div className='flex flex-shrink-0 justify-center items-center bg-[#C6A75E] w-14 h-14'>
                                <MapPin size={24} color='#000' />
                            </div>
                            <div>
                                <h3 className='mb-2 heading-3'>{t.address}</h3>
                                <p className='text-[#666666] body-regular'>
                                    {t.addressText}
                                </p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className='flex items-start gap-4 bg-[#fffef2] p-6'>
                            <div className='flex flex-shrink-0 justify-center items-center bg-[#C6A75E] w-14 h-14'>
                                <Clock size={24} color='#000' />
                            </div>
                            <div>
                                <h3 className='mb-3 heading-3'>{t.hours}</h3>
                                <div className='space-y-1'>
                                    {t.hoursText.map((hour, index) => (
                                        <p
                                            key={index}
                                            className='text-[#666666] body-small'
                                        >
                                            {hour}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className='h-[500px] lg:h-full'>
                        <iframe
                            title='The Barbers Location'
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.5215!2d35.2095!3d31.7471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d3ed7e6c7dbbd%3A0x7e7e7e7e7e7e7e7e!2sAliyat%20Hanoar%20St%2017%2C%20Bet%20Shemesh!5e0!3m2!1sen!2sil!4v1613546391589'
                            width='100%'
                            height='100%'
                            style={{ border: 0 }}
                            allowFullScreen=''
                            loading='lazy'
                            referrerPolicy='no-referrer-when-downgrade'
                            className='shadow-2xl'
                        ></iframe>
                    </div>
                </div>

                {/* CTA Button */}
                <div className='mt-16 text-center'>
                    <button
                        onClick={handleWhatsApp}
                        className='px-12 py-5 text-lg btn-primary-filled'
                    >
                        {t.cta}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Contact;
