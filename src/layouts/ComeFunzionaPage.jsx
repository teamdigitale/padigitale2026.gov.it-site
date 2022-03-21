import React, { useEffect, useContext } from 'react';
import { announce } from '@react-aria/live-announcer';
import { support } from '../../contents/home-page/home.yml';
import content from '../../contents/come-funziona/come-funziona.yml';
import { SEO } from '../components/SEO';
import { Timeline } from '../components/carousel/Timeline';
import { ProjectsCards } from '../components/ProjectsCards';
import { HeroHowItWorks } from '../components/hero/HeroHowItWorks';
import seo from '../../contents/seo.yml';
import { GlobalStateContext } from '../context/globalContext';
import { Involved } from './come-funziona/Involved';
import { Beneficiaries } from './come-funziona/Beneficiaries';
import { SupportSection } from './faq/SupportSection';

const { title: seoTitle, description: seoDescription } = seo.comeFunzionaPage;

export const ComeFunzionaPage = () => {
  const [{ howId }, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    if (howId) {
      const element = document.querySelector('#' + howId);
      if (element) {
        const elDistanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
        window.scrollTo(0, elDistanceToTop);
        element.setAttribute('tabindex', '-1');
        element.focus();
        return () => {
          dispatch({ type: 'SET:HOW_SECTION_ID' });
        };
      }
    }
  }, [howId, dispatch]);

  useEffect(() => {
    announce('Pagina caricata ' + content.name);
  }, []);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <div className="sr-only">
        <h2>{content.name}</h2>
      </div>
      <HeroHowItWorks
        title={content.hero.title}
        body={content.hero.body}
        theme="bg-white"
        smallText="true"
        image="come-funziona-hero.svg"
        list={content.hero.list}
      />
      <ProjectsCards item={content.projectsCardsItem} />
      <Timeline content={content.timeline} title="Il calendario" />
      <Beneficiaries item={content.beneficiaries} />
      <Involved title={content.involved.title} category={content.involved.category} cards={content.involved.cards} />
      <SupportSection
        supportList={support.cards}
        title={support.title}
        buttonLabel={support.buttonLabel}
        handleToggle={() => {
          dispatch({
            type: 'SET:TOGGLE_MODAL_MESSAGE',
          });
        }}
      />
    </>
  );
};
