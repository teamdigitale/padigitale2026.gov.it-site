import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import { Row, Col } from 'design-react-kit';

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
  cardModality: {
    fontSize: '0.889rem',
    fontWeight: '600',
    color: '#33485C',
    marginBottom: '0.778rem',
    display: 'block',
    textTransform: 'uppercase',
  },
  card: {
    borderRadius: '4px',
    background: '#FFFFFF',
    boxShadow: '0px 0px 80px rgba(0, 43, 85, 0.1)',
    width: '100%',
    padding: '1.556rem 1.333rem',
    minHeight: '260px',
    '@media (max-width: 992px)': {
      padding: '1.667rem 1.333rem',
    },
  },
  cardBody: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      marginLeft: '1.111rem',
    },
    '@media (max-width: 992px)': {
      flexDirection: 'column-reverse',
      alignItems: 'center',
      textAlign: 'center',
      '& img': {
        marginBottom: '1.111rem',
        marginLeft: '0',
        width: '7.778rem',
      },
      '&>div': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  },
  cardTitle: {
    fontSize: '1.556rem',
    fontWeight: '700',
    '@media (max-width: 992px)': {
      marginTop: '1.167rem',
    },
  },
  cardText: {
    fontSize: '0.889rem',
    lineHeight: '1.333rem',
    paddingRight: '1.667rem',
    marginBottom: '1.889rem',
    '@media (max-width: 992px)': {
      fontSize: '1rem',
      maxWidth: '80%',
      marginBottom: '1.667rem',
      paddingRight: '0',
    },
  },
  cardFooter: {
    '@media (max-width: 992px)': {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },
  },
  columnCard: {
    composes: 'column-card',
    '@media (max-width: 992px)': {
      padding: '0 1rem',
    },
    '& + .column-card': {
      '@media (max-width: 992px)': {
        marginTop: '2.222rem',
      },
    },
  },
});
export const ProjectsCards = (item) => {
  const classes = useStyles();
  const projectsCardsItem = item.item;

  return (
    <div className={classes.projectsCardSection}>
      <div className="container pl-lg-3 pl-0 pr-0">
        <Row className="mb-5 ml-0 mr-0">
          <Col xs="12" lg="6" id="beneficiari-pc" className={`${classes.columnCard} offset-lg-1`}>
            <h3 className={classes.category}>{projectsCardsItem.littleTitle}</h3>
            <h4 className={classes.title} id="beneficiaries-title-pc">
              {projectsCardsItem.title}
            </h4>
          </Col>
        </Row>
        <Row className="ml-0 mr-0">
          <Col xs="12" lg="5" className={`${classes.columnCard} offset-lg-1 mb-3 mb-lg-0`}>
            <span className={classes.cardModality}>{projectsCardsItem.modalityLeft}</span>
            <div className={classes.card}>
              <div className={classes.cardBody}>
                <div>
                  <h4 className={classes.cardTitle}>{projectsCardsItem.cardTitleLeft}</h4>
                  <p className={classes.cardText}>{projectsCardsItem.cardTextLeft}</p>
                </div>
                <img src="/assets/standard-solution.svg" alt=""></img>
              </div>
              <div className={classes.cardFooter}>
                <Link to="/soluzione-standard" className="btn text-uppercase btn-primary">
                  {projectsCardsItem.buttonLabelLeft}
                </Link>
              </div>
            </div>
          </Col>
          <Col xs="12" lg="5" className={classes.columnCard}>
            <span className={classes.cardModality}>{projectsCardsItem.modalityRight}</span>
            <div className={classes.card}>
              <div className={classes.cardBody}>
                <div>
                  <h4 className={classes.cardTitle}>{projectsCardsItem.cardTitleRight}</h4>
                  <p className={classes.cardText}>{projectsCardsItem.cardTextRight}</p>
                </div>
                <img src="/assets/projects-solution.svg" alt=""></img>
              </div>
              <div className={classes.cardFooter}>
                <Link to="/soluzione-progetti" className="btn text-uppercase btn-primary">
                  {projectsCardsItem.buttonLabelRight}
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
