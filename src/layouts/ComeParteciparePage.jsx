import React from 'react';
import content from '../../contents/come-partecipare/come-partecipare.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import { HeroHowToDo } from '../components/hero/HeroHowToDo';
import { KeypointSection } from './come-fare/KeypointSection';

const { title: seoTitle, description: seoDescription } = seo.comeParteciparePage;

export const ComeParteciparePage = () => (
  <>
    <SEO title={seoTitle} description={seoDescription} />
    <HeroHowToDo
      title={content.hero.title}
      body={content.hero.body}
      theme="bg-white"
      smallText="true"
      image="come-fare-hero.svg"
      imageMob="come-fare/howToDoMobile.svg"
      keypoints={content.keypoints}
      listMenu={content.listMenu}
    />
    <KeypointSection item={content.sectionFirst} />
    <KeypointSection item={content.sectionSecond} />
    <KeypointSection item={content.sectionThird} />
    <KeypointSection item={content.sectionFourth} />
    <KeypointSection item={content.sectionFifth} />
    <KeypointSection item={content.sectionSixth} />
    <KeypointSection item={content.sectionSeven} />
    <KeypointSection item={content.sectionEight} />
    <KeypointSection item={content.sectionNine} />
  </>
);
