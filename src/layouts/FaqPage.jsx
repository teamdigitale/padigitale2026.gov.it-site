/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect, useContext } from 'react';
import { Container, Input, Row, Col } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import faq from '../../contents/faq-page/faq.yml';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import { GlobalStateContext } from '../context/globalContext';
import content from '../../contents/faq-page/faq.yml';
import { SideNavigation } from './faq/SideNavigation';
import { QuestionSection } from './faq/QuestionSection';
import { SupportSection } from './faq/SupportSection';
import { HeroSupport } from './support/Hero';

const { title: seoTitle, description: seoDescription } = seo.faqPage;

const useStyles = createUseStyles({
  noResults: {
    textAlign: 'center',
    color: '#33485C',
    margin: '0.833rem 0',
  },
  inputContainer: {
    position: 'relative',
    '& .reset-btn': {
      background: 'transparent',
      border: '0',
      position: 'absolute',
      top: '15px',
      right: '10px',
      backgroundImage: 'url("../assets/close-black.svg")',
      backgroundRepeat: 'no-repeat',
      width: '1.1rem',
      height: '1.1rem',
    },
  },
  inputWrap: {
    backgroundImage: 'url("../assets/icon-search.svg")',
    '&:focus': {
      outline: '2px solid #ff9900',
    },
  },
});

// eslint-disable-next-line sonarjs/cognitive-complexity
export const FaqPage = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [filterId, setFilterId] = useState('all');
  const [questions, setQuestions] = useState(faq.questions);
  const [isMobile, setIsMobile] = useState();
  const [questNum, setquestNum] = useState(countInitQuestions());
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    });
    announce('Pagina caricata ' + faq.name);
  }, []);

  function countInitQuestions() {
    let count = 0;
    faq.questions.forEach((element) => {
      count += element.accordions.length;
    });
    return count;
  }

  function countQuestions() {
    let count = 0;
    const questionList = document.querySelectorAll('#id-list-faq section');
    if (questionList) {
      questionList.forEach((element) => {
        const list = element.querySelector('.collapse-div');
        if (list) {
          count += list.childElementCount;
        }
      });
    }
    return count;
  }

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length >= 3) {
      if (isMobile && filterId !== 'all') {
        setQuestions(getQuestionsMobile(getNewQuestions(event.target.value)));
      } else {
        setQuestions(getNewQuestions(event.target.value));
      }
    } else {
      if (isMobile) {
        filterId !== 'all' ? setQuestions(getQuestionsMobile(faq.questions)) : setQuestions(faq.questions);
      } else {
        setQuestions(faq.questions);
      }
    }
    setquestNum(countQuestions());
    if (questions.length === 0) {
      announce('Nessun risultato');
    } else {
      announce('Numero di FAQ in pagina aggiornato');
    }
  };

  function getAccordionsFiltered(question, input) {
    const regexp = new RegExp(input, 'i');
    return question.accordions.filter(
      (accordion) => regexp.test(accordion.title) || regexp.test(accordion.content) || regexp.test(accordion.linkLabel)
    );
  }

  function getNewQuestions(inputValue) {
    const newQuest = [];
    faq.questions.forEach((question) => {
      if (getAccordionsFiltered(question, inputValue).length) {
        newQuest.push(question);
      }
    });
    return newQuest;
  }

  function getQuestionsMobile(items) {
    const filteredQuestions = [];
    items.forEach((question) => {
      if (question.sectionId === filterId) {
        filteredQuestions.push(question);
      }
    });
    return filteredQuestions;
  }

  useEffect(() => {
    if (!isMobile) {
      setInputValue('');
      setQuestions(faq.questions);
    }
  }, [isMobile]);

  useEffect(() => {
    if (filterId) {
      if (filterId === 'all') {
        inputValue ? setQuestions(getNewQuestions(inputValue)) : setQuestions(faq.questions);
      } else {
        if (!getAccordionsFiltered(getQuestionsMobile(faq.questions)[0], inputValue).length) {
          setQuestions(filterAccordions);
        } else {
          setQuestions(getQuestionsMobile(faq.questions));
        }
      }
    }
  }, [filterId, getNewQuestions, getQuestionsMobile, inputValue]);

  const resetInput = () => {
    setInputValue('');
    setQuestions(faq.questions);
  };

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <div className="sr-only">
        <h2>{faq.name}</h2>
      </div>
      <HeroSupport title={faq.hero.title} subtitle={faq.hero.subtitle} />
      <div className="docs py-4 py-md-5">
        <Container className="px-3">
          <h3 id="question-section" className="sr-only">
            Sezione domande frequenti
          </h3>
          <Row>
            <Col lg={9} className="offset-lg-3 px-lg-3">
              <div role="search" className={classes.inputContainer} aria-label="Nelle domande frequenti">
                <div id="searchbox-desk" className="sr-only">
                  Ad ogni digitazione il numero di domande frequenti presenti in pagina verrà aggiornato.
                </div>
                <Input
                  className={inputValue.length > 0 ? '' : classes.inputWrap}
                  type="text"
                  label="Cerca nelle domande frequenti"
                  id="faq-search"
                  role="searchbox"
                  aria-describedby="searchbox-desk"
                  aria-controls="id-list-faq"
                  onChange={handleChange}
                />
                {inputValue.length > 0 && (
                  <button className="reset-btn" onClick={resetInput}>
                    <span className="sr-only">Il campo svuota l'input</span>
                  </button>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <SideNavigation
                getFilter={setFilterId}
                activeList={questions}
                searchValue={inputValue}
                list={content.sidebar}
              />
            </Col>
            <Col
              lg={9}
              className="px-lg-3"
              id="id-list-faq"
              role="region"
              aria-label="Lista domande frequenti"
              aria-describedby="numberfaq"
            >
              <span className="sr-only" id="numberfaq" aria-live="assertive">
                Numero faq filtrate {questNum}
              </span>
              {questions.map((question) => (
                <QuestionSection
                  key={question.title}
                  item={question}
                  inputText={inputValue}
                  handleToggle={() => {
                    dispatch({ type: 'SET:TOGGLE_MODAL' });
                  }}
                />
              ))}
              {!questions.length && (
                <p className={classes.noResults} role="alert">
                  {faq.noResults}
                </p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <SupportSection supportList={faq.support.cards} title={faq.support.title} />
    </>
  );
};
