import React from 'react';
import { Container } from 'design-react-kit';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  outerBox: {
    border: '1px solid #06C',
    background: '#FFF',
    display: 'flex',
    gap: '24px',
    padding: '24px',
    marginBottom: '48px',
    '@media screen and (max-width: 575px)': {
      flexDirection: 'column',
    },
  },
  text: {
    fontFamily: 'Titillium Web',
    lineHeight: '24px',
  },
  logo: {
    '@media screen and (max-width: 575px)': {
      width: '100%',
    },
  },
  title: {
    color: '#1A1A1A',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '600',
    marginBottom: '8px',
  },
  description: {
    color: '#2F475E',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: '16px',
  },
  link: {
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#06c',
    textDecoration: 'none',
    '&:hover': {
      color: '#06c',
    },
  },
});

export function FseBox() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.outerBox}>
        <div>
          <img className={classes.logo} src="/assets/fse.png"></img>
        </div>
        <div className={classes.text}>
          <p className={classes.title}>
            È disponibile il cruscotto di monitoraggio del Fascicolo Sanitario Elettronico
          </p>

          <p className={classes.description}>
            Controlla l’avanzamento degli obiettivi del PNRR legati all’ambito sanità e consulta gli indicatori
            nazionali, regionali e per azienda sanitaria.
          </p>
          <a className={classes.link} href="https://monitoring.fse.salute.gov.it" rel="noreferrer" target="_blank">
            Accedi al cruscotto
          </a>
        </div>
      </div>
    </Container>
  );
}
