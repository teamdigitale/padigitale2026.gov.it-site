/* eslint-disable max-lines-per-function */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col, Alert } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import faq from '../../contents/faq-page/faq.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import content from '../../contents/gestire-progetto/gestire-progetto.yml';
/* import { Totop } from '../components/Totop'; */
import { SideNavigationAccordion } from './sideNavigationAccordion';

const { title: seoTitle, description: seoDescription } = seo.gestireProgettoPage;

const { sidebar } = content;

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
});

// eslint-disable-next-line sonarjs/cognitive-complexity
export const GestireProgettoPage = () => {
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

  useEffect(() => {
    if (!isMobile) {
      setInputValue('');
      setQuestions(faq.questions);
    }
  }, [isMobile]);

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
                  <a>Avvia un progetto e coinvolgi il fornitore</a>
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="mb-5 mt-5">
            <Col xs={12} lg={7}>
              <h1 className={classes.titleUpdate}>Avvia un progetto e coinvolgi il fornitore</h1>
              <div className={classes.subtitleUpdate}>
                Dalle attività necessarie per ricevere il decreto di finanziamento, a tutte le scadenze importanti per
                la realizzazione dei progetti. Strumenti e informazioni per sapere come e quando coinvolgere i
                fornitori.
              </div>
            </Col>
            <Col xs={12} lg={4} className="offset-lg-1 mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
              <img src={`/assets/come-fare/Gestire_Progetti_alt.svg`} alt="" className={classes.heroImg} />
            </Col>
          </Row>
          <div className={classes.navigationContainer}>
            <SideNavigationAccordion activeList={questions} searchValue={inputValue} list={sidebar} />
            <div
              className="pl-lg-3 content-container"
              id="id-list-points"
              role="region"
              aria-label="Lista punti da seguire"
            >
              {/*  <Totop /> */}
              <Container className="pl-lg-4 mb-4">
                <section id="digital-identity">
                  <h3 className={`${classes.contentTitle} mt-5`}>Inserisci il codice CUP</h3>
                  <p>
                    L’invio della candidatura è il primo passo di un percorso guidato dedicato alle PA. Dopo
                    l'accettazione della candidatura, per ricevere l’assegnazione formale del finanziamento, la
                    piattaforma ti richiederà - attraverso una notifica - l'inserimento del Codice Unico di Progetto
                    (CUP). <br />
                    <br /> Il CUP è necessario per il funzionamento del Sistema di Monitoraggio degli Investimenti
                    Pubblici (MIP). Richiedere un CUP è obbligatorio per tutte le iniziative realizzate utilizzando
                    risorse provenienti da bilanci di enti pubblici o di società partecipate, direttamente o
                    indirettamente.
                    <br />
                    <br /> Le amministrazioni saranno guidate sulla piattaforma ad hoc gestita dal DIPE (Dipartimento
                    per la programmazione ed il coordinamento della politica economica) in cui, attraverso un{' '}
                    <a
                      target="_blank"
                      className={`${classes.externalLink}`}
                      href="https://opencup.gov.it/template-cup"
                      title="Link al template cup ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link al template cup ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      Template CUP
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                          fill="#0073E6"
                        />
                      </svg>
                    </a>
                    , potranno acquisire in modo rapido e agile il Codice Unico di Progetto. Sul sito Open Cup sono
                    disponibili le{' '}
                    <a
                      target="_blank"
                      className={`${classes.externalLink}`}
                      href="https://opencup.gov.it/-/dipartimento-per-la-transizione-digitale-online-le-faq-codice-unico-di-progetto-sulle-iniziative-pnrr-per-la-pa-digitale-2026"
                      title="Link alle domande frequenti ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link alle domande frequenti ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      “Domande frequenti”
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                          fill="#0073E6"
                        />
                      </svg>
                    </a>{' '}
                    per chiarire tutte le questioni sul merito.
                    <br />
                    <br /> <strong>Importante</strong>: il codice CUP va inserito su PA digitale 2026 entro 5 giorni
                    dalla data di notifica PEC dell’ammissibilità della domanda.
                  </p>
                  <h3 className={`${classes.contentTitle} mt-5`}>Approfondimenti</h3>
                  <div className={`${classes.linkWrapper}`}>
                    <a
                      target="_blank"
                      href="https://opencup.gov.it/template-cup"
                      title="Link al template cup ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link al template cup ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      Cos'è il Template CUP{' '}
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                          fill="#0073E6"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="https://opencup.gov.it/-/dipartimento-per-la-transizione-digitale-online-le-faq-codice-unico-di-progetto-sulle-iniziative-pnrr-per-la-pa-digitale-2026"
                      title="Link alle FAQ per i CUP di PA digitale 2026 ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link alle FAQ per i CUP di PA digitale 2026 ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      FAQ per i CUP di PA digitale 2026
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
                  <div className={`${classes.contentTitleSmall} mt-3 mb-2`}>Scadenza da ricordare</div>
                  <Alert color="info">
                    Inserisci il Codice CUP: hai a disposizione 5 giorni dalla data di notifica PEC dell’ammissibilità
                    della domanda.
                  </Alert>
                </section>
                <section id="select-administration">
                  <h3 className={`${classes.contentTitle} mt-5`}>Scegli il fornitore</h3>
                  <p>
                    Con la pubblicazione del decreto, la tua PA può cominciare la fase implementativa dell’avviso. Per
                    raggiungere gli obiettivi previsti è possibile scegliere liberamente, nel rispetto del codice dei
                    contratti pubblici, il proprio fornitore.
                    <br />
                    <br /> Se decidi di avvalerti di un fornitore è bene sapere che{' '}
                    <strong>
                      la scelta del fornitore deve essere comunicata sulla piattaforma PA digitale 2026
                    </strong>{' '}
                    entro un periodo determinato di tempo, che varia a seconda dell’avviso pubblico. Qualora il
                    <strong> fornitore fosse già contrattualizzato</strong> o si trattasse di una società{' '}
                    <strong>in-house</strong>, la PA deve fornire un documento equivalente a quello di ingaggio del
                    fornitore, ad esempio un ordine di servizio. Ricordati quindi che è possibile indicare anche un
                    fornitore contrattualizzato prima del decreto di finanziamento per attività già avviate o realizzate
                    a decorrere dal 1° febbraio 2020.
                    <br />
                    <br /> È necessario fare la dichiarazione DNHS (Do No Significant Harm) per ogni singolo fornitore
                    coinvolto. Tale principio prevede che gli interventi del PNRR non arrechino nessun danno
                    significativo all’ambiente.
                    <br />
                    <br /> Qualora si decidesse di procedere verso l'acquisizione del servizio, sono disponibili, a
                    seconda delle risorse, i vari strumenti messi a disposizione da Consip, la centrale acquisti della
                    Pubblica Amministrazione. In particolare, per le procedure sotto soglia, le PA possono anche
                    utilizzare il{' '}
                    <a
                      target="_blank"
                      href="https://www.acquistinretepa.it/opencms/opencms/index.html"
                      className={`${classes.externalLink}`}
                      title="Link a MePA ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link a MePA ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      MePA
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                          fill="#0073E6"
                        />
                      </svg>
                    </a>
                    , mercato elettronico della Pubblica Amministrazione.
                    <br />
                    <br /> Grazie alla collaborazione del Dipartimento per la trasformazione digitale e Consip, per le
                    misure 1.2 (migrazione al cloud) e 1.4.1 (esperienza del cittadino nei servizi pubblici) sono
                    previsti cataloghi in cui i fornitori accreditati hanno modo di presentare offerte dedicate,
                    funzionali al raggiungimento degli obiettivi previsti dal PNRR, all’interno del{' '}
                    <a
                      target="_blank"
                      href="https://www.acquistinretepa.it/opencms/opencms/scheda_iniziativa.html?idIniziativa=b577cd18b64b21a3"
                      className={`${classes.externalLink}`}
                      title="Link al Bando del Mercato elettronico servizi ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link al Bando del Mercato elettronico servizi ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      Bando del Mercato elettronico SERVIZI (categoria merceologica Servizi per l’information
                      communication technology).
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                          fill="#0073E6"
                        />
                      </svg>
                    </a>
                    <br /> È comunque sempre possibile selezionare un fornitore anche senza utilizzare il MePA.
                  </p>
                  <h3 className={`${classes.contentTitle} mt-5`}>Approfondimenti</h3>
                  <div className={`${classes.linkWrapper}`}>
                    <a
                      target="_blank"
                      href="https://www.acquistinretepa.it/opencms/opencms/scheda_iniziativa.html?idIniziativa=b577cd18b64b21a3"
                      title="Link al Bando del Mercato elettronico servizi ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link al Bando del Mercato elettronico servizi ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      Bando del Mercato elettronico SERVIZI
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                          fill="#0073E6"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.acquistinretepa.it/opencms/opencms/scheda_iniziativa.html?idIniziativa=c9c346967a0548c7"
                      title="Link all'accordo quadro Public Cloud IaaS e PaaS ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link all'accordo quadro Public Cloud IaaS e PaaS ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      Accordo quadro Public Cloud IaaS e PaaS
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                          fill="#0073E6"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.acquistinretepa.it/opencms/opencms/come_acquistare.html"
                      title="Link a come acquistare su MePA ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link a come acquistare su MePA ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      Come acquistare su MePA
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                          fill="#0073E6"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.acquistinretepa.it/opencms/opencms/faq.html"
                      title="Link alle domande frequenti MePA ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link alle domande frequenti MePA ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      Domande frequenti MePA
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                          fill="#0073E6"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.acquistinretepa.it/opencms/opencms/programma_media_acquistinreteperte_iniziativeICT.html"
                      title="Link alle Gare strategiche ICT per la digitalizzazione della PA ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link alle Gare strategiche ICT per la digitalizzazione della PA ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      Gare strategiche ICT per la digitalizzazione della PA
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                          fill="#0073E6"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.consip.it/le-iniziative-consip-a-supporto-del-pnrr"
                      title="Link alle iniziative Consip in ambito PNRR ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link alle iniziative Consip in ambito PNRR ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      Iniziative Consip in ambito PNRR
                      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                          fill="#0073E6"
                        />
                      </svg>
                    </a>
                    <a
                      target="_blank"
                      href="https://www.acquistinretepa.it/opencms/opencms/supporto_guide.html"
                      title="Link a tutte le guide Consip ( Link esterno - Apre su nuova scheda )"
                      aria-label="Link a tutte le guide Consip ( Link esterno - Apre su nuova scheda )"
                      rel="noreferrer"
                    >
                      Tutte le guide Consip
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
                  <div className={`${classes.contentTitleSmall} mt-3 mb-2`}>Scadenza da ricordare</div>
                  <Alert color="info">
                    Scegli un fornitore: ogni avviso stabilisce un massimo di giorni entro cui va notificata la scelta
                    del fornitore dalla data del decreto di finanziamento.
                  </Alert>
                </section>
                <section id="verify-data">
                  <h3 className={`${classes.contentTitle} mt-5`}>Raggiungi gli obiettivi previsti</h3>
                  <p>
                    Una volta che avrai comunicato il fornitore su PA digitale 2026,{' '}
                    <strong>la tua PA avrà un periodo fissato di tempo entro cui deve concludere i lavori</strong>.
                    Questo periodo di tempo varia a seconda dell’avviso. Ricordati che è possibile coinvolgere più
                    fornitori per svolgere le attività richieste dall’avviso, ma è il primo che farà fede per calcolare
                    la durata massima dei lavori.
                    <br />
                    <br />
                    L’erogazione dei fondi non richiede una puntuale rendicontazione delle spese, ma necessita del
                    raggiungimento degli obiettivi previsti dall’avviso. Per ottenere il trasferimento delle risorse,
                    dovrai inviare tramite la piattaforma PA digitale 2026 la domanda di erogazione del finanziamento
                    che certifica il raggiungimento degli obiettivi previsti dalla candidatura.
                  </p>
                  <div className={`${classes.contentTitleSmall} mt-3 mb-2`}>Scadenza da ricordare</div>
                  <Alert color="info">
                    Rispetta i tempi di chiusura lavori: ogni avviso stabilisce un massimo di giorni entro cui vanno
                    conclusi i lavori dal giorno della scelta della contrattualizzazione del fornitore.
                  </Alert>
                </section>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
