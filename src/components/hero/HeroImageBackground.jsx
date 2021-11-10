import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Hero } from 'design-react-kit';
import { HeroTitle } from './HeroTitle';
import { HeroBackground } from './HeroBackground';
import { HeroButton } from './HeroButton';
import { HeroParagraph } from './HeroParagraph';

const useStyles = createUseStyles({
  heroImg: {
    position: 'relative',
    width: '100%',
    maxHeight: '25rem',
    objectFit: 'none',
    objectPosition: 'right',
  },
  heroTitle: {
    composes: 'no_doc title-hero',
    fontSize: '2.222rem',
    '@media (max-width: 992px)': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '1.778rem',
      textAlign: 'center',
    },
  },
  contentWrapper: {
    composes: 'it-hero-text-wrapper',
    paddingLeft: '0 !important',
    zIndex: 2,
  },
  heroWrapper: {
    composes: 'it-hero-wrapper',
    position: 'relative',
    display: 'flex',
    padding: '0 0 2rem',
    '&:not(.overlap)': {
      minHeight: 'auto',
      '& .container .it-hero-text-wrapper': {
        padding: '5rem 0',
        '@media (max-width: 992px)': {
          padding: '4rem 0 1rem',
        },
        '& .title-hero': {
          fontSize: '2.5rem',
          '@media (min-width: 992px)': {
            maxWidth: '26.2rem',
            fontSize: '2.667rem',
            display: 'block',
          },
        },
        '& p': {
          '@media (min-width: 992px)': {
            maxWidth: '26.2rem',
          },
        },
      },
    },
    '&.overlap': {
      marginBottom: '-7rem',
      paddingBottom: '11rem',
    },
    '@media (max-width: 992px)': {
      flexDirection: 'column',
      paddingBottom: '5rem',
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
    '&.it-hero-wrapper .it-hero-text-wrapper': {
      /* padding: '10rem' */
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
  heroContentContainer: {
    composes: 'container',
    '&.container': {
      marginRight: '0',
      maxWidth: '100%',
    },
    '& .it-hero-text-wrapper': {
      padding: '5.333rem 0 0',
    },
  },
});

export const HeroImageBackground = ({
  title,
  body,
  theme,
  image,
  firstButtonLabel,
  firstButtonAriaLabel,
  firstButtonClass,
  firstButtonHref,
  secondButtonLabel,
  secondButtonClass,
  secondButtonHref,
  overlap,
  noButton,
}) => {
  const classes = useStyles();
  return (
    <Hero>
      <div className={`${classes.heroWrapper} ${overlap ? 'overlap' : ''} ${theme}`}>
        <div className={classes.heroContentContainer}>
          <Row>
            <Col xs="12" lg="5" className="offset-lg-1">
              <div className={`${classes.contentWrapper} ${theme}`}>
                <div>
                  <HeroTitle Tag="h3" title={title} className={classes.heroTitle} />
                  <HeroParagraph text={body} />
                  <div className={classes.buttonContainer}>
                    {noButton ? (
                      ''
                    ) : (
                      <HeroButton
                        classButton={firstButtonClass}
                        label={firstButtonLabel}
                        href={firstButtonHref}
                        ariaLabel={firstButtonAriaLabel}
                        target="_blank"
                        rel="noreferrer"
                      />
                    )}
                    {secondButtonLabel ? (
                      <HeroButton classButton={secondButtonClass} label={secondButtonLabel} href={secondButtonHref} />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={5} className="pr-0 offset-lg-1 mt-4 mt-lg-0">
              <HeroBackground image={image} className={classes.heroImg} />
            </Col>
          </Row>
        </div>
      </div>
    </Hero>
  );
};
