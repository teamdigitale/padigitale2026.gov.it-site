import React, { useEffect, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { Breadcrumb, BreadcrumbItem, Row, Col } from 'design-react-kit';
import content from '../../contents/come-funziona/soluzione-standard.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import contentHowItWorks from '../../contents/come-funziona/come-funziona.yml';
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
      fontWeight: '700',
      textDecoration: 'underline',
    },
  },
  breadcrumbItemActive: {
    '& a': {
      color: '#5B6F82',
      textDecoration: 'none',
    },
  },
});

export const SolutionStandard = () => {
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
                <a href="/come-funziona">Come funziona</a>
                <span className="separator"></span>
              </BreadcrumbItem>
              <BreadcrumbItem active className={classes.breadcrumbItemActive}>
                <a href="/soluzione-standard">Soluzioni standard</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
      <HeroImage
        title={hero.title}
        body={hero.body}
        imageUrl="/assets/standard-solution-big.svg"
        imageAlt=""
        smallText={true}
      />
      <TimelineVertical item={verticalTimeline} />
      <ProjectsCards item={projectsCardsItem} />
    </>
  );
};
