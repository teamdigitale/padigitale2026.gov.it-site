import React, { useCallback, useEffect, useReducer } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Button } from 'design-react-kit';
import jwt_decode from 'jwt-decode';
import { Hero } from '../components/hero/Hero';
import { SEO } from '../components/SEO';
import content from '../../contents/confirm-page/confirm.yml';
import seo from '../../contents/seo.yml';

const { title: seoTitle, description: seoDescription } = seo.confirmPage;

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

export const ConfirmPage = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const jwt = params.get('jwt');
  const {
    site: {
      siteMetadata: { apiUrl },
    },
  } = useStaticQuery(query);
  const [state, dispatch] = useReducer(reducer, initState);

  const confirm = useCallback(async () => {
    if (jwt && !jwt.match(/(^[\w-]*\.[\w-]*\.[\w-]*$)/)) {
      dispatch({
        type: ERROR,
        payload: `jwt not present or it seems it is not a valid jwt, ${jwt}`,
      });
      return;
    }
    const { address, uuid } = jwt_decode(jwt);
    const options = {
      crossDomain: true,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jwt }),
    };
    try {
      const response = await fetch(`${apiUrl}/users/${address}/${uuid}/confirm`, options);
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
  }, [apiUrl, jwt]);

  useEffect(() => {
    confirm();
  }, [confirm]);

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
            <div className="my-4 text-dark" dangerouslySetInnerHTML={{ __html: content[state.status].body }} />
            <Button type="button" className="btn text-uppercase btn-danger" onClick={confirm}>
              {content[state.status].button}
            </Button>
          </div>
        )}
        {state.status === SUCCESS && (
          <div className="text-center text-primary">
            <div className="display-3">{content[state.status].title}</div>
            <div className="my-4 text-dark" dangerouslySetInnerHTML={{ __html: content[state.status].body }} />
            <Link to="/" className="btn text-uppercase btn-primary">
              {content[state.status].button}
            </Link>
          </div>
        )}
      </Hero>
    </>
  );
};

ConfirmPage.propTypes = {
  location: PropTypes.func,
};
