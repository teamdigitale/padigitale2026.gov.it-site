import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Hero } from 'design-react-kit';
import { HeroTitle } from './HeroTitle';
import { HeroBackground } from './HeroBackground';
import { HeroButton } from './HeroButton';
import { HeroParagraph } from './HeroParagraph';

const useStyles = createUseStyles({
  heroImg: {
    position: 'absolute',
    right: '0',
    top: '0',
  },
  heroTitle: {
    composes: 'no_doc',
    fontSize: '2.222rem',
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
  },
  heroWrapper: {
    composes: 'it-hero-wrapper bg-blue',
    position: 'relative',
    display: 'flex',
    '&.overlap': {
      marginBottom: '-7rem',
      paddingBottom: '4rem',
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
      backgrodunColor: '#fff',
      '& .it-hero-text-wrapper.bg-white span, h1, h2, h3, p': {
        color: '#33485C',
      },
    },
    '&.bg-blue': {
      backgrodunColor: '#0066CC',
      '& .bg-blue': {
        color: '#fff',
      },
    },
    '&.bg-blue .btn': {
      color: '#0066CC',
    },
    '& .container .it-hero-text-wrapper': {
      '@media (min-width: 992px)': {
        // paddingLeft: '100px',
      },
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
});

export const HeroImageBackground = ({
  title,
  body,
  image,
  firstButtonLabel,
  firstButtonClass,
  firstButtonHref,
  secondButtonLabel,
  secondButtonClass,
  secondButtonHref,
  overlap,
}) => {
  const classes = useStyles();
  return (
    <Hero>
      <div className={`${classes.heroWrapper} ${overlap ? 'overlap' : ''}`}>
        <div className="container px-3 px-md-0">
          <Row>
            <Col xs="12" lg="11" className="offset-lg-1">
              <div className={`${classes.contentWrapper}`}>
                <div>
                  <HeroTitle title={title} className={classes.heroTitle} />
                  <HeroParagraph text={body} />
                  <div className={classes.buttonContainer}>
                    <HeroButton classButton={firstButtonClass} label={firstButtonLabel} href={firstButtonHref} />
                    {secondButtonLabel ? (
                      <HeroButton classButton={secondButtonClass} label={secondButtonLabel} href={secondButtonHref} />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <HeroBackground image={image} />
      </div>
    </Hero>
  );
};
