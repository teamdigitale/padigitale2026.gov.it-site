import React from 'react';
import { Section, Card, CardBody, CardText, CardTitle, Button, Row, Col } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';

const useStyles = createUseStyles({
  layout: {
    composes: 'offset-lg-1 px-3',
    '& a': {
      '&:focus': {
        outline: '2px solid #ff9900',
        boxShadow: 'none',
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
      '& h5.card-title': {
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
});

export const SupportSection = (props) => {
  const classes = useStyles();
  const { title, supportList, buttonLabel, handleToggle } = props;
  return (
    <>
      <section className="section section-muted" aria-labelledby="support-section">
        <h3 id="support-section" className="sr-only">
          Supporto
        </h3>
        <div className="container">
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
                  <Col key={card.title} md={5} lg={3} className={classes.colCard}>
                    {card.isModal ? (
                      <div
                        role="button"
                        tabIndex="0"
                        onKeyPress={handleToggle}
                        onClick={handleToggle}
                        className={classes.resetButton}
                      >
                        <Card teaser noWrapper className={classes.cardWrapper}>
                          <CardBody>
                            <CardTitle tag="h5" className={classes.cardTitle}>
                              {card.title}
                            </CardTitle>
                            <CardText className={classes.cardText}>{card.description}</CardText>
                          </CardBody>
                        </Card>
                      </div>
                    ) : (
                      <Link to="/faq" className={classes.cleanLink}>
                        <Card teaser noWrapper className={classes.cardWrapper}>
                          <CardBody>
                            <CardTitle tag="h5" className={classes.cardTitle}>
                              {card.title}
                            </CardTitle>
                            <CardText className={classes.cardText}>{card.description}</CardText>
                          </CardBody>
                        </Card>
                      </Link>
                    )}
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
