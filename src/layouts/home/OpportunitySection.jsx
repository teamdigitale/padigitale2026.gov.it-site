import React from 'react';
import { Section, Row, Col, Card, CardBody, CardTitle } from 'design-react-kit';
import { createUseStyles } from 'react-jss';

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
      '& h5.card-title': {
        color: '#0066CC',
        marginBottom: '0',
        '& span': {
          fontWeight: 'normal',
        },
      },
    },
  },
});

export const OpportunitySection = (props) => {
  const classes = useStyle();
  const { title, list } = props;

  return (
    <Section color="muted" className={classes.section}>
      <div className="container">
        <h4 className={classes.title}>{title}</h4>
        <Row className={classes.row} role="list">
          {list.map((item) => (
            <Col md="6" lg="3" key={item.title} className="px-md-3" role="listitem">
              <Card spacing className={classes.cardWrapper}>
                <CardBody>
                  <CardTitle tag="h5">
                    <span>{item.number}</span> {item.title}
                  </CardTitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Section>
  );
};
