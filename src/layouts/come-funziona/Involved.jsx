import React from 'react';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col, Card, CardBody, CardText } from 'design-react-kit';
import PropTypes from 'prop-types';

const useStyle = createUseStyles({
  involvedSection: {
    backgroundColor: '#ffffff',
    padding: '4rem 0',
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
    marginBottom: '2.5rem',
    '@media (min-width: 992px)': {
      fontSize: '1.778rem',
      lineHeight: '1.4',
      marginBottom: '3.111rem',
    },
  },
  actorsCard: {
    composes: 'no-after',
    marginBottom: '2.5rem',
    '@media (min-width: 992px)': {
      marginBottom: '2.778rem',
    },
    '&.card': {
      '& .card-body': {
        padding: '0',
        '& .card-text': {
          fontFamily: 'Titillium Web',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '400',
          '@media (min-width: 992px)': {
            fontSize: '0.889rem',
            lineHeight: '1.333rem',
          },
        },
      },
    },
  },
  actorsCardImageWrapper: {
    height: '3rem',
    marginBottom: '1rem',
    '@media (min-width: 992px)': {
      height: '2.667rem',
      marginBottom: '1.333rem',
    },
  },
  actorsCardImage: {
    height: '100%',
    maxWidth: '100%',
  },
});

export const Involved = (props) => {
  const classes = useStyle();
  const { category, title, cards } = props;

  const actorsCards = cards.map((card) => (
    <Col key={card.id} xs="12" lg="4" className="offset-lg-1" role="listitem">
      <Card className={classes.actorsCard} noWrapper>
        <div className={classes.actorsCardImageWrapper}>
          <img className={classes.actorsCardImage} src={card.image} alt="" />
        </div>
        <CardBody>
          <CardText dangerouslySetInnerHTML={{ __html: card.text }} />
        </CardBody>
      </Card>
    </Col>
  ));

  return (
    <>
      <div className={classes.involvedSection}>
        <Container tag="section" aria-labelledby="involved-actors-title" className="px-3">
          <Row>
            <Col xs="12" lg="5" className="offset-lg-1" id="attori-coinvolti">
              <h3 className={classes.category}>{category}</h3>
              <h4 className={classes.title} id="involved-actors-title">
                {title}
              </h4>
            </Col>
          </Row>
          <Row role="list">{actorsCards}</Row>
        </Container>
      </div>
    </>
  );
};

Involved.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  cards: PropTypes.array,
};
