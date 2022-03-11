/* eslint-disable sonarjs/no-all-duplicated-branches */
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import { Row, Col, Button, Input } from 'design-react-kit';
import Select from 'react-select';
import { graphql, useStaticQuery } from 'gatsby';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import content from '../../contents/opportunity-page/opportunity.yml';
import notificationsLabel from '../../contents/notifications.yml';
import seo from '../../contents/seo.yml';
import { SEO } from '../components/SEO';

const { title: seoTitle, description: seoDescription } = seo.contattaciPage;
const { successMessage: successLabels, error: errorLabels, errorAddress: errorAddressLabel } = notificationsLabel;

const useStyles = createUseStyles({
  close: {
    '@media (max-width: 991px)': {
      position: 'absolute',
      top: '0.556rem',
      right: '-0.5rem',
    },
    '&:focus': {
      outline: '2px solid #ff9900',
      boxShadow: 'none',
    },
    '&.btn': {
      background: 'none',
      boxShadow: 'none',
    },
    '&.btn:hover': {
      background: 'none',
    },
    '&.btn.btn-secondary:active': {
      background: 'none',
      boxShadow: 'none',
    },
    '&.btn span': {
      fontSize: '0.778rem',
      color: '#0066CC',
      fontWeight: '600',
      marginRight: '1.333rem',
      '@media (max-width: 991px)': {
        fontSize: '0.875rem',
      },
    },
  },
  maxLengthLabel: {
    fontSize: '0.778rem',
    color: '#808080',
    marginLeft: '0.444rem',
  },
  errorLabel: {
    fontSize: '0.778rem',
    color: '#F83E5A',
    padding: '0 0.444rem',
    fontWeight: '400',
  },
  selectLabel: {
    fontSize: '0.778rem',
    fontWeight: '600',
    color: '#33485C',
  },
  notification: {
    composes: 'notification with-icon dismissable',
    zIndex: '9999',
    display: 'block',
    opacity: '0',
    visibility: 'hidden',
    transition: '.3s ease',
    bottom: 'unset',
    top: '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    '&.show': {
      opacity: '1',
      visibility: 'visible',
      transition: '.3s ease',
    },
    '&.with-icon.success': {
      borderColor: '#00CF86',
    },
  },
  spinner: {
    composes: 'spinner hidden ml-3',
    maxHeight: '2.667rem',
    '&.hidden': {
      display: 'none',
    },
  },
});

const query = graphql`
  query {
    site {
      siteMetadata {
        apiUrl
      }
    }
  }
`;

