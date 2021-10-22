import React from 'react';
import { Sidebar, LinkListItem, LinkList } from 'design-react-kit';
// import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import content from '../../../contents/faq-page/faq.yml';
import { useState } from 'react';

const useStyles = createUseStyles({
  wrapper: {
    '@media (min-width: 992px)': {
      borderRight: '1px solid #d9dadb',
      position: 'sticky',
      top: '0.833rem'
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
                border: '1px solid #0073E6',
              },
              '& span': {
                marginRight: '0',
                color: '#0073E6',
                textDecoration: 'none',
                fontWeight: '600'
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 992);
  });

  function handleClik(evt) {
    evt.preventDefault();
    const linkTag = evt.target.closest('a');
    removeActive();
    linkTag.classList.add('active');

    if(!isMobile) {
      document.querySelector(linkTag.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    }
    
    if (isMobile) {
      props.getFilter(linkTag.getAttribute('data-id'));
    }
  }

  function removeActive() {
    const items = document.querySelectorAll(
      '.sidebar-wrapper .link-list .list-item'
    );

    items.forEach((item) => {
      item.classList.remove('active');
    });
  }

  return (
    <Sidebar className={`${classes.wrapper} p-0`}>
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

        {content.sidebar.map((anchor, i) => (
          <>
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
          </>
        ))}
      </LinkList>
    </Sidebar>
  );
};
