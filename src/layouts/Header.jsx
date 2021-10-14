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

const BrandSlimHeader = () => (
  <>
    <ExternalLink linkTo={externalLinks.dipartimento.linkTo} ariaLabel={externalLinks.dipartimento.ariaLabel}>
      <span className="d-inline d-lg-none d-xl-inline">{externalLinks.dipartimento.label}</span>
      <span className="d-none d-lg-inline d-xl-none">DTD</span>
    </ExternalLink>
  </>
);

const SlimHeader = () => {
  const [isOpen, toggleDropdown] = useState(false);
  const classes = useStyle();
  return (
    <HeaderReactKit type="slim" theme="dark">
      <HeaderContent>
        <HeaderBrand tag="div">
          <span className="text-primary font-weight-semibold small">
            <BrandSlimHeader />
          </span>
        </HeaderBrand>
        <HeaderLinkZone aria-label={ariaLabel.slimMenu}>
          <div className={classes.navToggler}></div>
          <Collapse isOpen={isOpen} header>
            <div className="link-list-wrapper"></div>
          </Collapse>
        </HeaderLinkZone>
      </HeaderContent>
    </HeaderReactKit>
  );
};

const CenterHeader = () => {
  const classes = useStyle();
  return (
    <HeaderReactKit type="center" theme="dark">
      <HeaderContent>
        <div className="it-brand-wrapper">
          <Link to="/">
            <div className="it-brand-text pr-0">
              <div className="d-flex align-items-center">
                <img className="icon" src="/assets/repubblica-logo.svg" alt="Logo Repubblica Italiana" />
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
    <HeaderReactKit type="navbar" theme="dark">
      <HeaderContent expand="lg" megamenu aria-label={ariaLabel.menu} className="px-2">
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
                  <span className="font-weight-semibold">{internalLinks.strategy.label}</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.enablement.homeLinkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.enablement.label}</span>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to={internalLinks.services.linkTo}
                  className="nav-link"
                  activeClassName="active"
                  onClick={closeMenu}
                >
                  <span className="font-weight-semibold">{internalLinks.services.label}</span>
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
