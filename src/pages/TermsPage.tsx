import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const TermsPage: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = "Conditions d'utilisation | ASFO - Association de Santé et Formation";
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative py-16 bg-teal-600">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-teal-700 opacity-90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Conditions d'utilisation
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Les règles et conditions d'utilisation du site ASFO
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              Bienvenue sur le site officiel de l'ASFO (Association de Santé pour la Formation et l'Organisation). En accédant à notre plateforme, vous acceptez les conditions suivantes :
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">1. Utilisation responsable</h2>
            <p className="text-gray-600 mb-8">
              Le site est destiné à fournir des informations sur nos activités, nos missions de santé, et nos actions humanitaires. Toute utilisation abusive, frauduleuse ou malveillante est strictement interdite.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">2. Propriété intellectuelle</h2>
            <p className="text-gray-600 mb-8">
              Tous les contenus présents sur ce site (textes, images, logos, vidéos) sont la propriété exclusive d'ASFO ou utilisés avec autorisation. Il est interdit de les reproduire sans notre accord préalable.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">3. Protection des données</h2>
            <p className="text-gray-600 mb-8">
              Nous nous engageons à respecter la confidentialité des informations personnelles que vous nous transmettez, notamment via les formulaires de contact ou de candidature.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">4. Liens vers des sites tiers</h2>
            <p className="text-gray-600 mb-8">
              Le site peut contenir des liens vers des plateformes externes (WhatsApp, réseaux sociaux, etc.). ASFO n'est pas responsable du contenu ou des pratiques de ces sites.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">5. Modifications des conditions</h2>
            <p className="text-gray-600 mb-8">
              Ces conditions peuvent être mises à jour à tout moment. Il vous revient de les consulter régulièrement.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">6. Contact</h2>
            <p className="text-gray-600 mb-8">
              Pour toute question relative à ces conditions, veuillez nous contacter via le formulaire en ligne ou par WhatsApp.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mt-12">
              <p className="text-sm text-gray-600">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;