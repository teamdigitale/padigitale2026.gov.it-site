import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { createUseStyles } from 'react-jss';
import {
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  TextArea,
  FormGroup,
  Label,
} from 'design-react-kit';
import Select from 'react-select';
import content from '../../../contents/opportunity-page/opportunity.yml';

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
      color: '#0066CC',
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
      fontSize: '0.889',
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
    '& .form-check': {
      borderBottom: '1px solid #e6e6e6',
      padding: '1.111rem 0.444rem',
    },
    '& .form-check .form-check-label': {
      fontSize: '0.889rem',
      fontWeight: '600',
      color: '#17324D',
    },
    '& input[type="radio"].is-invalid:not(:checked)+label::before': {
      borderColor: '#F83E5A',
    },
    '& .form-group': {
      margin: '0',
    },
    '& .form-group input[type="text"]': {
      paddingLeft: '1.333rem',
      fontSize: '0.889rem',
    },
    '& .form-group input[type="text"].is-invalid': {
      borderBottom: 'solid 2px #F83E5A',
    },
    '& .invalid-feedback': {
      color: '#F83E5A !important',
    },
  },
  modalTitleSecondary: {
    fontSize: '1.333rem',
    fontWeight: '600',
    color: '#33485C',
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
  },
});

export const ModalUpdates = ({ initialState, handleToggle }) => {
  const textareaMaxLength = 160;
  const [selectValue, setSelectValue] = useState(null);
  const [textareaState, setTextareaState] = useState('not-active');
  const [enteState, setEnteState] = useState(false);

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

  const handleChange = (selectedOption) => setSelectValue(selectedOption);

  const classes = useStyles();

  useEffect(() => {}, [selectValue]);

  const onSubmit = async (data) => {
    console.log('submit', data);
  };

  const onError = async (data) => {
    console.log('error', data);
  };

  const selectHandler = (value) => {
    if (value.value == 'public-administration') {
      setEnteState(true);
    } else {
      setEnteState(false);
    }
  };

  const {
    selectRepresent,
    modalTitle,
    modalSubtitle,
    updatesLabel,
    updatesInfo,
    mandatoryAdvise,
    requiredLabel,
    emailValidationLabel,
    emailLabel,
    representLabel,
    selectPlaceholder,
    enteValidationLabel,
    denomitationEnteLabel,
    inQuantoLabel,
    directContactLabel,
    directContactInfo,
    addMessageLabel,
    messageSelectLabel,
    messageLabel,
    radioGroupLabel,
    comunicationRadio,
    privacyRadio,
    privacyRadioLinkLabel,
    mandatoryRadioLabel,
    sendButtonLabel,
  } = content.modal;

  return (
    <Modal
      isOpen={initialState}
      toggle={handleToggle}
      labelledBy="updates-modal"
      className={classes.modalUpdatesContainer}
    >
      <div id="updates-modal" class="modal-header">
        <h5 class="modal-title">{modalTitle}</h5>
        <Button
          type="button"
          className={classes.close}
          aria-label="Close"
          onClick={handleToggle}
        >
          <span>Chiudi</span>
          <img
            src="assets/icon-close.svg"
            alt="chiudi modale"
            aria-hidden="true"
          />
        </Button>
      </div>
      <p
        className={classes.modalSubtitle}
        dangerouslySetInnerHTML={{ __html: modalSubtitle }}
      ></p>
      <ModalBody className={classes.modalBody}>
        <form onSubmit={handleSubmit(onSubmit, onError)} id="updates-form">
          <Row>
            <Col xs={12}>
              <img src="assets/icon-updates.svg" alt="icon updates" />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              <span className={classes.modalLabel}>{updatesLabel}</span>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={12}>
              <p dangerouslySetInnerHTML={{ __html: updatesInfo }}></p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <p dangerouslySetInnerHTML={{ __html: mandatoryAdvise }}></p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: requiredLabel,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: emailValidationLabel,
                  },
                }}
                render={({ field }) => (
                  <Input
                    invalid={errors.email}
                    infoText={errors.email && errors.email.message}
                    label={emailLabel}
                    type="text"
                    id="email"
                    {...field}
                  />
                )}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12} lg={6}>
              <label className={classes.selectLabel}>{representLabel}</label>
              <Controller
                control={control}
                name="represent"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={value}
                    id="represent-select"
                    onChange={(onChange, selectHandler)}
                    options={selectRepresent}
                    placeholder={selectPlaceholder}
                    aria-label={selectPlaceholder}
                    className={`${errors.represent && 'select is-invalid'}`}
                  />
                )}
              />
            </Col>
          </Row>
          <span className={classes.errorLabel}>
            {errors.represent ? requiredLabel : ''}
          </span>
          <div
            className={`${classes.enteContainer} ${enteState ? '' : 'hidden'}`}
          >
            <Row className="mt-5">
              <Col xs={12}>
                <Controller
                  name="ente"
                  control={control}
                  rules={{
                    required: {
                      value: enteState,
                      message: requiredLabel,
                    },
                    pattern: {
                      value: /^[a-zA-Z ]*$/i,
                      message: enteValidationLabel,
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      invalid={errors.ente}
                      infoText={errors.ente && errors.ente.message}
                      label={denomitationEnteLabel}
                      type="text"
                      {...field}
                      id="ente"
                    />
                  )}
                />
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={12} lg={6}>
                <label className={classes.selectLabel}>{inQuantoLabel}</label>
                <Controller
                  control={control}
                  name="enteSelect"
                  rules={{
                    required: {
                      value: enteState,
                      message: requiredLabel,
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      value={value}
                      id="enteSelect"
                      onChange={onChange}
                      options={selectRepresent}
                      placeholder={selectPlaceholder}
                      aria-label={selectPlaceholder}
                      className={`${errors.represent && 'select is-invalid'}`}
                    />
                  )}
                />
              </Col>
            </Row>
            <span className={classes.errorLabel}>
              {errors.enteSelect ? requiredLabel : ''}
            </span>
          </div>
          <Row className="mt-5">
            <Col xs={12}>
              <img src="assets/icon-chat.svg" alt="icon chat" />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              <span className={classes.modalLabel}>{directContactLabel}</span>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={12}>
              <p dangerouslySetInnerHTML={{ __html: directContactInfo }}></p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <h3 className={classes.modalTitleSecondary}>
                {addMessageLabel}
              </h3>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12} lg={6}>
              <label className={classes.selectLabel}>{messageSelectLabel}</label>
              <Select
                id="message-select"
                onChange={handleChange}
                options={selectRepresent}
                placeholder={selectPlaceholder}
                aria-label={selectPlaceholder}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <div>
                <div className="form-group">
                  <textarea
                    onFocus={textareaFocusHandler}
                    onBlur={textareaFocusOutHandler}
                    onInput={textareaInputHandler}
                    rows="3"
                    maxlength={textareaMaxLength}
                    id="message"
                  ></textarea>
                  <label
                    className={textareaState == 'active' ? 'active' : ''}
                    for="message"
                  >
                    {messageLabel}
                  </label>
                  <span className={classes.maxLengthLabel}>
                    Massimo <span id="max-length-number">{textareaMaxLength}</span> caratteri
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <fieldset>
                <label className={classes.selectLabel}>{radioGroupLabel}</label>
                <FormGroup check>
                  <input
                    className={errors.radio1 ? 'is-invalid' : ''}
                    name="gruppo1"
                    type="radio"
                    id="radio1"
                    {...register('radio1', { required: true })}
                  />
                  <Label check htmlFor="radio1">
                    {comunicationRadio}
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <input
                    className={errors.radio2 ? 'is-invalid' : ''}
                    name="gruppo2"
                    type="radio"
                    id="radio2"
                    {...register('radio2', { required: true })}
                  />
                  <Label check htmlFor="radio2">{privacyRadio} <a href="#">{privacyRadioLinkLabel}</a> *</Label>
                </FormGroup>
                <span className={classes.errorLabel}>
                  {errors.radio1 || errors.radio2
                    ? mandatoryRadioLabel
                    : ''}
                </span>
              </fieldset>
            </Col>
          </Row>
        </form>
      </ModalBody>
      <ModalFooter className="justify-content-center justify-content-md-start px-0">
        <Button color="primary" type="submit" form="updates-form">
          {sendButtonLabel}
        </Button>
      </ModalFooter>
    </Modal>
  );
};
