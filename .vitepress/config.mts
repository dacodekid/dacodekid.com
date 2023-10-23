import mdSub from 'markdown-it-sub';
import mdSup from 'markdown-it-sup';
import mdPlantUML from 'markdown-it-plantuml';
import { defineConfig } from 'vitepress';

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
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

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
      md.use(mdPlantUML, {
        openMarker: '```plantuml',
        closeMarker: '```',
      });
    },
  },
});
