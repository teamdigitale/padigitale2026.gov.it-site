import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  body: {
    color: '#33485C',
    fontSize: '18px',
    fontFamily: 'Titillium Web',
    '@media (min-width: 992px)': {
      maxWidth: '480px',
    },
  },
});

export const HeroBody = ({ html }) => {
  const classes = useStyles();
  return <div className={classes.body} dangerouslySetInnerHTML={{ __html: html }} />;
};

HeroBody.propTypes = {
  html: PropTypes.string.isRequired,
};
