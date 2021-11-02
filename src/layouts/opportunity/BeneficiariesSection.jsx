import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Select from 'react-select';
import { AccordionButtonFull } from '../../components/AccordionButtonFull';
import { beneficiaries, selectBeneficiaries } from '../../../contents/opportunity-page/opportunity.yml';

const useStyles = createUseStyles({
  selectWrapper: {
    composes: 'bootstrap-select-wrapper',
    marginBottom: '2.667rem',
    '& > label': {
      position: 'unset',
      transform: 'unset',
      lineHeight: '1.4',
      fontSize: '0.778rem',
      marginBottom: '0.444rem',
      display: 'inline-block',
      textTransform: 'uppercase',
      fontWeight: 'normal',
    },
    '& [class$="-container"]': {
      maxWidth: '410px',
      '&.is-open': {
        '& [class$="-control"]': {
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
        },
      },
      '&.not-all': {
        '& [class$="-control"]': {
          backgroundColor: '#0066CC',
        },
      },
    },
    '& [class$="-control"]': {
      cursor: 'pointer',
      backgroundColor: '#5D6F81',
      maxHeight: '48px',
      border: '0',
      padding: '0.555rem 1.333rem',
      '& [class$="-singleValue"]': {
        color: '#fff',
        fontWeight: 'bold',
      },
      '& [class$="-indicatorSeparator"]': {
        display: 'none',
      },
      '& [class$="-indicatorContainer"]': {
        padding: '0',
      },
      '& svg': {
        color: '#fff',
      },
      '& [class$="-ValueContainer"]': {
        padding: '0',
      },
    },
    '& [class$="-menu"]': {
      marginTop: '0',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
      boxShadow: '0 2px 20px 0 rgb(0 0 0 / 10%)',
      '& [class$="-option"]': {
        cursor: 'pointer',
        backgroundColor: '#fff',
        color: '#0066CC',
        fontSize: '0.889rem',
        lineHeight: '1.5',
        '&:hover': {
          fontWeight: 'bold'
        }
      },
    },
  },
});

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    fontWeight: state.isSelected ? 'bold' : 'normal',
  }),
};

export const BeneficiariesSection = (props) => {
  const classes = useStyles();
  const [accordions, setAccordions] = useState(beneficiaries);
  const [indexOpen, setIndexOpen] = useState(-1);
  const [selectValue, setSelectValue] = useState(null);
  const [initialSelectValue, setInitialSelectValue] = useState(selectBeneficiaries[0]);  
  const [isOpen, setIsOpen] = useState(false);
  const [filterIsAll, setFilterIsAll] = useState(true);
  const handleChange = (selectedOption) => setSelectValue(selectedOption);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const setActiveAccordion = (i) => {
    indexOpen === i ? setIndexOpen(-1) : setIndexOpen(i);
  };

  useEffect(() => {
    if(props.externalFilter) {      
      setInitialSelectValue(props.externalFilter);
      setSelectValue(props.externalFilter);      
      document.querySelector('#filter-beneficiaries').scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [props.externalFilter]);

  useEffect(() => {
    if (selectValue != null) {
      if (selectValue.value !== 'tutti') {
        const filteredList = [];
        for (let index = 0; index < beneficiaries.length; index++) {
          const element = beneficiaries[index].tags.filter((tag) => tag.value === selectValue.value);
          if (element.length) {
            filteredList.push(beneficiaries[index]);
          }
        }

        setAccordions(filteredList);
        setFilterIsAll(false);
      } else {
        setFilterIsAll(true);
        setAccordions(beneficiaries);
      }
    }
  }, [selectValue]);

  return (
    <>
      <div className="container mt-5 px-3" id="filter-beneficiaries">
        <div className={classes.selectWrapper}>
          <label htmlFor="beneficiaries">Beneficiari</label>
          <Select
            styles={customStyles}
            isSearchable={false}
            value={selectValue || initialSelectValue}
            id="beneficiaries"
            onChange={handleChange}
            onMenuOpen={handleOpen}
            onMenuClose={handleClose}
            options={selectBeneficiaries}
            placeholder={false}
            className={(isOpen ? 'is-open' : '', filterIsAll ? '' : 'not-all')}
            aria-label="Scegli una opzione"
          />
        </div>
        {accordions.map((item, i) => (
          <React.Fragment key={item.title}>
            <AccordionButtonFull
              data={item}
              handleToggle={setActiveAccordion}
              id={i}
              active={indexOpen}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
