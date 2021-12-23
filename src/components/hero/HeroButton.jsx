import React from 'react';
import PropTypes from 'prop-types';

export const HeroButton = ({ classButton, href, label, ariaLabel, rel, target }) => (
  <a className={`btn btn-sm ${classButton}`} href={href} aria-label={ariaLabel} rel={rel} target={target}>
    {label}
  </a>
);

HeroButton.propTypes = {
  classButton: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.string,
};
