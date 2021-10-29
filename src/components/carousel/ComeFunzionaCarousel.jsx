import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col } from 'design-react-kit';
import PropTypes from 'prop-types';
import { Tab } from '../Tab';
import { DesktopSwiper } from '../DesktopSwiper';

const useStyles = createUseStyles({
  howCarouselTitle: {
    color: '#004080',
    fontSize: '1.75rem',
    '@media(min-width: 992px)': {
      fontSize: '1.556rem',
    },
  },
  howCarouselSubtitle: {
    color: '#33485C',
    fontSize: '1.25rem',
    '@media(min-width: 992px)': {
      fontSize: '1rem',
    },
  },
  howCarouselSection: {
    backgroundColor: '#F0F6FC',
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
    '& .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet': {
      margin: '0 0.889rem',
    },
  },
  noHidden: {
    overflow: 'visible',
  },
  comeTabs: {
    composes: 'nav nav-tabs',
    '& .nav-item': {
      flexBasis: '33%',
    },
  },
  paragraphTitle: {
    fontWeight: '700',
    fontSize: '2rem',
    color: '#004080',
    marginBottom: '1.5rem',
    '@media (min-width: 992px)': {
      fontSize: '1.778rem',
      marginBottom: '1.333rem',
    },
  },
  paragraphDescription: {
    fontSize: '1.25rem',
    color: '#33485C',
    marginBottom: '4.5rem',
    '@media (min-width: 992px)': {
      fontSize: '1.333rem',
      marginBottom: '4rem',
    },
  },
});

export const ComeFunzionaCarousel = ({ content, title, subtitle, paragraph }) => {
  const classes = useStyles();

  const slides = content.map((element) => (
    <React.Fragment key={element.id}>
      <Tab tabContent={element}></Tab>
    </React.Fragment>
  ));

  return (
    <>
      <div className={classes.howCarouselSection}>
        <div className="container px-3">
          {paragraph ? (
            <Row>
              <Col xs="12" lg="7" className="offset-lg-1">
                <h2 className={classes.paragraphTitle}>{paragraph.title}</h2>
                <p
                  className={classes.paragraphDescription}
                  dangerouslySetInnerHTML={{ __html: paragraph.description }}
                />
              </Col>
            </Row>
          ) : (
            ''
          )}
          {title ? (
            <Row>
              <Col xs="12" lg="4" className="offset-lg-1">
                <h3 className={classes.howCarouselTitle}>{title}</h3>
              </Col>
            </Row>
          ) : (
            ''
          )}
          {subtitle ? (
            <Row>
              <Col xs="12" lg="10" className="offset-lg-1">
                <p className={classes.howCarouselSubtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />
              </Col>
            </Row>
          ) : (
            ''
          )}
          <Row className="position-relative">
            <Col xs="12" lg="10" className="offset-lg-1 position-static">
              <DesktopSwiper
                slides={slides}
                breakpoints={{
                  slidesPerView: 1,
                }}
                mobileNavigation
                sideDesktopNavigation
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

ComeFunzionaCarousel.propTypes = {
  content: PropTypes.any,
  title: PropTypes.any,
  subtitle: PropTypes.any,
  paragraph: PropTypes.any,
};
