/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import { Link } from 'gatsby';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import content from '../../contents/rispondere-ai-controlli-sostanziali/rispondere-ai-controlli-sostanziali.yml';
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

// eslint-disable-next-line sonarjs/cognitive-complexity, max-lines-per-function
export const RispondereAiControlliSostanzialiPage = () => {
  const classes = useStyles();

  useEffect(() => {
    announce('Pagina caricata');
  }, []);

  const videoTutorial = sidebar[3].sectionId;

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
                  <a>Rispondere ai controlli sostanziali a campione</a>
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="mb-5 mt-5">
            <Col xs={12} lg={7}>
              <h1 className={classes.titleUpdate}>Rispondere ai controlli sostanziali a campione</h1>
              <div className={classes.subtitleUpdate}>
                I progetti finanziati possono essere sottoposti a verifiche documentali a campione a cui le
                amministrazioni devono rispondere entro 20 giorni lavorativi. Scopri di più sulle modalità di
                svolgimento, la documentazione richiesta e come chiedere assistenza.
              </div>
            </Col>
            <Col xs={12} lg={4} className="offset-lg-1 mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
              <img src={`/assets/come-fare/controlli-sostanziali-blu.svg`} alt="" className={classes.heroImg} />
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
                <section id={sidebar[0].sectionId}>
                  <h3 className={`${classes.contentTitle} mt-5`}>Cosa sono i controlli sostanziali a campione</h3>
                  <p>
                    I controlli sostanziali a campione sono verifiche documentali amministrative sui progetti del PNRR
                    finanziati con i fondi europei del Next Generation EU. Questi controlli sono uno strumento
                    fondamentale per garantire che i fondi erogati siano stati gestiti correttamente, assicurando
                    trasparenza in applicazione di tutte le misure per il contrasto delle irregolarità e delle frodi.
                  </p>
                  <p>
                    Il campionamento dei progetti attuati con la metodologia a Lump Sum è operato attraverso l’analisi
                    dei rischi.
                  </p>
                  <p>
                    Se un progetto della tua amministrazione è oggetto di controlli sostanziali, riceverai una PEC
                    all’indirizzo istituzionale e una richiesta nell’area “Richieste chiarimenti” su PA digitale 2026.
                    Hai a disposizione <strong>20 giorni lavorativi per rispondere alla richiesta</strong>.
                  </p>
                </section>
                <section id={sidebar[1].sectionId}>
                  <h3 className={`${classes.contentTitle} mt-5`}>
                    Come rispondere ai controlli sostanziali a campione
                  </h3>
                  <TimelineVerticalCards item={verticalTimeline} />
                </section>
                <section id={sidebar[2].sectionId}>
                  <h3 className={`${classes.contentTitle} mt-5`}>Documentazione richiesta</h3>
                  <p>
                    Per rispondere alla richiesta di controllo, dovrai compilare e allegare la seguente documentazione,
                    a meno che non sia stata già inviata precedentemente su PA digitale 2026. In alcuni casi dovrai far
                    compilare e firmare i documenti ai diretti interessati.
                    <strong> Le dichiarazioni devono essere firmate digitalmente.</strong>
                  </p>
                  <h4 className="mt-5">Elenco della documentazione inviata (Allegato 1)</h4>
                  <ul>
                    <li>Elenco della documentazione inviata, usando il template Allegato 1 ricevuto via PEC</li>
                  </ul>
                  <p>
                    Per ogni documento presente in lista, indica se il documento è stato inviato o non è stato inviato
                    in risposta ai controlli. Se un documento non è stato inviato, aggiungi la motivazione nella colonna
                    “note”.
                  </p>
                  <a href={`#${videoTutorial}`}>Vai al video tutorial sulla compilazione di questo documento</a>
                  <h4 className="mt-5">Documentazione sulle figure coinvolte nel progetto</h4>
                  <p>Dovrai inviare le dichiarazioni di assenza di conflitto di interesse per le seguenti figure:</p>
                  <ul>
                    <li>
                      <strong>Responsabile Unico del Procedimento (RUP)</strong>, usando il template Allegato 2 ricevuto
                      via PEC
                    </li>
                    <li>
                      <strong>Titolare/i Effettivo/i</strong>, usando il template Allegato 5 ricevuto via PEC
                    </li>
                    <li>
                      <strong>Direttore dell’Esecuzione Contrattuale (DEC)</strong>, usando il template Allegato 3
                      ricevuto via PEC
                    </li>
                    <li>
                      <strong>Personale nominato con Ordine di Servizio</strong>, usando il template Allegato 4 ricevuto
                      via PEC (documentazione necessaria solo se sul progetto si è fatto ricorso a personale interno e
                      non a operatori economici sul mercato)
                    </li>
                    <li>
                      <strong>Commissari e membri della Commissione di Valutazione</strong>
                    </li>
                  </ul>
                  <p>
                    Ricorda che il&nbsp;
                    <strong>
                      Titolare effettivo (TE) è il rappresentante legale della ditta che ha eseguito i lavori
                    </strong>
                    &nbsp;e non il Sindaco del Comune o il Dirigente Scolastico.
                  </p>
                  <p>
                    <strong>Attenzione:</strong> dovrai inviare anche gli <strong>atti di nomina</strong>, se non già
                    inviati in precedenza, ed eventuali <strong>atti di modifica delle nomine</strong>, se nel corso del
                    progetto ci sono state modifiche a queste figure.
                  </p>
                  <p>
                    La documentazione è richiesta soltanto per le figure effettivamente presenti sul progetto. Per le
                    figure non presenti, basterà indicare nel campo note dell’Allegato 1 “Non applicabile” come
                    motivazione della mancata trasmissione della relativa documentazione.
                  </p>
                  <h4 className="mt-5">
                    Documentazione sulle modalità di conservazione della documentazione di progetto
                  </h4>
                  <ul>
                    <li>
                      Una nota testuale, in qualunque formato e possibilmente firmata, che spieghi le modalità con cui
                      vengono conservati i documenti di progetto
                    </li>
                    <li>
                      Uno o più screenshot che danno evidenza del software documentale utilizzato e che i flussi
                      documentali sono identificabili e ordinati secondo adeguati criteri di classificazione
                    </li>
                  </ul>

                  <a href={`#${videoTutorial}`}>Vai al video tutorial per approfondire quali screenshot inviare</a>
                  <h4 className="mt-5">Documentazione sul sistema gestionale di contabilità</h4>
                  <ul>
                    <li>
                      Uno o più screenshot del gestionale che mostrano i capitoli di bilancio in entrata e uscita
                      dedicati al PNRR e l'importo finanziato percepito
                    </li>
                  </ul>
                  <p>
                    <strong>Attenzione:</strong> l’importo presente sul bilancio in entrata deve essere lo stesso
                    ricevuto dal finanziamento e il nome dei capitoli deve far intuire che si tratta di fondi del PNRR.
                  </p>
                  <a href={`#${videoTutorial}`}>Vai al video tutorial per approfondire quali screenshot inviare</a>
                  <h4 className="mt-5">Documentazione sugli obblighi di pubblicità e comunicazione</h4>
                  <ul>
                    <li>
                      Link alla sezione del sito dell’ente dove sono presentati le informazioni e i documenti relative
                      al progetto finanziato
                    </li>
                    <li>
                      Link alla pagina e/o sezione dove viene mostrato il logo “Finanziato dall’Unione Europea — Next
                      Generation EU”
                    </li>
                  </ul>
                  <h4 className="mt-5">
                    Documentazione relativa alla certificazione ambientale (DNSH) — solo per Misura 1.2 Cloud
                  </h4>
                  <ul>
                    <li>
                      Certificazione che attesti il rispetto del principio Do No Significant Harm (DNSH) (ad esempio,
                      Certificazione Uni EN ISO 140001), intestata alla ditta che ha fornito i servizi e valida dalla
                      data dell’affidamento alla data del completamento della fornitura.
                    </li>
                  </ul>
                </section>
                <section id={sidebar[3].sectionId}>
                  <h3 className={`${classes.contentTitle} mt-5`}>Come compilare e procurarsi la documentazione</h3>
                  <p>
                    Questo video tutorial ti guida nella compilazione dei documenti da inviare, in particolare
                    l’allegato 1, gli screenshot sulle modalità di conservazione della documentazione di progetto e gli
                    screenshot sul sistema gestionale della contabilità.
                  </p>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/p2zHvgLDvKg?si=SbOqDyKCy3u_pZzV"
                    title="YouTube video player"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </section>
                <section id={sidebar[4].sectionId}>
                  <h3 className={`${classes.contentTitle} mt-5`}>Richiedi assistenza</h3>
                  <p>
                    Non rispondere alla richiesta chiarimenti aperta su PA digitale 2026 per dubbi o domande, ma solo
                    per inviare la documentazione in risposta ai controlli.
                  </p>
                  <p>
                    Se hai <strong>dubbi o domande</strong>, contatta l’
                    <Link to="/supporto/assistenza">Help Desk</Link>, l’account manager di riferimento o manda una PEC a
                    <a href="mailto:dtd.pnrr@pec.governo.it"> dtd.pnrr@pec.governo.it</a>.
                  </p>
                  <p>
                    Se hai bisogno di <strong>integrare o correggere i documenti inviati</strong>, apri una richiesta
                    con l’Help Desk.
                  </p>
                </section>
                <section id={sidebar[5].sectionId}>
                  <h3 className={`${classes.contentTitle} mt-5`}>Esito dei controlli</h3>
                  <p>
                    I controlli sono condotti attraverso campagne semestrali e le operazioni di verifica possono durare
                    fino a 4 mesi.
                  </p>
                  <p>
                    Le verifiche si chiudono in caso di <strong>esito positivo</strong> e l’amministrazione riceverà una
                    PEC di conferma con un report riassuntivo. In caso di
                    <strong> esito parzialmente positivo o negativo</strong>, l’amministrazione riceverà via PEC
                    informazioni sui prossimi passi da seguire.
                  </p>
                </section>
                <section id={sidebar[6].sectionId}>
                  <h3 className={`${classes.contentTitle} mt-5`}>Riferimenti normativi</h3>
                  <p>
                    I controlli a campione vengono effettuati sulla base della Circolare RGS n. 30 dell’11 agosto 2022 e
                    secondo le modalità previste nel Sistema di gestione e controllo (Si.Ge.Co.) dell’Unità di Missione
                    PNRR.
                  </p>
                </section>
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
