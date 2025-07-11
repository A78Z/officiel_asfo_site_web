import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const PrivacyPage: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = 'Politique de confidentialité | ASFO - Association de Santé et Formation';
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
              Politique de confidentialité
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Découvrez comment nous protégeons vos données personnelles
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              Chez ASFO, nous attachons une grande importance à la confidentialité de vos données personnelles. Cette politique de confidentialité a pour but de vous informer sur la manière dont nous collectons, utilisons et protégeons vos informations lorsque vous visitez notre site ou interagissez avec nos services.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">1. Données collectées</h2>
            <p className="text-gray-600 mb-8">
              Nous pouvons collecter des informations personnelles telles que votre nom, adresse e-mail, numéro de téléphone ou tout autre renseignement que vous fournissez volontairement via nos formulaires (contact, dons, candidature, etc.).
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">2. Utilisation des données</h2>
            <p className="text-gray-600 mb-8">
              Les informations collectées sont utilisées exclusivement dans le cadre de nos activités : traitement des demandes, envoi d'informations, gestion des candidatures ou communications internes. Aucune donnée n'est vendue ou partagée avec des tiers à des fins commerciales.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">3. Sécurité</h2>
            <p className="text-gray-600 mb-8">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé ou toute divulgation.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">4. Cookies</h2>
            <p className="text-gray-600 mb-8">
              Notre site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez gérer ces cookies via les paramètres de votre navigateur.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">5. Vos droits</h2>
            <p className="text-gray-600 mb-8">
              Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour toute demande, veuillez nous contacter à l'adresse suivante : contact@asfosante.org
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">6. Modifications</h2>
            <p className="text-gray-600 mb-8">
              Cette politique peut être mise à jour à tout moment. La version la plus récente sera toujours disponible sur cette page.
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

export default PrivacyPage;