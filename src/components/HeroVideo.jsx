import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';
import PropTypes from 'prop-types';

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

export const HeroVideo = ({ src, description, videoText }) => {
  const classes = useStyle();
  const [collapseOpen, setCollapseOpen] = useState(false);

  return (
    <>
      <div className={classes.heroVideo}>
        <div className={classes.info}>
          <h3>Guarda il video dedicato</h3>
          <p>{description}</p>
        </div>
        <div className={classes.videoContainer}>
          <iframe
            width="100%"
            height="100%"
            src={src}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {videoText ? (
          <Accordion className="mt-5">
            <AccordionHeader active={collapseOpen} onToggle={() => setCollapseOpen(!collapseOpen)}>
              Trascrizione del video
            </AccordionHeader>
            <AccordionBody active={collapseOpen}>
              <p dangerouslySetInnerHTML={{ __html: videoText }} />
            </AccordionBody>
          </Accordion>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

HeroVideo.propTypes = {
  src: PropTypes.string,
  description: PropTypes.string,
  videoText: PropTypes.string,
};
