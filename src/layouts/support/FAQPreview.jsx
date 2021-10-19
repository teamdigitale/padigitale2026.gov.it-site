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
  faqPreviewCards,
  faqPreviewBtn: btn,
} = content;

const useStyle = createUseStyles({
  faqPreview: {
    backgroundColor: '#F0F6FC',
    paddingBottom: '100px',
  },
  faqCard: {
    composes: 'card rounded',
    '&.card': {
      boxShadow: '0px 0px 80px rgba(0, 43, 85, 0.1)',
      '& h5.card-title': {
        color: '#0066CC',
        fontWeight: 'bold',
        fontSize: '28px',
        lineHeight: '40px',
        marginBottom: '16px',
        '@media (min-width: 992px)': {
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: 'normal',
          minHeight: '96px',
          marginBottom: '40px',
        },
      },
      '& .card-text': {
        color: '#33485C',
        fontFamily: 'Titillium Web',
        fontSize: '18px',
        lineHeight: '28px',
      },
      '&:after': {
        content: 'none',
      },
    },
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
    '@media (min-width: 992px)': {
      marginTop: '50px',
    },
    '& .btn': {
      textTransform: 'uppercase',
    },
  },
});

export const FAQPreview = () => {
  const classes = useStyle();
  const cards = faqPreviewCards.map((card) => (
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
        <div className="container">
          <Row>
            {cards}
          </Row>
          <div className={classes.btnWrapper}>
            <Button color="primary">{btn}</Button>
          </div>
        </div>
      </div>
    </>
  );
};
