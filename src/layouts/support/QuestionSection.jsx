/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
/* eslint-disable sonarjs/no-identical-functions */
import React, { useState, useEffect, useContext } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { GlobalStateContext } from '../../context/globalContext';
import { ExternalLink } from '../../components/ExternalLink';

const useStyles = createUseStyles({
  section: {
    composes: 'question-section',
    '& + .question-section': {
      marginTop: '2.666rem',
    },
  },
  sectionTitle: {
    fontSize: '1.555rem',
    fontWeight: '600',
    letterSpacing: '-0.2px',
    lineHeight: '1.4',
    marginBottom: '0',
  },
  sectionTitleSmall: {
    fontSize: '1.222rem',
  },
  accordionWrapper: {
    '& > .collapse-header [data-toggle=collapse]': {
      fontWeight: 'normal',
      padding: '1rem',
      '&:focus': {
        outline: '0',
      },
      '&.collapsed': {
        backgroundColor: '#0066CC',
        color: '#fff',
      },
      '& mark': {
        backgroundColor: '#e3e8f4',
        padding: '0 2px',
      },
    },

    '&:hover': {
      backgroundColor: 'inherit',
    },
  },
  accordionBody: {
    '& .collapse-body': {
      padding: '0 1.333rem 0',
      '@media (min-width: 992px)': {
        padding: '0 2.666rem 0',
      },
      '& mark': {
        backgroundColor: '#e3e8f4',
        padding: '0 2px',
      },
      '& a': {
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
  linkAccordion: {
    marginTop: '1rem',
    marginBottom: '1rem',
    '& a': {
      fontWeight: '600',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',

      '& img': {
        marginLeft: '0.444rem',
      },
    },
  },
  modalLink: {
    marginTop: '2.222rem',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'block',
  },
  chipsList: {
    listStyleType: 'none',
    display: 'flex',
    padding: '0',
    flexWrap: 'wrap',
    '& li': {
      marginTop: '10px',
      marginRight: '16px',
      '&:last-child': {
        marginRight: '0',
      },
    },
    '& .chip': {
      height: '30px',
      padding: '3px 20px',
      borderRadius: '30px',
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      border: '1px solid #dfe4f2',
      color: '#33485C',
      fontSize: '0.889rem',
      fontWeight: '700',
      transition: '.2s ease',
      '&:hover': {
        color: '#fff',
        background: '#06c',
      },
      '&.active': {
        border: '1px solid #06c',
        padding: '3px 20px',
        background: '#06c',
        color: '#fff',
        transition: '.2s ease',
      },
    },
    '& .chip-icon': {
      transform: 'scale(0)',
      transformOrigin: 'center',
      transition: 'transform .4s ease',
      background: '#fff',
      width: '0',
      height: '0',
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '& .chip-icon.active': {
      transform: 'scale(1)',
      transformOrigin: 'center',
      marginLeft: '20px',
      marginRight: '-10px',
      transition: 'transform .4s ease',
      height: '23px',
      width: '23px',
    },
  },
  filter: {
    fontSize: '1rem',
    marginBottom: '30px',
    marginTop: '22px',
    display: 'block',
    '& .question-selected': {
      fontWeight: '700',
    },
  },
});

export const QuestionSection = (props) => {
  const classes = useStyles();
  const { title, description, sectionId, key } = props.item;
  const { totalQuestions } = props;
  let { accordions } = props.item;
  const chips = props.item.chips;

  accordions = accordions.filter((accordion) => accordion !== '');

  const [indexIsOpen, setIndexIsOpen] = useState(-1);
  const [{ faqId }] = useContext(GlobalStateContext);

  useEffect(() => {
    if (faqId) {
      document.querySelector('#' + faqId).scrollIntoView({
        behavior: 'smooth',
      });
      const isAccordion = (element) => faqId === element.accordionId;
      setIndexIsOpen(accordions.findIndex(isAccordion));
    }
  }, [faqId, accordions]);

  const setChips = (chips) =>
    chips
      .map((chip) => {
        if (chip.title) {
          return `<li key="${chip.id}"><button class="chip" data-id="${chip.id}">${chip.title}<span class="chip-icon-container"><div class="chip-icon"><svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.5L6 9.5L14.5 1" stroke="#06c"/></svg></div></span></button></li>`;
        }
      })
      .join('');

  const setTotalQuestions = (id) => {
    const accordion = totalQuestions.find((question) => {
      if (question.sectionId === id) {
        return question;
      }
    });
    return accordion.accordions.length;
  };

  return (
    <div key={key}>
      <section id={sectionId} className={classes.section} aria-labelledby={sectionId + '-headings'}>
        <>
          <h3 id={sectionId + '-headings'} className={`${classes.sectionTitle} mb-4`}>
            {title}
          </h3>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </>
        {chips ? (
          <div className="tags-container">
            <ul
              data-measure={sectionId}
              className={`chips-list ${classes.chipsList}`}
              dangerouslySetInnerHTML={{ __html: setChips(chips) }}
            ></ul>
            <span className={classes.filter}>
              Totale domande frequenti selezionate:
              <span>
                <span className="question-selected"> {accordions.length}</span>/{setTotalQuestions(sectionId)}
              </span>
            </span>
          </div>
        ) : (
          ''
        )}
        {
          <Accordion>
            {accordions.map((accordion, i) => (
              <div key={accordion.sectionId} className={classes.accordionWrapper}>
                <AccordionHeader
                  onToggle={() => setIndexIsOpen((state) => (state === i ? -1 : i))}
                  active={i === indexIsOpen}
                  className={classes.accordionTitle}
                  id={accordion.accordionId}
                >
                  <span dangerouslySetInnerHTML={{ __html: accordion.title }}></span>
                </AccordionHeader>
                <AccordionBody active={i === indexIsOpen} className={classes.accordionBody}>
                  {accordion.content && <div dangerouslySetInnerHTML={{ __html: accordion.content }}></div>}
                  {accordion.accordionContent &&
                    accordion.accordionContent.length > 0 &&
                    accordion.accordionContent.map((accordionItem) => (
                      <div key={accordionItem.linkLabel}>
                        <div className={classes.linkAccordion}>
                          <ExternalLink linkTo={accordionItem.link} ariaLabel={accordionItem.ariaLabel}>
                            <span dangerouslySetInnerHTML={{ __html: accordionItem.linkLabel }}></span>
                            <img src="/assets/external-icon.svg" alt="" />
                          </ExternalLink>
                        </div>
                      </div>
                    ))}
                </AccordionBody>
              </div>
            ))}
          </Accordion>
        }
      </section>
    </div>
  );
};

QuestionSection.propTypes = {
  item: PropTypes.object.isRequired,
  inputText: PropTypes.string,
  setQuestions: PropTypes.func,
  totalQuestions: PropTypes.object,
};
