/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import content from '../../contents/inviare-piano-migrazione/inviare-piano-migrazione.yml';
import { TimelineVerticalCards } from '../components/TimelineVerticalCards';
import { SideNavigationAccordion } from './sideNavigationAccordion';

const { title: seoTitle, description: seoDescription } = seo.InviarePianoMigrazionePage;

const { sidebar, verticalTimeline } = content;

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
    },
    '&::before': {
      fontSize: '18px',
      fontWeight: '600',
      color: '#33485C',
    },
  },
  navigationContainer: {
    borderTop: '1px solid #A9B9C3',
    display: 'flex',
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      border: 'none',
    },
    '& .content-container': {
      '@media (min-width: 992px)': {
        borderLeft: '1px solid #d9dadb',
      },
    },
  },
  noResults: {
    textAlign: 'center',
    color: '#33485C',
    margin: '0.833rem 0',
  },
  inputContainer: {
    position: 'relative',
    '& .reset-btn': {
      background: 'transparent',
      border: '0',
      position: 'absolute',
      top: '15px',
      right: '10px',
      backgroundImage: 'url("../assets/close-black.svg")',
      backgroundRepeat: 'no-repeat',
      width: '1.1rem',
      height: '1.1rem',
    },
  },
  inputWrap: {
    backgroundImage: 'url("../assets/icon-search.svg")',
    '&:focus': {
      outline: '2px solid #ff9900',
    },
  },
  contentTitle: {
    fontSize: '1.688rem',
    fontWeight: '700',
  },
  contentParagraph: {
    fontSize: '1.125rem',
  },
  cardReadMore: {
    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 30px 20px 55px',
    position: 'relative',
  },
  clip: {
    position: 'absolute',
    top: '24px',
    left: '30px',
  },
  cardTitle: {
    fontWeight: '600',
    color: '#0066CC',
    fontSize: '1.125rem',
  },
  cardInfo: {
    fontWeight: '400',
    fontSize: '0.875rem',
    color: '#33485C',
  },
  titleUpdate: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#33485C',
    lineHeight: '48px',
    marginBottom: '30px',
    '@media (max-width: 425px)': {
      fontSize: '2.375rem',
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  subtitleUpdate: {
    fontSize: '24px',
    color: '#33485C',
    lineHeight: '30px',
    '@media (max-width: 425px)': {
      fontSize: '1.25rem',
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  heroImg: {
    '@media (max-width: 425px)': {
      maxWidth: '80%',
    },
  },
});

// eslint-disable-next-line sonarjs/cognitive-complexity
export const InviarePianoMigrazionePage = () => {
  const classes = useStyles();

  useEffect(() => {
    announce('Pagina caricata');
  }, []);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <div className="pb-5">
        <Container className="px-3">
          <Row>
            <Col xs={12}>
              <Breadcrumb className={classes.breadcrumb}>
                <BreadcrumbItem className={classes.breadcrumbItem}>
                  <a href="/">Home</a>
                  <span className="separator"></span>
                </BreadcrumbItem>
                <BreadcrumbItem active className={classes.breadcrumbItem}>
                  <a href="/come-partecipare">Come partecipare</a>
                  <span className="separator"></span>
                </BreadcrumbItem>
                <BreadcrumbItem active className={classes.breadcrumbItemActive}>
                  <a>Piano di migrazione</a>
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="mb-5 mt-5">
            <Col xs={12} lg={7}>
              <h1 className={classes.titleUpdate}>Inviare un piano di migrazione</h1>
              <div className={classes.subtitleUpdate}>
                Le amministrazioni centrali e locali devono inviare un piano di migrazione. Per compilare un piano di
                migrazione è necessario aver inviato la classificazione dati e servizi. Se la tua PA ha già inviato una
                candidatura 1.2, il piano di migrazione si intende compilato e assolto.
              </div>
            </Col>
            <Col xs={12} lg={4} className="offset-lg-1 mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
              <img src={`/assets/come-fare/kp-section-7.svg`} alt="" className={classes.heroImg} />
            </Col>
          </Row>
          <div className={classes.navigationContainer}>
            <SideNavigationAccordion activeList={[]} searchValue={''} list={sidebar} />
            <div
              className="pl-lg-3 content-container"
              id="id-list-points"
              role="region"
              aria-label="Lista punti da seguire"
            >
              <Container className="pl-lg-4 mb-4">
                <section>
                  <h3 className={`${classes.contentTitle} mt-5`}>Invia il piano di migrazione della tua PA</h3>
                  <p className={`${classes.contentParagraph} mb-0`}>
                    Il processo di invio di un piano di migrazione prevede <strong>quattro passaggi</strong>:
                  </p>
                </section>
              </Container>
              <TimelineVerticalCards item={verticalTimeline} />
              {/* <section id="in-deep">
                <h3 className={`${classes.contentTitle} mt-5`}>Per approfondire</h3>
                <div className={`${classes.linkWrapper}`}>
                  <a
                    target="_blank"
                    href="#"
                    title="Link ( Link esterno - Apre su nuova scheda )"
                    aria-label="Link ( Link esterno - Apre su nuova scheda )"
                    rel="noreferrer"
                  >
                    Ext link 1&nbsp;
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                        fill="#0073E6"
                      />
                    </svg>
                  </a>
                </div>
              </section> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
