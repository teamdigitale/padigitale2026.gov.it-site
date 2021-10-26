import React from 'react';
import { Card, CardBody, Icon } from 'design-react-kit';
import { MobileSwiper } from '../../components/MobileSwiper';
import { Hero } from '../../components/hero/Hero';
import content from '../../../contents/home-page/home.yml';
import { HeroCategory } from '../../components/hero/HeroCategory';
import { HeroTitle } from '../../components/hero/HeroTitle';

const {
  heroNews: { category, title },
  newsPreview,
} = content;

export const NewsPreviewSection = () => {
  const slides = newsPreview.map((news) => (
    <Card key={news.title} teaser noWrapper className="shadow-lg">
      <CardBody className="h-100 d-flex flex-column py-5">
        <Icon
          className="mt-2 mb-1"
          icon={news.icon}
          size="xl"
          color="primary"
          focusable={false}
          role="img"
          aria-label={news.ariaLabel}
        />
        <HeroTitle title={news.title} className="primary-color" />
        <p className="card-text pt-2 pb-4 text-dark">{news.body}</p>
      </CardBody>
    </Card>
  ));

  return (
    <Hero>
      <div id="vantaggi" className="row align-items-center px-lg-5">
        <div className="text-center text-lg-left">
          <HeroCategory title={category} />
          <HeroTitle title={title} className="primary-color" />
        </div>
        <div className="mt-4 col-12 d-none d-lg-flex card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3">
          {slides}
        </div>
      </div>
      <MobileSwiper slides={slides} />
    </Hero>
  );
};
