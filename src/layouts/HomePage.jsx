import React from 'react';
import { Container, Row, Col } from 'design-react-kit';
import content from '../../contents/home-page/home.yml';
import { HeroImage } from '../components/hero/HeroImage';
import { HeroCarousel } from '../components/carousel/Carousel';

const { heroDigital, heroPnrr } = content;

export const HomePage = () => (
  <>
    <HeroImage
      title={heroPnrr.title}
      body={heroPnrr.body}
      firstButtonLabel={heroPnrr.firstButtonLabel}
      theme="bg-light"
      image="italy-blue.png"
      firstButtonClass="btn-primary"
      firstButtonHref="#"
      secondButtonLabel={heroPnrr.secondButtonLabel}
      secondButtonClass="btn-outline-primary"
      secondButtonHref="#"
    />
    <HeroImage
      title={heroDigital.title}
      body={heroDigital.body}
      theme="bg-dark"
      image="italy-blue.png"
      firstButtonLabel={heroDigital.firstButtonLabel}
      firstButtonClass="btn-light"
      firstButtonHref="#"
    />
    <HeroCarousel/>
  </>
);
