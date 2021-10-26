import React from 'react';
import { Button, Collapse, Card, CardBody } from 'design-react-kit';
import { ExternalLink } from './ExternalLink';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  collapseWrapper: {
    composes: 'card card-bg rounded',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    '&.card.card-bg': {
      marginBottom: '1.778rem',
      marginLeft: '0',
      marginRight: '0'
    },
    '&:after': {
      content: 'unset',
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
      marginBottom: '0.444rem',
      textAlign: 'center',
      '@media (min-width: 992px)': {
        marginBottom: '0',
        marginRight: '0.444rem',
      },
    },
    '& .tag-wrapper': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      '@media (min-width: 992px)': {
        justifyContent: 'flex-start',
        maxWidth: '70%'
      },
    },
    '& .tag': {
      padding: '2px 16px',
      borderRadius: '12px',
      border: '1px solid #E6E9F2',
      fontSize: '0.778rem',
      fontWeight: '600',
      marginBottom: '0.444rem',
      maxWidth: '8.889rem',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      marginRight: '0.444rem',
      '&::last-child': {
        marginRight: '0'
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
      paddingBottom: '0'
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
    '& .access': {
      fontSize: '0.778rem',
      lineHeight: '1.4',
      letterSpacing: '0.5px',
      textTransform: 'uppercase',
      display: 'flex',
      alignItems: 'baseline',
      marginBottom: '1rem',
      '& span': {
        flexShrink: '0',
        marginRight: '0.313rem'
      },
      '& a': {
        fontSize: '1.125rem',
        lineHeight: '1',
        fontWeight: '600',
        color: '#0066CC',
        textTransform: 'capitalize',
        textDecoration: 'none',
        '@media (min-width: 992px)': {
          fontSize: '1rem',
        },
      },
    },
  },
  linkAccordion: {
    textAlign: 'right',
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
    '&[aria-expanded="true"]': {
      backgroundColor: '#0066CC',
    },
    '@media (max-width: 991px)': {
      maxHeight: '95px',
      height: '100%',
    },
    '@media (min-width: 992px)': {
      position: 'static',
      padding: '0.667rem 1.333rem',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
      borderBottomRightRadius: '4px',
    },
  },
});

export const AccordionButtonFull = (props) => {
  const classes = useStyles();
  const {
    number,
    title,
    money,
    tags,
    description,
    stalls,
    accessLabel,
    accessLink,
    moreInfoLabel,
    moreInfoLink,
  } = props.data;

  const eventHandler = () => {
    props.handleToggle(props.id);
  };

  return (
    <>
      <div className={classes.collapseWrapper}>
        <div className={classes.cardWrapper}>
          <div className={classes.cardHeader}>
            {/* <div className={classes.cardHeaderInfo}> */}
            <p className={classes.cardTitle}>
              <span>{number}</span> {title}
            </p>

            {/* </div> */}
            <div className={classes.cardHeaderValue}>
              {money} <span>milioni di euro</span>
            </div>
            <div className={classes.cardTags}>
              <p class="tag-title">Beneficiari</p>
              <div className="tag-wrapper">
                {tags.map((tag) => {
                  return <div className="tag">{tag.label}</div>;
                })}
              </div>
            </div>
          </div>
          <Collapse
            isOpen={props.id === props.active}
            className={classes.collapseAccordion}
          >
            <Card>
              <CardBody>
                <p>{description}</p>
                <p className="stalls">
                  Platea beneficiaria: <span>{stalls}</span>
                </p>
                <div className="access">
                  <span>Modalità di accesso:</span> <a href={accessLink}>{accessLabel}</a>
                </div>
                <div className={classes.linkAccordion}>
                  <ExternalLink linkTo={moreInfoLink} ariaLabel="aria label">
                    {moreInfoLabel}
                    <img src="/assets/external-icon.svg" alt="" />
                  </ExternalLink>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>

        <Button
          onClick={eventHandler}
          aria-expanded={props.id === props.active}
          className={classes.button}
        >
          {props.id === props.active ? (
            <img src="/assets/chevron-up-white.svg" alt="" />
          ) : (
            <img src="/assets/chevron-down.svg" alt="" />
          )}
        </Button>
      </div>
    </>
  );
};
