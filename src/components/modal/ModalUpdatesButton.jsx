import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col } from 'design-react-kit';
import { Link } from 'gatsby';

const useStyles = createUseStyles({
  modalButtonContainer: {
    border: '1px solid #0066CC',
    padding: '1.5rem 1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .description': {
      margin: '0',
      fontSize: '1.333rem',
      fontWeight: '700',
      color: '#33485C',
      '@media (max-width: 767px)': {
        textAlign: 'center',
      },
    },
    '& .btn': {
      whiteSpace: 'nowrap',
      '@media (max-width: 991px)': {
        marginTop: '20px',
      },
      '@media (max-width: 767px)': {
        width: '100%',
      },
    },
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      padding: '0.889rem 1.333rem',
      alignItems: 'flex-start',
      '& p': {
        maxWidth: '100%',
        marginBottom: '1rem',
      },
    },
  },
  buttonTitle: {
    fontSize: '1.556rem',
    fontWeight: '600',
    color: '#33485C',
    lineHeight: '1.556rem',
    '@media (max-width: 992px)': {
      textAlign: 'center',
    },
    '@media (max-width: 767px)': {
      display: 'block',
      textAlign: 'center',
    },
  },
  buttonInfo: {
    fontSize: '0.889rem',
    fontWeight: '400',
    color: '#33485C',
    '@media (max-width: 992px)': {
      display: 'block',
    },
    '@media (max-width: 767px)': {
      display: 'block',
      textAlign: 'center',
    },
  },
  button: {
    '&:focus': {
      outline: '2px solid #ff9900',
      boxShadow: 'none',
    },
  },
});

export const ModalUpdatesButton = ({ label, buttonLabel, hasTitle }) => {
  const classes = useStyles();

  return (
    <>
      {hasTitle ? (
        <Container className="px-3">
          <Row className="align-items-center mb-4">
            <Col sm={12} lg={3}>
              <span className={`${classes.buttonTitle} mb-4 mb-md-0`}>Le misure</span>
            </Col>
            <Col sm={12} lg={9}>
              <span className={classes.buttonInfo}>
                M1C1 <strong>DIGITALIZZAZIONE, INNOVAZIONE E SICUREZZA NELLA PA</strong>
              </span>
            </Col>
          </Row>
        </Container>
      ) : (
        ''
      )}

      <Container className="px-3">
        <Row>
          <Col lg={12}>
            <div className={classes.modalButtonContainer}>
              <p className="description">
                <strong>{label}</strong>
              </p>
              <Link
                to="/ricevi-aggiornamenti"
                aria-label="Ricevi aggiornamenti (Apri modale e compila il modulo)"
                className={`${classes.button} text-white btn btn-primary`}
              >
                {buttonLabel}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

ModalUpdatesButton.propTypes = {
  label: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
  hasTitle: PropTypes.bool,
  handleToggle: PropTypes.func.isRequired,
};
