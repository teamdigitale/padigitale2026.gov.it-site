import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'design-react-kit';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DesktopSwiper } from '../DesktopSwiper';

const useStyles = createUseStyles({
  heroCards: {
    composes: 'card-bg rounded',
    backgroundColor: '#ffffff',
    '@media (min-width: 992px)': {
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
      textAlign: 'center',
      '@media (min-width: 992px)': {
        order: '0',
        textAlign: 'left',
      },
      '& .category-top': {
        '& a.category': {
          fontSize: '0.778rem',
          fontWeight: '600',
          color: '#33485C',
        },
      },
      '& h5.card-title': {
        color: '#0066CC',
        fontSize: '1.75rem',
        fontWeight: 'bold',
        lineHeight: '1.43',
        marginBottom: '0.889rem',
        '@media (min-width: 992px)': {
          color: '#33485C',
        },
      },
      '& .card-text': {
        color: '#33485C',
        fontSize: '1.125rem',
        fontFamily: 'Titillium Web',
        fontWeight: '400',
        lineHeight: '1.28',
        marginBottom: '7.25rem',
        '@media (min-width: 992px)': {
          marginBottom: '3.778rem',
        },
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
  heroCardImg: {
    maxHeight: '160px',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    '@media (min-width: 992px)': {
      maxHeight: '100%',
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      borderTopLeftRadius: '0',
    },
  },
  heroCarouselTitle: {
    color: '#fff',
    fontSize: '1.556rem',
    whiteSpace: 'nowrap',
  },
  investmentCarouselSection: {
    backgroundColor: '#fff',
    padding: '3.125rem 0 4.5rem 0',
    overflow: 'hidden',
    '@media (min-width: 992px)': {
      padding: '2.222rem 0 3.889rem 0',
    },
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
    overflow: 'visible',
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
        <img className={classes.heroCardImg} src={`/assets/${element.image}`} alt="" />
      </Card>
    </>
  ));

  return (
    <>
      <div className={classes.investmentCarouselSection}>
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
                }}
                className={classes.noHidden}
                mobilePagination
                desktopNavigation
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
