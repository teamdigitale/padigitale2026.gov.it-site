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
    height: '250px',
    '@media (min-width: 992px)': {
      height: 'auto',
    },
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
        '@media (min-width: 992px)': {
          minHeight: '2.889rem',
        },
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
    color: '#fff',
    fontSize: '1.556rem',
    whiteSpace: 'nowrap',
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
      <Card key={element.id} className={classes.heroCards} spacing noWrapper>
        <CardBody>
          <CardCategory>{element.category}</CardCategory>
          <CardTitle tag="h5">{element.title}</CardTitle>
          <CardText>{element.description}</CardText>
          <div className="source">
            {element.source}
            <img src={`/assets/external-link.svg`} alt="" />
          </div>
        </CardBody>
      </Card>
    </>
  ));

  return (
    <>
      <div className={classes.newsUpdateSection}>
        <div className="container">
          {title ? (
            <Row>
              <Col xs="12" lg="4">
                <h3 className={classes.heroCarouselTitle}>{title}</h3>
              </Col>
            </Row>
          ) : (
            ''
          )}
          <DesktopSwiper slides={slides} />
        </div>
      </div>
    </>
  );
};

HeroCarousel.propTypes = {
  content: PropTypes.arrayOf(PropTypes.node),
};
