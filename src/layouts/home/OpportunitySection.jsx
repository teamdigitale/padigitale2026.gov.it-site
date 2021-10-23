import React from 'react';
import { Section, Row, Col, Card, CardBody, CardTitle } from 'design-react-kit';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  title: {
    composes: 'px-3',
    fontSize: '1.555rem',
    letterSpacing: '-0.26px',
    fontWeight: '600',
    marginBottom: '1.778rem'
  },
  cardWrapper: {
    composes: 'card-bg rounded',
    flexDirection: 'unset',
    margin: '0',
    '&:after': {
      content: 'unset'
    },
    '& .card-body': {
      padding: '1.333rem 0.889rem',
      '& h5.card-title': {
        color: '#0066CC',
        marginBottom: '0',
        '& span': {
          fontWeight: 'normal'
        }
      }
    }
  }
});

export const OpportunitySection = (props) => {
  const classes = useStyle();
  const { title, list } = props;
  console.log(list);

  return (
    <Section color="muted">
      <h4 className={classes.title}>{title}</h4>
      <Row>
        {list.map((item) => {
          return (
            <Col md="6" lg="3" key={item.title}>
              <Card spacing className={classes.cardWrapper}>
                <CardBody>
                  <CardTitle tag="h5"><span>{item.number}</span> {item.title}</CardTitle>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Section>
  );
};
