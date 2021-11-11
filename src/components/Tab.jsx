import React, { useState, useEffect, useRef } from 'react';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col, Icon } from 'design-react-kit';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const useStyles = createUseStyles({
  howTabsTitle: {
    color: '#004080',
    fontWeight: '600',
    fontSize: '1.75rem',
    '@media(min-width: 992px)': {
      fontSize: '1.556rem',
    },
  },
  howTabsSubtitle: {
    color: '#33485C',
    fontSize: '1.25rem',
    '@media(min-width: 992px)': {
      fontSize: '1rem',
    },
  },
  howTabSection: {
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
  tabCard: {
    composes: 'px-4',
    backgroundColor: '#fff',
    paddingTop: '1.875rem',
    paddingBottom: '1.875rem',
    '@media (min-width: 992px)': {
      paddingTop: '3.056rem',
      paddingBottom: '2.222rem',
    },
  },
  tabCardTitle: {
    color: '#33485C',
    fontSize: '1.5rem',
    lineHeight: '1.28',
    '@media (min-width: 992px)': {
      fontSize: '1.333rem',
    },
  },
  tabCardDesc: {
    color: '#33485C',
    fontSize: '1.125rem',
    lineHeight: '1.28',
    marginBottom: '2rem',
    '@media (min-width: 992px)': {
      fontSize: '1rem',
      marginBottom: '2.667rem',
    },
  },
  contentCardTitle: {
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    fontWeight: '600',
    lineHeight: '1.24',
    color: '#33485C',
    '@media (min-width: 992px)': {
      fontSize: '0.778rem',
    },
  },
  contentCardImage: {
    marginBottom: '1rem',
    '@media (min-width: 992px)': {
      marginBottom: '0.889rem',
    },
  },
  tabLinkImage: {
    maxHeight: '3rem',
    '@media (min-width: 992px)': {
      maxHeight: '100%',
    },
  },
  howTabs: {
    composes: 'nav nav-tabs',
    '&.nav-tabs': {
      '& .nav-link': {
        flexBasis: '70%',
        cursor: 'pointer',
        padding: '0.625rem 0',
        '@media (min-width: 992px)': {
          flexBasis: 'auto',
          padding: '1.111rem 0',
        },
        '& span': {
          paddingTop: '0.625rem',
          '@media (min-width: 992px)': {
            paddingTop: '1.111rem 0',
          },
        },
      },
    },
  },
  navigationBtn: {
    cursor: 'pointer',
    '&.tab-button-disabled': {
      opacity: '0.2',
      cursor: 'unset',
    },
  },
  sidePrevButton: {
    composes: 'side-button d-none justify-content-center pt-3 d-lg-flex',
    position: 'absolute',
    left: '0',
    top: '400px',
    transform: 'translateY(-50%)',
    '&.side-button': {
      '& button': {
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
      },
    },
  },
  sideNextButton: {
    composes: 'side-button d-none justify-content-center pt-3 d-lg-flex',
    position: 'absolute',
    right: '0',
    top: '400px',
    transform: 'translateY(-50%)',
    '&.side-button': {
      '& button': {
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
      },
    },
  },
  mobileNavButton: {
    '& button': {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      padding: '0',
    },
  },
});

// eslint-disable-next-line max-lines-per-function
export const Tab = ({ tabContent, sideDesktopNavigation, mobileNavigation, title, subtitle, sectionId }) => {
  const classes = useStyles();
  const [tabActive, setTabActive] = useState(0);
  const [nextBtnId, setnextBtnId] = useState(null);
  const [prevBtnId, setprevBtnId] = useState(null);
  const [isHoverTab, setIsHoverTab] = useState([]);

  const firstUpdate = useRef(true);

  useEffect(() => {
    setnextBtnId(`next-navigation-${Math.floor(Math.random() * 10000)}`);
    setprevBtnId(`prev-navigation-${Math.floor(Math.random() * 10000)}`);
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    const prevBtn = document.querySelectorAll('[data-prev-navigation-id=' + prevBtnId + '] svg');
    const nextBtn = document.querySelectorAll('[data-next-navigation-id=' + nextBtnId + '] svg');
    const disabledClass = 'tab-button-disabled';

    if (tabActive === 0) {
      prevBtn.forEach((element) => {
        element.classList.add(disabledClass);
      });
    } else {
      prevBtn.forEach((element) => {
        element.classList.remove(disabledClass);
      });
    }

    if (tabActive === tabContent.tabs.length - 1) {
      nextBtn.forEach((element) => {
        element.classList.add(disabledClass);
      });
    } else {
      nextBtn.forEach((element) => {
        element.classList.remove(disabledClass);
      });
    }
  }, [nextBtnId, prevBtnId, tabActive, tabContent.tabs.length]);

  return (
    <>
      <div className={classes.howTabSection}>
        <Container className="px-3 position-relative">
          {title ? (
            <Row>
              <Col xs="12" lg="4" className="offset-lg-1" id={sectionId}>
                <h4 className={classes.howTabsTitle}>{title}</h4>
              </Col>
            </Row>
          ) : (
            ''
          )}
          {subtitle ? (
            <Row>
              <Col xs="12" lg="10" className="offset-lg-1">
                <p className={classes.howTabsSubtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />
              </Col>
            </Row>
          ) : (
            ''
          )}
          <Row>
            <Col xs="12" lg="10" className="offset-lg-1 position-static">
              <nav>
                <div className={classes.howTabs} id={'nav-tab' + tabContent.id} role="tablist">
                  {tabContent.tabs.map(({ name, image, imageActive }, index) => (
                    <a
                      key={index}
                      className={classNames({
                        'nav-item': true,
                        'nav-link': true,
                        'flex-column': true,
                        'align-items-center': true,
                        active: index === tabActive,
                      })}
                      onClick={() => setTabActive(index)}
                      id={'nav-tab-' + index + '-tab' + tabContent.id}
                      data-toggle="tab"
                      role="tab"
                      aria-controls={'nav-tab-' + index + '-' + tabContent.id}
                      aria-selected={index === tabActive}
                      onMouseEnter={() => setIsHoverTab({ [index]: true })}
                      onMouseLeave={() => setIsHoverTab({ [index]: false })}
                    >
                      {index === tabActive || isHoverTab[index] ? (
                        <img className={classes.tabLinkImage} src={`/assets/${imageActive}`} alt="" />
                      ) : (
                        <img className={classes.tabLinkImage} src={`/assets/${image}`} alt="" />
                      )}
                      <span>{name}</span>
                    </a>
                  ))}
                </div>
              </nav>
              <div className="tab-content" id={'nav-tabContent' + tabContent.id}>
                {tabContent.tabs.map(({ content }, index) => (
                  <div
                    key={index}
                    className={classNames({
                      'tab-pane': true,
                      fade: true,
                      active: index === tabActive,
                      show: index === tabActive,
                    })}
                    id={'nav-tab-' + index + '-' + tabContent.id}
                    role="tabpanel"
                    aria-labelledby={'nav-tab-' + index + '-tab' + tabContent.id}
                  >
                    <div className={classes.tabCard}>
                      <h3 className={classes.tabCardTitle}>{content.title}</h3>
                      <p className={classes.tabCardDesc}>{content.description}</p>
                      <Row>
                        <Col xs="12" lg="6">
                          <img className={classes.contentCardImage} src={`/assets/${content.first.image}`} alt="" />
                          <p className={classes.contentCardTitle}>{content.first.title}</p>
                          <p dangerouslySetInnerHTML={{ __html: content.first.description }} />
                        </Col>
                        <Col xs="12" lg="6">
                          <img className={classes.contentCardImage} src={`/assets/${content.second.image}`} alt="" />
                          <p className={classes.contentCardTitle}>{content.second.title}</p>
                          <p dangerouslySetInnerHTML={{ __html: content.second.description }} />
                        </Col>
                      </Row>
                    </div>
                  </div>
                ))}
              </div>
              {sideDesktopNavigation && (
                <div className={classes.sidePrevButton}>
                  <button
                    type="button"
                    onClick={() => setTabActive(tabActive - 1 > 0 ? tabActive - 1 : 0)}
                    data-prev-navigation-id={prevBtnId}
                  >
                    <Icon className={classes.navigationBtn} color="primary" icon="it-arrow-left-circle" size="lg" />
                  </button>
                </div>
              )}
              {sideDesktopNavigation && (
                <div className={classes.sideNextButton}>
                  <button
                    type="button"
                    onClick={() =>
                      setTabActive(
                        tabActive + 1 < tabContent.tabs.length - 1 ? tabActive + 1 : tabContent.tabs.length - 1
                      )
                    }
                    data-next-navigation-id={nextBtnId}
                  >
                    <Icon className={classes.navigationBtn} color="primary" icon="it-arrow-right-circle" size="lg" />
                  </button>
                </div>
              )}
              {mobileNavigation && (
                <div className="d-flex justify-content-center pt-3 d-lg-none">
                  <div className={classes.mobileNavButton}>
                    <button
                      type="button"
                      onClick={() => setTabActive(tabActive - 1 > 0 ? tabActive - 1 : 0)}
                      data-prev-navigation-id={prevBtnId}
                    >
                      <Icon className={classes.navigationBtn} color="primary" icon="it-arrow-left-circle" size="lg" />
                    </button>
                  </div>
                  <div className={classes.mobileNavButton}>
                    <button
                      type="button"
                      onClick={() => setTabActive(tabActive + 1 < 2 ? tabActive + 1 : 2)}
                      data-next-navigation-id={nextBtnId}
                    >
                      <Icon className={classes.navigationBtn} color="primary" icon="it-arrow-right-circle" size="lg" />
                    </button>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

Tab.propTypes = {
  tabContent: PropTypes.any,
  sideDesktopNavigation: PropTypes.bool,
  mobileNavigation: PropTypes.bool,
};
