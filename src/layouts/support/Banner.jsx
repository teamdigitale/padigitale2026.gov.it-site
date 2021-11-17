/* eslint-disable prettier/prettier */
import React from 'react';
import { createUseStyles } from 'react-jss';
import { Row, Col } from 'design-react-kit';

const useStyle = createUseStyles({
  supportBanner: {
    backgroundColor: '#F0F6FC',
    padding: '3rem 0 3rem 0',
    '@media (min-width: 992px)': {
      padding: '3rem 0 3rem 2.667rem'
    },
    '& .text': {
      color: '#33485C',
      '& strong': {
        '& a': {
          color: '#33485C',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }
      },
    },
  },
});

export const SupportBanner = ({ text }) => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <div className={classes.supportBanner}>
        <section className="container px-3">
          <Row>
            <Col xs="12" lg="5" >
              <span className="text" dangerouslySetInnerHTML={{ __html: text }}/>
            </Col>
          </Row>
        </section>
      </div>
    </React.Fragment>
  );
};
