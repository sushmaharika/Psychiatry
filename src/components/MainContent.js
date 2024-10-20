import React from 'react';
import HeroSection from './HeroSection';
import FounderSection from './FounderSection';
import TreatmentFocus from './TreatmentFocus';
import Services from './Services';
import Testimonials from './Testimonials';

const MainContent = () => {
  return (
    <main>
      <HeroSection />
      <FounderSection />
      <TreatmentFocus />
      <Services />
      <Testimonials />
    </main>
  );
};

export default MainContent;
