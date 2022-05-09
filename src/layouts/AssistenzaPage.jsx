/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import { navigate } from 'gatsby';
import { Row, Col, Input, Breadcrumb, BreadcrumbItem } from 'design-react-kit';
import Select from 'react-select';
import ReCAPTCHA from 'react-google-recaptcha';
import content from '../../contents/assistenza/assistenza.yml';
import labels from '../../contents/labels.yml';
import links from '../../contents/links.yml';
const { privacy } = links.internalLinks;
import seo from '../../contents/seo.yml';
import { SEO } from '../components/SEO';
import { SupportBanner } from './support/Banner';

const { title: seoTitle, description: seoDescription } = seo.assistenzaPage;
const { errors } = labels;

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
      borderColor: '#D6364E',
    },
    '& .select.focused': {
      borderColor: '#f90',
      boxShadow: '0 0 0 2px #f90',
      outline: '0',
    },
    '& .select': {
      '&:focus': {
        borderColor: '#f90',
        boxShadow: '0 0 0 2px #f90',
        outline: '0',
      },
    },
    '& .css-1n7v3ny-option': {
      textDecoration: 'underline',
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
      borderBottom: 'solid 2px #D6364E',
    },
    '& .form-group input[type="email"]': {
      fontSize: '0.889rem',
      '&:focus': {
        border: '2px solid #f90',
        boxShadow: '0 0 0 2px #f90',
        outline: '0',
      },
    },
    '& .form-group input[type="email"].is-invalid': {
      borderBottom: 'solid 2px #D6364E',
    },
    '& .invalid-feedback': {
      color: '#D6364E !important',
    },
    '& small.error-label': {
      fontSize: '0.778rem',
      color: '#D6364E',
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
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#33485C',
    lineHeight: '48px',
    marginBottom: '30px',
    '@media (max-width: 991px)': {
      fontSize: '2.25rem',
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  subtitleUpdate: {
    fontSize: '1.333rem',
    color: '#33485C',
    lineHeight: '1.5',
    '@media (max-width: 991px)': {
      fontSize: '1.25rem',
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  mandatory: {
    fontSize: '1rem',
    marginTop: '6.25rem',
    '@media (min-width: 991px)': {
      marginTop: '6.25rem',
    },
  },
  heroImg: {
    maxWidth: '100%',
    '@media (max-width: 991px)': {
      width: '80%',
    },
  },
  breadcrumb: {
    padding: '1.563rem 0 0',
    '& .breadcrumb': {
      padding: '0.75rem 0',
    },
  },
  breadcrumbItem: {
    '& a': {
      color: '#5B6F82',
      fontWeight: '600',
      textDecoration: 'underline',
      fontSize: '18px',
    },
    '&::before': {
      fontWeight: '600',
      color: '#33485C',
    },
  },
  breadcrumbItemActive: {
    '& a': {
      color: '#656566',
      textDecoration: 'none',
      fontSize: '18px',
      pointerEvents: 'none',
    },
    '&::before': {
      fontSize: '18px',
      fontWeight: '600',
      color: '#33485C',
    },
  },
  submitContainer: {
    marginBottom: '6rem',
    '@media (max-width: 991px)': {
      marginBottom: '6rem',
    },
  },
});

export const AssistenzaPage = () => {
  const textareaMaxLength = 700;
  const [textareaDescriptionState, setTextareaDescriptionState] = useState('not-active');
  const [formFilled, setFormFilled] = useState(false);
  const isInvalidValue = 'is-invalid';
  const formGroupValue = '.form-group';
  const errorLabelValue = 'error-label';

  const [optionSelected, setOptionSelected] = useState();

  const setFocusStyleOnSelect = () => {
    const selectInputArr = document.querySelectorAll('#assistance-form .select input');
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

  useEffect(() => {
    setOptionSelected(new Event('selected'));
    setFocusStyleOnSelect();
  }, []);

  useEffect(() => {
    const form = document.querySelector('#assistance-form');
    const inputArr = form.querySelectorAll('[required]:not(select)');
    const selectArr = form.querySelectorAll('select[required]');
    let noInputValue = true;
    let noSelectValue = true;

    const inputHandler = () => {
      noInputValue = Array.prototype.slice.call(inputArr).find((input) => input.checkValidity() === false);
      noInputValue ? (noInputValue = true) : (noInputValue = false);
      inputArr.forEach((input) => {
        if (input.checkValidity()) {
          input.classList.remove(isInvalidValue);
          const formGroup = input.closest(formGroupValue);
          const errorLabel = formGroup.querySelector('small');
          if (errorLabel) {
            errorLabel.classList.remove(errorLabelValue);
            errorLabel.innerHTML = '';
          }
        }
      });
      setFormFilled(!noInputValue && !noSelectValue);
    };

    const selectHandler = () => {
      noSelectValue = Array.prototype.slice.call(selectArr).find((select) => select.value === '');
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
    const currentContainer = currentTextarea.closest(formGroupValue);
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

  const customInvalid = (event) => {
    event.preventDefault();
    const currentTarget = event.target;
    const currentValue = currentTarget.value;
    if (currentValue !== '') {
      const currentPattern = currentTarget.getAttribute('pattern');
      const currentType = currentTarget.getAttribute('type');
      if (currentType === 'email') {
        const inputContainer = currentTarget.closest(formGroupValue);
        const errorLabel = inputContainer.querySelector('small');
        errorLabel.classList.add(errorLabelValue);
        errorLabel.innerHTML = emailValidationLabel;
        currentTarget.classList.add(isInvalidValue);
      }
      if (currentPattern) {
        const patternRegExp = new RegExp(currentPattern);
        if (patternRegExp.test(currentValue)) {
          return;
        } else {
          const inputContainer = currentTarget.closest(formGroupValue);
          const errorLabel = inputContainer.querySelector('small');
          errorLabel.classList.add(errorLabelValue);
          errorLabel.innerHTML = errorMatch;
          currentTarget.classList.add(isInvalidValue);
        }
      }
    }
  };

  const handleChangeTel = (event) => {
    const currentTarget = event.target;
    let value = event.target.value;
    const inputContainer = currentTarget.closest(formGroupValue);
    const errorLabel = inputContainer.querySelector('small');
    const regex = /^[0-9]+$/;

    if (!value.match(regex)) {
      value = value.slice(0, -1);
      errorLabel.classList.add(errorLabelValue);
      errorLabel.innerHTML = errorMatch;
      currentTarget.classList.add(isInvalidValue);
    } else {
      errorLabel.classList.remove(errorLabelValue);
      errorLabel.innerHTML = '';
      currentTarget.classList.remove(isInvalidValue);
    }
    event.target.value = value;
  };

  const formHandler = (event) => {
    setTimeout(() => {
      navigate('../../richiesta-inviata');
      event.target.reset();
      window.grecaptcha.reset();
      setFormFilled(false);
    }, 500);
  };

  const orgId = {
    dev: '00D3N0000004K3l',
    collaudo: '00D3N0000008lSz',
    prod: '00D7Q000001NvsR',
  };

  const {
    selectArgument,
    emailValidationLabel,
    emailLabel,
    argumentLabel,
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
      <div className="container px-3">
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
                <a>Assistenza</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
      <div className="container px-3">
        <iframe name="formFrame" id="formFrame" className="d-none" title="no-redirect"></iframe>
        <Row className="mt-5">
          <Col xs={12} md={6} lg={5}>
            <h1 className={classes.titleUpdate}>Assistenza</h1>
            <div className={classes.subtitleUpdate}>
              Un team dedicato è a tua disposizione per chiarire dubbi e approfondire temi di interesse. Compila il
              modulo sottostante e invia la richiesta.
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            lg={3}
            className="offset-lg-2 d-flex justify-content-center justify-content-sm-end justify-content-lg-center mt-5 mt-md-0"
          >
            <img src={`/assets/assistenza.svg`} alt="" className={classes.heroImg} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className={classes.mandatory} id="mandatory-label">
              I campi con * sono obbligatori
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <form
              action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
              method="POST"
              className={classes.formMessage}
              id="assistance-form"
              target="formFrame"
              onSubmit={formHandler}
            >
              <input
                type="hidden"
                name="captcha_settings"
                value={`{"keyname":"reCAPTCHA_prod","fallback":"true","orgId":"${orgId.prod}","ts":""}`}
              />
              <input type="hidden" name="debug" value={1} />
              <input type="hidden" name="orgid" value={orgId.prod} />
              <Row className="mt-5">
                <Col xs={12} md={6} lg={4}>
                  <Input
                    label={emailLabel}
                    size="20"
                    maxLength="80"
                    aria-describedby="mandatory-label"
                    type="email"
                    id="00N7Q000007qqu1"
                    name="00N7Q000007qqu1"
                    aria-required="true"
                    onInvalid={customInvalid}
                    required={true}
                  />
                </Col>
                <Col xs={12} md={6} lg={4} className="offset-lg-1 mt-5 mt-md-0">
                  <Input
                    label={telLabel}
                    size="20"
                    maxLength="40"
                    aria-describedby="mandatory-label"
                    type="text"
                    id="00N7Q000007qqts"
                    name="00N7Q000007qqts"
                    pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                    onInvalid={customInvalid}
                    onChange={handleChangeTel}
                    className="tel-input"
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
                      dataRefer="00N7Q000007qqtk"
                      options={selectArgument}
                      onChange={handleArgument}
                      placeholder={selectPlaceholder}
                      aria-label={selectPlaceholder}
                      aria-describedby="mandatory-label"
                      className={`select`}
                      tabIndex="0"
                    />
                    <select
                      className="d-none"
                      id="00N7Q000007qqtk"
                      name="00N7Q000007qqtk"
                      title="Argomento"
                      required={true}
                      onInvalid={customInvalid}
                      size="1"
                    >
                      <option value="Accesso al portale">Accesso al portale</option>
                      <option value="Iscrizione newsletter">Iscrizione alla newsletter</option>
                      <option value="Generale">Generale</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} lg={9}>
                  <Input
                    label={objectLabel}
                    aria-describedby="mandatory-label"
                    type="text"
                    id="subject"
                    name="subject"
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
                      id="description"
                      name="description"
                      wrap="soft"
                      required={true}
                      onInvalid={customInvalid}
                      aria-label="messaggio"
                    ></textarea>
                    <label className={textareaDescriptionState === 'active' ? 'active' : ''} htmlFor="description">
                      {descriptionLabel}
                    </label>
                    <span className={classes.maxLengthLabel}>
                      <span className="max-length-number">{textareaMaxLength}</span> caratteri a disposizione
                    </span>
                  </div>
                </Col>
              </Row>
              <input type="hidden" id="external" name="external" value="1" />
              <input type="hidden" id="origin" name="origin" value="Area pubblica" />
              <input type="hidden" id="recordType" name="recordType" value="0127Q0000001c35" />
              <input type="hidden" id="priority" name="priority" value="Medium" />
              <input type="hidden" name="debugEmail" value="mattia.puggioni@yopmail.com" />
              <Row>
                <Col xs={12}>
                  <ReCAPTCHA
                    sitekey="6LfW56weAAAAAIWHJnwlQ2lHNRCcd04QLYQyamww"
                    onChange={onChangeCaptcha}
                    className={`${formFilled ? ' mt-5' : 'd-none'}`}
                    id="captcha-container"
                  />
                </Col>
              </Row>
              <div className="justify-content-center flex-column align-items-start justify-content-md-start px-0 py-0 mt-5">
                <p className={classes.modalFooterLabel}>
                  Cliccando su INVIA dichiaro di aver letto e compreso{' '}
                  <a target="_blank" href={privacy.linkTo} rel="noreferrer">
                    l&apos;informativa privacy
                  </a>
                </p>
                <div className={`${classes.submitContainer} d-flex mt-5`}>
                  <input type="submit" name="submit" disabled value={sendButtonLabel} className="btn btn-primary" />
                </div>
              </div>
            </form>
          </Col>
        </Row>
        <SupportBanner />
      </div>
    </>
  );
};
