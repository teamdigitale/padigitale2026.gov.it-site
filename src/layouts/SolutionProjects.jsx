import React, { useEffect, useContext } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { Breadcrumb, BreadcrumbItem } from 'design-react-kit';
import content from '../../contents/come-funziona/soluzione-progetti.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import { GlobalStateContext } from '../context/globalContext';
import { HeroImage } from '../components/hero/HeroImage';
import { TimelineVertical } from '../components/TimelineVertical';
import { ProjectsCards } from '../components/ProjectsCards';

const { title: seoTitle, description: seoDescription } = seo.projectsSolutionPage;

const useStyles = createUseStyles({
  breadcrumbItem: {
    '& a': {
      color: '#5B6F82',
    },
  },
  breadcrumbItemActive: {
    '& a': {
      color: '#5B6F82',
      textDecoration: 'none',
      fontWeight: '700',
    },
  },
});

const query = graphql`
  query {
    site {
      siteMetadata {
        apiUrl
      }
    }
  }
`;

export const SolutionProjects = ({ location }) => {
  const classes = useStyles();

  const { hero, verticalTimeline } = content;

  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    dispatch({
      type: 'SET:ACTIVE_HEADER',
      payload: { activeItem: 'come-funziona' },
    });
    return () => {
      dispatch({ type: 'SET:ACTIVE_HEADER' });
    };
  }, [dispatch]);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <h1 className="sr-only">{seoTitle}</h1>
      <Breadcrumb>
        <BreadcrumbItem className={classes.breadcrumbItem}>
          <a href="#">Come funziona</a>
          <span className="separator"></span>
        </BreadcrumbItem>
        <BreadcrumbItem active className={classes.breadcrumbItemActive}>
          <a href="#">Presentazione progetti</a>
        </BreadcrumbItem>
      </Breadcrumb>
      <HeroImage
        title={hero.title}
        body={hero.body}
        imageUrl="/assets/projects-solution-big.svg"
        imageAlt=""
      />
      <TimelineVertical item={verticalTimeline} />
      <ProjectsCards />
    </>
  );
};
