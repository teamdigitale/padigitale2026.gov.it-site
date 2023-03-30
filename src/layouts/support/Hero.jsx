/* eslint-disable prettier/prettier */
import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'design-react-kit';
import { Link } from 'gatsby';

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
      fontSize: '18px',
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
  listWrapper: {
    composes: 'mt-5',
    display: 'flex',
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      textAlign: 'center',
    },
  },
  list: {
    composes: 'list',
    display: 'flex',
    flexDirection: 'column',
    '& + .list': {
      marginTop: '2.222rem',
      '@media (min-width: 992px)': {
        marginTop: '0',
      },
    },
    '@media (min-width: 992px)': {
      paddingRight: '1.333rem',
      '& + .list': {
        padding: '0 1.333rem',
      },
      '&:not(:last-child)': {
        '& .list-items-wrapper': {
          position: 'relative',
        },
        '& .list-items-wrapper::after': {
          content: '""',
          height: '100%',
          width: '1px',
          position: 'absolute',
          top: '0',
          right: '-1.333rem',
          background: '#B6C5D6',
        },
      },
    },
  },
  listTitle: {
    composes: 'mb-3',
    fontSize: '0.889rem',
    color: '#33485C !important',
    fontWeight: '600',
    marginBottom: '0.889rem',
  },
  listItemsWrapper: {
    composes: 'list-items-wrapper',
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    composes: 'list-item',
    textAlign: 'left',
    color: '#0066CC',
    fontWeight: '400',
    marginBottom: '1rem',
    textDecoration: 'none',
    '@media (max-width: 991px)': {
      textAlign: 'center',
    },
    '&:focus': {
      outline: '2px solid #ff9900',
      boxShadow: 'none',
    },
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const HeroSupport = ({ title, subtitle, isFaq, breadCrumbLabel, isMatResource, list }) => {
  const classes = useStyle();
  const breadCrumbItemLabel = breadCrumbLabel || "Domande frequenti";
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
                <a>{breadCrumbItemLabel}</a>
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
          {isMatResource ?
            <Row className="mb-5 mt-5">
              <Col xs={12} lg={7}>
                <h1 className={classes.titleUpdate}>{title}</h1>
                <div className={classes.subtitleUpdate}>{subtitle}</div>
              </Col>
              <Col xs={12} lg={4} className="offset-lg-1 mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
                <img
                  src={`/assets/come-fare/MaterialieRisorse.svg`}
                  alt=""
                  className={classes.heroImg}
                />
              </Col>
            </Row>
            :
            <div className="row">
              <div className="col-12 col-lg-8 col-xl-6 offset-lg-1">
                <div className="it-hero-text-wrapper">
                  <h1 className="no_toc">{title}</h1>
                  <p
                    className="support-hero-description"
                    dangerouslySetInnerHTML={{ __html: subtitle }}
                  />
                  <div className={classes.listWrapper}>
                    {list
                      ? list.map((listItem) => (
                        <div key={listItem.title} className={classes.list}>
                          <span className={classes.listTitle}>{listItem.title}</span>
                          <div className={classes.listItemsWrapper}>
                            {listItem.items.map((item) => (
                              <React.Fragment key={item.item}>
                                <Link
                                  to={item.anchor}
                                  className={classes.listItem}
                                >
                                  {item.item}
                                </Link>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      ))
                      : ''}
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  );
};

HeroSupport.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  isFaq: PropTypes.bool,
  breadCrumbLabel: PropTypes.string,
  isMatResource: PropTypes.bool,
  list: PropTypes.array,
};