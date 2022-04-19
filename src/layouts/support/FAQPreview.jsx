/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'design-react-kit';
import { Link } from 'gatsby';
import { GlobalStateContext } from '../../context/globalContext';
import content from '../../../contents/support-page/support.yml';

const { faqSection } = content;

const useStyle = createUseStyles({
  faqPreview: {
    backgroundColor: '#F0F6FC',
    paddingBottom: '5.556rem',
  },
  faqCard: {
    composes: 'card rounded',
    '&.card': {
      boxShadow: '0px 0px 80px rgba(0, 43, 85, 0.1)',
      height: '100%',
      '& .card-body': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      '& h3.card-title': {
        fontSize: '1.333rem',
        lineHeight: '1.32',
        fontWeight: 'normal',
        minHeight: '5.333rem',
        marginBottom: '2.222rem',
        '@media (max-width: 991px)': {
          minHeight: 'unset',
        },
      },
      '& .card-text': {
        color: '#33485C',
        fontFamily: 'Titillium Web',
        fontSize: '1rem',
        lineHeight: '1.28',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      '&:after': {
        content: 'none',
      },
      '&:hover': {
        '& h4.card-title': {
          textDecoration: 'underline',
        },
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
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
  },
  linkCard: {
    textDecoration: 'none',
    height: '100%',
    display: 'inline-flex',
    '&:hover': {
      textDecoration: 'none',
      '& .card-title': {
        textDecoration: 'underline',
      }
    },
    '& .card-wrapper': {
      height: '100%',
    }
  },
});

export const FAQPreview = () => {
  const classes = useStyle();
  const [, dispatch] = useContext(GlobalStateContext);

  const cards = faqSection.faqPreviewCards.map((card) => (
    <>
    <Col key={card.id} xs="12" lg="4">
      <Link to={`/supporto/domande-frequenti#` + card.faqId} onClick={() => dispatch({ type: 'SET:FAQ_ID', payload: { faqId: card.faqId } })} className={classes.linkCard} ariaLabel={card.ariaLabel}>
        <Card className={classes.faqCard}>
          <CardBody>
            <CardTitle tag="h3">{card.title}</CardTitle>
            <CardText dangerouslySetInnerHTML={{ __html: card.text }} />
          </CardBody>
        </Card>
      </Link>
    </Col>
    </>
  ));

  return (
    <>
      <div className={classes.faqPreview}>
        <div className="container px-3">
          <Row>{cards}</Row>
          <div className={classes.btnWrapper}>
            <Link to="/supporto/domande-frequenti" className="btn btn-primary text-uppercase">
              {faqSection.buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};