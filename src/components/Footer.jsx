import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';

const Footer = ({ language }) => {
  const content = {
    he: {
      brand: 'גבריאלוב ברברשופ',
      tagline: 'הסטייל שלך מתחיל כאן',
      copyright: '© כל הזכויות שמורות',
      phone: '054-318-1489',
      address: 'רחוב מורדי הגטאות 15, בית שמש'
    },
    en: {
      brand: 'Gavrielov Barbershop',
      tagline: 'Your Style Starts Here',
      copyright: '© All Rights Reserved',
      phone: '054-318-1489',
      address: 'Mordei HaGetaot St 15, Beit Shemesh'
    }
  };

  const t = content[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3
              className="text-2xl font-bold mb-4 text-[#C6A75E]"
              style={{ fontFamily: "'Playfair Display', 'Heebo', serif" }}
            >
              {t.brand}
            </h3>
            <div className="w-16 h-0.5 bg-[#C6A75E] mb-4"></div>
            <p className="text-[#bcbbb4] mb-6">{t.tagline}</p>
            <a
              href="https://www.instagram.com/gavrielov_barbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C6A75E] hover:text-white transition-smooth"
            >
              <Instagram size={24} />
              <span>@gavrielov_barbershop</span>
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#C6A75E]">
              {language === 'he' ? 'צור קשר' : 'Contact'}
            </h4>
            <div className="w-16 h-0.5 bg-[#C6A75E] mb-4"></div>
            <div className="space-y-3">
              <a
                href="tel:0543181489"
                className="flex items-center gap-3 text-[#bcbbb4] hover:text-[#C6A75E] transition-smooth"
              >
                <Phone size={18} />
                <span dir="ltr">{t.phone}</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=רחוב+מורדי+הגטאות+15+בית+שמש"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[#bcbbb4] hover:text-[#C6A75E] transition-smooth"
              >
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>{t.address}</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#C6A75E]">
              {language === 'he' ? 'שעות פעילות' : 'Business Hours'}
            </h4>
            <div className="w-16 h-0.5 bg-[#C6A75E] mb-4"></div>
            <div className="space-y-2 text-[#bcbbb4]">
              <p>{language === 'he' ? 'ראשון - חמישי' : 'Sunday - Thursday'}: 09:00 - 20:00</p>
              <p>{language === 'he' ? 'שישי' : 'Friday'}: 08:00 - 14:00</p>
              <p>{language === 'he' ? 'שבת: סגור' : 'Saturday: Closed'}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C6A75E]/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#bcbbb4] text-sm">
              {currentYear} {t.brand} {t.copyright}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/972543181489"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bcbbb4] hover:text-[#C6A75E] transition-smooth text-sm"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/gavrielov_barbershop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#bcbbb4] hover:text-[#C6A75E] transition-smooth text-sm"
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
