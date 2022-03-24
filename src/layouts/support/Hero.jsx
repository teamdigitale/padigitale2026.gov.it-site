/* eslint-disable prettier/prettier */
import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { Breadcrumb } from '../../components/Breadcrumb';

const useStyle = createUseStyles({
  supportHero: {
    composes: 'it-hero-wrapper',
    minHeight: 'auto',
    backgroundColor: '#F0F6FC',
    '&.it-hero-wrapper .it-hero-text-wrapper': {
      paddingTop: '48px',
    },
    '& .it-hero-text-wrapper': {
      paddingRight: '0',
      paddingLeft: '0',
      '& .no_toc': {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#33485C',
        lineHeight: '48px',
        marginBottom: '30px',
        '@media (max-width: 991px)': {
          fontSize: '2.25rem',
        },
      },
      '& .support-hero-description': {
        fontSize: '24px',
        color: '#33485C',
        lineHeight: '1.5',
        '@media (max-width: 991px)': {
          fontSize: '1.125rem',
        },
      },
    },
  },
});

export const HeroSupport = ({ title, subtitle }) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.supportHero}>
        <div className="container px-3">
        <Breadcrumb currentPage="Supporto" />
          <div className="row">
            <div className="col-12 col-lg-6 offset-lg-1">
              <div className="it-hero-text-wrapper">
                <h3 className="no_toc">{title}</h3>
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