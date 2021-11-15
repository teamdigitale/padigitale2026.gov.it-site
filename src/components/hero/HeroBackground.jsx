import React from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  heroImg: {
    position: 'absolute',
    right: '0',
    top: '0',
    maxHeight: '100%',
    maxWidth: '100%',
    '@media (max-width: 992px)': {
      position: 'relative',
      margin: '0 auto',
    },
    '&.full': {
      width: '100%',
      objectFit: 'cover',
      '@media (max-width: 992px)': {
        position: 'absolute',
        right: '0',
        top: '0',
      },
    },
  },
});

export const HeroBackground = ({ image, className }) => {
  const classes = useStyles();
  const heroBgClasses = classNames(classes.heroImg, className);
  return <img src={`/assets/${image}`} alt="" className={heroBgClasses} />;
};

HeroBackground.propTypes = {
  image: PropTypes.any,
  className: PropTypes.any,
};
