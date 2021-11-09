import React, { useContext } from 'react';
import { Section, Row, Col, Card, CardBody, CardTitle, Button } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import { GlobalStateContext } from '../../context/globalContext';

const useStyle = createUseStyles({
  section: {
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
    '& .card-body': {
      padding: '1.333rem 0.889rem',
      '& h4.card-title': {
        color: '#0066CC',
        marginBottom: '0',
        fontSize: '1rem',
        '& span': {
          fontWeight: 'normal',
        },
        '& a': {
          textDecoration: 'none',
        },
      },
    },
  },
});

export const OpportunitySection = (props) => {
  const classes = useStyle();
  const { title, list } = props;
  const [state, dispatch] = useContext(GlobalStateContext);

  return (
    <Section color="muted" className={classes.section}>
      <div className="container">
        <h4 className={classes.title}>{title}</h4>
        <Row className={classes.row} role="list">
          {list.map((item) => (
            <Col md="6" lg="3" key={item.title} className="px-md-3" role="listitem">
              <Card spacing className={classes.cardWrapper}>
                <CardBody>
                  <CardTitle tag="h4">
                  <Link to="/misure" onClick={() => dispatch({type: 'SET:SECTION_OPPORTUNITY_ID', payload: {sectionId: item.id}})}><span>{item.number}</span> {item.title}</Link>
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <Link to="/misure" className="text-uppercase btn btn-primary">Scopri tutte le misure</Link>
        </div>
      </div>
    </Section>
  );
};
