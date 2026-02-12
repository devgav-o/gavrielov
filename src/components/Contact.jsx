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
      addressText: 'רחוב מורדי הגטאות 15, בית שמש',
      hours: 'שעות פעילות',
      hoursText: [
        'ראשון - חמישי: 09:00 - 20:00',
        'שישי: 08:00 - 14:00',
        'שבת: סגור'
      ]
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Book your appointment now and start your journey to the perfect style',
      cta: 'Book Your Appointment Today',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      address: 'Address',
      addressText: 'Mordei HaGetaot St 15, Beit Shemesh',
      hours: 'Business Hours',
      hoursText: [
        'Sunday - Thursday: 09:00 - 20:00',
        'Friday: 08:00 - 14:00',
        'Saturday: Closed'
      ]
    }
  };

  const t = content[language];

  const handleWhatsApp = () => {
    window.open('https://wa.me/972543181489', '_blank');
  };

  const handlePhone = () => {
    window.location.href = 'tel:0543181489';
  };

  const handleGoogleMaps = () => {
    window.open('https://www.google.com/maps/search/?api=1&query=רחוב+מורדי+הגטאות+15+בית+שמש', '_blank');
  };

  return (
    <section id="contact" className="section-padding bg-[#f6f5e8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">{t.title}</h2>
          <div className="gold-divider mx-auto"></div>
          <p className="body-large text-[#666666] mt-6">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4 p-6 bg-[#fffef2] hover-lift cursor-pointer" onClick={handlePhone}>
              <div className="w-14 h-14 bg-[#C6A75E] flex items-center justify-center flex-shrink-0">
                <Phone size={24} color="#000" />
              </div>
              <div>
                <h3 className="heading-3 mb-2">{t.phone}</h3>
                <p className="body-regular text-[#666666]" dir="ltr">054-318-1489</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4 p-6 bg-[#fffef2] hover-lift cursor-pointer" onClick={handleWhatsApp}>
              <div className="w-14 h-14 bg-[#C6A75E] flex items-center justify-center flex-shrink-0">
                <MessageCircle size={24} color="#000" />
              </div>
              <div>
                <h3 className="heading-3 mb-2">{t.whatsapp}</h3>
                <p className="body-regular text-[#666666]" dir="ltr">054-318-1489</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 p-6 bg-[#fffef2] hover-lift cursor-pointer" onClick={handleGoogleMaps}>
              <div className="w-14 h-14 bg-[#C6A75E] flex items-center justify-center flex-shrink-0">
                <MapPin size={24} color="#000" />
              </div>
              <div>
                <h3 className="heading-3 mb-2">{t.address}</h3>
                <p className="body-regular text-[#666666]">{t.addressText}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-6 bg-[#fffef2]">
              <div className="w-14 h-14 bg-[#C6A75E] flex items-center justify-center flex-shrink-0">
                <Clock size={24} color="#000" />
              </div>
              <div>
                <h3 className="heading-3 mb-3">{t.hours}</h3>
                <div className="space-y-1">
                  {t.hoursText.map((hour, index) => (
                    <p key={index} className="body-small text-[#666666]">{hour}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] lg:h-full">
            <iframe
              title="Gavrielov Barbershop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.123456789!2d34.987654321!3d31.748765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDQ0JzU1LjYiTiAzNMKwNTknMTUuNiJF!5e0!3m2!1sen!2sil!4v1234567890123!5m2!1sen!2sil"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-2xl"
            ></iframe>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button onClick={handleWhatsApp} className="btn-primary-filled text-lg px-12 py-5">
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
