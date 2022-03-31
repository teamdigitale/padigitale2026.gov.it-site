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
  heroSectionDark: {
    backgroundColor: '#0066CC',
  },
  heroSectionLight: {
    backgroundColor: '#F0F6FC',
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
  outlineBtn: {
    backgroundColor: 'transparent',
    border: '1px solid #06c',
    color: '#06c',
  },
  heroImage: {
    composes: 'row align-items-center',
    '@media (min-width: 768px)': {
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
      '@media (max-width: 991px)': {
        maxWidth: '50%',
      },
      '@media (max-width: 767px)': {
        maxWidth: '80%',
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
    '&.hero-main .hero-title': {
      fontSize: '2.222rem',
      color: '#fff',
    },
    '&.hero-main .hero-body': {
      color: '#fff',
    },
    '&.hero-main .btn': {
      backgroundColor: '#fff',
      color: '#0066CC',
      fontWeight: '600',
      '&:hover': {
        color: '#004d99',
      },
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
    '& .btn': {
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
  },
});

export const HeroImage = ({
  ctaContainer,
  smallText,
  mainHero,
  dark,
  light,
  outlineBtn,
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
    <Hero
      Tag="section"
      ariaLabelledBy={heroTitleId}
      className={`${dark ? classes.heroSectionDark : ''} ${light ? classes.heroSectionLight : ''}`}
    >
      <div className={`${classes.heroImage} ${smallText ? 'hero-small' : ''} ${mainHero ? 'hero-main' : ''}`}>
        <div className="col-lg-6 col-12 offset-lg-1 p-lg-0 mt-3 mt-lg-0 pr-lg-5">
          <div className="text-center text-lg-left">
            {category ? <HeroCategory title={category} className={classes.heroCategory} /> : ''}
            <HeroTitle Tag="h2" id={heroTitleId} title={title} className={classes.heroTitle} />
            <HeroBody html={body} />
          </div>
          {ctaContainer ? (
            <HeroCtaContainer>
              {firstInternal ? (
                <Link
                  className={`btn text-uppercase ml-lg-0 my-3 my-md-0 btn-primary ${
                    outlineBtn ? classes.outlineBtn : ''
                  }`}
                  to={firstButtonHref}
                  aria-label={firstButtonAriaLabel}
                >
                  {firstButtonLabel}
                </Link>
              ) : (
                <ExternalLink
                  linkTo={firstButtonHref}
                  ariaLabel={firstButtonAriaLabel}
                  className="btn text-uppercase ml-lg-0 my-3 my-md-0 btn-primary"
                >
                  {firstButtonLabel}
                </ExternalLink>
              )}
              {secondButtonLabel ? (
                <Link
                  ariaLabel={secondButtonAriaLabel}
                  className="btn text-uppercase ml-lg-0 my-3 my-md-0 btn-outline-primary"
                  to="/iniziativa#beneficiari"
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
        <HeroGraphic className="col-lg-5 col-12 d-flex mt-5 mt-lg-0 justify-content-sm-center justify-content-lg-end hero-graphic-img">
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
  mainHero: PropTypes.bool,
  dark: PropTypes.bool,
  light: PropTypes.bool,
  outlineBtn: PropTypes.bool,
};
