import React from 'react';

const About = ({ language }) => {
    const content = {
        he: {
            title: 'אודות',
            description:
                'מספרת “הספּרים“ מתמחה בתספורות מדויקות, עיצוב זקן ושירות ברמה הגבוהה ביותר. אצלנו כל לקוח יוצא חד.',
            extended:
                'אנחנו מאמינים שתספורת היא יותר מסתם שירות - זו אומנות. עם ניסיון רב שנים ותשומת לב לפרטים הקטנים ביותר, אנחנו יוצרים לך את המראה המושלם שמתאים לאישיות שלך.',
        },
        en: {
            title: 'About Us',
            description:
                'The Barbers Barbershop specializes in precise haircuts, beard styling, and a premium grooming experience. Every client leaves sharp.',
            extended:
                "We believe that a haircut is more than just a service - it's an art. With years of experience and attention to the smallest details, we create the perfect look that matches your personality.",
        },
    };

    const t = content[language];

    return (
        <section id='about' className='bg-[#fffef2] section-padding'>
            <div className='mx-auto max-w-7xl'>
                <div className='items-center gap-16 grid grid-cols-1 lg:grid-cols-2'>
                    {/* Image */}
                    <div className='order-2 lg:order-1'>
                        <div className='relative hover-lift'>
                            <img
                                src='background2.png'
                                alt='The Barbers Barbershop Interior'
                                className='shadow-2xl w-full h-[500px] object-cover'
                            />
                            <div className='-right-6 -bottom-6 -z-10 absolute border-[#C6A75E] border-2 w-full h-full'></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className='order-1 lg:order-2'>
                        <h2 className='mb-6 heading-1'>{t.title}</h2>
                        <div className='gold-divider'></div>
                        <p className='mb-6 leading-relaxed body-large'>
                            {t.description}
                        </p>
                        <p className='text-[#666666] leading-relaxed body-regular'>
                            {t.extended}
                        </p>

                        {/* Stats */}
                        <div className='gap-8 grid grid-cols-3 mt-12'>
                            <div className='text-center'>
                                <div className='mb-2 font-bold text-[#C6A75E] text-4xl'>
                                    10+
                                </div>
                                <div className='text-[#666666] text-sm'>
                                    {language === 'he'
                                        ? 'שנות ניסיון'
                                        : 'Years Experience'}
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='mb-2 font-bold text-[#C6A75E] text-4xl'>
                                    1000+
                                </div>
                                <div className='text-[#666666] text-sm'>
                                    {language === 'he'
                                        ? 'לקוחות מרוצים'
                                        : 'Happy Clients'}
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='mb-2 font-bold text-[#C6A75E] text-4xl'>
                                    5★
                                </div>
                                <div className='text-[#666666] text-sm'>
                                    {language === 'he'
                                        ? 'דירוג ממוצע'
                                        : 'Average Rating'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
