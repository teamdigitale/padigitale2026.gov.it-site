import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import { HeroCategory } from '../../components/hero/HeroCategory';
import { HeroTitle } from '../../components/hero/HeroTitle';
import { HeroBody } from '../../components/hero/HeroBody';
import { HeroCtaContainer } from '../../components/hero/HeroCtaContainer';
import { Cta } from '../../components/hero/Cta';
import { HeroGraphic } from '../../components/hero/HeroGraphic';
import { Hero } from '../../components/hero/Hero';
import content from '../../../contents/home-page/home.yml';
import links from '../../../contents/links.yml';
import labels from '../../../contents/labels.yml';
import { ExternalLink } from '../../components/ExternalLink';

const {
  heroStrategy: { category, title, body, ctaAriaLabelSpid, ctaAriaLabelCie, altImg },
} = content;
const {
  internalLinks: { strategy: strategyHero },
} = links;
const {
  externalLinks: { strategyExt: strategyHeroExt },
} = links;

const { showMore, showSPID, showCIE } = labels;

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
  // This is a dirty hack to avoid pa11y issues with contrast ratio on noscript text content
  a11yHighContrast: {
    '@global': {
      noscript: {
        color: 'white',
      },
    },
  },
});

export const StrategySection = () => {
  const classes = useStyles();
  return (
    <Hero>
      <div id="strategy" className="row align-items-center px-lg-5">
        <div className="col-lg-6 p-0 mt-3 mt-lg-0 pr-lg-5">
          <div className="text-center text-lg-left">
            <HeroCategory title={category} />
            <HeroTitle title={title} className="primary-color" />
            <HeroBody html={body} />
          </div>
          <HeroCtaContainer>
            <ExternalLink
              linkTo={strategyHeroExt.linkSpidExt}
              ariaLabel={ctaAriaLabelSpid}
              className="btn text-uppercase mx-4 ml-lg-0 my-2 btn-primary"
            >
              {showSPID}
            </ExternalLink>
            <ExternalLink
              linkTo={strategyHeroExt.linkCieExt}
              ariaLabel={ctaAriaLabelCie}
              className="btn text-uppercase mx-4 ml-lg-0 my-2 btn-primary"
            >
              {showCIE}
            </ExternalLink>
          </HeroCtaContainer>
        </div>
        <HeroGraphic className="col-lg-6">
          <StaticImage
            src="../../images/section01.jpg"
            alt={altImg}
            aria-label={altImg}
          />
        </HeroGraphic>
      </div>
    </Hero>
  );
};
