import React, { useEffect, useState } from 'react';
import {
  name,
  heroMainBanner,
  heroPnrr,
  heroCarouselNews,
  heroClassificazione,
  heroCarouselNewsTitle,
  noticesCarouselTitle,
  support,
} from '../../contents/home-page/home.yml';
import { HeroImage } from '../components/hero/HeroImage';
import { HeroCarousel } from '../components/carousel/Carousel';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import { NoticesCarousel } from '../components/carousel/NoticesCarousel';
import { SupportSection } from './faq/SupportSection';

const { title: seoTitle, description: seoDescription } = seo.homePage;

export const IndexPage = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        await fetch(
          `https://raw.githubusercontent.com/teamdigitale/padigitale2026-opendata/main/dati/avvisi-latest.json`
        )
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
      <h1 className="sr-only">Home page PA digitale 2026</h1>
      <HeroImage
        dark={true}
        mainHero={true}
        ctaContainer={true}
        title={heroMainBanner.title}
        body={heroMainBanner.body}
        imageUrl="/assets/icona-home-banner.svg"
        imageAlt=""
        firstInternal={true}
        firstButtonHref="/iniziativa"
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
        firstInternal={true}
        firstButtonHref={heroPnrr.link}
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
        firstInternal={true}
        firstButtonHref={heroClassificazione.link}
        firstButtonLabel={heroClassificazione.firstButtonLabel}
        firstButtonAriaLabel={heroClassificazione.firstButtonAriaLabel}
        heroTitleId="home-hero-title-classificazione"
      />
      <SupportSection supportList={support.cards} title={support.title} buttonLabel={support.buttonLabel} />
    </>
  );
};
