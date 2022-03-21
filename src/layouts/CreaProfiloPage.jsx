/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import faq from '../../contents/faq-page/faq.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import content from '../../contents/crea-profilo/crea-profilo.yml';
import { TimelineVerticalCards } from '../components/TimelineVerticalCards';
import { HeroVideo } from '../components/HeroVideo';
/* import { Totop } from '../components/Totop'; */
import { SideNavigationAccordion } from './sideNavigationAccordion';

const { title: seoTitle, description: seoDescription } = seo.creaProfiloPage;

const { sidebar, verticalTimeline } = content;

const useStyles = createUseStyles({
  breadcrumb: {
    '@media (min-width: 991px)': {
      marginLeft: '0.722rem',
      marginBottom: '90px',
    },
  },
  breadcrumbItem: {
    '& a': {
      color: '#06c',
      fontWeight: '700',
      textDecoration: 'underline',
    },
  },
  breadcrumbItemActive: {
    '& a': {
      color: '#5B6F82',
      textDecoration: 'none',
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
    textDecoration: 'none',
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
  },
  subtitleUpdate: {
    fontSize: '24px',
    color: '#33485C',
    lineHeight: '30px',
    '@media (max-width: 425px)': {
      fontSize: '1.25rem',
    },
  },
  heroImg: {
    '@media (max-width: 425px)': {
      maxWidth: '80%',
    },
  },
});

// eslint-disable-next-line sonarjs/cognitive-complexity
export const CreaProfiloPage = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [questions, setQuestions] = useState(faq.questions);
  const [isMobile, setIsMobile] = useState();
  // const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    });
    announce('Pagina caricata ' + faq.name);
  }, []);

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  //   if (event.target.value.length >= 3) {
  //     if (isMobile && filterId !== 'all') {
  //       setQuestions(getQuestionsMobile(getNewQuestions(event.target.value)));
  //     } else {
  //       setQuestions(getNewQuestions(event.target.value));
  //     }
  //   } else {
  //     if (isMobile) {
  //       filterId !== 'all' ? setQuestions(getQuestionsMobile(faq.questions)) : setQuestions(faq.questions);
  //     } else {
  //       setQuestions(faq.questions);
  //     }
  //   }
  //   setquestNum(countQuestions());
  //   if (questions.length === 0) {
  //     announce('Nessun risultato');
  //   } else {
  //     announce('Numero di FAQ in pagina aggiornato');
  //   }
  // };

  useEffect(() => {
    if (!isMobile) {
      setInputValue('');
      setQuestions(faq.questions);
    }
  }, [isMobile]);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <div className="sr-only">
        <h2>{faq.name}</h2>
      </div>
      {/* <HeroSupport title={faq.hero.title} subtitle={faq.hero.subtitle} /> */}
      <div className="docs pt-4 pb-5 py-md-5">
        <Container className="px-3">
          <Row>
            <Col xs={12}>
              <Breadcrumb className={classes.breadcrumb}>
                <BreadcrumbItem className={classes.breadcrumbItem}>
                  <a href="/come-funziona">Home</a>
                  <span className="separator"></span>
                </BreadcrumbItem>
                <BreadcrumbItem active className={classes.breadcrumbItem}>
                  <a href="/come-funziona/presentazione-progetti">Come partecipare</a>
                  <span className="separator"></span>
                </BreadcrumbItem>
                <BreadcrumbItem active className={classes.breadcrumbItemActive}>
                  <a href="/come-funziona/presentazione-progetti">Crea il profilo della tua PA</a>
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs={12} lg={7}>
              <h4 className={classes.titleUpdate}>Crea il profilo della tua PA: identità digitale e dati IPA</h4>
              <div className={classes.subtitleUpdate}>
                <strong>Per partecipare agli avvisi</strong> è necessario che il{' '}
                <strong>rappresentante legale di un'amministrazione presente su IPA</strong> (Indice dei domini digitali
                della Pubblica Amministrazione), o una persona incaricata,{' '}
                <strong>avvii la procedura di attivazione della PA sulla piattaforma</strong>.
              </div>
            </Col>
            <Col xs={12} lg={4} className="offset-lg-1 mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
              <img src={`/assets/profilo.svg`} alt="" className={classes.heroImg} />
            </Col>
          </Row>
          <div className={classes.navigationContainer}>
            <h3 id="question-section" className="sr-only">
              Sezione domande frequenti
            </h3>
            <SideNavigationAccordion activeList={questions} searchValue={inputValue} list={sidebar} />
            <div
              className="pl-lg-3 content-container"
              id="id-list-faq"
              role="region"
              aria-label="Lista domande frequenti"
              aria-describedby="numberfaq"
            >
              {/*  <Totop /> */}
              <Container className="pl-lg-4 mb-4">
                <section>
                  <h4 className={`${classes.contentTitle} mt-5`}>Crea il profilo della tua amministrazione</h4>
                  <p className={`${classes.contentParagraph} mb-0`}>
                    Il processo di attivazione della PA prevede <strong>quattro passaggi</strong>:
                  </p>
                </section>
              </Container>
              <TimelineVerticalCards item={verticalTimeline} />
              <Container className="pl-lg-4">
                <p className={`${classes.contentParagraph} mb-0`}>
                  Ti raccomandiamo quindi di verificare fin da subito l’accuratezza delle informazioni presenti su{' '}
                  <a href="" className="d-inline-flex align-items-center">
                    IPA <img src="/assets/external-link.svg" alt="" />
                  </a>
                  .
                </p>
              </Container>
              <section id="watch-video">
                <HeroVideo />
              </section>
              <Container className="pl-lg-4">
                <section id="to-read-more">
                  <h4 className={`${classes.contentTitle} mb-4`}>Per approfondire</h4>
                  <Row>
                    <Col xs={12} lg={6} xl={4}>
                      <a href="#" className={classes.cardReadMore}>
                        <img className={classes.clip} src="/assets/clip.svg" alt=""></img>
                        <span className={classes.cardTitle}>Banda ultra larga</span>
                        <span className={classes.cardInfo}>Scarica il PDF (3.7MB)</span>
                      </a>
                    </Col>
                  </Row>
                </section>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
