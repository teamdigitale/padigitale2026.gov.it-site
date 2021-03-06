import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Hero, Container } from 'design-react-kit';
import { Link } from 'gatsby';
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
      right: '122px',
      top: '54px',
      maxWidth: '350px',
    },
    '@media (min-width: 1200px)': {
      maxWidth: '450px',
      right: '155px',
    },
    '@media (min-width: 1441px) and (max-width: 1680px)': {
      right: '280px',
    },
    '@media (min-width: 1700px)': {
      right: '385px',
    },
    '@media (max-width: 991px)': {
      width: '80%',
    },
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#33485C',
    lineHeight: '48px',
    marginBottom: '30px',
    '@media (max-width: 991px)': {
      fontSize: '2.25rem',
    },
  },
  heroSubtitle: {
    fontSize: '24px',
    color: '#33485C',
    lineHeight: '1.5',
    '@media (max-width: 991px)': {
      fontSize: '1.125rem',
    },
  },
  contentWrapper: {
    composes: 'it-hero-text-wrapper',
    display: 'flex',
  },
  heroWrapper: {
    composes: 'it-hero-wrapper',
    position: 'relative',
    display: 'flex',
    '&.it-hero-wrapper': {
      alignItems: 'flex-start',
    },
    '&.it-hero-wrapper .it-hero-text-wrapper': {
      '@media (min-width: 992px)': {
        padding: '0',
      },
      '@media (max-width: 991px)': {
        padding: '0 0 3.889rem',
      },
    },
    '&.overlap': {
      marginBottom: '-7rem',
      paddingBottom: '4rem',
    },
    '&.bg-white': {
      backgroundColor: 'transparent !important',
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
    '@media (max-width: 991px)': {
      textAlign: 'center',
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
    composes: 'mb-3',
    fontSize: '0.889rem',
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

export const HeroHowItWorks = ({ title, body, image, list }) => {
  const classes = useStyles();

  const scrollIntoView = (id) => {
    const item = document.querySelector('#' + id);
    item.setAttribute('tabindex', '-1');
    item.focus();
  };

  return (
    <Hero className="position-relative">
      <div className={`${classes.heroWrapper} bg-white`}>
        <Container className="pl-lg-2 pr-lg-2 pl-3 pr-3">
          <Row className="mt-5">
            <Col xs="12" lg="11" className="offset-lg-1 px-0">
              <div className={`${classes.contentWrapper} bg-white d-flex flex-column`}>
                <Row className="m-0">
                  <Col lg={6} xs={12} className="pr-3">
                    <div className={classes.textWrapper}>
                      <HeroTitle title={title} className={classes.heroTitle} Tag="h1" />
                      <HeroParagraph text={body} className={classes.heroSubtitle} />
                    </div>
                    <div className={classes.listWrapper}>
                      {list
                        ? list.map((listItem) => (
                            <div key={listItem.title} className={classes.list}>
                              <span className={classes.listTitle}>{listItem.title}</span>
                              <div className={classes.listItemsWrapper}>
                                {listItem.items.map((item) => (
                                  <React.Fragment key={item.item}>
                                    <Link
                                      to={`/iniziativa#` + item.anchor}
                                      onClick={() => scrollIntoView(item.anchor)}
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
                  </Col>
                  <Col xs={12} lg={6} className="d-flex d-lg-none mt-5 mt-lg-0 justify-content-center">
                    <HeroBackground image={image} className={classes.heroImg} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <HeroBackground image={image} className={`${classes.heroImg} d-none d-lg-block`} />
    </Hero>
  );
};

HeroHowItWorks.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  list: PropTypes.array,
};
