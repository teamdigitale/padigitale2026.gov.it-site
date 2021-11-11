import { Link } from 'gatsby';
import React, { useState } from 'react';
import {
  Collapse,
  Header as HeaderReactKit,
  Headers,
  Button,
  HeaderContent,
  Icon,
  Nav,
  NavItem,
  HeaderToggler,
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
    composes: 'border-0 p-0 mr-0',
  },
  headerCenterWrapper: {
    height: 'auto',
    padding: [16, 0],
    '& .it-header-center-content-wrapper .it-brand-wrapper a .icon': {
      '&.site-logo': {
        width: '3rem',
        height: '3rem'
      },
      '&.repubblica-logo': {
        width: '3.556rem',
        height: '4rem'
      }
    }
  },
  offCanvasWrapper: {
    padding: [13, 24],
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: '24px',
      bottom: '0',
      width: '65px',
      height: '1px',
      backgroundColor: '#0066CC',
    },
    '@media (min-width: 992px)': {
      display: 'none',
    },
  },
  offCanvasTitle: {
    marginLeft: 8,
    textDecoration: 'none',
    fontWeight: '700',
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
    top: '30%',
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
      boxShadow: 'none',
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
    '&:focus, &:hover': {
      color: '#0066CC',
      backgroundColor: 'transparent',
      outline: '2px solid #ff9900',
      borderRadius: '0',
    },
    '@media (min-width: 992px)': {
      display: 'none',
    },
  },
  headerLink: {
    composes: 'font-weight-bold',
    cursor: 'pointer',
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
      <HeaderContent>
        <HeaderBrand href="https://innovazione.gov.it/" target="_blank" className={classes.headerLink} rel="noreferrer">
          {externalLinks.dipartimento.label}
        </HeaderBrand>
        <HeaderLinkZone aria-label="Siti esterni correlati">
          <Button
            className={classes.headerToggler}
            onClick={toggle}
            aria-expanded={collapse}
          >
            <span className="font-weight-bold">
              {externalLinks.dipartimento.label}
            </span>
            <Icon icon="it-expand" />
          </Button>
          <Collapse isOpen={collapse}>
            <div className={classes.linkListWrapperCustom}>
              <LinkList className={classes.topListLink}>
                <LinkListItem
                  href={externalLinks.italiaDigitale.linkTo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="VAI AL SITO Italia digitale 2026 (Collegamento esterno - Apre su nuova scheda)"
                >
                  {externalLinks.italiaDigitale.label}
                </LinkListItem>
                <LinkListItem href={externalLinks.pnrr.linkTo} target="_blank" rel="noreferrer">
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
            alt=""
          ></img>
        </ExternalLink>
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
      <HeaderContent>
        <div className="it-brand-wrapper pl-5 pl-sm-0">
          <Link to="/">
            <div className="it-brand-text pr-0">
              <div className="d-md-flex align-items-center">
                <img
                  className="icon repubblica-logo"
                  src="/assets/repubblica-logo-blue.svg"
                  alt="Logo Repubblica Italiana"
                />
                <img
                  className="icon site-logo"
                  src="/assets/site-logo.svg"
                  alt="Logo PA digitale 2026"
                />
                <div className="d-none d-lg-inline-block">
                  <h1 className="h3 mb-0">{headerTitle}</h1>
                  <div className={classes.subtitle}>{headerSubtitle}</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </HeaderContent>
    </HeaderReactKit>
  );
};

const NavHeader = ({ toggleModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const toogleMenu = () => setIsOpen(!isOpen);
  const classes = useStyle();
  return (
    <HeaderReactKit type="navbar" theme="light" className={classes.noShadow}>
      <HeaderContent
        expand="lg"
        megamenu
        /* aria-label={ariaLabel.menu} */
        aria-labelledby="menu-principale"
        className="px-2"
      >
        <h2 id="menu-principale" className="sr-only">
          Menu principale
        </h2>
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
            <Nav navbar className={classes.navbarNav}>
              <li className={classes.offCanvasWrapper}>
                <a href="/" tabIndex="-1">
                  <img
                    className="icon"
                    src="/assets/site-logo.svg"
                    alt="Logo"
                  />
                </a>
                <a href="/" className={classes.offCanvasTitle}>
                  {headerTitle}
                </a>
              </li>
              <NavItem active>
                <Link
                  to={internalLinks.opportunity.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.opportunity.label}
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.howitworks.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.howitworks.label}
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.support.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.support.label}
                  </span>
                </Link>
              </NavItem>
              <NavItem active className={classes.updatesBtn}>
                <Button
                  className="nav-link"
                  activeClassName="active"
                  onClick={() => {
                    closeMenu();
                    toggleModal();
                  }}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.updates.label}
                  </span>
                </Button>
              </NavItem>
            </Nav>
          </div>
        </HeaderNav>
      </HeaderContent>
    </HeaderReactKit>
  );
};

export const Header = (props) => (
  <header id="mainTop">
    <Headers>
      <SlimHeader />
      <div className="it-nav-wrapper">
        <CenterHeader />
        <NavHeader showKit={props.showKit} toggleModal={props.toggleModal} />
      </div>
    </Headers>
  </header>
);
