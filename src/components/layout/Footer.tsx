import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

import WhatsAppButton from '../common/WhatsAppButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/share/1EuuqYDYVc/?mibextid=wwXIfr', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/asfo.sante?igsh=aXBpZGNsNzMycmJ2&utm_source=qr', label: 'Instagram', color: 'hover:bg-pink-600' },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-2.54v5.79a3.07 3.07 0 0 1-3.07 3.07 3.07 3.07 0 0 1-3.07-3.07V2H5.6v5.79a4.83 4.83 0 0 0 4.83 4.83c.24 0 .48 0 .72-.05v9.02h2.54v-9.02c.24.05.48.05.72.05a4.83 4.83 0 0 0 4.83-4.83V6.69h.35Z"/>
        </svg>
      ), 
      href: 'https://www.tiktok.com/@asfo.sante?_t=ZM-8xhjTZx6pUM&_r=1', 
      label: 'TikTok', 
      color: 'hover:bg-black' 
    },
    { icon: <Youtube size={20} />, href: 'https://youtube.com/@asfosante2751?si=lAoZeT1B4ztPWG6s', label: 'YouTube', color: 'hover:bg-red-600' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <div className="mb-4">
                         <img className="logo" src="../../logo.png" alt="" />

            </div>
            <p className="text-gray-300 mb-6">
            Fondée dans les années 2000 par des étudiants en santé, l'ASFO œuvre pour l'accès aux soins et la solidarité en milieu communautaire.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full flex items-center justify-center bg-gray-800 text-gray-300 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg mx-1`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <WhatsAppButton 
                phoneNumber="221123456789"
                variant="outline"
                className="w-full justify-center"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">Présentation de l'ASFO</Link>
              </li>
              <li>
                <Link to="/president-message" className="text-gray-300 hover:text-white transition-colors">Le mot du Président</Link>
              </li>
              <li>
                <Link to="/organization" className="text-gray-300 hover:text-white transition-colors">Notre organisation</Link>
              </li>
              <li>
                <Link to="/notre-equipe-medicale" className="text-gray-300 hover:text-white transition-colors">Notre Équipe Médicale</Link>
              </li>
              <li>
                <Link to="/archives" className="text-gray-300 hover:text-white transition-colors">Archives des Missions</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Notre Médiathèque</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/consultations" className="text-gray-300 hover:text-white transition-colors">Consultations medicales</Link>
              </li>
              <li>
                <Link to="/services/awareness" className="text-gray-300 hover:text-white transition-colors"> Campagnes de sensibilisation</Link>
              </li>
              <li>
                <Link to="/services/training" className="text-gray-300 hover:text-white transition-colors">Formations et renforcement</Link>
              </li>
              
              <li>
                <Link to="/services#consultations" className="text-gray-300 hover:text-white transition-colors">Rapport d'activité ASFO</Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-300 hover:text-white transition-colors">Rejoignez notre équipe</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-white transition-colors">Je fais un don maintenant</Link>
              </li>
              
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-teal-400">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-teal-400" />
                <a href="mailto:contact@asfosante.org" className="text-gray-300 hover:text-white transition-colors">contact@asfosante.org</a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1 text-teal-400" />
                <a href="tel:+221770581788" className="text-gray-300 hover:text-white transition-colors">+221 77 058 17 88</a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-teal-400 flex-shrink-0" />
                <span className="text-gray-300">Faculté de Médecine et Pharmacie, Dakar, Sénégal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm"> 
  &copy; {currentYear} ASFO - Tous droits réservés.

</p>

          <div className="mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors mr-4">
              Politique de confidentialité
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;