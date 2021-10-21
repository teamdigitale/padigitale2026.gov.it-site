import React, { Fragment, useState, useEffect } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';
// import { StaticImage } from 'gatsby-plugin-image';
import { createUseStyles } from 'react-jss';
import { ExternalLink } from '../../components/ExternalLink';
// import { questions } from '../../../contents/faq-page/faq.yml';

const useStyles = createUseStyles({
  section: {
    composes: 'question-section',
    '& + .question-section': {
      marginTop: '48px',
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
    },
    
    '&:hover': {
      backgroundColor: 'inherit'
    }
  },
  accordionBody: {
    '& .collapse-body': {
      padding: '30px 48px 48px'
    }
  },
  linkAccordion: {
    marginTop: '40px',
    '& a': {
      fontWeight: 'bold',
      textDecoration: 'none'
    }
  }
});

export const QuestionSection = (props) => {
  const classes = useStyles();
  const { title, description, accordions, sectionId } = props.item;
  const { inputText } = props;
  const { filterId } = props;
  
  const [indexIsOpen, setIndexIsOpen] = useState(-1);
  const [accordionList, setAccordionList] = useState(accordions);

  useEffect(() => {
    if (inputText && inputText.length >= 3) {
      const regexp = new RegExp(inputText, 'i');
      const filterAccordions = accordions.filter((accordion) =>
        regexp.test(accordion.title)
      );
      const newAccordions = filterAccordions.map((acc) => {
        const regex = acc.title.match(regexp);
        if (regex?.length) {
          let text = acc.title.replace(
            /(<mark class="highlight">|<\/mark>)/gim,
            ''
          );
          const newText = text.replace(
            regex,
            '<mark class="highlight">$&</mark>'
          );
          text = newText;
          const obj = { ...acc, title: text };
          return obj;
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
        <p>{description}</p>
        <Accordion background="active">
          {accordionList.map((accordion, i) => (
            <div key={accordion.title} className={classes.accordionWrapper}>
              <AccordionHeader
                onToggle={() =>
                  setIndexIsOpen((state) => (state === i ? -1 : i))
                }
                active={i === indexIsOpen}
                className={classes.accordionTitle}
              >
                <div
                  dangerouslySetInnerHTML={{ __html: accordion.title }}
                ></div>
              </AccordionHeader>
              <AccordionBody active={i === indexIsOpen} className={classes.accordionBody} >
                <div dangerouslySetInnerHTML={{ __html: accordion.content }}></div>
                <div className={classes.linkAccordion}>
                  <ExternalLink
                    linkTo="#"
                    ariaLabel=""
                    className=""
                  >
                    {accordion.linkLabel}
                  </ExternalLink>
                </div>
              </AccordionBody>
            </div>
          ))}
        </Accordion>
      </section>
    </>
  );
};
