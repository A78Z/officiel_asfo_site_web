import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const AwarenessPage: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = 'Actions de sensibilisation | ASFO - Action Sanitaire pour le Fouta';
  }, []);

  const interventionMethods = [
    {
      title: "Causeries éducatives",
      description: "Sessions interactives avec les communautés locales",
      image: "/causeries.webp"
    },
    {
      title: "Supports pédagogiques",
      description: "Projections vidéos et distribution de brochures",
      image: "/supports-pedagogiques.webp"
    },
    {
      title: "Relais communautaires",
      description: "Formation des acteurs locaux",
      image: "/relais-communautaires.webp"
    }
  ];

  const topics = [
    {
      title: "Hygiène et prévention des maladies",
      description: "Sensibilisation aux gestes barrières et bonnes pratiques d'hygiène quotidienne",
      image: "/hygiene-prevention-maladie.webp"
    },
    {
      title: "Santé maternelle et infantile",
      description: "Information sur le suivi de grossesse et la santé des nouveau-nés",
      image: "/sante-maternelle-infantile.webp"
    },
    {
      title: "Santé mentale et bien-être",
      description: "Sensibilisation aux enjeux de santé mentale et accompagnement psychologique",
      image: "/sante-mentale-bien-etre.webp"
    },
    {
      title: "Prévention des IST/VIH/SIDA",
      description: "Éducation sur les maladies sexuellement transmissibles et leur prévention",
      image: "/hygiene-prevention-maladie.webp"
    },
    {
      title: "Nutrition et hygiène alimentaire",
      description: "Conseils pour une alimentation saine et équilibrée",
      image: "/Nutrition-hygiene-alimentaire.webp"
    },
    {
      title: "Éducation sanitaire",
      description: "Formation aux premiers secours et gestes qui sauvent",
      image: "/education-sanitaire.webp"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-teal-600">
        <div className="absolute inset-0 z-0">
          <img 
            src="/31.webp" 
            alt="Sensibilisation ASFO" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Campagnes de sensibilisation
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Éduquer, prévenir et sauver des vies à travers nos campagnes de sensibilisation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <p>
                En plus des soins médicaux, <strong>ASFO mène régulièrement des campagnes de sensibilisation</strong> sur des enjeux de santé publique cruciaux. Ces actions sont menées dans les écoles, les villages et lieux publics, permettant d'atteindre un large public et de créer un impact durable.
              </p>
            </div>

            {/* Methods Section */}
            <div className="mt-12">
              <SectionTitle 
                title="Nos méthodes d'intervention" 
                subtitle="Des approches adaptées pour un impact maximal"
                center
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {interventionMethods.map((method, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={method.image}
                        alt={method.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {method.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Topics Grid */}
            <div className="mt-20">
              <SectionTitle 
                title="Thématiques abordées" 
                subtitle="Nos campagnes couvrent les principaux enjeux de santé publique" 
                center
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {topics.map((topic, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={topic.image}
                        alt={topic.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Section */}
            <div className="mt-20 bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Notre impact</h2>
              <div className="prose prose-lg">
                <p>
                  Ces actions permettent d'<strong>éduquer, prévenir et sauver des vies</strong>, tout en renforçant la
                  <strong>responsabilisation communautaire</strong> face aux enjeux sanitaires.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">5,000+</div>
                  <div className="text-gray-600">Personnes sensibilisées</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">30+</div>
                  <div className="text-gray-600">Campagnes réalisées</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">100+</div>
                  <div className="text-gray-600">Relais formés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwarenessPage;