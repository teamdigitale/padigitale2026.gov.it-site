/* eslint-disable max-lines-per-function */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col, Alert } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import content from '../../contents/gestire-progetto/gestire-progetto.yml';
import { HeroVideo } from '../components/HeroVideo';
/* import { Totop } from '../components/Totop'; */
import { SideNavigationAccordion } from './sideNavigationAccordion';

const { title: seoTitle, description: seoDescription } = seo.gestireProgettoPage;

const { sidebar, video, breadCrumbName, hero, section1, section2, section3, section4, section5 } = content;

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
  contentTitleSmall: {
    fontSize: '1.25rem',
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
    '@media (max-width: 991px)': {
      fontSize: '2.25rem',
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  subtitleUpdate: {
    fontSize: '1.333rem',
    color: '#33485C',
    lineHeight: '1.5',
    '@media (max-width: 991px)': {
      fontSize: '1.25rem',
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  heroImg: {
    maxWidth: '100%',
    '@media (max-width: 425px)': {
      maxWidth: '80%',
    },
  },
  linkWrapper: {
    '& a': {
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      '& svg': {
        marginLeft: '5px',
      },
    },
  },
  externalLink: {
    fontWeight: '700',
    '& svg': {
      marginLeft: '5px',
    },
  },
  externalLinkWrapper: {
    '& a': {
      fontWeight: '700',
      display: 'inline-flex',
      alignItems: 'center',
      '& svg': {
        marginLeft: '5px',
      },
    },
  },
});

// eslint-disable-next-line sonarjs/cognitive-complexity
export const GestireProgettoPage = () => {
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
                  <a>{breadCrumbName}</a>
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="mb-5 mt-5">
            <Col xs={12} lg={7}>
              <h1 className={classes.titleUpdate}>{hero.title}</h1>
              <div className={classes.subtitleUpdate}>{hero.subtitle}</div>
            </Col>
            <Col xs={12} lg={4} className="offset-lg-1 mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
              <img src={`${hero.imgSource}`} alt="" className={classes.heroImg} />
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
              {/*  <Totop /> */}
              <Container className="pl-lg-4 mb-4">
                <section id="digital-identity">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>{section1.title}</h3>
                    <p
                      className={`${classes.externalLinkWrapper}`}
                      dangerouslySetInnerHTML={{ __html: section1.description }}
                    />
                    <h3 className={`${classes.contentTitle} mt-5`}>{section2.title}</h3>
                    <div
                      className={`${classes.linkWrapper}`}
                      dangerouslySetInnerHTML={{ __html: section2.description }}
                    />
                    <div className={`${classes.contentTitleSmall} mt-3 mb-2`}>{section2.subtitle}</div>
                    <Alert color="info">{section2.alert}</Alert>
                  </div>
                </section>
                <section id="select-administration">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>{section3.title}</h3>
                    <p
                      className={`${classes.externalLinkWrapper}`}
                      dangerouslySetInnerHTML={{ __html: section3.description }}
                    />
                    <h3 className={`${classes.contentTitle} mt-5`}>{section4.title}</h3>
                    <div
                      className={`${classes.linkWrapper}`}
                      dangerouslySetInnerHTML={{ __html: section4.description }}
                    />
                    <div className={`${classes.contentTitleSmall} mt-3 mb-2`}>{section4.subtitle}</div>
                    <Alert color="info">{section4.alert}</Alert>
                  </div>
                </section>
                <section id="verify-data">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>{section5.title}</h3>
                    <p
                      className={`${classes.externalLinkWrapper}`}
                      dangerouslySetInnerHTML={{ __html: section5.description }}
                    />
                    <div className={`${classes.contentTitleSmall} mt-3 mb-2`}>{section5.subtitle}</div>
                    <Alert color="info"> {section5.alert}</Alert>
                  </div>
                </section>
              </Container>
              <section id="watch-video">
                <HeroVideo src={video.src} description={video.description} videoText={video.videoText} />
              </section>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
