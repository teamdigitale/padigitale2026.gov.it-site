import React, { useEffect, useState } from 'react';
import {
  heroMainBanner,
  heroPnrr,
  heroCarouselNews,
  heroTeamTerritoriali,
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
            // Entries are ordered from oldest to latest in the json file, but we want
            // to show the latest one first in the carousel.
            //
            // Also, show only at most 7 of the most recent ones.
            const newsArr = data.windows;
            let orderedNews = [];
            newsArr.forEach((news) => {
              const startDate = new Date(news.dataInizioBando);
              const endDate = new Date(news.dataFineBando);
              const currentDate = new Date();
              const daysFromStart = Math.abs(currentDate - startDate) / 1000 / 60 / 60 / 24;
              const daysToEnd = Math.abs(currentDate - endDate) / 1000 / 60 / 60 / 24;

              if (daysFromStart < 14) {
                news.new = true;
              }
              if (daysToEnd < 14) {
                news.expiring = true;
              }
            });
            const reverseNewsArr = data.windows.reverse();
            const expiringNewsArr = reverseNewsArr.filter((news) => news.expiring);
            const newNewsArr = reverseNewsArr.filter((news) => news.new);
            const normalNewsArr = reverseNewsArr.filter((news) => {
              if (news.expiring !== true && news.new !== true) {
                return news;
              }
            });
            orderedNews.push(expiringNewsArr);
            orderedNews.push(newNewsArr);
            orderedNews.push(normalNewsArr);
            orderedNews = orderedNews.flat().slice(0, 7);
            setNewsList(orderedNews);
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
      <HeroCarousel content={heroCarouselNews} title={heroCarouselNewsTitle} />
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
      <HeroImage
        ctaContainer={true}
        category={heroTeamTerritoriali.category}
        title={heroTeamTerritoriali.title}
        body={heroTeamTerritoriali.body}
        imageUrl="/assets/Transfromation_Office_Italy.svg"
        imageAlt=""
        firstInternal={true}
        firstButtonHref={heroTeamTerritoriali.link}
        firstButtonLabel={heroTeamTerritoriali.firstButtonLabel}
        firstButtonAriaLabel={heroTeamTerritoriali.firstButtonAriaLabel}
        heroTitleId="home-hero-title-territory"
      />
      <SupportSection supportList={support.cards} title={support.title} buttonLabel={support.buttonLabel} />
    </>
  );
};
