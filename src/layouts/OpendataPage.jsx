/* eslint-disable max-lines-per-function */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col, Table } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import content from '../../contents/opendata/opendata.yml';

const { title: seoTitle, description: seoDescription } = seo.opendataPage;

const { name, breadCrumbName, hero, body } = content;

const useStyles = createUseStyles({
  container: {
    composes: 'mb-4',
    paddingLeft: 0,
    paddingRight: 0,
  },
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
    display: 'flex',
    '@media (max-width: 991px)': {
      flexDirection: 'column',
    },
    fontSize: '1rem',
    color: '#33485C',
    lineHeight: '1.5',
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
    fontSize: '1rem',
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
      // display: 'flex',
      alignItems: 'center',
      '& svg': {
        marginLeft: '5px',
      },
    },
    '& button': {
      fontWeight: '700',
      // display: 'flex',
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
  customLinkFocus: {
    '&:focus': {
      boxShadow: 'inset 0 0 0 1px #06c',
    },
  },
});

const downloadFile = (file = 'Example-name-file.csv') => {
  fetch('https://raw.githubusercontent.com/teamdigitale/padigitale2026-opendata/main/data/' + file)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));

      const link = document.createElement('a');
      link.href = url;
      link.download = file;

      document.body.appendChild(link);

      link.click();

      link.parentNode.removeChild(link);
    });
};
// eslint-disable-next-line sonarjs/cognitive-complexity
export const OpendataPage = () => {
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
                <BreadcrumbItem active className={classes.breadcrumbItemActive}>
                  <a>{breadCrumbName}</a>
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="mb-5 mt-5">
            <Col xs={12} lg={7}>
              <h1 className={classes.titleUpdate}>{hero.title}</h1>
              <div className={classes.subtitleUpdate} dangerouslySetInnerHTML={{ __html: hero.subtitle }}></div>
            </Col>
            <Col xs={12} lg={4} className="offset-lg-1 mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
              <img src={`/assets/opendata.svg`} alt="" className={classes.heroImg} />
            </Col>
          </Row>
          <div className={classes.navigationContainer}>
            <Container className={classes.container}>
              <section id={body.howToAccess.id}>
                <h2 className={`${classes.contentTitle} mt-5`}>{body.howToAccess.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: body.howToAccess.content }} />
                <Table className={classes.table}>
                  <thead>
                    <tr>
                      <th scope="col" style={{ verticalAlign: 'top' }}>
                        Descrizione dataset
                      </th>
                      <th colSpan="1" scope="col" className="text-center">
                        CSV
                      </th>
                      <th colSpan="1" scope="col" className="text-center">
                        JSON
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Avvisi PA digitale 2026</td>
                      <td className="text-center">
                        <span className={`${classes.linkWrapper}`}>
                          <button
                            className={`btn btn-outline-primary ${classes.customLinkFocus}`}
                            title="Link al dato ( Link esterno - Esegue il download )"
                            aria-label="Avvisi PA digitale 2026, file csv( Link esterno - Esegue il download )"
                            rel="noreferrer"
                            onClick={() => {
                              downloadFile('avvisi.csv');
                            }}
                          >
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_2574_113805)">
                                <path
                                  d="M20.3438 8.00586C20.1697 8.00586 20.0028 7.93672 19.8797 7.81365C19.7566 7.69058 19.6875 7.52366 19.6875 7.34961L19.6875 4.06836C19.6875 3.72026 19.5492 3.38642 19.3031 3.14028C19.0569 2.89414 18.7231 2.75586 18.375 2.75586L2.625 2.75586C2.2769 2.75586 1.94306 2.89414 1.69692 3.14028C1.45078 3.38642 1.3125 3.72026 1.3125 4.06836L1.3125 7.34961C1.3125 7.52366 1.24336 7.69057 1.12029 7.81365C0.997219 7.93672 0.830297 8.00586 0.65625 8.00586C0.482203 8.00586 0.315281 7.93672 0.192211 7.81365C0.0691395 7.69057 4.21554e-08 7.52366 5.73712e-08 7.34961L3.44227e-07 4.06836C4.0509e-07 3.37216 0.276562 2.70448 0.768845 2.2122C1.26113 1.71992 1.92881 1.44336 2.625 1.44336L18.375 1.44336C19.0712 1.44336 19.7389 1.71992 20.2312 2.2122C20.7234 2.70449 21 3.37217 21 4.06836L21 7.34961C21 7.52366 20.9309 7.69058 20.8078 7.81365C20.6847 7.93672 20.5178 8.00586 20.3438 8.00586Z"
                                  fill="#0073E6"
                                />
                                <path
                                  d="M10.9638 19.4947C10.9028 19.5558 10.8304 19.6043 10.7507 19.6374C10.671 19.6705 10.5855 19.6875 10.4992 19.6875C10.4129 19.6875 10.3274 19.6705 10.2477 19.6374C10.1679 19.6043 10.0955 19.5558 10.0345 19.4947L6.09705 15.5572C5.97382 15.434 5.90459 15.2668 5.90459 15.0926C5.90459 14.9183 5.97382 14.7512 6.09705 14.628C6.22027 14.5047 6.3874 14.4355 6.56167 14.4355C6.73594 14.4355 6.90307 14.5047 7.0263 14.628L9.84292 17.4459L9.84292 5.90508C9.84292 5.73103 9.91206 5.56411 10.0351 5.44104C10.1582 5.31797 10.3251 5.24883 10.4992 5.24883C10.6732 5.24883 10.8401 5.31797 10.9632 5.44104C11.0863 5.56411 11.1554 5.73103 11.1554 5.90508L11.1554 17.4459L13.972 14.628C14.0331 14.5669 14.1055 14.5185 14.1852 14.4855C14.2649 14.4525 14.3504 14.4355 14.4367 14.4355C14.523 14.4355 14.6084 14.4525 14.6881 14.4855C14.7678 14.5185 14.8403 14.5669 14.9013 14.628C14.9623 14.689 15.0107 14.7614 15.0437 14.8411C15.0768 14.9208 15.0938 15.0063 15.0938 15.0926C15.0938 15.1789 15.0768 15.2643 15.0437 15.344C15.0107 15.4238 14.9623 15.4962 14.9013 15.5572L10.9638 19.4947Z"
                                  fill="#0073E6"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2574_113805">
                                  <rect width="21" height="21" fill="white" transform="translate(21 21) rotate(-180)" />
                                </clipPath>
                              </defs>
                            </svg>
                            &nbsp; SCARICA IL .CSV
                          </button>
                        </span>
                      </td>
                      <td className="text-center">
                        <span className={`${classes.linkWrapper}`}>
                          <a
                            className={`btn btn-outline-primary ${classes.customLinkFocus}`}
                            href="https://raw.githubusercontent.com/teamdigitale/padigitale2026-opendata/main/data/avvisi.json"
                            target="_blank"
                            title="Link al dato ( Link esterno - Apre su nuova scheda )"
                            aria-label="Avvisi PA digitale 2026, file json( Link esterno -  Apre su nuova scheda )"
                            rel="noreferrer"
                          >
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                                fill="#0073E6"
                              />
                            </svg>
                            &nbsp; VAI AL .JSON
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Candidature finanziate Comuni</td>
                      <td className="text-center">
                        <span className={`${classes.linkWrapper}`}>
                          <button
                            className={`btn btn-outline-primary ${classes.customLinkFocus}`}
                            title="Link al dato ( Link esterno - Esegue il download )"
                            aria-label="Candidature finanziate Comuni, file csv( Link esterno - Esegue il download )"
                            rel="noreferrer"
                            onClick={() => {
                              downloadFile('candidature_comuni_finanziate.csv');
                            }}
                          >
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_2574_113806)">
                                <path
                                  d="M20.3438 8.00586C20.1697 8.00586 20.0028 7.93672 19.8797 7.81365C19.7566 7.69058 19.6875 7.52366 19.6875 7.34961L19.6875 4.06836C19.6875 3.72026 19.5492 3.38642 19.3031 3.14028C19.0569 2.89414 18.7231 2.75586 18.375 2.75586L2.625 2.75586C2.2769 2.75586 1.94306 2.89414 1.69692 3.14028C1.45078 3.38642 1.3125 3.72026 1.3125 4.06836L1.3125 7.34961C1.3125 7.52366 1.24336 7.69057 1.12029 7.81365C0.997219 7.93672 0.830297 8.00586 0.65625 8.00586C0.482203 8.00586 0.315281 7.93672 0.192211 7.81365C0.0691395 7.69057 4.21554e-08 7.52366 5.73712e-08 7.34961L3.44227e-07 4.06836C4.0509e-07 3.37216 0.276562 2.70448 0.768845 2.2122C1.26113 1.71992 1.92881 1.44336 2.625 1.44336L18.375 1.44336C19.0712 1.44336 19.7389 1.71992 20.2312 2.2122C20.7234 2.70449 21 3.37217 21 4.06836L21 7.34961C21 7.52366 20.9309 7.69058 20.8078 7.81365C20.6847 7.93672 20.5178 8.00586 20.3438 8.00586Z"
                                  fill="#0073E6"
                                />
                                <path
                                  d="M10.9638 19.4947C10.9028 19.5558 10.8304 19.6043 10.7507 19.6374C10.671 19.6705 10.5855 19.6875 10.4992 19.6875C10.4129 19.6875 10.3274 19.6705 10.2477 19.6374C10.1679 19.6043 10.0955 19.5558 10.0345 19.4947L6.09705 15.5572C5.97382 15.434 5.90459 15.2668 5.90459 15.0926C5.90459 14.9183 5.97382 14.7512 6.09705 14.628C6.22027 14.5047 6.3874 14.4355 6.56167 14.4355C6.73594 14.4355 6.90307 14.5047 7.0263 14.628L9.84292 17.4459L9.84292 5.90508C9.84292 5.73103 9.91206 5.56411 10.0351 5.44104C10.1582 5.31797 10.3251 5.24883 10.4992 5.24883C10.6732 5.24883 10.8401 5.31797 10.9632 5.44104C11.0863 5.56411 11.1554 5.73103 11.1554 5.90508L11.1554 17.4459L13.972 14.628C14.0331 14.5669 14.1055 14.5185 14.1852 14.4855C14.2649 14.4525 14.3504 14.4355 14.4367 14.4355C14.523 14.4355 14.6084 14.4525 14.6881 14.4855C14.7678 14.5185 14.8403 14.5669 14.9013 14.628C14.9623 14.689 15.0107 14.7614 15.0437 14.8411C15.0768 14.9208 15.0938 15.0063 15.0938 15.0926C15.0938 15.1789 15.0768 15.2643 15.0437 15.344C15.0107 15.4238 14.9623 15.4962 14.9013 15.5572L10.9638 19.4947Z"
                                  fill="#0073E6"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2574_113806">
                                  <rect width="21" height="21" fill="white" transform="translate(21 21) rotate(-180)" />
                                </clipPath>
                              </defs>
                            </svg>
                            &nbsp; SCARICA IL .CSV
                          </button>
                        </span>
                      </td>
                      <td className="text-center">
                        <span className={`${classes.linkWrapper}`}>
                          <a
                            className={`btn btn-outline-primary ${classes.customLinkFocus}`}
                            href="https://raw.githubusercontent.com/teamdigitale/padigitale2026-opendata/main/data/candidature_comuni_finanziate.json"
                            target="_blank"
                            title="Link al dato ( Link esterno - Apre su nuova scheda )"
                            aria-label="Candidature finanziate Comuni, file json( Link esterno - Apre su nuova scheda )"
                            rel="noreferrer"
                          >
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                                fill="#0073E6"
                              />
                            </svg>
                            &nbsp; VAI AL .JSON
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Candidature finanziate Scuole</td>
                      <td className="text-center">
                        <span className={`${classes.linkWrapper}`}>
                          <button
                            className={`btn btn-outline-primary ${classes.customLinkFocus}`}
                            title="Link al dato ( Link esterno - Esegue il download )"
                            aria-label="Candidature finanziate Scuole, file csv( Link esterno - Esegue il download )"
                            rel="noreferrer"
                            onClick={() => {
                              downloadFile('candidature_scuole_finanziate.csv');
                            }}
                          >
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_2574_113807)">
                                <path
                                  d="M20.3438 8.00586C20.1697 8.00586 20.0028 7.93672 19.8797 7.81365C19.7566 7.69058 19.6875 7.52366 19.6875 7.34961L19.6875 4.06836C19.6875 3.72026 19.5492 3.38642 19.3031 3.14028C19.0569 2.89414 18.7231 2.75586 18.375 2.75586L2.625 2.75586C2.2769 2.75586 1.94306 2.89414 1.69692 3.14028C1.45078 3.38642 1.3125 3.72026 1.3125 4.06836L1.3125 7.34961C1.3125 7.52366 1.24336 7.69057 1.12029 7.81365C0.997219 7.93672 0.830297 8.00586 0.65625 8.00586C0.482203 8.00586 0.315281 7.93672 0.192211 7.81365C0.0691395 7.69057 4.21554e-08 7.52366 5.73712e-08 7.34961L3.44227e-07 4.06836C4.0509e-07 3.37216 0.276562 2.70448 0.768845 2.2122C1.26113 1.71992 1.92881 1.44336 2.625 1.44336L18.375 1.44336C19.0712 1.44336 19.7389 1.71992 20.2312 2.2122C20.7234 2.70449 21 3.37217 21 4.06836L21 7.34961C21 7.52366 20.9309 7.69058 20.8078 7.81365C20.6847 7.93672 20.5178 8.00586 20.3438 8.00586Z"
                                  fill="#0073E6"
                                />
                                <path
                                  d="M10.9638 19.4947C10.9028 19.5558 10.8304 19.6043 10.7507 19.6374C10.671 19.6705 10.5855 19.6875 10.4992 19.6875C10.4129 19.6875 10.3274 19.6705 10.2477 19.6374C10.1679 19.6043 10.0955 19.5558 10.0345 19.4947L6.09705 15.5572C5.97382 15.434 5.90459 15.2668 5.90459 15.0926C5.90459 14.9183 5.97382 14.7512 6.09705 14.628C6.22027 14.5047 6.3874 14.4355 6.56167 14.4355C6.73594 14.4355 6.90307 14.5047 7.0263 14.628L9.84292 17.4459L9.84292 5.90508C9.84292 5.73103 9.91206 5.56411 10.0351 5.44104C10.1582 5.31797 10.3251 5.24883 10.4992 5.24883C10.6732 5.24883 10.8401 5.31797 10.9632 5.44104C11.0863 5.56411 11.1554 5.73103 11.1554 5.90508L11.1554 17.4459L13.972 14.628C14.0331 14.5669 14.1055 14.5185 14.1852 14.4855C14.2649 14.4525 14.3504 14.4355 14.4367 14.4355C14.523 14.4355 14.6084 14.4525 14.6881 14.4855C14.7678 14.5185 14.8403 14.5669 14.9013 14.628C14.9623 14.689 15.0107 14.7614 15.0437 14.8411C15.0768 14.9208 15.0938 15.0063 15.0938 15.0926C15.0938 15.1789 15.0768 15.2643 15.0437 15.344C15.0107 15.4238 14.9623 15.4962 14.9013 15.5572L10.9638 19.4947Z"
                                  fill="#0073E6"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2574_113807">
                                  <rect width="21" height="21" fill="white" transform="translate(21 21) rotate(-180)" />
                                </clipPath>
                              </defs>
                            </svg>
                            &nbsp; SCARICA IL .CSV
                          </button>
                        </span>
                      </td>
                      <td className="text-center">
                        <span className={`${classes.linkWrapper}`}>
                          <a
                            className={`btn btn-outline-primary ${classes.customLinkFocus}`}
                            href="https://raw.githubusercontent.com/teamdigitale/padigitale2026-opendata/main/data/candidature_scuole_finanziate.json"
                            target="_blank"
                            title="Link al dato ( Link esterno - Apre su nuova scheda )"
                            aria-label="Candidature finanziate Scuole, file json( Link esterno - Apre su nuova scheda )"
                            rel="noreferrer"
                          >
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                                fill="#0073E6"
                              />
                            </svg>
                            &nbsp; VAI AL .JSON
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>Candidature finanziate Altri Enti</td>
                      <td className="text-center">
                        <span className={`${classes.linkWrapper}`}>
                          <button
                            className={`btn btn-outline-primary ${classes.customLinkFocus}`}
                            title="Link al dato ( Link esterno - Esegue il download )"
                            aria-label="Candidature finanziate Altri Enti, file csv( Link esterno - Esegue il download )"
                            rel="noreferrer"
                            onClick={() => {
                              downloadFile('candidature_altrienti_finanziate.csv');
                            }}
                          >
                            <svg
                              width="21"
                              height="21"
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_2574_113808)">
                                <path
                                  d="M20.3438 8.00586C20.1697 8.00586 20.0028 7.93672 19.8797 7.81365C19.7566 7.69058 19.6875 7.52366 19.6875 7.34961L19.6875 4.06836C19.6875 3.72026 19.5492 3.38642 19.3031 3.14028C19.0569 2.89414 18.7231 2.75586 18.375 2.75586L2.625 2.75586C2.2769 2.75586 1.94306 2.89414 1.69692 3.14028C1.45078 3.38642 1.3125 3.72026 1.3125 4.06836L1.3125 7.34961C1.3125 7.52366 1.24336 7.69057 1.12029 7.81365C0.997219 7.93672 0.830297 8.00586 0.65625 8.00586C0.482203 8.00586 0.315281 7.93672 0.192211 7.81365C0.0691395 7.69057 4.21554e-08 7.52366 5.73712e-08 7.34961L3.44227e-07 4.06836C4.0509e-07 3.37216 0.276562 2.70448 0.768845 2.2122C1.26113 1.71992 1.92881 1.44336 2.625 1.44336L18.375 1.44336C19.0712 1.44336 19.7389 1.71992 20.2312 2.2122C20.7234 2.70449 21 3.37217 21 4.06836L21 7.34961C21 7.52366 20.9309 7.69058 20.8078 7.81365C20.6847 7.93672 20.5178 8.00586 20.3438 8.00586Z"
                                  fill="#0073E6"
                                />
                                <path
                                  d="M10.9638 19.4947C10.9028 19.5558 10.8304 19.6043 10.7507 19.6374C10.671 19.6705 10.5855 19.6875 10.4992 19.6875C10.4129 19.6875 10.3274 19.6705 10.2477 19.6374C10.1679 19.6043 10.0955 19.5558 10.0345 19.4947L6.09705 15.5572C5.97382 15.434 5.90459 15.2668 5.90459 15.0926C5.90459 14.9183 5.97382 14.7512 6.09705 14.628C6.22027 14.5047 6.3874 14.4355 6.56167 14.4355C6.73594 14.4355 6.90307 14.5047 7.0263 14.628L9.84292 17.4459L9.84292 5.90508C9.84292 5.73103 9.91206 5.56411 10.0351 5.44104C10.1582 5.31797 10.3251 5.24883 10.4992 5.24883C10.6732 5.24883 10.8401 5.31797 10.9632 5.44104C11.0863 5.56411 11.1554 5.73103 11.1554 5.90508L11.1554 17.4459L13.972 14.628C14.0331 14.5669 14.1055 14.5185 14.1852 14.4855C14.2649 14.4525 14.3504 14.4355 14.4367 14.4355C14.523 14.4355 14.6084 14.4525 14.6881 14.4855C14.7678 14.5185 14.8403 14.5669 14.9013 14.628C14.9623 14.689 15.0107 14.7614 15.0437 14.8411C15.0768 14.9208 15.0938 15.0063 15.0938 15.0926C15.0938 15.1789 15.0768 15.2643 15.0437 15.344C15.0107 15.4238 14.9623 15.4962 14.9013 15.5572L10.9638 19.4947Z"
                                  fill="#0073E6"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2574_113808">
                                  <rect width="21" height="21" fill="white" transform="translate(21 21) rotate(-180)" />
                                </clipPath>
                              </defs>
                            </svg>
                            &nbsp; SCARICA IL .CSV
                          </button>
                        </span>
                      </td>
                      <td className="text-center">
                        <span className={`${classes.linkWrapper}`}>
                          <a
                            className={`btn btn-outline-primary ${classes.customLinkFocus}`}
                            href="https://raw.githubusercontent.com/teamdigitale/padigitale2026-opendata/main/data/candidature_altrienti_finanziate.json"
                            target="_blank"
                            title="Link al dato ( Link esterno - Apre su nuova scheda )"
                            aria-label="Candidature finanziate Altri Enti, file json( Link esterno - Apre su nuova scheda )"
                            rel="noreferrer"
                          >
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                                fill="#0073E6"
                              />
                            </svg>
                            &nbsp; VAI AL .JSON
                          </a>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </section>
              <section id={body.PNRRMeasure.id}>
                <h2 className={`${classes.contentTitle} mt-5`}>{body.PNRRMeasure.title}</h2>
                <p>
                  La Missione 1 Componente 1 (M1C1) del Piano nazionale di ripresa e resilienza è dedicata alla
                  digitalizzazione, innovazione e sicurezza nella PA. Degli oltre 6 miliardi messi a disposizione, circa
                  2 sono destinati alle PA locali.
                  <br />
                  <br />
                  Gli open data fanno riferimento gli avvisi pubblicati su PA digitale 2026 e relativi alle seguenti
                  misure M1C1:
                  <br />
                  <br />
                  <ul>
                    <li>1.2: Abilitazione e facilitazione migrazione al Cloud</li>
                    <li>1.3.1: Piattaforma Digitale Nazionale Dati</li>
                    <li>1.4.1: Esperienza del Cittadino nei servizi pubblici</li>
                    <li>1.4.3: Adozione pagoPA e app IO</li>
                    <li>1.4.4: Adozione identità digitale (SPID/CIE)</li>
                    <li>1.4.5: Piattaforma Notifiche digitali</li>
                  </ul>
                </p>
              </section>
              <section id={body.inDepth.id}>
                <h2 className={`${classes.contentTitle} mt-5`}>{body.inDepth.title}</h2>
                <p>
                  <div className={`${classes.linkWrapper}`}>
                    <a
                      target="_blank"
                      href="https://github.com/teamdigitale/padigitale2026-opendata"
                      title="Link al repository Github ( Link esterno - Esegue il download )"
                      rel="noreferrer"
                    >
                      Vai al repository Github
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
                  <div className={`${classes.linkWrapper}`}>
                    <a
                      target="_blank"
                      href="https://github.com/teamdigitale/padigitale2026-opendata/blob/main/README.md"
                      title="Link alla struttura del repository ( Link esterno - Esegue il download )"
                      rel="noreferrer"
                    >
                      Vai alla struttura del repository
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
                </p>
              </section>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
};
