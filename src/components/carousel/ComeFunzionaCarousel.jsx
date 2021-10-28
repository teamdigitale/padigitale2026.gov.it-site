import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'design-react-kit';
import PropTypes from 'prop-types';
import { DesktopSwiper } from '../DesktopSwiper';
import classNames from 'classnames';

const useStyles = createUseStyles({
  heroCards: {
    composes: 'card-bg rounded',
    backgroundColor: '#ffffff',
    '@media (min-width: 992px)': {
      flexDirection: 'row',
    },
    '&.card.card-bg': {
      '@media (max-width: 992px)': {
        marginLeft: '0',
      },
    },
    '& .card-body': {
      boxShadow: '0px 0px 20px rgb(0 43 85 / 4%);',
      padding: '2.667rem',
      order: '1',
      textAlign: 'center',
      '@media (min-width: 992px)': {
        order: '0',
        textAlign: 'left',
      },
      '& .category-top': {
        '& a.category': {
          fontSize: '0.778rem',
          fontWeight: '600',
          color: '#33485C',
        },
      },
      '& h5.card-title': {
        color: '#0066CC',
        fontSize: '1.75rem',
        fontWeight: 'bold',
        lineHeight: '1.43',
        marginBottom: '0.889rem',
        '@media (min-width: 992px)': {
          color: '#33485C',
        },
      },
      '& .card-text': {
        color: '#33485C',
        fontSize: '1.125rem',
        fontFamily: 'Titillium Web',
        fontWeight: '400',
        lineHeight: '1.28',
        marginBottom: '7.25rem',
        '@media (min-width: 992px)': {
          marginBottom: '3.778rem',
        },
      },
      '& .source': {
        color: '#33485C',
        fontSize: '0.889rem',
        fontWeight: '600',
        lineHeight: '1.24',
        display: 'inline-flex',
        alignItems: 'center',
        '& img': {
          marginLeft: '0.278rem',
        },
      },
    },
    '&.card:after': {
      content: 'none',
    },
  },
  heroCardImg: {
    maxHeight: '15rem',
    minHeight: '10rem',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px',
    objectFit: 'cover',
    '@media (min-width: 992px)': {
      maxHeight: '100%',
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      borderTopLeftRadius: '0',
    },
  },
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
      marginBottom: '1.333rem'
    }
  },
  paragraphDescription: {
    fontSize: '1.25rem',
    color: '#33485C',
    marginBottom: '4.5rem',
    '@media (min-width: 992px)': {
      fontSize: '1.333rem',
      marginBottom: '4rem'
    }
  },
});

export const ComeFunzionaCarousel = ({ content, title, subtitle, paragraph }) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState();
  const [tabActive, setTabActive] = useState([0, 0, 0]);

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    });
  }, []);

  const setTab = (state, tabIndex, slideIndex) => {
    console.log('tabActive:' + tabActive)
    console.log('state before:' + state)

    state[slideIndex] = tabIndex;
    console.log('state after:' + state)

    setTabActive(state);
  };

  const tabs = [
    {
      name: "tab 1",
      content: "content 1"
    },
    {
      name: "tab 2",
      content: "content 2"
    },
    {
      name: "tab 3",
      content: "content 3"
    }
  ];


  const slides = content.map((element) => (
    <div key={element.id}>
      <nav>
        <div className="nav nav-tabs" id={"nav-tab" + element.id} role="tablist">
          {tabs.map(({ name }, index) => {
            return <a key={index} className={classNames({ 'nav-item': true, 'nav-link': true, active: index === tabActive[element.id] })} onClick={() => setTab(tabActive, index, element.id)} id={"nav-tab" + index + "-tab" + element.id} data-toggle="tab" role="tab" aria-controls={"nav-tab" + index + "-" + element.id} aria-selected={index === tabActive}>{name}</a>
          })}
        </div>
      </nav>
      <div className="tab-content" id={"nav-tabContent" + element.id}>
        {tabs.map(({ content }, index) => {
          return <div key={index} className={classNames({ 'tab-pane': true, 'p-4': true, 'fade': true, active: index === tabActive[element.id], show: index === tabActive[element.id] })} id={"nav-tab" + index + "-" + element.id} role="tabpanel" aria-labelledby={"nav-tab" + index + "-tab" + element.id}>{content}</div>
        })}
      </div>
    </div>
  ));

  return (
    <>
      <div className={classes.howCarouselSection}>
        <div className="container px-3">
          {paragraph ? (
            <Row>
              <Col xs="12" lg="7" className="offset-lg-1">
                <h2 className={classes.paragraphTitle}>{paragraph.title}</h2>
                <p className={classes.paragraphDescription}
                  dangerouslySetInnerHTML={{ __html: paragraph.description }} />
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
                <p className={classes.howCarouselSubtitle}
                  dangerouslySetInnerHTML={{ __html: subtitle }} />
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
