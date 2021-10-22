/* eslint-disable prettier/prettier */
import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

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
        fontSize: '2.222rem',
        fontWeight: 'bold',
        letterSpacing: '-1.3px',
        '@media (min-width: 992px)': {
          fontSize: '2.667rem',
        },
      },
      '& .support-hero-description': {
        color: '#33485C',
        fontSize: '1.111rem',
        fontFamily: 'Titillium Web',
        '@media (min-width: 992px)': {
          fontSize: '1.333rem',
        },
      },
    },
  },
});

export const HeroSupport = ({title, subtitle}) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.supportHero}>
        <div className="container px-3">
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="it-hero-text-wrapper">
                <h1 className="no_toc">{title}</h1>
                <p
                  className="support-hero-description"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HeroSupport.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};