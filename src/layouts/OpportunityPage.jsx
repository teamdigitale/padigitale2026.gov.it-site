import React, { useState } from 'react';
import content from '../../contents/home-page/home.yml';
import opportunityContent from '../../contents/opportunity-page/opportunity.yml';
import { BeneficiariesSection } from './opportunity/BeneficiariesSection';
import { SupportSection } from './faq/SupportSection';
import { HeroImageBackground } from '../components/hero/HeroImageBackground';
import { ModalUpdatesButton } from '../components/modal/ModalUpdatesButton';
import { ModalUpdates } from '../components/modal/ModalUpdates';

const { heroDigital, support } = content;
const { heroOpportunity, modalButton } = opportunityContent;

export const OpportunityPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <HeroImageBackground
        title={heroOpportunity.title}
        body={heroOpportunity.body}
        image="opportunity-hero.png"
        theme="bg-white flex-xs-column-reverse"
      />
      <ModalUpdatesButton
        label={modalButton.label}
        buttonLabel={modalButton.buttonLabel}
        handleToggle={toggleModal}
      />
      <BeneficiariesSection />
      <ModalUpdatesButton
        label={modalButton.label}
        buttonLabel={modalButton.buttonLabel}
        handleToggle={toggleModal}
      />
      <SupportSection
        supportList={support.cards}
        title={support.title}
        buttonLabel={support.buttonLabel}
        handleToggle={toggleModal}
      />
      <ModalUpdates initialState={isOpen} handleToggle={toggleModal} />
    </>
  );
};
