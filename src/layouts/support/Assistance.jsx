/* eslint-disable prettier/prettier */
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';
import { HeroTitle } from '../../components/hero/HeroTitle';
import { HeroBody } from '../../components/hero/HeroBody';
import { HeroCtaContainer } from '../../components/hero/HeroCtaContainer';
import { HeroGraphic } from '../../components/hero/HeroGraphic';
import { Hero } from '../../components/hero/Hero';
import { ExternalLink } from '../../components/ExternalLink';
import content from '../../../contents/support-page/support.yml';

const {
  heroAssistance: { title, body, btnText, altImg },
} = content;


const useStyle = createUseStyles({
  heroTitle: {
    color: '#33485C',
    fontSize: '1.333rem',
    fontWeight: '700',
    '@media (min-width: 992px)': {
      fontSize: '1.778rem',
    },
  },
});

export const Assistance = () => {
  const classes = useStyle();

  return (
    <Hero>
      <div className="row align-items-center px-lg-5">
        <div className="col-lg-6 p-0 mt-3 mt-lg-0 pr-lg-5">
          <HeroTitle title={title} className={classes.heroTitle} />
          <HeroBody html={body} />
          <HeroCtaContainer>
            <ExternalLink
              linkTo="#"
              ariaLabel=""
              className="btn text-uppercase mx-4 ml-lg-0 my-4 btn-primary"
            >
              {btnText}
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
