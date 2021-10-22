import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import { HeroCategory } from '../../components/hero/HeroCategory';
import { HeroTitle } from '../../components/hero/HeroTitle';
import { HeroBody } from '../../components/hero/HeroBody';
import { HeroCtaContainer } from '../../components/hero/HeroCtaContainer';
import { HeroGraphic } from '../../components/hero/HeroGraphic';
import { Hero } from '../../components/hero/Hero';
import { ExternalLink } from '../../components/ExternalLink';

const useStyles = createUseStyles({
  btnPrimaryLight: {
    backgroundColor: 'var(--white)',
    color: 'var(--primary)',
  },
  verticalDelimiter: {
    composes: 'd-none d-xl-block mr-4',
    borderLeft: '1px solid #E6E9F2',
  },
  whiteHighContrast: {
    color: 'var(--white)',
    '&:hover': {
      // Needed to grant high contrast for a11y
      color: ['var(--white)', '!important'],
    },
  },
  heroTitle: {
    color: '#33485C',
    fontSize: '2.667rem',
    '@media (max-width: 992px)': {
      fontSize: '1.778rem',
    },
  },
  a11yHighContrast: {
    '@global': {
      noscript: {
        color: 'white',
      },
    },
  },
  heroImage: {
    composes: 'row align-items-center',
    paddingLeft: '100px',
    '& .hero-category': {
      color: '#33485C',
      fontSize: '0.889rem',
    },
    '& .hero-body': {
      color: '#33485C',
      fontSize: '1.333rem',
    },
  },
});

export const HeroImage = ({
  category,
  title,
  body,
  firstButtonHref,
  firstButtonLabel,
  secondButtonHref,
  secondButtonLabel,
  imageUrl,
  imageAlt,
}) => {
  const classes = useStyles();

  return (
    <Hero>
      <div className={classes.heroImage}>
        <div className="col-lg-6 p-0 mt-3 mt-lg-0 pr-lg-5">
          <div className="text-center text-lg-left">
            <HeroCategory title={category} className={classes.heroCategory} />
            <HeroTitle title={title} className={classes.heroTitle} />
            <HeroBody html={body} />
          </div>
          <HeroCtaContainer>
            <ExternalLink
              linkTo={firstButtonHref}
              ariaLabel={firstButtonLabel}
              className="btn text-uppercase mx-4 ml-lg-0 my-2 btn-primary"
            >
              {firstButtonLabel}
            </ExternalLink>
            {secondButtonLabel ? (
              <ExternalLink
                linkTo={secondButtonHref}
                ariaLabel={secondButtonLabel}
                className="btn text-uppercase mx-4 ml-lg-0 my-2 btn-outline-primary"
              >
                {secondButtonLabel}
              </ExternalLink>
            ) : (
              ''
            )}
          </HeroCtaContainer>
        </div>
        <HeroGraphic className="col-lg-6 d-flex justify-content-sm-center">
          <img src={imageUrl} alt={imageAlt} aria-label={imageAlt} />
        </HeroGraphic>
      </div>
    </Hero>
  );
};
