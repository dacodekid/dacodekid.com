import mdSub from 'markdown-it-sub';
import mdSup from 'markdown-it-sup';
import mdMark from 'markdown-it-mark';
import mdPlantUML from 'markdown-it-plantuml';
import mdMultimdTable from 'markdown-it-multimd-table';
import { mermaid } from './theme/plugins/mermaid';
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
        text: 'Knowledge Areas',
        collapsed: false,
        items: [
          {
            text: 'Needs Assessment',
            link: '/content/gist/business-analysis/knowledge-areas/needs-assessment.md',
          },
          {
            text: 'Stakeholder Engagement',
            link: '/content/gist/business-analysis/knowledge-areas/stakeholder-engagement.md',
          },
          {
            text: 'Elicitation',
            link: '/content/gist/business-analysis/knowledge-areas/elicitation.md',
          },
          {
            text: 'Analysis',
            link: '/content/gist/business-analysis/knowledge-areas/analysis.md',
          },
          {
            text: 'Traceability & Monitoring',
            link: '/content/gist/business-analysis/knowledge-areas/traceability-and-monitoring.md',
          },
          {
            text: 'Solution Evaluation',
            link: '/content/gist/business-analysis/knowledge-areas/solution-evaluation.md',
          },
        ],
      },
      {
        text: 'Process Groups',
        collapsed: false,
        items: [
          {
            text: 'Defining & Aligning',
            link: '/content/gist/business-analysis/process-groups/defining-and-aligning.md',
          },
          {
            text: 'Initiating',
            link: '/content/gist/business-analysis/process-groups/initiating.md',
          },
          {
            text: 'Planning',
            link: '/content/gist/business-analysis/process-groups/planning.md',
          },
          {
            text: 'Executing',
            link: '/content/gist/business-analysis/process-groups/executing.md',
          },
          {
            text: 'Monitoring & Controlling',
            link: '/content/gist/business-analysis/process-groups/monitoring-and-controlling.md',
          },
          {
            text: 'Releasing',
            link: '/content/gist/business-analysis/process-groups/releasing.md',
          },
        ],
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
      {
        text: 'Processes',
        link: '/content/gist/business-analysis/processes.md',
      },
      {
        text: 'Process Groups vs Knowledge Areas',
        link: '/content/gist/business-analysis/process-groups-vs-knowledge-areas.md',
      },
    ],
  },
];

