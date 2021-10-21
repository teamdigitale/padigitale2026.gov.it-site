import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardCategory,
  CardTitle,
  CardText,
  CardSignature,
  CardReadMore,
} from 'design-react-kit';
import PropTypes from 'prop-types';
import { DesktopSwiper } from '../DesktopSwiper';

const useStyles = createUseStyles({
  heroImg: {
    position: 'absolute',
    right: '0',
    top: '0',
  },
});
// const carousel = React.createRef();

export const HeroCarousel = ({ content }) => {
  const classes = useStyles();
  const slides = content.map((element) => (
    <Row key={element.id}>
      {element.slide.map((card) => (
        <Col key={card.id} xs="12" lg="4">
          <Card>
            <CardBody>
              <CardCategory>Category</CardCategory>
              <CardTitle tag="h5" className="big-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit…
              </CardTitle>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</CardText>
              <CardSignature>di Federico De Paolis</CardSignature>
              <CardReadMore text="Leggi di più" iconName="it-arrow-right" />
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  ));

  return (
    <>
      <div className="container">
        <DesktopSwiper slides={slides} />
      </div>
    </>
  );
};

HeroCarousel.propTypes = {
  content: PropTypes.arrayOf(PropTypes.node),
};
