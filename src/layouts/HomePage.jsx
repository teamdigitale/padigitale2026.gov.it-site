import React from 'react';
import { Container, Row, Col, Hero } from 'design-react-kit';
import content from '../../contents/home-page/home.yml';
import { HeroImageBackground } from '../components/hero/HeroImageBackground';
import { HeroImage } from '../components/hero/HeroImage';

const { heroDigital, heroPnrr } = content;

export const HomePage = () => (
  <>
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
    />
  </>
);
