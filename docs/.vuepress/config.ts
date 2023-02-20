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
                        '/snippet/code-signal/arcade/intro/the-journey-begins/add/index.md',
                        '/snippet/code-signal/arcade/intro/the-journey-begins/century-from-year/index.md',
                        '/snippet/code-signal/arcade/intro/the-journey-begins/check-palindrome/index.md',
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
