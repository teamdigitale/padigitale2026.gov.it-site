import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { Hero } from 'design-react-kit';
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
    fontSize: '2.5rem',
    '@media (max-width: 768px)': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '2rem',
    },
  },
  contentWrapper: {
    composes: 'it-hero-text-wrapper',
    zIndex: 2,
  },
  heroWrapper: {
    composes: 'it-hero-wrapper',
    position: 'relative',
    display: 'flex',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    },
    '@media (min-width: 992px)': {
      '& .container .it-hero-text-wrapper': {
        padding: '120px 54% 168px 26px',
      },
    },
    '& .container .it-hero-text-wrapper p': {
      fontFamily: 'Titillium Web,Geneva,Tahoma,sans-serif',
      fontSize: '1.5rem',
      '@media (max-width: 768px)': {
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
    '@media (max-width: 768px)': {
      justifyContent: 'center',
    },
  },
});

export const HeroImage = ({
  title,
  body,
  theme,
  image,
  firstButtonLabel,
  firstButtonClass,
  firstButtonHref,
  secondButtonLabel,
  secondButtonClass,
  secondButtonHref,
}) => {
  const classes = useStyles();
  return (
    <Hero>
      <div className={classes.heroWrapper}>
        <div className="container px-3 px-md-0">
          <div className="row">
            <div className="col-12">
              <div className={`${classes.contentWrapper} ${theme}`}>
                <div>
                  <HeroTitle title={title} className={classes.heroTitle} />
                  <HeroParagraph text={body} />
                  <div className={classes.buttonContainer}>
                    <HeroButton
                      classButton={firstButtonClass}
                      label={firstButtonLabel}
                      href={firstButtonHref}
                    />
                    {secondButtonLabel ? (
                      <HeroButton
                        classButton={secondButtonClass}
                        label={secondButtonLabel}
                        href={secondButtonHref}
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HeroBackground image={image} />
      </div>
    </Hero>
  );
};
