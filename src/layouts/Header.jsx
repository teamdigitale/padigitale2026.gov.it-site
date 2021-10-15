import { Link } from 'gatsby';
import React, { useState } from 'react';
import {
  Collapse,
  Header as HeaderReactKit,
  Headers,
  HeaderContent,
  Icon,
  Nav,
  NavItem,
  HeaderBrand,
  HeaderLinkZone,
} from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import links from '../../contents/links.yml';
import labels from '../../contents/labels.yml';
import content from '../../contents/home-page/home.yml';
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
      color: '#0059b3'
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
});

const BrandSlimHeader = () => {
  const classes = useStyle();
  return (
    <ExternalLink
      linkTo={externalLinks.dipartimento.linkTo}
      ariaLabel={externalLinks.dipartimento.ariaLabel}
    >
      <div class="it-header-slim-wrapper-content">
        <span className="d-inline d-lg-none d-xl-inline">
          {externalLinks.dipartimento.label}
        </span>
        <span className="d-none d-lg-inline d-xl-none">DTD</span>
      </div>
    </ExternalLink>
  );
};

const SlimHeader = () => {
  const [isOpen, toggleDropdown] = useState(false);
  const classes = useStyle();
  return (
    <HeaderReactKit type="slim" theme="light">
      <HeaderContent>
        <HeaderBrand tag="div">
          <span className="text-primary font-weight-semibold small">
            <BrandSlimHeader />
          </span>
        </HeaderBrand>
        <div className={classes.navMobile}>
          <nav>
            <div class={classes.navListWrapper} id="menu1">
              <ul className={classes.navList}>
                <li>
                  <ExternalLink
                    className="list-item"
                    linkTo={externalLinks.italiaDigitale.linkTo}
                    ariaLabel={externalLinks.italiaDigitale.ariaLabel}
                  ></ExternalLink>
                  {externalLinks.italiaDigitale.label}
                </li>
                <li>
                  <ExternalLink
                    className="list-item"
                    linkTo={externalLinks.pnrr.linkTo}
                    ariaLabel={externalLinks.pnrr.ariaLabel}
                  ></ExternalLink>
                  {externalLinks.pnrr.label}
                </li>
              </ul>
            </div>
          </nav>
          <div class="d-flex align-items-center">
            <img
              className="icon"
              src="/assets/eu-flag.svg"
              alt="bandiera europa"
            />
          </div>
        </div>
      </HeaderContent>
    </HeaderReactKit>
  );
};

const CenterHeader = () => {
  const classes = useStyle();
  return (
    <HeaderReactKit type="center" theme="light">
      <HeaderContent>
        <div className="it-brand-wrapper">
          <Link to="/">
            <div className="it-brand-text pr-0">
              <div className="d-flex align-items-center">
                <img
                  className="icon"
                  src="/assets/repubblica-logo-blue.svg"
                  alt="Logo Repubblica Italiana"
                />
                <img
                  className="icon"
                  src="/assets/logo-v.svg"
                  alt="Logo Repubblica Italiana"
                />
                <div>
                  <div className="h3 mb-0">{headerTitle}</div>
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

const NavHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const toogleMenu = () => setIsOpen(!isOpen);
  return (
    <HeaderReactKit type="navbar" theme="light">
      <HeaderContent
        expand="lg"
        megamenu
        aria-label={ariaLabel.menu}
        className="px-2"
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
          <div className="menu-wrapper">
            <Nav navbar>
              <NavItem>
                <Link
                  to={internalLinks.strategy.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.strategy.label}
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.enablement.homeLinkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.enablement.label}
                  </span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.services.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.services.label}
                  </span>
                </Link>
              </NavItem>
            </Nav>
            {/* <Nav navbar>
              <NavItem>
                <Link
                  to={internalLinks.catalogue.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">
                    {internalLinks.catalogue.label}
                  </span>
                </Link>
              </NavItem>
            </Nav> */}
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
        <NavHeader showKit={props.showKit} />
      </div>
    </Headers>
  </header>
);
