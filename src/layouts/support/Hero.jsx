/* eslint-disable prettier/prettier */
import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from 'design-react-kit';

const useStyle = createUseStyles({
  breadcrumb: {
    padding: '1.563rem 0 0',
    '& .breadcrumb': {
      padding: '0.75rem 0',
    },
  },
  breadcrumbItem: {
    '& a': {
      color: '#5B6F82',
      fontWeight: '600',
      textDecoration: 'underline',
      fontSize: '18px',
    },
    '&::before': {
      fontWeight: '600',
      color: '#33485C',
    },
  },
  breadcrumbItemActive: {
    '& a': {
      color: '#656566',
      textDecoration: 'none',
      fontSize: '18px',
    },
    '&::before': {
      fontWeight: '600',
      color: '#33485C',
    },
  },
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
      '& p': {
        fontFamily: 'Titillium Web, sans-serif',
      },
      '& .no_toc': {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#33485C',
        lineHeight: '48px',
        marginBottom: '30px',
        '@media (max-width: 991px)': {
          fontSize: '2.25rem',
          textAlign: 'center',
        },
      },
      '& .support-hero-description': {
        fontSize: '24px',
        color: '#33485C',
        lineHeight: '1.5',
        '@media (max-width: 991px)': {
          fontSize: '1.25rem',
          textAlign: 'center',
        },
      },
    },
  },
});

export const HeroSupport = ({ title, subtitle, isFaq }) => {
  const classes = useStyle();

  return (
    <>
      <div className={classes.supportHero}>
        <div className="container px-3">
        
        {isFaq ? 
        <Breadcrumb className={classes.breadcrumb}>
         <BreadcrumbItem className={classes.breadcrumbItem}>
           <a href="/">Home</a>
           <span className="separator"></span>
         </BreadcrumbItem>
         <BreadcrumbItem className={classes.breadcrumbItem}>
           <a href="/supporto">Supporto</a>
         </BreadcrumbItem>
         <BreadcrumbItem active className={classes.breadcrumbItemActive}>
           <a>Domande frequenti</a>
         </BreadcrumbItem>
       </Breadcrumb>
         :

        <Breadcrumb className={classes.breadcrumb}>
        <BreadcrumbItem className={classes.breadcrumbItem}>
          <a href="/">Home</a>
          <span className="separator"></span>
        </BreadcrumbItem>
        <BreadcrumbItem active className={classes.breadcrumbItemActive}>
          <a>Supporto</a>
        </BreadcrumbItem>
      </Breadcrumb>
        }
          <div className="row">
            <div className="col-12 col-lg-8 col-xl-6 offset-lg-1">
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
  isFaq: PropTypes.bool,
};