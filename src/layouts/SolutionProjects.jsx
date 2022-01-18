import React, { useEffect, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'design-react-kit';
import content from '../../contents/come-funziona/soluzione-progetti.yml';
import contentHowItWorks from '../../contents/come-funziona/come-funziona.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import { GlobalStateContext } from '../context/globalContext';
import { HeroImage } from '../components/hero/HeroImage';
import { TimelineVertical } from '../components/TimelineVertical';
import { ProjectsCards } from '../components/ProjectsCards';

const { title: seoTitle, description: seoDescription } = seo.projectsSolutionPage;

const useStyles = createUseStyles({
  breadcrumb: {
    '@media (min-width: 991px)': {
      marginLeft: '0.722rem',
    },
  },
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

export const SolutionProjects = () => {
  const classes = useStyles();

  const { hero, verticalTimeline } = content;
  const { projectsCardsItem } = contentHowItWorks;
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
      <div className="container">
        <Row>
          <Col xs="12">
            <Breadcrumb className={classes.breadcrumb}>
              <BreadcrumbItem className={classes.breadcrumbItem}>
                <a href="#">Come funziona</a>
                <span className="separator"></span>
              </BreadcrumbItem>
              <BreadcrumbItem active className={classes.breadcrumbItemActive}>
                <a href="#">Presentazione progetti</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
      <HeroImage
        title={hero.title}
        body={hero.body}
        imageUrl="/assets/projects-solution-big.svg"
        imageAlt=""
        smallText={true}
      />
      <TimelineVertical item={verticalTimeline} />
      <ProjectsCards item={projectsCardsItem} />
    </>
  );
};
