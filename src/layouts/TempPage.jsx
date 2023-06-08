import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { announce } from '@react-aria/live-announcer';
// import faq from '../../contents/faq-page/faq.yml';
import { buildArrayQuestions } from '../hooks/collectFaq';
import { SideNavigation } from './faq/SideNavigation';
import { QuestionSection } from './faq/QuestionSection';

const allFaqQuestions = {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  name: 'FAQ - PA digitale 2026',
  hero: {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    title: 'Domande frequenti',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    subtitle: 'Esplora le risposte alle domande più frequenti o fai una ricerca per parola chiave',
  },
  sidebar: [],
  // eslint-disable-next-line sonarjs/no-duplicate-string
  noResults: 'Nessun risultato trovato',
  support: {
    tag: 'Supporto',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    title: 'Non hai trovato le risposte che cerchi? Vuoi inviare suggerimenti o ricevere supporto?',
    cards: [
      {
        title: 'Assistenza',
        // eslint-disable-next-line sonarjs/no-duplicate-string
        description: 'Compila il modulo per richiedere chiarimenti e approfondire temi di interesse.',
        // eslint-disable-next-line sonarjs/no-duplicate-string
        link: '/supporto/assistenza',
      },
    ],
  },
  questions: [],
};

export const TempPage = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/faq-page/" } } }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              _0 {
                title
                ariaLabel
                link
                linkLabel
                description
                smallTitle
                sidebar {
                  sectionActive
                  sectionId
                  sectionTitle
                  accordion
                  sublist {
                    sectionActive
                    sectionId
                    sectionTitle
                  }
                  description
                }
                sectionId
                last
                anchorLink
                tag
                sectionTitle
                chips {
                  chipsId
                  id
                  title
                }
              }
              title
            }
            internal {
              content
            }
          }
        }
      }
    }
  `);
  const [newCount, SetNewCount] = useState(0);
  const [questionsMDArray, SetQuestionsMDArray] = useState([]);
  const [newFaq, SetNewFaq] = useState({
    name: 'FAQ - PA digitale 2026',
    hero: {
      title: 'Domande frequenti',
      subtitle: 'Esplora le risposte alle domande più frequenti o fai una ricerca per parola chiave',
    },
    sidebar: [],
    noResults: 'Nessun risultato trovato',
    support: {
      tag: 'Supporto',
      title: 'Non hai trovato le risposte che cerchi? Vuoi inviare suggerimenti o ricevere supporto?',
      cards: [
        {
          title: 'Assistenza',
          description: 'Compila il modulo per richiedere chiarimenti e approfondire temi di interesse.',
          link: '/supporto/assistenza',
        },
      ],
    },
    questions: [],
  });
  useEffect(() => {
    announce('Pagina caricata Temp');
    edges.sort((a, b) => {
      const nameA = a.node.fields.slug.toUpperCase();
      const nameB = b.node.fields.slug.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    const totEges = edges.length - 1;
    SetQuestionsMDArray(edges);
    let newQuestionsTotal = 0;
    edges.map(async (questionData, idx) => {
      newQuestionsTotal++;
      // SetNewFaq(await buildArrayQuestions(questionData));
      // newFaq.questions.push(await buildArrayQuestions(questionData));
      const sectionData = await buildArrayQuestions(questionData);
      if (idx === totEges) {
        console.log(idx, totEges);
        console.log(sectionData);
        allFaqQuestions.questions = sectionData.questions;
        allFaqQuestions.sidebar = sectionData.sidebar;
        newFaq.questions = sectionData.questions;
        newFaq.sidebar = sectionData.sidebar;
        console.log('xxx', newFaq);
        SetNewFaq(newFaq);
      }
    });
    SetNewCount(newQuestionsTotal);
  }, []);
  // Ordino per nomeFile

  console.log('NEW FAQ SCHEMA', newFaq);
  return (
    <>
      <h1>NEW({newCount})</h1>
      <SideNavigation getFilter={() => { }} activeList={newFaq.questions} searchValue={''} list={newFaq.sidebar} />
      {newFaq.questions.map((question) => (
        <QuestionSection
          key={question.title}
          item={question}
          inputText="aaa"
          setQuestions={() => { }}
          totalQuestions={newFaq.questions}
        />
      ))}
    </>
  );
};
