import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  category: {
    composes: 'text-uppercase h6 font-weight-semibold',
    letterSpacing: '.9px',
  },
});

export const HeroCategory = ({ title }) => {
  const classes = useStyles();
  return <h3 className={`hero-category ${classes.category}`}>{title}</h3>;
};

HeroCategory.propTypes = {
  title: PropTypes.string,
};
