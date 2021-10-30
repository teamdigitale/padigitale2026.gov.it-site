import React from 'react';
import content from '../../contents/home-page/home.yml';
import { BeneficiariesSection } from './opportunity/BeneficiariesSection';
import { SupportSection } from './faq/SupportSection';
import { Helmet } from 'react-helmet';

const { support } = content;

export const OpportunityPage = () => (
  <>
    <Helmet>
      <title>Opportunità - Prossima PA</title>
    </Helmet>
    <BeneficiariesSection />
    <SupportSection
      supportList={support.cards}
      title={support.title}
      buttonLabel={support.buttonLabel}
    />
  </>
);
