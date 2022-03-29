import React from 'react';
import { Card, CardBody, CardText, CardTitle, Row, Col } from 'design-react-kit';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';

const useStyles = createUseStyles({
  layout: {
    composes: 'offset-lg-1 pl-0',
    '& a': {
      '&:focus': {
        // eslint-disable-next-line sonarjs/no-duplicate-string
        outline: '2px solid #ff9900',
        boxShadow: 'none',
      },
    },
    '& .btn': {
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
  },
  tag: {
    fontSize: '0.888rem',
    color: '#33485C',
    lineHeight: '1.5',
    marginBottom: '0.555rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: '600',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  },
  cleanLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
    '&:focus': {
      outline: '2px solid #ff9900',
      boxShadow: 'none',
    },
  },
  resetButton: {
    padding: '0',
    border: '0',
    textAlign: 'left',
    fontWeight: 'normal',
    height: '100%',
    backgroundColor: 'transparent',
    '&:focus': {
      outline: '2px solid #ff9900',
      boxShadow: 'none',
    },
  },
  colCard: {
    composes: 'mb-3 mb-md-0 col-card',
    '&+.col-card': {
      '@media (min-width: 768px)': {
        marginLeft: '30px',
      },
    },
  },
  sectionTitle: {
    fontSize: '1.555rem',
    color: '#33485C',
    lineHeight: '1.15',
    marginBottom: '3.333rem',
    fontWeight: '700',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      fontSize: '1.777rem',
      textAlign: 'left',
      lineHeight: '1.25',
      marginBottom: '2.666rem',
    },
  },
  cardWrapper: {
    composes: 'rounded',
    boxShadow: '0px 0px 80px rgba(0, 43, 85, 0.1)',
    height: '100%',
    cursor: 'pointer',
    '&:hover': {
      '&.card.card-teaser': {
        '& h5.card-title': {
          textDecoration: 'underline',
        },
      },
    },
    '@media (min-width: 768px)': {
      minHeight: '11.666rem',
    },
    '& + .card': {
      marginTop: '0.888rem',
    },
    '&.card.card-teaser': {
      '& h3.card-title': {
        color: '#0066CC',
        fontSize: '1.555rem',
        fontWeight: '600',
        letterSpacing: '-0.25px',
        lineHeight: '1.4',
        marginBottom: '0.888rem',
      },
      '& .card-text': {
        fontSize: '0.888rem',
        color: '#33485C',
        lineHeight: '1.5',
      },
    },
  },
  sectionMuted: {
    background: '#f2f7fc',
    padding: '5.556rem 0',
  },
});

export const SupportSection = (props) => {
  const classes = useStyles();
  const { title, supportList, buttonLabel } = props;
  return (
    <>
      <section className={classes.sectionMuted} aria-labelledby="support-section">
        <h3 id="support-section" className="sr-only">
          Supporto
        </h3>
        <div className="container px-3">
          <Row>
            <Col md={8} lg={6} className={classes.layout}>
              <p className={classes.tag}>Supporto</p>
              <h4 className={classes.sectionTitle}>{title}</h4>
            </Col>
          </Row>
          <Row>
            <Col className={classes.layout}>
              <Row>
                {supportList.map((card) => (
                  <Col key={card.title} md={5} lg={4} xl={3} className={classes.colCard}>
                    {
                      <Link to={card.link} className={classes.cleanLink}>
                        <Card teaser noWrapper className={classes.cardWrapper}>
                          <CardBody>
                            <CardTitle tag="h3" className={classes.cardTitle}>
                              {card.title}
                            </CardTitle>
                            <CardText className={classes.cardText}>{card.description}</CardText>
                          </CardBody>
                        </Card>
                      </Link>
                    }
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          {props.buttonLabel && (
            <Row>
              <Col md={8} lg={6} className={`${classes.layout} mt-5`}>
                <Link
                  to="/supporto"
                  className="btn btn-primary text-uppercase"
                  aria-label="Scopri di più sulla pagina supporto"
                >
                  {buttonLabel}
                </Link>
              </Col>
            </Row>
          )}
        </div>
      </section>
    </>
  );
};

SupportSection.propTypes = {
  title: PropTypes.string,
  supportList: PropTypes.array,
  buttonLabel: PropTypes.string,
};
