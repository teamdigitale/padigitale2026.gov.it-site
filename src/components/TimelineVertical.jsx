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
    paddingBottom: '4.556rem',
  },
  scrollIndicator: {
    position: 'absolute',
    top: '107px',
    left: '-40px',
    width: '4px',
    height: 'calc(100% - 190px)',
    background: '#C5E1F9',
    '@media (max-width: 992px)': {
      left: '31px',
      top: '0',
      height: 'calc(100% - 72px)',
    },
  },
  scrollIndicatorActive: {
    composes: 'scroll-indicator-active',
    background: 'linear-gradient(0deg, #0073E6 0%, #004080 100%)',
    width: '100%',
    height: '0',
    transition: '1s ease',
    maxHeight: '100%',
  },
  timelinePointSection: {
    composes: 'timeline-point-section',
    marginBottom: '4.444rem',
    position: 'relative',
    '@media (max-width: 992px)': {
      marginLeft: '4.444rem',
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
    top: '72px',
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
    marginBottom: '5.556rem',
    '@media (max-width: 767px)': {
      flexDirection: 'column-reverse',
      marginBottom: '2.333rem',
      '& img': {
        width: '134px',
        height: '134px',
        marginLeft: '-1.667rem',
      },
    },
  },
  headerInfo: {
    marginLeft: '4.111rem',
    maxWidth: '450px',
    '@media (max-width: 767px)': {
      marginLeft: '0',
    },
  },
  headerTitle: {
    fontSize: '1.778rem',
    fontWeight: '700',
    color: '#33485C',
  },
  headerParagraph: {
    fontSize: '0.889rem',
    lineHeight: '24px',
    '@media (max-width: 992px)': {
      marginBottom: '1.667rem',
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

export const TimelineVertical = ({ item }) => {
  // eslint-disable-next-line sonarjs/cognitive-complexity
  useEffect(() => {
    const sections = document.querySelectorAll('.timeline-point-section');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.6, 0.8],
      trackVisibility: true,
      delay: 100,
    };

    const isMobile = window.innerWidth < 992;

    const observerCallback = (entries) => {
      const scrollIndicator = document.querySelector('.scroll-indicator-active');

      const addHeightIndicator = (sectionHeight) => {
        const indicatorHeight = scrollIndicator.clientHeight + sectionHeight;
        scrollIndicator.style.height = indicatorHeight + 'px';
      };

      const subtractHeightIndicator = (sectionHeight) => {
        const indicatorHeight = scrollIndicator.clientHeight - sectionHeight;
        scrollIndicator.style.height = indicatorHeight + 'px';
      };

      entries.forEach((entry) => {
        if (scrollingDirection === 'down') {
          const activeNumber = document.querySelector('.timeline-number.active');
          const activeNumberIndex = activeNumber && activeNumber.getAttribute('data-index');
          if (isMobile) {
            if (entry.isIntersecting && entry.intersectionRatio > 0.6 && entry.intersectionRatio < 0.7) {
              addHeightIndicator(entry.target.clientHeight + 80);
            }
          } else {
            if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
              addHeightIndicator(entry.target.clientHeight + 80);
            }
          }
          if (activeNumber) {
            const sectionsLength = sections.length;
            if (activeNumberIndex == sectionsLength - 1) {
              scrollIndicator.style.height = '100%';
            }
          }
        } else {
          const activeNumber = document.querySelector('.timeline-number.active');
          if (activeNumber) {
            const numberIndex = activeNumber.getAttribute('data-index');
            const sectionsLength = sections.length;
            if (isMobile) {
              if (numberIndex == sectionsLength - 1) {
                subtractHeightIndicator(entry.target.clientHeight + 80 - 20);
              } else if (numberIndex == 0) {
                scrollIndicator.style.height = '0px';
              } else {
                subtractHeightIndicator(entry.target.clientHeight + 80);
              }
            } else {
              if (numberIndex == sectionsLength - 1) {
                subtractHeightIndicator(entry.target.clientHeight + 80 - 100);
              } else if (numberIndex == 0) {
                scrollIndicator.style.height = '0px';
              } else {
                subtractHeightIndicator(entry.target.clientHeight + 80);
              }
            }
          }
        }
        if (isMobile) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.6 && entry.intersectionRatio < 0.7) {
            const currentNumber = entry.target.querySelector('.timeline-number');
            currentNumber.classList.add('active');
          } else {
            const allNumbers = entry.target.querySelector('.timeline-number');
            allNumbers.classList.remove('active');
          }
        } else {
          if (entry.isIntersecting && entry.intersectionRatio > 0.8) {
            const currentNumber = entry.target.querySelector('.timeline-number');
            currentNumber.classList.add('active');
          } else {
            const allNumbers = entry.target.querySelector('.timeline-number');
            allNumbers.classList.remove('active');
          }
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec) => observer.observe(sec));

    let scrollingDirection = '';
    let lastScrollTop = 0;
    const getScrollDirection = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        scrollingDirection = 'down';
      } else {
        scrollingDirection = 'up';
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
    window.addEventListener('scroll', getScrollDirection);
  }, []);
  const classes = useStyle();

  return (
    <>
      <div className="container">
        <Row className="mb-5 mt-md-5">
          <Col xs="12" lg="11" className="offset-lg-1 mb-3 mb-lg-0">
            <div className={classes.timelineVertical}>
              <div className={classes.scrollIndicator}>
                <div className={classes.scrollIndicatorActive}></div>
              </div>
              {item.map((elem, k) => (
                <div className={classes.timelinePointSection} data-index={elem.index} key={k}>
                  <div className={classes.timelineNumber} data-index={elem.index}>
                    <span>{parseInt(elem.index, 10) + 1}</span>
                  </div>
                  <div className={classes.pointHeader}>
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
                  <div className="container">
                    <Row>
                      <Col xs="12" lg="6" className="mb-3 mb-lg-0 pr-0 pr-lg-4">
                        <img className={classes.littleIcon} src={elem.iconl} alt=""></img>
                        <span className={classes.littleTitle}>{elem.littleTitlel}</span>
                        <p
                          className={classes.bodyParagraph}
                          dangerouslySetInnerHTML={{
                            __html: elem.bodyParagraphl,
                          }}
                        ></p>
                      </Col>
                      <Col xs="12" lg="6" className="mb-3mb-lg-0 pl-0 pl-lg-4">
                        <img className={classes.littleIcon} src={elem.iconr} alt=""></img>
                        <span className={classes.littleTitle}>{elem.littleTitler}</span>
                        <p
                          className={classes.bodyParagraph}
                          dangerouslySetInnerHTML={{
                            __html: elem.bodyParagraphr,
                          }}
                        ></p>
                      </Col>
                    </Row>
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

TimelineVertical.propTypes = {
  item: PropTypes.array,
};
