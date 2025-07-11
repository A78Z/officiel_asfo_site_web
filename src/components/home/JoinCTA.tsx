import React from 'react';
import Button from '../common/Button';
import { Heart } from 'lucide-react';

const JoinCTA: React.FC = () => {
  return (
    <section className="py-24 bg-teal-600 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-teal-500 rounded-full -top-48 -left-48 opacity-30"></div>
        <div className="absolute w-96 h-96 bg-teal-400 rounded-full bottom-0 right-0 translate-x-1/2 translate-y-1/2 opacity-20"></div>
        <div className="absolute w-64 h-64 bg-white rounded-full top-1/2 right-1/4 opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Heart className="mr-2 text-red-300" size={16} />
            <span>Rejoignez notre mouvement humanitaire</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Vous souhaitez faire une différence dans la vie des personnes vulnérables?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            ASFO recrute constamment des bénévoles passionnés pour nos missions humanitaires. 
            Que vous soyez professionnel de santé ou simplement motivé à aider, vous avez votre place parmi nous.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="accent" 
              size="large" 
              to="/join" 
            >
              Devenir bénévole
            </Button>
            
            <Button 
              variant="outline" 
              size="large" 
              to="/donate"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              Faire un don
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;