import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
// import { announce } from '@react-aria/live-announcer';
import {
  name,
  heroMainBanner,
  heroPnrr,
  heroCarouselNews,
  noticesCarouselArchive,
  heroCarouselNewsTitle,
  noticesCarouselTitle,
  support,
} from '../../contents/home-page/home.yml';
// import { HeroImageBackground } from '../components/hero/HeroImageBackground';
// import { HeroImageBackgroundFull } from '../components/hero/HeroImageBackgroundFull';
import { HeroImage } from '../components/hero/HeroImage';
import { HeroCarousel } from '../components/carousel/Carousel';
// import { HomeCarousel } from '../components/carousel/HomeCarousel';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import labels from '../../contents/labels.yml';
import { GlobalStateContext } from '../context/globalContext';
import { NoticesCarousel } from '../components/carousel/NoticesCarousel';
import { SupportSection } from './faq/SupportSection';
// import { OpportunitySection } from './home/OpportunitySection';

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
  const [, dispatch] = useContext(GlobalStateContext);

  // API rest to get SF TOKEN
  /* useEffect(() => {
    announce('Pagina caricata ' + name);
    (async () => {
      try {
        const loginInfo = await fetch(`https://test.salesforce.com/services/oauth2/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Header': 'Origin, Content-Type, X-Auth-Token',
          },
          body: JSON.stringify({
            client_id: '',
            client_secret: '',
            username: '',
            password: '',
            grant_type: '',
          }),
        }).then((res) => res.json());
        console.log(loginInfo);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []); */
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
      <NoticesCarousel content={noticesCarouselArchive} title={noticesCarouselTitle} />
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
        heroTitleId="home-hero-title"
      />
      <HeroCarousel content={heroCarouselNews} title={heroCarouselNewsTitle} />
      <HeroImage
        ctaContainer={true}
        category={heroPnrr.category}
        title={heroPnrr.title}
        body={heroPnrr.body}
        imageUrl="/assets/Classificazione_Dati_e_Servizi.svg"
        imageAlt=""
        outlineBtn={true}
        firstInternal={true}
        firstButtonHref="/come-funziona"
        firstButtonLabel={heroPnrr.firstButtonLabel}
        firstButtonAriaLabel={heroPnrr.firstButtonAriaLabel}
        heroTitleId="home-hero-title"
      />
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
