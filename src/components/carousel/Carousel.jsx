import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardCategory,
  CardTitle,
  CardText,
  CardReadMore,
} from 'design-react-kit';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DesktopSwiper } from '../DesktopSwiper';

const useStyles = createUseStyles({
  heroCards: {
    composes: 'card-bg rounded',
    '& .card-body': {
      '& .category-top': {
        '& a.category': {
          fontSize: '0.778rem',
          fontWeight: '600',
          color: '#33485C',
        },
      },
      '& h5.card-title': {
        color: '#0066CC',
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: '1.26',
        minHeight: '2.889rem',
      },
      '& .card-text': {
        color: '#33485C',
        fontSize: '0.889rem',
        fontFamily: 'Titillium Web',
        fontWeight: '400',
        lineHeight: '1.24',
        marginBottom: '2.222rem',
      },
      '& .source': {
        color: '#33485C',
        fontSize: '0.889rem',
        fontWeight: '600',
        lineHeight: '1.24',
        display: 'inline-flex',
        alignItems: 'center',
        '& img': {
          marginLeft: '0.278rem',
        },
      },
    },
    '&:after': {
      content: 'none',
    },
  },
  heroCarouselTitle: {
    color: "#fff",
    fontSize: "1.75rem",
    marginBottom: "2rem",
  },
  newsUpdateSection: {
    backgroundColor: '#E5E5E5',
    padding: '20px 0',
  },
});
// const carousel = React.createRef();

export const HeroCarousel = ({ content, title }) => {
  const classes = useStyles();
  const slides = content.map((element) => (
    <>
      {title ? (
        <Row>
          <Col xs="12" lg="4">
            <h3 className={classes.heroCarouselTitle}>{title}</h3>
          </Col>
        </Row>
      ) : (
        ''
      )}
      <Row key={element.id}>
        {element.slide.map((card) => (
          <Col key={card.id} xs="12" lg="4">
            <Card className={classes.heroCards} spacing noWrapper>
              <CardBody>
                <CardCategory>{card.category}</CardCategory>
                <CardTitle tag="h5">{card.title}</CardTitle>
                <CardText>{card.description}</CardText>
                <div className="source">
                  {card.source}
                  <img src={`/assets/external-link.svg`} alt="" />
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  ));

  return (
    <>
      <div className={classes.newsUpdateSection}>
        <div className="container">
          <DesktopSwiper slides={slides} />
        </div>
      </div>
    </>
  );
};

HeroCarousel.propTypes = {
  content: PropTypes.arrayOf(PropTypes.node),
};
