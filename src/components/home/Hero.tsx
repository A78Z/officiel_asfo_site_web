import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import { ChevronRight, Heart } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttons: {
    primary: { text: string; to: string };
    secondary?: { text: string; to: string };
  };
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Soigner avec le cœur,",
    subtitle: "Former pour demain",
    description:
      "Depuis 2000, l'Action Sanitaire pour le Fouta (ASFO) mobilise des professionnels de santé et des bénévoles pour offrir des soins gratuits, des consultations spécialisées et des actions de sensibilisation au bénéfice des populations les plus vulnérables du Fouta.",
    image: "/slide1.webp",
    buttons: {
      primary: { text: "Nos Rapports", to: "/services" },
      secondary: { text: "Faire un don", to: "/donate" },
    },
  },
  {
    id: 2,
    title: "Votre satisfaction,",
    subtitle: "Notre crédo",
    description:
      "Depuis sa création, l'ASFO a permis à des milliers de patients d'accéder à des soins gratuits dans les zones les plus reculées du Fouta. À travers ses campagnes médicales, actions de sensibilisation, elle incarne une jeunesse engagée qui soigne, forme et transforme durablement des vies.",
    image: "/slide-2.webp",
    buttons: {
      primary: { text: "Voir les archives", to: "/archives" },
    },
  },
  {
    id: 3,
    title: "Ensemble, pour un avenir",
    subtitle: "Plus sain et plus solidaire",
    description:
      "Votre engagement peut réellement changer des vies. Rejoignez notre mission humanitaire  en vous impliquant comme, membre, partenaire ou volontaire Chaque geste compte. Chaque soutien fait la différence.",
    image: "/slide-3.webp",
    buttons: {
      primary: { text: "S'engager", to: "/join" },
      secondary: { text: "Nous contacter", to: "/contact" },
    },
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 15000); // Augmenté à 15 secondes

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt="ASFO slide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/70"></div>
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Heart className="mr-2 text-red-400" size={16} />
            <span>Association à but non lucratif depuis 2000</span>
          </div>

          <div
            className={`transition-all duration-500 transform ${
              isTransitioning ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
              {slides[currentSlide].title} <br className="hidden md:block" />
              <span className="text-teal-300">{slides[currentSlide].subtitle}</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {slides[currentSlide].description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="accent"
                size="large"
                to={slides[currentSlide].buttons.primary.to}
              >
                {slides[currentSlide].buttons.primary.text}
              </Button>

              {slides[currentSlide].buttons.secondary && (
                <Button
                  variant="outline"
                  size="large"
                  to={slides[currentSlide].buttons.secondary.to}
                  className="bg-transparent text-white border-white hover:bg-white/10"
                >
                  {slides[currentSlide].buttons.secondary.text}
                  <ChevronRight className="ml-1" size={18} />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce">
        <div className="h-14 w-0.5 bg-white/40 mb-2"></div>
        <span className="text-sm font-medium">Découvrir</span>
      </div>
    </div>
  );
};

export default Hero;