export const ContattaciPage = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const textareaMaxLength = 300;
  const [selectValue] = useState(null);
  const [textareaNameState, setTextareaNameState] = useState('not-active');
  const [textareaObjectState, setTextareaObjectState] = useState('not-active');
  const [textareaDescriptionState, setTextareaDescriptionState] = useState('not-active');
  const [, setEnteState] = useState('');
  const {
    site: {
      siteMetadata: { apiUrl },
    },
  } = useStaticQuery(query);

  useEffect(() => {
    const timeStamp = () => {
      const response = document.getElementById('g-recaptcha-response');
      if (response == null || response.value.trim() === '') {
        const elems = JSON.parse(document.getElementsByName('captcha_settings')[0].value);
        elems['ts'] = JSON.stringify(new Date().getTime());
        document.getElementsByName('captcha_settings')[0].value = JSON.stringify(elems);
        document.getElementsByName('submit')[0].disabled = true;
      } else {
        document.getElementsByName('submit')[0].disabled = false;
      }
    };
    setInterval(timeStamp, 500);
  }, []);

  const setFocusStyleOnSelect = () => {
    const selectInputArr = document.querySelectorAll('.select input');
    selectInputArr.forEach((input) => {
      const selectFocusHandler = () => {
        const currentSelect = input.closest('.select');
        currentSelect.classList.add('focused');
      };
      const selectFocusOutHandler = () => {
        const currentSelect = input.closest('.select');
        currentSelect.classList.remove('focused');
      };
      input.addEventListener('focus', selectFocusHandler);
      input.addEventListener('focusout', selectFocusOutHandler);
    });
  };

  const setListenersToSelectOptions = () => {
    const representSelectOptions = document.querySelector('#represent-select2');
    const config = { childList: true, subtree: true };
    const setObserver = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          let value = representSelectOptions.querySelector('div[class*="singleValue"]');
          value ? (value = value.innerHTML) : (value = '');
          let valueSelected = selectArgument.find((valueObj) => {
            if (value === valueObj.label) {
              return valueObj;
            }
          });
          valueSelected = valueSelected?.value;
          setEnteState(valueSelected);
        }
      }
    };
    const observer = new MutationObserver(setObserver);
    observer.observe(representSelectOptions, config);
  };

  const textareaFocusHandler = (event) => {
    const currentTextarea = event.target;
    const currentType = currentTextarea.getAttribute('data-type');

    switch (currentType) {
      case 'name':
        setTextareaNameState('active');
        break;
      case 'object':
        setTextareaObjectState('active');
        break;
      case 'description':
        setTextareaDescriptionState('active');
        break;
    }
  };

  const textareaFocusOutHandler = (event) => {
    const currentTextarea = event.target;
    if (currentTextarea.value === '') {
      const currentType = currentTextarea.getAttribute('data-type');

      switch (currentType) {
        case 'name':
          setTextareaNameState('');
          break;
        case 'object':
          setTextareaObjectState('');
          break;
        case 'description':
          setTextareaDescriptionState('');
          break;
      }
    }
  };

  const textareaInputHandler = (event) => {
    const currentTextarea = event.target;
    const currentContainer = currentTextarea.closest('.form-group');
    const number = currentContainer.querySelector('.max-length-number');
    number.innerHTML = textareaMaxLength - parseInt(event.target.value.length, 10);
    announce('Numero di caratteri rimanenti: ' + number.innerHTML);
  };

  const classes = useStyles();

  useEffect(() => {}, [selectValue]);

  /* const onSubmit = async () => {
    const data = {};
    const inputArr = document.querySelectorAll('input');
    const textareaArr = document.querySelectorAll('textarea');
    const selectArr = document.querySelectorAll('select');
    inputArr.forEach((input) => {
      data[input.name] = input.value;
    });
    textareaArr.forEach((textarea) => {
      data[textarea.name] = textarea.value;
    });
    selectArr.forEach((select) => {
      data[select.name] = select.value;
    });

    console.log(data);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      formData.append(key, value);
    });

    fetch(`https://padigitale2026--dev3.my.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8`, {
      method: 'POST',
      body: formData,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(async (response) => {
        const data = await response.json();
        const status = response.status;
        setTimeout(() => {
          if (status >= 200 && status <= 299) {
            notificationElement.classList.add('show');
            notificationElement.classList.add('success');

            titleElement.innerHTML = `${successLabels.icon} ${successLabels.title}`;
            descriptionElement.innerHTML = successLabels.description;

            setTimeout(() => {
              notificationElement.classList.remove('show');
            }, 5000);
          } else {
             notificationElement.classList.add('show');
            notificationElement.classList.add('error');

            if (data.success === false) {
              titleElement.innerHTML = `${errorLabels.icon} ${errorAddressLabel.title}`;
              descriptionElement.innerHTML = errorAddressLabel.description;
            } else {
              titleElement.innerHTML = `${errorLabels.icon} ${errorLabels.title}`;
              descriptionElement.innerHTML = errorLabels.description;
            }
          }
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        announce('Invio in corso');
      });

    const inputValueArr = Array.prototype.slice.call(inputArr).map((input) => {
      return input.value;
    });
    const inputNameArr = Array.prototype.slice.call(inputArr).map((input) => {
      return input.name;
    });
    
    console.log(data);
    console.log(event);
    const token = await executeRecaptcha();
    Object.keys(data).map(function (key) {
      if (data[key] === undefined) {
        delete data[key];
      }
      if (key === 'enteSelect' || key === 'representative' || key === 'messageSelect') {
        data[key] = data[key]?.value;
      }
    });

    data['captcha'] = token;

    const spinner = document.querySelector('.spinner');
    spinner.classList.remove('hidden');

    const notificationElement = document.querySelector('.notification');
    const titleElement = notificationElement.querySelector('h5');
    const descriptionElement = notificationElement.querySelector('p');

    const closeNotification = notificationElement.querySelector('.notification-close');

    const closeNotificationHandler = (event) => {
      event.target.closest('.notification').classList.remove('show');
      closeNotification.removeEventListener('click', closeNotificationHandler);
    };
    closeNotification.addEventListener('click', closeNotificationHandler);

    fetch(`${apiUrl}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        const data = await response.json();
        const status = response.status;
        setTimeout(() => {
          if (status >= 200 && status <= 299) {
            notificationElement.classList.add('show');
            notificationElement.classList.add('success');

            titleElement.innerHTML = `${successLabels.icon} ${successLabels.title}`;
            descriptionElement.innerHTML = successLabels.description;

            setTimeout(() => {
              notificationElement.classList.remove('show');
            }, 5000);
          } else {
            notificationElement.classList.add('show');
            notificationElement.classList.add('error');

            if (data.success === false) {
              titleElement.innerHTML = `${errorLabels.icon} ${errorAddressLabel.title}`;
              descriptionElement.innerHTML = errorAddressLabel.description;
            } else {
              titleElement.innerHTML = `${errorLabels.icon} ${errorLabels.title}`;
              descriptionElement.innerHTML = errorLabels.description;
            }
          }
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        spinner.classList.add('hidden');
        announce('Invio in corso');
      });
  }; */

  /* const onError = async (data) => {
    console.log('error', data);
  }; */

  const customInvalid = (event) => {
    const currentTarget = event.target;
    event.preventDefault();
    console.log(currentTarget);
  };

  const {
    selectArgument,
    selectMeasure,
    requiredLabel,
    emailValidationLabel,
    emailLabel,
    argumentLabel,
    measureLabel,
    selectPlaceholder,
    directContactLabel,
    directContactInfo,
    telLabel,
    descriptionLabel,
    nameLabel,
    objectLabel,
    sendButtonLabel,
  } = content.modal;
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <div className="container">
        <Row>
          <Col xs="12">
            {/* <form onSubmit={handleSubmit(onSubmit, onError)} id="message-form" aria-describedby="mandatory-label"> */}
            <form
              action="https://padigitale2026--dev1.my.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
              method="POST"
            >
              <input
                type="hidden"
                name="captcha_settings"
                value='{"keyname":"TestDev3","fallback":"true","orgId":"00D3N0000004K3l","ts":""}'
              />
              <input type="hidden" name="debugEmail" value="mattia.g.puggioni@accenture.com" />
              <input type="hidden" name="debug" value={1} />
              <input type="hidden" name="orgid" value="00D3N0000004K3l" />
              <input type="hidden" name="retURL" value="http://" />
              Nome richiedente:
              <input id="00N7Y000008tqdH" maxLength="255" name="00N7Y000008tqdH" size="20" type="text" />
              Email:
              <input id="00N7Y000008tqdM" maxLength="80" name="00N7Y000008tqdM" size="20" type="text" />
              Argomento:
              <select id="00N3N00000GCzFR" name="00N3N00000GCzFR" title="Argomento">
                <option value="">--Nessuno--</option>
                <option value="Accesso portale">Accesso portale</option>
                <option value="Iscrizione newsletter">Iscrizione newsletter</option>
                <option value="Misure">Misure</option>
                <option value="Avvisi/bandi">Avvisi/bandi</option>
                <option value="Enti beneficiari">Enti beneficiari</option>
                <option value="Spese ammissibili">Spese ammissibili</option>
                <option value="Generale">Generale</option>
              </select>
              Misura:
              <select id="00N3N00000GCzFW" name="00N3N00000GCzFW" title="Misura">
                <option value="">--Nessuno--</option>
                <option value="1.2 Abilitazione e facilitazione migrazione al Cloud">
                  1.2 Abilitazione e facilitazione migrazione al Cloud
                </option>
                <option value="1.4.1 Esperienza dei servizi pubblici">1.4.1 Esperienza dei servizi pubblici</option>
                <option value="1.4.4 Adozione identità digitale">1.4.4 Adozione identità digitale</option>
                <option value="1.4.5 Digitalizzazione degli avvisi pubblici">
                  1.4.5 Digitalizzazione degli avvisi pubblici
                </option>
              </select>
              Oggetto: <input id="00N7Y000008tqdR" name="00N7Y000008tqdR" type="text" wrap="soft" />
              Descrizione:<textarea id="00N7Y000008tqdW" name="00N7Y000008tqdW" type="text" wrap="soft"></textarea>
              Contatto telefonico:
              <input id="00N7Y000008tqdb" maxLength="40" name="00N7Y000008tqdb" size="20" type="text" />
              <input type="hidden" id="external" name="external" value="1" />
              <input type="hidden" name="origin" value="Area pubblica" />
              <input type="hidden" name="recordType" value="0127Y00000229Rc" />
              <input type="submit" name="submit" />
              <div className="g-recaptcha" data-sitekey="6LfW56weAAAAAIWHJnwlQ2lHNRCcd04QLYQyamww"></div>
            </form>
          </Col>
        </Row>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      </div>
    </>
  );
};
