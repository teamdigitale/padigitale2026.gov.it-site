import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';

const useStyle = createUseStyles({
  heroVideo: {
    display: 'flex',
    padding: '82px 0 0 1.5rem',
    alignItems: 'flex-start',
    flexDirection: 'column',
    minHeight: '412px',
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      padding: '40px 0',
    },
    '& .collapse-div': {
      border: 'none',
      width: '100%',
    },
    '& .collapse-header button': {
      border: 'none',
      display: 'inline-flex',
      paddingLeft: '0',
      '&::before': {
        position: 'relative',
        order: '2',
        marginLeft: '5px',
      },
      '&.collapsed': {
        color: '#06c',
      },
    },
    '& .collapse-body': {
      paddingLeft: '0',
      paddingRight: '0',
      paddingBottom: '0',
    },
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    '& h4': {
      fontSize: '1.688rem',
      fontWeight: '700',
    },
  },
  videoContainer: {
    flexBasis: '55%',
    height: '100%',
    width: '100%',
    aspectRatio: '16 / 9',
  },
});

export const HeroVideo = () => {
  const classes = useStyle();
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <>
      <div className={classes.heroVideo}>
        <div className={classes.info}>
          <h4>Guarda il video dedicato</h4>
          <p>Scopri come attivare il profilo della tua amministrazione su PA digitale 2026.</p>
        </div>
        <div className={classes.videoContainer}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JXnRZRI5j20"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Accordion className="mt-5">
          <AccordionHeader active={collapseOpen} onToggle={() => setCollapseOpen(!collapseOpen)}>
            Trascrizione del video
          </AccordionHeader>
          <AccordionBody active={collapseOpen}>
            PA digitale 2026 è il punto di accesso alle risorse previste dal PNRR per la transizione digitale della PA.
            <br></br>
            <br></br>
            Registrare la tua amministrazione è semplice:<br></br>● se sei un rappresentante legale di un Ente o un suo
            incaricato, puoi accedere alla piattaforma con identità digitale SPID o CIE.<br></br>● Inserisci la tua
            email istituzionale, e attiva il profilo dell’amministrazione indicando il nome della PA o il codice IPA.
            <br></br>● Verifica i dati del tuo Ente: se c’è qualche incongruenza nei dati, modificali direttamente su
            IPA.<br></br>● La conferma di registrazione avverrà cliccando sul link di verifica che riceverai alla PEC
            del tuo Ente.<br></br>
            <br></br>
            Ora puoi candidare la tua amministrazione agli avvisi pubblici per renderla più digitale, sicura ed
            efficiente.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
};
