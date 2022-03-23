import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import labels from '../../contents/labels.yml';

const useStyles = createUseStyles({
  breadcrumb: {
    padding: '1.563rem 0 0',
    '& .breadcrumb': {
      padding: '0.75rem 0',
    },
    '& .bradcrumb-item a': {
      fontWeight: '600',
      fontSize: '1.125rem',
      '&.active': {
        fontWeight: '400',
        fontSize: '1.125rem',
      },
    },
  },
});

export const Breadcrumb = ({ currentPage }) => {
  const classes = useStyles();
  return (
    <div className="container px-3">
      <div className="row">
        <div className="col-12">
          <nav aria-label={labels.ariaLabel.breadcrumb} className={`${classes.breadcrumb} breadcrumb-container`}>
            <ol className="breadcrumb justify-content-center justify-content-sm-start">
              <li className="breadcrumb-item d-none d-sm-block">
                <Link to="/">Home</Link>
                <span aria-hidden="true" className="separator">
                  /
                </span>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                <span>{currentPage}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  currentPage: PropTypes.string.isRequired,
};
