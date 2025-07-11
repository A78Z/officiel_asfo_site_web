import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import { useInView } from 'react-intersection-observer';
import CandidatureModal from './CandidatureModal';

const partners = [
  {
    name: "Université Cheikh Anta Diop de Dakar",
    logo: "/Logo_ucad_2.png",
    category: "UCAD"
  },
  {
    name: "Ministère de la Santé",
    logo: "/msascoro.jpg",
    category: "Public"
  },
  {
    name: "Université Gaston Berger de Saint-Louis",
    logo: "/logo-ugb.jpg",
    category: "UGB"
  },
  {
    name: "FMPOS - Faculté de médecine, de pharmacie et d'odontologie",
    logo: "/logo-medecine.jpg",
    category: "FMPOS"
  },
  {
    name: "AECDS Association Des Chirurgiens Dentistes Du Sénégal ",
    logo: "/AECDS.jpg",
    category: "AECDS"
  },
  {
    name: "Université Assane Seck de Ziguinchor",
    logo: "/zigu.jpg",
    category: "Public"
  },
  {
    name: "Croix-Rouge Sénégalaise",
    logo: "/logo-croix-rouge.jpg",
    category: "ONG"
  },
  {
    name: "Université Iba Der Thiam de Thiès",
    logo: "/logo-thies.png",
    category: "THIES"
  }
];


const Partners: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nos Partenaires & Réseaux"
          subtitle="Depuis sa création, ASFO collabore avec de nombreux partenaires engagés dans la promotion de la santé, l'action humanitaire et l'encadrement étudiant."
          center
        />

        <div 
          ref={ref}
          className="relative overflow-hidden"
        >
          {/* Gradient overlays for infinite scroll effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Auto-scrolling partners grid */}
          <div className="flex space-x-8 animate-[scroll_30s_linear_infinite]">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index}
                className="flex-none w-48 h-48 relative group"
              >
                <div className="absolute inset-0 bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span className="text-white text-sm font-medium block">{partner.name}</span>
                      <span className="text-white/80 text-xs">{partner.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Soumettre une candidature
          </button>
        </div>

        <CandidatureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Partners;