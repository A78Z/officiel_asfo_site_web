import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X as MenuX, Facebook, Instagram, Youtube, Linkedin, MessageCircle, Twitter } from 'lucide-react';
import CandidatureModal from '../home/CandidatureModal';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'ACCUEIL', path: '/' },
    { name: 'ASFO', path: '/about' },
    // { 
    //   name: 'Nos Actions & Engagements', 
    //   path: '/services',
    //   subLinks: [
    //     { name: 'Consultations médicales', path: '/services/consultations' },
    //     { name: 'Actions de sensibilisation', path: '/services/awareness' },
    //     { name: 'Formations', path: '/services/training' },
    //   ]
    // },
    { name: 'ARCHIVES', path: '/archives' },
    { name: 'MÉDIATHÈQUE', path: '/gallery' },
    { name: 'ACTUALITÉS', path: '/news' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: 'https://www.facebook.com/share/1EuuqYDYVc/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/asfo.sante?igsh=aXBpZGNsNzMycmJ2&utm_source=qr', label: 'Instagram' },
    { icon: <Youtube size={18} />, href: 'https://youtube.com/@asfosante2751?si=lAoZeT1B4ztPWG6s', label: 'YouTube' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <MessageCircle size={18} />, href: 'https://wa.me/1234567890', label: 'WhatsApp' }
  ];

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="z-10">
            {/* <Logo size={isScrolled ? 'small' : 'normal'} /> */}
            <img className="logo" src="../../logo.png" alt="" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${location.pathname === link.path
                        ? 'text-teal-600'
                        : 'text-gray-700 hover:text-teal-500'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                  
                  {/* {link.subLinks && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )} */}
                </div>
              ))}
            </nav>

            {/* Social Media Icons - Desktop */}
            <div className="hidden lg:flex items-center space-x-2 px-4 border-l border-gray-200">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 text-teal-600 hover:text-teal-700 font-medium transition-colors relative group"
            >
              <span className="relative z-10">Soumettre une candidature</span>
              <span className="absolute inset-0 bg-teal-50 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
            
            <Link
              to="/donate"
              className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              Faire un don
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-10 text-gray-700"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isOpen ? <MenuX size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <div
            className={`fixed inset-0 bg-white z-0 transform ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out md:hidden`}
          >
            <div className="flex flex-col h-full justify-center items-center">
              <div className="space-y-5">
                {navLinks.map((link) => (
                  <div key={link.name} className="text-center">
                    <Link
                      to={link.path}
                      className={`text-xl font-medium ${
                        location.pathname === link.path
                          ? 'text-teal-600'
                          : 'text-gray-700'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}

                {/* Social Media Icons - Mobile */}
                <div className="flex justify-center space-x-4 pt-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <div className="pt-6 space-y-4">
                  <button
                    onClick={() => {
                      setIsModalOpen(true);
                      setIsOpen(false);
                    }}
                    className="w-full px-6 py-3 text-teal-600 bg-teal-50 rounded-md text-lg hover:bg-teal-100 transition-colors"
                  >
                    Soumettre une candidature
                  </button>
                  <Link
                    to="/donate"
                    className="block w-full px-6 py-3 rounded-md bg-red-500 text-white text-lg hover:bg-red-600 transition-colors text-center"
                  >
                    Faire un don
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CandidatureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Header;