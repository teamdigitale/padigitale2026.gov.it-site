/* eslint-disable prettier/prettier */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import { HeroTitle } from '../../components/hero/HeroTitle';
import { HeroBody } from '../../components/hero/HeroBody';
import { HeroCtaContainer } from '../../components/hero/HeroCtaContainer';
import { HeroGraphic } from '../../components/hero/HeroGraphic';
import { Hero } from '../../components/hero/Hero';
import content from '../../../contents/support-page/support.yml';

const {
  heroAssistance: { title, body, btnText },
} = content;

const useStyle = createUseStyles({
  heroAssistanceBg: {
    backgroundColor: '#ffffff',
  },
  heroTitle: {
    color: '#33485C',
    fontSize: '1.556rem',
    fontWeight: '600',
    '@media (min-width: 992px)': {
      fontSize: '1.778rem',
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
      display: 'block',
    },
  },
  heroBtn: {
    textTransform: 'uppercase',
    marginTop: '1.5rem',
    '@media (max-width: 991px)': {
      marginRight: 'auto',
    },
    '@media (min-width: 991px)': {
      marginRight: 'auto',
    },
    '@media (max-width: 767px)': {
      width: '100%',
    },
  },
  heroGraphic: {
    '& img': {
      width: '100%',
      maxWidth: '370px',
      '@media (max-width: 991px)': {
        maxWidth: '310px',
      },
      '@media (max-width: 767px)': {
        width: '80%',
      },
    }
  },
});

export const Assistance = () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <Hero className={`${classes.heroAssistanceBg} pt-0`}>
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="offset-lg-1 col-lg-5 mt-3 mt-lg-0 pr-lg-5">
            <HeroTitle title={title} className={classes.heroTitle} Tag='h2'/>
            <HeroBody html={body} />
            <HeroCtaContainer>
              <Link to="/supporto/assistenza" className={`${classes.heroBtn} btn btn-primary`} aria-label="Vai alla pagina contattaci">
                {btnText}
              </Link>
            </HeroCtaContainer>
          </div>
          <HeroGraphic className={`${classes.heroGraphic} col-lg-6 text-center text-md-left text-lg-center mt-0 mt-md-4 mt-lg-0`}>
            <img
              src={`/assets/supporto.svg`}
              alt=""
            />
          </HeroGraphic>
        </div>
      </Hero>
    </React.Fragment>
  );
};
