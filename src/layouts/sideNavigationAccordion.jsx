/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Sidebar, LinkListItem, LinkList, Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = createUseStyles({
  wrapper: {
    composes: 'sidenav',
    position: 'sticky',
    background: '#fff',
    zIndex: '999',
    top: '0',
    height: '100%',
    width: '100%',
    '@media (min-width: 992px)': {
      maxWidth: '270px',
    },
    '& .sidebar-linklist-wrapper': {
      '& .link-list-wrapper': {
        '& ul': {
          display: 'block',
          marginRight: '0',
          marginLeft: '0',
          paddingBottom: '0',
          '& li': {
            '& + li': {
              '@media (min-width: 992px)': {
                marginLeft: '0',
              },
            },
            '&:last-child': {
              marginRight: '0.833rem',
              '@media (min-width: 992px)': {
                marginRight: '0',
              },
            },
            '&:first-child': {
              '@media (min-width: 992px)': {
                marginLeft: '0',
              },
            },
            '& a.list-item': {
              paddingLeft: '0',
              '& span': {
                marginRight: '0',
                color: '#06c',
                textDecoration: 'none',
                fontWeight: '400',
                fontSize: '0.833rem',
              },
              '&.disabled': {
                pointerEvents: 'none',
                '& span': {
                  color: '#DAE3EC',
                },
              },
              '&.active': {
                backgroundColor: 'transparent',
                '& span': {
                  fontWeight: '700',
                },
              },
            },
          },
        },
      },
    },
    '& .scroll-indicator': {
      height: '4px',
      width: '100%',
      background: '#F0F6FC',
      position: 'absolute',
      left: '0',
      bottom: '0',
    },
    '& .scroll-indicator-active': {
      background: '#06C',
      height: '100%',
    },
    '& .collapse-div': {
      borderBottom: '0',
      background: '#fff',
      '@media (max-width: 991px)': {
        border: 'none',
      },
    },
    '& .collapse-body': {
      padding: '0',
    },
    '& .collapse-header button': {
      padding: '0',
      height: '60px',
      position: 'relative',
      borderTop: '0',
      '&::before': {
        marginRight: '1.944rem',
      },
      '& .title': {
        padding: '0.889rem 2rem 0.889rem 0',
        fontSize: '0.778rem',
        color: '#5A768A',
      },
    },
  },
});

export const SideNavigationAccordion = (props) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState();
  const [collapseOpen, setCollapseOpen] = useState(true);
  const itemSel = '.sidebar-wrapper .link-list .list-item';
  const { activeList, searchValue, list } = props;
  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    });
  }, []);

  useEffect(() => {
    disableLinks();
    if (isMobile) {
      const items = document.querySelectorAll(itemSel);
      items[0].classList.add('active');
      setCollapseOpen(false);
    } else {
      if (!isMobile) {
        removeActive();
        setActiveLinkOnChanges(list);
        removeDisabled();
        setCollapseOpen(true);
      }
    }
  }, [isMobile]);

  useEffect(() => disableLinks(), [searchValue]);

  useEffect(() => {
    const sidenav = document.querySelector('.sidenav');
    if (sidenav) {
      const scrollHandler = () => {
        const contentYpositionTop = sidenav.getBoundingClientRect().top;
        const sidenavAbsPos = contentYpositionTop + window.scrollY;
        const winScroll = contentYpositionTop === 0 ? sidenavAbsPos : 0;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const activeBar = document.querySelector('.scroll-indicator .scroll-indicator-active');
        if (activeBar) {
          activeBar.style.width = scrolled + '%';
        }
      };

      window.addEventListener('scroll', scrollHandler);
    }
  }, []);

  function disableLinks() {
    if (searchValue && searchValue.length >= 3) {
      const activeItems = list.filter((el) => activeList.some((f) => f.sectionId === el.sectionId));

      const disabledItems = list.filter((ad) => activeList.every((fd) => fd.sectionId !== ad.sectionId));

      if (!isMobile) {
        removeActive();
        setActiveLinkOnChanges(activeItems);
      }

      removeDisabled();
      disabledItems.forEach((item) => {
        const sideLink = document.querySelector('[data-id="' + item.sectionId + '"]');
        sideLink.classList.add('disabled');
      });
    } else {
      if (!isMobile) {
        removeActive();
        setActiveLinkOnChanges(list);
      }
      removeDisabled();
    }
  }

  function setActiveLinkOnChanges(list) {
    if (!list.length) {
      return;
    }
    const activeItem = document.querySelector('[data-id="' + list[0].sectionId + '"]');
    activeItem.classList.add('active');
  }

  function handleClik(evt) {
    evt.preventDefault();
    removeActive();
    const linkTag = evt.target.closest('a');
    linkTag.classList.add('active');

    if (isMobile) {
      setCollapseOpen(false);
    }

    const section = document.querySelector(linkTag.getAttribute('href'));
    const sectionY = section.getBoundingClientRect().top + window.pageYOffset;
    if (isMobile) {
      window.scrollTo({
        top: sectionY - 320,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: sectionY - 60,
        behavior: 'smooth',
      });
    }
  }

  function removeActive() {
    const items = document.querySelectorAll(itemSel);

    items.forEach((item) => {
      item.classList.remove('active');
    });
  }

  function removeDisabled() {
    const items = document.querySelectorAll(itemSel);

    items.forEach((item) => {
      item.classList.remove('disabled');
    });
  }

  return (
    <Sidebar className={`${classes.wrapper} p-0`}>
      <nav aria-labelledby="table-of-contents">
        <Accordion>
          <AccordionHeader active={collapseOpen} onToggle={() => setCollapseOpen(!collapseOpen)}>
            <h2 id="table-of-contents" className="sr-only">
              Indice dei contenuti
            </h2>
            <span className="title">INDICE DELLA PAGINA</span>
            <div className="scroll-indicator">
              <div className="scroll-indicator-active"></div>
            </div>
          </AccordionHeader>
          <AccordionBody active={collapseOpen}>
            <LinkList>
              {list.map((anchor) => (
                <React.Fragment key={anchor.sectionId}>
                  {anchor.sectionActive ? (
                    <LinkListItem
                      key={anchor.sectionId}
                      size="medium"
                      href={`#` + anchor.sectionId}
                      data-id={anchor.sectionId}
                      className="text-decoration-none"
                      onClick={(evt) => handleClik(evt)}
                      active={!isMobile}
                    >
                      <span>{anchor.sectionTitle}</span>
                    </LinkListItem>
                  ) : (
                    <LinkListItem
                      key={anchor.sectionId}
                      size="medium"
                      href={`#` + anchor.sectionId}
                      data-id={anchor.sectionId}
                      className="text-decoration-none"
                      onClick={(evt) => handleClik(evt)}
                    >
                      <span>{anchor.sectionTitle}</span>
                    </LinkListItem>
                  )}
                </React.Fragment>
              ))}
            </LinkList>
          </AccordionBody>
        </Accordion>
      </nav>
    </Sidebar>
  );
};

SideNavigationAccordion.propTypes = {
  activeList: PropTypes.array,
  searchValue: PropTypes.string,
  list: PropTypes.array,
};
