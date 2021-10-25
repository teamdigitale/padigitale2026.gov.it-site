import React from 'react';
import content from '../../contents/home-page/home.yml';
import { BeneficiariesSection } from './opportunity/BeneficiariesSection';
import { SupportSection } from './faq/SupportSection';
import { HeroImageBackground } from '../components/hero/HeroImageBackground';

const { heroDigital, support } = content;

export const OpportunityPage = () => (
  <>
    <HeroImageBackground
      title={heroDigital.title}
      body={heroDigital.body}
      image="opportunity-hero.png"
      theme="bg-white"
    />
    <BeneficiariesSection />
    <SupportSection
      supportList={support.cards}
      title={support.title}
      buttonLabel={support.buttonLabel}
    />
  </>
);
