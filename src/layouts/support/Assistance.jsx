/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';
import { Button } from 'design-react-kit';
import { HeroTitle } from '../../components/hero/HeroTitle';
import { HeroBody } from '../../components/hero/HeroBody';
import { HeroCtaContainer } from '../../components/hero/HeroCtaContainer';
import { HeroGraphic } from '../../components/hero/HeroGraphic';
import { Hero } from '../../components/hero/Hero';
import { ModalUpdates } from '../../components/modal/ModalUpdates';
import content from '../../../contents/support-page/support.yml';

const {
  heroAssistance: { title, body, btnText, altImg },
} = content;


const useStyle = createUseStyles({
  heroAssistanceBg: {
    backgroundColor: '#ffffff',
  },
  heroTitle: {
    color: '#33485C',
    fontSize: '1.333rem',
    fontWeight: '700',
    '@media (min-width: 992px)': {
      fontSize: '1.778rem',
    },
  },
  heroBtn:{
    textTransform: 'uppercase',
    marginTop: '1.5rem',
    '@media (min-width: 992px)': {
      marginTop: '2.667rem',
    },
  },
});

export const Assistance = () => {
  const classes = useStyle();
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Hero className={classes.heroAssistanceBg}>
        <div className="row align-items-center px-lg-5 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-0 mt-3 mt-lg-0 pr-lg-5">
            <HeroTitle title={title} className={classes.heroTitle} />
            <HeroBody html={body} />
            <HeroCtaContainer>
              <Button color='primary' className={classes.heroBtn} onClick={() => toggleModal()}>{btnText}</Button>
            </HeroCtaContainer>
          </div>
          <HeroGraphic className="col-lg-6 text-center mt-4 mt-lg-0">
            <StaticImage
              src="../../../static/assets/supporto.svg"
              alt={altImg}
              aria-label={altImg}
            />
          </HeroGraphic>
        </div>
      </Hero>
      <ModalUpdates initialState={isOpen} handleToggle={toggleModal} />
    </React.Fragment>
  );
};
