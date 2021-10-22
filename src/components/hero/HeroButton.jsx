import React from 'react';
import PropTypes from 'prop-types';

export const HeroButton = ({ classButton, href, label }) => {
  return (
    <a className={`btn btn-sm ${classButton}`} href={href}>
    {label}
    </a>
  );
};