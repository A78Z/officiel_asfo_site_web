import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/contact/ContactForm';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = 'Contact | ASFO - Association de Santé et Formation';
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
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Vous avez des questions ou vous souhaitez vous engager avec ASFO? N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Nos Coordonnées" 
                subtitle="N'hésitez pas à nous contacter par téléphone, email ou via les réseaux sociaux" 
              />
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4 text-teal-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Adresse</h3>
                    <p className="text-gray-600">
                      Faculté de Médecine et Pharmacie<br />
                      Université Cheikh Anta Diop<br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4 text-teal-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+221123456789" className="hover:text-teal-600 transition-colors">
                        +221 12 345 67 89
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4 text-teal-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@asfosante.org" className="hover:text-teal-600 transition-colors">
                        contact@asfosante.org
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-4 text-teal-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi : 9h00 - 17h00<br />
                      Samedi : 9h00 - 13h00<br />
                      Dimanche : Fermé
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <WhatsAppButton 
                    phoneNumber="221123456789"
                    className="w-full justify-center"
                  />
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <SectionTitle 
                title="Envoyez-nous un Message" 
                subtitle="Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais" 
              />
              
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-20">
            <SectionTitle 
              title="Nous Localiser" 
              subtitle="Venez nous rencontrer à notre siège" 
              center
            />
            
            <div className="mt-8 rounded-lg overflow-hidden shadow-md h-96">
              <iframe
                title="ASFO Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.4752772785236!2d-17.4735394!3d14.7178957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1728489c3ef33%3A0x5d65f8be26e68e85!2sUniversit%C3%A9%20Cheikh%20Anta%20Diop%20de%20Dakar!5e0!3m2!1sfr!2s!4v1637337865416!5m2!1sfr!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;