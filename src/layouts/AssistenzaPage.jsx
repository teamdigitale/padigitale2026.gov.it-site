/* eslint-disable react/no-unescaped-entities */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable sonarjs/no-all-duplicated-branches */
/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import { Row, Col, Input, Breadcrumb, BreadcrumbItem } from 'design-react-kit';
import Select from 'react-select';
import ReCAPTCHA from 'react-google-recaptcha';
import content from '../../contents/opportunity-page/opportunity.yml';
import contentAssistance from '../../contents/assistenza/assistenza.yml';
import notificationsLabel from '../../contents/notifications.yml';
import errorsLabels from '../../contents/errorsLabels.yml';
import links from '../../contents/links.yml';
const { privacy } = links.internalLinks;
import seo from '../../contents/seo.yml';
import { SEO } from '../components/SEO';

const { title: seoTitle, description: seoDescription } = seo.assistenzaPage;
const { successMessage: successLabels } = notificationsLabel;
const { errors } = errorsLabels;

const useStyles = createUseStyles({
  modalUpdatesContainer: {
    '&.modal-dialog': {
      maxWidth: '90%',
      '@media (max-width: 991px)': {
        maxWidth: '100%',
        margin: '0',
      },
    },
    '&.modal-dialog .modal-content .modal-header': {
      padding: '0',
      marginBottom: '0.444rem',
    },
    '&.modal-dialog .modal-content .modal-body': {
      padding: '0',
      marginTop: '2.667rem',
    },
    '& .modal-content': {
      padding: '4.444rem 5.556rem',
      '@media (max-width: 991px)': {
        padding: '3.778rem 0.833rem 4.444rem',
      },
    },
    '&.modal-dialog .modal-content .modal-header .modal-title': {
      fontSize: '1.333rem',
      fontWeight: '700',
      color: '#33485C',
      maxWidth: '70%',
      '@media (max-width: 991px)': {
        maxWidth: '100%',
      },
    },
  },
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
  modalSubtitle: {
    fontSize: '1rem',
    color: '#33485C',
  },
  formMessage: {
    padding: '0 0 50px 0',
    '& p': {
      fontSize: '0.889rem',
      color: '#33485C',
      fontWeight: '400',
    },
    '& [class$="-control"]': {
      border: 'none',
      borderBottom: '1px solid #5c6f82',
      borderRadius: '0',
      boxShadow: 'none',
    },
    '& [class$="-ValueContainer"]': {
      fontSize: '0.889rem',
      color: '#808080',
    },
    '& [class$="-indicatorSeparator"]': {
      display: 'none',
    },
    '& [class$="-menu"]': {
      margin: '0',
      border: 'none',
      boxShadow: '0px 0px 80px rgba(0, 43, 85, 0.1)',
      borderTopLeftRadius: '0',
      borderTopRightRadius: '0',
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    },
    '& [class$="-MenuList"]': {
      padding: '0',

      '& [class$="-option"]': {
        fontSize: '0.889rem',
        color: '#0066CC',
        background: '#fff',
      },
    },
    '& [class$="-indicatorContainer"] svg': {
      fill: '#33485C',
    },
    '& [class$="-singleValue"]': {
      fontSize: '0.889rem',
      fontWeight: '700',
      color: '#17324d',
    },
    '& [class$="-placeholder"]': {
      color: '#737374',
    },
    '& .select.is-invalid [class$="-control"]': {
      borderColor: '#F83E5A',
    },
    '& .select.focused': {
      borderColor: '#f90',
      boxShadow: '0 0 0 2px #f90',
      outline: '0',
    },
    '& .form-check': {
      borderBottom: '1px solid #e6e6e6',
      padding: '1.111rem 0.444rem',
    },
    '& .form-check .form-check-label': {
      fontSize: '0.889rem',
      fontWeight: '600',
      color: '#17324D',
    },
    '& .form-group': {
      margin: '0',
    },
    '& .form-group label': {
      color: '#17324d',
      textTransform: 'uppercase',
    },
    '& .form-group input[type="text"]': {
      fontSize: '0.889rem',
      '&:focus': {
        border: '2px solid #f90',
        boxShadow: '0 0 0 2px #f90',
        outline: '0',
      },
    },
    '& .form-group input[type="text"].is-invalid': {
      borderBottom: 'solid 2px #F83E5A',
    },
    '& .invalid-feedback': {
      color: '#F83E5A !important',
    },
    '& small.error-label': {
      fontSize: '0.778rem',
      color: '#F83E5A',
      padding: '0 0.444rem',
      fontWeight: '400',
      position: 'absolute',
    },
  },
  modalLabel: {
    fontSize: '0.778rem',
    color: '#33485C',
    fontWeight: '600',
  },
  maxLengthLabel: {
    fontSize: '0.778rem',
    color: '#737374',
    marginLeft: '0.444rem',
  },
  selectLabel: {
    fontSize: '0.778rem',
    fontWeight: '600',
    color: '#17324d',
    padding: '0 0.563rem',
    textTransform: 'uppercase',
    marginBottom: '0',
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
  modalFooterLabel: {
    composes: 'mb-3',
    fontSize: '0.889rem',
  },
  spinner: {
    composes: 'spinner hidden ml-3',
    maxHeight: '2.667rem',
    '&.hidden': {
      display: 'none',
    },
  },
  titleUpdate: {
    fontSize: '3rem',
    fontWeight: '700',
    color: '#33485C',
    '@media (max-width: 991px)': {
      fontSize: '2.25rem',
    },
  },
  subtitleUpdate: {
    fontSize: '1.5rem',
    color: '#33485C',
    lineHeight: '28px',
    '@media (max-width: 991px)': {
      fontSize: '1.125rem',
    },
  },
  mandatory: {
    fontSize: '1rem',
  },
  heroImg: {
    '@media (max-width: 991px)': {
      width: '64%',
    },
  },
  breadcrumb: {
    '@media (min-width: 991px)': {
      marginLeft: '0.722rem',
    },
  },
  breadcrumbItem: {
    '& a': {
      color: '#5B6F82',
      fontWeight: '700',
      textDecoration: 'underline',
    },
  },
  breadcrumbItemActive: {
    '& a': {
      color: '#5B6F82',
      textDecoration: 'none',
    },
  },
});

export const AssistenzaPage = () => {
  const textareaMaxLength = 300;
  const [textareaDescriptionState, setTextareaDescriptionState] = useState('not-active');
  const [formFilled, setFormFilled] = useState(false);

  const [optionSelected, setOptionSelected] = useState();

  useEffect(() => {
    setOptionSelected(new Event('selected'));
  }, []);

  useEffect(() => {
    const form = document.querySelector('#assistance-form');
    const inputArr = form.querySelectorAll('[required]:not(select)');
    const selectArr = form.querySelectorAll('select[required]');
    let noInputValue = true;
    let noSelectValue = true;

    const inputHandler = () => {
      noInputValue = Array.prototype.slice.call(inputArr).find((input) => {
        return input.checkValidity() === false;
      });
      noInputValue ? (noInputValue = true) : (noInputValue = false);
      inputArr.forEach((input) => {
        if (input.checkValidity()) {
          input.classList.remove('is-invalid');
          const formGroup = input.closest('.form-group');
          const errorLabel = formGroup.querySelector('small');
          if (errorLabel) {
            errorLabel.classList.remove('error-label');
            errorLabel.innerHTML = '';
          }
        }
      });
      setFormFilled(!noInputValue && !noSelectValue);
    };

    const selectHandler = () => {
      noSelectValue = Array.prototype.slice.call(selectArr).find((select) => {
        return select.value === '';
      });
      noSelectValue ? (noSelectValue = true) : (noSelectValue = false);
      setFormFilled(!noInputValue && !noSelectValue);
    };

    inputArr.forEach((input) => {
      input.addEventListener('input', inputHandler);
    });
    selectArr.forEach((select) => {
      select.addEventListener('selected', selectHandler);
    });
  }, []);

  const textareaFocusHandler = () => {
    setTextareaDescriptionState('active');
  };

  const textareaFocusOutHandler = (event) => {
    const currentTextarea = event.target;
    if (currentTextarea.value === '') {
      setTextareaDescriptionState('');
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

  const onChangeCaptcha = (value) => {
    if (value !== null || value.trim() !== '') {
      const elems = JSON.parse(document.getElementsByName('captcha_settings')[0].value);
      elems['ts'] = JSON.stringify(new Date().getTime());
      document.getElementsByName('captcha_settings')[0].value = JSON.stringify(elems);
      document.getElementsByName('submit')[0].disabled = false;
    }
  };

  const handleArgument = (element) => {
    const argumentInput = document.querySelector('#argument-select-input');
    const selectWrapper = argumentInput.closest('.select-wrapper');
    const hiddenSelect = selectWrapper.querySelector('select');
    hiddenSelect.value = element.value;
    hiddenSelect.dispatchEvent(optionSelected);
  };

  const handleMeasure = (element) => {
    const measureInput = document.querySelector('#measure-select-input');
    const selectWrapper = measureInput.closest('.select-wrapper');
    const hiddenSelect = selectWrapper.querySelector('select');
    hiddenSelect.value = element.value;
    hiddenSelect.dispatchEvent(optionSelected);
  };

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
    event.preventDefault();
    const currentTarget = event.target;
    const currentValue = currentTarget.value;
    if (currentValue !== '') {
      const currentPattern = currentTarget.getAttribute('pattern');
      const currentType = currentTarget.getAttribute('type');
      if (currentType === 'email') {
        const inputContainer = currentTarget.closest('.form-group');
        const errorLabel = inputContainer.querySelector('small');
        errorLabel.classList.add('error-label');
        errorLabel.innerHTML = emailValidationLabel;
        currentTarget.classList.add('is-invalid');
      }
      if (currentPattern) {
        const patternRegExp = new RegExp(currentPattern);
        if (patternRegExp.test(currentValue)) {
          return;
        } else {
          const inputContainer = currentTarget.closest('.form-group');
          const errorLabel = inputContainer.querySelector('small');
          errorLabel.classList.add('error-label');
          errorLabel.innerHTML = errorMatch;
          currentTarget.classList.add('is-invalid');
        }
      }
    }
  };

  const formHandler = () => {
    const notificationElement = document.querySelector('.notification');
    const titleElement = notificationElement.querySelector('h5');
    const descriptionElement = notificationElement.querySelector('p');
    notificationElement.classList.add('show');
    notificationElement.classList.add('success');

    titleElement.innerHTML = `${successLabels.icon} ${successLabels.title}`;
    descriptionElement.innerHTML = successLabels.description;

    setTimeout(() => {
      notificationElement.classList.remove('show');
    }, 5000);
  };

  const {
    selectArgument,
    selectMeasure,
    emailValidationLabel,
    emailLabel,
    argumentLabel,
    measureLabel,
    selectPlaceholder,
    telLabel,
    descriptionLabel,
    objectLabel,
    sendButtonLabel,
  } = content.modal;

  const { errorMatch } = errors;

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      {/* <Breadcrumb currentPage={contentAssistance.breadcrumb} /> */}
      <div className="container">
        <Row>
          <Col xs="12">
            <Breadcrumb className={classes.breadcrumb}>
              <BreadcrumbItem className={classes.breadcrumbItem}>
                <a href="/">Home</a>
                <span className="separator"></span>
              </BreadcrumbItem>
              <BreadcrumbItem className={classes.breadcrumbItem}>
                <a href="/supporto">Supporto</a>
                <span className="separator"></span>
              </BreadcrumbItem>
              <BreadcrumbItem active className={classes.breadcrumbItemActive}>
                <a href="/supporto/assistenza">Assistenza</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
      <div className="container px-3">
        <iframe name="formFrame" id="formFrame" className="d-none" title="no-redirect"></iframe>
        <Row className="mt-5">
          <Col xs={12} md={6} lg={5}>
            <div className={classes.titleUpdate}>Assistenza</div>
            <div className={classes.subtitleUpdate}>
              Un team dedicato è a tua disposizione per chiarire dubbi e approfondire temi di interesse. Compila il
              modulo sottostante e invia la richiesta.
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="offset-lg-3 d-flex justify-content-center">
            <img src={`/assets/assistenza.svg`} alt="" className={classes.heroImg} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className={classes.mandatory}>I campi con * sono obbligatori </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            {/* <form onSubmit={handleSubmit(onSubmit, onError)} id="message-form" aria-describedby="mandatory-label"> */}
            <form
              action="https://padigitale2026--dev1.my.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
              method="POST"
              className={classes.formMessage}
              id="assistance-form"
              target="formFrame"
              onSubmit={formHandler}
            >
              <input
                type="hidden"
                name="captcha_settings"
                value='{"keyname":"DEV1","fallback":"true","orgId":"00D3N0000004K3l","ts":""}'
              />
              <input type="hidden" name="debugEmail" value="mattia.g.puggioni@accenture.com" />
              <input type="hidden" name="debug" value={1} />
              <input type="hidden" name="orgid" value="00D3N0000004K3l" />
              <Row className="mt-5">
                <Col xs={12} md={6} lg={4}>
                  <Input
                    /* invalid={errors.address}
                    aria-invalid={errors.address && 'true'} */
                    label={emailLabel}
                    size="20"
                    maxLength="80"
                    aria-describedby="mandatory-label"
                    /* aria-labelledby={errors.address && 'error-address'} */
                    type="email"
                    id="00N7Y000008tqdM"
                    name="00N7Y000008tqdM"
                    aria-required="true"
                    onInvalid={customInvalid}
                    required={true}
                  />
                </Col>
                <Col xs={12} md={6} lg={4} className="offset-lg-1 mt-5 mt-md-0">
                  <Input
                    /* invalid={errors.address}
                    aria-invalid={errors.address && 'true'} */
                    label={telLabel}
                    size="20"
                    maxLength="40"
                    aria-describedby="mandatory-label"
                    /* aria-labelledby={errors.address && 'error-address'} */
                    type="text"
                    id="00N7Y000008tqdb"
                    name="00N7Y000008tqdb"
                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                    onInvalid={customInvalid}
                  />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} md={6} lg={4}>
                  <div className="select-wrapper">
                    <label htmlFor="argument-select-input" className={classes.selectLabel}>
                      {argumentLabel}
                    </label>
                    <Select
                      id="argument-select"
                      inputId="argument-select-input"
                      dataRefer="00N3N00000GCzFR"
                      options={selectArgument}
                      onChange={handleArgument}
                      placeholder={selectPlaceholder}
                      aria-label={selectPlaceholder}
                      aria-describedby="mandatory-label"
                      /* aria-invalid={errors.representative && 'true'}
                    aria-labelledby={errors.representative && 'error-represent'} */
                      className={`select`}
                    />
                    <select
                      className="d-none"
                      id="00N3N00000GCzFR"
                      name="00N3N00000GCzFR"
                      title="Argomento"
                      required={true}
                      onInvalid={customInvalid}
                    >
                      <option value="Accesso portale">Accesso portale</option>
                      <option value="Iscrizione newsletter">Iscrizione newsletter</option>
                      <option value="Misure">Misure</option>
                      <option value="Avvisi/bandi">Avvisi/bandi</option>
                      <option value="Enti beneficiari">Enti beneficiari</option>
                      <option value="Spese ammissibili">Spese ammissibili</option>
                      <option value="Generale">Generale</option>
                    </select>
                  </div>
                </Col>
                <Col xs={12} md={6} lg={4} className="offset-lg-1 mt-5 mt-md-0">
                  <div className="select-wrapper">
                    <label htmlFor="measure-select-input" className={classes.selectLabel}>
                      {measureLabel}
                    </label>
                    <Select
                      id="measure-select"
                      inputId="measure-select-input"
                      dataRefer="00N3N00000GCzFW"
                      options={selectMeasure}
                      onChange={handleMeasure}
                      placeholder={selectPlaceholder}
                      aria-label={selectPlaceholder}
                      aria-describedby="mandatory-label"
                      /* aria-invalid={errors.representative && 'true'}
                    aria-labelledby={errors.representative && 'error-represent'} */
                      className={`select`}
                    />
                    <select
                      className="d-none"
                      id="00N3N00000GCzFW"
                      name="00N3N00000GCzFW"
                      title="Misura"
                      required={true}
                      onInvalid={customInvalid}
                    >
                      <option value="1.2 Abilitazione e facilitazione migrazione al Cloud">
                        1.2 Abilitazione e facilitazione migrazione al Cloud
                      </option>
                      <option value="1.4.1 Esperienza dei servizi pubblici">
                        1.4.1 Esperienza dei servizi pubblici
                      </option>
                      <option value="1.4.4 Adozione identità digitale">1.4.4 Adozione identità digitale</option>
                      <option value="1.4.5 Digitalizzazione degli avvisi pubblici">
                        1.4.5 Digitalizzazione degli avvisi pubblici
                      </option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} lg={9}>
                  <Input
                    /* invalid={errors.address}
                      aria-invalid={errors.address && 'true'} */
                    label={objectLabel}
                    aria-describedby="mandatory-label"
                    /* aria-labelledby={errors.address && 'error-address'} */
                    type="text"
                    id="00N7Y000008tqdR"
                    name="00N7Y000008tqdR"
                    aria-required="true"
                    required={true}
                    onInvalid={customInvalid}
                  />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} lg={9}>
                  <div className="form-group">
                    <textarea
                      onFocus={textareaFocusHandler}
                      onBlur={textareaFocusOutHandler}
                      onInput={textareaInputHandler}
                      rows="3"
                      maxLength={textareaMaxLength}
                      id="00N7Y000008tqdW"
                      name="00N7Y000008tqdW"
                      wrap="soft"
                      required={true}
                      onInvalid={customInvalid}
                    ></textarea>
                    <label className={textareaDescriptionState === 'active' ? 'active' : ''} htmlFor="00N7Y000008tqdW">
                      {descriptionLabel}
                    </label>
                    <span className={classes.maxLengthLabel}>
                      <span className="max-length-number">{textareaMaxLength}</span> caratteri a disposizione
                    </span>
                  </div>
                </Col>
              </Row>
              <input type="hidden" id="external" name="external" value="1" />
              <input type="hidden" name="origin" value="Area pubblica" />
              <input type="hidden" name="recordType" value="0127Y00000229Rc" />
              <Row>
                <Col xs={12}>
                  <ReCAPTCHA
                    sitekey="6LfW56weAAAAAIWHJnwlQ2lHNRCcd04QLYQyamww"
                    onChange={onChangeCaptcha}
                    className={`${formFilled ? '' : 'd-none mt-5'}`}
                    id="captcha-container"
                  />
                </Col>
              </Row>
              <div className="justify-content-center flex-column align-items-start justify-content-md-start px-0 py-0 mt-5">
                <p className={classes.modalFooterLabel}>
                  Cliccando su INVIA dichiaro di aver letto e compreso{' '}
                  <a target="_blank" href={privacy.linkTo} rel="noreferrer">
                    l'informativa privacy
                  </a>
                </p>
                <div className="d-flex">
                  <input type="submit" name="submit" disabled value={sendButtonLabel} className="btn btn-primary" />
                </div>
              </div>
            </form>
            <div className={classes.notification} role="alert" aria-labelledby="not2dms-title" id="not2dms2">
              <h5 id="not2dms-title2">
                notifiche
                <svg className="icon" role="img" aria-label=""></svg>
              </h5>
              <p></p>
              <button
                type="button"
                className="btn notification-close"
                aria-label="Chiudi"
                aria-describedby="not2dms-title"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  role="img"
                  aria-label="Chiudi"
                >
                  <rect
                    x="17.3242"
                    y="0.5"
                    width="1.49987"
                    height="24.4978"
                    transform="rotate(45 17.3242 0.5)"
                    fill="#5C6F82"
                  />
                  <rect y="1.56055" width="1.49987" height="24.4978" transform="rotate(-45 0 1.56055)" fill="#5C6F82" />
                </svg>
              </button>
            </div>
          </Col>
        </Row>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </div>
    </>
  );
};
