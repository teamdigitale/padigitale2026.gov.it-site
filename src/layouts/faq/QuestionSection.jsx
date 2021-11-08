import React, { useState, useEffect } from 'react';
import { Accordion, AccordionHeader, AccordionBody, Button } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
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
    },
  },
  linkAccordion: {
    marginTop: '2.222rem',
    '& a': {
      fontWeight: 'bold',
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
    '&.btn-secondary': {
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'unset',
      color: '#06c',
      padding: '0',
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '1rem',
      fontWeight: 'bold',

      '&:hover': {
        color: '#004080',
      },
      '&:not(:disabled):not(.disabled):active': {
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'unset',
        color: '#004080',
      },
    },
  },
});

export const QuestionSection = (props) => {
  const classes = useStyles();
  const { title, description, accordions, sectionId } = props.item;
  const { handleToggle } = props;
  const { inputText } = props;

  const [indexIsOpen, setIndexIsOpen] = useState(-1);
  const [accordionList, setAccordionList] = useState(accordions);
  // const [sectionVisible, setSectionVisible] = useState(true);

  useEffect(() => {
    if (inputText && inputText.length >= 3) {
      const regexp = new RegExp(inputText, 'i');
      const filterAccordions = accordions.filter((accordion) => regexp.test(accordion.title));
      const newAccordions = filterAccordions.map((acc) => {
        const regex = acc.title.match(regexp);
        if (regex?.length) {
          let text = acc.title.replace(/(<mark>|<\/mark>)/gim, '');
          const newText = text.replace(regex, '<mark>$&</mark>');
          text = newText;
          return { ...acc, title: text };
        }
        return acc;
      });

      setAccordionList(newAccordions);
    } else {
      setAccordionList(accordions);
    }
  }, [inputText]);

  return (
    <>
      <section id={sectionId} className={classes.section}>
        <h3 className={classes.sectionTitle}>{title}</h3>
        <Accordion background="active">
          {accordionList.map((accordion, i) => (
            <div key={accordion.title} className={classes.accordionWrapper}>
              <AccordionHeader
                onToggle={() => setIndexIsOpen((state) => (state === i ? -1 : i))}
                active={i === indexIsOpen}
                className={classes.accordionTitle}
              >
                <div dangerouslySetInnerHTML={{ __html: accordion.title }}></div>
              </AccordionHeader>
              <AccordionBody active={i === indexIsOpen} className={classes.accordionBody}>
                <div dangerouslySetInnerHTML={{ __html: accordion.content }}></div>
                {accordion.link && (
                  <div className={classes.linkAccordion}>
                    <ExternalLink linkTo={accordion.link} ariaLabel={accordion.ariaLabel}>
                      {accordion.linkLabel}
                      <img src="/assets/external-icon.svg" alt="" />
                    </ExternalLink>
                  </div>
                )}
                {accordion.modalBtn ? (
                  <Button className={classes.modalLink} onClick={handleToggle}>
                    {accordion.modalBtn}
                    <img className="ml-2" src="/assets/external-icon.svg" alt="" />
                  </Button>
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
