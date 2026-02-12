import React from 'react';

const About = ({ language }) => {
  const content = {
    he: {
      title: 'אודות',
      description: 'מספרת גבריאלוב מתמחה בתספורות מדויקות, עיצוב זקן ושירות ברמה הגבוהה ביותר. אצלנו כל לקוח יוצא חד.',
      extended: 'אנחנו מאמינים שתספורת היא יותר מסתם שירות - זו אומנות. עם ניסיון רב שנים ותשומת לב לפרטים הקטנים ביותר, אנחנו יוצרים לך את המראה המושלם שמתאים לאישיות שלך.'
    },
    en: {
      title: 'About Us',
      description: 'Gavrielov Barbershop specializes in precise haircuts, beard styling, and a premium grooming experience. Every client leaves sharp.',
      extended: 'We believe that a haircut is more than just a service - it\'s an art. With years of experience and attention to the smallest details, we create the perfect look that matches your personality.'
    }
  };

  const t = content[language];

  return (
    <section id="about" className="section-padding bg-[#fffef2]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative hover-lift">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wfGVufDB8fHx8MTc3MDkxMDIxNHww&ixlib=rb-4.1.0&q=85"
                alt="Gavrielov Barbershop Interior"
                className="w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#C6A75E] -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="heading-1 mb-6">{t.title}</h2>
            <div className="gold-divider"></div>
            <p className="body-large mb-6 leading-relaxed">
              {t.description}
            </p>
            <p className="body-regular text-[#666666] leading-relaxed">
              {t.extended}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C6A75E] mb-2">10+</div>
                <div className="text-sm text-[#666666]">
                  {language === 'he' ? 'שנות ניסיון' : 'Years Experience'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C6A75E] mb-2">1000+</div>
                <div className="text-sm text-[#666666]">
                  {language === 'he' ? 'לקוחות מרוצים' : 'Happy Clients'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C6A75E] mb-2">5★</div>
                <div className="text-sm text-[#666666]">
                  {language === 'he' ? 'דירוג ממוצע' : 'Average Rating'}
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
