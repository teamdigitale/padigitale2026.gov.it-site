/* eslint-disable prettier/prettier */
import React from 'react';
import { createUseStyles } from 'react-jss';
import content from '../../../contents/support-page/support.yml';

const { 
  mainHero: {title, description} 
} = content;
const useStyle = createUseStyles({
  supportHero: {
    composes: 'it-hero-wrapper',
    minHeight: 'auto',
    backgroundColor: '#F0F6FC',
    '& .it-hero-text-wrapper': {
      paddingRight: '0',
      paddingLeft: '0',
      '& .no_toc': {
        color: '#33485C',
        fontSize: '40px',
        fontWeight: 'bold',
        letterSpacing: '-1.3px',
        '@media (min-width: 992px)': {
          fontSize: '48px',
        },
      },
      '& .support-hero-description': {
        color: '#33485C',
        fontSize: '20px',
        fontFamily: 'Titillium Web',
        '@media (min-width: 992px)': {
          fontSize: '24px',
        },
      },
    },
  },
});

export const HeroSupport = () => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.supportHero}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="it-hero-text-wrapper">
                <h1 className="no_toc">{title}</h1>
                <p
                  className="support-hero-description"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
