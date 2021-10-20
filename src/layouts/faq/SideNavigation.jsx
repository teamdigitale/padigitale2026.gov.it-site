import React from 'react';
import { Sidebar, LinkListItem, LinkList } from 'design-react-kit';
// import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';

import content from '../../../contents/faq-page/faq.yml';

const useStyles = createUseStyles({
  // anchorLink: {
  //   textDecoration: 'none',
  // },
  anchorText: {
    color: '#0073E6',
    fontWeight: '600',
    fontSize: '18px',
  },
});

export const SideNavigation = () => {
  const classes = useStyles();
  const anchors = content.sidebar.map((anchor, i) => (
    <LinkListItem key={i} size="medium" href={`#` + anchor.sectionId} className="text-decoration-none">
      <span className={classes.anchorText}>{anchor.sectionTitle}</span>
    </LinkListItem>
  ));
  return (
    <Sidebar right>
      <LinkList>{anchors}</LinkList>
    </Sidebar>
  );
};
