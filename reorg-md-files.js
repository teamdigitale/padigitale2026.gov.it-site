const fs = require('fs');
const { readdir, readFile, writeFile } = require('fs/promises');
const matter = require('gray-matter');
const { stringify } = require('yaml');

const directory = './FAQ/02-Utilizzo-piattaforma/01-Accesso'; // <=== !!!!AGGIORNARE!!! per puntamento alla dir da scansionare

async function saveFile(filename, newContent) {
  await fs.writeFileSync(`./generated/${filename}`, newContent);
}

async function saveArrayFile(arrayObj) {
  console.log('START', arrayObj.length);
  await arrayObj.sort((a, b) => {
    const nameA = a.filename.toUpperCase();
    const nameB = b.filename.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  let numberForfilename = 1;
  arrayObj.map(async (question) => {
    const arrName = question.filename.split('_');
    const zeri = numberForfilename <= 9 ? '00' : '0';
    const newNamefile = `${zeri}${numberForfilename}_${arrName[1]}`;
    console.log('NEW', newNamefile, '\n');
    numberForfilename++;
    await fs.writeFileSync(`./generated/${newNamefile}`, question.content);
  });
  // await fs.writeFileSync(`./generated/${filename}`, newContent);
}
const contentsArray = [];
async function updateFrontMatter(filename) {
  const filepath = `${directory}/${filename}`;
  const { data: frontMatter, content } = matter(await readFile(filepath));
  let contentToMove = '';
  if (!filename.includes('000')) {
    frontMatter[0]['sectionId'] = 'accesso'; // <=== !!!!AGGIORNARE!!! per ogni caso d'uso
    contentToMove = frontMatter[0].content; // <=== recupera il content dal FontMatter
    delete frontMatter[0].content; // <=== elimina il content dal FontMatter
    delete frontMatter[0].anchorLink; // <=== elimina non più necessario
    // console.log('content', content);
  }

  const newContent = `---\n${stringify(frontMatter)}---\n${contentToMove}`; // <=== salva il nuovo contenuto del file
  if (!filename.includes('000')) {
    const question = { filename, content: newContent }; // <=== Crea oggetto con il contenuto del file e nome
    contentsArray.push(question); // <=== Aggiunge oggetto all'Array
    // saveFile(filename, newContent); // <=== Funzione per salvare i nuovi files quando non ci sono subDir
  }
  // console.log('contentsArray', contentsArray);
  // saveArrayFile(contentsArray);
}

async function main() {
  const filenames = await readdir(directory);
  const markdownFilenames = filenames.filter((f) => f.endsWith('.md'));
  await Promise.all(markdownFilenames.map(updateFrontMatter));
  await saveArrayFile(contentsArray);
}

main().catch(console.error);
