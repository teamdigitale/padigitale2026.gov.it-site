/* eslint-disable complexity */
/* eslint-disable no-dupe-else-if */
/* eslint-disable sonarjs/no-identical-conditions */
/* eslint-disable sonarjs/cognitive-complexity */

let sameSection = '';
let sectionTitle = '';

const cleanObj = (chip) => {
  Object.keys(chip).forEach((key) => {
    if (chip[key] === null) {
      delete chip[key];
    }
  });
  return chip;
};

export const buildArrayQuestions = (allFaqQuestions, data) => {
  const question = {
    title: '',
    description: '',
    sectionId: '',
    sectionTitle: '',
    accordions: [],
  };

  const section = data.node.fields.slug.split('/');
  const sectionData = data.node.frontmatter['_0'];
  const sectionContent = data.node.internal.content;
  const stringsectPos = section.length === 4 ? 2 : 1;
  const sectionIndexPos = section.length === 3 ? 2 : 3;
  const anchorLink = data.node.fields.slug.slice(9);

  sectionTitle =
    section.length === 3 ? section[1].split('_')[1].replaceAll('-', ' ') : section[2].slice(4).replace('-', ' ');
  sectionTitle = sectionTitle.charAt(0).toUpperCase() + sectionTitle.slice(1);

  if (sectionData.sidebar) {
    const buildSidebar = sectionData.sidebar;
    buildSidebar.map((obj) => {
      allFaqQuestions.sidebar.push(obj);
    });
  }

  if (
    (section[sectionIndexPos].includes('000') && sameSection === null) ||
    (section[sectionIndexPos].includes('000') && sameSection === '') ||
    (section[sectionIndexPos].includes('000') && sameSection === sectionData.sectionId)
  ) {
    question.title = sectionTitle === 'Classification data services' ? 'Classificazione dati e servizi' : sectionTitle;
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
    let sectionId = '';
    if (stringsectPos === 1) {
      sectionId = section[stringsectPos].split('_')[1];
    } else if (stringsectPos === 2) {
      sectionId = section[stringsectPos].slice(4).toLowerCase();
    }
    const searchObject = allFaqQuestions.questions.find((faq) => faq.sectionId === sectionId);
    if (searchObject) {
      sectionData.sectionId = sectionId;
      sectionData.content = sectionContent;
      sectionData.anchorLink = anchorLink;
      searchObject.accordions.push(sectionData);
      const i = allFaqQuestions.questions.findIndex((faq) => faq.sectionId === sectionId);
      allFaqQuestions.questions[i] = searchObject;
    }
    if (sectionData.last) {
      sameSection = '';
      sectionTitle = '';
    }
  }
  return allFaqQuestions;
};
