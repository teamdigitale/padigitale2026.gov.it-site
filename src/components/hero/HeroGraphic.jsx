import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  heroGraphic: {},
});

export const HeroGraphic = ({ className = '', children }) => {
  const classes = useStyles();
  return <div className={`${classes.heroGraphic} ${className}`}>{children}</div>;
};

HeroGraphic.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
