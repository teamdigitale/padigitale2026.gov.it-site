import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const HeroTitle = ({ linkTo = null, title, className = '', Tag = 'h3' }) => (
  <h2 className="h2 mb-4">
    {linkTo ? (
      <Link to={linkTo} className={`text-decoration-none ${className}`}>
        {title}
      </Link>
    ) : (
      <span className={`${className}`}>{title}</span>
    )}
  </h2>
);

HeroTitle.propTypes = {
  className: PropTypes.string,
  linkTo: PropTypes.string,
  Tag: PropTypes.string,
  title: PropTypes.string.isRequired,
};
