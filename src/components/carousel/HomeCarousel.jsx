import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
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
      padding: '1.5rem',
      order: '1',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '@media (min-width: 992px)': {
        order: '0',
        padding: '2.667rem',
        textAlign: 'left',
        alignItems: 'flex-start',
      },
      '& .category-top': {
        '& a.category': {
          fontSize: '0.778rem',
          fontWeight: '600',
          color: '#33485C',
        },
      },
      '& h4.card-title': {
        color: '#0066CC',
        fontSize: '1.778rem',
        fontWeight: 'bold',
        lineHeight: '1.43',
        marginBottom: '0.889rem',
        '@media (min-width: 992px)': {
          color: '#33485C',
        },
      },
      '& .card-text': {
        color: '#33485C',
        fontSize: '1rem',
        fontFamily: 'Titillium Web',
        fontWeight: '400',
        lineHeight: '1.556rem',
        marginBottom: '2rem',
        '@media (min-width: 992px)': {
          marginBottom: '1.222rem',
        },
      },
      '& button': {
        marginTop: 'auto',
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
    maxHeight: '15rem',
    minHeight: '10rem',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    objectFit: 'cover',
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
    '& .swiper-wrapper .swiper-slider': {
      padding: '1.111rem',
    },
    '& .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet': {
      margin: '0 0.889rem',
    },
  },
  noHidden: {
    overflow: 'visible',
  },
});

export const HomeCarousel = ({ content, title }) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    });
  }, []);

  const slides = content.map((element) => (
    <>
      <Card key={element.id} className={classes.heroCards} spacing noWrapper>
        <CardBody>
          <CardTitle tag="h4">{element.title}</CardTitle>
          <CardText dangerouslySetInnerHTML={{ __html: element.description }} />
          <Link
            aria-label={`Scopri di più su ${element.title}`}
            to={element.linkTo}
            className="text-uppercase btn btn-primary"
          >
            {element.button}
          </Link>
        </CardBody>
        {isMobile ? (
          <img className={classes.heroCardImg} src={`/assets/${element.imageMobile}`} alt="" />
        ) : (
          <img className={classes.heroCardImg} src={`/assets/${element.image}`} alt="" />
        )}
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
                title="home hero carousel"
                idCarousel="home-hero-carousel"
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
