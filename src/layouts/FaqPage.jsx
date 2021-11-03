import React, { useState, useEffect } from 'react';
import { Container, Input, Row, Col } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import content from '../../contents/home-page/home.yml';
import faq from '../../contents/faq-page/faq.yml';
import { SideNavigation } from './faq/SideNavigation';
import { QuestionSection } from './faq/QuestionSection';
import { SupportSection } from './faq/SupportSection';
import { HeroSupport } from './support/Hero';
import { SEO } from '../components/SEO';

const useStyles = createUseStyles({
  noResults: {
    textAlign: 'center',
    color: '#33485C',
    margin: '0.833rem 0',
  },
  inputWrap: {
    backgroundImage: 'url("../assets/icon-search.svg")',
  },
});
export const FaqPage = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState('');
  const [filterId, setFilterId] = useState('all');
  const [questions, setQuestions] = useState(faq.questions);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    });
  }, []);

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
        filterId !== 'all'
          ? setQuestions(getQuestionsMobile(faq.questions))
          : setQuestions(faq.questions);
      } else {
        setQuestions(faq.questions);
      }
    }
  };

  function getAccordionsFiltered(question, input) {
    const regexp = new RegExp(input, 'i');
    return question.accordions.filter((accordion) =>
      regexp.test(accordion.title)
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
        inputValue
          ? setQuestions(getNewQuestions(inputValue))
          : setQuestions(faq.questions);
      } else {
        if (
          !getAccordionsFiltered(
            getQuestionsMobile(faq.questions)[0],
            inputValue
          ).length
        ) {
          setQuestions(filterAccordions);
        } else {
          setQuestions(getQuestionsMobile(faq.questions));
        }
      }
    }
  }, [filterId]);

  return (
    <>
      <SEO title="Faq - Prossima PA"/>
      <div className="sr-only">
        <h1>{content.name}</h1>
      </div>
      <HeroSupport title={faq.hero.title} subtitle={faq.hero.subtitle} />
      <div className="docs py-4 py-md-5">
        <Container className="px-3" aria-labelledby="question-section">
          <h3 id="question-section" className="sr-only">
            Sezione domande frequenti
          </h3>
          <Row>
            <Col lg={9} className="offset-lg-3 px-lg-3">
              <Input
                className={classes.inputWrap}
                type="text"
                label="Cerca nelle domande frequenti"
                id="faq-search"
                value={inputValue}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <SideNavigation
                getFilter={setFilterId}
                activeList={questions}
                searchValue={inputValue}
              />
            </Col>
            <Col lg={9} className="px-lg-3">
              {questions.map((question) => (
                <QuestionSection
                  key={question.title}
                  item={question}
                  inputText={inputValue}
                />
              ))}
              {!questions.length && (
                <p className={classes.noResults}>{faq.noResults}</p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <SupportSection
        supportList={faq.support.cards}
        title={faq.support.title}
      />
    </>
  );
};
