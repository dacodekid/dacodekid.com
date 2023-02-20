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

  theme: defaultTheme({
    // default theme options here
    sidebar: {
      '/guide/': [
        {
          text: 'Arcade',
          children: [
            {
              text: 'Intro',
              children: [
                {
                  text: 'Journey',
                  children: [
                    '/guide/arcade/intro/one/index.md',
                    '/guide/arcade/intro/two/index.md',
                    '/guide/arcade/intro/three/index.md',
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
