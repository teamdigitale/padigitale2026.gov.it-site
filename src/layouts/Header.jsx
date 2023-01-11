/* eslint-disable react/no-unescaped-entities */
/* eslint-disable sonarjs/no-duplicate-string */
import { Link } from 'gatsby';
import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Header as HeaderReactKit,
  Headers,
  Button,
  HeaderContent,
  Icon,
  Nav,
  NavItem,
  HeaderBrand,
  LinkListItem,
  LinkList,
  HeaderLinkZone,
} from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import links from '../../contents/links.yml';
import labels from '../../contents/labels.yml';
import { HeaderNav } from '../components/HeaderNav';
import { ExternalLink } from '../components/ExternalLink';
import { GlobalStateContext } from '../context/globalContext';

const { internalLinks, externalLinks } = links;
const { ariaLabel, headerTitle, headerSubtitle } = labels;

const useStyle = createUseStyles({
  /* Used for problems with nested <a> in the HeaderToggler component */
  navList: {
    composes: 'link-list',
    borderLeft: 'none',
    display: 'flex',
    marginBottom: '0',
    height: '100%',
    listStyleType: 'none',
    padding: '0',
    '& li': {
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px',
      color: '#0059b3',
    },
    '& li:not(:first-child)': {
      borderLeft: '1px solid rgba(0,89,179,.2)',
    },
  },
  navListWrapper: {
    height: '100%',
  },
  navMobile: {
    display: 'flex',
    flexGrow: '0',
    height: '100%',
  },
  navToggler: {
    composes: 'd-lg-none text-primary font-weight-semibold',
    fontSize: '.778em',
    padding: '.5rem 0',
  },
  /* Used due to inability to set classes to li tag with design react kit (LinkListItem) */
  verticalGroupDelimiter: {
    borderRight: '1px solid rgba(0,89,179,.2)',
  },
  horizontalGroupDelimiter: {
    backgroundColor: 'rgba(0,89,179,.2)',
  },
  subtitle: {
    composes: 'small',
  },
  '@media (max-width: 992px)': {
    verticalGroupDelimiter: {
      borderRight: 'none',
    },
  },
  '@media (max-width: 300px)': {
    subtitle: {
      display: 'none',
    },
  },
  topListLink: {
    composes: 'border-0 p-0 mr-0 my-0',
    '& .list-item': {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 24px',
      '@media (max-width: 991px)': {
        padding: '5px 0',
      },
    },
    '& .list-item-link': {
      display: 'inline-flex',
      padding: '0',
      alignItems: 'center',
      '& img': {
        maxHeight: '32px',
        '&.eu-logo': {
          marginLeft: '32px',
        },
        '&.user-logo': {
          maxHeight: '24px',
          marginRight: '10px',
        },
      },
    },
  },
  headerCenterWrapper: {
    height: 'auto',
    padding: [16, 0],
    '& .it-header-center-content-wrapper .it-brand-wrapper a .icon': {
      '&.site-logo': {
        width: '60px',
        height: '60px',
      },
      '&.repubblica-logo': {
        width: '3.556rem',
        height: '4rem',
        marginRight: '15px',
      },
    },
    '&.it-header-center-wrapper .it-header-center-content-wrapper': {
      alignItems: 'flex-start',
    },
  },
  headerCenter: {
    display: 'flex',
    flexDirection: 'column',
  },
  offCanvasWrapper: {
    padding: [13, 24],
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
    '@media (min-width: 992px)': {
      display: 'none',
    },
  },
  offCanvasTitle: {
    textDecoration: 'none',
    fontWeight: '700',
    '& .icon': {
      marginRight: '15px',
      width: '39px',
      height: '39px',
    },
  },
  navbarNav: {
    width: '100%',
    padding: 0,
    '@media (max-width: 991px)': {
      height: '100%',
      '& + .navbar-nav .nav-item': {
        borderTop: '1px solid #E6E9F2',
      },
    },
    '& button.nav-link': {
      color: '#06c',
      background: 'none',
      border: 'none',
      padding: '0.722rem 1.333rem',
      '&:hover': {
        textDecoration: 'underline',
      },
      '&.active': {
        backgroundColor: 'rgba(0,102,204,0.06)',
        borderLeft: '4px solid #0073E6',
      },
    },
    '& .modal-button': {
      '&:focus': {
        outline: '2px solid #ff9900',
        boxShadow: 'none',
      },
    },
    '& .nav-item.r-nav': {
      marginLeft: 'auto',
    },
  },
  linkListWrapperCustom: {
    '& ul li:not(:first-child)': {
      '@media (min-width: 992px)': {
        borderLeft: '1px solid rgba(0,89,179,.2)',
      },
    },
  },
  noShadow: {
    composes: 'shadow-none',
    top: '27%',
  },
  menuWrapper: {
    composes: 'menu-wrapper',
    '@media (max-width: 991px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  },
  updatesBtn: {
    marginLeft: 'auto',
    '@media (max-width: 991px)': {
      marginLeft: '0',
      marginTop: 'auto',
      borderTop: '1px solid #E6E9F2',
    },
    '& button': {
      height: '100%',
      boxShadow: 'none !important',
    },
    '& button:active': {
      background: 'none !important',
      color: '#06c !important',
      boxShadow: 'none !important',
    },
    '& button:focus': {
      boxShadow: '0 0 0 2px #f90;',
      borderRadius: '0',
    },
  },
  headerToggler: {
    fontWeight: '600',
    color: '#0066CC',
    fontSize: '0.875rem',
    border: '0',
    padding: '0',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      paddingRight: '5px',
    },
    '&:focus, &:hover': {
      color: '#0066CC',
      backgroundColor: 'transparent',
      outline: '2px solid #ff9900',
      borderRadius: '0',
    },
    '@media (min-width: 992px)': {
      display: 'none',
    },
    '@media (min-width: 359px) and (max-width: 360px)': {
      whiteSpace: 'nowrap',
    },
    '& button svg': {
      transition: '.3s',
    },
    '& button[aria-expanded="true"] svg': {
      transform: 'rotateZ(180deg)',
    },
  },
  headerLink: {
    composes: 'font-weight-semibold',
    cursor: 'pointer',
  },
  mainHeader: {
    boxShadow: '0 20px 30px 5px rgb(0 0 0 / 5%)',
    '& .it-header-slim-wrapper-content': {
      padding: '0',
    },
    '& .it-header-center-content-wrapper': {
      padding: '0',
    },
    '& .navbar .navbar-collapsable .menu-wrapper .navbar-nav': {
      '@media (max-width:991px)': {
        overflowY: 'auto',
      },
    },
    '& .it-header-wrapper .it-nav-wrapper .it-header-navbar-wrapper': {
      top: '27%',
    },
    '& .it-header-slim-wrapper': {
      '@media (max-width: 991px)': {
        padding: '10px 0',
      },
    },
    '& .it-header-slim-wrapper .it-header-slim-wrapper-content': {
      '@media (max-width: 991px)': {
        alignItems: 'flex-start',
      },
    },
  },
  login: {
    marginLeft: '1.38rem',
    backgroundColor: '#0066CC',
    display: 'flex',
    alignItems: 'center',
    padding: '0 1.38rem',
    height: '100%',
    '@media (max-width: 992px)': {
      backgroundColor: 'transparent',
      padding: '0',
    },
    '@media (min-width: 359px) and (max-width: 360px)': {
      marginLeft: 'auto',
    },
    '&:hover': {
      '& span': {
        textDecoration: 'underline',
      },
    },
    '& img': {
      marginRight: '0.555rem',
      '&.mobile': {
        display: 'none',
        marginTop: '5px',
        height: '24px',
      },
      '@media (max-width: 992px)': {
        display: 'none',
        margin: '0',
        '&.mobile': {
          display: 'block',
        },
      },
    },
    '& span': {
      fontSize: '1rem',
      fontWeight: 'bold',
      lineHeight: '1.3',
      color: '#fff',
      '@media (max-width: 992px)': {
        display: 'none',
      },
    },
  },
  headerLabel: {
    composes: 'd-inline-flex flex-column font-weight-bold mt-15 d-lg-none',
    marginTop: '15px',
    '& .title-link': {
      color: '#06c',
      fontSize: '1.22222rem',
      lineHeight: '1.25',
    },
    '& .subtitle-link': {
      color: '#06c',
      fontSize: '1.11111rem',
      fontWeight: '400',
    },
  },
  closeMenuBtn: {
    border: '0',
    padding: '0',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '999',
    '@media (min-width: 992px)': {
      display: 'none',
    },
    '&:focus': {
      borderColor: '#f90',
      boxShadow: '0 0 0 2px #f90',
    },
    '&:active': {
      backgroundColor: 'transparent',
    },
  },
});

