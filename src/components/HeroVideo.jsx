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
            src="https://player.vimeo.com/video/142548770?h=4205667b4f"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="video-container"
          ></iframe>
        </div>
        <Accordion className="mt-5">
          <AccordionHeader active={collapseOpen} onToggle={() => setCollapseOpen(!collapseOpen)}>
            Trascrizione del video
          </AccordionHeader>
          <AccordionBody active={collapseOpen}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
            sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
};
