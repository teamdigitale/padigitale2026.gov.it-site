
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Container } from 'design-react-kit';

const useStyle = createUseStyles({
  heroVideo: {
    background: '#F0F6FC',
  },
});

export const HeroVideo = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.heroVideo}>
        <Container>pippo</Container>
      </div>
    </>
  );
};
