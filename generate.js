const { readdir, readFile, writeFile } = require('fs/promises');
const yaml = require('js-yaml');
const marked = require('marked');
const moment = require('moment');
const handlebars = require('handlebars');

async function fetchMarkdownFiles() {
  const mdFileNames = await readdir('./src/content/');
  const fetchAllFileContents = await mdFileNames.map(async (filename) => await readFile(`./src/content/${filename}`, {
    encoding: 'utf-8',
  }));
  const fileContents = await Promise.all(fetchAllFileContents);
  return fileContents;
}

/**
 * Parses through each markdown file and extracts metadata located in header. Additionally,
 * transpiles the markdown into html string
 * @returns An object containing markdown rendered as html, title, date, and author
 */
async function parseMarkdownFiles() {
  const fileContents = await fetchMarkdownFiles();
  const data = fileContents.map((content) => {
    /**
         * Each markdown file has a yaml header. The beginning of the yaml
         * is marked by three dashes and the end of yaml is denoted by three more dashes.
         * Anything between those two markers are expected to be valid YAML
         */
    const splitContent = content.split('---');
    const yamlFrontMatter = splitContent[1];
    const markdown = splitContent[2];
    const html = marked(markdown);
    const metadata = yaml.load(yamlFrontMatter);
    // Format the date
    const parsedDate = moment.utc(metadata.date);
    const formattedDate = parsedDate.format('YYYY-MM-DD');
    return { html, fdate: formattedDate, ...metadata };
  });

  // Sort the dates to the most recent post is first
  data.sort((a, b) => {
    const adate = moment(a.date);
    const bdate = moment(b.date);

    return bdate.diff(adate);
  });

  return data;
}

async function createHtmlFiles() {
  const source = await readFile('./templates/post.html', 'utf-8');
  const template = handlebars.compile(source);

  const data = await parseMarkdownFiles();
  const htmlList = data.map((obj) => template({ post: obj }));

  for (let index = 0; index < data.length; index++) {
    const html = htmlList[index];
    const htmlFilePath = `posts/post${index}.html`;
    await writeFile(`./public/${htmlFilePath}`, html);
    // Update data object with path to the created html file
    data[index].path = `./${htmlFilePath}`;
  }

  await embedContent(data);
  console.log('finished embedding post data');
}

const HEADER_COMMENT = `/**
 * DO NOT DELETE OR MODIFY FILE.
 * This file is injected during the preprocessing stage.
*/`;

async function embedContent(data) {
  const objects = data.map((content) => `{
            fdate: '${content.fdate}',
            date: '${content.date}',
            author: '${content.author}',
            title: '${content.title}',
            path: '${content.path}',
        }`);
  const content = `export default [
    ${objects.map((jsobj) => `${jsobj}`)}
    ]`;

  await writeFile('./src/posts.js', `${HEADER_COMMENT}\n\n${content}`);
}

createHtmlFiles();
