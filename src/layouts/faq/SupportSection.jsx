import React from 'react';
import { Section, Card, CardBody, CardText, CardTitle, Button, Row, Col } from 'design-react-kit';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  layout: {
    composes: 'offset-lg-1',
  },
  tag: {
    fontSize: '0.888rem',
    color: '#33485C',
    lineHeight: '1.5',
    marginBottom: '0.555rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left',
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
      <Section color="muted">
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
                  <Col key={card.title} md={4} lg={3} className="mb-3 mb-md-0">
                    <Card teaser noWrapper className={classes.cardWrapper} onClick={card.title == "Contatti" ? handleToggle : null}>
                      <CardBody>
                        <CardTitle tag="h5" className={classes.cardTitle}>
                          {card.title}
                        </CardTitle>
                        <CardText className={classes.cardText}>{card.description}</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          {props.buttonLabel && (
            <Row>
              <Col md={8} lg={6} className={`${classes.layout} mt-5`}>
                <Button color="primary" href={props.href}>
                  {buttonLabel}
                </Button>
              </Col>
            </Row>
          )}
        </div>
      </Section>
    </>
  );
};
