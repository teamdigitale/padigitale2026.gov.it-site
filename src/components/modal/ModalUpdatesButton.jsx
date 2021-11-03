import React from 'react';
import { createUseStyles } from 'react-jss';
import { Container, Row, Col, Button } from 'design-react-kit';

const useStyles = createUseStyles({
  modalButtonContainer: {
    border: '1px solid #0066CC',
    padding: '0.5rem 5.556rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& p': {
      margin: '0',
      fontSize: '1.333rem',
      fontWeight: '700',
      color: '#0066CC',
      maxWidth: '60%',
    },
    '& .btn': {
      padding: '0.444rem 0.889rem',
      whiteSpace: 'nowrap',
    },
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      padding: '0.889rem 1.333rem',
      '& p': {
        maxWidth: '100%',
      },
    },
  },
  buttonTitle: {
    fontSize: '1.556rem',
    fontWeight: '600',
    color: '#33485C',
    '@media (max-width: 992px)': {
      textAlign: 'center',
    },
  },
  buttonInfo: {
    fontSize: '0.889rem',
    fontWeight: '400',
    color: '#33485C',
    '@media (max-width: 992px)': {
      display: 'block',
      textAlign: 'center',
    },
  },
  button: {
    '&:focus': {
      outline: '2px solid #ff9900',
      boxShadow: 'none'
    }
  }
});

export const ModalUpdatesButton = ({
  label,
  buttonLabel,
  initialState,
  handleToggle,
  hasTitle,
}) => {
  const classes = useStyles();
  const eventHandler = () => {
    handleToggle();
  };

  return (
    <>
      {hasTitle ? (
        <Container className="px-3">
          <Row className="align-items-center mb-4">
            <Col sm={12} lg={3}>
              <h3 className={classes.buttonTitle}>Le misure</h3>
            </Col>
            <Col sm={12} lg={9}>
              <span className={classes.buttonInfo}>
                M1C1{' '}
                <strong>
                  DIGITALIZZAZIONE, INNOVAZIONE E SICUREZZA NELLA PA
                </strong>
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
              <p className={classes.text}>{label}</p>
              <Button className={classes.button} color="primary" onClick={eventHandler}>
                {buttonLabel}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
