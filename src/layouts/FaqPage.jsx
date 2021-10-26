import React, { useState, useEffect } from 'react';
import { Container, Input, Row, Col } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import content from '../../contents/home-page/home.yml';
import faq from '../../contents/faq-page/faq.yml';
import { SideNavigation } from './faq/SideNavigation';
import { QuestionSection } from './faq/QuestionSection';
import { SupportSection } from './faq/SupportSection';
import { HeroSupport } from './support/Hero';

const useStyles = createUseStyles({
  noResults: {
    textAlign: 'center',
    color: '#33485C',
    margin: '0.833rem 0',
  },
});
export const FaqPage = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState();
  const [filterId, setFilterId] = useState('all');
  const [questions, setQuestions] = useState(faq.questions);
  const [isMobile, setIsMobile] = useState();
  // const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', () => {
      setIsMobile(window.innerWidth < 992);
    });
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length >= 3) {
      const newQuest = [];
      faq.questions.forEach((question) => {
        if (getAccordionsFiltered(question).length) {
          newQuest.push(question);
        }
      });

      if (isMobile && filterId !== 'all') {
        const filteredQuestions = [];
        newQuest.forEach((question) => {
          if (question.sectionId === filterId) {
            filteredQuestions.push(question);
          }
        });
        setQuestions(filteredQuestions);
      } else {
        setQuestions(newQuest);
      }
    } else {
      if (isMobile) {
        if (filterId !== 'all') {
          const filteredQuestions = [];
          faq.questions.forEach((question) => {
            if (question.sectionId === filterId) {
              filteredQuestions.push(question);
            }
          });
          setQuestions(filteredQuestions);
        } else {
          setQuestions(faq.questions);
        }
      } else {
        setQuestions(faq.questions);
      }
    }
  };

  function getAccordionsFiltered(question) {
    const regexp = new RegExp(event.target.value, 'i');

    return question.accordions.filter((accordion) => regexp.test(accordion.title));
  }

  useEffect(() => {
    if (!isMobile) {
      if (inputValue && inputValue.length >= 3) {
        const newQuest = [];
        faq.questions.forEach((question) => {
          if (getAccordionsFiltered(question).length) {
            newQuest.push(question);
          }
        });
        setQuestions(newQuest);
      } else {
        setQuestions(faq.questions);
      }
    }
  }, [isMobile]);

  useEffect(() => {
    if (filterId) {
      if (filterId === 'all') {
        if (inputValue) {
          const newQuest = [];
          faq.questions.forEach((question) => {
            if (getAccordionsFiltered(question).length) {
              newQuest.push(question);
            }
          });
          setQuestions(newQuest);
        } else {
          setQuestions(faq.questions);
        }
      } else {
        const filteredQuestions = [];
        faq.questions.forEach((question) => {
          if (question.sectionId === filterId) {
            filteredQuestions.push(question);
          }
        });
        const regexp = new RegExp(inputValue, 'i');
        const filterAccordions = filteredQuestions[0].accordions.filter((accordion) => regexp.test(accordion.title));
        if (!filterAccordions.length) {
          setQuestions(filterAccordions);
        } else {
          setQuestions(filteredQuestions);
        }
      }
    }
  }, [filterId]);

  return (
    <>
      <div className="sr-only">
        <h1>{content.name}</h1>
      </div>
      <HeroSupport title={faq.hero.title} subtitle={faq.hero.subtitle} />
      <div className="docs py-4 py-md-5">
        <Container className="px-3">
          <Row>
            <Col lg={9} className="offset-lg-3 px-lg-3">
              <Input
                className={classes.inputWrap}
                type="text"
                label="Cerca nelle domande frequenti"
                id="faq-search"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <SideNavigation getFilter={setFilterId} />
            </Col>
            <Col lg={9} className="px-lg-3">
              {questions.map((question) => (
                <QuestionSection key={question.title} item={question} inputText={inputValue} />
              ))}
              {!questions.length && <p className={classes.noResults}>{faq.noResults}</p>}
            </Col>
          </Row>
        </Container>
      </div>
      <SupportSection supportList={faq.support.cards} title={faq.support.title} />
    </>
  );
};
