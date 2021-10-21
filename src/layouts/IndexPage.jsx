import React from 'react';
import content from '../../contents/home-page/home.yml';
import { HeroCarousel } from '../components/carousel/Carousel';
import { NewsPreviewSection } from './home/NewsPreviewSection';
import { StrategySection } from './home/StrategySection';
import { BenefitSection } from './home/BenefitSection';
// import { Form } from './home/Form';

export const IndexPage = () => (
  <>
    <div className="sr-only">
      <h1>{content.name}</h1>
    </div>
    {/* <Form /> */}
    <HeroCarousel content={content.heroCarousel} />
    <StrategySection />
    <BenefitSection />
    <NewsPreviewSection />
  </>
);
