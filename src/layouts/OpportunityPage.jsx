import React from 'react';
import { Container, Row, Col, Hero } from 'design-react-kit';
import content from '../../contents/home-page/home.yml';
import { SupportSection } from './faq/SupportSection';
import { HeroImageBackground } from '../components/hero/HeroImageBackground';

const {
  heroDigital,
  support,
} = content;

export const OpportunityPage = () => (
  <>
    <HeroImageBackground
      title={heroDigital.title}
      body={heroDigital.body}
      image="opportunity-hero.png"
      theme="bg-white"
    />
    <SupportSection
      supportList={support.cards}
      title={support.title}
      buttonLabel={support.buttonLabel}
    />
  </>
);
