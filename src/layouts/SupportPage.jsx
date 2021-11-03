import React from 'react';
import content from '../../contents/support-page/support.yml';
import { HeroSupport } from './support/Hero';
import { FAQPreview } from './support/FAQPreview';
import { Assistance } from './support/Assistance';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';

const { title: seoTitle, description: seoDescription } = seo.supportPage;

const {
  mainHero: { title, description },
} = content;

export const SupportPage = () => (
  <>
    <SEO title={seoTitle} description={seoDescription} />
    <HeroSupport title={title} subtitle={description} />
    <FAQPreview />
    <Assistance />
  </>
);
