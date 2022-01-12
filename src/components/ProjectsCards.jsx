import React, { useState, useEffect, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import { Container, Row, Col, Icon } from 'design-react-kit';
import classNames from 'classnames';

const useStyles = createUseStyles({
  projectsCardSection: {
    backgroundColor: '#F0F6FC',
    paddingBottom: '5.333rem',
    paddingTop: '4.556rem',
  },
  category: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#33485C',
    textTransform: 'uppercase',
    marginBottom: '0.556rem',
    '@media (min-width: 992px)': {
      fontSize: '0.889rem',
    },
  },
  title: {
    fontWeight: '700',
    fontSize: '1.5rem',
    color: '#33485C',
    lineHeight: '1.36',
    '@media (min-width: 992px)': {
      fontSize: '1.778rem',
      lineHeight: '1.4',
    },
  },
  card: {
    borderRadius: '4px',
    boxShadow: '0px 0px 80px rgba(0, 43, 85, 0.1)',
    width: '100%',
    padding: '1.556rem 1.333rem',
    display: 'flex',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '1.556rem',
    fontWeight: '700',
  },
  cardText: {
    fontSize: '0.889rem',
    lineHeight: '1.333rem',
  },
  cardLink: {
    textDecoration: 'none',
    color: '#33485C',

    '&:hover': {
      textDecoration: 'none',
      color: '#33485C',
    },
  },
});
export const ProjectsCards = () => {
  const classes = useStyles();

  return (
    <div className={classes.projectsCardSection}>
      <div className="container pl-3 pr-0">
        <Row className="mb-5">
          <Col xs="12" lg="6" id="beneficiari" className="offset-lg-1">
            <h3 className={classes.category}>Le modalità di accesso</h3>
            <h4 className={classes.title} id="beneficiaries-title">
              Due modalità alternative per accedere alle risorse per la
              transizione digitale
            </h4>
          </Col>
        </Row>
        <Row>
          <Col xs="12" lg="5" className="offset-lg-1 mb-3 mb-lg-0">
            <Link to="#" className={classes.cardLink}>
              <div className={classes.card}>
                <div>
                  <h4 className={classes.cardTitle}>Soluzioni standard</h4>
                  <p className={classes.cardText}>
                    La modalità di accesso prevista per le misure con una platea
                    ampia di beneficiari (oltre 1.000 PA).
                  </p>
                </div>
                <img src="/assets/standard-solution.svg" alt=""></img>
              </div>
            </Link>
          </Col>
          <Col xs="12" lg="5">
            <Link to="#" className={classes.cardLink}>
              <div className={classes.card}>
                <div>
                  <h4 className={classes.cardTitle}>Presentazioni progetti</h4>
                  <p className={classes.cardText}>
                    La modalità di accesso prevista per le misure con una platea
                    ristretta di beneficiari (fino a 1.000 PA).
                  </p>
                </div>
                <img src="/assets/projects-solution.svg" alt=""></img>
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};
