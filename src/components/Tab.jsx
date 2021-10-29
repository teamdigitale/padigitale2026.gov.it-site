import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col } from 'design-react-kit';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const useStyles = createUseStyles({
  tabCard: {
    composes: 'px-4',
    backgroundColor: '#fff',
    paddingTop: '1.875rem',
    paddingBottom: '1.875rem',
    '@media (min-width: 992px)': {
      paddingTop: '3.056rem',
      paddingBottom: '2.222rem',
    },
  },
  tabCardTitle: {
    color: '#33485C',
    fontSize: '1.5rem',
    lineHeight: '1.28',
    '@media (min-width: 992px)': {
      fontSize: '1.333rem',
    },
  },
  tabCardDesc: {
    color: '#33485C',
    fontSize: '1.125rem',
    lineHeight: '1.28',
    marginBottom: '2rem',
    '@media (min-width: 992px)': {
      fontSize: '1rem',
      marginBottom: '2.667rem',
    },
  },
  contentCardTitle: {
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    fontWeight: '600',
    lineHeight: '1.24',
    color: '#33485C',
    '@media (min-width: 992px)': {
      fontSize: '0.778rem',
    },
  },
  contentCardImage: {
    marginBottom: '1rem',
    '@media (min-width: 992px)': {
      marginBottom: '0.889rem',
    },
  },
  tabLinkImage: {
    maxHeight: '3rem',
    '@media (min-width: 992px)': {
      maxHeight: '100%',
    },
  },
  howTabs: {
    composes: 'nav nav-tabs',
    '&.nav-tabs': {
      '& .nav-link': {
        flexBasis: '70%',
      },
    },
  },
});

export const Tab = ({ tabContent }) => {
  const classes = useStyles();
  const [tabActive, setTabActive] = useState(0);

  return (
    <>
      <nav>
        <div className={classes.howTabs} id={'nav-tab' + tabContent.id} role="tablist">
          {tabContent.tabs.map(({ name, image, imageActive }, index) => (
            <a
              key={index}
              className={classNames({
                'nav-item': true,
                'nav-link': true,
                'flex-column': true,
                'align-items-center': true,
                active: index === tabActive,
              })}
              onClick={() => setTabActive(index)}
              id={'nav-tab-' + index + '-tab' + tabContent.id}
              data-toggle="tab"
              role="tab"
              aria-controls={'nav-tab-' + index + '-' + tabContent.id}
              aria-selected={index === tabActive}
            >
              {index === tabActive ? (
                <img className={classes.tabLinkImage} src={`/assets/${imageActive}`} alt="" />
              ) : (
                <img className={classes.tabLinkImage} src={`/assets/${image}`} alt="" />
              )}
              {name}
            </a>
          ))}
        </div>
      </nav>
      <div className="tab-content" id={'nav-tabContent' + tabContent.id}>
        {tabContent.tabs.map(({ content }, index) => (
          <div
            key={index}
            className={classNames({
              'tab-pane': true,
              fade: true,
              active: index === tabActive,
              show: index === tabActive,
            })}
            id={'nav-tab-' + index + '-' + tabContent.id}
            role="tabpanel"
            aria-labelledby={'nav-tab-' + index + '-tab' + tabContent.id}
          >
            <div className={classes.tabCard}>
              <h3 className={classes.tabCardTitle}>{content.title}</h3>
              <p className={classes.tabCardDesc}>{content.description}</p>
              <Row>
                <Col xs="12" lg="6">
                  <img className={classes.contentCardImage} src={`/assets/${content.first.image}`} alt="" />
                  <p className={classes.contentCardTitle}>{content.first.title}</p>
                  <p dangerouslySetInnerHTML={{ __html: content.first.description }} />
                </Col>
                <Col xs="12" lg="6">
                  <img className={classes.contentCardImage} src={`/assets/${content.second.image}`} alt="" />
                  <p className={classes.contentCardTitle}>{content.second.title}</p>
                  <p dangerouslySetInnerHTML={{ __html: content.second.description }} />
                </Col>
              </Row>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

Tab.propTypes = {
  tabContent: PropTypes.any,
};
