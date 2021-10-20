import React from 'react';
import { Container, Input, Row, Col } from 'design-react-kit';
import content from '../../contents/home-page/home.yml';
import faq from '../../contents/faq-page/faq.yml';
import { SideNavigation } from './faq/SideNavigation';
import { QuestionSection } from './faq/QuestionSection';
import { SupportSection } from './faq/SupportSection';
import { useState } from 'react';

export const FaqPage = () => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="sr-only">
        <h1>{content.name}</h1>
      </div>
      <div className="docs layout-example">
        <Container className="px-3">
          <Row className="px-3">
            <Col md={9} className="offset-md-3 ">
              <Input
                type="text"
                label="Campo di tipo testuale"
                id="exampleInputText"
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Row>
            <Col md={3} className="px-3">
              <SideNavigation />
            </Col>
            <Col md={9} className="px-3">
              {faq.questions.map((question, i) => {
                return (
                  <QuestionSection
                    key={i}
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
