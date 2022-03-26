import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Hero, Container, Breadcrumb, BreadcrumbItem } from 'design-react-kit';
import PropTypes from 'prop-types';
import { HeroTitle } from './HeroTitle';
import { HeroBackground } from './HeroBackground';
import { HeroParagraph } from './HeroParagraph';

const useStyles = createUseStyles({
  heroImg: {
    position: 'relative',
    width: '100%',
    '@media (min-width: 992px)': {
      position: 'absolute',
      right: '0',
      top: '160px',
      maxWidth: '530px',
    },
    '@media (min-width: 1200px)': {
      top: '48px',
      maxWidth: '700px',
    },
  },
  heroTitle: {
    composes: 'no_doc',
    fontSize: '2.5rem',
    '@media (max-width: 992px)': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '1.778rem',
      textAlign: 'center',
    },
  },
  contentWrapper: {
    composes: 'it-hero-text-wrapper',
    display: 'flex',
    paddingBottom: '5.625rem',
  },
  heroWrapper: {
    composes: 'it-hero-wrapper',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    '&.it-hero-wrapper': {
      minHeight: 'unset',
    },
    '&.it-hero-wrapper .it-hero-text-wrapper': {
      '@media (min-width: 992px)': {
        padding: '48px 0 80px',
      },
      '@media (max-width: 991px)': {
        padding: '3.75rem 0 3.75rem',
      },
    },
    '&.overlap': {
      marginBottom: '-7rem',
      paddingBottom: '4rem',
    },
    '&.bg-white': {
      backgroundColor: '#fff',
      '& .it-hero-text-wrapper.bg-white span, h1, h2, h3, p': {
        color: '#33485C',
      },
      '& .it-hero-text-wrapper.bg-white span.list-item': {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#0066CC',
        marginBottom: '0.889rem',
        '&:last-child': {
          marginBottom: '0',
        },
      },
    },
    '&.bg-blue': {
      backgroundColor: '#0066CC',
      '& .bg-blue': {
        color: '#fff',
      },
    },
    '&.bg-blue .btn': {
      color: '#0066CC',
    },
    '& .container .it-hero-text-wrapper p': {
      fontFamily: 'Titillium Web,Geneva,Tahoma,sans-serif',
      fontSize: '1.333rem',
      '@media (max-width: 992px)': {
        fontSize: '1.25rem',
      },
    },
    '& .container .it-hero-text-wrapper .btn': {
      fontSize: '1rem',
    },
  },
  textWrapper: {
    '@media (min-width: 992px)': {
      marginRight: '2.611rem',
    },
    '& p': {
      lineHeight: '1.5',
    },
  },
  buttonContainer: {
    composes: 'it-btn-container',
    display: 'flex',
    '& .btn+.btn': {
      marginLeft: '1.875rem',
    },
    '@media (max-width: 992px)': {
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      '& .btn+.btn': {
        marginLeft: '0',
        marginTop: '1.875rem',
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
    fontSize: '0.778rem',
    color: '#33485C',
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
    fontWeight: '600',
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
  breadWhite: {
    paddingTop: '1.563rem',
    '& a': {
      color: 'white',
    },
    '& .breadcrumb': {
      padding: '0.75rem 0',
    },
    '& .breadcrumb-item': {
      textDecoration: 'underline',
      fontWeight: '600',
      '&.active': {
        textDecoration: 'none',
        fontWeight: '400',
        '& a': {
          textDecoration: 'none',
        },
        '&::before': {
          color: 'white',
          fontWeight: '700',
        },
      },
    },
  },
});

export const HeroHowToDo = ({ title, body, image, imageMob }) => {
  const classes = useStyles();

  return (
    <Hero className="position-relative">
      <div className={`${classes.heroWrapper}`}>
        <Container className="px-3">
          <Row className="m-0">
            <Col xs="12" lg="11" className="px-0">
              <Breadcrumb className={classes.breadWhite}>
                <BreadcrumbItem>
                  <a href="/">Home</a>
                  <span className="separator"></span>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                  <a href="/come-partecipare">Come partecipare</a>
                </BreadcrumbItem>
              </Breadcrumb>
              <div className={`${classes.contentWrapper} d-flex flex-column`}>
                <Col lg={6} xs={12} className="pr-lg-3 pl-0 pr-0">
                  <div className={classes.textWrapper}>
                    <HeroTitle title={title} className={classes.heroTitle} />
                    <HeroParagraph text={body} />
                  </div>
                </Col>
                <Col xs={12} lg={6} className="d-flex d-lg-none mt-4 mt-lg-0 justify-content-center">
                  <HeroBackground image={imageMob} className={classes.heroImg} />
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <HeroBackground image={image} className={`${classes.heroImg} d-none d-lg-block`} />
    </Hero>
  );
};

HeroHowToDo.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  imageMob: PropTypes.string,
  list: PropTypes.array,
};
