import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/common/SectionTitle';
import { Search, Calendar, ArrowRight } from 'lucide-react';

// Sample news data
const newsItems = [
  {
    id: "formation-premiers-secours",
    title: "Mamadou Thioye élu Président de l’Action Sanitaire pour le Fouta : Une Nouvelle Génération aux Commandes",
    excerpt: "Un vent de renouveau souffle sur la santé communautaire au Fouta",
    content: "✨ Un vent de renouveau souffle sur la santé communautaire au Fouta\n C’est désormais officiel : Mamadou Thioye, doctorant en troisième année de médecine, vient d’être élu 20e président de l’Action Sanitaire pour le Fouta (ASF0). Un choix qui incarne à la fois la relève, la compétence et l’engagement au service des populations.\nSa nomination n’est pas passée inaperçue. À la croisée entre jeunesse ambitieuse et rigueur professionnelle, Mamadou Thioye suscite un véritable engouement au sein des acteurs sanitaires et des citoyens. “Félicitations et bon vent à lui !”, peut-on lire dans les premières réactions chaleureuses qui saluent son élection. Une nouvelle dynamique semble se dessiner pour cette organisation phare, pilier de la santé communautaire dans la région du Fouta.\n💡 Une vision tournée vers l’avenir\nLe parcours de Mamadou Thioye, à la fois académique et engagé sur le terrain, fait naître de nombreux espoirs. Son profil de jeune médecin en devenir est perçu comme un atout pour moderniser les approches, renforcer les campagnes de sensibilisation, et innover dans l'accès aux soins.\nAccompagné d’une nouvelle équipe pleine d'énergie et de compétences variées, le nouveau président se fixe pour ambition de poursuivre les projets initiés tout en lançant de nouveaux programmes adaptés aux réalités locales, notamment en matière de prévention, de couverture médicale et d’éducation sanitaire.\n🙏 Un hommage appuyé au président sortant : Dr Lamine Diallo\nCe passage de témoin est également l’occasion de saluer le travail remarquable du président sortant, Dr Lamine Diallo, et de toute son équipe. Leur mandat a été marqué par un engagement sans faille et des résultats concrets qui ont contribué à améliorer l’état de santé des populations locales.\nDes campagnes de vaccination réussies, la distribution de matériel médical, ou encore les actions de terrain en période de crise ont permis à l’ASF de renforcer sa crédibilité et son ancrage dans la communauté. “Nous tenons à remercier chaleureusement Dr Diallo pour sa vision, son leadership et son dévouement”, peut-on lire dans la déclaration officielle.\n🔍 Et maintenant ?\nAvec cette nouvelle présidence, les attentes sont grandes. Quels seront les premiers chantiers ? Comment mobiliser les jeunes professionnels de santé ? Quel rôle pour les partenariats locaux et internationaux ? Autant de questions qui trouveront réponse dans les mois à venir.`\nCe qui est certain, c’est que l’Action Sanitaire pour le Fouta entre dans une nouvelle phase de son histoire, avec une gouvernance rajeunie, ancrée dans les valeurs de solidarité, d’excellence et d’innovation.\n🗣️ “Nous croyons en cette jeunesse compétente, ambitieuse et solidaire. Mamadou Thioye incarne cette promesse. Que son mandat soit marqué par des avancées majeures pour la santé au Fouta.”",
    date: "27 Avril 2025",
    author: "Dr. Moussa Sow",
    category: "Président Asfo",
    imageUrl: "/president.jpg",
    tags: ["president", "asfo", "santé", "fouta"]
  },
  {
    id: "campagne-sensibilisation-covid",
    title: "MATAM SE PRÉPARE POUR LA 26e CAMPAGNE MÉDICALE DE L’ASFO SANTÉ",
    excerpt: "Dépôt de candidatures ouvert du 17 mars au 17 avril 2025",
    content: "L’Action Sanitaire pour le Fouta (ASFO Santé) informe avec enthousiasme l’ensemble des populations de la région de Matam du lancement officiel des dépôts de dossiers en vue de l’organisation de sa 26e grande campagne médicale. Cet événement annuel, profondément ancré dans la vie sociale de la région, vise à rapprocher les soins de santé des populations, surtout celles vivant dans les zones rurales ou à accès difficile.\n🎯 Un rendez-vous de solidarité et de santé\nDepuis sa création, ASFO Santé s’est engagée à offrir des prestations médicales de qualité, gratuites et accessibles à tous. La campagne réunit chaque année médecins, spécialistes, infirmiers, pharmaciens et bénévoles autour d’un même objectif : soulager, soigner et sensibiliser.\nLes bénéficiaires ont accès à des consultations médicales générales et spécialisées, à la délivrance gratuite de médicaments, ainsi qu’à des séances d’éducation sanitaire. Certaines éditions ont même permis la réalisation de petites interventions chirurgicales, selon les besoins recensés sur le terrain.\n📤 Modalités de participation\nToutes les collectivités locales, associations communautaires, centres de santé, daara, groupements de femmes ou de jeunes peuvent soumettre un dossier de candidature pour accueillir l’équipe médicale. Ce dossier doit démontrer les besoins de la localité, les capacités d’accueil, ainsi que la motivation de la communauté à participer activement à l’événement.\n🎯 Nouveauté cette année : vous pouvez désormais soumettre votre candidature directement via le site web de l’ASFO Santé, en cliquant sur le bouton « Candidature » prévu à cet effet.\n📥 Pour ceux qui préfèrent, les dossiers peuvent toujours être envoyés par e-mail à : \n👉 asfosante@gmail.com\n🗓 Dates à retenir :\n➡️ Du 17 mars au 17 avril 2025\n📞 Contacts utiles pour toute information complémentaire :\n📱 77 393 15 72 / 77 481 89 50\n🤝 Engagez votre communauté\nLes responsables d’ASFO Santé encouragent toutes les structures à se mobiliser dès maintenant pour saisir cette chance unique de renforcer l’accès aux soins pour tous. La santé est un droit, et cette campagne en est une belle démonstration.\nASFO Santé, au service d’un Fouta en bonne santé.",
    date: "14 mars 2025",
    author: "Aminata Diallo",
    category: "Lancement officiel des dépôts de dossiers",
    imageUrl: "/asfo-matam.jpeg",
    tags: ["Info", "santé", "dépôts-dossiers", "Matam"]
  },
  {
    id: "partenariat-oms",
    title: "Fierté et reconnaissance : le Dr Lamine Diallo couronné d'excellence !",
    excerpt: "Fierté et reconnaissance : le Dr Lamine Diallo couronné d'excellence !",
    content: "C’est avec une immense joie et une grande fierté que nous adressons nos chaleureuses félicitations au Dr Lamine Diallo, président en exercice de l’ASFO Santé (Action Sanitaire pour le Fouta), qui vient de soutenir avec brio sa thèse de doctorat d’État en médecine. Une soutenance marquée par la rigueur scientifique et la clarté de ses travaux, couronnée par la mention Très Honorable, l’une des plus prestigieuses distinctions dans le domaine.\n🎓 Ce parcours remarquable témoigne non seulement de ses compétences académiques, mais aussi de son dévouement profond pour la santé communautaire, particulièrement au Fouta, où il s’est illustré ces dernières années par une action de terrain constante et un leadership inspirant.\nSous sa présidence, l’ASFO Santé a franchi un cap décisif dans la mise en œuvre de projets de prévention, de sensibilisation et d’accès aux soins pour les populations rurales. Son engagement, sa vision et sa proximité avec les communautés locales ont permis d’enregistrer des avancées concrètes dans plusieurs zones souvent délaissées.\n🙏 En plus de son excellence académique, Dr Diallo est reconnu pour ses qualités humaines : disponibilité, écoute, sens de la responsabilité et esprit de service. Il a su fédérer autour de lui une équipe dynamique et engagée, à laquelle nous rendons également hommage.\nAujourd’hui, alors qu’il franchit une étape majeure dans sa carrière, nous lui souhaitons un avenir professionnel riche en opportunités, en réussites et en impact positif. Son parcours est un exemple inspirant pour la jeunesse du Fouta et bien au-delà.\n👏 Merci, Dr Lamine Diallo, pour votre engagement sans relâche au service des autres. L’Action Sanitaire pour le Fouta vous renouvelle toute sa reconnaissance et vous accompagne de ses meilleurs vœux pour la suite.",
    date: "14 mars 2025",
    author: "Dr. Ibrahima Diop",
    category: "Fierté et reconnaissance",
    imageUrl: "/dr-lamine-diallo.jpg",
    tags: ["FiertéDuFouta", "DrLamineDiallo", "SantéCommunautaire", "ASFOSanté"]
  },
  {
    id: "mission-medicale-kedougou",
    title: "Fierté Foutanienne : L’Action Sanitaire pour le Fouta Félicite Ses Lauréats au Concours des Internes des Hôpitaux du Sénégal",
    excerpt: "C’est avec une immense fierté que l’Action Sanitaire pour le Fouta adresse ses plus vives félicitations à ses membres brillamment admis au concours de recrutement des internes des hôpitaux du Sénégal.",
    content: "C’est avec une immense fierté que l’Action Sanitaire pour le Fouta adresse ses plus vives félicitations à ses membres brillamment admis au concours de recrutement des internes des hôpitaux du Sénégal.",
    date: "20 décembre 2023",
    author: "Dr. Fatou Ndiaye",
    category: "Concours des Internes des Hôpitaux du Sénégal",
    imageUrl: "/thiam.jpg",
    tags:  ["Félicitations ", "ActionSanitaireFouta", "MédecineSénégal", "SantéCommunautaire"]
  },
  {
    id: "collecte-fonds-2023",
    title: "Félicitations à Dr Dalahata Ba : Une Réussite Exemplaire et une Carrière Prometteuse !",
    excerpt: "Nous tenons à adresser nos plus sincères félicitations à Dr Dalahata Ba pour la soutenance de sa thèse de doctorat d’État en médecine couronnée de la plus haute mention.",
    content: "Nous tenons à adresser nos plus sincères félicitations à Dr Dalahata Ba pour la soutenance de sa thèse de doctorat d’État en médecine couronnée de la plus haute mention.",
    date: "13 décembre 2024",
    author: "Mme Fatou Ndiaye",
    category: "Félicitations à Dr Dalahata Ba",
    imageUrl: "/dr-dalahata-ba.jpg",
    tags: ["FélicitationsDrDalahataBa", "ExcellenceAcadémique", "ActionSanitairePourLeFouta", "SantéEtEngagement"]
  },
  {
    id: "formation-sage-femmes",
    title: "Félicitations au Pr Oumar BASSOUM : Un Major qui fait rayonner la Médecine et l’Action Sanitaire pour le Fouta",
    excerpt: "L’Action Sanitaire pour le Fouta (ASFO) tient à féliciter chaleureusement le Pr Oumar BASSOUM, qui a brillamment réussi au concours d’agrégation de Médecine, décrochant ainsi le titre de Major.",
    content: "L’Action Sanitaire pour le Fouta (ASFO) tient à féliciter chaleureusement le Pr Oumar BASSOUM, qui a brillamment réussi au concours d’agrégation de Médecine, décrochant ainsi le titre de Major.",
    date: "11 novembre 2024",
    author: "Dr. Aminata Diallo",
    category: "Félicitations au Pr Oumar BASSOUM",
    imageUrl: "/pr-oumar-bassoum.jpg",
    tags: ["PrOumarBASSOUM", "AgrégationMédecine", "FiertéFouta", "ActionSanitaire"]
  }
];

