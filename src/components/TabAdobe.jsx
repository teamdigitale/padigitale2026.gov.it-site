/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Item } from '@react-stately/collections';
import { useTabList, useTab, useTabPanel } from '@react-aria/tabs';
import { useTabListState } from '@react-stately/tabs';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col, Icon } from 'design-react-kit';

const useStyles = createUseStyles({
  howTabsTitle: {
    color: '#004080',
    fontWeight: '600',
    fontSize: '1.75rem',
    '@media(min-width: 992px)': {
      fontSize: '1.556rem',
    },
  },
  howTabsSubtitle: {
    color: '#33485C',
    fontSize: '1.25rem',
    '@media(min-width: 992px)': {
      fontSize: '1rem',
    },
  },
  howTabSection: {
    backgroundColor: '#F0F6FC',
    padding: '3.125rem 0 4.5rem 0',
    overflow: 'hidden',
    '@media (min-width: 992px)': {
      padding: '2.222rem 0 3.889rem 0',
    },
    '& .swiper': {
      margin: '0 -1.111rem',
      '@media (max-width: 992px)': {
        margin: '0',
      },
    },
    '& .swiper-wrapper': {
      padding: '0 1.667rem 1.667rem',
      margin: '0 -1.667rem -1.667rem',
      '@media (max-width: 992px)': {
        margin: '0 -1.667rem -1.667rem',
      },
    },
    '& .swiper-slider': {
      padding: '1.111rem',
    },
    '& .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet': {
      margin: '0 0.889rem',
    },
  },
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
        display: 'flex',
        borderBottom: '1px solid #E6E9F2',
        flexDirection: 'column',
        flexBasis: '70%',
        cursor: 'pointer',
        padding: '0.625rem 0',
        '@media (min-width: 992px)': {
          flexBasis: 'auto',
          padding: '1.111rem 0',
        },
        '& span': {
          paddingTop: '0.625rem',
          '@media (min-width: 992px)': {
            paddingTop: '1.111rem 0',
          },
        },
      },
    },
  },
  navigationBtn: {
    cursor: 'pointer',
    '&.tab-button-disabled': {
      opacity: '0.2',
      cursor: 'unset',
    },
  },
  sidePrevButton: {
    composes: 'side-button d-none justify-content-center pt-3 d-lg-flex',
    position: 'absolute',
    left: '0',
    top: '400px',
    transform: 'translateY(-50%)',
    '&.side-button': {
      '& button': {
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
      },
    },
  },
  sideNextButton: {
    composes: 'side-button d-none justify-content-center pt-3 d-lg-flex',
    position: 'absolute',
    right: '0',
    top: '400px',
    transform: 'translateY(-50%)',
    '&.side-button': {
      '& button': {
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
      },
    },
  },
  mobileNavButton: {
    '& button': {
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      padding: '0',
    },
  },
});

function nextTab(state) {
  const nextKey = parseInt(state.selectedKey, 10) + 1;

  if (nextKey <= state.collection.lastKey) {
    state.setSelectedKey(nextKey.toString());
  }
}

function prevTab(state) {
  const prevKey = parseInt(state.selectedKey, 10) - 1;

  if (prevKey >= state.collection.firstKey) {
    state.setSelectedKey(prevKey.toString());
  }
}

