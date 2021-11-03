import React from 'react';
import {
  heroMain,
  heroDigital,
  heroPnrr,
  opportunity,
  heroCarouselNews,
  homeCarousel,
  heroCarouselNewsTitle,
  support,
} from '../../contents/home-page/home.yml';
import { HeroImageBackground } from '../components/hero/HeroImageBackground';
import { HeroImageBackgroundFull } from '../components/hero/HeroImageBackgroundFull';
import { HeroImage } from '../components/hero/HeroImage';
import { HeroCarousel } from '../components/carousel/Carousel';
import { HomeCarousel } from '../components/carousel/HomeCarousel';
import { SupportSection } from './faq/SupportSection';
import { OpportunitySection } from './home/OpportunitySection';

export const IndexPage = () => (
  <>
    <HeroImageBackgroundFull
      category={heroMain.category}
      title={heroMain.title}
      body={heroMain.body}
      image="hero-home.png"
      imageMobile="hero-home-mobile.png"
      overlap={true}
    />
    <HomeCarousel content={homeCarousel} />
    <OpportunitySection title={opportunity.title} list={opportunity.cards} />
    <HeroImage
      category={heroPnrr.category}
      title={heroPnrr.title}
      body={heroPnrr.body}
      firstButtonLabel={heroPnrr.firstButtonLabel}
      imageUrl="/assets/placeholder.svg"
      imageAlt="placeholder"
      firstButtonHref="#"
      secondButtonLabel={heroPnrr.secondButtonLabel}
      secondButtonHref="#"
    />
    <HeroImageBackground
      title={heroDigital.title}
      body={heroDigital.body}
      theme="bg-blue"
      image="italy-blue.png"
      firstButtonLabel={heroDigital.firstButtonLabel}
      firstButtonClass="btn-light"
      firstButtonHref="#"
      overlap={true}
    />
    <HeroCarousel content={heroCarouselNews} title={heroCarouselNewsTitle} />
    <SupportSection supportList={support.cards} title={support.title} buttonLabel={support.buttonLabel} />
  </>
);
