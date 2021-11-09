import React, { useState, useEffect, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import Select from 'react-select';
import { Section } from 'design-react-kit';
import { AccordionButtonFull } from '../../components/AccordionButtonFull';
import {
  beneficiaries,
  selectBeneficiaries,
} from '../../../contents/opportunity-page/opportunity.yml';
import { GlobalStateContext } from '../../context/globalContext';

const useStyles = createUseStyles({
  section: {
    padding: '0'
  },
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
          fontWeight: 'bold',
        },
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
  const [initialSelectValue, setInitialSelectValue] = useState(
    selectBeneficiaries[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const [filterIsAll, setFilterIsAll] = useState(true);
  const handleChange = (selectedOption) => setSelectValue(selectedOption);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [{sectionId}] = useContext(GlobalStateContext)

  const setActiveAccordion = (i) => {
    indexOpen === i ? setIndexOpen(-1) : setIndexOpen(i);
  };

  useEffect(() => {
    if (sectionId) {
      document.querySelector('#' + sectionId).scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [sectionId]);

  useEffect(() => {
    if (props.externalFilter) {
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
          const element = beneficiaries[index].tags.filter(
            (tag) => tag.value === selectValue.value
          );
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
      <Section className={classes.section} aria-labelledby="lista-misure-hader">
        <h3 className="sr-only" id="lista-misure-hader">
          Elenco opportunità
        </h3>
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
              className={
                (isOpen ? 'is-open' : '', filterIsAll ? '' : 'not-all')
              }
              aria-label="Scegli una opzione"
            />
          </div>
          <div role="list">
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
        </div>
      </Section>
    </>
  );
};
