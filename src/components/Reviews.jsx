import React from 'react';
import { Star } from 'lucide-react';

const Reviews = ({ language }) => {
  const content = {
    he: {
      title: 'מה הלקוחות אומרים',
      subtitle: 'ביקורות מלקוחות מרוצים',
      reviews: [
        {
          name: 'דוד כהן',
          text: 'השירות הכי טוב שקיבלתי! תשומת לב לפרטים והתוצאה מושלמת בכל פעם.',
          rating: 5
        },
        {
          name: 'יוסי לוי',
          text: 'אווירה מעולה, מקצועיות גבוהה ותוצאות מדהימות. בהחלט שווה את המחיר!',
          rating: 5
        },
        {
          name: 'משה אברהם',
          text: 'הילד שלי אוהב להגיע לתספורת כאן. השירות ברכב והפינוק פשוט מושלמים.',
          rating: 5
        },
        {
          name: 'אלי שלום',
          text: 'המקום הכי טוב לתספורת ועיצוב זקן בבית שמש. ממליץ בחום!',
          rating: 5
        }
      ]
    },
    en: {
      title: 'What Clients Say',
      subtitle: 'Reviews from satisfied clients',
      reviews: [
        {
          name: 'David Cohen',
          text: 'Best service I\'ve ever received! Attention to detail and perfect results every time.',
          rating: 5
        },
        {
          name: 'Yossi Levi',
          text: 'Great atmosphere, high professionalism, and amazing results. Definitely worth the price!',
          rating: 5
        },
        {
          name: 'Moshe Abraham',
          text: 'My son loves getting his haircut here. The car service and treat are just perfect.',
          rating: 5
        },
        {
          name: 'Eli Shalom',
          text: 'The best place for haircuts and beard styling in Beit Shemesh. Highly recommend!',
          rating: 5
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="reviews" className="section-padding bg-[#fffef2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">{t.title}</h2>
          <div className="gold-divider mx-auto"></div>
          <p className="body-large text-[#666666] mt-6">{t.subtitle}</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 hover-lift border-l-4 border-[#C6A75E]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#C6A75E" color="#C6A75E" />
                ))}
              </div>

              {/* Review Text */}
              <p className="body-regular text-[#333333] mb-6 italic leading-relaxed">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-[#C6A75E] mb-4"></div>

              {/* Name */}
              <p className="font-semibold text-[#333333]">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
