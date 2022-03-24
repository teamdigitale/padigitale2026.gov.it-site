import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import {
  name,
  heroMainBanner,
  heroPnrr,
  heroClassificazione,
  heroCarouselNews,
  heroCarouselNewsTitle,
  noticesCarouselTitle,
  support,
} from '../../contents/home-page/home.yml';
import { HeroImage } from '../components/hero/HeroImage';
import { HeroCarousel } from '../components/carousel/Carousel';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import labels from '../../contents/labels.yml';
import { NoticesCarousel } from '../components/carousel/NoticesCarousel';
import { SupportSection } from './faq/SupportSection';

const { title: seoTitle, description: seoDescription } = seo.homePage;
const { headerTitle, headerSubtitle } = labels;

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

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await fetch(`https://github.com/teamdigitale/padigitale2026-opendata`)
          .then((res) => res.json())
          .then((data) => {
            setNewsList(data.windows);
          });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
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
      <HeroImage
        dark={true}
        mainHero={true}
        ctaContainer={true}
        title={heroMainBanner.title}
        body={heroMainBanner.body}
        imageUrl="/assets/icona-home-banner.svg"
        imageAlt=""
        firstInternal={true}
        firstButtonHref="/come-funziona"
        firstButtonLabel={heroMainBanner.firstButtonLabel}
        firstButtonAriaLabel={heroMainBanner.firstButtonAriaLabel}
        heroTitleId="home-hero-title"
      />
      <NoticesCarousel content={newsList} title={noticesCarouselTitle} />
      <HeroImage
        light={true}
        ctaContainer={true}
        category={heroPnrr.category}
        title={heroPnrr.title}
        body={heroPnrr.body}
        imageUrl="/assets/home-candidature.svg"
        imageAlt=""
        outlineBtn={true}
        firstInternal={true}
        firstButtonHref="/come-funziona"
        firstButtonLabel={heroPnrr.firstButtonLabel}
        firstButtonAriaLabel={heroPnrr.firstButtonAriaLabel}
        heroTitleId="home-hero-title-candidature"
      />
      <HeroCarousel content={heroCarouselNews} title={heroCarouselNewsTitle} />
      <HeroImage
        ctaContainer={true}
        category={heroClassificazione.category}
        title={heroClassificazione.title}
        body={heroClassificazione.body}
        imageUrl="/assets/Classificazione_Dati_e_Servizi.svg"
        imageAlt=""
        outlineBtn={true}
        firstInternal={true}
        firstButtonHref="/come-funziona"
        firstButtonLabel={heroClassificazione.firstButtonLabel}
        firstButtonAriaLabel={heroClassificazione.firstButtonAriaLabel}
        heroTitleId="home-hero-title-classificazione"
      />
      <SupportSection supportList={support.cards} title={support.title} buttonLabel={support.buttonLabel} />
    </>
  );
};
