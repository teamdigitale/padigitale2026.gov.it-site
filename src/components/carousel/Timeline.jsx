import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'design-react-kit';
import PropTypes from 'prop-types';
import { DesktopSwiper } from '../DesktopSwiper';

const useStyles = createUseStyles({
  timelineSection: {
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
  timelineTitle: {},
  noHidden: {
    overflow: 'visible',
  },
  line: {
    height: '4px',
    width: '100%',
    background: 'linear-gradient(-90deg, #fff 0%, #0073E6 5%, #004080 100%);',
    position: 'absolute',
    left: '10px',
    top: '45px',
  },
  timelineSteps: {
    height: '45px',
    width: '45px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timelineStepsActive: {
    height: '45px',
    width: '45px',
    borderRadius: '50%',
    backgroundColor: '#0066CC',
    border: '6px solid #FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const Timeline = ({ content, title }) => {
  const classes = useStyles();

  const slides = content.cards.map((element) => (
    <>
      {element.active ? (
        <div className={classes.timelineStepsActive}>
          <img src={`/assets/flag-white.svg`} alt="" />
        </div>
      ) : (
        <div className={classes.timelineSteps}>
          <img src={`/assets/flag.svg`} alt="" />
        </div>
      )}
      <div>card {element.id}</div>
    </>
  ));

  return (
    <>
      <div className={classes.timelineSection}>
        <div className="container">
          {title ? (
            <Row>
              <Col xs="12" lg="4" className="offset-lg-1">
                <h3 className={classes.timelineTitle}>{title}</h3>
              </Col>
            </Row>
          ) : (
            ''
          )}
          <Row>
            <Col xs="12" lg="10" className="offset-lg-1 position-relative">
              <div className={classes.line}></div>
              <DesktopSwiper
                slides={slides}
                breakpoints={{
                  slidesPerView: 1,
                  992: {
                    slidesPerView: 3,
                  },
                }}
                navigation
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

Timeline.propTypes = {
  content: PropTypes.any,
  title: PropTypes.any,
};
