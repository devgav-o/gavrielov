import React from 'react';
import { Scissors, Sparkles, TrendingUp, Baby, Crown, Home } from 'lucide-react';

const Services = ({ language }) => {
  const content = {
    he: {
      title: 'השירותים שלנו',
      subtitle: 'מגוון שירותי ברבר פרימיום המותאמים לצרכים שלך',
      services: [
        {
          name: 'טיפולים בדלילות ונשירת שיער',
          description: 'טיפול מקצועי לשיער דליל ונשירה',
          price: '',
          icon: 'sparkles',
          badge: 'חדש!'
        },
        {
          name: 'תספורת קלאסית',
          description: 'תספורת מסורתית מדויקת',
          price: '60 ₪',
          icon: 'scissors'
        },
        {
          name: 'תספורת טרנדית',
          description: 'Mullet, Taper, Skin Fade (0-0.5), Makeover',
          price: '70 ₪',
          icon: 'trending'
        },
        {
          name: 'תספורת + עיצוב זקן',
          description: 'חבילה משולבת לתספורת ועיצוב זקן מקצועי',
          price: '70-100 ₪',
          icon: 'scissors'
        },
        {
          name: 'תספורת ברכב + פינוק',
          description: 'מיוחד לילדים, כולל הפתעה מתוקה',
          price: '80 ₪',
          icon: 'baby'
        },
        {
          name: 'חלאקה - תספורת ראשונה',
          description: 'טקס תספורת ראשונה מסורתי',
          price: '120 ₪',
          icon: 'baby'
        },
        {
          name: 'VIP - חבילה מלאה',
          description: 'תספורת + זקן + גבות + שעווה',
          price: '140 ₪',
          icon: 'crown'
        },
        {
          name: 'תספורת בבית הלקוח',
          description: 'שירות ביתי נוח ומקצועי',
          price: 'החל מ-180 ₪',
          icon: 'home'
        }
      ],
      cta: 'לקביעת תור'
    },
    en: {
      title: 'Our Services',
      subtitle: 'Premium barbering services tailored to your needs',
      services: [
        {
          name: 'Hair Loss Treatment',
          description: 'Professional treatment for thinning hair',
          price: '',
          icon: 'sparkles',
          badge: 'New!'
        },
        {
          name: 'Classic Haircut',
          description: 'Traditional precise haircut',
          price: '60 ₪',
          icon: 'scissors'
        },
        {
          name: 'Trend Haircut',
          description: 'Mullet, Taper, Skin Fade (0-0.5), Makeover',
          price: '70 ₪',
          icon: 'trending'
        },
        {
          name: 'Haircut + Beard Design',
          description: 'Complete package with haircut and professional beard styling',
          price: '70-100 ₪',
          icon: 'scissors'
        },
        {
          name: 'Car Haircut + Treat',
          description: 'Special for kids, includes surprise treat',
          price: '80 ₪',
          icon: 'baby'
        },
        {
          name: 'First Haircut (Halaka)',
          description: 'Traditional first haircut ceremony',
          price: '120 ₪',
          icon: 'baby'
        },
        {
          name: 'VIP Package',
          description: 'Haircut + Beard + Eyebrows + Wax',
          price: '140 ₪',
          icon: 'crown'
        },
        {
          name: 'Home Service',
          description: 'Convenient professional service at your location',
          price: 'Starting at 180 ₪',
          icon: 'home'
        }
      ],
      cta: 'Book Now'
    }
  };

  const t = content[language];

  const getIcon = (iconName) => {
    const icons = {
      scissors: Scissors,
      sparkles: Sparkles,
      trending: TrendingUp,
      baby: Baby,
      crown: Crown,
      home: Home
    };
    const Icon = icons[iconName] || Scissors;
    return <Icon size={32} className="text-[#C6A75E]" />;
  };

  const handleBooking = () => {
    window.open('https://wa.me/972543181489', '_blank');
  };

  return (
    <section id="services" className="section-padding bg-[#f6f5e8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">{t.title}</h2>
          <div className="gold-divider mx-auto"></div>
          <p className="body-large text-[#666666] mt-6">{t.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {t.services.map((service, index) => (
            <div
              key={index}
              className="bg-[#fffef2] p-8 hover-lift relative group cursor-pointer border border-transparent hover:border-[#C6A75E] transition-smooth"
            >
              {service.badge && (
                <div className="absolute top-4 right-4 bg-[#C6A75E] text-black text-xs font-bold px-3 py-1">
                  {service.badge}
                </div>
              )}
              
              <div className="mb-6">{getIcon(service.icon)}</div>
              
              <h3 className="heading-3 mb-3 group-hover:text-[#C6A75E] transition-smooth">
                {service.name}
              </h3>
              
              <div className="w-12 h-0.5 bg-[#C6A75E] mb-4"></div>
              
              <p className="body-small text-[#666666] mb-4 min-h-[48px]">
                {service.description}
              </p>
              
              {service.price && (
                <div className="text-2xl font-bold text-[#C6A75E]">
                  {service.price}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button onClick={handleBooking} className="btn-primary-filled">
            {t.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
