/* eslint-disable complexity */
const fs = require('fs');
const { dirname } = require('path');
const yaml = require('js-yaml');
const { render } = require('mustache');

const faq = 'contents/faq-page/faq.yml';
const outputJSON = 'output.json';

const yamlFile = fs.readFileSync(faq, 'utf8');
const loadedYaml = yaml.load(yamlFile);
const jsonFile = loadedYaml.questions;
const yamlAsJSON = JSON.stringify(loadedYaml.questions, null, 2);

let questionsCount = '0';
let singleQuestionCount = '0';
const template = fs.readFileSync('./question_template.md').toString();

console.log('START: creazione files e directiories');

let subDir = '';
let mainSub = '';
let finalSub = '';
let gestUt = 0;
let mis = 0;

jsonFile.map((questions) => {
  subDir = '';
  mainSub = '';
  finalSub = '';
  // console.log('SectionID', questions.sectionId);
  // console.log('Title', questions.title);
  const id = questions.sectionId;
  switch (id) {
    case 'generali':
      subDir = '/01_generali';
      mainSub = '01_generali';
      break;
    case 'accesso':
    case 'gestione-utenti':
    case 'candidatura':
    case 'progetti':
    case 'supporto-tecnico':
      gestUt++;
      const path = gestUt <= 9 ? `00${gestUt}` : `0${gestUt}`;
      mainSub = '02_gestione-utenti';
      finalSub = `${path}-${id}`;
      subDir = `/02_gestione-utenti/${path}-${id}/`;
      break;
    case 'classification-data-services':
      subDir = '/03_classification-data-services';
      mainSub = '03_classification-data-services';
      break;
    case 'piani-di-migrazione':
      subDir = '/04_piani-di-migrazione';
      mainSub = '04_piani-di-migrazione';
      break;
    case 'measure-1-1':
    case 'measure-1-2':
    case 'measure-1-3-1':
    case 'measure-1-4-1':
    case 'measure-1-4-3-pagopa':
    case 'measure-1-4-3-appio':
    case 'measure-1-4-4':
    case 'measure-1-4-5':
    case 'measure-multimisura':
      mis++;
      const misPath = mis <= 9 ? `00${mis}` : `0${mis}`;
      mainSub = '05_misure';
      finalSub = `${misPath}-${id}`;
      subDir = `/05_misure/${misPath}-${id}/`;
      break;
    case 'fondo-innovazione':
      subDir = '/06_fondo-innovazione';
      mainSub = '06_fondo-innovazione';
      break;
    case 'rendicontazione':
      subDir = '/07_rendicontazione';
      mainSub = '07_rendicontazione';
      break;
    default:
      console.log(`Sorry, we are out of ${id}.`);
  }

  questionsCount++;
  const dirName = `./generated${subDir}`;
  console.log('DIRPATH', `./generated${subDir}`);
  console.log('------------------------------');
  if (fs.existsSync(`./generated/${mainSub}`)) {
    if (finalSub !== '') {
      fs.mkdirSync(`./generated/${mainSub}/${finalSub}`);
    }
  } else {
    fs.mkdirSync(`./generated/${mainSub}`);
    if (finalSub !== '') {
      fs.mkdirSync(`./generated/${mainSub}/${finalSub}`);
    }
  }

  questions.accordions.map((question) => {
    singleQuestionCount++;
    const zeri = singleQuestionCount <= 9 ? '00' : '0';
    const nomeFile = question.title.replace(/[^a-zA-Z0-9]/g, '').slice(0, 45);
    const nomeFileCompleted = `${zeri}${singleQuestionCount}_${nomeFile}.md`;
    question.anchorLink = `${zeri}${singleQuestionCount}_${nomeFile}`;
    const output = render(template, question);
    fs.writeFileSync(`${dirName}/${nomeFileCompleted}`, output);
    console.log('name:', nomeFileCompleted);
    console.log('------------------------------');
  });
  singleQuestionCount = 0;
});
console.log('END: creazione files e directiories');
fs.writeFileSync(outputJSON, JSON.stringify(loadedYaml.questions, null, 2));
