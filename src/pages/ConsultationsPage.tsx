import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const ConsultationsPage: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = 'ASFO | Action Sanitaire pour le Fouta';
  }, []);

  const specialties = [
    {
      title: "Médecine générale",
      description: "Consultations et soins pour tous les patients de 15 à 65",
      image: "/medecin-general.webp"
    },
    {
      title: "Pédiatrie",
      description: "Soins spécialisés pour enfants âgés de 0 à 15 ans  ",
      image: "/pediatrie.webp"
    },
    {
      title: "Ophtalmologie",
      description: "PEC des maladies de l’œil et des troubles de la vision",
      image: "/ophtalmologie.webp"
    },
    {
      title: "Psychiatrie",
      description: "Prise en charge de la santé mentale",
      image: "/psychiatrie.webp"
    },
    {
      title: "Chirurgie dentaire",
      description: "PEC  des affections bucco-dentaires",
      image: "/dentaire.webp"
    },
    {
      title: "Gériatrie",
      description: "Soins adaptés aux personnes âgées",
      image: "/geriatrie.webp"
    },
    {
      title: "Gynéco-Obstétrique",
      description: "Santé maternelle et de la reproduction",
      image: "/gynecologie.webp"
    },
    {
      title: "Circoncisions",
      description: "Circoncision dans un cadre médical",
      image: "/circoncision.webp"
    },
    {
      title: "Biologie",
      description: "Aide au Depistage et diagnostic",
      image: "/biologie.webp"
    },
    {
      title: "Imagerie",
      description: "Orientation et diagnostic ",
      image: "/imagerie.webp"
    },
    {
      title: "Santé communautaire",
      description: "Promotion de la santé (nutritionnelle...) ",
      image: "/sante-communautaire.webp"
    },
    {
      title: "Sensibilisation",
      description: "Présentation à la place publique pour mieux sensibiliser sur les maladies en langue locale",
      image: "/sensibilisation.webp"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-teal-600">
        <div className="absolute inset-0 z-0">
          <img 
            src="/barre.webp" 
            alt="Consultation médicale ASFO" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Consultations médicales
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Des soins de qualité accessibles à tous grâce à nos caravanes médicales gratuites à travers le Sénégal.
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
                Depuis plus de deux décennies, <strong>ASFO</strong> organise des <strong>caravanes médicales gratuites</strong> à travers plusieurs localités du Sénégal.
                Ces actions permettent d'offrir un accès aux soins de santé à des milliers de personnes issues de zones rurales ou défavorisées.
              </p>
            </div>

            {/* Specialties Grid */}
            <div className="mt-20">
              <SectionTitle 
                title="Les activités de la campagne medicale " 
                subtitle="Une équipe pluridisciplinaire pour des soins complets" 
                center
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {specialties.map((specialty, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="h-48 overflow-hidden">
                      <img
                        src={specialty.image}
                        alt={specialty.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 text-center mb-3">
                        {specialty.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {specialty.description}
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
                  À travers ces missions, nous affirmons notre volonté de <strong>servir la nation</strong>, de renforcer la solidarité et de 
                  promouvoir l'<strong>engagement et la participation citoyens</strong>. Le soutien de nos partenaires, alliés à 
                  l'implication des structures locales, nous permet d'agir efficacement <strong>contre les inégalités en matière de santé</strong>
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">250+</div>
                  <div className="text-gray-600">Patients consultés</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">192+</div>
                  <div className="text-gray-600">Localités sillonnées</div>
                </div>
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">600+</div>
                  <div className="text-gray-600">Acteurs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationsPage;