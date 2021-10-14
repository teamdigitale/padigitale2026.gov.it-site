import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Hero } from '../components/hero/Hero';
import { TextChunk } from '../components/TextChunk';
import { Breadcrumb } from '../components/Breadcrumb';
import content from '../../contents/note-legali-page/note-legali.yml';
import seo from '../../contents/seo.yml';
import { SEO } from '../components/SEO';

const { title: seoTitle, description: seoDescription } = seo.noteLegaliPage;

const query = graphql`
  query {
    textChunk: markdownRemark(fields: { slug: { eq: "note-legali-page/note-legali" } }) {
      html
    }
  }
`;

export const NoteLegaliPage = () => {
  const {
    textChunk: { html: textChunk },
  } = useStaticQuery(query);
  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      <Breadcrumb currentPage={content.breadcrumb} />
      <Hero yPaddingXLScreen={false}>
        <TextChunk html={textChunk} />
      </Hero>
    </>
  );
};
