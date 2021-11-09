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
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import { SupportSection } from './faq/SupportSection';
import { OpportunitySection } from './home/OpportunitySection';

const { title: seoTitle, description: seoDescription } = seo.homePage;

export const IndexPage = () => (
  <>
    <SEO title={seoTitle} description={seoDescription} />
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
      imageUrl="/assets/come-funziona-home.svg"
      imageAlt=""
      firstButtonHref="/come-funziona"
      firstButtonLabel={heroPnrr.firstButtonLabel}
      firstButtonAriaLabel={heroPnrr.firstButtonAriaLabel}
      secondButtonLabel={heroPnrr.secondButtonLabel}
      secondButtonAriaLabel={heroPnrr.secondButtonAriaLabel}
      secondButtonHref="/come-funziona"
    />
    <HeroImageBackground
      title={heroDigital.title}
      body={heroDigital.body}
      theme="bg-blue"
      image="italy-blue.png"
      firstButtonLabel={heroDigital.firstButtonLabel}
      firstButtonAriaLabel={heroDigital.firstButtonAriaLabel}
      firstButtonClass="btn-light"
      firstButtonHref={heroDigital.linkTo}
      overlap={true}
    />
    <HeroCarousel content={heroCarouselNews} title={heroCarouselNewsTitle} />
    <SupportSection supportList={support.cards} title={support.title} buttonLabel={support.buttonLabel} />
  </>
);
