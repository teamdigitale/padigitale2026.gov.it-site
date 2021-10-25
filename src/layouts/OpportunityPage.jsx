import React from 'react';
import content from '../../contents/home-page/home.yml';
import opportunityContent from '../../contents/opportunity-page/opportunity.yml';
import { BeneficiariesSection } from './opportunity/BeneficiariesSection';
import { SupportSection } from './faq/SupportSection';
import { HeroImageBackground } from '../components/hero/HeroImageBackground';

const { heroDigital, support } = content;
const { heroOpportunity } = opportunityContent;

export const OpportunityPage = () => (
  <>
    <HeroImageBackground
      title={heroOpportunity.title}
      body={heroOpportunity.body}
      image="opportunity-hero.png"
      theme="bg-white flex-xs-column-reverse"
    />
    <BeneficiariesSection />
    <SupportSection
      supportList={support.cards}
      title={support.title}
      buttonLabel={support.buttonLabel}
    />
  </>
);
