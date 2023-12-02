// /__tests__/quizjs.test.ts

import * as fs from 'fs';
import MarkdownIt from 'markdown-it';
import { describe, expect, it, vi } from 'vitest';
import * as quizJS from './quizjs';

const a_md = `
# Content A

\`\`\`quiz
Question: What is the capital of France? &<>'"
A: Paris
B: London
C: Berlin
D: Madrid
Answer: A
Explanation: Paris is the capital of France.
\`\`\`

\`\`\`javascript
console.log("Hello, world!");
\`\`\`
`;

const b_md = `
# Content B

\`\`\`quiz
Question: What is the capital of / Germany?
Second line of question.
A: Paris
B: London
C: Berlin
D: Madrid
Answer: C
Explanation: Berlin is the capital of Germany.
Second line of explanation.
Third line of explanation.
/c.md
Question: What is the capital of India?
A: Paris
B: London
C: Berlin
D: New Delhi
Answer: D
Explanation: New Delhi is the capital of India.
Second line of explanation.
Third line of explanation.



/a.md

\`\`\`
`;

const c_md = `
# Content C

\`\`\`quiz
Question: What is the capital of Spain?
A: Paris
B: London
C: Berlin
D: Madrid
Answer: D
Explanation: Madrid is the capital of Spain.

/a.md
/b.md
\`\`\`
`;

const d_md = ``;

const e_md = `
\`\`\`quiz
\`\`\`
`;

const f_md = `
\`\`\`quiz
Not a valid quiz block.
\`\`\`
`;

const mockFs = {
  '/a.md': a_md,
  '/b.md': b_md,
  '/c.md': c_md,
  '/d.md': d_md,
  '/e.md': e_md,
  '/f.md': f_md,
};

// Mock fs
vi.mock('fs', () => ({
  existsSync: vi.fn((path: string) => mockFs.hasOwnProperty(path)),
  readFileSync: vi.fn((path: string) => {
    if (mockFs.hasOwnProperty(path)) {
      return mockFs[path];
    }
  }),
}));

// Mock path
vi.mock('path', () => ({
  join: vi.fn((...args: string[]) => {
    args.shift(); // Remove the first argument (process.cwd()) and join the rest
    return args.join('/');
  }),
}));

/* ------------------------------------------------------ TESTS ----------------------------------------------------- */
describe('escapeText', () => {
  it('should escape text', () => {
    const input = "&<>'";
    const expected = '&amp;&lt;&gt;&#39;';
    const actual = quizJS.escapeText(input);
    expect(actual).toBe(expected);
  });
});

describe('getFileContent', () => {
  it('should return null if no path or empty string is provided', () => {
    const nullFilePath = quizJS.getFileContent();
    const emptyFilePath = quizJS.getFileContent('');

    expect(nullFilePath).toBeNull();
    expect(emptyFilePath).toBeNull();
  });

  it('should return null if the file does not exist', () => {
    const nonExistentFilePath = quizJS.getFileContent('/non-exist.md');

    expect(nonExistentFilePath).toBeNull();
  });

  it('should return the file content', () => {
    const expected = a_md.trim();
    const actual = quizJS.getFileContent('/a.md');

    expect(actual).toBe(expected);
  });

  it('should return null and log an error on read failure', () => {
    const readFileSyncMock = vi.spyOn(fs, 'readFileSync').mockImplementation(() => {
      throw new Error('Mocked read failure');
    });

    expect(quizJS.getFileContent('/a.md')).toBeNull();

    readFileSyncMock.mockRestore();
  });
});

describe('getQuizContent', () => {
  it('should return null if no file content or empty string is provided', () => {
    const nullFileContent = quizJS.getQuizContent();
    const emptyFileContent = quizJS.getQuizContent('');
    const whitespaceFileContent = quizJS.getQuizContent(' \n');

    expect(nullFileContent).toBeNull();
    expect(emptyFileContent).toBeNull();
    expect(whitespaceFileContent).toBeNull();
  });

  it('should return null if the file content does not contain a quiz', () => {
    const fileContent = '```quiz\n```';
    const actual = quizJS.getQuizContent(fileContent);

    expect(actual).toBeNull();
  });

  it('should return the quiz content', () => {
    const expected = `Question: What is the capital of France? &<>'"\nA: Paris\nB: London\nC: Berlin\nD: Madrid\nAnswer: A\nExplanation: Paris is the capital of France.`;
    const actual = quizJS.getQuizContent(a_md);

    expect(actual).toBe(expected);
  });
});

