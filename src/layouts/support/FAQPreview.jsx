/* eslint-disable prettier/prettier */
import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'design-react-kit';
import content from '../../../contents/support-page/support.yml';

const {
  faqSection
} = content;

const useStyle = createUseStyles({
  faqPreview: {
    backgroundColor: '#F0F6FC',
    paddingBottom: '5.556rem',
  },
  faqCard: {
    composes: 'card rounded',
    '&.card': {
      boxShadow: '0px 0px 80px rgba(0, 43, 85, 0.1)',
      '& h5.card-title': {
        color: '#0066CC',
        fontWeight: 'bold',
        fontSize: '1.556rem',
        lineHeight: '1.4',
        marginBottom: '0.889rem',
        '@media (min-width: 992px)': {
          fontSize: '1.333rem',
          lineHeight: '1.32',
          fontWeight: 'normal',
          minHeight: '5.333rem',
          marginBottom: '2.222rem',
        },
      },
      '& .card-text': {
        color: '#33485C',
        fontFamily: 'Titillium Web',
        fontSize: '1rem',
        lineHeight: '1.28',
      },
      '&:after': {
        content: 'none',
      },
    },
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.667rem',
    '@media (min-width: 992px)': {
      marginTop: '2.778rem',
    },
    '& .btn': {
      textTransform: 'uppercase',
    },
  },
});

export const FAQPreview = () => {
  const classes = useStyle();
  const cards = faqSection.faqPreviewCards.map((card) => (
    <Col key={card.id} xs="12" lg="4">
      <Card className={classes.faqCard}>
        <CardBody>
          <CardTitle tag="h5">{card.title}</CardTitle>
          <CardText dangerouslySetInnerHTML={{ __html: card.text }} />
        </CardBody>
      </Card>
    </Col>
  ));

  return (
    <>
      <div className={classes.faqPreview}>
        <div className="container px-3">
          <Row>
            {cards}
          </Row>
          <div className={classes.btnWrapper}>
            <Button color="primary" href={faqSection.buttonLink}>{faqSection.buttonLabel}</Button>
          </div>
        </div>
      </div>
    </>
  );
};
