import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  body: {
    color: '#33485C',
    fontSize: '1.5rem',
    lineHeight: '1.5',
    '@media (min-width: 992px)': {
      fontSize: '1.333rem',
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
      display: 'block',
    },
  },
});

export const HeroBody = ({ html }) => {
  const classes = useStyles();
  return <div className={`hero-body ${classes.body}`} dangerouslySetInnerHTML={{ __html: html }} />;
};

HeroBody.propTypes = {
  html: PropTypes.string.isRequired,
};
