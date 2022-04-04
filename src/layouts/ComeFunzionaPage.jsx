import React, { useEffect, useContext } from 'react';
import { announce } from '@react-aria/live-announcer';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import content from '../../contents/iniziativa/iniziativa.yml';
import { SEO } from '../components/SEO';
import { Timeline } from '../components/carousel/Timeline';
import { ProjectsCards } from '../components/ProjectsCards';
import { HeroHowItWorks } from '../components/hero/HeroHowItWorks';
import seo from '../../contents/seo.yml';
import { GlobalStateContext } from '../context/globalContext';
// import { Breadcrumb } from '../components/Breadcrumb';
import { Involved } from './iniziativa/Involved';
import { Beneficiaries } from './iniziativa/Beneficiaries';

const { title: seoTitle, description: seoDescription } = seo.comeFunzionaPage;

const useStyles = createUseStyles({
  breadcrumb: {
    padding: '1.563rem 0 0',
    '& .breadcrumb': {
      padding: '0.75rem 0',
    },
  },
  breadcrumbItem: {
    '& a': {
      color: '#5B6F82',
      fontWeight: '600',
      textDecoration: 'underline',
      fontSize: '18px',
    },
    '&::before': {
      fontWeight: '600',
      color: '#33485C',
    },
  },
  breadcrumbItemActive: {
    '& a': {
      color: '#656566',
      textDecoration: 'none',
      fontSize: '18px',
      pointerEvents: 'none',
    },
    '&::before': {
      fontSize: '18px',
      fontWeight: '600',
      color: '#33485C',
    },
  },
});

export const ComeFunzionaPage = () => {
  const [{ howId }, dispatch] = useContext(GlobalStateContext);
  const classes = useStyles();

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
      {/* <Breadcrumb currentPage="L'iniziativa" /> */}
      <div className="container px-3">
        <Row>
          <Col xs="12">
            <Breadcrumb className={classes.breadcrumb}>
              <BreadcrumbItem className={classes.breadcrumbItem}>
                <a href="/">Home</a>
                <span className="separator"></span>
              </BreadcrumbItem>
              <BreadcrumbItem active className={classes.breadcrumbItemActive}>
                <a href="/iniziativa">L&apos;iniziativa</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
      <div className="sr-only">
        <h2>{content.name}</h2>
      </div>
      <HeroHowItWorks
        title={content.hero.title}
        body={content.hero.body}
        theme="bg-white"
        smallText="true"
        image="iniziativa-hero.svg"
        list={content.hero.list}
      />
      <ProjectsCards item={content.projectsCardsItem} />
      <Involved title={content.involved.title} category={content.involved.category} cards={content.involved.cards} />
      <Timeline content={content.timeline} title="Calendario" />
      <Beneficiaries item={content.beneficiaries} />
    </>
  );
};
