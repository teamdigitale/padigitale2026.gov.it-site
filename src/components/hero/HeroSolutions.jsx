import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Hero, Container } from 'design-react-kit';
import PropTypes from 'prop-types';
import { HeroTitle } from './HeroTitle';
import { HeroBackground } from './HeroBackground';
import { HeroParagraph } from './HeroParagraph';

const useStyles = createUseStyles({
  heroImg: {
    position: 'relative',
    width: '100%',
    '@media (min-width: 992px)': {
      position: 'absolute',
      right: '122px',
      top: '54px',
      maxWidth: '300px',
    },
    '@media (min-width: 1200px)': {
      maxWidth: '300px',
      right: '260px',
    },
    '@media (max-width: 1200px)': {
      top: '94px',
    },
    '@media (min-width: 1700px)': {
      right: '385px',
    },
    '@media (min-width: 1441px) and (max-width: 1680px)': {
      right: '380px',
    },
    '@media (max-width: 991px)': {
      width: '60%',
      top: '0',
    },
    '@media (max-width: 767px)': {
      width: '80%',
    },
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#33485C',
    lineHeight: '48px',
    marginBottom: '30px',
    '@media (max-width: 991px)': {
      fontSize: '2.25rem',
    },
  },
  heroSubtitle: {
    fontSize: '24px',
    color: '#33485C',
    lineHeight: '1.5',
    '@media (max-width: 991px)': {
      fontSize: '1.125rem',
    },
  },
  contentWrapper: {
    composes: 'it-hero-text-wrapper',
    display: 'flex',
  },
  heroWrapper: {
    composes: 'it-hero-wrapper',
    position: 'relative',
    display: 'flex',
    '&.it-hero-wrapper': {
      alignItems: 'flex-start',
      minHeight: 'unset',
    },
    '&.it-hero-wrapper .it-hero-text-wrapper': {
      '@media (min-width: 992px)': {
        padding: '0',
      },
      '@media (max-width: 991px)': {
        padding: '0 0 3.889rem',
      },
    },
    '&.overlap': {
      marginBottom: '-7rem',
      paddingBottom: '4rem',
    },
    '&.bg-white': {
      backgroundColor: 'transparent !important',
      '& .it-hero-text-wrapper.bg-white span, h1, h2, h3, p': {
        color: '#33485C',
      },
      '& .it-hero-text-wrapper.bg-white span.list-item': {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#0066CC',
        marginBottom: '0.889rem',
        '&:last-child': {
          marginBottom: '0',
        },
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
      '@media (max-width: 992px)': {
        fontSize: '1.25rem',
      },
    },
    '& .container .it-hero-text-wrapper .btn': {
      fontSize: '1rem',
    },
  },
  textWrapper: {
    '@media (min-width: 992px)': {
      marginRight: '2.611rem',
    },
    '@media (max-width: 991px)': {
      textAlign: 'center',
    },
  },
});

export const HeroSolutions = ({ title, body, image, isH1 }) => {
  const classes = useStyles();

  return (
    <Hero className="position-relative">
      <div className={`${classes.heroWrapper} bg-white pb-5`}>
        <Container className="pl-lg-2 pr-lg-2 pl-3 pr-3">
          <Row className="mt-5">
            <Col xs="12" lg="11" className="offset-lg-1 px-0">
              <div className={`${classes.contentWrapper} bg-white d-flex flex-column`}>
                <Row className="m-0">
                  <Col lg={6} xs={12} className="pr-3">
                    <div className={classes.textWrapper}>
                      <HeroTitle title={title} className={classes.heroTitle} Tag={isH1 ? 'h1' : 'h3'} />
                      <HeroParagraph text={body} className={classes.heroSubtitle} />
                    </div>
                  </Col>
                  <Col xs={12} lg={6} className="d-flex d-lg-none mt-5 mt-lg-0 justify-content-center">
                    <HeroBackground image={image} className={classes.heroImg} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <HeroBackground image={image} className={`${classes.heroImg} d-none d-lg-block`} />
    </Hero>
  );
};

HeroSolutions.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  isH1: PropTypes.bool,
};
