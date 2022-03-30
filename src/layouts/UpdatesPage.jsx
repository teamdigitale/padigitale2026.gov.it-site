/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { createUseStyles } from 'react-jss';
import { Row, Col, Button, Input } from 'design-react-kit';
import Select from 'react-select';
import { announce } from '@react-aria/live-announcer';
import { graphql, useStaticQuery } from 'gatsby';
import seo from '../../contents/seo.yml';
import { SEO } from '../components/SEO';
import content from '../../contents/opportunity-page/opportunity.yml';
import links from '../../contents/links.yml';
import notificationsLabel from '../../contents/notifications.yml';
import { Breadcrumb } from '../components/Breadcrumb';

const { success: successLabels, error: errorLabels, errorAddress: errorAddressLabel } = notificationsLabel;
const { title: seoTitle, description: seoDescription } = seo.supportPage;
const { privacy } = links.internalLinks;

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
  formBody: {
    padding: '0',
    marginBottom: '50px',
    '& p': {
      fontSize: '0.889rem',
      color: '#33485C',
      fontWeight: '400',
    },
    '& [class$="-control"]': {
      border: 'none',
      borderBottom: '2px solid #5c6f82',
      borderRadius: '0',
      boxShadow: 'none',
      height: '45px',
    },
    '& [class$="-ValueContainer"]': {
      height: '45px',
      paddingLeft: '1.333rem',
      fontSize: '0.889rem',
      color: '#808080',
    },
    '& [class$="-Input"]': {
      height: '45px',
      margin: '2px 0',
    },
    '& [class$="-placeholder"]': {
      color: '#767676',
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
      color: '#000',
    },
    '& .select.is-invalid [class$="-control"]': {
      borderColor: '#F83E5A',
    },
    '& .select.focused': {
      borderColor: '#f90',
      boxShadow: '0 0 0 2px #f90',
      outline: '0',
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
    '& .form-group input[type="text"]': {
      paddingLeft: '1.333rem',
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
  },
  enteContainer: {
    '&.hidden': {
      display: 'none',
    },
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
    paddingLeft: '9px',
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
  formFooterLabel: {
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
    fontSize: '24px',
    color: '#33485C',
    lineHeight: '1.5',
    '@media (max-width: 991px)': {
      fontSize: '1.125rem',
    },
    '@media (max-width: 767px)': {
      textAlign: 'center',
    },
  },
  submitContainer: {
    marginBottom: '12.5rem',
    '@media (max-width: 991px)': {
      marginBottom: '6rem',
    },
  },
  heroImg: {
    '@media (max-width: 991px)': {
      width: '80%',
    },
  },
  mandatory: {
    fontSize: '1rem',
    marginTop: '6.25rem',
    '@media (min-width: 991px)': {
      marginTop: '6.25rem',
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

export const UpdatesPage = () => {
  const [selectValue] = useState(null);
  const [enteState] = useState('');
  const {
    site: {
      siteMetadata: { apiUrl },
    },
  } = useStaticQuery(query);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const classes = useStyles();

  useEffect(() => {}, [selectValue]);

  const onSubmit = async (data) => {
    console.log(data);
    Object.keys(data).map(function (key) {
      if (data[key] === undefined) {
        delete data[key];
      }
      if (key === 'enteSelect' || key === 'representative' || key === 'messageSelect') {
        data[key] = data[key]?.value;
      }
    });

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

    fetch(`${apiUrl}/users`, {
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
            announce('Inviato con successo');
            setTimeout(() => {
              notificationElement.classList.remove('show');
            }, 5000);
          } else {
            notificationElement.classList.add('show');
            notificationElement.classList.add('error');
            announce("Errore nell'invio");
            if (data.message.includes('already exists')) {
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
  };

  const onFocus = (event) => {
    console.log(event.target);
  };

  const onError = async (data) => {
    console.log('error', data);
  };

  useEffect(() => {
    announce('Pagina caricata ' + content.name);
  }, []);

  const {
    selectRepresent,
    selectInQuanto,
    mandatoryAdvise,
    requiredLabel,
    emailValidationLabel,
    emailLabel,
    representLabel,
    selectPlaceholder,
    enteValidationLabel,
    enteTypeLabel,
    enteNameLabel,
    inQuantoLabel,
    sendButtonLabel,
  } = content.modal;
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Breadcrumb currentPage="Ricevi aggiornamenti" />
      <div className="sr-only">
        <h2>{content.name}</h2>
      </div>
      <div className="container mt-5 px-3">
        <div className={classes.formBody}>
          <form onSubmit={handleSubmit(onSubmit, onError)} id="updates-form" aria-describedby="mandatory-label">
            <fieldset>
              <legend>
                <Row>
                  <Col xs={12} md={6} lg={5}>
                    <h3 className={classes.titleUpdate}>Ricevi aggiornamenti</h3>
                    <div className={classes.subtitleUpdate}>
                      Ricevi materiali e informazioni sulle novità e gli avvisi di Italia digitale 2026.
                    </div>
                  </Col>
                  <Col
                    xs={12}
                    md={6}
                    lg={3}
                    className="offset-lg-2 d-flex justify-content-center justify-content-sm-end justify-content-lg-center mt-5 mt-md-0"
                  >
                    <img src={`/assets/updates-icon.svg`} className={classes.heroImg} alt="" />
                  </Col>
                </Row>
              </legend>
              <Row>
                <Col xs={12}>
                  <div
                    className={classes.mandatory}
                    id="mandatory-label"
                    dangerouslySetInnerHTML={{ __html: mandatoryAdvise }}
                  ></div>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} lg={4} className="d-lg-flex flex-lg-column justify-content-end">
                  <Controller
                    name="address"
                    control={control}
                    rules={{
                      required: requiredLabel,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: emailValidationLabel,
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <Input
                          invalid={errors.address}
                          aria-invalid={errors.address && 'true'}
                          label={emailLabel}
                          aria-describedby="mandatory-label"
                          aria-labelledby={errors.address && 'error-address'}
                          type="text"
                          id="address"
                          aria-required="true"
                          autocomplete="email"
                          {...field}
                          className="mb-0"
                        />
                        <span className={classes.errorLabel} id="error-address">
                          {errors.address && errors.address.message}
                        </span>
                      </>
                    )}
                  />
                </Col>
                <Col xs={12} lg={4} className="offset-lg-1 mt-4 mt-lg-0">
                  <label htmlFor="represent-select-input" className={classes.selectLabel}>
                    {representLabel}
                  </label>
                  <Controller
                    control={control}
                    name="representative"
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        value={value}
                        id="represent-select"
                        inputId="represent-select-input"
                        onChange={onChange}
                        onFocus={onFocus}
                        options={selectRepresent}
                        placeholder={selectPlaceholder}
                        aria-label={selectPlaceholder}
                        aria-describedby="mandatory-label"
                        aria-invalid={errors.representative && 'true'}
                        aria-labelledby={errors.representative && 'error-represent'}
                        className={`select ${errors.representative && ' is-invalid'}`}
                      />
                    )}
                  />
                </Col>
              </Row>
              <span className={classes.errorLabel} id="error-represent">
                {errors.represent ? requiredLabel : ''}
              </span>
              <div className={`${classes.enteContainer} ${enteState === 'other' ? '' : 'hidden'}`}>
                <Row className="mt-5">
                  <Col xs={12} lg={9}>
                    <Controller
                      name="enteType"
                      control={control}
                      rules={{
                        required: {
                          value: enteState === 'other' ? true : false,
                          message: requiredLabel,
                        },
                        pattern: {
                          value: /^\p{L}/u,
                          message: enteValidationLabel,
                        },
                      }}
                      render={({ field }) => (
                        <>
                          <Input
                            invalid={errors.enteType}
                            label={enteTypeLabel}
                            type="text"
                            aria-describedby="mandatory-label"
                            aria-labelledby={errors.enteType && 'error-enteType'}
                            aria-required={enteState === 'other' ? true : ''}
                            aria-invalid={errors.enteType && 'true'}
                            {...field}
                            id="enteType"
                          />
                          <span className={classes.errorLabel} id="error-enteType">
                            {errors.enteType && errors.enteType.message}
                          </span>
                        </>
                      )}
                    />
                  </Col>
                </Row>
              </div>
              <Row className="mt-5">
                <Col xs={12} lg={9}>
                  <Controller
                    name="ente"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: requiredLabel,
                      },
                      pattern: {
                        value: /^\p{L}/u,
                        message: enteValidationLabel,
                      },
                    }}
                    render={({ field }) => (
                      <>
                        <Input
                          invalid={errors.ente}
                          label={enteNameLabel}
                          type="text"
                          aria-describedby="mandatory-label"
                          aria-required="true"
                          aria-labelledby={errors.ente && 'error-enteName'}
                          aria-invalid={errors.ente && 'true'}
                          {...field}
                          id="enteName"
                        />
                        <span className={classes.errorLabel} id="error-enteName">
                          {errors.ente && errors.ente.message}
                        </span>
                      </>
                    )}
                  />
                </Col>
              </Row>
              <div className={`${classes.enteContainer} ${enteState === 'public-administration' ? '' : 'hidden'}`}>
                <Row className="mt-5">
                  <Col xs={12} lg={6}>
                    <label htmlFor="enteSelect-input" className={classes.selectLabel}>
                      {inQuantoLabel}
                    </label>
                    <Controller
                      control={control}
                      name="enteSelect"
                      rules={{
                        required: {
                          value: enteState === 'public-administration' ? true : false,
                          message: requiredLabel,
                        },
                      }}
                      render={({ field: { onChange, value } }) => (
                        <Select
                          value={value}
                          id="enteSelect"
                          inputId="enteSelect-input"
                          onChange={onChange}
                          options={selectInQuanto}
                          aria-describedby="mandatory-label"
                          placeholder={selectPlaceholder}
                          aria-label={selectPlaceholder}
                          aria-invalid={errors.enteSelect && 'true'}
                          aria-labelledby={errors.enteSelect && 'error-enteSelect'}
                          className={`${errors.enteSelect && 'select is-invalid'}`}
                        />
                      )}
                    />
                  </Col>
                </Row>
                <span className={classes.errorLabel} id="error-enteSelect">
                  {errors.enteSelect ? requiredLabel : ''}
                </span>
              </div>
            </fieldset>
          </form>
        </div>
        <p className={classes.formFooterLabel}>
          Cliccando su INVIA dichiaro di aver letto e compreso{' '}
          <a target="_blank" href={privacy.linkTo} rel="noreferrer">
            l'informativa privacy
          </a>
        </p>
        <div className={`${classes.submitContainer} d-flex mt-5`}>
          <Button color="primary" type="submit" form="updates-form">
            {sendButtonLabel}
          </Button>
          <img className={classes.spinner} src="/assets/spinner.gif" alt=""></img>
        </div>
      </div>
    </>
  );
};
