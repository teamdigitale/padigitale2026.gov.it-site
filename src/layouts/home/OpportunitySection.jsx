import React, { useContext } from 'react';
import { Section, Row, Col, Card, CardBody, CardTitle, Button } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import { GlobalStateContext } from '../../context/globalContext';

const useStyle = createUseStyles({
  section: {
    composes: 'section section-muted',
    '&.section-muted': {
      padding: '2.667rem 0.833rem',
      '@media (min-width: 768px)': {
        padding: '2.667rem 0',
      },
      '@media (min-width: 992px)': {
        padding: '4rem 0',
      },
      '@media (min-width: 1200px)': {
        padding: '4rem 6.222rem',
      },
    },
  },
  title: {
    fontSize: '1.555rem',
    letterSpacing: '-0.26px',
    fontWeight: '600',
    marginBottom: '1.778rem',
  },
  row: {
    '@media (min-width: 768px)': {
      marginLeft: '-1rem',
      marginRight: '-1rem',
    },
    '& .card-wrapper': {
      '&.card-space': {
        paddingBottom: '1.778rem',
      },
    },
  },
  cardWrapper: {
    composes: 'card-bg rounded',
    flexDirection: 'unset',
    '&.card-bg': {
      marginLeft: '0',
      marginRight: '0',
    },
    '&:after': {
      content: 'unset',
    },
    '& a': {
      textDecoration: 'none',
      width: '100%',
      '&:hover': {
        color: '#0066CC',
        textDecoration: 'underline'
      }
    },
    '& .card-body': {
      padding: '1.333rem 0.889rem',
      '& h4.card-title': {
        color: '#0066CC',
        marginBottom: '0',
        fontSize: '1rem',
        '& span': {
          fontWeight: 'normal',
        },
      },
    },
  },
  cardTitle: {
    fontWeight: '700',
    marginBottom: '0',
    '& span': {
      fontWeight: 'normal',
    },
  },
});

export const OpportunitySection = (props) => {
  const classes = useStyle();
  const { title, list } = props;
  const [state, dispatch] = useContext(GlobalStateContext);

  return (
    <div className={classes.section}>
      <section className="container" aria-labelledby="misure-section">
        <h3 id="misure-section" className={classes.title}>{title}</h3>
        <Row className={classes.row} role="list">
          {list.map((item) => (
            <Col md="6" key={item.title} className="px-md-3" role="listitem">
              <Card spacing className={classes.cardWrapper}>
              <Link to="/misure" onClick={() => dispatch({type: 'SET:SECTION_OPPORTUNITY_ID', payload: {sectionId: item.id}})}>
                <CardBody>
                  <CardTitle className={classes.cardTitle}>
                  <span>{item.number}</span> {item.title}
                  </CardTitle>
                </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <Link to="/misure" className="text-uppercase btn btn-primary">Scopri tutte le misure</Link>
        </div>
      </section>
    </div>
  );
};
