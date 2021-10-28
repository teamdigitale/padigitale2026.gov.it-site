import React from 'react';
import { createUseStyles } from 'react-jss';
import content from '../../contents/home-page/home.yml';
import { HeroCarousel } from '../components/carousel/Carousel';
import labels from '../../contents/labels.yml';
import { NewsPreviewSection } from './home/NewsPreviewSection';
import { StrategySection } from './home/StrategySection';
import { BenefitSection } from './home/BenefitSection';
import { Form } from './home/Form';

const { headerTitle, headerSubtitle } = labels;

const useStyle = createUseStyles({
  mobileHeadText: {
    fontSize: '20px',
    lineHeight: '1.2',
    color: '#06c',
  },
});

const MobileHeadTitle = () => {
  const classes = useStyle();
  return (
    <div className="d-lg-none container">
      <h1 className={classes.mobileHeadText}>{headerTitle}</h1>
      <div className={classes.mobileHeadText}>{headerSubtitle}</div>
    </div>
  );
};

export const AssetsPage = () => (
  <>
    <div className="sr-only">
      <h1>{content.name}</h1>
    </div>
    <MobileHeadTitle />
    <HeroCarousel content={content.heroCarouselNews} />
    <Form />
    <StrategySection />
    <BenefitSection />
    <NewsPreviewSection />
  </>
);
