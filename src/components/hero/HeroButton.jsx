import React from 'react';

export const HeroButton = ({ classButton, href, label, ariaLabel, rel, target }) => (
  <a className={`btn btn-sm ${classButton}`} href={href} aria-label={ariaLabel} rel={rel} target={target}>
    {label}
  </a>
);
