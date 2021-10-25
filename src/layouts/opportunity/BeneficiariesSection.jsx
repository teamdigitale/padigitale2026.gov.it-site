import React, { Fragment, useState, useEffect } from 'react';
import { Button, Collapse, Card, CardBody } from 'design-react-kit';
// import { StaticImage } from 'gatsby-plugin-image';
import { AccordionButtonFull } from '../../components/AccordionButtonFull';
import { createUseStyles } from 'react-jss';
import { beneficiaries } from '../../../contents/opportunity-page/opportunity.yml';
import Select from 'react-select'
import classNames from 'classnames';

const useStyles = createUseStyles({
  selectWrapper: {
    composes: "bootstrap-select-wrapper"
  }
});

const defaultOptions = [
  { value: 'pa-centrali', label: 'PA Centrali' },
  { value: 'comuni', label: 'Comuni' },
  { value: 'province', label: 'Province' },
  { value: 'regioni', label: 'Regioni' },
  { value: 'enti-regionali', label: 'Enti regionali' },
];

export const BeneficiariesSection = () => {
  const classes = useStyles();
  const [indexOpen, setIndexOpen] = useState(-1);
  const [selectValue, setSelectValue] = useState(null);
  const handleChange = (selectedOption) => setSelectValue(selectedOption);

  const setActiveAccordion = (i) => {
    if (indexOpen === i) {
      setIndexOpen(-1);
    } else {
      setIndexOpen(i);
    }
  };

  useEffect(() => {
    console.log(beneficiaries);
    
  }, [selectValue]);

  return (
    <>
      <div className="container mt-5">
        <div className={classNames.selectWrapper}>
          <label htmlFor="selectExampleClassic">Etichetta di esempio</label>
          <Select
            menuIsOpen={true}
            id="selectExampleClassic"
            onChange={handleChange}
            options={defaultOptions}
            placeholder="Scegli una opzione"
            aria-label="Scegli una opzione"
          />
        </div>
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
