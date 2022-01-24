import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { HeroCategory } from '../../components/hero/HeroCategory';
import { HeroTitle } from '../../components/hero/HeroTitle';
import { HeroBody } from '../../components/hero/HeroBody';
import { HeroCtaContainer } from '../../components/hero/HeroCtaContainer';
import { HeroGraphic } from '../../components/hero/HeroGraphic';
import { Hero } from '../../components/hero/Hero';
import { ExternalLink } from '../../components/ExternalLink';
import { GlobalStateContext } from '../../context/globalContext';

const useStyles = createUseStyles({
  btnPrimaryLight: {
    // eslint-disable-next-line sonarjs/no-duplicate-string
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
    composes: 'hero-title',
    color: '#33485C',
    fontSize: '2rem',
    lineHeight: '1.25',
    '@media (min-width: 992px)': {
      fontSize: '2.667rem',
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
    '@media (min-width: 768px)': {
      flexWrap: 'nowrap !important',
      '& .hero-graphic-img': {
        order: 2,
      },
    },
    '@media (min-width: 991.99px)': {
      padding: '2.222rem 0',
      flexDirection: 'row',
    },
    '& .hero-category': {
      color: '#33485C',
      fontSize: '0.889rem',
    },
    '& .hero-body': {
      color: '#33485C',
      fontSize: '1.5rem',
      lineHeight: '1.5',
      marginBottom: '2rem',
      '@media (min-width: 992px)': {
        fontSize: '1.333rem',
      },
    },
    '& .graphic-image': {
      '@media (max-width: 767px)': {
        maxWidth: '15.6rem',
        margin: '0 auto 2.5rem',
      },
    },
    '&.hero-small .hero-body': {
      '@media (max-width: 992px)': {
        fontSize: '1rem',
        textAlign: 'left',
      },
    },
    '&.hero-small .hero-title': {
      '@media (max-width: 992px)': {
        display: 'block',
        textAlign: 'left',
      },
    },
    '&.hero-small .graphic-image': {
      '@media (max-width: 992px)': {
        width: '220px',
      },
    },
  },
});

export const HeroImage = ({
  ctaContainer,
  smallText,
  category,
  title,
  body,
  firstInternal,
  firstButtonHref,
  firstButtonLabel,
  firstButtonAriaLabel,
  secondButtonLabel,
  secondButtonAriaLabel,
  imageUrl,
  imageAlt,
  heroTitleId,
}) => {
  const classes = useStyles();
  const [, dispatch] = useContext(GlobalStateContext);

  return (
    <Hero Tag="section" ariaLabelledBy={heroTitleId}>
      <div className={`${classes.heroImage} ${smallText ? 'hero-small' : ''}`}>
        <div className="col-lg-6 offset-lg-1 p-lg-0 mt-3 mt-lg-0 pr-lg-5">
          <div className="text-center text-lg-left">
            {category ? <HeroCategory title={category} className={classes.heroCategory} /> : ''}
            <HeroTitle Tag="h4" id={heroTitleId} title={title} className={classes.heroTitle} />
            <HeroBody html={body} />
          </div>
          {ctaContainer ? (
            <HeroCtaContainer>
              {firstInternal ? (
                <Link
                  className="btn text-uppercase mx-4 ml-lg-0 my-3 my-md-0 btn-primary"
                  to={firstButtonHref}
                  aria-label={firstButtonAriaLabel}
                >
                  {firstButtonLabel}
                </Link>
              ) : (
                <ExternalLink
                  linkTo={firstButtonHref}
                  ariaLabel={firstButtonAriaLabel}
                  className="btn text-uppercase mx-4 ml-lg-0 my-3 my-md-0 btn-primary"
                >
                  {firstButtonLabel}
                </ExternalLink>
              )}
              {secondButtonLabel ? (
                <Link
                  ariaLabel={secondButtonAriaLabel}
                  className="btn text-uppercase mx-4 ml-lg-0 my-3 my-md-0 btn-outline-primary"
                  to="/come-funziona#beneficiari"
                  onClick={() =>
                    dispatch({
                      type: 'SET:HOW_SECTION_ID',
                      payload: { howId: 'beneficiari' },
                    })
                  }
                >
                  {secondButtonLabel}
                </Link>
              ) : (
                ''
              )}
            </HeroCtaContainer>
          ) : (
            ''
          )}
        </div>
        <HeroGraphic className="col-lg-5 d-flex justify-content-sm-center hero-graphic-img">
          <img className="graphic-image" src={imageUrl} alt={imageAlt} />
        </HeroGraphic>
      </div>
    </Hero>
  );
};

HeroImage.propTypes = {
  ctaContainer: PropTypes.bool,
  smallText: PropTypes.bool,
  category: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  firstInternal: PropTypes.bool,
  firstButtonHref: PropTypes.string,
  firstButtonLabel: PropTypes.string,
  firstButtonAriaLabel: PropTypes.string,
  secondButtonHref: PropTypes.string,
  secondButtonLabel: PropTypes.string,
  secondButtonAriaLabel: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  heroTitleId: PropTypes.string,
};
