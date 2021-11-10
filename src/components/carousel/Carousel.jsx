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
} from 'design-react-kit';
import PropTypes from 'prop-types';
import { DesktopSwiper } from '../DesktopSwiper';
import { ExternalLink } from '../ExternalLink';

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
      '& h4.card-title': {
        color: '#0066CC',
        fontSize: '1.125rem',
        fontWeight: 'bold',
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
          marginBottom: '2.33rem',
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
  heroCarouselTitle: {
    color: '#fff',
    fontSize: '1.556rem',
    whiteSpace: 'nowrap',
  },
  newsUpdateSection: {
    backgroundColor: '#fff',
    padding: '1.111rem 0 4rem',
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
  heroLink: {
    textDecoration: 'none',
  },
  heroLink: {
    textDecoration: 'none',
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
          <CardTitle tag="h4">{element.title}</CardTitle>
          <CardText>{element.description}</CardText>
          <ExternalLink linkTo={element.linkTo} alt="" className={classes.heroLink}>
            <div className="source">
              {element.source}
              <img src={`/assets/external-link.svg`} alt="" />
            </div>
          </ExternalLink>
        </CardBody>
      </Card>
    </>
  ));

  return (
    <>
      <div className={classes.newsUpdateSection}>
        <section className="container">
          {title ? (
            <Row>
              <Col xs="12" lg="4">
                <h3 id="news-home-carousel" className={classes.heroCarouselTitle}>
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
          />
        </section>
      </div>
    </>
  );
};

HeroCarousel.propTypes = {
  content: PropTypes.any,
  title: PropTypes.any,
};
