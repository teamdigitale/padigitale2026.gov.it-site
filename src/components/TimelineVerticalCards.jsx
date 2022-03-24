/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable complexity */
/* eslint-disable eqeqeq */
import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col } from 'design-react-kit';
import PropTypes from 'prop-types';

const useStyle = createUseStyles({
  timelineVertical: {
    composes: 'timeline-vertical',
    position: 'relative',
    paddingBottom: '40px',
  },
  scrollIndicator: {
    position: 'absolute',
    top: '0',
    left: '-40px',
    width: '4px',
    height: 'calc(100% - 100px)',
    background: '#C5E1F9',
    display: 'none',
    '@media (max-width: 992px)': {
      left: '31px',
      top: '0',
      height: 'calc(100% - 72px)',
    },
    '@media(min-width: 768px)': {
      display: 'block',
    },
  },
  scrollIndicatorActive: {
    composes: 'scroll-indicator-active',
    background: 'linear-gradient(0deg, #0073E6 0%, #004080 100%)',
    width: '100%',
    height: '0',
    transition: '.3s ease',
    maxHeight: '100%',
    display: 'none',
    '@media(min-width: 768px)': {
      display: 'block',
    },
  },
  timelinePointSection: {
    composes: 'timeline-point-section',
    marginBottom: '1.111rem',
    position: 'relative',
    minHeight: '373px',
    display: 'flex',
    boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.1)',
    '@media (max-width: 992px)': {
      marginLeft: '4.444rem',
    },
    '@media (max-width: 767px)': {
      marginLeft: '0',
    },
    '&:nth-child(even)': {
      '& img': {
        order: '2',
        marginRight: '4.375rem',
        marginLeft: '0',
        '@media (min-width: 992px) and (max-width: 1024px)': {
          marginRight: '2rem',
        },
        '@media (max-width: 991px)': {
          order: '0',
          margin: '0 0 1.111rem 0',
        },
      },
      '& .point-header': {
        '& .circle': {
          background: '#F7FAFD',
          height: '140%',
          width: '320px',
          position: 'absolute',
          left: 'unset',
          right: '-160px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: '-9',
          borderRadius: '50%',
          '@media (max-width: 991px)': {
            right: 'unset',
            width: '140%',
            height: '420px',
            top: '-310px',
            left: '50%',
            transform: 'translateX(-50%)',
          },
        },
        '& .header-info': {
          marginRight: '2.111rem',
          '@media (max-width: 991px)': {
            marginRight: '0',
          },
        },
      },
    },
  },
  timelineNumber: {
    composes: 'timeline-number',
    background: '#FFFFFF',
    border: '6px solid #FFFFFF',
    boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: '-57px',
    top: '0',
    transition: '.2s ease',
    '@media (max-width: 992px)': {
      top: '0',
      left: '-66px',
    },
    '@media (max-width: 574px)': {
      left: '-57px',
    },
    '&.active': {
      background: '#0066CC',
      transition: '.2s ease',
      '& span': {
        color: '#FFFFFF',
        border: 'none',
        transition: '.2s ease',
      },
    },
    '& span': {
      fontSize: '1rem',
      fontWeight: '700',
      color: '#0066CC',
      border: '1px solid #0066CC',
      borderRadius: '50%',
      width: '32px',
      height: '26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  pointHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 2.5rem',
    overflow: 'hidden',
    position: 'relative',
    composes: 'point-header',
    width: '100%',
    '& .circle': {
      background: '#F7FAFD',
      height: '140%',
      width: '320px',
      position: 'absolute',
      left: '-160px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: '-9',
      borderRadius: '50%',
    },
    '& img': {
      maxWidth: '160px',
      marginRight: '5rem',
      marginLeft: '3.611rem',
      '@media (min-width: 992px) and (max-width: 1024px)': {
        marginRight: '2rem',
        marginLeft: '2.111rem',
      },
    },
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      marginBottom: '2.333rem',
      padding: '1.444rem',
      paddingBottom: '0',
      justifyContent: 'center',
      '& img': {
        width: '134px',
        height: '134px',
        margin: '0 0 1.111rem 0',
      },
      '& .circle': {
        right: 'unset',
        width: '140%',
        height: '420px',
        top: '-310px',
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
  },
  headerInfo: {
    marginRight: '0',
    maxWidth: '450px',
    composes: 'header-info',
    '@media (max-width: 991px)': {
      margin: '0',
      textAlign: 'center',
    },
  },
  headerTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#33485C',
    marginBottom: '1.111rem',
  },
  headerParagraph: {
    fontSize: '1rem',
    lineHeight: '24px',
    '@media (max-width: 991px)': {
      marginBottom: 0,
    },
  },
  littleTitle: {
    display: 'block',
    marginTop: '1.111rem',
    fontSize: '0.778',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: '0.444rem',
  },
  bodyParagraph: {
    fontSize: '1rem',
    lineHeight: '28px',
  },
  littleIcon: {
    height: '48px',
  },
});

export const TimelineVerticalCards = ({ item }) => {
  // eslint-disable-next-line sonarjs/cognitive-complexity
  useEffect(() => {
    const sectionsContainer = document.querySelector('.timeline-vertical');

    const scrollIndicatorHandler = () => {
      const timelineYpos = sectionsContainer.getBoundingClientRect();
      let top = timelineYpos.top;
      let bottom = timelineYpos.bottom;
      if (top <= '100' && bottom >= '700') {
        const sectionsContainerHeight = sectionsContainer.getBoundingClientRect().height;
        const scrollIndicator = sectionsContainer.querySelector('.scroll-indicator-active');
        if (top < 0) {
          top = top * -1;
        }
        if (bottom < 0) {
          bottom = bottom * -1;
        }
        const partialValue = bottom - top;
        const percentageScroll = 100 - (100 * partialValue) / sectionsContainerHeight;
        scrollIndicator.style.height = `${percentageScroll}%`;
      }
    };
    window.addEventListener('scroll', scrollIndicatorHandler);
  }, []);
  const classes = useStyle();

  return (
    <>
      <div className="container position-relative">
        <Row className="mt-5">
          <Col xs={12} lg={11} className="offset-lg-1 mb-3 mb-lg-0">
            <div className={classes.timelineVertical}>
              <div className={classes.scrollIndicator}>
                <div className={classes.scrollIndicatorActive}></div>
              </div>
              {item.map((elem, k) => (
                <div className={classes.timelinePointSection} data-index={elem.index} key={k} id={elem.sectionId}>
                  <div className={classes.timelineNumber} data-index={elem.index}>
                    <span>{parseInt(elem.index, 10) + 1}</span>
                  </div>
                  <div className={classes.pointHeader}>
                    <div className="circle"></div>
                    <img src={elem.icon} alt=""></img>
                    <div className={classes.headerInfo}>
                      <h4 className={classes.headerTitle}>{elem.title}</h4>
                      <p
                        className={classes.headerParagraph}
                        dangerouslySetInnerHTML={{
                          __html: elem.headerParagraph,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

TimelineVerticalCards.propTypes = {
  item: PropTypes.array,
};
