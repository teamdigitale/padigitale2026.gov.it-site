import React, { Fragment, useState } from 'react';
import {
  Section,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Row,
  Col,
} from 'design-react-kit';
// import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import { questions } from '../../../contents/faq-page/faq.yml';

const useStyles = createUseStyles({
  layout: {
    composes: 'offset-lg-1',
  },
  tag: {
    fontSize: '16px',
    color: '#33485C',
    lineHeight: '1.5',
    marginBottom: '10px',
    textTransform: 'uppercase',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  },
  sectionTitle: {
    fontSize: '28px',
    color: '#33485C',
    lineHeight: '1.15',
    marginBottom: '60px',
    fontWeight: '700',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      fontSize: '32px',
      textAlign: 'left',
      lineHeight: '1.25',
      marginBottom: '48px',
    },
  },
  cardWrapper: {
    composes: 'rounded',
    boxShadow: '0px 0px 80px rgba(0, 43, 85, 0.1)',
    '@media (min-width: 768px)': {
      minHeight: '210px',
    },
    '& + .card': {
      marginTop: '16px'
    },
    '&.card.card-teaser': {
      '& h5.card-title': {
        color: '#0066CC',
        fontSize: '28px',
        fontWeight: '600',
        letterSpacing: '-0.25px',
        lineHeight: '1.4',
        marginBottom: '16px',
      },
      '& .card-text': {
        fontSize: '16px',
        color: '#33485C',
        lineHeight: '1.5',
      },
    },
  },
});

export const SupportSection = (props) => {
  const classes = useStyles();
  return (
    <>
      <Section color="muted">
        <div className="container">
          <Row>
            <Col md={8} lg={6} className={classes.layout}>
              <p className={classes.tag}>Supporto</p>
              <h4 className={classes.sectionTitle}>
                Non hai trovato le risposte che cerchi? Vuoi inviare
                suggerimenti o ricevere supporto?
              </h4>
            </Col>
          </Row>
          <Row>
            <Col className={classes.layout}>
              <Row>
                {props.supportList.map((card, i) => {
                  return (
                    <Col md={4} lg={3} className="mb-3 mb-md-0">
                      <Card teaser noWrapper className={classes.cardWrapper}>
                        <CardBody>
                          <CardTitle tag="h5" className={classes.cardTitle}>
                            {card.title}
                          </CardTitle>
                          <CardText className={classes.cardText}>
                            {card.description}
                          </CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </div>
      </Section>
    </>
  );
};
