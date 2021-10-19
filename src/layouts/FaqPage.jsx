import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'design-react-kit';
import content from '../../contents/home-page/home.yml';
import faq from '../../contents/faq-page/faq.yml';
import { SideNavigation } from './faq/SideNavigation';
import { QuestionSection } from './faq/QuestionSection';
import { SupportSection } from './faq/SupportSection';

const faqSection = faq.questions.map((question, i) => {
  return <QuestionSection key={i} item={question}/>
});

export const FaqPage = () => (
  <>
    <div className="sr-only">
      <h1>{content.name}</h1>
    </div>
    <div className="docs layout-example">
      <Container>
        <Row>
          <Col xs={3}>
            <SideNavigation />
          </Col>
          <Col xs={9}>
            {faqSection}
          </Col>
        </Row>
      </Container>
    </div>
    <SupportSection supportList={faq.support.cards}/>
  </>
);
