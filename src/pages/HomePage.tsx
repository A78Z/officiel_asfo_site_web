import React from 'react';
import Hero from '../components/home/Hero';
import Activities from '../components/home/Activities';
import ImpactStats from '../components/home/ImpactStats';
import LatestMission from '../components/home/LatestMission';
import JoinCTA from '../components/home/JoinCTA';
import NewsPreview from '../components/home/NewsPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Partners from '../components/home/Partners';

const HomePage: React.FC = () => {
  // Set page title
  React.useEffect(() => {
    document.title = 'ASFO - Association de Santé et Formation';
  }, []);

  return (
    <>
      <Hero />
      <Activities />
      <ImpactStats />
      <LatestMission />
      <TestimonialsSection />
      <NewsPreview />
      <Partners />
      <JoinCTA />
    </>
  );
};

export default HomePage;