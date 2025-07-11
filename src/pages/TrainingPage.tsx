import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const TrainingPage: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = 'ASFO | Action Sanitaire pour le Fouta';
  }, []);

  const trainingTypes = [
    {
      title: "Soins médicaux de base",
      description: "Formation aux techniques de soins essentiels et protocoles médicaux standards",
      image: "/soins-medicaux-base.webp"
    },
    {
      title: "Premiers secours",
      description: "Formation aux gestes qui sauvent pour les enseignants et relais communautaires",
      image: "/secours.webp"
    },
    {
      title: "Stages pratiques",
      description: "Immersion professionnelle pour les étudiants en santé",
      image: "/stages-pratiques.webp"
    },
    {
      title: "Mise à niveau",
      description: "Ateliers de perfectionnement pour le personnel médical local",
      image: "/mise-niveau.webp"
    },
    {
      title: "Spécialisation",
      description: "Formation approfondie dans des domaines médicaux spécifiques",
      image: "/specialisation.webp"
    },
    {
      title: "Formation continue",
      description: "Programme de développement professionnel continu",
      image: "/formation-continue.webp"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-teal-600">
        <div className="absolute inset-0 z-0">
          <img 
            src="/barre-formation.webp" 
            alt="Formation médicale ASFO" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Formations et renforcement des capacités
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Développer l'expertise locale pour un impact durable sur la santé communautaire.
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
                ASFO s'engage dans la <strong>formation continue des professionnels de santé</strong> et le 
                <strong>renforcement des capacités des acteurs locaux</strong>. Notre programme de formation
                vise à améliorer durablement la qualité des soins dans les zones rurales.
              </p>
            </div>

            {/* Training Types Grid */}
            <div className="mt-20">
              <SectionTitle 
                title="Nos programmes de formation" 
                subtitle="Des formations adaptées aux besoins spécifiques des communautés" 
                center
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {trainingTypes.map((training, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={training.image}
                        alt={training.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                        {training.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {training.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectives Section */}
            <div className="mt-20 bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Nos objectifs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Amélioration des soins</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></span>
                      <span>Renforcement des compétences cliniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></span>
                      <span>Mise à jour des connaissances médicales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></span>
                      <span>Standardisation des pratiques</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Impact durable</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></span>
                      <span>Autonomisation des structures locales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></span>
                      <span>Transfert de compétences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-2"></span>
                      <span>Pérennisation des actions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="mt-20 bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Notre impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                  <div className="text-gray-600">Professionnels formés</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                  <div className="text-gray-600">Sessions organisées</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">20+</div>
                  <div className="text-gray-600">Localités couvertes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;