import React from 'react';
import { Button, Collapse, Card, CardBody } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { ExternalLink } from './ExternalLink';

const useStyles = createUseStyles({
  collapseWrapper: {
    composes: 'card card-bg rounded',
    display: 'flex',
    flexDirection: 'row-reverse',
    position: 'relative',
    '&.card.card-bg': {
      marginBottom: '1.778rem',
      marginLeft: '0',
      marginRight: '0',
    },
    '&:after': {
      content: 'unset',
    },
    '&[tabindex="-1"]:focus:not(:focus-visible)': {
      boxShadow: '0 2px 20px 0 rgb(0 0 0 / 10%)',
    },
  },
  cardWrapper: {
    width: '100%',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1.333rem 0.778rem',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (min-width: 992px)': {
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: '1.778rem 2.222rem',
    },
  },
  cardTitle: {
    fontSize: '1.111rem',
    lineHeight: '1.25',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    maxWidth: 'calc(100% - 3.5rem)',
    '& span': {
      fontWeight: 'normal',
    },
    '@media (min-width: 992px)': {
      maxWidth: '70%',
      fontSize: '1.778rem',
      paddingBottom: '0.833rem',
    },
  },
  cardTags: {
    '@media (min-width: 992px)': {
      display: 'flex',
      alignItems: 'baseline',
      flexBasis: '100%',
      marginTop: '-1.111rem',
    },
    '& .tag-title': {
      textTransform: 'uppercase',
      marginBottom: '0.444rem',
      textAlign: 'center',
      fontSize: '0.875rem',
      lineHeight: '1.4',
      '@media (min-width: 992px)': {
        marginBottom: '0',
        marginRight: '0.444rem',
        fontSize: '0.778rem',
      },
    },
    '& .tag-wrapper': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '@media (min-width: 992px)': {
        justifyContent: 'flex-start',
        maxWidth: '70%',
      },
    },
    '& .tag': {
      background: '#F0F6FC',
      padding: '2px 16px',
      borderRadius: '4px',
      fontSize: '0.778rem',
      fontWeight: '600',
      marginBottom: '0.444rem',
      marginRight: '0.444rem',
      color: '#33485C',
      '&:last-child': {
        marginRight: '0',
      },
    },
  },
  cardHeaderValue: {
    fontSize: '3.111rem',
    lineHeight: '1.15',
    textAlign: 'center',
    marginBottom: '0.889rem',
    '& span': {
      display: 'block',
      fontSize: '0.889rem',
      fontWeight: 'bold',
    },
    '@media (min-width: 992px)': {
      marginBottom: '0',
      textAlign: 'right',
    },
  },
  collapseAccordion: {
    '& .card-wrapper': {
      paddingBottom: '0',
    },
    '& .card': {
      '&:after': {
        content: 'unset',
      },
    },
    '& .card-body': {
      padding: '1.333rem 0.778rem',
      display: 'flex',
      flexDirection: 'column',
      '@media (min-width: 992px)': {
        padding: '0.444rem 2.222rem 1.778rem',
      },
      '& .description': {
        '@media (min-width: 992px)': {
          maxWidth: '44rem',
        },
      },
    },
    '& .stalls': {
      fontSize: '0.875rem',
      lineHeight: '1.4',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      '@media (min-width: 992px)': {
        fontSize: '0.778rem',
      },
      '& span': {
        fontWeight: '600',
        textTransform: 'lowercase',
      },
    },
  },
  linkAccordion: {
    marginTop: '1.5rem',
    '@media (min-width: 992px)': {
      marginTop: '2.222rem',
    },
    '& a': {
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '0.778rem',
      '& img': {
        marginLeft: '0.444rem',
      },
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  button: {
    borderTopLeftRadius: '0',
    borderBottomRightRadius: '0',
    backgroundColor: '#DAE3EC',
    padding: '0.444rem',
    position: 'absolute',
    right: '0',
    boxShadow: 'none',
    backgroundImage: 'url(/assets/chevron-down.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:focus': {
      outline: '2px solid #ff9900',
      boxShadow: 'none',
    },
    '&:hover, &:focus': {
      backgroundColor: '#0066CC',
      backgroundImage: 'url(/assets/chevron-down-white.svg)',
    },
    '&[aria-expanded="true"]': {
      backgroundColor: '#0066CC',
      backgroundImage: 'url(/assets/chevron-up-white.svg)',
      '&:hover, &:focus': {
        backgroundImage: 'url(/assets/chevron-up-white.svg)',
      },
    },
    '@media (max-width: 991px)': {
      maxHeight: '95px',
      height: '100%',
      minWidth: '2.667rem',
    },
    '@media (min-width: 992px)': {
      position: 'static',
      minWidth: '5.333rem',
      padding: '0.667rem 1.333rem',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '4px',
    },
  },
  accessLink: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#0066CC',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  description: {
    marginBottom: '1rem',
  },
  stalls: {
    marginBottom: '1rem',
  },
  moreInfo: {
    composes: 'info-row',
    fontSize: '0.778rem',
    lineHeight: '1.4',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'baseline',
    '& + .info-row': {
      marginTop: '15px',
    },
    '& .label-info': {
      flexBasis: '9.4rem',
      flexShrink: '0',
      marginRight: '1rem',
    },
    '& .value-info': {
      fontSize: '0.88rem',
      fontWeight: 600,
      lineHeight: '1.25',
      '&.access': {
        color: '#06c',
      },
      '&.updates': {
        fontWeight: 'normal',
        lineHeight: '1.5',
        textTransform: 'none',
        '& a': {
          fontWeight: '600',
        },
      },
    },
    '&.updates': {
      '@media (max-width: 992px)': {
        display: 'block',
        '& .label-info': {
          display: 'block',
          marginBottom: '0.888rem',
        },
      },
    },
  },
});

