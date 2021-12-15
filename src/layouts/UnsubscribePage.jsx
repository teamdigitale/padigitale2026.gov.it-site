import React, { useCallback, useEffect, useReducer } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Button } from 'design-react-kit';
import { Hero } from '../components/hero/Hero';
import { SEO } from '../components/SEO';
import content from '../../contents/unsubscribe-page/unsubscribe.yml';
import seo from '../../contents/seo.yml';
import { createUseStyles } from 'react-jss';

const { title: seoTitle, description: seoDescription } = seo.unsubscribePage;

const useStyles = createUseStyles({
  title: {
    fontSize: '27px',
    fontWeight: '700',
    color: '#33485C',
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

// use custom hook
const INITIAL = 'initial';
const LOADING = 'loading';
const SUCCESS = 'success';
const ERROR = 'error';

const reducer = (state, { type, payload }) => {
  if (type === INITIAL) {
    return { status: INITIAL };
  }
  if (type === LOADING) {
    return { status: LOADING, data: payload };
  }
  if (type === ERROR) {
    return { status: ERROR, data: payload };
  }
  if (type === SUCCESS) {
    return { status: SUCCESS, data: payload };
  }
  return state;
};

const initState = {
  status: INITIAL,
};

export const UnsubscribePage = ({ location }) => {
  const classes = useStyles();
  const params = new URLSearchParams(location.search);
  const address = params.get('address');
  const uuid = params.get('uuid');
  const {
    site: {
      siteMetadata: { apiUrl },
    },
  } = useStaticQuery(query);
  const [state, dispatch] = useReducer(reducer, initState);

  const unsubscribe = useCallback(async () => {
    dispatch({ type: LOADING, payload: {} });
    const options = {
      crossDomain: true,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const response = await fetch(
        `${apiUrl}/users/${address}/${uuid}/unsubscribe`,
        options
      );
      const { status } = response;
      const message = await response.json();
      if (status >= 200 && status <= 299) {
        dispatch({ type: SUCCESS, payload: { message, status } });
      } else {
        dispatch({ type: ERROR, payload: { message, status } });
      }
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  }, [apiUrl]);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <h1 className="sr-only">{seoTitle}</h1>
      <Hero>
        {state.status === INITIAL && (
          <div className="text-center text-primary">
            <div className={classes.title}>
              Annullare l'iscrizione agli aggiornamenti?
            </div>
            <div className="my-4 text-dark">
              Annullando l’iscrizione non riceverai ulteriori comunicazioni
              <br></br>o aggiornamenti da PA Digitale 2026
            </div>
            <Button
              onClick={unsubscribe}
              type="button"
              className="btn text-uppercase btn-primary"
              aria-label={`Annulla iscrizione`}
              color="primary"
            >
              Annulla Iscrizione
            </Button>
          </div>
        )}
        {state.status === LOADING && (
          <div className="progress-spinner progress-spinner-active mx-auto mt-5">
            <span className="sr-only">Caricamento...</span>
          </div>
        )}
        {state.status === SUCCESS && (
          <div className="text-center text-primary">
            <div className="display-3">{content[state.status].title}</div>
            <div
              className="my-4 text-dark"
              dangerouslySetInnerHTML={{ __html: content[state.status].body }}
            />
            <Link to="/" className="btn text-uppercase btn-primary">
              {content[state.status].button}
            </Link>
          </div>
        )}
        {state.status === ERROR && (
          <div className="text-center text-primary">
            <div className="display-3">{content[state.status].title}</div>
            <div
              className="my-4 text-dark"
              dangerouslySetInnerHTML={{ __html: content[state.status].body }}
            />
            <Button
              type="button"
              className="btn text-uppercase btn-danger"
              onClick={unsubscribe}
            >
              {content[state.status].button}
            </Button>
          </div>
        )}
      </Hero>
    </>
  );
};

UnsubscribePage.propTypes = {
  location: PropTypes.func,
};
