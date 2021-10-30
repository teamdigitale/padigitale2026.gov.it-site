import React from 'react';
import content from '../../contents/come-funziona/come-funziona.yml';
import { SEO } from '../components/SEO';
import { Timeline } from '../components/carousel/Timeline';
import { Involved } from './come-funziona/Involved';

export const ComeFunzionaPage = () => (
  <>
    <SEO title={content.title} />
    <div className="sr-only">
      <h1>{content.name}</h1>
    </div>
    <Timeline content={content.timeline} title="Il calendario" />
    <Involved title={content.involved.title} category={content.involved.category} cards={content.involved.cards} />
  </>
);
