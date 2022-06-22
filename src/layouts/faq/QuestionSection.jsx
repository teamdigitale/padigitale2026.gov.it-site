import React, { useState, useEffect, useContext } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
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
      padding: '0.888rem 1.333rem 1.333rem',
      '@media (min-width: 992px)': {
        padding: '1.666rem 2.666rem 2.666rem',
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
    marginTop: '2.222rem',
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
});

export const QuestionSection = (props) => {
  const classes = useStyles();
  const { title, accordions, sectionId } = props.item;
  const chips = props.item.chips;

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

  const setChips = (chips) => {
    console.log(chips);
  };

  return (
    <>
      <section id={sectionId} className={classes.section} aria-labelledby={sectionId + '-headings'}>
        <h3 id={sectionId + '-headings'} className={`${classes.sectionTitle} mb-4`}>
          {title}
        </h3>
        {chips ? setChips(chips) : ''}
        <Accordion>
          {accordions.map((accordion, i) => (
            <div key={accordion.title} className={classes.accordionWrapper}>
              <AccordionHeader
                onToggle={() => setIndexIsOpen((state) => (state === i ? -1 : i))}
                active={i === indexIsOpen}
                className={classes.accordionTitle}
                id={accordion.accordionId}
              >
                <span dangerouslySetInnerHTML={{ __html: accordion.title }}></span>
              </AccordionHeader>
              <AccordionBody active={i === indexIsOpen} className={classes.accordionBody}>
                <div dangerouslySetInnerHTML={{ __html: accordion.content }}></div>
                {accordion.link && (
                  <div className={classes.linkAccordion}>
                    <ExternalLink linkTo={accordion.link} ariaLabel={accordion.ariaLabel}>
                      <span dangerouslySetInnerHTML={{ __html: accordion.linkLabel }}></span>
                      <img src="/assets/external-icon.svg" alt="" />
                    </ExternalLink>
                  </div>
                )}
                {accordion.updates ? (
                  <Link className={classes.modalLink} aria-label={accordion.ariaLabel} to="/ricevi-aggiornamenti">
                    {accordion.updates}
                  </Link>
                ) : (
                  ''
                )}
                {accordion.assistance ? (
                  <Link className={classes.modalLink} aria-label={accordion.ariaLabel} to="/supporto/assistenza">
                    {accordion.assistance}
                  </Link>
                ) : (
                  ''
                )}
              </AccordionBody>
            </div>
          ))}
        </Accordion>
      </section>
    </>
  );
};

QuestionSection.propTypes = {
  item: PropTypes.object.isRequired,
  inputText: PropTypes.string,
  setQuestions: PropTypes.func,
};