const snippetMenu = [
  {
    text: 'Code Signal',
    collapsed: false,
    items: [
      {
        text: 'Arcade',
        collapsed: false,
        items: [
          {
            text: 'Intro',
            collapsed: false,
            items: [
              {
                text: 'The Journey Begins',
                collapsed: false,
                items: [
                  {
                    text: 'Add',
                    link: '/content/snippet/code-signal/arcade/intro/the-journey-begins/add/',
                  },
                  {
                    text: 'Century From Year',
                    link: '/content/snippet/code-signal/arcade/intro/the-journey-begins/century-from-year/',
                  },
                  {
                    text: 'Check Palindrome',
                    link: '/content/snippet/code-signal/arcade/intro/the-journey-begins/check-palindrome/',
                  },
                ],
              },
              {
                text: 'Edge of the Ocean',
                collapsed: false,
                items: [
                  {
                    text: 'Adjacent Elements Product',
                    link: '/content/snippet/code-signal/arcade/intro/edge-of-the-ocean/adjacent-elements-product/',
                  },
                  {
                    text: 'Shape Area',
                    link: '/content/snippet/code-signal/arcade/intro/edge-of-the-ocean/shape-area/',
                  },
                  {
                    text: 'Make Array Consecutive',
                    link: '/content/snippet/code-signal/arcade/intro/edge-of-the-ocean/make-array-consecutive/',
                  },
                  {
                    text: 'Almost Increasing Sequence',
                    link: '/content/snippet/code-signal/arcade/intro/edge-of-the-ocean/almost-increasing-sequence/',
                  },
                  {
                    text: 'Matrix Elements Sum',
                    link: '/content/snippet/code-signal/arcade/intro/edge-of-the-ocean/matrix-elements-sum/',
                  },
                ],
              },
              {
                text: 'Smooth Sailing',
                collapsed: false,
                items: [
                  {
                    text: 'All Longest Strings',
                    link: '/content/snippet/code-signal/arcade/intro/smooth-sailing/all-longest-strings/',
                  },
                  {
                    text: 'Common Character Count',
                    link: '/content/snippet/code-signal/arcade/intro/smooth-sailing/common-character-count/',
                  },
                  {
                    text: 'Is Lucky',
                    link: '/content/snippet/code-signal/arcade/intro/smooth-sailing/is-lucky/',
                  },
                  {
                    text: 'Sort By Height',
                    link: '/content/snippet/code-signal/arcade/intro/smooth-sailing/sort-by-height/',
                  },
                  {
                    text: 'Reverse In Parentheses',
                    link: '/content/snippet/code-signal/arcade/intro/smooth-sailing/reverse-in-parentheses/',
                  },
                ],
              },
              {
                text: 'Exploring the Water',
                collapsed: false,
                items: [
                  {
                    text: 'Alternating Sums',
                    link: '/content/snippet/code-signal/arcade/intro/exploring-the-water/alternating-sums/',
                  },
                  {
                    text: 'Add Border',
                    link: '/content/snippet/code-signal/arcade/intro/exploring-the-water/add-border/',
                  },
                  {
                    text: 'Are Similar',
                    link: '/content/snippet/code-signal/arcade/intro/exploring-the-water/are-similar/',
                  },
                  {
                    text: 'Array Change',
                    link: '/content/snippet/code-signal/arcade/intro/exploring-the-water/array-change/',
                  },
                  {
                    text: 'Palindrome Rearranging',
                    link: '/content/snippet/code-signal/arcade/intro/exploring-the-water/palindrome-rearranging/',
                  },
                ],
              },
              {
                text: 'Island of Knowledge',
                collapsed: false,
                items: [
                  {
                    text: 'Are Equally Strong',
                    link: '/content/snippet/code-signal/arcade/intro/island-of-knowledge/are-equally-strong/',
                  },
                  {
                    text: 'Array Maximal Adjacent Difference',
                    link: '/content/snippet/code-signal/arcade/intro/island-of-knowledge/array-maximal-adjacent-difference/',
                  },
                  {
                    text: 'Is Ipv4 Address',
                    link: '/content/snippet/code-signal/arcade/intro/island-of-knowledge/is-ipv4-address/',
                  },
                  {
                    text: 'Avoid Obstacles',
                    link: '/content/snippet/code-signal/arcade/intro/island-of-knowledge/avoid-obstacles/',
                  },
                  {
                    text: 'Box Blur',
                    link: '/content/snippet/code-signal/arcade/intro/island-of-knowledge/box-blur/',
                  },
                  {
                    text: 'Minesweeper',
                    link: '/content/snippet/code-signal/arcade/intro/island-of-knowledge/minesweeper/',
                  },
                ],
              },
              {
                text: 'Rains of Reason',
                collapsed: false,
                items: [
                  {
                    text: 'Array Replace',
                    link: '/content/snippet/code-signal/arcade/intro/rains-of-reason/array-replace/',
                  },
                  {
                    text: 'Even Digits Only',
                    link: '/content/snippet/code-signal/arcade/intro/rains-of-reason/even-digits-only/',
                  },
                  {
                    text: 'Variable Name',
                    link: '/content/snippet/code-signal/arcade/intro/rains-of-reason/variable-name/',
                  },
                  {
                    text: 'Alphabetic Shift',
                    link: '/content/snippet/code-signal/arcade/intro/rains-of-reason/alphabetic-shift/',
                  },
                  {
                    text: 'Chess Board Cell Color',
                    link: '/content/snippet/code-signal/arcade/intro/rains-of-reason/chess-board-cell-color/',
                  },
                ],
              },
              {
                text: 'Through the Fog',
                collapsed: false,
                items: [
                  {
                    text: 'Circle Of Numbers',
                    link: '/content/snippet/code-signal/arcade/intro/through-the-fog/circle-of-numbers/',
                  },
                  {
                    text: 'Deposit Profit',
                    link: '/content/snippet/code-signal/arcade/intro/through-the-fog/deposit-profit/',
                  },
                  {
                    text: 'Absolute Values Sum Minimization',
                    link: '/content/snippet/code-signal/arcade/intro/through-the-fog/absolute-values-sum-minimization/',
                  },
                  {
                    text: 'Strings Rearrangement',
                    link: '/content/snippet/code-signal/arcade/intro/through-the-fog/strings-rearrangement/',
                  },
                ],
              },
              {
                text: 'Diving Deeper',
                collapsed: false,
                items: [
                  {
                    text: 'Extracteach Kth',
                    link: '/content/snippet/code-signal/arcade/intro/diving-deeper/extracteach-kth/',
                  },
                  {
                    text: 'First Digit',
                    link: '/content/snippet/code-signal/arcade/intro/diving-deeper/first-digit/',
                  },
                  {
                    text: 'Different Symbols Naive',
                    link: '/content/snippet/code-signal/arcade/intro/diving-deeper/different-symbols-naive/',
                  },
                  {
                    text: 'Array Max Consecutive Sum',
                    link: '/content/snippet/code-signal/arcade/intro/diving-deeper/array-max-consecutive-sum/',
                  },
                ],
              },
              {
                text: 'Dark Wilderness',
                collapsed: false,
                items: [
                  {
                    text: 'Growing Plant',
                    link: '/content/snippet/code-signal/arcade/intro/dark-wilderness/growing-plant/',
                  },
                  {
                    text: 'Knapsack Light',
                    link: '/content/snippet/code-signal/arcade/intro/dark-wilderness/knapsack-light/',
                  },
                  {
                    text: 'Longest Digits Prefix',
                    link: '/content/snippet/code-signal/arcade/intro/dark-wilderness/longest-digits-prefix/',
                  },
                  {
                    text: 'Digit Degree',
                    link: '/content/snippet/code-signal/arcade/intro/dark-wilderness/digit-degree/',
                  },
                  {
                    text: 'Bishop And Pawn',
                    link: '/content/snippet/code-signal/arcade/intro/dark-wilderness/bishop-and-pawn/',
                  },
                ],
              },
              {
                text: 'Eruption of Light',
                collapsed: false,
                items: [
                  {
                    text: 'Is Beautiful String',
                    link: '/content/snippet/code-signal/arcade/intro/eruption-of-light/is-beautiful-string/',
                  },
                  {
                    text: 'Find Email Domain',
                    link: '/content/snippet/code-signal/arcade/intro/eruption-of-light/find-email-domain/',
                  },
                  {
                    text: 'Build Palindrome',
                    link: '/content/snippet/code-signal/arcade/intro/eruption-of-light/build-palindrome/',
                  },
                  {
                    text: 'Elections Winners',
                    link: '/content/snippet/code-signal/arcade/intro/eruption-of-light/elections-winners/',
                  },
                  {
                    text: 'Is Mac48 Address',
                    link: '/content/snippet/code-signal/arcade/intro/eruption-of-light/is-mac48-address/',
                  },
                ],
              },
              {
                text: 'Rainbow of Clarity',
                collapsed: false,
                items: [
                  {
                    text: 'Is Digit',
                    link: '/content/snippet/code-signal/arcade/intro/rainbow-of-clarity/is-digit/',
                  },
                  {
                    text: 'Line Encoding',
                    link: '/content/snippet/code-signal/arcade/intro/rainbow-of-clarity/line-encoding/',
                  },
                  {
                    text: 'Chess Knight',
                    link: '/content/snippet/code-signal/arcade/intro/rainbow-of-clarity/chess-knight/',
                  },
                  {
                    text: 'Delete Digit',
                    link: '/content/snippet/code-signal/arcade/intro/rainbow-of-clarity/delete-digit/',
                  },
                ],
              },
              {
                text: 'Land of Logic',
                collapsed: false,
                items: [
                  {
                    text: 'Longest Word',
                    link: '/content/snippet/code-signal/arcade/intro/land-of-logic/longest-word/',
                  },
                  {
                    text: 'Valid Time',
                    link: '/content/snippet/code-signal/arcade/intro/land-of-logic/valid-time/',
                  },
                  {
                    text: 'Sum Up Numbers',
                    link: '/content/snippet/code-signal/arcade/intro/land-of-logic/sum-up-numbers/',
                  },
                  {
                    text: 'Different Squares',
                    link: '/content/snippet/code-signal/arcade/intro/land-of-logic/different-squares/',
                  },
                  {
                    text: 'Digits Product',
                    link: '/content/snippet/code-signal/arcade/intro/land-of-logic/digits-product/',
                  },
                  {
                    text: 'File Naming',
                    link: '/content/snippet/code-signal/arcade/intro/land-of-logic/file-naming/',
                  },
                  {
                    text: 'Message From Binary Code',
                    link: '/content/snippet/code-signal/arcade/intro/land-of-logic/message-from-binary-code/',
                  },
                  {
                    text: 'Spiral Numbers',
                    link: '/content/snippet/code-signal/arcade/intro/land-of-logic/spiral-numbers/',
                  },
                  {
                    text: 'Sudoku',
                    link: '/content/snippet/code-signal/arcade/intro/land-of-logic/sudoku/',
                  },
                ],
              },
            ],
          },
          {
            text: 'The Core',
            collapsed: false,
            items: [
              {
                text: 'Intro Gates',
                collapsed: false,
                items: [
                  {
                    text: 'Add Two Digits',
                    link: '/content/snippet/code-signal/arcade/the-core/intro-gates/add-two-digits/',
                  },
                  {
                    text: 'Largest Number',
                    link: '/content/snippet/code-signal/arcade/the-core/intro-gates/largest-number/',
                  },
                  {
                    text: 'Candies',
                    link: '/content/snippet/code-signal/arcade/the-core/intro-gates/candies/',
                  },
                  {
                    text: 'Seats In Theater',
                    link: '/content/snippet/code-signal/arcade/the-core/intro-gates/seats-in-theater/',
                  },
                  {
                    text: 'Max Multiple',
                    link: '/content/snippet/code-signal/arcade/the-core/intro-gates/max-multiple/',
                  },
                  {
                    text: 'Circle Of Numbers',
                    link: '/content/snippet/code-signal/arcade/the-core/intro-gates/circle-of-numbers/',
                  },
                  {
                    text: 'Late Ride',
                    link: '/content/snippet/code-signal/arcade/the-core/intro-gates/late-ride/',
                  },
                  {
                    text: 'Phone Call',
                    link: '/content/snippet/code-signal/arcade/the-core/intro-gates/phone-call/',
                  },
                ],
              },
              {
                text: 'At the Crossroads',
                collapsed: false,
                items: [
                  {
                    text: 'Reach Next Level',
                    link: '/content/snippet/code-signal/arcade/the-core/at-the-crossroads/reach-next-level/',
                  },
                  {
                    text: 'Knapsack Light',
                    link: '/content/snippet/code-signal/arcade/the-core/at-the-crossroads/knapsack-light/',
                  },
                  {
                    text: 'Extra Number',
                    link: '/content/snippet/code-signal/arcade/the-core/at-the-crossroads/extra-number/',
                  },
                  {
                    text: 'Is Infinite Process',
                    link: '/content/snippet/code-signal/arcade/the-core/at-the-crossroads/is-infinite-process/',
                  },
                  {
                    text: 'Arithmetic Expression',
                    link: '/content/snippet/code-signal/arcade/the-core/at-the-crossroads/arithmetic-expression/',
                  },
                  {
                    text: 'Tennis Set',
                    link: '/content/snippet/code-signal/arcade/the-core/at-the-crossroads/tennis-set/',
                  },
                  {
                    text: 'Will You',
                    link: '/content/snippet/code-signal/arcade/the-core/at-the-crossroads/will-you/',
                  },
                  {
                    text: 'Metro Card',
                    link: '/content/snippet/code-signal/arcade/the-core/at-the-crossroads/metro-card/',
                  },
                ],
              },
              {
                text: 'Corner of 0s and 1s',
                collapsed: false,
                items: [
                  {
                    text: 'Kill K Th Bit',
                    link: '/content/snippet/code-signal/arcade/the-core/corner-of-0s-and-1s/kill-k-th-bit/',
                  },
                  {
                    text: 'Array Packing',
                    link: '/content/snippet/code-signal/arcade/the-core/corner-of-0s-and-1s/array-packing/',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: 'Codewars',
    collapsed: false,
    items: [
      {
        text: '8 Ky\u016b',
        collapsed: false,
        items: [
          {
            text: 'Floating Point Comparison',
            link: '/content/snippet/codewars/8-kyu/floating-point-comparison/',
          },
          {
            text: 'Gravity Flip',
            link: '/content/snippet/codewars/8-kyu/gravity-flip/',
          },
          {
            text: 'Is The Date Today',
            link: '/content/snippet/codewars/8-kyu/is-the-date-today/',
          },
        ],
      },
      {
        text: '7 Ky\u016b',
        collapsed: false,
        items: [
          {
            text: 'Highest And Lowest',
            link: '/content/snippet/codewars/7-kyu/highest-and-lowest/',
          },
          {
            text: 'Sum Of All Arguments',
            link: '/content/snippet/codewars/7-kyu/sum-of-all-arguments/',
          },
          {
            text: 'Growth Of A Population',
            link: '/content/snippet/codewars/7-kyu/growth-of-a-population/',
          },
          {
            text: 'Number Pairs',
            link: '/content/snippet/codewars/7-kyu/number-pairs/',
          },
          {
            text: 'Battle Of The Characters Easy',
            link: '/content/snippet/codewars/7-kyu/battle-of-the-characters-easy/',
          },
        ],
      },
      {
        text: '6 Ky\u016b',
        collapsed: false,
        items: [
          {
            text: 'Narcissistic Number',
            link: '/content/snippet/codewars/6-kyu/narcissistic-number/',
          },
          {
            text: 'Persistent Bugger',
            link: '/content/snippet/codewars/6-kyu/persistent-bugger/',
          },
          {
            text: 'Is A Number Prime',
            link: '/content/snippet/codewars/6-kyu/is-a-number-prime/',
          },
          {
            text: 'Stop Gninnips My Sdrow',
            link: '/content/snippet/codewars/6-kyu/stop-gninnips-my-sdrow/',
          },
          {
            text: 'Find The Missing Letter',
            link: '/content/snippet/codewars/6-kyu/find-the-missing-letter/',
          },
          {
            text: 'Take A Ten Minute Walk',
            link: '/content/snippet/codewars/6-kyu/take-a-ten-minute-walk/',
          },
          {
            text: 'Which Are In',
            link: '/content/snippet/codewars/6-kyu/which-are-in/',
          },
          {
            text: 'Find The Parity Outlier',
            link: '/content/snippet/codewars/6-kyu/find-the-parity-outlier/',
          },
          {
            text: 'Count The Smiley Faces',
            link: '/content/snippet/codewars/6-kyu/count-the-smiley-faces/',
          },
        ],
      },
      {
        text: '5 Ky\u016b',
        collapsed: false,
        items: [
          {
            text: 'Rgb To Hex Conversion',
            link: '/content/snippet/codewars/5-kyu/rgb-to-hex-conversion/',
          },
        ],
      },
    ],
  },
];

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

    outline: 'deep',
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
      md.use(mdMultimdTable, {
        multiline: true,
        rowspan: true,
        headerless: true,
        multibody: false,
        autolabel: true,
      });
      md.use(mermaid);
    },
  },
});
