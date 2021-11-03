import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col, Hero, Container } from 'design-react-kit';
import { HeroTitle } from './HeroTitle';
import { HeroBackground } from './HeroBackground';
import { HeroParagraph } from './HeroParagraph';

const useStyles = createUseStyles({
  heroImg: {
    position: 'relative',
  },
  heroTitle: {
    composes: 'no_doc',
    fontSize: '2.222rem',
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
  },
  heroWrapper: {
    composes: 'it-hero-wrapper',
    position: 'relative',
    display: 'flex',
    '&.it-hero-wrapper .it-hero-text-wrapper': {
      '@media (min-width: 992px)': {
        padding: '5.333rem 0 3.889rem',
      },
      '@media (max-width: 991px)': {
        padding: '5.333rem 0 3.889rem',
      },
    },
    '&.overlap': {
      marginBottom: '-7rem',
      paddingBottom: '4rem',
    },
    '&.bg-white': {
      backgrodunColor: '#fff',
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
      backgrodunColor: '#0066CC',
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
    padding: '0',
    border: '0',
    textAlign: 'left',
    backgroundColor: 'transparent',
    color: '#0066CC',
    fontWeight: '600',
    marginBottom: '1rem'
  },
});

export const HeroHowItWorks = ({ title, body, image, list }) => {
  const classes = useStyles();

  const scrollIntoView = (id) => {
    document.querySelector('#' + id).scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <Hero>
      <div className={`${classes.heroWrapper} bg-white`}>
        <Container className="pl-3 pr-0">
          <Row>
            <Col xs="12" lg="11" className="offset-lg-1 px-0">
              <div
                className={`${classes.contentWrapper} bg-white d-flex flex-column`}
              >
                <Row>
                  <Col lg={6} xs={12}>
                    <div className={classes.textWrapper}>
                      <HeroTitle title={title} className={classes.heroTitle} />
                      <HeroParagraph text={body} />
                    </div>
                    <div className={classes.listWrapper}>
                      {list.map((listItems) => {
                        const { title, items } = listItems;
                        return (
                          <div className={classes.list}>
                            <span className={classes.listTitle}>{title}</span>
                            <div className={classes.listItemsWrapper}>
                              {items.map((item) => {
                                return (
                                  <button onClick={() => scrollIntoView(item.anchor)} className={classes.listItem}>
                                    {item.item}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    lg={6}
                    className="d-flex d-lg-block mt-4 mt-lg-0 justify-content-center pr-0"
                  >
                    <HeroBackground image={image} className={classes.heroImg} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Hero>
  );
};
