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
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#33485C',
    marginTop: '1.04rem',

    '& svg': {
      marginLeft: '8px',
    },
  },
  bodyText: {
    fontSize: '1rem',
    color: '#33485C',
    lineHeight: '1.389rem',
    margin: '20px 0 30px 0',
  },
  button: {
    composes: 'btn text-uppercase btn-primary mb-5',
    minWidth: '11.111rem',
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

  let initState = {
    status: LOADING,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    if (!uuid || !address) {
      dispatch({ type: ERROR, payload: {} });
    } else {
      dispatch({ type: INITIAL, payload: {} });
    }
  }, [(uuid, address)]);

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
            <div className={classes.title}>{content[state.status].title}</div>
            <div
              className={classes.bodyText}
              dangerouslySetInnerHTML={{ __html: content[state.status].body }}
            ></div>
            <Button
              onClick={unsubscribe}
              type="button"
              className={classes.button}
              aria-label={`Annulla iscrizione`}
              color="primary"
            >
              {content[state.status].button}
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
            <div
              className={classes.title}
              dangerouslySetInnerHTML={{ __html: content[state.status].title }}
            ></div>
            <div
              className={classes.bodyText}
              dangerouslySetInnerHTML={{ __html: content[state.status].body }}
            />
            <Link to="/" className={classes.button}>
              {content[state.status].button}
            </Link>
          </div>
        )}
        {state.status === ERROR && (
          <div className="text-center text-primary">
            <div
              className={classes.title}
              dangerouslySetInnerHTML={{ __html: content[state.status].title }}
            ></div>
            <div
              className={classes.bodyText}
              dangerouslySetInnerHTML={{ __html: content[state.status].body }}
            />
            <Button
              type="button"
              className={classes.button}
              onClick={unsubscribe}
              color="primary"
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
