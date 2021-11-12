import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { Row, Col, Hero } from 'design-react-kit';
import { HeroTitle } from './HeroTitle';
import { HeroBackground } from './HeroBackground';
import { HeroParagraph } from './HeroParagraph';
import { HeroCategory } from './HeroCategory';

const useStyles = createUseStyles({
  heroImg: {
    position: 'absolute',
    right: '0',
    top: '0',
    zIndex: '0',
  },
  heroTitle: {
    composes: 'no_doc',
    fontSize: '2.667rem',
    '@media (max-width: 992px)': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '1.778rem',
      textAlign: 'center',
    },
  },
  contentWrapper: {
    composes: 'it-hero-text-wrapper bg-blue',
    paddingLeft: '0 !important',
    zIndex: 2,
    paddingTop: '3.75rem !important',
    '@media (max-width: 991px)': {
      textAlign: 'center',
    },
  },
  heroWrapper: {
    composes: 'it-hero-wrapper bg-blue',
    position: 'relative',
    display: 'flex',
    '&.overlap': {
      marginBottom: '-7rem',
      paddingBottom: '4rem',
      '@media (min-width: 992px)': {
        marginBottom: '-14rem',
      },
    },
    '@media (max-width: 992px)': {
      flexDirection: 'column',
      paddingBottom: '5rem',
      '& .container .it-hero-text-wrapper': {
        padding: '120px 54% 168px 26px',
      },
      '&.it-hero-wrapper .it-hero-text-wrapper': {
        padding: '3rem 0',
      },
    },
    '&.bg-white': {
      backgroundColor: '#fff',
      '& .it-hero-text-wrapper.bg-white span, h1, h2, h3, p': {
        color: '#33485C',
      },
    },
    '&.bg-blue': {
      backgroundColor: '#0066CC',
      '& .bg-blue': {
        color: '#fff',
      },
    },
    '&.bg-blue .btn': {
      color: '#0066CC',
    },
    '& .container .it-hero-text-wrapper p': {
      fontFamily: 'Titillium Web,Geneva,Tahoma,sans-serif',
      fontSize: '1.333rem',
      '@media (max-width: 991px)': {
        fontSize: '1.25rem'
      },
    },
    '& .container .it-hero-text-wrapper .btn': {
      fontSize: '1rem',
    },
  },
  buttonContainer: {
    composes: 'it-btn-container',
    display: 'flex',
    '& .btn+.btn': {
      marginLeft: '1.875rem',
    },
    '@media (max-width: 992px)': {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      '& .btn+.btn': {
        marginLeft: '0',
        marginTop: '1.875rem',
      },
    },
  },
  bgMask: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0066CC',
    position: 'absolute',
    left: '0',
    top: '0',
    zIndex: '1',
    opacity: '0.85',
  },
});

export const HeroImageBackgroundFull = ({
  category,
  title,
  body,
  image,
  imageMobile,
  overlap,
}) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    });
  }, []);

  return (
    <Hero>
      <div className={`${classes.heroWrapper} ${overlap ? 'overlap' : ''}`}>
        <div className="container px-3 px-md-0">
          <Row>
            <Col xs="12" lg="11" className="offset-lg-1">
              <div className={`${classes.contentWrapper}`}>
                <div>
                  <HeroCategory title={category} />
                  <HeroTitle Tag="h4" title={title} className={classes.heroTitle} />
                  <HeroParagraph text={body} />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={classes.bgMask}></div>
      </div>
    </Hero>
  );
};

HeroImageBackgroundFull.propTypes = {
  category: PropTypes.any,
  title: PropTypes.any,
  body: PropTypes.any,
  image: PropTypes.any,
  imageMobile: PropTypes.any,
  overlap: PropTypes.bool,
};
