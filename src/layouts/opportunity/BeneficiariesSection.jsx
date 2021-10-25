import React, { Fragment, useState } from 'react';
import { Button, Collapse, Card, CardBody } from 'design-react-kit';
// import { StaticImage } from 'gatsby-plugin-image';
import { AccordionButtonFull } from '../../components/AccordionButtonFull';
import { createUseStyles } from 'react-jss';
import { beneficiaries } from '../../../contents/opportunity-page/opportunity.yml';

// const useStyles = createUseStyles({

// });


export const BeneficiariesSection = () => {
  // const classes = useStyles();
  const [indexOpen, setIndexOpen] = useState(-1);

  const setActiveAccordion = (i) => {
    if (indexOpen === i) {
      setIndexOpen(-1);
    } else {
      setIndexOpen(i);
    }
  };

  return (
    <>
      <div className="container mt-5">
        {beneficiaries.map((item, i) => {
          return (
            <AccordionButtonFull
              data={item}
              handleToggle={setActiveAccordion}
              id={i}
              active={indexOpen}
            />
          );
        })}
      </div>
    </>
  );
};
