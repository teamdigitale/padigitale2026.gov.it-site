import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Card, CardBody, CardTitle } from 'design-react-kit';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { DesktopSwiper } from '../DesktopSwiper';

const useStyles = createUseStyles({
  heroCards: {
    composes: 'card-bg rounded',
    height: '100%',
    boxShadow: '0px 0px 80px rgba(0, 43, 85, 0.05)',
    '&.card.card-bg': {
      '@media (max-width: 992px)': {
        marginLeft: '0',
      },
    },
    '& .card-body': {
      // boxShadow: '0px 0px 20px rgb(0 43 85 / 4%);',
      display: 'flex',
      flexDirection: 'column',
      '& .category': {
        fontSize: '0.778rem',
        fontWeight: '600',
        color: '#33485C',
        marginBottom: '1rem',
        textTransform: 'uppercase',
      },
      '& .card-text': {
        color: '#33485C',
        fontSize: '1rem',
        fontFamily: 'Titillium Web',
        fontWeight: '400',
        lineHeight: '1.24',
        marginBottom: '1.125rem',
        '@media (min-width: 992px)': {
          marginBottom: '0.778rem',
          fontSize: '0.889rem',
          lineHeight: '1.44',
        },
      },
      '& .source': {
        color: '#33485C',
        fontSize: '1rem',
        fontWeight: '600',
        lineHeight: '1.24',
        display: 'inline-flex',
        alignItems: 'center',
        '@media (min-width: 992px)': {
          fontSize: '0.889rem',
          lineHeight: '1.44',
        },
        '& img': {
          marginLeft: '0.278rem',
        },
      },
    },
    '&.card:after': {
      content: 'none',
    },
  },
  noticesCarouselTitle: {
    color: '#33485C',
    fontSize: '1.556rem',
    whiteSpace: 'nowrap',
    fontWeight: '600',
    margin: 0,
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  noticesSection: {
    backgroundColor: '#fff',
    padding: '5.556rem 0',
    '& .swiper': {
      margin: '0 -1.111rem',
      '@media (max-width: 992px)': {
        margin: '0',
      },
    },
    '& .swiper-wrapper': {
      padding: '1rem 1.667rem 1.667rem',
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
    '& .btn': {
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
  },
  noticeLabel: {
    fontSize: '0.778rem',
    fontWeight: '400',
    lineHeight: '1.444rem',
    marginBottom: '1.389rem',
    color: '#5A768A',
    '@media (max-width:991px)': {
      fontSize: '0.875rem',
    },
  },
  dueDate: {
    fontSize: '0.778rem',
    fontWeight: '600',
    lineHeight: '1.444rem',
    color: '#33485C',
    '@media (max-width:991px)': {
      fontSize: '1rem',
    },
  },
  dueDateDigit: {
    fontSize: '0.833rem',
    fontWeight: '400',
    marginLeft: '5px',
    '@media (max-width:991px)': {
      fontSize: '1rem',
    },
  },
  noticeInfo: {
    composes: 'notice-info',
    fontSize: '1.111',
    fontWeight: '600',
    lineHeight: '1.444rem',
    color: '#06c',
    '@media (max-width:991px)': {
      fontSize: '1.125rem',
    },
  },
  cardWrapper: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      '& .notice-info': {
        textDecoration: 'underline',
      },
    },
  },
});

export const NoticesCarousel = ({ content, title }) => {
  const classes = useStyles();
  const records = content;
  const formatDate = (stringDate) => {
    const date = new Date(stringDate);
    return date.toLocaleDateString('it-IT');
  };

  const slides = records.map((element) => (
    <>
      <Card key={element.codiceBando} className={classes.heroCards} spacing noWrapper>
        <Link
          to={`https://areariservata.padigitale2026.gov.it/Pa_digitale2026_dettagli_avviso?id=${element.codiceBando}`}
          className={classes.cardWrapper}
        >
          <CardBody>
            <span className={classes.dueDate}>
              SCADENZA AVVISO <span className={classes.dueDateDigit}>{formatDate(element.dataFineBando)}</span>
            </span>
            <CardTitle tag="h4" className={classes.noticeLabel}>
              {element.nomeDellaMisura}
            </CardTitle>
            <p className={classes.noticeInfo}>{element.titolo}</p>
          </CardBody>
        </Link>
      </Card>
    </>
  ));

  return (
    <>
      <div className={classes.noticesSection}>
        <section className="container px-3" aria-labelledby="news-bandi-carousel">
          {title ? (
            <Row>
              <Col xs="12" lg="4">
                <h3 id="news-bandi-carousel" className={classes.noticesCarouselTitle}>
                  {title}
                </h3>
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
            title={title}
            idCarousel="notices-carousel"
          />
          <div className="mt-5 mt-lg-0 d-flex justify-content-center">
            <Link
              to="https://areariservata.padigitale2026.gov.it/Pa_digitale2026_avvisi"
              className="btn text-uppercase btn-primary"
            >
              scopri tutti
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

NoticesCarousel.propTypes = {
  content: PropTypes.array.isRequired,
  title: PropTypes.string,
};
