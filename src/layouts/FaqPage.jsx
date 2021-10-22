import React, { Fragment, useState, useEffect } from 'react';
import { Container, Input, Row, Col } from 'design-react-kit';
import content from '../../contents/home-page/home.yml';
import faq from '../../contents/faq-page/faq.yml';
import { SideNavigation } from './faq/SideNavigation';
import { QuestionSection } from './faq/QuestionSection';
import { SupportSection } from './faq/SupportSection';
import { HeroSupport } from './support/Hero';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  inputWrap: {
    // backgroundImage: '/static/assets/eu-flag.svg',
  },
});
export const FaqPage = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState();
  const [filterId, setFilterId] = useState();
  const [questions, setQuestions] = useState(faq.questions);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [noResults, setNoResults] = useState(false);

  window.addEventListener('resize', () => {
    setIsMobile(window.innerWidth < 992);
  });

  const handleChange = (event) => {
    setInputValue(event.target.value);
    if (!questions.length) {
      setQuestions(faq.questions);
    }
  };

  const handleEmptySection = (id) => {
    if (inputValue && inputValue.length >= 3) {      
      const filteredQuestions = questions.filter(
        (question) => question.sectionId != id
      );
      console.log(filteredQuestions);
      
      setQuestions(filteredQuestions);
    } else {
      setQuestions(faq.questions);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setQuestions(faq.questions);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setQuestions(faq.questions);
    }
  }, [isMobile]);

  useEffect(() => {
    if (filterId) {
      if (filterId == 'all') {
        setQuestions(faq.questions);
      } else {
        const filteredQuestions = faq.questions.filter(
          (item) => item.sectionId == filterId
        );
        setQuestions(filteredQuestions);
      }
    }
  }, [filterId]);

  return (
    <>
      <div className="sr-only">
        <h1>{content.name}</h1>
      </div>
      <HeroSupport />
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
              {questions.map((question, i) => {
                return (
                  <QuestionSection
                    key={question.title}
                    item={question}
                    inputText={inputValue}
                    onEmptySection={handleEmptySection}
                  />
                );
              })}
              {!questions.length && <p>non ci sono risultati</p>}
            </Col>
          </Row>
        </Container>
      </div>
      <SupportSection supportList={faq.support.cards} />
    </>
  );
};
