import React, { useCallback, useEffect, useReducer } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Button } from 'design-react-kit';
import jwt_decode from 'jwt-decode';
import { Hero } from '../components/hero/Hero';
import { SEO } from '../components/SEO';
import { announce } from '@react-aria/live-announcer';
import content from '../../contents/unsubscribe-page/unsubscribe.yml';
import seo from '../../contents/seo.yml';

const { title: seoTitle, description: seoDescription } = seo.unsubscribePage;

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
const LOADING = 'loading';
const SUCCESS = 'success';
const ERROR = 'error';

const reducer = (state, { type, payload }) => {
  if (type === LOADING) {
    return { status: LOADING };
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
  status: LOADING,
};

export const UnsubscribePage = ({ location }) => {
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

  useEffect(() => {
    unsubscribe();
  }, [unsubscribe]);

  useEffect(() => {
    announce('Pagina caricata ' + seoTitle);
  }, []);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <h1 className="sr-only">{seoTitle}</h1>
      <Hero>
        {state.status === LOADING && (
          <div className="text-center text-primary">
            <div className="display-3">{content[state.status].title}</div>
            <div className="progress-spinner progress-spinner-active mx-auto mt-5">
              <span className="sr-only">Caricamento...</span>
            </div>
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
      </Hero>
    </>
  );
};

UnsubscribePage.propTypes = {
  location: PropTypes.func,
};