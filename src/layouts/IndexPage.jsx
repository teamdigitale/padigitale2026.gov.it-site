import React, { useContext, useState } from 'react';
import {
  name,
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
import { createUseStyles } from 'react-jss';
import seo from '../../contents/seo.yml';
import labels from '../../contents/labels.yml';
import { SupportSection } from './faq/SupportSection';
import { OpportunitySection } from './home/OpportunitySection';
import { GlobalStateContext } from '../context/globalContext';

const { title: seoTitle, description: seoDescription } = seo.homePage;
const { ariaLabel, headerTitle, headerSubtitle } = labels;

const useStyles = createUseStyles({
  mobileTitle: {
    composes: 'px-3',
    '@media (min-width: 992px)': {
      display: 'none',
    },
    '& .title': {
      fontSize: '1.25rem',
      color: '#0066CC',
      fontWeight: 'bold',
    },
    '& .description': {
      fontSize: '1.25rem',
      color: '#0066CC',
    },
  },
});

export const IndexPage = () => {
  const classes = useStyles();
  const [{}, dispatch] = useContext(GlobalStateContext);
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <div className={classes.mobileTitle}>
        <h1 className="title">{headerTitle}</h1>
        <p className="description">{headerSubtitle}</p>
      </div>
      <div className="sr-only">
        <h2>{name}</h2>
      </div>
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
        firstInternal={true}
        firstButtonHref="/come-funziona"
        firstButtonLabel={heroPnrr.firstButtonLabel}
        firstButtonAriaLabel={heroPnrr.firstButtonAriaLabel}
        secondButtonLabel={heroPnrr.secondButtonLabel}
        secondButtonAriaLabel={heroPnrr.secondButtonAriaLabel}
        secondButtonHref="/come-funziona"
        heroTitleId="home-hero-title"
      />
      <HeroImageBackground
        title={heroDigital.title}
        body={heroDigital.body}
        theme="bg-blue"
        image="italy-blue.webp"
        firstButtonLabel={heroDigital.firstButtonLabel}
        firstButtonAriaLabel={heroDigital.firstButtonAriaLabel}
        firstButtonClass="btn-light"
        firstButtonHref={heroDigital.linkTo}
        overlap={true}
        titleId="home-italia-digitale"
      />
      <HeroCarousel content={heroCarouselNews} title={heroCarouselNewsTitle} />
      <SupportSection
        supportList={support.cards}
        title={support.title}
        buttonLabel={support.buttonLabel}
        handleToggle={() => {
          dispatch({
            type: 'SET:TOGGLE_MODAL_MESSAGE',
          });
        }}
      />
    </>
  );
};
