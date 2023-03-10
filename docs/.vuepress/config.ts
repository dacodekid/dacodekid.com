import fs from 'fs';
import mdSub from 'markdown-it-sub';
import mdSup from 'markdown-it-sup';
import { searchPlugin } from '@vuepress/plugin-search';
import mermaidPlugin from './plugins/mermaid/node/';
import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress';

const readJson = (file, key) => {
  try {
    return JSON.parse(fs.readFileSync(`docs/.vuepress/data/${file}`, 'utf8'))[key];
  } catch (e) {
    console.error(`Error reading file: ${file}: ${e}`);
    return {};
  }
};

export default defineUserConfig({
  // site config
  base: '/',
  lang: 'en-US',
  title: 'void',
  description: '!master of all trades',
  head: [['link', { rel: 'icon', href: 'favicon.ico' }]],

  // bundler config
  bundler: viteBundler({
    viteOptions: {
      server: {
        fs: {
          strict: false,
        },
      },
    },
  }),

  // theme and its config
  theme: defaultTheme({
    logo: '/img/logo.svg',
    logoDark: '/img/logo-dark.svg',
    repo: 'dacodekid/',
    editLink: false,
    contributors: false,
    lastUpdated: false,
    navbar: [
      { text: 'snippet', link: '/snippet/' },
      { text: 'gist', link: '/gist/' },
    ],
    sidebarDepth: 0,
    sidebar: {
      '/snippet/': readJson('snippet.json', 'snippet'),
      '/gist/': readJson('gist.json', 'gist'),
    },
  }),

  // plugins
  extendsMarkdown: (md) => {
    md.use(mdSub);
    md.use(mdSup);
  },

  plugins: [
    searchPlugin({
      isSearchable: (page) => page.path !== '/', // exclude the homepage
    }),
    mermaidPlugin({
      token: 'mermaid',
      theme: 'dark',
    }),
  ],
});
