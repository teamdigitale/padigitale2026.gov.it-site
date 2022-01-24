import React, { useEffect } from 'react';
import { announce } from '@react-aria/live-announcer';
import content from '../../contents/support-page/support.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import { HeroSupport } from './support/Hero';
import { FAQPreview } from './support/FAQPreview';
import { Assistance } from './support/Assistance';
import { SupportBanner } from './support/Banner';

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
      <div className="sr-only">
        <h2>{content.name}</h2>
      </div>
      <HeroSupport title={title} subtitle={description} />
      <FAQPreview />
      <Assistance />
      <SupportBanner text={content.bottomBanner} />
    </>
  );
};
