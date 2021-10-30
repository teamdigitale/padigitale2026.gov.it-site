import React from 'react';
import content from '../../contents/support-page/support.yml';
import { HeroSupport } from './support/Hero';
import { FAQPreview } from './support/FAQPreview';
import { Assistance } from './support/Assistance';
import { Helmet } from 'react-helmet';

const {
  mainHero: { title, description },
} = content;

export const SupportPage = () => (
  <>
    <Helmet>
      <title>Supporto - Prossima PA</title>
    </Helmet>
    <HeroSupport title={title} subtitle={description} />
    <FAQPreview />
    <Assistance />
  </>
);
