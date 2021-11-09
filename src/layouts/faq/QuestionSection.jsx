import React, { useState, useEffect } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';
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
      '& mark': {
        backgroundColor: '#e3e8f4',
        padding: '0 2px',
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
});

export const QuestionSection = (props) => {
  const classes = useStyles();
  const { title, description, accordions, sectionId } = props.item;
  const { inputText } = props;

  const [indexIsOpen, setIndexIsOpen] = useState(-1);
  const [accordionList, setAccordionList] = useState(accordions);
  // const [sectionVisible, setSectionVisible] = useState(true);

  useEffect(() => {
    if (inputText && inputText.length >= 3) {
      const regexp = new RegExp(inputText, 'i');
      const filterAccordions = accordions.filter(
        (accordion) =>
          regexp.test(accordion.title) || regexp.test(accordion.content) || regexp.test(accordion.linkLabel)
      );
      const newAccordions = filterAccordions.map((acc) => {
        const regex = acc.title.match(regexp);
        const regexContent = acc.content.match(regexp);
        let regexLink;

        if (acc.linkLabel) {
          regexLink = acc.linkLabel.match(regexp);
        } else {
          regexLink = null;
        }

        if (regex?.length || regexContent?.length || regexLink?.length) {
          let text = acc.title.replaceAll(/(<mark>|<\/mark>)/gim, '');
          let contentText = acc.content.replaceAll(/(<mark>|<\/mark>)/gim, '');
          let linkText = acc.linkLabel;

          if (regexLink) {
            linkText = acc.linkLabel.replaceAll(/(<mark>|<\/mark>)/gim, '');
            const newLink = linkText.replaceAll(regexLink, '<mark>$&</mark>');
            linkText = newLink;
          }

          const newText = text.replaceAll(regex, '<mark>$&</mark>');
          const newContent = contentText.replaceAll(regexContent, '<mark>$&</mark>');

          text = newText;
          contentText = newContent;
          return { ...acc, title: text, content: contentText, linkLabel: linkText };
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
                      <span dangerouslySetInnerHTML={{ __html: accordion.linkLabel }}></span>
                      <img src="/assets/external-icon.svg" alt="" />
                    </ExternalLink>
                  </div>
                )}
              </AccordionBody>
            </div>
          ))}
        </Accordion>
      </section>
    </>
  );
};