export const AccordionButtonFull = (props) => {
  const classes = useStyles();
  const { id, number, title, money, tags, description, stalls, accessLabel, moreInfoLabel, moreInfoLink, updates } =
    props.data;

  const eventHandler = () => {
    props.handleToggle(props.id);
  };

  return (
    <>
      <div className={classes.collapseWrapper} role="listitem" id={id}>
        <Button
          onClick={eventHandler}
          aria-expanded={props.id === props.active}
          className={classes.button}
          aria-label={`Dettaglio opportunità ${number} ${title}`}
          aria-controls={`Misure-accordion-${id}`}
        ></Button>
        <div className={classes.cardWrapper}>
          <div className={classes.cardHeader}>
            <h4 className={classes.cardTitle} onClick={eventHandler}>
              <span>{number}</span> {title}
            </h4>
            <div className={classes.cardHeaderValue} dangerouslySetInnerHTML={{ __html: money }} />
            <div className={classes.cardTags}>
              <p className="tag-title">Beneficiari</p>
              <div role="list" className="tag-wrapper">
                {tags.map((tag) => (
                  <div role="listitem" key={tag.label} className="tag">
                    {tag.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Collapse
            id={`Misure-accordion-${id}`}
            isOpen={props.id === props.active}
            className={classes.collapseAccordion}
          >
            <Card>
              <CardBody>
                <div className={classes.description} dangerouslySetInnerHTML={{ __html: description }}></div>
                <div className={classes.moreInfo}>
                  <span className="label-info">Platea potenziale</span>
                  <span className="value-info">{stalls}</span>
                </div>
                <div className={classes.moreInfo}>
                  <span className="label-info">Modalità di accesso</span>
                  <span className="value-info access">{accessLabel}</span>
                </div>
                {updates && (
                  <div className={`${classes.moreInfo} updates`}>
                    <span className="label-info">Aggiornamenti</span>
                    <span className="value-info updates" dangerouslySetInnerHTML={{ __html: updates }}></span>
                  </div>
                )}
                {!updates && (
                  <div className={classes.linkAccordion}>
                    <ExternalLink
                      className="btn btn-primary"
                      linkTo={moreInfoLink}
                      ariaLabel={`${moreInfoLabel}, ${title}, (Collegamento esterno - Apre su nuova scheda)`}
                    >
                      VAI AGLI AVVISI
                    </ExternalLink>
                  </div>
                )}
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    </>
  );
};

AccordionButtonFull.propTypes = {
  id: PropTypes.number,
  number: PropTypes.string,
  title: PropTypes.string,
  money: PropTypes.string,
  tags: PropTypes.array,
  description: PropTypes.string,
  stalls: PropTypes.string,
  accessLabel: PropTypes.string,
  accessSectionId: PropTypes.string,
  moreInfoLabel: PropTypes.string,
  moreInfoLink: PropTypes.string,
  data: PropTypes.object,
  active: PropTypes.number,
  handleToggle: PropTypes.func,
};
