const fs = require('fs');
const fuzzy = require('inquirer-fuzzy-path');

const articleTypes = ['Snippet', 'Gist'];
const rootPath = 'docs';
const vuePath = `${rootPath}/.vuepress`;
const templatePath = `${vuePath}/templates`;
const dataPath = `${vuePath}/data`;

module.exports = (plop) => {
  /* ----------------------------------------------- UTILITY FUNCTIONS ---------------------------------------------- */
  // clean a path string and return an array
  const cleanPath = (path) =>
    path &&
    path
      .split('/')
      .map((value) => value.trim())
      .filter(
        (value, pos) =>
          value &&
          !(pos === 0 && value.toLowerCase() === rootPath.toLowerCase()) &&
          !(pos === 1 && articleTypes.some((type) => value.toLowerCase() === type.toLowerCase()))
      );

  // normalize text
  const normalizeText = (str) =>
    str &&
    str
      .normalize('NFKD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();

  // convert string to kebab-case
  const kebabCase = (str) =>
    str &&
    normalizeText(str)
      .replace(/[^\w\s-]/g, '')
      .replace(/ /g, '-');

  // convert string to snake_case
  const snakeCase = (str) =>
    str &&
    normalizeText(str)
      .replace(/[^\w\s]/g, '')
      .replace(/ /g, '_');

  // build vuepress menu object
  const menuObject = (headers, link) => [
    headers &&
      headers.length > 0 &&
      headers.reduceRight((json, node) => {
        return {
          text: node,
          collapsible: false,
          children: [json],
        };
      }, link),
  ];

  // read a json file
  const readJson = (path) => {
    try {
      return JSON.parse(fs.readFileSync(path, 'utf8'));
    } catch (e) {
      console.error(`Error reading file: ${path}: ${e}`);
      return {};
    }
  };

  // Write a json file
  const writeJson = (path, key, value) => {
    try {
      const data = readJson(path);
      data[key] = value;
      fs.writeFileSync(path, JSON.stringify(data, null, 2, 'utf8'));
    } catch (e) {
      console.log(`Error writing ${path}: ${e}`);
    }
  };

  /* ------------------------------------------------ CUSTOM ACTIONS ------------------------------------------------ */
  plop.setActionType('sidebar', (answers) => {
    const { headers, type, modified } = answers;
    const sidebarFile = `${dataPath}/${type}.json`;

    const srcMenu = readJson(sidebarFile)[type];
    let newMenu = menuObject(headers, modified.link);
    let pointer = srcMenu; // shallow copy (srcMenu will automatically be modified)

    for (const [index, header] of headers.entries()) {
      // find the header in the menu
      const headerFound = pointer.find((node) => kebabCase(node.text) === kebabCase(header));

      // if header not found, add and break out of loop
      if (!headerFound) {
        pointer.push(newMenu[0]);
        break;
      }

      // else move pointer & newMenu to the next level
      pointer = headerFound.children;
      newMenu = newMenu[0].children;

      // if reached the end of the menu & the fullPath not found in the children array, add it
      if (index === headers.length - 1 && !pointer.some((node) => node === newMenu[0])) {
        pointer.push(newMenu[0]);
      }
    }
    writeJson(sidebarFile, type, srcMenu);
  });

  /* ------------------------------------------------ CUSTOM HELPERS ------------------------------------------------ */
  plop.setHelper('kebabCase', kebabCase);
  plop.setHelper('snakeCase', snakeCase);
  plop.setHelper('currentDate', () => new Date().toISOString().split('T')[0]);

  /* ------------------------------------------------ CUSTOM PROMPTS ------------------------------------------------ */
  plop.setPrompt('fuzzy', fuzzy);

  /* -------------------------------------------------- GENERATORS -------------------------------------------------- */
  plop.setGenerator('Article Type', {
    description: 'Article type',

    /* -------------------------------------------------- PROMPTS --------------------------------------------------- */
    prompts: [
      {
        type: 'input',
        name: 'title',
        message: 'Title:',
        validate: (input) => (input && input.trim().length > 0) || 'Title is required',
        filter: (input) => input.trim(),
      },

      {
        type: 'list',
        name: 'type',
        message: 'Article Type?',
        choices: articleTypes,
        filter: (input) => input.toLowerCase(),
      },

      {
        type: 'fuzzy',
        name: 'headers',
        message: 'Path:',
        itemType: 'directory',
        suggestOnly: true,
        rootPath: rootPath,
        validate: (input) => (input && cleanPath(input).length > 0) || 'Enter or select a sub-path',
        excludeFilter: (input, { type }) => !input.startsWith(`${rootPath}/${type}`),
        filter: (input) => cleanPath(input),
      },
    ],

    /* --------------------------------------------------- ACTIONS -------------------------------------------------- */
    actions: (answers) => {
      let actions = [];

      const { headers, type, title } = answers;

      const modified = {
        title: kebabCase(title),
        fullPath: [rootPath, type, ...headers, title].map(kebabCase).join('/'),
        link: ['/', type, ...headers, title, '/'].map(kebabCase).join('/'),
      };

      answers.modified = modified;

      actions.push({
        type: 'add',
        skipIfExists: true,
        path: `${dataPath}/${type}.json`,
        templateFile: `${templatePath}/sidebar.json.hbs`,
      });

      actions.push({ type: 'sidebar' });

      actions.push({
        type: 'add',
        skipIfExists: true,
        path: `${modified.fullPath}/index.md`,
        templateFile: `${templatePath}/${type}.article.md.hbs`,
      });

      if (type === 'snippet') {
        actions.push({
          type: 'add',
          skipIfExists: true,
          path: `${modified.fullPath}/${modified.title}.py`,
          templateFile: `${templatePath}/${type}.code.py.hbs`,
        });
      }

      return actions;
    },
  });
};
