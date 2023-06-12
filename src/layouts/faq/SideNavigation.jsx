/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Sidebar, LinkListItem, LinkList, Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { useState } from 'react';
import { useEffect } from 'react';

const useStyles = createUseStyles({
  wrapper: {
    '@media (min-width: 992px)': {
      borderRight: '1px solid #d9dadb',
      position: 'sticky',
      top: '0.833rem',
    },
    '& .collapse-div': {
      border: 'none',
      '& button': {
        border: 'none',
      },
    },
    '& .sidebar-linklist-wrapper': {
      '& .link-list-wrapper': {
        '& ul': {
          '@media (min-width: 992px)': {
            display: 'block',
            marginRight: '0',
            marginLeft: '0',
            paddingBottom: '0',
          },
          '& li': {
            '& + li': {
              '@media (min-width: 992px)': {
                marginLeft: '0',
              },
            },
            '&:last-child': {
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
              '& span': {
                marginRight: '0',
                color: '#06c',
                textDecoration: 'none',
                fontWeight: '600',
                lineHeight: '1.3em',
              },
              '&.disabled': {
                pointerEvents: 'none',
                '& span': {
                  color: '#DAE3EC',
                },
              },
              '&.active': {
                '@media (min-width: 992px)': {
                  borderRight: '2px solid #0066CC',
                  backgroundColor: 'transparent',
                },
                '& span': {
                  '@media (min-width: 992px)': {
                    color: '#33485C',
                  },
                },
              },
            },
          },
        },
      },
    },
    '& .collapse-header [data-toggle=collapse][aria-expanded=false].disabled': {
      color: '#DAE3EC',
    },
  },
  accordionHeader: {
    '@media (min-width: 992px)': {
      display: 'none',
    },
    '@media (max-width: 991px)': {
      background: '#F0F6FC',
      '&[data-toggle=collapse][aria-expanded=false]': {
        color: '#5A768A',
        padding: '14px 6px',
        lineHeight: '1.3em',
        fontSize: '0.778rem',
      },
      '&[data-toggle=collapse][aria-expanded=true]': {
        color: '#5A768A',
        padding: '14px 6px',
        lineHeight: '1.3em',
        fontSize: '0.778rem',
      },
    },
    '& .scroll-indicator': {
      width: '100%',
      background: '#F0F6FC',
      height: '4px',
      marginTop: '20px',
      '@media (min-width: 992px)': {
        display: 'none',
      },
    },
    '& .scroll-active': {
      background: '#06c',
      height: '100%',
    },
  },
  accordionBody: {
    '@media (max-width: 991px)': {
      background: '#F0F6FC',
    },
    '& .collapse-body': {
      padding: '0',
      '& .collapse-header button[aria-expanded=true]:before': {
        height: '1.5rem',
        width: '1.5rem',
      },

      '& .collapse-body': {
        padding: '1.111rem 1.111rem 2.222rem',
      },
    },
  },
});

