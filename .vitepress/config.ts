import mdSub from 'markdown-it-sub';
import mdSup from 'markdown-it-sup';
import mdMark from 'markdown-it-mark';
import mdPlantUML from 'markdown-it-plantuml';
import { defineConfig } from 'vitepress';

const gistMenu = [
  {
    text: 'Business Analysis',
    collapse: false,
    items: [
      {
        text: 'Introduction',
        link: '/content/gist/business-analysis/',
      },
      {
        text: 'Glossary',
        link: '/content/gist/business-analysis/glossary.md',
      },
      {
        text: 'Inputs',
        link: '/content/gist/business-analysis/inputs.md',
      },
      {
        text: 'Outputs',
        link: '/content/gist/business-analysis/outputs.md',
      },
      {
        text: 'Tools & Techniques',
        link: '/content/gist/business-analysis/tools-techniques.md',
      },
    ],
  },
];

const snippetMenu = [];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'en-US',
  title: 'void',
  description: '!master of all trades',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    siteTitle: false,

    logo: {
      light: '/img/logo.svg',
      dark: '/img/logo-dark.svg',
    },

    nav: [
      { text: 'gist', link: '/content/gist/' },
      { text: 'snippet', link: '/content/snippet/' },
    ],

    sidebar: {
      '/content/gist/': gistMenu,
      '/content/snippet/': snippetMenu,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dacodekid' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/dacodekid' },
    ],

    search: {
      provider: 'local',
    },

    footer: {
      message: "my thoughts are neither my employer's nor my wife's",
    },
  },

  vite: {
    optimizeDeps: {
      include: [],
    },

    build: {
      chunkSizeWarningLimit: 1600,
    },
  },

  markdown: {
    lineNumbers: true,
    math: true,
    config: (md) => {
      md.use(mdSub);
      md.use(mdSup);
      md.use(mdMark);
      md.use(mdPlantUML, {
        openMarker: '```plantuml',
        closeMarker: '```',
      });
    },
  },
});
