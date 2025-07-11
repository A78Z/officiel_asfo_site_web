import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Users, Calendar, Heart, MapPin } from 'lucide-react';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  icon: React.ReactNode;
}

const StatCounter: React.FC<StatProps> = ({ 
  value, 
  label, 
  suffix = "", 
  duration = 2000,
  icon
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = value;
    
    if (!inView) return;
    
    // Get animation duration based on value size
    const totalDuration = duration;
    const incrementTime = totalDuration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [inView, value, duration]);

  return (
    <div 
      ref={ref} 
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105 text-center"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-50 flex items-center justify-center text-teal-600">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2 flex items-center justify-center">
        <span className="tabular-nums">{inView ? count : 0}</span>
        <span className="text-teal-500">{suffix}</span>
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
};

const ImpactStats: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Notre Impact au Sénégal
          </h2>
          <p className="text-lg text-gray-600">
            Depuis notre création, ASFO a touché la vie de milliers de personnes à travers le Sénégal grâce aux efforts de nos bénévoles dévoués.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCounter 
            value={8298} 
            label="Patients consultés" 
            suffix="+" 
            icon={<Heart size={32} />}
          />
          <StatCounter 
            value={23} 
            label="Missions accomplies" 
            icon={<Calendar size={32} />}
          />
          <StatCounter 
            value={500} 
            label="Bénévoles engagés" 
            suffix="+" 
            icon={<Users size={32} />}
          />
          <StatCounter 
            value={30} 
            label="Localités desservies" 
            icon={<MapPin size={32} />}
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;