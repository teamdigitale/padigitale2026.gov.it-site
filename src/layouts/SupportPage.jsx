import React, { useEffect } from 'react';
import { announce } from '@react-aria/live-announcer';
import content from '../../contents/support-page/support.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import { HeroSupport } from './support/Hero';
import { FAQPreview } from './support/FAQPreview';
import { Assistance } from './support/Assistance';
import { KeypointSection } from './come-fare/KeypointSection';

const { title: seoTitle, description: seoDescription } = seo.supportPage;

const {
  mainHero: { title, description, list },
} = content;
const matAndResource = {
  number: '01',
  title: 'Materiali e risorse',
  text: "Esplora tutti gli strumenti per favorire l'implementazione delle misure PNRR per la digitalizzazione della PA",
  image: 'MaterialieRisorse.svg',
  button: true,
  buttonLabel: 'ESPLORA',
  linkTo: '/supporto/materiali-e-risorse',
  lBlue: true,
  ariaLabel: 'Esplora materiali e risorse',
  reverse: true,
};
export const SupportPage = () => {
  useEffect(() => {
    announce('Pagina caricata ' + content.name);
  }, []);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <HeroSupport title={title} subtitle={description} isFaq={false} list={list} />
      <h2 className="sr-only">Domande frequenti</h2>
      <FAQPreview />
      <Assistance />
      <KeypointSection item={matAndResource} />
    </>
  );
};
