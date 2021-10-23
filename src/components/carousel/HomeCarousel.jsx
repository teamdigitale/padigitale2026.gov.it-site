import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'design-react-kit';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DesktopSwiper } from '../DesktopSwiper';

const useStyles = createUseStyles({
  heroCards: {
    composes: 'card-bg rounded',
    height: '250px',
    backgroundColor: '#ffffff',
    '@media (min-width: 992px)': {
      height: 'auto',
      flexDirection: 'row',
    },
    '&.card.card-bg': {
      '@media (max-width: 992px)': {
        marginLeft: '0',
      },
    },
    '& .card-body': {
      boxShadow: '0px 0px 20px rgb(0 43 85 / 4%);',
      padding: '2.667rem',
      order: '1',
      '@media (min-width: 992px)': {
        order: '0',
      },
      '& .category-top': {
        '& a.category': {
          fontSize: '0.778rem',
          fontWeight: '600',
          color: '#33485C',
        },
      },
      '& h5.card-title': {
        color: '#33485C',
        fontSize: '1rem',
        fontWeight: 'bold',
        lineHeight: '1.4',
        marginBottom: '0.889rem',
        '@media (min-width: 992px)': {
          fontSize: '1.556rem',
        },
      },
      '& .card-text': {
        color: '#33485C',
        fontSize: '1rem',
        fontFamily: 'Titillium Web',
        fontWeight: '400',
        lineHeight: '1.28',
        marginBottom: '3.778rem',
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
    '& .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet':
      {
        margin: '0 0.889rem',
      },
  },
  noHidden: {
    overflow: 'unset',
  },
});

export const HomeCarousel = ({ content, title }) => {
  const classes = useStyles();

  const slides = content.map((element) => (
    <>
      <Card key={element.id} className={classes.heroCards} spacing noWrapper>
        <CardBody>
          <CardTitle tag="h5">{element.title}</CardTitle>
          <CardText dangerouslySetInnerHTML={{ __html: element.description }} />
          <Button color="primary" className="text-uppercase">
            {element.button}
          </Button>
        </CardBody>
        <img src={`/assets/${element.image}`} alt="" />
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
          <Row>
            <Col xs="12" lg="10" className="offset-lg-1">
              <DesktopSwiper
                slides={slides}
                breakpoints={{
                  slidesPerView: 1,
                  pagination: true,

                  992: {
                    pagination: false,
                  },
                }}
                className={classes.noHidden}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

HomeCarousel.propTypes = {
  content: PropTypes.any,
  title: PropTypes.any,
};
