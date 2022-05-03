/* eslint-disable sonarjs/no-duplicate-string */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'design-react-kit';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { DesktopSwiper } from '../DesktopSwiper';
import { ExternalLink } from '../ExternalLink';

const useStyles = createUseStyles({
  heroCards: {
    composes: 'card-bg rounded',
    height: '100%',
    '&.card.card-bg': {
      '@media (max-width: 992px)': {
        marginLeft: '0',
      },
    },
    '& .card-body': {
      boxShadow: '0px 0px 20px rgb(0 43 85 / 4%);',
      display: 'flex',
      flexDirection: 'column',
      '& .category': {
        fontSize: '0.778rem',
        fontWeight: '600',
        color: '#33485C',
        marginBottom: '1rem',
        textTransform: 'uppercase',
      },
      '& h4.card-title': {
        color: '#33485C',
        fontSize: '1.125rem',
        fontWeight: '600',
        lineHeight: '1.26',
        '@media (min-width: 992px)': {
          minHeight: '2.889rem',
          fontSize: '1rem',
          lineHeight: '1.44',
        },
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
        alignItems: 'baseline',
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
  heroCarouselTitle: {
    color: '#33485C',
    fontSize: '1.556rem',
    fontWeight: '600',
    whiteSpace: 'nowrap',
  },
  newsUpdateSection: {
    backgroundColor: '#fff',
    padding: '5.556rem 0',
    '& .swiper': {
      margin: '0 -1.111rem',
      paddingTop: '20px',
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
  heroLink: {
    textDecoration: 'none',
    marginTop: 'auto',
    display: 'inline-flex',
    marginLeft: '5px',
  },
  titleLink: {
    fontSize: '1rem',
    color: '#06c',
    fontWeight: '600',
    textDecoration: 'none',
    '&:hover': {
      color: '#06c',
      textDecoration: 'underline',
    },
    '& .source': {
      display: 'inline-flex',
      alignItems: 'center',
      '@media (max-width: 992px)': {
        marginTop: '0.5rem',
      },
    },
    '& img': {
      marginLeft: '0.5rem',
    },
  },
  titleCardLink: {
    textDecoration: 'none',
    '&:hover': {
      color: '#06c',
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
          <span className="category">{element.category}</span>
          <div className={classes.titleCardLink}>
            <CardTitle tag="h4">{element.title}</CardTitle>
          </div>
          <CardText>{element.description}</CardText>
          <div className="source">
            {element?.type !== 'internal' ? (
              <>
                Fonte:
                <ExternalLink
                  linkTo={element.linkTo}
                  alt=""
                  className={classes.heroLink}
                  ariaLabel={`${element.source} ${element.title} (Collegamento sito esterno apre su nuova scheda)`}
                >
                  {element.source}
                  <img src={`/assets/external-link.svg`} alt="" />
                </ExternalLink>
              </>
            ) : (
              <>
                Scopri di più:
                <Link to={element.linkTo} className={classes.heroLink} ariaLabel={`${element.source} ${element.title}`}>
                  {element.source}
                </Link>
              </>
            )}
          </div>
        </CardBody>
      </Card>
    </>
  ));

  return (
    <>
      <div className={classes.newsUpdateSection}>
        <section className="container px-3" aria-labelledby="news-home-carousel">
          {title ? (
            <Row>
              <Col xs="12" lg="6">
                <h3 id="news-home-carousel" className={classes.heroCarouselTitle}>
                  {title}
                </h3>
              </Col>
              <Col xs="12" lg="6" className="d-lg-flex justify-content-end">
                <ExternalLink
                  linkTo="https://innovazione.gov.it/"
                  alt=""
                  className={classes.titleLink}
                  ariaLabel={`Scopri tutto su innovazione.gov.it (Collegamento sito esterno apre su nuova scheda)`}
                >
                  <div className="source">
                    Scopri tutto su innovazione.gov.it
                    <img src={`/assets/external-link.svg`} alt="" />
                  </div>
                </ExternalLink>
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
            idCarousel="news-carousel"
          />
        </section>
      </div>
    </>
  );
};

HeroCarousel.propTypes = {
  content: PropTypes.array.isRequired,
  title: PropTypes.string,
};
