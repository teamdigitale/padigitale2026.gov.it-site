/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const HeroTitle = ({ linkTo = null, title, className = '', Tag, id }) => {
  Tag ? Tag : (Tag = 'h3');
  return (
    <Tag id={id} className="h2 mb-4">
      {linkTo ? (
        <Link to={linkTo} className={`text-decoration-none ${className}`}>
          {title}
        </Link>
      ) : (
        <span className={`${className}`}>{title}</span>
      )}
    </Tag>
  );
};

HeroTitle.propTypes = {
  className: PropTypes.string,
  linkTo: PropTypes.string,
  Tag: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
};
