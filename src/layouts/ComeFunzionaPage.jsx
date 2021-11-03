import React from 'react';
import content from '../../contents/come-funziona/come-funziona.yml';
import { SEO } from '../components/SEO';
import { Involved } from './come-funziona/Involved';
import { HeroHowItWorks } from '../components/hero/HeroHowItWorks';

export const ComeFunzionaPage = () => {
  const { title, name, involved, hero } = content;
  return (
    <>
      <SEO title={title} />
      <div className="sr-only">
        <h1>{name}</h1>
      </div>
      <HeroHowItWorks
        title={hero.title}
        body={hero.body}
        theme="bg-white"
        smallText="true"
        image="come-funziona-hero.svg"
        list={hero.list}
      />
      <Involved
        title={involved.title}
        category={involved.category}
        cards={involved.cards}
      />
    </>
  );
};
