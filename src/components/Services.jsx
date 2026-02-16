import React from 'react';
import {
    Scissors,
    Sparkles,
    TrendingUp,
    Baby,
    Crown,
    Home,
} from 'lucide-react';

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
                    badge: 'חדש!',
                },
                {
                    name: 'תספורת קלאסית',
                    description: 'תספורת מסורתית מדויקת',
                    price: '60 ₪',
                    icon: 'scissors',
                },
                {
                    name: 'תספורת טרנדית',
                    description: 'Mullet, Taper, Skin Fade (0-0.5), Makeover',
                    price: '70 ₪',
                    icon: 'trending',
                },
                {
                    name: 'תספורת + עיצוב זקן',
                    description: 'חבילה משולבת לתספורת ועיצוב זקן מקצועי',
                    price: '70-100 ₪',
                    icon: 'scissors',
                },
                {
                    name: 'תספורת ברכב + פינוק',
                    description: 'מיוחד לילדים, כולל הפתעה מתוקה',
                    price: '80 ₪',
                    icon: 'baby',
                },
                {
                    name: 'חלאקה - תספורת ראשונה',
                    description: 'טקס תספורת ראשונה מסורתי',
                    price: '120 ₪',
                    icon: 'baby',
                },
                {
                    name: 'VIP - חבילה מלאה',
                    description: 'תספורת + זקן + גבות + שעווה',
                    price: '140 ₪',
                    icon: 'crown',
                },
                {
                    name: 'תספורת בבית הלקוח',
                    description: 'שירות ביתי נוח ומקצועי',
                    price: 'החל מ-180 ₪',
                    icon: 'home',
                },
            ],
            cta: 'לקביעת תור',
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
                    badge: 'New!',
                },
                {
                    name: 'Classic Haircut',
                    description: 'Traditional precise haircut',
                    price: '60 ₪',
                    icon: 'scissors',
                },
                {
                    name: 'Trend Haircut',
                    description: 'Mullet, Taper, Skin Fade (0-0.5), Makeover',
                    price: '70 ₪',
                    icon: 'trending',
                },
                {
                    name: 'Haircut + Beard Design',
                    description:
                        'Complete package with haircut and professional beard styling',
                    price: '70-100 ₪',
                    icon: 'scissors',
                },
                {
                    name: 'Car Haircut + Treat',
                    description: 'Special for kids, includes surprise treat',
                    price: '80 ₪',
                    icon: 'baby',
                },
                {
                    name: 'First Haircut (Halaka)',
                    description: 'Traditional first haircut ceremony',
                    price: '120 ₪',
                    icon: 'baby',
                },
                {
                    name: 'VIP Package',
                    description: 'Haircut + Beard + Eyebrows + Wax',
                    price: '140 ₪',
                    icon: 'crown',
                },
                {
                    name: 'Home Service',
                    description:
                        'Convenient professional service at your location',
                    price: 'Starting at 180 ₪',
                    icon: 'home',
                },
            ],
            cta: 'Book Now',
        },
    };

    const t = content[language];

    const getIcon = (iconName) => {
        const icons = {
            scissors: Scissors,
            sparkles: Sparkles,
            trending: TrendingUp,
            baby: Baby,
            crown: Crown,
            home: Home,
        };
        const Icon = icons[iconName] || Scissors;
        return <Icon size={32} className='text-[#C6A75E]' />;
    };

    const handleBooking = () => {
        window.open('https://wa.me/972502226952', '_blank');
    };

    return (
        <section id='services' className='bg-[#f6f5e8] section-padding'>
            <div className='mx-auto max-w-7xl'>
                {/* Header */}
                <div className='mb-16 text-center'>
                    <h2 className='mb-4 heading-1'>{t.title}</h2>
                    <div className='mx-auto gold-divider'></div>
                    <p className='mt-6 text-[#666666] body-large'>
                        {t.subtitle}
                    </p>
                </div>

                {/* Services Grid */}
                <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12'>
                    {t.services.map((service, index) => (
                        <div
                            key={index}
                            className='group relative bg-[#fffef2] p-8 border border-transparent hover:border-[#C6A75E] transition-smooth cursor-pointer hover-lift'
                        >
                            {service.badge && (
                                <div className='top-4 right-4 absolute bg-[#C6A75E] px-3 py-1 font-bold text-black text-xs'>
                                    {service.badge}
                                </div>
                            )}

                            <div className='mb-6'>{getIcon(service.icon)}</div>

                            <h3 className='mb-3 group-hover:text-[#C6A75E] transition-smooth heading-3'>
                                {service.name}
                            </h3>

                            <div className='bg-[#C6A75E] mb-4 w-12 h-0.5'></div>

                            <p className='mb-4 min-h-[48px] text-[#666666] body-small'>
                                {service.description}
                            </p>

                            {service.price && (
                                <div className='font-bold text-[#C6A75E] text-2xl'>
                                    {service.price}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className='text-center'>
                    <button
                        onClick={handleBooking}
                        className='btn-primary-filled'
                    >
                        {t.cta}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
