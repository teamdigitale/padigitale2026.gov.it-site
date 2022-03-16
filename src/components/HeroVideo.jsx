import React from 'react';
import { createUseStyles } from 'react-jss';
import { Container } from 'design-react-kit';

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
          <p>Scopri come creare il profilo della tua amministrazione all’interno della piattaforma PA digitale 2026.</p>
        </div>
        <div className={classes.videoContainer}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/u31qwQUeGuM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
