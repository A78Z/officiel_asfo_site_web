import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  imageUrl: string;
  category: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  excerpt,
  date,
  imageUrl,
  category,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
      <Link to={`/news/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-medium px-2 py-1 rounded">
            {category}
          </div>
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        <Link to={`/news/${id}`} className="block">
          <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-teal-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link
          to={`/news/${id}`}
          className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
        >
          Lire plus
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

const NewsPreview: React.FC = () => {
  const news = [
    {
      id: "formation-premiers-secours",
      title: "Mamadou Thioye élu Président de l’Action Sanitaire pour le Fouta : Une Nouvelle Génération aux Commandes",
      excerpt: "C’est désormais officiel : Mamadou Thioye, doctorant en troisième année de médecine, vient d’être élu 20e président de l’Action Sanitaire pour le Fouta (ASFO).",
      date: "27 Avril 2025",
      imageUrl: "/president.jpg",
      category: "Président Asfo"
    },
    {
      id: "campagne-sensibilisation-covid",
      title: "MATAM SE PRÉPARE POUR LA 26e CAMPAGNE MÉDICALE DE L’ASFO SANTÉ",
      excerpt: "L’Action Sanitaire pour le Fouta (ASFO Santé) informe les habitants de la région de Matam et environs que les dépôts de dossiers sont officiellement...",
      date: "14 mars 2025",
      imageUrl: "/asfo-matam.jpeg",
      category: "dépôts-dossiers-Matam"
    },
    {
      id: "partenariat-oms",
      title: "Fierté et reconnaissance : le Dr Lamine Diallo couronné d'excellence !",
      excerpt: "C’est avec une immense joie et une grande fierté que nous adressons nos chaleureuses félicitations au Dr Lamine Diallo, président en exercice de l’ASFO Santé (Action Sanitaire pour le Fouta)... ",
      date: "14 mars 2025",
      imageUrl: "/dr-lamine-diallo.jpg",
      category: "Fierté et reconnaissance"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <SectionTitle 
            title="Actualités" 
            subtitle="Suivez les dernières nouvelles et événements d'ASFO"
            className="mb-0"
          />
          <div className="hidden md:block">
            <Button 
              variant="outline" 
              to="/news"
              icon={<ArrowRight size={16} />}
            >
              Voir toutes les actualités
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Button 
            variant="outline" 
            to="/news"
            icon={<ArrowRight size={16} />}
          >
            Voir toutes les actualités
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;