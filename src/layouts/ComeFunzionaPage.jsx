import React from 'react';
import { support } from '../../contents/home-page/home.yml';
import content from '../../contents/come-funziona/come-funziona.yml';
import { SEO } from '../components/SEO';
import { Timeline } from '../components/carousel/Timeline';
import { Involved } from './come-funziona/Involved';
import { Beneficiaries } from './come-funziona/Beneficiaries';
import { SupportSection } from './faq/SupportSection';
import seo from '../../contents/seo.yml'

const {title: seoTitle, description: seoDescription } = seo.comeFunzionaPage;
import { HeroHowItWorks } from '../components/hero/HeroHowItWorks'

export const ComeFunzionaPage = () => (
  <>
    <SEO title={seoTitle} description={seoDescription}/>
    <div className="sr-only">
      <h1>{content.name}</h1>
    </div>
    <HeroHowItWorks
      title={content.hero.title}
      body={content.hero.body}
      theme="bg-white"
      smallText="true"
      image="come-funziona-hero.svg"
      list={content.hero.list}
    />
     <Timeline content={content.timeline} title="Il calendario" />
    <Beneficiaries item={content.beneficiaries} />
    <Involved
      title={content.involved.title}
      category={content.involved.category}
      cards={content.involved.cards}
    />
    <SupportSection
      supportList={support.cards}
      title={support.title}
      buttonLabel={support.buttonLabel}
    />
  </>
);
