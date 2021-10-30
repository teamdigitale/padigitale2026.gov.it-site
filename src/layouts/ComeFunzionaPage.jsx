import React from 'react';
import content from '../../contents/come-funziona/come-funziona.yml';
import { SEO } from '../components/SEO';
import { ComeFunzionaCarousel } from '../components/carousel/ComeFunzionaCarousel';
import { Involved } from './come-funziona/Involved';

export const ComeFunzionaPage = () => (
  <>
    <SEO title={content.title} />
    <div className="sr-only">
      <h1>{content.name}</h1>
    </div>
    <ComeFunzionaCarousel
      content={content.pacchettiCarousel.cards}
      paragraph={content.modalitaAccesso}
      title={content.pacchettiCarousel.title}
      subtitle={content.pacchettiCarousel.subtitle}
    />
    <ComeFunzionaCarousel
      content={content.presentazioneCarousel.cards}
      title={content.presentazioneCarousel.title}
      subtitle={content.presentazioneCarousel.subtitle}
    />
    <Involved title={content.involved.title} category={content.involved.category} cards={content.involved.cards} />
  </>
);