export const SideNavigation = (props) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState();
  const itemSel = '.sidebar-wrapper .link-list .list-item';
  const { activeList, searchValue, list } = props;
  const [indexIsOpen, setIndexIsOpen] = useState(-1);
  const [collapseMenu, setCollapseMenu] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    });
  }, []);

  useEffect(() => {
    const scrollHandler = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const indicator = document.querySelector('.scroll-active');
      indicator.style.width = `${scrolled}%`;
    };
    if (isMobile) {
      window.addEventListener('scroll', scrollHandler);
    }
  }, [isMobile]);

  useEffect(() => {
    setTimeout(() => {
      // "Trivial" Trick for diable all link after page load RT
      disableLinks();
    }, 600);

    if (isMobile) {
      setCollapseMenu(false);
      const items = document.querySelectorAll(itemSel);
      items[0].classList.add('active');
    } else {
      if (!isMobile) {
        setCollapseMenu(true);
        removeActive();
        setActiveLinkOnChanges(list);
        removeDisabled();
      }
    }
  }, [isMobile]);

  useEffect(() => disableLinks(), [searchValue]);

  function disableLinks() {
    if (searchValue && searchValue.length >= 3) {
      const subActiveArr = [];
      let topActiveArr = [];
      const subDisabledArr = [];
      const topDisabledArr = [];

      const activeItems = list.filter((el) => {
        if (el.sublist) {
          const sublistFiltered = el.sublist.filter((subEl) => activeList.some((f) => f.sectionId === subEl.sectionId));
          subActiveArr.push(sublistFiltered);
          if (el.sublist.length > 0 && sublistFiltered.length > 0) {
            topActiveArr.push(el);
          }
        } else {
          return activeList.some((f) => f.sectionId === el.sectionId);
        }
      });

      if (subActiveArr.length > 0) {
        subActiveArr.forEach((subActive) => {
          subActive.forEach((el) => activeItems.push(el));
        });
      }

      const disabledItems = list.filter((ad) => {
        if (ad.sublist) {
          const sublistFiltered = ad.sublist.filter((subEl) =>
            activeList.every((fd) => fd.sectionId !== subEl.sectionId)
          );
          subDisabledArr.push(sublistFiltered);
          if (ad.sublist.length === sublistFiltered.length) {
            topDisabledArr.push(ad);
          }
        } else {
          return activeList.every((fd) => fd.sectionId !== ad.sectionId);
        }
      });

      if (subDisabledArr.length > 0) {
        subDisabledArr.forEach((subDisabled) => {
          subDisabled.forEach((el) => disabledItems.push(el));
        });
      }

      if (topDisabledArr.length > 0) {
        topDisabledArr.forEach((topDisabled) => {
          disabledItems.push(topDisabled);
        });
      }

      topActiveArr = [...new Set(topActiveArr)];
      if (topActiveArr.length > 0) {
        topActiveArr.forEach((topActive) => {
          activeItems.push(topActive);
        });
      }

      if (!isMobile) {
        removeActive();
        setActiveLinkOnChanges(activeItems);
      }

      removeDisabled();
      disabledItems.forEach((item) => {
        const sideLink = document.querySelector('[data-id="' + item.sectionId + '"]');
        if (sideLink) {
          sideLink.classList.add('disabled');
        }
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
    list.forEach((item) => {
      if (item.sublist) {
        const activeItem = document.querySelector('[data-id="' + item.sectionId + '"]');
        activeItem.classList.remove('disabled');
      }
    });
  }

  function handleClik(evt) {
    evt.preventDefault();
    const linkTag = evt.target.closest('a');
    setTimeout(() => {
      removeActive();
      linkTag.classList.add('active');
    }, 1000);

    if (!isMobile) {
      document.querySelector(linkTag.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    }
    if (isMobile) {
      const position = document.querySelector(linkTag.getAttribute('href')).getBoundingClientRect();
      window.scrollTo({ left: position.left, top: position.top + window.scrollY - 420, behavior: 'smooth' });
      setCollapseMenu(false);
      props.getFilter(linkTag.getAttribute('data-id'));
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
          <AccordionHeader
            className={classes.accordionHeader}
            active={collapseMenu}
            onToggle={() => setCollapseMenu(!collapseMenu)}
          >
            INDICE DELLA PAGINA
            <div className="scroll-indicator">
              <div className="scroll-active"></div>
            </div>
          </AccordionHeader>
          <AccordionBody className={classes.accordionBody} active={collapseMenu}>
            <LinkList id="table-of-contents">
              {isMobile && (
                <LinkListItem
                  size="medium"
                  className="text-decoration-none"
                  data-id="all"
                  onClick={(evt) => handleClik(evt)}
                  active={isMobile}
                >
                  <span>Tutte</span>
                </LinkListItem>
              )}

              {list.map((anchor, i) => (
                <React.Fragment key={anchor.sectionId}>
                  {anchor.accordion ? (
                    <Accordion>
                      <AccordionHeader
                        onToggle={() => setIndexIsOpen((state) => (state === i ? -1 : i))}
                        active={i === indexIsOpen}
                        className={classes.accordionTitle}
                        data-id={anchor.sectionId}
                      >
                        {anchor.sectionTitle}
                      </AccordionHeader>
                      <AccordionBody active={i === indexIsOpen} className={classes.accordionBody}>
                        <ul>
                          {anchor.sublist.map((listItem) => (
                            <LinkListItem
                              key={listItem.sectionId}
                              size="medium"
                              href={`#` + listItem.sectionId}
                              data-id={listItem.sectionId}
                              className="text-decoration-none"
                              onClick={(evt) => handleClik(evt)}
                              active={!isMobile}
                            >
                              <span>{listItem.sectionTitle}</span>
                            </LinkListItem>
                          ))}
                        </ul>
                      </AccordionBody>
                    </Accordion>
                  ) : (
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

SideNavigation.propTypes = {
  activeList: PropTypes.array,
  searchValue: PropTypes.string,
  getFilter: PropTypes.func,
  list: PropTypes.array,
};
