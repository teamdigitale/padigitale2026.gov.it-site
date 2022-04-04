import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col } from 'design-react-kit';
import PropTypes from 'prop-types';
import { DesktopSwiper } from '../DesktopSwiper';

const useStyles = createUseStyles({
  timelineSection: {
    padding: '0 0 4.5rem 0',
    overflow: 'hidden',
    '@media (min-width: 992px)': {
      padding: '0 0 2.5rem 0',
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
  timelineTitle: {
    fontSize: '1.5rem',
    color: '#004080',
    textAlign: 'center',
    '@media (min-width: 992px)': {
      fontSize: '1.333rem',
      textAlign: 'left',
    },
  },
  noHidden: {
    overflow: 'visible',
  },
  line: {
    height: '4px',
    width: '100%',
    background: 'linear-gradient(-90deg, #fff 0%, #0073E6 5%, #004080 100%);',
    position: 'absolute',
    left: '20px',
    top: '45px',
    '@media (min-width: 992px)': {
      left: '0',
    },
  },
  timelineSteps: {
    height: '45px',
    width: '45px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateX(-15%)',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
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
    transform: 'translateX(-15%)',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
  },
  timelineCard: {
    marginTop: '1.875rem',
    '@media (min-width: 992px)': {
      marginTop: '1.667rem',
      maxWidth: '17.188rem',
    },
    '& .time': {
      backgroundColor: '#DDEBF9',
      textTransform: 'uppercase',
      color: '#17324D',
      padding: '0.375rem 0.75rem',
      fontSize: '1rem',
      lineHeight: '1.2',
      fontWeight: '700',
      borderRadius: '4px',
      position: 'relative',
      '@media (min-width: 992px)': {
        padding: '0.333rem 0.667rem',
        fontSize: '0.889rem',
      },
      '& .arrow': {
        position: 'absolute',
        left: '13px',
        top: '-3px',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        backgroundColor: '#DDEBF9',
      },
    },
    '& .title': {
      marginTop: '2rem',
      marginBottom: '0.625rem',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#17324D',
      textTransform: 'uppercase',
      '@media (min-width: 992px)': {
        marginTop: '1.778rem',
        marginBottom: '0.556rem',
        fontSize: '1.111rem',
      },
    },
    '& .text': {
      fontFamily: 'Lora',
      fontSize: '1rem',
      fontWeight: '400',
      '@media (min-width: 992px)': {
        fontSize: '0.889rem',
      },
    },
  },
  columnCard: {
    composes: 'column-card',
    '& + .column-card': {
      '@media (max-width: 992px)': {
        marginTop: '2.222rem',
      },
    },
  },
  category: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#33485C',
    textTransform: 'uppercase',
    marginBottom: '0.556rem',
    '@media (min-width: 992px)': {
      fontSize: '0.889rem',
    },
  },
  title: {
    fontWeight: '700',
    fontSize: '1.5rem',
    color: '#33485C',
    lineHeight: '1.36',
    '@media (min-width: 992px)': {
      fontSize: '1.778rem',
      lineHeight: '1.4',
    },
  },
});

export const Timeline = ({ content }) => {
  const classes = useStyles();

  useEffect(() => {
    const timeline = document.querySelector('.swiper');

    timeline.swiper.on('slideChange', () => {
      const line = document.querySelector('[class ^= line]');
      if (timeline.swiper.activeIndex > 0) {
        line.style.left = 0;
      } else {
        line.style.left = '20px';
      }
    });
  }, []);

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
      <div className={classes.timelineCard}>
        <span className="time">
          {element.time}
          <span className="arrow"></span>
        </span>
        <h4 className="title">{element.title}</h4>
        <div className="text" dangerouslySetInnerHTML={{ __html: element.text }} />
      </div>
    </>
  ));

  return (
    <>
      <div className={classes.timelineSection} id="calendario">
        <div className="container pl-lg-2 pr-lg-2 pl-3 pr-3">
          {content.category ? (
            <Row className="mb-5 ml-0 mr-0">
              <Col xs="12" lg="5" id="timeline-pc" className={`${classes.columnCard} offset-lg-1`}>
                <span className={classes.category}>{content.category}</span>
                <h3 className={classes.title} id="timeline-title-pc">
                  {content.title}
                </h3>
              </Col>
            </Row>
          ) : (
            ''
          )}
          <Row>
            <Col xs="12" lg="10" className="offset-lg-1 position-relative">
              <div className={classes.line}></div>
              <DesktopSwiper
                title={content.category}
                slides={slides}
                breakpoints={{
                  slidesPerView: 1,
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
                navigation
                id="calendar-timeline"
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

Timeline.propTypes = {
  content: PropTypes.object,
  title: PropTypes.string,
};
