import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const useStyles = createUseStyles({
  resultContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '170px 0',
    textAlign: 'center',
    '& .btn': {
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
  },
  resultTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
  },
  resultParagraph: {
    fontSize: '1.111rem',
    color: '#33485C',
  },
  linkHome: {
    color: '#06c',
    textDecoration: 'none',
    fontSize: '0.889rem',
    '&:hover': {
      color: '#06c',
      textDecoration: 'underline',
    },
  },
});

export const FormResult = (props) => {
  const classes = useStyles();
  const { image, altImage, title, text, link, btnLabel, btnAriaLabel, error } = props.resultObject;

  return (
    <>
      <div className={classes.resultContainer}>
        <img src={image} alt={altImage}></img>
        <h3 className={`${classes.resultTitle} mt-3`}>{title}</h3>
        <p className={`${classes.resultParagraph} mt-3`}>{text}</p>
        <Link to={link} className="btn btn-primary mt-3" aria-label={btnAriaLabel}>
          {btnLabel}
        </Link>
        {error ? (
          <Link to="/" alt="torna alla home" className={`${classes.linkHome} mt-4`}>
            Torna alla home
          </Link>
        ) : null}
      </div>
    </>
  );
};

FormResult.propTypes = {
  resultObject: PropTypes.object,
  image: PropTypes.string,
  altImage: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  btnLabel: PropTypes.string,
  btnAriaLabel: PropTypes.string,
  error: PropTypes.bool,
};
