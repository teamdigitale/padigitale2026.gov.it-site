import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { buildArrayQuestions } from '../hooks/collectFaq';
import { SideNavigation } from './faq/SideNavigation';
import { QuestionSection } from './faq/QuestionSection';

const allFaqQuestions = {
  name: 'FAQ - PA digitale 2026 RELOAD',
  hero: {
    title: 'Domande frequenti',
    subtitle: 'Esplora le risposte alle domande più frequenti o fai una ricerca per parola chiave',
  },
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
  const [faqLoaded, SetFaqLoaded] = useState(false);
  const [newFaq, SetNewFaq] = useState({
    name: 'FAQ - PA digitale 2026',
    hero: {
      title: 'Domande frequenti',
      subtitle: 'Esplora le risposte alle domande più frequenti o fai una ricerca per parola chiave',
    },
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
  });
  useEffect(() => {
    // Ordino per nomeFile
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
    let newQuestionsTotal = 0;

    const allFaqQuestions = {
      sidebar: [],
      questions: [],
    };
    edges.map(async (questionData, idx) => {
      newQuestionsTotal++;
      const sectionData = await buildArrayQuestions(allFaqQuestions, questionData);
      if (idx === totEges) {
        const Obj = Object.assign({}, allFaqQuestions);
        Obj.questions = sectionData ? sectionData.questions : [];
        Obj.sidebar = sectionData ? sectionData.sidebar : [];
        SetNewFaq(Obj);
      }
    });
    SetNewCount(newQuestionsTotal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>NEW({newCount})</h1>
      {newFaq.sidebar && (
        <SideNavigation getFilter={() => { }} activeList={newFaq.questions} searchValue={''} list={newFaq.sidebar} />
      )}
      {newFaq.questions &&
        newFaq.questions.map((question) => (
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
