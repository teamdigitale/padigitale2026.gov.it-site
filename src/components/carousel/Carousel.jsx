import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Card, CardBody, CardCategory, CardTitle, CardText } from 'design-react-kit';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DesktopSwiper } from '../DesktopSwiper';

const useStyles = createUseStyles({
  heroCards: {
    composes: 'card-bg rounded',
    height: '250px',
    '@media (min-width: 992px)': {
      height: 'auto',
    },
    '&.card.card-bg': {
      '@media (max-width: 992px)': {
        marginLeft: '0',
      },
    },
    '& .card-body': {
      boxShadow: '0px 0px 20px rgb(0 43 85 / 4%);',
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
    '&.card:after': {
      content: 'none',
    },
  },
  heroCarouselTitle: {
    color: '#fff',
    fontSize: '1.556rem',
    whiteSpace: 'nowrap',
  },
  newsUpdateSection: {
    backgroundColor: '#fff',
    padding: '1.111rem 0',
    '& .swiper': {
      margin: '0 -1.111rem',
      '@media (max-width: 992px)': {
        margin: '0',
      },
    },
    '& .swiper-wrapper': {
      padding: '0 1.667rem 1.667rem',
      margin: '0 -1.667rem -1.667rem',
      '@media (max-width: 992px)': {
        margin: '0 -1.667rem -1.667rem',
      },
    },
    '& .swiper-slider': {
      padding: '1.111rem',
    },
    '& .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet': {
      margin: '0 0.889rem',
    },
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
          <DesktopSwiper
            slides={slides}
            breakpoints={{
              slidesPerView: 1,
              992: {
                slidesPerView: 3,
              },
            }}
            pagination
          />
        </div>
      </div>
    </>
  );
};
