import React from 'react';
import content from '../../contents/come-fare/come-fare.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import { HeroHowToDo } from '../components/hero/HeroHowToDo';
import { Keypoints } from './come-fare/Keypoints';
import { KeypointSection } from './come-fare/KeypointSection';


const { title: seoTitle, description: seoDescription } = seo.comeFarePage;

export const ComeFarePage = () => {

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <div className="sr-only">
        <h2>{content.name}</h2>
      </div>
      <HeroHowToDo
        title={content.hero.title}
        body={content.hero.body}
        theme="bg-white"
        smallText="true"
        image="come-fare-hero.svg"
        imageMob="come-fare/howToDoMobile.svg"
      // list={content.hero.list}
      />
      <Keypoints item={content.keypoints} />
      <KeypointSection item={content.sectionFirst} />
      <KeypointSection item={content.sectionSecond} />
      <KeypointSection item={content.sectionThird} />
      <KeypointSection item={content.sectionFourth} />
    </>
  );
};
