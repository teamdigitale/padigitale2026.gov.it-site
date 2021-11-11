import React, { useContext, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero } from '../components/hero/Hero';
import { TextChunk } from '../components/TextChunk';
import { Breadcrumb } from '../components/Breadcrumb';
import content from '../../contents/privacy-page/privacy.yml';
import seo from '../../contents/seo.yml';
import { SEO } from '../components/SEO';
import { GlobalStateContext } from '../context/globalContext';

const { title: seoTitle, description: seoDescription } = seo.privacyPage;

const query = graphql`
  query {
    textChunk: markdownRemark(
      fields: { slug: { eq: "privacy-page/privacy" } }
    ) {
      html
    }
  }
`;

export const PrivacyPolicyPage = () => {
  const {
    textChunk: { html: textChunk },
  } = useStaticQuery(query);

  const [{}, dispatch] = useContext(GlobalStateContext);

  return (
    <>
      <SEO title="Privacy - PA digitale 2026" description={seoDescription} />
      <Breadcrumb currentPage={content.breadcrumb} />
      <Hero yPaddingXLScreen={false}>
        <TextChunk html={textChunk} />
      </Hero>
    </>
  );
};
