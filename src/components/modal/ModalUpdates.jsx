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

const useStyles = createUseStyles({
  modalUpdatesContainer: {
    '&.modal-dialog': {
      maxWidth: '90%',
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
    },
    '&.modal-dialog .modal-content .modal-header .modal-title': {
      fontSize: '1.333rem',
      fontWeight: '700',
      color: '#0066CC',
      maxWidth: '70%',
    },
  },
  close: {
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
    },
    '& [class$="-ValueContainer"]': {
      paddingLeft: '1.333rem',
      fontSize: '0.889',
      color: '#808080',
    },
    '& [class$="-indicatorSeparator"]': {
      display: 'none',
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

  const representOptions = [
    { value: 'public-administration', label: 'Pubblica amministrazione' },
    { value: 'fornitore-it', label: 'Fornitore IT' },
    { value: 'other', label: 'Altro' },
  ];

  return (
    <Modal
      isOpen={initialState}
      toggle={handleToggle}
      labelledBy="updates-modal"
      className={classes.modalUpdatesContainer}
    >
      <div id="updates-modal" class="modal-header">
        <h5 class="modal-title">
          Vuoi ricevere aggiornamenti sugli investimenti per la digitalizzazione
          della PA?
        </h5>
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
      <p className={classes.modalSubtitle}>
        Ricevi <strong>tutte le novità</strong> che riguardano{' '}
        <strong>la tua amministrazione</strong> lasciando i tuoi contatti
      </p>
      <ModalBody className={classes.modalBody}>
        <form onSubmit={handleSubmit(onSubmit, onError)} id="updates-form">
          <Row>
            <Col xs={12}>
              <img src="assets/icon-updates.svg" alt="icon updates" />
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12}>
              <span className={classes.modalLabel}>AGGIORNAMENTI</span>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={12}>
              <p>
                Ricevi <strong>materiali e informazioni</strong> sulle novità e
                gli avvisi di Italia digitale 2026
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <p>I campi con * sono obbligatori</p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'questo campo è richiesto',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'inserisci un indirizzo email valido',
                  },
                }}
                render={({ field }) => (
                  <Input
                    /* valid={isEmailValid} */
                    invalid={errors.email}
                    infoText={errors.email && errors.email.message}
                    label="EMAIL*"
                    type="text"
                    {...field}
                  />
                )}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12} lg={6}>
              <label className={classes.selectLabel}>RAPPRESENTO*</label>
              <Controller
                control={control}
                name="represent"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Select
                    value={value}
                    id="represent-select"
                    onChange={(onChange, selectHandler)}
                    options={representOptions}
                    placeholder="Scegli una voce dall’elenco"
                    aria-label="Scegli una voce dall’elenco"
                    className={`${errors.represent && 'select is-invalid'}`}
                  />
                )}
              />
            </Col>
          </Row>
          <span className={classes.errorLabel}>
            {errors.represent ? 'questo campo è richiesto' : ''}
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
                      message: 'questo campo è richiesto',
                    },
                    pattern: {
                      value: /^[a-zA-Z ]*$/i,
                      message:
                        'Per favore inserisci una denominazione ente valida.',
                    },
                  }}
                  render={({ field }) => (
                    <Input
                      invalid={errors.ente}
                      infoText={errors.ente && errors.ente.message}
                      label="DENOMINAZIONE ENTE*"
                      type="text"
                      {...field}
                    />
                  )}
                />
              </Col>
            </Row>
            <Row className="mt-4">
              <Col xs={12} lg={6}>
                <label className={classes.selectLabel}>IN QUANTO*</label>
                <Controller
                  control={control}
                  name="enteSelect"
                  rules={{
                    required: {
                      value: enteState,
                      message: 'questo campo è richiesto',
                    },
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Select
                      value={value}
                      id="enteSelect"
                      onChange={onChange}
                      options={representOptions}
                      placeholder="Scegli una voce dall’elenco"
                      aria-label="Scegli una voce dall’elenco"
                      className={`${errors.represent && 'select is-invalid'}`}
                    />
                  )}
                />
              </Col>
            </Row>
            <span className={classes.errorLabel}>
              {errors.enteSelect ? 'questo campo è richiesto' : ''}
            </span>
          </div>
          <Row className="mt-5">
            <Col xs={12}>
              <img src="assets/icon-chat.svg" alt="icon chat" />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={12}>
              <span className={classes.modalLabel}>CONTATTO DIRETTO</span>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col xs={12}>
              <p>
                Un <strong>Team dedicato</strong> è a tua disposizione per
                ricevere chiarimenti sugli investimenti o approfondire alcuni
                temi
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <h3 className={classes.modalTitleSecondary}>
                Voglio aggiungere un messagio
              </h3>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12} lg={6}>
              <label className={classes.selectLabel}>ARGOMENTO MESSAGGIO</label>
              <Select
                id="selectExampleClassic"
                onChange={handleChange}
                options={representOptions}
                placeholder="Scegli una opzione"
                aria-label="Scegli una opzione"
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
                  ></textarea>
                  <label
                    onClick={textareaFocusHandler}
                    className={textareaState == 'active' ? 'active' : ''}
                    for="exampleFormControlTextarea1"
                  >
                    Esempio di area di testo
                  </label>
                  <span className={classes.maxLengthLabel}>
                    Massimo <span id="max-length-number">160</span> caratteri
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12}>
              <fieldset>
                <legend>Radio</legend>
                <FormGroup check>
                  <input
                    className={errors.radio1 ? 'is-invalid' : ''}
                    name="gruppo1"
                    type="radio"
                    id="radio1"
                    {...register('radio1', { required: true })}
                  />
                  <Label check htmlFor="radio1">
                    Acconsento a essere contattato per comunicazioni specifiche*
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
                  <Label check htmlFor="radio2">
                    Ho letto e compreso <a href="#">l’informativa privacy *</a>
                  </Label>
                </FormGroup>
                <span className={classes.errorLabel}>
                  {errors.radio1 || errors.radio2
                    ? 'Seleziona entrambe le voci per proseguire'
                    : ''}
                </span>
              </fieldset>
            </Col>
          </Row>
        </form>
      </ModalBody>
      <ModalFooter className="justify-content-start px-0">
        <Button color="primary" type="submit" form="updates-form">
          Salva modifiche
        </Button>
      </ModalFooter>
    </Modal>
  );
};
