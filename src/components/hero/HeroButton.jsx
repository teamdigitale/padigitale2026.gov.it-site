import React from 'react';
import PropTypes from 'prop-types';

export const HeroButton = ({ classButton, href, label, ariaLabel, rel, target }) => (
  <a className={`btn btn-sm ${classButton}`} href={href} aria-label={ariaLabel} rel={rel} target={target}>
    {label}
  </a>
);

HeroButton.propTypes = {
  classButton: PropTypes.any,
  href: PropTypes.any,
  label: PropTypes.any,
  ariaLabel: PropTypes.any,
  rel: PropTypes.any,
  target: PropTypes.any,
};
