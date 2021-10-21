import React, { Fragment, useState, useEffect } from 'react';
import { Container, Input, Row, Col } from 'design-react-kit';
import content from '../../contents/home-page/home.yml';
import faq from '../../contents/faq-page/faq.yml';
import { SideNavigation } from './faq/SideNavigation';
import { QuestionSection } from './faq/QuestionSection';
import { SupportSection } from './faq/SupportSection';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  inputWrap: {
    // backgroundImage: '/static/assets/eu-flag.svg',
  },
});
export const FaqPage = () => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState();
  const [filterId, setFilterId] = useState('all');
  const [questions, setQuestions] = useState(faq.questions);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

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
                  />
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
      <SupportSection supportList={faq.support.cards} />
    </>
  );
};
