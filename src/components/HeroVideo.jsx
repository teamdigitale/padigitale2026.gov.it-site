import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  heroVideo: {
    display: 'flex',
    padding: '82px 31px 82px 42px',
    alignItems: 'center',
    minHeight: '412px',
    background: '#F0F6FC',
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      padding: '0',
    },
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '45%',
    marginRight: '4.063rem',
    '@media (max-width: 991px)': {
      padding: '2rem',
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

  return (
    <>
      <div className={classes.heroVideo}>
        <div className={classes.info}>
          <h4>Guarda il video dedicato</h4>
          <p>Scopri come creare il profilo della tua amministrazione all&apos;interno della piattaforma PA digitale 2026.</p>
        </div>
        <div className={classes.videoContainer}>
          <iframe
            src="https://player.vimeo.com/video/142548770?h=4205667b4f"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="video-container">
          </iframe>
        </div>
      </div>
    </>
  );
};
