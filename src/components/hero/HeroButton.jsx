import React from 'react';

export const HeroButton = ({ classButton, href, label }) => (
  <a className={`btn btn-sm ${classButton}`} href={href}>
    {label}
  </a>
);
