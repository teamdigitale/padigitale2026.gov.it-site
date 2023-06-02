const fs = require('fs');
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
jsonFile.map((questions) => {
  questionsCount++;
  const dirName = `0${questionsCount}-${questions.title}`;
  fs.mkdirSync(`./generated/${dirName}`);

  questions.accordions.map((question) => {
    singleQuestionCount++;
    const zeri = singleQuestionCount < 9 ? '00' : '0';
    const nomeFile = question.title.replace(/[^a-zA-Z0-9]/g, '').slice(0, 25);
    const nomeFileCompleted = `${zeri}${singleQuestionCount}_${nomeFile}.md`;
    question.anchorLink = `${zeri}${singleQuestionCount}_${nomeFile}`;
    const output = render(template, question);
    fs.writeFileSync(`./generated/${dirName}/${nomeFileCompleted}`, output);
    console.log('name:', nomeFileCompleted);
    console.log('------------------------------');
  });
  singleQuestionCount = 0;
});
console.log('END: creazione files e directiories');
fs.writeFileSync(outputJSON, JSON.stringify(loadedYaml.questions, null, 2));