describe('splitQuizContent', () => {
  it('should return an empty array if no quiz content or empty string is provided', () => {
    const nullQuizContent = quizJS.splitQuizContent();
    const emptyQuizContent = quizJS.splitQuizContent('');
    const whitespaceQuizContent = quizJS.splitQuizContent(' \n');

    expect(nullQuizContent).toEqual([]);
    expect(emptyQuizContent).toEqual([]);
    expect(whitespaceQuizContent).toEqual([]);
  });

  it('should return an array of quiz content', () => {
    const expected = [
      `Question: What is the capital of / Germany?\nSecond line of question.\nA: Paris\nB: London\nC: Berlin\nD: Madrid\nAnswer: C\nExplanation: Berlin is the capital of Germany.\nSecond line of explanation.\nThird line of explanation.`,
      `/c.md`,
      `Question: What is the capital of India?\nA: Paris\nB: London\nC: Berlin\nD: New Delhi\nAnswer: D\nExplanation: New Delhi is the capital of India.\nSecond line of explanation.\nThird line of explanation.`,
      `/a.md`,
    ];
    const actual = quizJS.splitQuizContent(quizJS.getQuizContent(b_md));

    expect(actual).toEqual(expected);
  });
});

describe('validateQuizBlock', () => {
  it('should return false if quiz block is empty', () => {
    const actual = quizJS.validateQuizBlock('');
    expect(actual).toBe(false);
  });

  it('should return false if quiz block does not start with "Question:"', () => {
    const quizBlock = `What is the capital of France?\nA: Paris\nB: London\nC: Berlin\nD: Madrid\nAnswer: A\nExplanation: Paris is the capital of France.`;
    const actual = quizJS.validateQuizBlock(quizBlock);
    expect(actual).toBe(false);
  });

  it('should return false if quiz block does not contain "A:"', () => {
    const quizBlock = `Question: What is the capital of France?\nB: London\nC: Berlin\nD: Madrid\nAnswer: A\nExplanation: Paris is the capital of France.`;
    const actual = quizJS.validateQuizBlock(quizBlock);
    expect(actual).toBe(false);
  });

  it('should return false if quiz block does not contain "B:"', () => {
    const quizBlock = `Question: What is the capital of France?\nA: Paris\nC: Berlin\nD: Madrid\nAnswer: A\nExplanation: Paris is the capital of France.`;
    const actual = quizJS.validateQuizBlock(quizBlock);
    expect(actual).toBe(false);
  });

  it('should return false if quiz block does not contain "C:"', () => {
    const quizBlock = `Question: What is the capital of France?\nA: Paris\nB: London\nD: Madrid\nAnswer: A\nExplanation: Paris is the capital of France.`;
    const actual = quizJS.validateQuizBlock(quizBlock);
    expect(actual).toBe(false);
  });

  it('should return false if quiz block does not contain "D:"', () => {
    const quizBlock = `Question: What is the capital of France?\nA: Paris\nB: London\nC: Berlin\nAnswer: A\nExplanation: Paris is the capital of France.`;
    const actual = quizJS.validateQuizBlock(quizBlock);
    expect(actual).toBe(false);
  });

  it('should return false if quiz block does not contain "Answer:"', () => {
    const quizBlock = `Question: What is the capital of France?\nA: Paris\nB: London\nC: Berlin\nD: Madrid\nExplanation: Paris is the capital of France.`;
    const actual = quizJS.validateQuizBlock(quizBlock);
    expect(actual).toBe(false);
  });

  it('should return false if quiz block does not contain "Explanation:"', () => {
    const quizBlock = `Question: What is the capital of France?\nA: Paris\nB: London\nC: Berlin\nD: Madrid\nAnswer: A`;
    const actual = quizJS.validateQuizBlock(quizBlock);
    expect(actual).toBe(false);
  });

  it('should return true if quiz block is valid', () => {
    const quizBlock = `Question: What is the capital of France?\nA: Paris\nB: London\nC: Berlin\nD: Madrid\nAnswer: A\nExplanation: Paris is the capital of France.`;
    const actual = quizJS.validateQuizBlock(quizBlock);
    expect(actual).toBe(true);
  });

  describe('mergeQuizContent', () => {
    it('should return an empty array if no blocks or empty array is provided', () => {
      const emptyBlocks = quizJS.mergeQuizContent([]);
      const emptySet = quizJS.mergeQuizContent([], new Set());

      expect(emptyBlocks).toEqual([]);
      expect(emptySet).toEqual([]);
    });

    it('should return an empty array if no quiz blocks are found', () => {
      const blocks = ['```quiz\n```', '```quiz\n```'];
      const actual = quizJS.mergeQuizContent(blocks);

      expect(actual).toEqual([]);
    });

    it('should return an array of quiz data', () => {
      const blocks = [
        `Question: What is the capital of / Germany?\nSecond line of question.\nA: Paris\nB: London\nC: Berlin\nD: Madrid\nAnswer: C\nExplanation: Berlin is the capital of Germany.\nSecond line of explanation.\nThird line of explanation.`,
        `/a.md`,
        `Question: What is the capital of India?\nA: Paris\nB: London\nC: Berlin\nD: New Delhi\nAnswer: D\nExplanation: New Delhi is the capital of India.\nSecond line of explanation.\nThird line of explanation.`,
        `/c.md`,
        `/d.md`,
        `/e.md`,
        `/f.md`,
      ];
      const actual = quizJS.mergeQuizContent(blocks);

      expect(actual.length).toBe(4);
    });
  });

  describe('tokenizeBlock', () => {
    it('returns null if no match', () => {
      const flat = `Not a valid quiz block.`;
      const actual = quizJS.tokenizeBlock(flat);

      expect(actual).toBeNull();
    });

    it('tokenize a standard quiz block correctly', () => {
      const flat = `Question: What is the capital of / Spain?\nSecond line\nA: Paris\nSecond line\nB: London\nC: Berlin\nD: Madrid\nAnswer: D\nExplanation: Madrid is the capital of Spain.\nSecond line`;
      const actual = quizJS.tokenizeBlock(flat);

      const expected = {
        question: 'What is the capital of / Spain?<br>Second line',
        choices: [
          { key: 'A', text: 'Paris<br>Second line' },
          { key: 'B', text: 'London' },
          { key: 'C', text: 'Berlin' },
          { key: 'D', text: 'Madrid' },
        ],
        answer: 'D',
        explanation: 'Madrid is the capital of Spain.<br>Second line',
      };

      expect(actual).toEqual(expected);
    });
  });

  describe('quizjsPlugin', () => {
    const md: MarkdownIt = MarkdownIt().use(quizJS.quiz);

    it('should render quiz block', () => {
      const expected = `<QuizJS :quizData='[{"question":"What is the capital of France? &amp;&lt;&gt;&#39;\\"","choices":[{"key":"A","text":"Paris"},{"key":"B","text":"London"},{"key":"C","text":"Berlin"},{"key":"D","text":"Madrid"}],"answer":"A","explanation":"Paris is the capital of France."}]'></QuizJS>`;
      const actual = md.render(quizJS.getFileContent('/a.md').match(/```quiz\n([\s\S]*?)\n```/)[0]);

      expect(actual).toBe(expected);
    });

    it('should render other blocks', () => {
      const expected = `<pre><code class="language-javascript">console.log(&quot;Hello, world!&quot;);\n</code></pre>\n`;
      const actual = md.render(quizJS.getFileContent('/a.md').match(/```javascript\n([\s\S]*?)\n```/)[0]);

      expect(actual).toBe(expected);
    });
  });
});
