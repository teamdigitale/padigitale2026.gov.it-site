import React, { useState } from 'react';
import content from '../../contents/home-page/home.yml';
import opportunityContent from '../../contents/opportunity-page/opportunity.yml';
import { BeneficiariesSection } from './opportunity/BeneficiariesSection';
import { SupportSection } from './faq/SupportSection';
import { HeroImageBackground } from '../components/hero/HeroImageBackground';
import { ModalUpdatesButton } from '../components/modal/ModalUpdatesButton';
import { ModalUpdates } from '../components/modal/ModalUpdates';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';

const {title: seoTitle, description: seoDescription} = seo.opportunityPage;

const { heroDigital, support } = content;
const { heroOpportunity, modalButton } = opportunityContent;

export const OpportunityPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SEO title={seoTitle} description={seoDescription}/>
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
        hasTitle={true}
      />
      <BeneficiariesSection externalFilter={props.filter} />
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
