import mdSub from 'markdown-it-sub';
import mdSup from 'markdown-it-sup';
import { defaultTheme, defineUserConfig, viteBundler } from 'vuepress';

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
      '/snippet/': [
        {
          text: 'Code Signal',
          children: [
            {
              text: 'Arcade',
              children: [
                {
                  text: 'Intro',
                  children: [
                    {
                      text: 'The Journey Begins',
                      children: [
                        '/snippet/code-signal/arcade/intro/the-journey-begins/add/',
                        '/snippet/code-signal/arcade/intro/the-journey-begins/century-from-year/',
                        '/snippet/code-signal/arcade/intro/the-journey-begins/check-palindrome/',
                      ],
                    },
                    {
                      text: 'Edge of the Ocean',
                      collapsible: false,
                      children: [
                        '/snippet/code-signal/arcade/intro/edge-of-the-ocean/adjacent-elements-product/',
                        '/snippet/code-signal/arcade/intro/edge-of-the-ocean/shape-area/',
                        '/snippet/code-signal/arcade/intro/edge-of-the-ocean/make-array-consecutive/',
                        '/snippet/code-signal/arcade/intro/edge-of-the-ocean/almost-increasing-sequence/',
                        '/snippet/code-signal/arcade/intro/edge-of-the-ocean/matrix-elements-sum/',
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  }),

  // plugins
  extendsMarkdown: (md) => {
    md.use(mdSub);
    md.use(mdSup);
  },
});
