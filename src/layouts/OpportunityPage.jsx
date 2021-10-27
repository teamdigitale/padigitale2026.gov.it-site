import React from 'react';
import content from '../../contents/home-page/home.yml';
import { BeneficiariesSection } from './opportunity/BeneficiariesSection';
import { SupportSection } from './faq/SupportSection';

const {
  support,
} = content;

export const OpportunityPage = (props) => {
  return (
  <>
    <BeneficiariesSection externalFilter={props.filter}/>
    <SupportSection supportList={support.cards} title={support.title} buttonLabel={support.buttonLabel}/>
  </>
  );
};
