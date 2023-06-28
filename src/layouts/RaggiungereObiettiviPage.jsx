/* eslint-disable max-lines-per-function */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col, Table } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import { Link } from 'gatsby';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import content from '../../contents/raggiungere-obiettivi/raggiungere-obiettivi.yml';
import { SideNavigationAccordion } from './sideNavigationAccordion';

const { title: seoTitle, description: seoDescription } = seo.raggiungereObiettiviPage;

const { sidebar, name, breadCrumbName, hero, section1, section2, section3, section4, section5, section6 } = content;

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
      display: 'inline-flex',
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
  table: {
    marginTop: '45px',
    border: '1px solid #5A768A',
    '& thead > tr:first-child': {
      backgroundColor: '#F0F6FC',
    },
    '& tr:last-child > td': {
      borderBottom: '1px solid #5A768A',
      marginLeft: '5px',
    },
  },
});

// eslint-disable-next-line sonarjs/cognitive-complexity
export const RaggiungereObiettiviPage = () => {
  const classes = useStyles();

  useEffect(() => {
    announce('Pagina caricata ' + name);
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
              <img
                src={`${hero.imgSource}`}
                alt=""
                className={classes.heroImg}
              />
            </Col>
          </Row>
          <div className={classes.navigationContainer}>
            <SideNavigationAccordion list={sidebar} />
            <div
              className="pl-lg-3 content-container"
              id="id-list-points"
              role="region"
              aria-label="Lista punti da seguire"
            >
              <Container className="pl-lg-4 mb-4">
                <section id="access">
                  <div className="point-header">
                  <h3 className={`${classes.contentTitle} mt-5`}>{section1.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: section1.description }}></p>
                    <span className={`${classes.linkWrapper}`} dangerouslySetInnerHTML={{ __html: section1.descriptionDownload }}></span>
                  </div>
                </section>

                <section id="role-verifier">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>{section2.title}</h3>
                    <p className={`mb-0`} dangerouslySetInnerHTML={{ __html: section2.description }}></p>
                    <ul>
                      {section1.list.map((i, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: i }}></li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section id="cloud-enablement">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>{section3.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: section3.description }}></p>
                  </div>
                </section>

                <section id="mis-131-pdnd">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>{section4.title}</h3>
                    <p className={`mb-0`} dangerouslySetInnerHTML={{ __html: section4.description }}></p>
                    <ul>
                      {section4.list.map((i, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: i }}></li>
                      ))}
                    </ul>
                    <br />
                    <p className={`${classes.linkWrapper}`} dangerouslySetInnerHTML={{ __html: section4.listSubDescription }}></p>
                  </div>
                </section>

                <section id="citizen-experience">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>{section5.title}</h3>
                    <p className={`mb-0`} dangerouslySetInnerHTML={{ __html: section5.description }}></p>
                    <p className={`mb-0`} dangerouslySetInnerHTML={{ __html: section5.firstListTitle }}></p>
                    <ul>
                      {section5.firstList.map((i, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: i }}></li>
                      ))}
                    </ul>

                    <p className={`mb-0`} dangerouslySetInnerHTML={{ __html: section5.secondListTitle }}></p>
                    <ul>
                      {section5.secondList.map((i, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: i }}></li>
                      ))}
                    </ul>
                    <br />

                    <p className={`mb-0`} dangerouslySetInnerHTML={{ __html: section5.descriptionApp }}></p>
                    <ul>
                      {section5.thirdList.map((i, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: i }}></li>
                      ))}
                    </ul>
                    <br />

                    <p className={`${classes.linkWrapper}`} dangerouslySetInnerHTML={{ __html: section5.descriptionAppUsage }}></p>
                  </div>
                </section>

                <section id="platforms">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>{section6.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: section6.description }}></p>

                    <Table className={classes.table}>
                      <thead>
                        <tr>
                          {section6.table.theadRows.map((i, index) => (
                            <th key={index} dangerouslySetInnerHTML={{ __html: i }} scope="col" style={{ verticalAlign: 'top' }}></th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section6.table.tbodyRows.map((bodyrow, indexRow) => (
                          <tr key={indexRow}>
                            {bodyrow.row.map((cell, indexCell) => (
                              <td key={indexCell} dangerouslySetInnerHTML={{ __html: cell }}></td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </section>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
