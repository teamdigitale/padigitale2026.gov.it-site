import React, { Fragment, useState } from 'react';
import { Button, Collapse, Card, CardBody } from 'design-react-kit';
// import { StaticImage } from 'gatsby-plugin-image';
import { ExternalLink } from './ExternalLink';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  collapseWrapper: {
    composes: 'card card-bg rounded',
    display: 'flex',
    flexDirection: 'row',
    '&.card.card-bg': {
      marginBottom: '1.778rem',
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
    padding: '1.778rem 2.222rem',
  },
  cardTitle: {
    fontSize: '1.778rem',
    lineHeight: '1.25',
    fontWeight: 'bold',
    '& span': {
      fontWeight: 'normal',
    },
  },
  cardTags: {
    display: 'flex',
    alignItems: 'center',
    '& .tag-title': {
      marginBottom: '0',
      marginRight: '0.444rem',
    },
    '& .tag-wrapper': {
      display: 'flex',
    },
    '& .tag': {
      padding: '2px 16px',
      borderRadius: '12px',
      border: '1px solid #E6E9F2',
      fontSize: '0.778rem',
      fontWeight: '600',
      '& + .tag': {
        marginLeft: '0.444rem',
      },
    },
  },
  cardHeaderValue: {
    fontSize: '3.111rem',
    lineHeight: '1.15',
    '& span': {
      display: 'block',
      fontSize: '0.889rem',
    },
  },
  collapseAccordion: {
    '& .card' : {
      '&:after': {
        content: 'unset',
      },
    },
    '& .card-body': {
      padding: '0.444rem 2.222rem 1.778rem',
    }
  },
  button: {
    backgroundColor: '#DAE3EC',
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
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
  const [collapse, setCollapse] = useState(false);
  // const toggle = evt => {
  //   console.log(evt);
    
  //   setCollapse(!collapse);
  // };
  const eventHandler = () => {
    props.handleToggle(props.id)
  }
  return (
    <>
      <div className={classes.collapseWrapper}>
        <div className={classes.cardWrapper}>
          <div className={classes.cardHeader}>
            <div className={classes.cardHeaderInfo}>
              <p className={classes.cardTitle}>
                <span>{number}</span> {title}
              </p>
              <div className={classes.cardTags}>
                <p class="tag-title">Beneficiari</p>
                <div className="tag-wrapper">
                  {tags.map(tag => {
                    return (
                      <div className="tag">{tag.value}</div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className={classes.cardHeaderValue}>
              {money} <span>milioni di euro</span>
            </div>
          </div>
          <Collapse isOpen={props.id === props.active} className={classes.collapseAccordion}>
            <Card>
              <CardBody>
                <p>{description}</p>
                <p>
                  Platea beneficiaria: <span>{stalls}</span>
                </p>
                <p>
                  Modalità di accesso: <a href={accessLink}>{accessLabel}</a>
                </p>
                <ExternalLink linkTo={moreInfoLink} ariaLabel="aria label">
                  {moreInfoLabel}
                  <img src="/assets/external-icon.svg" alt="" />
                </ExternalLink>
              </CardBody>
            </Card>
          </Collapse>
        </div>

        <Button
          onClick={eventHandler}
          aria-expanded={collapse}
          className={classes.button}
        >
          >
        </Button>
      </div>
    </>
  );
};
