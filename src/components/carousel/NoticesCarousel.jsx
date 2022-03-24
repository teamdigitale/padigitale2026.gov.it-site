import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Card, CardBody, CardTitle } from 'design-react-kit';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { DesktopSwiper } from '../DesktopSwiper';
import { ExternalLink } from '../ExternalLink';

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
  },
  noticesSection: {
    backgroundColor: '#fff',
    padding: '3rem 0 4rem',
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
  },
  noticeLabel: {
    fontSize: '0.778rem',
    fontWeight: '400',
    lineHeight: '1.444rem',
    marginBottom: '1.389rem',
    color: '#5A768A',
  },
  dueDate: {
    fontSize: '0.778rem',
    fontWeight: '700',
    lineHeight: '1.444rem',
    color: '#5A768A',
  },
  dueDateDigit: {
    fontSize: '0.833rem',
    fontWeight: '400',
  },
  noticeInfo: {
    fontSize: '1.111',
    fontWeight: '700',
    lineHeight: '1.444rem',
    color: '#06c',
  },
});
// const carousel = React.createRef();

export const NoticesCarousel = ({ content, title }) => {
  const classes = useStyles();
  const records = content;
  const slides = records.map((element) => (
    <>
      <Card key={element.codiceBando} className={classes.heroCards} spacing noWrapper>
        <ExternalLink>
          <CardBody>
            <span className={classes.dueDate}>
              CANDIDATURE <span className={classes.dueDateDigit}>Fino al {element.dataFine}</span>
            </span>
            <CardTitle tag="h4" className={classes.noticeLabel}>
              {element.nomeDellaMisura}
            </CardTitle>
            <p className={classes.noticeInfo}>{element.titolo}</p>
          </CardBody>
        </ExternalLink>
      </Card>
    </>
  ));

  return (
    <>
      <div className={classes.noticesSection}>
        <section className="container" aria-labelledby="news-bandi-carousel">
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
          <div className="d-flex justify-content-center">
            <Link to="/" className="btn text-uppercase btn-primary">
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