function Tabs(props) {
  const classes = useStyles();
  const state = useTabListState(props);
  const ref = React.useRef();
  const { tabListProps } = useTabList(props, state, ref);
  const { sideDesktopNavigation, mobileNavigation } = props;
  return (
    <React.Fragment>
      <div {...tabListProps} ref={ref} className={classes.howTabs}>
        {[...state.collection].map((item) => (
          <Tab key={item.key} item={item} state={state} />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
      {sideDesktopNavigation && (
        <div className={classes.sidePrevButton}>
          <button
            type="button"
            onClick={() => {
              prevTab(state);
            }}
          >
            {state.selectedKey === state.collection.firstKey ? (
              <Icon
                className={`${classes.navigationBtn} tab-button-disabled`}
                color="primary"
                icon="it-arrow-left-circle"
                size="lg"
              />
            ) : (
              <Icon className={classes.navigationBtn} color="primary" icon="it-arrow-left-circle" size="lg" />
            )}
          </button>
        </div>
      )}
      {sideDesktopNavigation && (
        <div className={classes.sideNextButton}>
          <button
            type="button"
            onClick={() => {
              nextTab(state);
            }}
          >
            {state.selectedKey === state.collection.lastKey ? (
              <Icon
                className={`${classes.navigationBtn} tab-button-disabled`}
                color="primary"
                icon="it-arrow-right-circle"
                size="lg"
              />
            ) : (
              <Icon className={classes.navigationBtn} color="primary" icon="it-arrow-right-circle" size="lg" />
            )}
          </button>
        </div>
      )}
      {mobileNavigation && (
        <div className="d-flex justify-content-center pt-3 d-lg-none">
          <div className={classes.mobileNavButton}>
            <button
              type="button"
              onClick={() => {
                prevTab(state);
              }}
            >
              {state.selectedKey === state.collection.firstKey ? (
                <Icon
                  className={`${classes.navigationBtn} tab-button-disabled`}
                  color="primary"
                  icon="it-arrow-left-circle"
                  size="lg"
                />
              ) : (
                <Icon className={classes.navigationBtn} color="primary" icon="it-arrow-left-circle" size="lg" />
              )}
            </button>
          </div>
          <div className={classes.mobileNavButton}>
            <button
              type="button"
              onClick={() => {
                nextTab(state);
              }}
            >
              {state.selectedKey === state.collection.lastKey ? (
                <Icon
                  className={`${classes.navigationBtn} tab-button-disabled`}
                  color="primary"
                  icon="it-arrow-right-circle"
                  size="lg"
                />
              ) : (
                <Icon className={classes.navigationBtn} color="primary" icon="it-arrow-right-circle" size="lg" />
              )}
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function Tab({ item, state }) {
  const classes = useStyles();
  const { key, rendered } = item;
  const { image, imageActive } = item.props;
  const ref = React.useRef();
  const { tabProps } = useTab({ key }, state, ref);
  const isSelected = state.selectedKey === key;
  const isDisabled = state.disabledKeys.has(key);
  const [isHoverTab, setIsHoverTab] = useState(false);

  return (
    <div
      {...tabProps}
      ref={ref}
      style={{
        borderBottom: isSelected ? '2px solid var(--blue)' : undefined,
        opacity: isDisabled ? '0.5' : undefined,
      }}
      className="nav-link"
      onMouseEnter={() => setIsHoverTab(true)}
      onMouseLeave={() => setIsHoverTab(false)}
    >
      {isSelected || isHoverTab ? (
        <img className={classes.tabLinkImage} src={`/assets/${imageActive}`} alt="" />
      ) : (
        <img className={classes.tabLinkImage} src={`/assets/${image}`} alt="" />
      )}
      <span>{rendered}</span>
    </div>
  );
}

function TabPanel({ state, ...props }) {
  const ref = React.useRef();
  const { tabPanelProps } = useTabPanel(props, state, ref);
  return (
    <div {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  );
}

export const TabAdobe = ({ tabContent, sideDesktopNavigation, mobileNavigation, title, subtitle, sectionId }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.howTabSection}>
        <Container className="px-3 position-relative">
          {title ? (
            <Row>
              <Col xs="12" lg="4" className="offset-lg-1" id={sectionId}>
                <h3 className={classes.howTabsTitle}>{title}</h3>
              </Col>
            </Row>
          ) : (
            ''
          )}
          {subtitle ? (
            <Row>
              <Col xs="12" lg="10" className="offset-lg-1">
                <p className={classes.howTabsSubtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />
              </Col>
            </Row>
          ) : (
            ''
          )}
          <Row>
            <Col xs="12" lg="10" className="offset-lg-1 position-static">
              <Tabs
                aria-label="History of Ancient Rome"
                sideDesktopNavigation={sideDesktopNavigation}
                mobileNavigation={mobileNavigation}
              >
                {tabContent.tabs.map(({ name, image, imageActive, content }, index) => (
                  <Item key={index} title={name} image={image} imageActive={imageActive}>
                    <div className={classes.tabCard}>
                      <h4 className={classes.tabCardTitle}>{content.title}</h4>
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
                  </Item>
                ))}
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};