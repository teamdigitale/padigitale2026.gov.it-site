import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import links from '../../contents/links.yml';
import { ExternalLink } from '../components/ExternalLink';
import { GlobalStateContext } from '../context/globalContext';

const {
  internalLinks: { privacy, noteLegali },
  externalLinks: { dipartimento, a11y, eu, repubblica, ministeroMitd },
} = links;

const useStyle = createUseStyles({
  mainFooter: {
    backgroundColor: '#fff',
    filter: 'drop-shadow(0px 4px 80px rgba(0, 43, 85, 0.1))',
  },
  mainWrapper: {
    padding: [50, 0],
    '@media (min-width: 992px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: [40, 0],
    },
    '@media (min-width: 1200px)': {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    '& .logos': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '@media (min-width: 992px)': {
        flexDirection: 'row',
      },
      '& a': {
        '&:focus': {
          boxShadow: 'none',
          '& img': {
            outline: '2px solid #ff9900',
          },
        },
      },
    },
  },
  slimFooter: {
    composes: 'it-footer-small-prints py-4',
    backgroundColor: '#01254C',
    '& a': {
      color: '#27D1D6',
    },
  },
  seeMore: {
    color: '#33485C',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '2.5rem',
    display: 'block',
    '&:hover': {
      textDecoration: 'underline',
      color: '#33485C',
    },
    '@media (min-width: 1200px)': {
      marginTop: '0',
    },
  },
  departmentLogo: {
    display: 'block',
    margin: [50, 'auto'],
    maxWidth: '400px',
    width: '100%',
    '@media (min-width: 992px)': {
      width: 'auto',
      display: 'inline-block',
      margin: 0,
      maxHeight: '2.5rem',
      marginLeft: '2.5rem',
      marginRight: '1.2rem',
      paddingLeft: '1.5rem',
      borderLeft: '1px solid #E6E9F2',
    },
  },
  footerLogo: {
    composes: 'footer-logo',
    '&+.footer-logo': {
      marginLeft: '30px',
    },
  },
  logoImg: {
    height: '2.667rem',
    '&.logo-gov': {
      height: '3.556rem',
    },
  },
  logoSeparator: {
    composes: 'mx-2 d-none d-md-block',
  },
  listItem: {
    composes: 'list-inline-item',
    display: 'block',
    '&+.list-inline-item': {
      marginTop: '30px',
    },
    '@media (min-width: 992px)': {
      display: 'inline-block',
      '&+.list-inline-item': {
        marginTop: '0',
      },
    },
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const SlimFooter = () => {
  const classes = useStyle();

  return (
    <div className={classes.slimFooter}>
      <section className="container" aria-labelledby="linkutili-header">
        <ul className="list-inline link-list mb-0 text-center text-md-left">
          <li className={`${classes.listItem} mr-0 mr-md-5`}>
            <Link to={noteLegali.linkTo} className="list-item mid-footer-link mx-4 mx-md-0">
              {noteLegali.label}
            </Link>
          </li>
          <li className={`${classes.listItem} mr-0 mr-md-5`}>
            <Link to={privacy.linkTo} className="list-item mid-footer-link mx-4 mx-md-0">
              {privacy.label}
            </Link>
          </li>
          <li className={`${classes.listItem} mr-0 mr-md-5`}>
            <ExternalLink
              linkTo={a11y.linkTo}
              ariaLabel={a11y.ariaLabel}
              className="list-item mid-footer-link mx-4 mx-md-0"
            >
              {a11y.label}
            </ExternalLink>
          </li>
        </ul>
      </section>
    </div>
  );
};

const MainFooter = () => {
  const classes = useStyle();
  const [{activeItem}, dispatch] = useContext(GlobalStateContext);

  return (
    <div className={`${classes.mainFooter} it-footer-main`}>
      <div className="container text-center text-md-left">
        <div className={classes.mainWrapper}>
          <div className="logos">
            <div className="d-flex align-items-center">
              <ExternalLink linkTo={eu.linkTo} ariaLabel={eu.ariaLabel} className={classes.footerLogo}>
                <img className={classes.logoImg} src="/assets/eu-flag.svg" alt="Unione Europea" />
              </ExternalLink>
              <ExternalLink linkTo={repubblica.linkTo} ariaLabel={repubblica.ariaLabel} className={classes.footerLogo}>
                <img
                  className={`${classes.logoImg} logo-gov`}
                  src="/assets/repubblica-logo-colorato.svg"
                  alt="Governo Italiano"
                />
              </ExternalLink>
            </div>
            <ExternalLink linkTo={ministeroMitd.linkTo} ariaLabel={ministeroMitd.ariaLabel}>
              <img className={classes.departmentLogo} src="/assets/mitd.svg" alt={ministeroMitd.ariaLabel} />
            </ExternalLink>
            <ExternalLink linkTo={dipartimento.linkTo} ariaLabel={dipartimento.ariaLabel}>
              <img src="/assets/dipartimento.svg" alt={dipartimento.ariaLabel} />
            </ExternalLink>
          </div>
          <div className="info text-center">
            {activeItem === 'come-funziona' ?
            <Link
            to="#attori-coinvolti"
            className={classes.seeMore}
          >
            Scopri l&apos;iniziativa
          </Link> :
          <Link
            to="/come-funziona"
            className={classes.seeMore}
            onClick={() =>
              dispatch({
                type: 'SET:HOW_SECTION_ID',
                payload: { howId: 'attori-coinvolti' },
              })
            }
          >
            Scopri l&apos;iniziativa
          </Link>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => (
  <footer className="it-footer" id="footer" aria-labelledby="linkutili-header">
    <h2 id="linkutili-header" className="sr-only">
      Link Utili
    </h2>
    <MainFooter />
    <SlimFooter />
  </footer>
);
