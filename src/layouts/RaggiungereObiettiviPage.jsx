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

const { sidebar, name, breadCrumbName, hero } = content;

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
                src={`/assets/come-partecipare/raggiungere-obiettivi/asseverazione.svg`}
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
                    <h3 className={`${classes.contentTitle} mt-5`}>L'accesso</h3>
                    <p>
                      L’ accesso alle risorse per{' '}
                      <Link to="/iniziativa/soluzioni-standard">
                        <strong>soluzioni standard</strong>
                      </Link>{' '}
                      ha fortemente semplificato il processo di adesione da adesione da parte degli Enti. Le
                      semplificazioni previste da PA digitale 2026 riguardano anche la rendicontazione, i contributi
                      infatti sono riconosciuti alle amministrazioni sulla base del raggiungimento di specifici
                      obiettivi predefiniti, appositamente verificati dal Dipartimento per la trasformazione digitale.
                      <br />
                      <br /> Per rendere questo processo trasparente, sono state pubblicate{' '}
                      <i>“Linee Guida per i Soggetti attuatori individuati tramite Avvisi Pubblici a lump sum”</i>, in
                      cui viene illustrata la metodologia applicata in fase di verifica, la cosiddetta asseverazione.
                    </p>
                    Per leggere le Linee guida vai nella sezione “Linee guida soggetti attuatori” e scarica la
                    documentazioni per{' '}
                    <span className={`${classes.linkWrapper}`}>
                      <a
                        target="_blank"
                        href="https://innovazione.gov.it/italia-digitale-2026/attuazione-misure-pnrr/#sistema-di-gestione-e-controllo"
                        title="Link alle linee guida ( Link esterno - Apre su nuova scheda )"
                        aria-label="Link alle linee guida ( Link esterno - Apre su nuova scheda )"
                        rel="noreferrer"
                      >
                        i Soggetti attuatori individuati tramite Avvisi Pubblici a<i> lump sum</i>{' '}
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 0H10.5C10.2238 0 9.99998 0.223694 9.99998 0.499634C9.99998 0.775574 10.2238 0.999268 10.5 0.999268H15.1999L6.83012 9.3691C6.63485 9.56437 6.63485 9.88095 6.83012 10.0762C7.02538 10.2715 7.34196 10.2715 7.53722 10.0762L16 1.61342V6.5C16 6.77614 16.2239 7 16.5 7C16.7761 7 17 6.77614 17 6.5V1C17 0.985859 16.9997 0.971786 16.9991 0.957787C16.9774 0.425152 16.5384 1.50615e-05 16 0H16ZM14.01 8.5C14.01 8.22386 14.2338 8 14.51 8C14.7784 8.00532 14.9947 8.22161 15 8.49V14C15 15.6569 13.6568 17 12 17H3C1.34314 17 0 15.6569 0 14V5C0 3.34315 1.34314 2 3 2H7.99999C8.2739 2.00532 8.49467 2.22609 8.49999 2.5C8.49999 2.77614 8.27613 3 7.99999 3H3C1.89543 3 0.999999 3.89543 0.999999 5V14C0.999999 15.1046 1.89543 16 3 16H12.01C13.1146 16 14.01 15.1046 14.01 14V8.5Z"
                            fill="#0073E6"
                          />
                        </svg>
                      </a>
                    </span>
                  </div>
                </section>
                <section id="role-verifier">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>
                      Il ruolo dell’asseveratore e le verifiche di conformità tecnica
                    </h3>
                    <p>
                      Dal momento che la PA conferma di aver completato le attività del progetto, cominciano le
                      cosiddette verifiche di conformità tecnica, che variano a seconda dell’Avviso e che sono descritte
                      in questa pagina. Queste verifiche possono includere sia controlli automatici, che il
                      coinvolgimento di un asseveratore, persona incaricata dal Dipartimento per svolgere ulteriori
                      verifiche anche mediante visita o videocall.
                      <br />
                      <br /> Le verifiche di conformità tecnica possono avere tre esiti:
                      <br />
                      <br />
                      <ul>
                        <li>
                          <strong>Esito positivo:</strong> tutti i controlli vengono superati, e la PA può procedere con
                          la richiesta di erogazione del finanziamento, attraverso l’apposita sezione dell’area
                          riservata di PA digitale 2026.
                        </li>
                        <li>
                          <strong>Esito parzialmente positivo:</strong> le verifiche automatiche e/o dell’asseveratore
                          non confermano la piena conformità tecnica (es. un servizio di pagamento non risulta attivo
                          nei registri di PagoPa spa; un criterio di conformità dell’avviso “Esperienza del Cittadino
                          nei servizi pubblici” per i Comuni non è rispettato), ma i termini del cronoprogramma non sono
                          ancora stati superati. In questo caso l’Ente può avviare le lavorazioni necessarie nei termini
                          del cronoprogramma previsto.
                        </li>
                        <li>
                          <strong>Esito negativo:</strong> le verifiche di conformità tecnica non sono superate e il
                          cronoprogramma è scaduto, oppure il progetto risulta non ammissibile (es. doppio
                          finanziamento). Il Dipartimento a questo punto avvia il procedimento di revoca del
                          finanziamento.
                        </li>
                      </ul>
                    </p>
                  </div>
                </section>
                <section id="cloud-enablement">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>
                      1.2 - Abilitazione e facilitazione migrazione al Cloud
                    </h3>
                    <p>
                      Il processo di verifica per gli Avvisi 1.2 è strutturato in modo da verificare i tre livelli
                      principali di utilizzo degli asset post-migrazione. In particolare, durante il processo di
                      asseverazione verranno effettuate le verifiche sulle infrastrutture, sul software utilizzato e
                      sulla disponibilità, a valle della migrazione, dei servizi di destinazione selezionati.
                      <br />
                      <br />
                      L’Avviso prevede la possibilità di selezionare due tipologie di migrazione, denominate
                      Trasferimento in sicurezza dell’infrastruttura IT e Aggiornamento di applicazioni sicure in Cloud.
                      A seconda della modalità selezionata, per ognuno dei servizi oggetto della migrazione, verrà
                      applicato un modello di controllo specifico. In particolare poi per tutti i servizi che sono stati
                      migrati utilizzando la modalità “Aggiornamento” verrà effettuato un ulteriore distinguo a seconda
                      che la destinazione finale sia un servizio PaaS Qualificato o un servizio SaaS Qualificato.
                      All’interno della piattaforma PA digitale 2026 il Soggetto Attuatore dovrà indicare, nella scheda
                      di Assessment, lo stato di avanzamento per ognuno dei servizi oggetto di migrazione e per ognuno
                      dei servizi dovrà indicare lo stato della migrazione. Una volta concluso il processo di migrazione
                      il Soggetto Attuatore potrà contrassegnare nella scheda di Assessment la migrazione come
                      completata.
                      <br />
                      <br />A valle di ciò, l’Asseveratore comunicherà le richieste di chiarimenti, documentazione e
                      prove di migrazione utilizzando l’area Richieste all’interno della piattaforma PA digitale 2026.
                      La documentazione richiesta si suddivide in due tipi: Documentazione specifica per la tipologia di
                      Migrazione selezionata (Trasferimento o Aggiornamento) e la documentazione di Visibilità, che è
                      comune a tutte le tipologie.
                    </p>
                  </div>
                </section>
                <section id="mis-131-pdnd">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>
                      1.3.1 - Piattaforme Digitale Nazionale Dati (PDND)
                    </h3>
                    <p>
                      La Misura 1.3.1 prevede l’erogazione e l’attivazione di e-service sulla Piattaforme Digitale
                      Nazionale Dati (PDND). Un processo che risulta concluso positivamente quando è visibile nel
                      Catalogo API della PDND un numero di API pari a quelle richieste nell’Avviso di riferimento, con i
                      relativi e-service in stato attivo.
                      <br />
                      <br />
                      La verifica della corretta attivazione degli e-service avviene in modalità automatica attraverso
                      l’integrazione con i registri di PagoPA, soggetto esterno certificatore. Oltre a verificare che
                      ciascun e-service sia stato attivato entro la data di scadenza prevista dal cronoprogramma, i
                      controlli automatici identificano anche la presenza di quattro parametri:
                      <br />
                      <ul>
                        <li>il codice IPA del Soggetto Attuatore;</li>
                        <li>il Nome dell’e-service;</li>
                        <li>l’Hash dell’e-service;</li>
                        <li>
                          la data di attivazione dell’e-service, intesa come la data della prima pubblicazione su PDND.
                        </li>
                      </ul>
                      <br />
                      In particolare, l’Hash dell’e-service è necessario per evitare che, per un singolo Ente erogatore,
                      vengano contate più volte API che hanno descrittori uguali o simili. Il dettaglio del
                      funzionamento è spiegato, in maniera approfondita, nelle{' '}
                      <span className={`${classes.linkWrapper}`}>
                        <a
                          target="_blank"
                          href="https://innovazione.gov.it/italia-digitale-2026/attuazione-misure-pnrr/#sistema-di-gestione-e-controllo"
                          title="Link all'articolo ( Link esterno - Apre su nuova scheda )"
                          aria-label="Link all'articolo ( Link esterno - Apre su nuova scheda )"
                          rel="noreferrer"
                        >
                          Linee guida per i Soggetti Attuatori
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
                        </a>
                      </span>
                      . Per poter considerare l’attività conforme, dalla verifica automatica dovranno risultare un
                      numero di hash univoci pari al numero di API richieste nell’avviso di riferimento.
                      <br />
                      <br />
                      Ad integrazione dei controlli automatici, il Dipartimento per la Trasformazione Digitale ricorre a
                      un soggetto terzo asseveratore per concludere le attività di verifica e asseverare la conformità
                      del progetto. Nel caso siano necessarie delle richieste di integrazione, il Soggetto Attuatore
                      viene contattato tramite l’apposita sezione della piattaforma PA digitale 2026. Se dopo 30 giorni
                      dalla scadenza del cronoprogramma non vi fosse ancora riscontro positivo dell’attivazione di tutti
                      i servizi nei registri di PagoPA, il progetto viene ritenuto non conforme.
                    </p>
                  </div>
                </section>
                <section id="citizen-experience">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>
                      1.4.1 - Esperienza del Cittadino nei servizi pubblici
                    </h3>
                    <p>
                      Per monitorare il raggiungimento degli obiettivi degli Avvisi (Comuni e scuole) sono previsti dei{' '}
                      <strong>criteri di conformità</strong>, che al termine dei lavori ogni amministrazione dovrà aver
                      raggiunto per poter accedere ai fondi.
                      <br />
                      Sono inoltre presenti una serie di <strong>raccomandazioni</strong> che non sono oggetto di
                      verifica, ma rimangono valide secondo le indicazioni di legge, le linee guida e le buone pratiche.
                      <br />
                      <br />
                      <strong>CRITERI E RACCOMANDAZIONI - SCUOLE</strong>
                      <ul>
                        <li>9 criteri, 6 raccomandazioni</li>
                      </ul>
                      <strong>CRITERI E RACCOMANDAZIONI - COMUNI</strong>
                      <ul>
                        <li>
                          <strong>Pacchetto cittadino informato:</strong>
                          <br />
                          20 criteri, 3 raccomandazioni
                        </li>
                        <li>
                          <strong>Pacchetto cittadino attivo:</strong>
                          <br />
                          18 criteri, 7 raccomandazioni
                        </li>
                      </ul>
                      <br />
                      <i>App di valutazione per Enti e fornitori</i>
                      <br />
                      L’App di valutazione dell’adesione ai modelli è un applicativo desktop a supporto degli
                      sviluppatori e a disposizione di tutti i soggetti interessati che aiuta a valutare la qualità, le
                      caratteristiche e il rispetto dei criteri di conformità, fornendo all’interno di un report le
                      informazioni necessarie a interpretare i risultati e apportare eventuali migliorie al sito e ai
                      servizi, sia durante la fase di sviluppo (es. lavorazioni in locale) sia alla conclusione dei
                      lavori (es. quando il sito e i servizi sono online e disponibili al pubblico).
                      <br />
                      <br />
                      <ul>
                        <li>
                          Permette la verifica on-demand del sito e dei servizi <strong>in locale e online</strong>
                        </li>
                        <li>Aiuta a valutare il rispetto di criteri e raccomandazioni</li>
                        <li>
                          Fornisce le informazioni necessarie per <strong>interpretare i risultati</strong> e capire
                          come <strong>apportare migliorie.</strong>
                        </li>
                      </ul>
                      <br />
                      L’app è già disponibile in versione beta e quindi soggetta a revisioni e perfezionamenti. Se ne
                      raccomanda l’uso in tutte le fasi di sviluppo del sito per individuare prontamente eventuali
                      aspetti di miglioramento.
                      <br />
                      <span className={`${classes.linkWrapper}`}>
                        <a
                          target="_blank"
                          href="https://github.com/italia/pa-website-validator/releases"
                          title="Link al download dell'app ( Link esterno - Apre su nuova scheda )"
                          aria-label="Link al download dell'app ( Link esterno - Apre su nuova scheda )"
                          rel="noreferrer"
                        >
                          Scarica l'app
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
                        </a>
                      </span>
                      <br />
                      <span className={`${classes.linkWrapper}`}>
                        <a
                          target="_blank"
                          href="https://docs.italia.it/italia/designers-italia/app-valutazione-modelli-docs/it/versione-attuale/"
                          title="Link alle istruzioni dell'app di validazione ( Link esterno - Apre su nuova scheda )"
                          aria-label="Link alle istruzioni dell'app di validazione ( Link esterno - Apre su nuova scheda )"
                          rel="noreferrer"
                        >
                          Scopri di più sull’app e segui le istruzioni per l’installazione
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
                        </a>
                      </span>
                    </p>
                  </div>
                </section>
                <section id="platforms">
                  <div className="point-header">
                    <h3 className={`${classes.contentTitle} mt-5`}>
                      Piattaforme abilitanti - Misure 1.4.3 (app IO e pagoPA) e 1.4.4 (identità digitale SPID/CIE)
                    </h3>
                    <p>
                      Per gli Avvisi dedicati alle rafforzamento delle principali piattaforme abilitanti, il
                      Dipartimento per la trasformazione digitale si avvale della collaborazione di una serie di
                      soggetti esterni certificatori. Attraverso di essi vengono svolte delle verifiche automatiche
                      grazie all’integrazione con specifici registri e database.
                      <br />
                      <br />
                      Le verifiche automatiche svolte da PA digitale 2026 analizzano la presenza di alcuni parametri, e
                      se in presenza di una piena corrispondenza, l’attività viene ritenuta completa, e quindi
                      finanziabile.
                    </p>
                    <Table className={classes.table}>
                      <thead>
                        <tr>
                          <th scope="col" style={{ verticalAlign: 'top' }}>
                            Misura
                          </th>
                          <th scope="col">
                            Soggetto esterno <br />
                            certificatore
                          </th>
                          <th scope="col">
                            Presenza dei parametri verificati <br />
                            nei registri del soggetto esterno
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>app io</td>
                          <td>PagoPA S.p.A.</td>
                          <td>
                            <ul>
                              <li>Il codice IPA della PA</li>
                              <li>Il Service ID del servizio</li>
                              <li>
                                La data di attivazione del servizio (prima
                                <br /> pubblicazione del servizio su App IO)
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>pagoPa</td>
                          <td>PagoPA S.p.A.</td>
                          <td>
                            <ul>
                              <li>Il codice IPA della PA</li>
                              <li>Il codice tassonomico del servizio</li>
                              <li>
                                La data di attivazione del servizio (prima
                                <br /> transazione effettuata con esito positivo)
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>SPID</td>
                          <td>AgID</td>
                          <td>
                            <ul>
                              <li>Il codice IPA della PA</li>
                              <li>La data di adesione a SPID</li>
                              <li>Il protocollo utilizzato: OIDC o SAML2</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>CIE</td>
                          <td>IPZS</td>
                          <td>
                            <ul>
                              <li>Il codice IPA della PA</li>
                              <li>La data di adesione a CIE</li>
                              <li>Il protocollo utilizzato: OIDC o SAML2</li>
                            </ul>
                          </td>
                        </tr>
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
