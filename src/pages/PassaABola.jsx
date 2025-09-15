import React from 'react';
import { Header1 } from '../components/Header1';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { HighlightsSection } from '../components/HighlightsSection';
import { SocialSection } from '../components/SocialSection';
import { AboutSection } from '../components/AboutSection';

export const PassaABola = () => {
  return (
    <div>
      <Header1 />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HighlightsSection />
        <SocialSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};