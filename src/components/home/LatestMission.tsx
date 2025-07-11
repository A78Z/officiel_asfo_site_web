import React from 'react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { ChevronRight, Calendar, MapPin, Users } from 'lucide-react';

const LatestMission: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Notre Dernière Mission" 
          subtitle="Découvrez notre mission la plus récente et son impact dans les communautés locales"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/last-mission.webp" 
                alt="Bénévoles médicaux au Sénégal" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="inline-flex items-center px-3 py-1 bg-teal-500 text-white text-sm font-medium rounded-full">
                  ASFO 2024
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Mission menée dans six villages du département de Podor - Septembre 2024
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-600">
                <Calendar size={20} className="mr-3 text-teal-600" />
                <span>Du 5 au 11 septembre 2024</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin size={20} className="mr-3 text-teal-600" />
                <span>Oréfondé - Ndiafane - Diorbiwol - Agnam - Asndéballa - Doumga Ouro Alpha</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users size={20} className="mr-3 text-teal-600" />
                <span> 105 professionnels, 9083 patients consultés, 419 enfants circoncis, <br/>5 accouchements réalisés</span>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
            Du 5 au 11 septembre 2024, l’ASFO a mené une campagne médicale dans 6 villages du département de Podor sur le thème : « Santé mentale : état des lieux, défis et perspectives ». 105 professionnels mobilisés, 9083 consultations, 419 circoncisions, 5 accouchements, soins dentaires, échographies, ECG, formations, dépistages, et unités mobiles (PNT, MSAS, SAMU) ont permis une prise en charge multidisciplinaire et communautaire.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-teal-600">9083</p>
                <p className="text-sm text-gray-700">Consultations</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-teal-600">105</p>
                <p className="text-sm text-gray-700">Spécialités</p>
              </div>
            </div>

            <Button 
              variant="primary" 
              to="/archives"
              icon={<ChevronRight size={18} />}
            >
              Voir plus de détails
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestMission;