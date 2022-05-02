/* eslint-disable react/jsx-key */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col } from 'design-react-kit';
import PropTypes from 'prop-types';

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
    marginBottom: '0',
    '@media (min-width: 992px)': {
      fontSize: '1.778rem',
      lineHeight: '1.4',
    },
  },
  headCategory: {
    marginTop: '2rem',
    marginBottom: '0.444rem',
    '@media (min-width: 992px)': {
      marginTop: '3rem',
      display: 'flex',
      alignItems: 'flex-end',
    },
    '& .category-title': {
      fontSize: '1.556rem',
      letterSpacing: '-0.26px',
      lineHeight: '1.2',
      fontWeight: '600',
      color: '#004080',
      marginBottom: '0',
      marginTop: '1rem',
      '@media (min-width: 992px)': {
        marginLeft: '1.4rem',
        marginTop: '0',
      },
    },
  },
  linkItem: {
    display: 'block',
    textDecoration: 'none',
    position: 'relative',
    padding: '0.889rem 0',
    borderBottom: '1px solid #E6E9F2',
    '&:last-child': {
      borderBottom: '0',
    },
    '& p': {
      fontSize: '1.25rem',
      fontWeight: '600',
      lineHeight: '1',
      marginBottom: '0',
      '@media (min-width: 768px)': {
        fontSize: '1.111rem',
      },
    },
  },
  beneficiariesList: {
    paddingLeft: '0',
    '& li': {
      listStyleType: 'none',
    },
  },
  keypointsContainer: {
    paddingTop: '5.625rem',
    paddingBottom: '5.625rem',
    '@media (max-width: 991px)': {
      paddingTop: '3.75rem',
      paddingBottom: '3.75rem',
    },
    '@media (min-width: 768px) and (max-width: 991px)': {
      paddingTop: '3.75rem',
      paddingBottom: 'calc(3.75rem - 48px)',
    },
  },
  iconContainer: {
    marginBottom: '0.556rem',
    '& img': {
      height: '58px',
    },
  },
  keypointTitle: {
    color: '#33485C',
    fontWeight: '600',
    fontSize: '1.111rem',
    marginBottom: '0.556rem',
  },
  keypointDesc: {
    color: '#33485C',
    lineHeight: '25px',
    '@media(min-width: 992px)': {
      maxWidth: '260px',
    },
  },
  keypointImage: {
    height: '6.278rem',
  },
  keypointsBg: {
    backgroundColor: '#F0F6FC',
  },
  cardTransparent: {
    opacity: '0.5',
  },
});

export const Keypoints = (props) => {
  const classes = useStyle();
  const { title, category, list } = props.item;

  return (
    <>
      <div className={classes.keypointsBg}>
        <Container tag="section" aria-labelledby="keypoints-title" className={`${classes.keypointsContainer} px-3`}>
          <Row>
            <Col>
              <Row>
                <Col xs="12" lg="5" id="keypoints" className="mb-5">
                  <h2 className={classes.category}>{category}</h2>
                  <h3 className={classes.title} id="keypoints-title">
                    {title}
                  </h3>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            {list
              ? list.map((listItem, index, array) => (
                  <Col
                    xs="12"
                    md="6"
                    lg="3"
                    className={`${index + 1 === array.length ? 'mb-lg-0' : 'mb-5 mb-lg-0'} ${
                      listItem.transparent === true ? classes.cardTransparent : ''
                    } ${index <= array.length - 4 ? 'mb-lg-5' : ''}
                    `}
                  >
                    <div className={classes.iconContainer}>
                      <img src={`/assets/${listItem.image}`} alt=""></img>
                    </div>
                    <h4 className={classes.keypointTitle}>{listItem.title}</h4>
                    <div className={classes.keypointDesc}>{listItem.desc}</div>
                  </Col>
                ))
              : ''}
          </Row>
        </Container>
      </div>
    </>
  );
};

Keypoints.propTypes = {
  item: PropTypes.object,
};
