import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col } from 'design-react-kit';
import { Link } from 'gatsby';

const useStyle = createUseStyles({
  involvedSection: {
    backgroundColor: '#ffffff',
    padding: '4rem 0',
  },
  category: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#33485C',
    textTransform: 'uppercase',
    marginBottom: '0.556rem',
    '@media (min-width: 992px)': {
      fontSize: '0.889rem',
    },
  },
  title: {
    fontWeight: '700',
    fontSize: '1.5rem',
    color: '#33485C',
    lineHeight: '1.36',
    marginBottom: '2.5rem',
    '@media (min-width: 992px)': {
      fontSize: '1.778rem',
      lineHeight: '1.4',
      marginBottom: '3.111rem',
    },
  },
  linkItem: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    '& img': {
      marginRight: '1.555rem',
    },
    '& span': {
      fontSize: '1.333rem',
      fontWeight: '600',
      lineHeight: '1',
    },
  },
});

export const Beneficiaries = (props) => {
  const classes = useStyle();
  const { title, category, items } = props.item;

  return (
    <>
      <Container
        tag="section"
        aria-labelledby="involved-actors-title"
        className="px-3"
      >
        <Row>
          <Col className="offset-lg-1">
            <Row>
              <Col xs="12" lg="5">
                <p className={classes.category}>{category}</p>
                <h2 className={classes.title} id="involved-actors-title">
                  {title}
                </h2>
              </Col>
            </Row>
            <Row>
              {items.map((item) => {
                return (
                  <React.Fragment key={item.filterId}>
                    <Col md="6" lg="4">
                      <Link to="/opportunita" state={{filter: item.filterId}} className={classes.linkItem}>
                        <img src={item.img} alt="" />
                        <span>{item.linkLabel}</span>
                      </Link>
                    </Col>
                  </React.Fragment>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
