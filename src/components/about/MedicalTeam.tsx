import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, Award, Crown, Star, Sparkles } from 'lucide-react';

interface PresidentProps {
  name: string;
  role: string;
  specialty: string;
  imageUrl: string;
  years: string;
  order: number;
}

const presidents: PresidentProps[] = [
  {
    name: "Dr. Bouna NDIAYE",
    role: "1er Président de l'ASFO",
    specialty: "Spécialiste en Santé Publique",
    imageUrl: "/bouna-ndiaye.webp",
    years: "2000 - 2001",
    order: 1
  },
  {
    name: "Dr. Moussa Baba DIALLO",
    role: "2e Président de l'ASFO",
    specialty: "Chirurgien orthopédiste, Traumatologue, Médecin légiste",
    imageUrl: "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg",
    years: "2001 - 2002",
    order: 2
  },
  {
    name: "Dr. Amadou Mamadou Alpha DIA",
    role: "3e Président de l'ASFO",
    specialty: "Pharmacien, Administrateur SOCAFI PHARMA",
    imageUrl: "https://images.pexels.com/photos/5722164/pexels-photo-5722164.jpeg",
    years: "2002 - 2003",
    order: 3
  },
  {
    name: "Pr. Samba NIANG",
    role: "4e Président de l'ASFO",
    specialty: "Pharmacien, Chef de service CHR St-Louis, Maître de conférences UFR2S/UGB",
    imageUrl: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg",
    years: "2003 - 2004",
    order: 4
  },
  {
    name: "Dr. Abou THIAM",
    role: "5e Président de l'ASFO",
    specialty: "Gériatre, Praticien Attaché Hôpital Cayenne",
    imageUrl: "https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg",
    years: "2004 - 2006",
    order: 5
  },
  {
    name: "Dr. Ibrahima DEME",
    role: "6e Président de l'ASFO",
    specialty: "Pharmacien, Installé à Doumga Ouro Alpha",
    imageUrl: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    years: "2006 - 2007",
    order: 6
  },
  {
    name: "Dr. Aliou BA",
    role: "7e Président de l'ASFO",
    specialty: "Pharmacien, Directeur DAHAICO PHARMACEUTICAL SARL",
    imageUrl: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    years: "2007 - 2008",
    order: 7
  },
  {
    name: "Dr. Abdourahmane TOURE",
    role: "8e Président de l'ASFO",
    specialty: "Chirurgien-dentiste, Médecin Chirurgien",
    imageUrl: "/abdourahmane.webp",
    years: "2008 - 2009",
    order: 8
  },
  {
    name: "Pr Oumar BASSOUM",
    role: "9e Président de l'ASFO",
    specialty: "Pharmacien, Épidémiologiste, Enseignant chercheur FMPO / ISED UCAD",
    imageUrl: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    years: "2009 - 2010",
    order: 9
  },
  {
    name: "Dr. Mamadou BA",
    role: "10e Président de l'ASFO",
    specialty: "Pharmacien, Responsable Exploitation DUOPHARMA",
    imageUrl: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    years: "2010 - 2011",
    order: 10
  },
  {
    name: "Dr. Bocar NDIAYE",
    role: "11e Président de l'ASFO",
    specialty: "Pharmacien, Responsable Exploitation DUOPHARMA",
    imageUrl: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    years: "2011 - 2013",
    order: 11
  },
  {
    name: "Dr. Moussa Yagouba SOW",
    role: "12e Président de l'ASFO",
    specialty: "Gynécologue – Obstétricien",
    imageUrl: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    years: "2013 - 2015",
    order: 12
  },
  {
    name: "Moussa SOW",
    role: "13e Président de l'ASFO",
    specialty: "Journaliste consultant en communication et Développement",
    imageUrl: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg",
    years: "2015 - 2016",
    order: 13
  },
  {
    name: "Dr Amadou NDIADE",
    role: "14e Président de l'ASFO",
    specialty: "Enseignant chercheur en histologie & embryologie, Université Alioune Diop Bambeye",
    imageUrl: "/amadou-ndiade.webp",
    years: "2016 - 2017",
    order: 14
  },
  {
    name: "Dr Oumou Khairy KANE",
    role: "15e Présidente de l'ASFO",
    specialty: "Pharmacienne - Épidémiologiste",
    imageUrl: "/dr-oumou.webp",
    years: "2017 - 2019",
    order: 15
  },
  {
    name: "Dr Dalahata BA",
    role: "16e Présidente de l'ASFO",
    specialty: "Gériatre, Gérontologue CHU FANN",
    imageUrl: "/dahalata-ba.webp",
    years: "2019 - 2020",
    order: 16
  },
  {
    name: "Dr Abou NDEMANE",
    role: "17e Président de l'ASFO",
    specialty: "Pharmacien",
    imageUrl: "/abdou-ndemqne.webp",
    years: "2020 - 2021",
    order: 17
  },
  {
    name: "Dr Abdoul Baba Bocoum",
    role: "18e Président de l'ASFO",
    specialty: "Dermatologue - Vénérélogue",
    imageUrl: "/bocoum.webp",
    years: "2021 - 2022",
    order: 18
  },
  {
    name: "Dr Abou TALLA",
    role: "19e Président de l'ASFO",
    specialty: "Médecin Physique et Rééducation (MPR), Président COMES 2025",
    imageUrl: "/abou-talla.webp",
    years: "2022 - 2023",
    order: 19
  },
  {
    name: "Dr Lamine DIALLO",
    role: "20e Président de l'ASFO",
    specialty: "Médecin Généraliste",
    imageUrl: "/lamine-diallo.webp",
    years: "2023 - 2024",
    order: 20
  },
  {
    name: "Dr Mamadou THIOYE",
    role: "21e Président de l'ASFO",
    specialty: "Médecin Généraliste",
    imageUrl: "/thioye.webp",
    years: "2024 - 2025",
    order: 21
  }
];

