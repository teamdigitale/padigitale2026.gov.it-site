import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { announce } from '@react-aria/live-announcer';
import faq from '../../contents/faq-page/faq.yml';

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
let sameSection = '';

const cleanObj = (chip) => {
  Object.keys(chip).forEach((key) => {
    if (chip[key] === null) {
      delete chip[key];
    }
  });
  return chip;
};
const buildArrayQuestions = (data) => {
  const section = data.node.fields.slug.split('/');
  // Check if data are the MainDataSectionInfo
  const sectionData = data.node.frontmatter['_0'];
  const stringsectPos = section.length === 4 ? 2 : 1;
  const sectionPos = section.length === 4 ? 3 : 2;

  if (sectionData.sidebar) {
    const buildSidebar = sectionData.sidebar;
    buildSidebar.map((obj) => {
      allFaqQuestions.sidebar.push(obj);
    });
  }
  if (
    (section[sectionPos].includes('000') && sameSection === '') ||
    (section[sectionPos].includes('000') && sameSection === sectionData.sectionId)
  ) {
    const question = {
      title: '',
      description: '',
      sectionId: '',
      sectionTitle: '',
      accordions: [],
    };

    question.title = sectionData.title;
    question.description = sectionData.description;
    question.sectionId = sectionData.sectionId;

    if (sectionData.sectionTitle) {
      question.sectionTitle = sectionData.sectionTitle;
    }
    if (sectionData.smallTitle) {
      question.smallTitle = sectionData.smallTitle;
    }
    if (sectionData.chips && sectionData.chips.length > 0) {
      question.chips = [];
      sectionData.chips.map((chip) => {
        question.chips.push(cleanObj(chip));
      });
    }
    if (sectionData.tag && sectionData.tag.length > 0) {
      question.tag = [];
      sectionData.tag.map((tag) => {
        question.tag.push(cleanObj(tag));
      });
    }
    sameSection = sectionData.sectionId;
    allFaqQuestions.questions.push(question);
  } else {
    const sectionId = section[stringsectPos].slice(3).toLowerCase();
    const searchObject = allFaqQuestions.questions.find((faq) => faq.sectionId === sectionId);
    if (searchObject) {
      searchObject.accordions.push(sectionData);
      const i = allFaqQuestions.questions.findIndex((faq) => faq.sectionId === sectionId);
      allFaqQuestions.questions[i] = searchObject;
    }
    if (sectionData.last) {
      sameSection = '';
    }
  }
  return allFaqQuestions;
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
                content
                link
                linkLabel
                description
                sectionId
                last
                sectionTitle
                smallTitle
                chips {
                  chipsId
                  id
                  title
                }
                tag
                sidebar {
                  accordion
                  sectionActive
                  sectionId
                  sectionTitle
                  sublist {
                    sectionActive
                    sectionId
                    sectionTitle
                  }
                }
              }
              title
            }
          }
        }
      }
    }
  `);
  const [count, SetCount] = useState(0);
  const [questionsMDArray, SetQuestionsMDArray] = useState([]);
  const [faq, SetFaq] = useState({
    questions: [],
    sidebar: [],
  });
  useEffect(() => {
    // let countT = 1;
    // announce('Pagina caricata Temp');
    // faq.questions.map((question) => {
    //   SetCount(countT++);
    //   question.accordions.map((q2, idx) => {
    //     SetCount(countT++);
    //   });
    // });
    // console.log('TOTAL QUESTION', countT);
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
    SetQuestionsMDArray(edges);

    questionsMDArray.map(async (questionData) => {
      SetFaq(await buildArrayQuestions(questionData));
    });
  }, [edges, questionsMDArray]);
  console.log('FAQ RENDERED', faq);
  return (
    <>
      <h1>OLD ({count})</h1>
      {faq.questions.map((question, i) => (
        <div key={i}>
          {i} - {question.title}
        </div>
      ))}
      <h1>NEW</h1>
      <SideNavigation getFilter={() => { }} activeList={faq.questions} searchValue={''} list={faq.sidebar} />
      {faq.questions.map((question) => (
        <QuestionSection
          key={question.title}
          item={question}
          inputText="aaa"
          setQuestions={() => { }}
          totalQuestions={faq.questions}
        />
      ))}
    </>
  );
};
