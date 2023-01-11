/* eslint-disable sonarjs/no-identical-functions */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { announce } from '@react-aria/live-announcer';
import { graphql, useStaticQuery } from 'gatsby';
import {
  Row,
  Col,
  Input,
  Breadcrumb,
  BreadcrumbItem,
  Button,
} from 'design-react-kit';
import Select from 'react-select';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Controller, useForm } from 'react-hook-form';
import content from '../../contents/team-territoriali/team-territoriali.yml';
import notificationsLabel from '../../contents/notifications.yml';
import links from '../../contents/links.yml';
const { privacy } = links.internalLinks;
import seo from '../../contents/seo.yml';
import { SEO } from '../components/SEO';

const { title: seoTitle, description: seoDescription } =
  seo.teamTerritorialiPage;
const { successMessage: successLabels, error: errorLabels } =
  notificationsLabel.teamTerritoriali;

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
    fontSize: '1rem',
    color: '#33485C',
    lineHeight: '1.5',
    '@media (max-width: 991px)': {
      fontSize: '1.25rem',
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
    '& ul': {
      textAlign: 'left',
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
  banner: {
    display: 'flex',
    alignItems: 'center',
    padding: '22px 30px',
    background: '#F0F6FC',
    marginTop: '60px',
    justifyContent: 'space-between',
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  bannerLeft: {
    flexBasis: '55%',
    '@media (max-width: 991px)': {
      marginBottom: '20px',
    },
  },
  bannerParagraph: {
    fontSize: '1rem',
    lineHeight: '24px',
    margin: '0',
    '& .fw-600': {
      fontWeight: '600',
      margin: '0',
    },
  },
  bannerLink: {
    fontSize: '1.111rem',
    fontWeight: '700',
    textDecoration: 'none',
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

export const TeamTerritoriali = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const textareaMaxLength = 300;
  const [textareaDescriptionState, setTextareaDescriptionState] =
    useState('not-active');
  const formGroupValue = '.form-group';
  const {
    site: {
      siteMetadata: { apiUrl },
    },
  } = useStaticQuery(query);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

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
    number.innerHTML =
      textareaMaxLength - parseInt(event.target.value.length, 10);
    announce('Numero di caratteri rimanenti: ' + number.innerHTML);
  };

  const classes = useStyles();

  const onError = async (data) => {
    console.log('error', data);
  };
  const notifyError = () => {
    const notificationElement = document.querySelector('.notification');
    const titleElement = notificationElement.querySelector('h5');
    const descriptionElement = notificationElement.querySelector('p');
    notificationElement.classList.add('show');
    notificationElement.classList.add('error');
    titleElement.innerHTML = `${errorLabels.icon} ${errorLabels.title}`;
    descriptionElement.innerHTML = errorLabels.description;
  };

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const token = await executeRecaptcha();
    Object.keys(data).map(function (key) {
      if (data[key] === undefined) {
        delete data[key];
      }
      if (key === 'area' || key === 'argument') {
        data[key] = data[key]?.value;
      }
    });
    data['captcha'] = token;

    const spinner = document.querySelector('.spinner');
    spinner.classList.remove('hidden');

    const notificationElement = document.querySelector('.notification');
    const titleElement = notificationElement.querySelector('h5');
    const descriptionElement = notificationElement.querySelector('p');

    fetch(`${apiUrl}/territory/messages`, {
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
          if (status >= 200 && status <= 299 && data.success !== false) {
            notificationElement.classList.add('show');
            notificationElement.classList.add('success');
            titleElement.innerHTML = `${successLabels.icon} ${successLabels.title}`;
            descriptionElement.innerHTML = successLabels.description;
            setTimeout(() => {
              notificationElement.classList.remove('show');
            }, 5000);
          } else {
            notifyError();
          }
        }, 500);
      })
      .catch((error) => {
        console.log(error);
        notifyError();
      })
      .then(() => {
        spinner.classList.add('hidden');
        announce('Invio in corso');
      });
  };

  const {
    breadcrumb,
    name,
    modal: {
      selectTerritory,
      emailValidationLabel,
      nameValidationLabel,
      territoryValidationLabel,
      descriptionValidationLabel,
      contactNameLabel,
      contactValidationLabel,
      phoneLabel,
      phoneValidationLabel,
      emailLabel,
      territoryLabel,
      selectTerritoryPlaceholder,
      paNameLabel,
      descriptionLabel,
      sendButtonLabel,
      bodyText,
      mandatoryAdvise,
      mandatorySubAdvise,
      privacyLabel,
      privacyLink,
    },
  } = content;

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <div className="container px-3">
        <Row>
          <Col xs="12">
            <Breadcrumb className={classes.breadcrumb}>
              <BreadcrumbItem className={classes.breadcrumbItem}>
                <a href="/">{breadcrumb}</a>
                <span className="separator"></span>
              </BreadcrumbItem>
              <BreadcrumbItem active className={classes.breadcrumbItemActive}>
                <a>{name}</a>
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
      <div className="container px-3">
        <iframe
          name="formFrame"
          id="formFrame"
          className="d-none"
          title="no-redirect"
        ></iframe>
        <Row className="mt-5">
          <Col xs={12} md={9} lg={9}>
            <h1 className={classes.titleUpdate}>{name}</h1>
            <div
              className={classes.subtitleUpdate}
              dangerouslySetInnerHTML={{ __html: bodyText }}
            />
          </Col>
          <Col
            xs={12}
            md={3}
            lg={3}
            className="d-flex justify-content-center justify-content-sm-end align-items-start justify-content-lg-start m-0 mt-md-0"
          >
            <img
              src={`/assets/assistenza.svg`}
              alt=""
              className={classes.heroImg}
            />
          </Col>
        </Row>
        <Row className={classes.mandatory}>
          <Col xs={12}>
            <h2>{mandatorySubAdvise}</h2>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12}>{mandatoryAdvise}</Col>
        </Row>
        <Row>
          <Col xs="12">
            <form
              className={classes.formMessage}
              id="territory-form"
              onSubmit={handleSubmit(onSubmit, onError)}
            >
              <Row className="mt-5">
                <Col xs={12} md={6} lg={4}>
                  <Controller
                    name="contact"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <>
                        <Input
                          invalid={errors.contact ? true : undefined}
                          aria-invalid={errors.contact && 'true'}
                          label={contactNameLabel}
                          aria-labelledby={errors.contact && 'error-contact'}
                          type="text"
                          id="contact"
                          aria-required="true"
                          {...field}
                        />
                        <span className={classes.errorLabel} id="error-contact">
                          {errors.contact &&
                            (errors.contact.message || contactValidationLabel)}
                        </span>
                      </>
                    )}
                  />
                </Col>
                <Col xs={12} md={6} lg={4} className="offset-lg-1 mt-5 mt-md-0">
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: true,
                    }}
                    render={({ field }) => (
                      <>
                        <Input
                          invalid={errors.name ? true : undefined}
                          aria-invalid={errors.name && 'true'}
                          label={paNameLabel}
                          aria-labelledby={errors.name && 'error-name'}
                          type="text"
                          id="name"
                          aria-required="true"
                          {...field}
                        />
                        <span className={classes.errorLabel} id="error-name">
                          {errors.name &&
                            (errors.name.message || nameValidationLabel)}
                        </span>
                      </>
                    )}
                  />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} md={6} lg={4}>
                  <Controller
                    name="address"
                    control={control}
                    rules={{
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: emailValidationLabel,
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <Input
                          invalid={errors.address ? true : undefined}
                          aria-invalid={errors.address && 'true'}
                          label={emailLabel}
                          aria-labelledby={errors.address && 'error-address'}
                          type="text"
                          id="address"
                          aria-required="true"
                          {...field}
                        />
                        <span
                          className={classes.errorLabel}
                          id="error-address2"
                        >
                          {errors.address &&
                            (errors.address.message || emailValidationLabel)}
                        </span>
                      </>
                    )}
                  />
                </Col>
                <Col xs={12} md={6} lg={4} className="offset-lg-1 mt-5 mt-md-0">
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      pattern: {
                        value:
                          /\(?([0-9]{2,3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                        message: phoneValidationLabel,
                      },
                      required: true,
                    }}
                    render={({ field }) => (
                      <>
                        <Input
                          invalid={errors.phone ? true : undefined}
                          aria-invalid={errors.phone && 'true'}
                          label={phoneLabel}
                          aria-labelledby={errors.phone && 'error-phone'}
                          type="tel"
                          id="phone"
                          aria-required="true"
                          {...field}
                        />
                        <span className={classes.errorLabel} id="error-phone">
                          {errors.phone &&
                            (errors.phone.message || phoneValidationLabel)}
                        </span>
                      </>
                    )}
                  />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} md={6} lg={4}>
                  <label
                    htmlFor="territory-select"
                    className={classes.selectLabel}
                  >
                    {territoryLabel}
                  </label>
                  <Controller
                    control={control}
                    name="area"
                    rules={{ required: true, message: nameValidationLabel }}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        value={value}
                        id="territory-select"
                        onChange={onChange}
                        options={selectTerritory}
                        placeholder={selectTerritoryPlaceholder}
                        aria-label={selectTerritoryPlaceholder}
                        aria-invalid={errors.area && 'true'}
                        aria-labelledby={errors.area && 'error-area'}
                        className={`select ${errors.area && ' is-invalid'}`}
                      />
                    )}
                  />
                  <span className={classes.area} id="error-area">
                    {errors.area &&
                      (errors.area.message || territoryValidationLabel)}
                  </span>
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
                      wrap="soft"
                      id="description"
                      aria-label="messaggio"
                      {...register('description', {
                        required: true,
                        maxLength: textareaMaxLength,
                      })}
                    ></textarea>
                    <label
                      className={
                        textareaDescriptionState === 'active' ? 'active' : ''
                      }
                      htmlFor="description"
                    >
                      {descriptionLabel}
                    </label>
                    <span className={classes.errorLabel} id="error-description">
                      {errors.description &&
                        (errors.description.message ||
                          descriptionValidationLabel)}
                      {errors?.description?.type === 'maxLength' && (
                        <p>Limite caratteri superato: {textareaMaxLength}</p>
                      )}
                    </span>
                    <span className={classes.maxLengthLabel}>
                      <span className="max-length-number">
                        {textareaMaxLength}
                      </span>{' '}
                      caratteri a disposizione
                    </span>
                  </div>
                </Col>
              </Row>
              <div className="justify-content-center flex-column align-items-start justify-content-md-start px-0 py-0 mt-5">
                <p className={classes.modalFooterLabel}>
                  {privacyLabel}{' '}
                  <a target="_blank" href={privacy.linkTo} rel="noreferrer">
                    {privacyLink}
                    <span className="sr-only">apre in una nuova scheda</span>
                  </a>
                </p>
                <div className={`${classes.submitContainer} d-flex mt-5`}>
                  <Button color="primary" type="submit" form="territory-form">
                    {sendButtonLabel}
                  </Button>
                  <img
                    className={classes.spinner}
                    src="/assets/spinner.gif"
                    alt="spinner"
                  ></img>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
};
