import React, { useState, useEffect, useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { createUseStyles } from 'react-jss';
import {
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormGroup,
  Label,
} from 'design-react-kit';
import Select from 'react-select';
import { graphql, useStaticQuery } from 'gatsby';
import content from '../../../contents/opportunity-page/opportunity.yml';
import links from '../../../contents/links.yml';
import notificationsLabel from '../../../contents/notifications.yml';
import { GlobalStateContext } from '../../context/globalContext';

const {
  success: successLabels,
  error: errorLabels,
  errorAddress: errorAddressLabel,
} = notificationsLabel;

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
  modalBody: {
    padding: '0',
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
    },
    '& [class$="-ValueContainer"]': {
      paddingLeft: '1.333rem',
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
  modalLabel: {
    fontSize: '0.778rem',
    color: '#33485C',
    fontWeight: '600',
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

export const ModalMessage = () => {
  const [{ modalStateMessage }, dispatch] = useContext(GlobalStateContext);
  const textareaMaxLength = 160;
  const [selectValue, setSelectValue] = useState(null);
  const [textareaState, setTextareaState] = useState('not-active');
  const [enteState, setEnteState] = useState('');
  const {
    site: {
      siteMetadata: { apiUrl },
    },
  } = useStaticQuery(query);

  const setFocusStyleOnSelect = () => {
    const selectInputArr = document.querySelectorAll('.modal .select input');
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
          let value = representSelectOptions.querySelector(
            'div[class*="singleValue"]'
          );
          value ? (value = value.innerHTML) : (value = '');
          let valueSelected = selectRepresent.find((valueObj) => {
            if (value == valueObj.label) {
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

  const {
    register,
    control,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const textareaFocusHandler = (event) => {
    setTextareaState('active');
  };

  const textareaFocusOutHandler = (event) => {
    if (event.target.value == '') {
      setTextareaState('');
    }
  };

  const textareaInputHandler = (event) => {
    const number = document.querySelector('#max-length-number');
    number.innerHTML = textareaMaxLength - parseInt(event.target.value.length);
  };

  const classes = useStyles();

  useEffect(() => {}, [selectValue]);

  const onSubmit = async (data, event) => {
    Object.keys(data).map(function (key, index) {
      if (data[key] == undefined) {
        delete data[key];
      }
      if (
        key == 'enteSelect' ||
        key == 'representative' ||
        key == 'messageSelect'
      ) {
        data[key] = data[key]?.value;
      }
    });

    const spinner = document.querySelector('.spinner');
    spinner.classList.remove('hidden');

    const notificationElement = document.querySelector('.notification');
    const titleElement = notificationElement.querySelector('h5');
    const descriptionElement = notificationElement.querySelector('p');
    const modalCloseBtn = event.target
      .closest('.modal-content')
      .querySelector('.modal-header .btn');

    const closeNotification = notificationElement.querySelector(
      '.notification-close'
    );

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
            modalCloseBtn.click();
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
      });
  };

  const onError = async (data) => {
    console.log('error', data);
  };

  const {
    selectRepresent,
    selectInQuanto,
    selectMessage,
    modalMessageTitle,
    modalMessageSubtitle,
    updatesLabel,
    updatesInfo,
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
    directContactLabel,
    directContactInfo,
    addMessageLabel,
    messageSelectLabel,
    messageLabel,
    sendButtonLabel,
  } = content.modal;

  return (
    <>
      <Modal
        isOpen={modalStateMessage}
        toggle={() => {
          dispatch({ type: 'SET:TOGGLE_MODAL_MESSAGE' });
        }}
        labelledBy="message-modal"
        className={classes.modalUpdatesContainer}
        onOpened={() => {
          setFocusStyleOnSelect();
          setListenersToSelectOptions();
        }}
      >
        <div id="message-modal" className="modal-header">
          <h5 className="modal-title">{modalMessageTitle}</h5>
          <Button
            type="button"
            className={classes.close}
            aria-label="Close"
            onClick={() => {
              dispatch({ type: 'SET:TOGGLE_MODAL_MESSAGE' });
            }}
          >
            <span>Chiudi</span>
            <img
              src="/assets/icon-close.svg"
              alt="chiudi modale"
              aria-hidden="true"
            />
          </Button>
        </div>
        <ModalBody className={classes.modalBody}>
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            id="message-form"
            aria-describedby="mandatory-label"
          >
            <fieldset>
              <legend>
                <Row>
                  <Col xs={12}>
                    <img src="/assets/icon-chat.svg" alt="" />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col xs={12}>
                    <span className={classes.modalLabel}>
                      {directContactLabel}
                    </span>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col xs={12}>
                    <p
                      dangerouslySetInnerHTML={{ __html: directContactInfo }}
                    ></p>
                  </Col>
                </Row>
              </legend>
              <Row className="mt-5">
                <Col xs={12}>
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
                          id="address2"
                          aria-required="true"
                          {...field}
                        />
                        <span className={classes.errorLabel} id="error-address2">
                          {errors.address && errors.address.message}
                        </span>
                      </>
                    )}
                  />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} lg={6}>
                  <span className={classes.selectLabel}>{representLabel}</span>
                  <Controller
                    control={control}
                    name="representative"
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        value={value}
                        id="represent-select2"
                        onChange={onChange}
                        options={selectRepresent}
                        placeholder={selectPlaceholder}
                        aria-label={selectPlaceholder}
                        aria-describedby="mandatory-label"
                        aria-invalid={errors.representative && 'true'}
                        aria-labelledby={
                          errors.representative && 'error-represent'
                        }
                        className={`select ${
                          errors.representative && ' is-invalid'
                        }`}
                      />
                    )}
                  />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12} lg={6}>
                  <label className={classes.selectLabel}>
                    {messageSelectLabel}
                  </label>
                  <Controller
                    control={control}
                    name="messageSelect"
                    render={({ field: { onChange, value } }) => (
                      <Select
                        id="message-select"
                        onChange={onChange}
                        options={selectMessage}
                        placeholder={selectPlaceholder}
                        aria-label={selectPlaceholder}
                      />
                    )}
                  />
                </Col>
              </Row>
              <Row className="mt-5">
                <Col xs={12}>
                  <div>
                    <div className="form-group">
                      <Controller
                        name="message"
                        control={control}
                        render={({ field }) => (
                          <textarea
                            onFocus={textareaFocusHandler}
                            onBlur={textareaFocusOutHandler}
                            onInput={textareaInputHandler}
                            rows="3"
                            maxLength={textareaMaxLength}
                            {...field}
                            id="message"
                          ></textarea>
                        )}
                      />
                      <label
                        className={textareaState == 'active' ? 'active' : ''}
                        htmlFor="message"
                      >
                        {messageLabel}
                      </label>
                      <span className={classes.maxLengthLabel}>
                        Massimo{' '}
                        <span id="max-length-number">{textareaMaxLength}</span>{' '}
                        caratteri
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </fieldset>
          </form>
        </ModalBody>
        <ModalFooter className="justify-content-center flex-column align-items-start justify-content-md-start px-0 py-0 mt-5">
          <p className={classes.modalFooterLabel}>
            Cliccando su INVIA dichiaro di aver letto e compreso l'informativa
            privacy
          </p>
          <div className="d-flex">
            <Button color="primary" type="submit" form="updates-form">
              {sendButtonLabel}
            </Button>
            <img className={classes.spinner} src="/assets/spinner.gif"></img>
          </div>
        </ModalFooter>
      </Modal>
      <div className="container test-docs">
        <div className="row">
          <div className="col-12 col-md-6">
            <div
              className={classes.notification}
              role="alert"
              aria-labelledby="not2dms-title"
              id="not2dms2"
            >
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
                  <rect
                    y="1.56055"
                    width="1.49987"
                    height="24.4978"
                    transform="rotate(-45 0 1.56055)"
                    fill="#5C6F82"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
