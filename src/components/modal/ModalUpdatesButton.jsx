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
      }
    },
  },
});

export const ModalUpdatesButton = ({
  label,
  buttonLabel,
  initialState,
  handleToggle,
}) => {
  const classes = useStyles();
  const eventHandler = () => {
    handleToggle();
  };

  return (
    <Container className="px-3">
      <Row>
        <Col lg={12}>
          <div className={classes.modalButtonContainer}>
            <p className={classes.text}>{label}</p>
            <Button color="primary" onClick={eventHandler}>
              {buttonLabel}
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
