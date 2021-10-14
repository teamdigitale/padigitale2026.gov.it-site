import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import links from '../../contents/links.yml';
import labels from '../../contents/labels.yml';
import { ExternalLink } from '../components/ExternalLink';

const {
  internalLinks: { privacy, credits, noteLegali },
  externalLinks: { dipartimento, agid, a11y },
} = links;

const { footerA11y } = labels;

const useStyle = createUseStyles({
  mainFooter: {
    composes: 'it-footer-main',
    backgroundColor: '#004080',
  },
  slimFooter: {
    composes: 'it-footer-small-prints py-4',
    backgroundColor: '#01254C',
    '& a': {
      color: '#27D1D6',
    },
  },
  footerLogo: {
    height: '2.5rem',
  },
  logoSeparator: {
    composes: 'mx-2 d-none d-md-block',
  },
  '@media (max-width: 300px)': {
    footerLogo: {
      height: '2rem',
    },
  },
});

const SlimFooter = () => {
  const classes = useStyle();
  return (
    <div className={classes.slimFooter}>
      <div className="container">
        <ul className="list-inline link-list mb-0 text-center text-md-left">
          <li className="list-inline-item mr-0 mr-md-5">
            <Link to={noteLegali.linkTo} className="list-item mid-footer-link mx-4 mx-md-0">
              {noteLegali.label}
            </Link>
          </li>
          <li className="list-inline-item mr-0 mr-md-5">
            <Link to={privacy.linkTo} className="list-item mid-footer-link mx-4 mx-md-0">
              {privacy.label}
            </Link>
          </li>
          <li className="list-inline-item mr-0 mr-md-5">
            <ExternalLink
              linkTo={a11y.linkTo}
              ariaLabel={a11y.ariaLabel}
              className="list-item mid-footer-link mx-4 mx-md-0"
            >
              {a11y.label}
            </ExternalLink>
          </li>
          {/* <li className="list-inline-item mr-0 mr-md-5">
            <Link
              to={credits.linkTo}
              className="list-item mid-footer-link mx-4 mx-md-0"
            >
              {credits.label}
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

const MainFooter = () => {
  const classes = useStyle();
  return (
    <div className={classes.mainFooter}>
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-12 d-flex flex-column flex-md-row px-5 pt-4 pb-0">Progetto di</div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-column flex-md-row px-5 pb-4 pt-3">
            <div className="py-2">
              <ExternalLink linkTo={dipartimento.linkTo} ariaLabel={dipartimento.ariaLabel}>
                <img
                  className={`${classes.footerLogo} pr-2`}
                  src="/assets/repubblica-logo.svg"
                  alt="Logo della Repubblica Italiana"
                />
                <img
                  className={classes.footerLogo}
                  src="/assets/dtd.svg"
                  alt="Logo Dipartimento per la trasformazione digitale"
                />
              </ExternalLink>
            </div>
            <div aria-hidden="true" className={classes.logoSeparator} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-column flex-md-row px-5 pt-0 pb-4">
            <div className="small" dangerouslySetInnerHTML={{ __html: footerA11y }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => (
  <footer className="it-footer" id="footer">
    <MainFooter />
    <SlimFooter />
  </footer>
);
