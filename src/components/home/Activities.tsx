import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../common/SectionTitle';

interface ActivityCardProps {
  image: string;
  title: string;
  description: string;
  year: string;
  category: string;
  stats?: {
    value: number;
    label: string;
  };
}

const ActivityCard: React.FC<ActivityCardProps> = ({ 
  image, 
  title, 
  description, 
  year,
  category,
  stats 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden rounded-lg transition-all duration-500 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative h-80 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-3 py-1 bg-teal-500 text-white text-sm font-medium rounded-full">
                {year}
              </span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                {category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/90 text-sm">{description}</p>
            {stats && (
              <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 inline-block">
                <span className="block text-2xl font-bold text-white">{stats.value}+</span>
                <span className="text-white/80 text-sm">{stats.label}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Activities: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const activities = [
    {
      image: "/slide-1.webp",
      title: "Consultations médicales",
      description: "Consultations générales et spécialisées pour les populations défavorisées du Sénégal.",
      year: "2024",
      category: "Consultation",
      stats: {
        value: 2200,
        label: "consultations réalisées"
      }
    },
    {
      image: "/slide2.webp",
      title: "Formation aux premiers secours",
      description: "Formation continue pour les professionnels de santé locaux et les enseignants.",
      year: "2024",
      category: "Formation",
      stats: {
        value: 500,
        label: "personnes formées"
      }
    },
    {
      image: "/slide3.webp",
      title: "Sensibilisation santé publique",
      description: "Campagnes d'éducation et de prévention sur des problèmes de santé publique importants.",
      year: "2024",
      category: "Sensibilisation",
      stats: {
        value: 2000,
        label: "personnes sensibilisées"
      }
    },
    {
      image: "/slide-4.webp",
      title: "Distribution de médicaments",
      description: "Distribution gratuite de médicaments essentiels aux populations vulnérables des localités d’Oréfondé, Ndiafane, Diorbiwol, Agnam, Asndéballa et Doumga Ouro Alpha.",
      year: "2024",
      category: "Distribution",
      stats: {
        value: 6000000,
        label: "Valeur des Médicaments"
      }
    }
  ];

  const years = ["all", "2024"];
  const categories = ["all", "Consultation", "Formation", "Sensibilisation", "Distribution"];

  const filteredActivities = activities.filter(activity => {
    const matchesYear = selectedYear === "all" || activity.year === selectedYear;
    const matchesCategory = selectedCategory === "all" || activity.category === selectedCategory;
    return matchesYear && matchesCategory;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nos Activités en Images"
          subtitle="Revivez en images nos plus belles actions solidaires depuis 2000, témoignant de notre engagement constant auprès des populations."
          center
        />

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">Toutes les années</option>
              {years.slice(1).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">Toutes les catégories</option>
              {categories.slice(1).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredActivities.map((activity, index) => (
            <ActivityCard
              key={index}
              {...activity}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-teal-50 text-teal-700 rounded-full">
            <span className="text-2xl font-bold mr-2">20,000+</span>
            <span>bénéficiaires de nos actions depuis 2000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;