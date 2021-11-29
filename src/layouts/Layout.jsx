import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import '@fontsource/titillium-web/latin.css';
import '@fontsource/lora/latin.css';
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import { createUseStyles } from 'react-jss';
import { SEO } from '../components/SEO';
import labels from '../../contents/labels.yml';
import { ModalUpdates } from '../components/modal/ModalUpdates';
import { GlobalStateContextProvider } from '../context/globalContext';
import { ModalMessage } from '../components/modal/ModalMessage';
import { Totop } from '../components/totop';
import { Header } from './Header';
import { Footer } from './Footer';
import { ModalMessage } from '../components/modal/ModalMessage';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const { goToMainContent, goToFooter } = labels;

const useStyles = createUseStyles({
  '@global': {
    ':focus:not(:focus-visible)': {
      borderColor: 'initial',
      boxShadow: 'none',
    },
    // override text-primary color
    '.text-primary': {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      color: ['var(--primary)', '!important'],
    },
    '.text-info': {
      color: ['#33485C', '!important'],
    },
    '.text-info-title': {
      color: ['#455A64', '!important'],
    },
    '.focus-a11y-contrast:focus': {
      border: '2px solid #ff9900', // This is used for a11y high contrast compliance
    },
    body: {
      '& .grecaptcha-badge': {
        display: 'none !important',
      },
    },
  },
});

const query = graphql`
  query {
    site {
      siteMetadata {
        captchaKey
      }
    }
  }
`;

export const Layout = ({ children }) => {
  useStyles();
  const {
    site: {
      siteMetadata: { captchaKey },
    },
  } = useStaticQuery(query);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const [modalIsOpenMessage, setModalIsOpenMessage] = useState(false);
  const toggleModalMessage = () => {
    setModalIsOpenMessage(!modalIsOpenMessage);
  };
  return (
    <>
      <SEO />
      <a className="sr-only sr-only-focusable" href="#menu-principale-anchor">
        Menù principale
      </a>
      <a className="sr-only sr-only-focusable" href="#content">
        {goToMainContent}
      </a>
      <a className="sr-only sr-only-focusable" href="#footer">
        {goToFooter}
      </a>
      <GoogleReCaptchaProvider reCaptchaKey={captchaKey}>
        <GlobalStateContextProvider>
          <Header toggleModal={toggleModal} />
          <main className="text-info text-break" tabIndex="-1" id="content">
            {children}
            <ModalUpdates
              initialState={modalIsOpen}
              handleToggle={toggleModal}
            />
            <ModalMessage
              initialState={modalIsOpenMessage}
              handleToggle={toggleModalMessage}
            />
          </main>
          <Footer />
        </GlobalStateContextProvider>
      </GoogleReCaptchaProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
