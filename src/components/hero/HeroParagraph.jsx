import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  paragraph: {
    composes: 'd-lg-block',
    fontFamily: 'Titillium Web,Geneva,Tahoma,sans-serif',
    '@media (max-width: 992px)': {
      textAlign: 'center',
    }
  },
});

export const HeroParagraph = ({ text }) => {
  const classes = useStyles();
  return <p className={classes.paragraph} dangerouslySetInnerHTML={{ __html: text }}></p>;
};
