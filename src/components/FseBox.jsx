import React from 'react';
import { Container } from 'design-react-kit';
import { createUseStyles } from 'react-jss';
import { ExternalLink } from './ExternalLink';

const useStyles = createUseStyles({
  outerBox: {
    alignItems: 'center',
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
      height: '100%',
    },
    height: 120,
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
          <img className={classes.logo} src="/assets/logo-fse.png"></img>
        </div>
        <div className={classes.text}>
          <p className={classes.title}>
            È disponibile il cruscotto di monitoraggio del Fascicolo Sanitario Elettronico
          </p>

          <p className={classes.description}>
            Le persone autorizzate possono consultare l’avanzamento degli obiettivi PNRR per la sanità tramite gli
            indicatori DM 08/08/2022 per regione o provincia autonoma.
          </p>
          <ExternalLink className={classes.link} linkTo="https://monitoring.fse.salute.gov.it">
            Accedi al cruscotto
            <img src={`/assets/external-link.svg`} alt="" />
            <span className="sr-only">Collegamento esterno - Apre su nuova scheda</span>
          </ExternalLink>
        </div>
      </div>
    </Container>
  );
}
