/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
/* eslint-disable sonarjs/no-identical-functions */
import React, { useState, useEffect, useContext } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GlobalStateContext } from '../../context/globalContext';
import { ExternalLink } from '../../components/ExternalLink';
import ClipboardCopy from '../../components/CopyTextToClipboard';

import faq from '../../../contents/faq-page/faq.yml';

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
      padding: '0.888rem 1.333rem 1.333rem',
      '@media (min-width: 992px)': {
        padding: '1.666rem .9rem 2.666rem',
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
  const isBrowser = () => typeof window !== 'undefined';
  const classes = useStyles();
  const { title, sectionId, sectionTitle, smallTitle } = props.item;
  const { totalQuestions, questionsLink, setQuestionsLink } = props;
  let { accordions } = props.item;
  const chips = props.item.chips;

  accordions = accordions.filter((accordion) => accordion !== '');
  const [indexIsOpen, setIndexIsOpen] = useState(-1);
  const [{ faqId }] = useContext(GlobalStateContext);
  const allQuestions = faq.questions;

  const cleanTitleForSearch = (title) => {
    let titleCleaned = title.replaceAll(' ', '');
    titleCleaned = titleCleaned.replaceAll('"', '');
    titleCleaned = titleCleaned.replaceAll('’', '');
    titleCleaned = titleCleaned.replaceAll('<mark>', '');
    titleCleaned = titleCleaned.replaceAll('</mark>', '');
    titleCleaned = titleCleaned.replace(/[^a-zA-Z0-9 -]/g, '');
    titleCleaned = titleCleaned.replaceAll('.', '');
    titleCleaned = titleCleaned.toLowerCase();
    return titleCleaned;
  };
  const cleanTitle = (title) => {
    let titleCleaned = title.replaceAll(' ', '-');
    titleCleaned = titleCleaned.replaceAll('"', '');
    titleCleaned = titleCleaned.replaceAll('’', '');
    titleCleaned = titleCleaned.replace(/[^a-zA-Z0-9 -]/g, '');
    titleCleaned = titleCleaned.replaceAll('.', '');
    titleCleaned = titleCleaned.substr(0, 50).toLowerCase();
    return titleCleaned;
  };
  const updateIdQuestion = (mainTitle, title) => {
    const newSectionArray = allQuestions.filter(function (el) {
      return el.title === mainTitle;
    });
    const newQuestionArr = newSectionArray[0].accordions.filter(function (ele) {
      return cleanTitleForSearch(ele.title) === cleanTitleForSearch(title);
    });
    const faq = newQuestionArr[0] || {};
    const titleCleaned = newQuestionArr.length > 0 && cleanTitle(faq.title);
    const mainTitleCleaned = newQuestionArr.length > 0 && cleanTitle(mainTitle);
    const newVal = `${mainTitleCleaned}-${titleCleaned}`;
    const x = (questionsLink[mainTitleCleaned] = newVal);
    setQuestionsLink(x);
    return newVal;
  };

  useEffect(() => {
    // if (faqId) {
    //   document.querySelector('#' + faqId).scrollIntoView({
    //     behavior: 'smooth',
    //   });
    //   const isAccordion = (element) => faqId === element.accordionId;
    //   setIndexIsOpen(accordions.findIndex(isAccordion));
    // }
  }, [faqId, accordions]);

  const setChips = (chips) =>
    chips
      .map((chip) => {
        if (chip.title) {
          return `<li><button class="chip" data-id="${chip.id}">${chip.title}<span class="chip-icon-container"><div class="chip-icon"><svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4.5L6 9.5L14.5 1" stroke="#06c"/></svg></div></span></button></li>`;
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
  useEffect(() => {
    isBrowser() &&
      setTimeout(() => {
        let anchor = window.location.hash;
        if (anchor !== '') {
          anchor = anchor.replace('#', '');
          const element = document.getElementById(anchor);
          const bodyElement = document.getElementById(`${anchor}-body`);
          element.querySelector('button').classList.add('collapsed');
          element.querySelector('button').setAttribute('aria-expanded', 'true');
          bodyElement.classList.add('show');
          element !== null && element.scrollIntoView();
          const sectionName = anchor.split('--');
          const sectionObj = allQuestions.filter((section) => cleanTitle(section.title) === sectionName[0])[0] || {};
          if (sectionObj.accordions) {
            sectionObj.accordions.map((sec, i) => {
              cleanTitle(sec.title) === `-${sectionName[1]}` && setIndexIsOpen(i);
            });
          }
        }
      }, 1000);
  }, [allQuestions]);

  return (
    <>
      <section id={sectionId} className={classes.section} aria-labelledby={sectionId + '-headings'}>
        {sectionTitle ? (
          <>
            <h3 className={`${classes.sectionTitle} mb-4`}>{sectionTitle}</h3>
            <h4 id={sectionId + '-headings'} className={`${classes.sectionTitleSmall} mb-4`}>
              {title}
            </h4>
          </>
        ) : smallTitle ? (
          <h4 id={sectionId + '-headings'} className={`${classes.sectionTitleSmall} mb-4`}>
            {title}
          </h4>
        ) : (
          <h3 id={sectionId + '-headings'} className={`${classes.sectionTitle} mb-4`}>
            {title}
          </h3>
        )}
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
              <div
                key={i}
                className={classes.accordionWrapper}
                data-link={updateIdQuestion(title, accordion.title)}
                id={questionsLink[cleanTitle(title)]}
              >
                <AccordionHeader
                  onToggle={() => setIndexIsOpen((state) => (state === i ? -1 : i))}
                  active={i === indexIsOpen}
                  className={classes.accordionTitle}
                  id={accordion.accordionId}
                >
                  <span dangerouslySetInnerHTML={{ __html: accordion.title }}></span>
                </AccordionHeader>
                <AccordionBody
                  active={i === indexIsOpen}
                  className={classes.accordionBody}
                  id={`${questionsLink[cleanTitle(title)]}-body`}
                >
                  <div className="row">
                    <div className="col-lg-10">
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
                    </div>
                    <div className="col-lg-2">
                      <ClipboardCopy
                        copyText={
                          isBrowser()
                            ? `${window.location.origin}${window.location.pathname}#${questionsLink[cleanTitle(title)]}`
                            : '#'
                        }
                      />
                    </div>
                  </div>
                </AccordionBody>
              </div>
            ))}
          </Accordion>
        }
      </section>
    </>
  );
};

QuestionSection.propTypes = {
  item: PropTypes.object.isRequired,
  inputText: PropTypes.string,
  setQuestions: PropTypes.func,
  totalQuestions: PropTypes.array,
  questionsLink: PropTypes.object,
  setQuestionsLink: PropTypes.func,
};