const NewsPage: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = 'Actualités | ASFO - Association de Santé et Formation';
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  
  // Get unique categories
  const categories = Array.from(new Set(newsItems.map(item => item.category))).sort();
  
  // Filter news based on search term and selected category
  const filteredNews = newsItems.filter(item => {
    const matchesSearch = searchTerm === "" || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "" || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-20 bg-teal-600">
        <div className="absolute inset-0 z-0">
          <img 
            src="/asfo-news-barre.jpg" 
            alt="ASFO news" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-700/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Actualités
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Restez informé des dernières activités, événements et réalisations d'ASFO au Sénégal.
            </p>
          </div>
        </div>
      </div>

      {/* News Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos Dernières Actualités" 
            subtitle="Découvrez les dernières nouvelles et activités d'ASFO" 
          />
          
          {/* Search and Filters */}
          <div className="mb-12 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher dans les actualités..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="md:w-64">
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Toutes les catégories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* News Grid */}
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <Link to={`/news/${item.id}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-medium px-2 py-1 rounded">
                        {item.category}
                      </div>
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.date}</span>
                    </div>
                    <Link to={`/news/${item.id}`} className="block">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-teal-600 transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/news/${item.id}`}
                      className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                    >
                      Lire plus
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                Aucune actualité ne correspond à votre recherche. Essayez avec d'autres termes ou filtres.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;