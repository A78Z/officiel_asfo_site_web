import React, { useState, useEffect } from 'react';
import SectionTitle from '../common/SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  imageUrl: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Masha Allah, que la bénédiction d'Allah vous accompagne et vous élève. Vos actions sont d'une portée admirable et témoignent d'un engagement profondément inspirant.",
    author: "Serigne Modou Babou",
    role: "UCAD FMPOS, Région de Dakar",
    imageUrl: "/babou.jpg"
  },
  {
    content: "Mâcha Allah, toutes nos félicitations à l’ensemble de l’équipe ! Un grand merci à toutes celles et ceux qui ont contribué, de près ou de loin, au succès de cette belle campagne. Cap sur l’horizon 2025 pour un Matam uni et ambitieux !",
    author: "Oumou Bocoum",
    role: "",
    imageUrl: "/oumou.jpg"
  },
  {
    content: "L'ASFO incarne l'espoir et les aspirations d’un peuple tout entier. Véritable joyau du Fouta, elle symbolise notre fierté collective et notre engagement commun pour un avenir meilleur. Merci pour votre dévouement indéfectible.",
    author: "Abdoul Baba Poulo Gaynako",
    role: "Faculté de médecine de dakar, Thilogne",
    imageUrl: "/Thilogne.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Ce qu'ils pensent de l'ASFO"
          subtitle="Découvrez les témoignages de ceux qui ont bénéficié de nos services et de ceux qui nous accompagnent dans notre mission"
          center
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="absolute -top-6 left-10 text-teal-500 transform -rotate-12">
              <Quote size={48} className="fill-current opacity-20" />
            </div>

            <div className="relative z-10">
              <div className={`transition-opacity duration-300 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}>
                <blockquote className="text-lg md:text-xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-4 border-white shadow-md">
                    <img 
                      src={testimonials[currentIndex].imageUrl} 
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{testimonials[currentIndex].author}</div>
                    <div className="text-teal-600 text-sm">{testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors hover:bg-teal-50"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors hover:bg-teal-50"
                aria-label="Témoignage suivant"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-teal-500 w-6' 
                    : 'bg-gray-300 hover:bg-teal-200'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;