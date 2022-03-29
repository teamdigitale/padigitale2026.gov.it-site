import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { Row, Col, Hero } from 'design-react-kit';
import { Breadcrumb } from '../Breadcrumb';
import { HeroTitle } from './HeroTitle';
import { HeroBackground } from './HeroBackground';
import { HeroButton } from './HeroButton';
import { HeroParagraph } from './HeroParagraph';

const useStyles = createUseStyles({
  heroImg: {
    position: 'relative',
    width: '100%',
    maxHeight: '25rem',
    objectFit: 'contain',
    objectPosition: 'right',
    '@media (max-width: 992px)': {
      objectPosition: 'center',
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
      textAlign: 'center',
      display: 'block',
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
        padding: '0 0 5rem',
        '@media (max-width: 992px)': {
          paddingBottom: '0',
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
      backgroundColor: 'transparent !important',
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
    '&.it-hero-wrapper .it-hero-text-wrapper .it-btn-container': {
      position: 'relative',
    },
  },
  buttonContainer: {
    composes: 'it-btn-container',
    display: 'flex',
    '& .btn.btn-light:hover': {
      background: '#e9e6f2',
      color: '#004d99',
    },
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
      /* marginRight: '0',
      maxWidth: '100%', */
    },
    '& .it-hero-text-wrapper': {
      padding: '5.333rem 0 0',
    },
  },
  imageContainer: {
    composes: 'pr-0 offset-lg-1 mt-4 mt-lg-0',
    position: 'absolute',
    right: '0',
    top: '0',
    '@media (max-width: 992px)': {
      position: 'relative',
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
  titleId,
}) => {
  const classes = useStyles();
  return (
    <Hero>
      <div className={`${classes.heroWrapper} ${overlap ? 'overlap' : ''} ${theme}`}>
        <section aria-labelledby={titleId} className={`${classes.heroContentContainer} px-3`}>
          <Breadcrumb currentPage="Misure" noContainer={true} />
          <Row>
            <Col xs="12" lg="5" className="offset-lg-1">
              <div className={`${classes.contentWrapper} ${theme} mt-5`}>
                <div>
                  <HeroTitle id={titleId} Tag="h3" title={title} className={classes.heroTitle} />
                  <HeroParagraph text={body} className={classes.heroSubtitle} />
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
            <Col xs={12} lg={5} className={classes.imageContainer}>
              <HeroBackground image={image} className={classes.heroImg} />
            </Col>
          </Row>
        </section>
      </div>
    </Hero>
  );
};

HeroImageBackground.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  theme: PropTypes.string,
  image: PropTypes.string,
  firstButtonLabel: PropTypes.string,
  firstButtonAriaLabel: PropTypes.string,
  firstButtonClass: PropTypes.string,
  firstButtonHref: PropTypes.string,
  secondButtonLabel: PropTypes.string,
  secondButtonClass: PropTypes.string,
  secondButtonHref: PropTypes.string,
  overlap: PropTypes.bool,
  noButton: PropTypes.bool,
  titleId: PropTypes.string,
};