const PresidentCard: React.FC<PresidentProps> = ({ 
  name, 
  role, 
  specialty, 
  imageUrl, 
  years,
  order
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isCurrentPresident = order === 21;
  const isFounder = order === 1;

  return (
    <div 
      ref={ref}
      className={`group relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-700 transform hover:scale-105 hover:shadow-2xl ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${isCurrentPresident ? 'ring-4 ring-teal-400 ring-opacity-50' : ''}`}
      style={{ animationDelay: `${(order - 1) * 100}ms` }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Special Badges */}
      {isCurrentPresident && (
        <div className="absolute -top-2 -right-2 z-20">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <Crown className="text-white w-8 h-8" />
          </div>
        </div>
      )}
      
      {isFounder && (
        <div className="absolute -top-2 -left-2 z-20">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <Star className="text-white w-8 h-8" />
          </div>
        </div>
      )}

      {/* Header with gradient background */}
      <div className="relative h-56 bg-gradient-to-br from-teal-500 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
          <Sparkles size={24} className="text-white animate-pulse" />
        </div>
        
        {/* Profile Image */}
        <div className="absolute -bottom-16 inset-x-0 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full ring-6 ring-white shadow-2xl overflow-hidden transform group-hover:scale-110 transition-transform duration-500">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Order Badge */}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
              <span className="text-white font-bold text-sm">{order}</span>
            </div>
          </div>
        </div>

        {/* Years Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-teal-700 text-sm font-bold px-4 py-2 rounded-full shadow-lg border border-teal-100 flex items-center">
          <Calendar size={14} className="mr-2" />
          {years}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20 px-6 pb-8">
        {/* Name and Role */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
            {name}
          </h3>
          <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-700 text-sm font-medium rounded-full mb-3">
            <Award size={14} className="mr-2" />
            {role}
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {specialty}
          </p>
        </div>

        {/* Special Status */}
        {isCurrentPresident && (
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 text-sm font-semibold rounded-full border border-yellow-300">
              <Crown size={16} className="mr-2" />
              Président en exercice
            </div>
          </div>
        )}
        
        {isFounder && (
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 text-sm font-semibold rounded-full border border-purple-300">
              <Star size={16} className="mr-2" />
              Président fondateur
            </div>
          </div>
        )}

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      </div>
    </div>
  );
};

const MedicalTeam: React.FC = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-teal-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Section Header */}
      <div 
        ref={titleRef}
        className={`text-center mb-16 relative z-10 transition-all duration-1000 transform ${
          titleInView 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-teal-100 mb-6">
          <Award className="text-teal-600 mr-3" size={24} />
          <span className="text-teal-700 font-semibold text-lg">Héritage de Leadership</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-teal-700 to-gray-800 bg-clip-text text-transparent mb-6">
          Nos Présidents à travers l'Histoire
        </h2>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Depuis 2000, l'ASFO a été dirigée par des leaders visionnaires qui ont façonné son identité 
          et guidé sa mission humanitaire. Découvrez les 21 présidents qui ont marqué notre histoire.
        </p>
        
        {/* Decorative Line */}
        <div className="flex items-center justify-center mt-8">
          <div className="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent w-32"></div>
          <div className="w-3 h-3 bg-teal-400 rounded-full mx-4"></div>
          <div className="h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent w-32"></div>
        </div>
      </div>

      {/* Presidents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
        {presidents.map((president, index) => (
          <PresidentCard
            key={index}
            {...president}
          />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-20 text-center relative z-10">
        <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-teal-100">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
              <Sparkles className="text-white" size={20} />
            </div>
            <div className="text-left">
              <p className="text-gray-800 font-semibold text-lg">
                25 années de leadership dévoué
              </p>
              <p className="text-gray-600 text-sm">
                Au service de la santé communautaire
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalTeam;