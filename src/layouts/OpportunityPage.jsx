import React from 'react';
import { Container, Row, Col, Hero } from 'design-react-kit';
import content from '../../contents/home-page/home.yml';
import { SupportSection } from './faq/SupportSection';

const {
  support,
} = content;

export const OpportunityPage = () => (
  <>
    <SupportSection supportList={support.cards} title={support.title} buttonLabel={support.buttonLabel}/>
  </>
);
