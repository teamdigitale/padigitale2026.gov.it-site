import React, { useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
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

export const ConfirmPage = ({ jwt }) => {
  const {
    site: {
      siteMetadata: { apiUrl },
    },
  } = useStaticQuery(query);

  useEffect(() => {
    const option = {
      method: 'PUT',
      'Content-Type': 'application/json',
    };
    const confirm = async () => {
      try {
        const response = await fetch(`${apiUrl}/user/${jwt}/confirm`, option);
        const statusCode = response.statusCode;
        const message = await response.json();
        console.log(statusCode, message);
      } catch (error) {
        console.error(error);
      }
    };

    if (jwt) {
      confirm();
    }
  }, [apiUrl, jwt]);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <h1 className="sr-only">{content.title}</h1>
      <Hero>
        <div className="text-center text-primary">
          <div className="display-3">{content.title}</div>
          <div className="my-4 text-dark" dangerouslySetInnerHTML={{ __html: content.body }} />
          <Link to="/" className="btn text-uppercase btn-primary">
            {content.returnToHome}
          </Link>
        </div>
      </Hero>
    </>
  );
};

ConfirmPage.propTypes = {
  jwt: PropTypes.string.isRequired,
};
