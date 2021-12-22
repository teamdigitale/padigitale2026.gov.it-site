import React, { useEffect, useContext } from 'react';
import { announce } from '@react-aria/live-announcer';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import content from '../../contents/home-page/home.yml';
import opportunityContent from '../../contents/opportunity-page/opportunity.yml';
import { HeroImageBackground } from '../components/hero/HeroImageBackground';
import { ModalUpdatesButton } from '../components/modal/ModalUpdatesButton';
import { SEO } from '../components/SEO';
import seo from '../../contents/seo.yml';
import { GlobalStateContext } from '../context/globalContext';
import { SupportSection } from './faq/SupportSection';
import { BeneficiariesSection } from './opportunity/BeneficiariesSection';

const { title: seoTitle, description: seoDescription } = seo.opportunityPage;

const { support } = content;
const { heroOpportunity, modalButton } = opportunityContent;

const useStyles = createUseStyles({
  manageSpaces: {
    paddingBottom: '4rem',
  },
});

export const OpportunityPage = (props) => {
  const classes = useStyles();
  const [, dispatch] = useContext(GlobalStateContext);

  useEffect(() => {
    announce('Pagina caricata ' + opportunityContent.name);
  }, []);

  const toggleModal = () => {
    dispatch({
      type: 'SET:TOGGLE_MODAL',
    });
  };

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <div className="sr-only">
        <h2>{opportunityContent.name}</h2>
      </div>
      <HeroImageBackground
        title={heroOpportunity.title}
        body={heroOpportunity.body}
        image="opportunity-hero.webp"
        theme="bg-white flex-column-reverse"
        noButton
      />
      <div className={classes.manageSpaces}>
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
      </div>
      <SupportSection
        supportList={support.cards}
        title={support.title}
        buttonLabel={support.buttonLabel}
        handleToggle={() => {
          dispatch({
            type: 'SET:TOGGLE_MODAL_MESSAGE',
          });
        }}
      />
    </>
  );
};

OpportunityPage.propTypes = {
  filter: PropTypes.any,
};
