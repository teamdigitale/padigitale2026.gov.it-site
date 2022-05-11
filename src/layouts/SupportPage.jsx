import React, { useEffect } from 'react';
import { announce } from '@react-aria/live-announcer';
import content from '../../contents/support-page/support.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import { HeroSupport } from './support/Hero';
import { FAQPreview } from './support/FAQPreview';
import { Assistance } from './support/Assistance';

const { title: seoTitle, description: seoDescription } = seo.supportPage;

const {
  mainHero: { title, description },
} = content;

export const SupportPage = () => {
  useEffect(() => {
    announce('Pagina caricata ' + content.name);
  }, []);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <HeroSupport title={title} subtitle={description} isFaq={false} />
      <h2 className="sr-only">Domande frequenti</h2>
      <FAQPreview />
      <Assistance />
    </>
  );
};
