import React from 'react';
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
      lineHeight: '1.4',
      fontWeight: '600',
      color: '#004080',
      marginBottom: '0',
      marginTop: '1rem',
      '@media (min-width: 992px)': {
        marginLeft: '1.4rem',
        marginTop: '0'
      },
    }
  },
  linkItem: {
    display: 'block',
    textDecoration: 'none',
    position: 'relative',
    padding: '0.889rem 0',
    borderBottom: '1px solid #E6E9F2',
    '&:last-child': {
      borderBottom: '0'
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
});

export const Beneficiaries = (props) => {
  const classes = useStyle();
  const { title, category, categories } = props.item;

  return (
    <>
      <Container
        tag="section"
        aria-labelledby="involved-actors-title"
        className="px-3 pt-5"
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
              {categories.map((category) => {
                return (
                  <React.Fragment key={category.name}>
                    <Col lg="6" className="px-lg-3">
                      <div className={classes.headCategory}>
                        <img src={category.icon} alt="" />
                        <h3 className="category-title">{category.name}</h3>
                      </div>
                      {category.items.map((item) => 
                        <Link to="/opportunita" key={item.linkLabel} state={{filter: {value: item.filterId, label: item.linkLabel}}} className={classes.linkItem}>
                          <p>{item.linkLabel}</p>
                        </Link>
                      )}
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
