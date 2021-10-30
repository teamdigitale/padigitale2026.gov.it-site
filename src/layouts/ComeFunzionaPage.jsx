import React from 'react';
import content from '../../contents/come-funziona/come-funziona.yml';
import { SEO } from '../components/SEO';
import { Involved } from './come-funziona/Involved';
import { Helmet } from 'react-helmet';

export const ComeFunzionaPage = () => (
  <>
    <Helmet>
      <title>Come funziona - Prossima PA</title>
    </Helmet>
    <SEO title={content.title} />
    <div className="sr-only">
      <h1>{content.name}</h1>
    </div>
    <Involved
      title={content.involved.title}
      category={content.involved.category}
      cards={content.involved.cards}
    />
  </>
);