const SlimHeader = () => {
  const classes = useStyle();
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <HeaderReactKit type="slim" theme="light">
      <HeaderContent className="px-2">
        <HeaderBrand
          href="https://innovazione.gov.it/"
          target="_blank"
          className={classes.headerLink}
          rel="noreferrer"
        >
          <span className="sr-only">
            collegamento esterno apre su nuova scheda
          </span>
          {externalLinks.dipartimento.label}
        </HeaderBrand>
        <HeaderLinkZone aria-label="Siti esterni correlati">
          <div className={classes.headerToggler}>
            <a
              href="https://innovazione.gov.it/"
              target="_blank"
              className={classes.headerLink}
              rel="noreferrer"
            >
              <span className="sr-only">
                Collegamento esterno - Apre su nuova scheda
              </span>
              {externalLinks.dipartimento.label}
            </a>
            <Button
              className={classes.headerToggler}
              onClick={toggle}
              aria-expanded={collapse}
              aria-label="Apre lista link esterni"
            >
              <Icon icon="it-expand" />
            </Button>
          </div>
          <Collapse isOpen={collapse}>
            <div className={classes.linkListWrapperCustom}>
              <LinkList className={classes.topListLink}>
                <LinkListItem
                  href={externalLinks.italiaDigitale.linkTo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">
                    Collegamento esterno - Apre su nuova scheda
                  </span>
                  {externalLinks.italiaDigitale.label}
                </LinkListItem>
                <LinkListItem
                  href={externalLinks.pnrr.linkTo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">
                    Collegamento esterno - Apre su nuova scheda
                  </span>
                  {externalLinks.pnrr.label}
                </LinkListItem>
              </LinkList>
            </div>
          </Collapse>
        </HeaderLinkZone>
        <ExternalLink
          linkTo={externalLinks.eu.linkTo}
          ariaLabel={externalLinks.eu.ariaLabel}
          href={externalLinks.italiaDigitale.linkTo}
          target="_blank"
        >
          <img
            className="d-none d-lg-block"
            src="/assets/eu-flag.svg"
            alt={externalLinks.eu.label}
          ></img>
        </ExternalLink>
        <Link className={classes.login} to={externalLinks.accedi.linkTo}>
          <img src="/assets/user-icon.svg" alt="icona area profilo"></img>
          <img
            className="mobile"
            src="/assets/user-icon-dark.svg"
            alt="icona area profilo"
          ></img>
          <span>{externalLinks.accedi.label}</span>
          <span className="sr-only">Accedi all'area privata</span>
        </Link>
      </HeaderContent>
    </HeaderReactKit>
  );
};

const CenterHeader = () => {
  const classes = useStyle();
  return (
    <HeaderReactKit
      type="center"
      theme="light"
      className={classes.headerCenterWrapper}
    >
      <HeaderContent className={`${classes.headerCenter} px-2`}>
        <div className="it-brand-wrapper pl-5 pl-sm-0">
          <Link to="/">
            <div className="it-brand-text pr-0">
              <div className="d-md-flex align-items-center">
                <img
                  className="icon repubblica-logo"
                  src="/assets/repubblica-logo-blue.svg"
                  alt="logo repubblica italiana"
                />
                <img
                  className="icon site-logo"
                  src="/assets/site-logo.svg"
                  alt="logo PA digitale"
                />
                <div className="d-none d-lg-inline-block">
                  <div className="h3 mb-0">{headerTitle}</div>
                  <div className={classes.subtitle}>{headerSubtitle}</div>
                  <span className="sr-only">Vai alla home</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className={classes.headerLabel} aria-label="PA digitale 2026">
          <span className="title-link">PA digitale 2026</span>
          <span className="subtitle-link">
            Le risorse per una PA protagonista della transizione digitale
          </span>
        </div>
      </HeaderContent>
    </HeaderReactKit>
  );
};

const NavHeader = () => {
  const [{ activeItem }] = useContext(GlobalStateContext);
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const toogleMenu = () => setIsOpen(!isOpen);
  const classes = useStyle();

  useEffect(() => {
    const isMobile = window.innerWidth < 992;
    const body = document.querySelector('body');
    if (isOpen === true && isMobile) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  return (
    <HeaderReactKit type="navbar" theme="light" className={classes.noShadow}>
      <HeaderContent
        expand="lg"
        megamenu
        /* aria-label={ariaLabel.menu} */
        aria-label="menu-principale"
        className="px-2"
        id="menu-principale-anchor"
        tabIndex="-1"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={ariaLabel.toggleMenu}
          aria-expanded={isOpen}
          type="button"
          className="custom-navbar-toggler navbar-toggler"
        >
          <Icon icon="it-burger" />
        </button>

        <HeaderNav isOpen={isOpen} onCloseMenu={toogleMenu}>
          <div className={classes.menuWrapper}>
            <button
              type="button"
              className={classes.closeMenuBtn}
              aria-label="Chiudi il menu"
              onClick={toogleMenu}
            >
              <Icon color="primary" icon="it-close" padding size="xl" />
            </button>
            <Nav navbar className={classes.navbarNav}>
              <li className={classes.offCanvasWrapper}>
                <a href="/" className={classes.offCanvasTitle}>
                  <img
                    className="icon"
                    src="/assets/site-logo.svg"
                    alt="logo PA digitale"
                  />
                  {headerTitle}
                  <span className="sr-only">vai alla home page</span>
                </a>
              </li>
              <NavItem active>
                <Link
                  to={internalLinks.initiative.linkTo}
                  className={
                    activeItem === 'iniziativa' ? 'nav-link active' : 'nav-link'
                  }
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.initiative.label}
                  </span>
                </Link>
              </NavItem>
              <NavItem active>
                <Link
                  to={internalLinks.opportunity.linkTo}
                  className={
                    activeItem === 'misure' ? 'nav-link active' : 'nav-link'
                  }
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.opportunity.label}
                  </span>
                </Link>
              </NavItem>
              <NavItem active>
                <Link
                  to="https://areariservata.padigitale2026.gov.it/Pa_digitale2026_avvisi"
                  className="nav-link"
                >
                  <span className="font-weight-semibold">Avvisi</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.howToPartecipate.linkTo}
                  className={
                    activeItem === 'come-partecipare'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.howToPartecipate.label}
                  </span>
                </Link>
              </NavItem>
              <NavItem
                className={`${classes.updatesBtn} activeactiveItem === 'opendata' ? 'nav-link active' : 'nav-link`}
              >
                <Link
                  to={internalLinks.opendata.linkTo}
                  className={
                    activeItem === 'opendata' ? 'nav-link active' : 'nav-link'
                  }
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.opendata.label}
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.support.linkTo}
                  className={
                    activeItem === 'supporto' ? 'nav-link active' : 'nav-link'
                  }
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.support.label}
                  </span>
                </Link>
              </NavItem>
            </Nav>
          </div>
        </HeaderNav>
      </HeaderContent>
    </HeaderReactKit>
  );
};

export const Header = (props) => {
  const classes = useStyle();

  return (
    <header id="mainTop" className={classes.mainHeader}>
      <Headers>
        <SlimHeader />
        <div className="it-nav-wrapper">
          <CenterHeader />
          <NavHeader toggleModal={props.toggleModal} />
        </div>
      </Headers>
    </header>
  );
};

Header.propTypes = {
  toggleModal: PropTypes.func,
};
