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
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          marginRight: '-0.833rem',
          marginLeft: '-0.833rem',
          paddingBottom: '0.833rem',
          '@media (min-width: 992px)': {
            display: 'block',
            marginRight: '0',
            marginLeft: '0',
            paddingBottom: '0',
          },
          '& li': {
            '& + li': {
              marginLeft: '0.555rem',
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
              marginLeft: '0.833rem',
              '@media (min-width: 992px)': {
                marginLeft: '0',
              },
            },
            '& a.list-item': {
              '@media (max-width: 991px)': {
                display: 'flex',
                justifyContent: 'center',
                padding: '0.111rem 0.555rem',
                borderRadius: '0.888rem',
                whiteSpace: 'nowrap',
                border: '1px solid #06c',
                '&.disabled': {
                  color: '#DAE3EC',
                  border: '1px solid #DAE3EC',
                },
              },
              '& span': {
                marginRight: '0',
                color: '#06c',
                textDecoration: 'none',
                fontWeight: '600',
              },
              '&.disabled': {
                pointerEvents: 'none',
                '& span': {
                  color: '#DAE3EC',
                },
              },
              '&.active': {
                backgroundColor: '#0066CC',
                '@media (min-width: 992px)': {
                  borderRight: '2px solid #0066CC',
                  backgroundColor: 'transparent',
                },
                '& span': {
                  color: '#fff',
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
  },
});

export const SideNavigation = (props) => {
  const classes = useStyles();
  const [isMobile, setIsMobile] = useState();
  const itemSel = '.sidebar-wrapper .link-list .list-item';
  const { activeList, searchValue, list } = props;
  const [indexIsOpen, setIndexIsOpen] = useState(-1);

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
    } else {
      if (!isMobile) {
        removeActive();
        setActiveLinkOnChanges(list);
        removeDisabled();
      }
    }
  }, [isMobile]);

  useEffect(() => disableLinks(), [searchValue]);

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

    if (!isMobile) {
      document.querySelector(linkTag.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    }

    if (isMobile) {
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
        <LinkList>
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
                    id={anchor.sectionId}
                  >
                    {anchor.sectionTitle}
                  </AccordionHeader>
                  <AccordionBody active={i === indexIsOpen} className={classes.accordionBody}>
                    <ul>
                      {anchor.sublist.map((listItem, index) => (
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
