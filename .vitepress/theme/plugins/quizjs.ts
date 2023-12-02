// quizjs.ts

import MarkdownIt from 'markdown-it';
import DOMPurify from 'isomorphic-dompurify';
import * as fs from 'fs';
import * as path from 'path';

export const escapeText = (str: string): string => {
  const chars = new Map([
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['>', '&gt;'],
    ["'", '&#39;'],
  ]);

  return str.replace(/[&<>'"]/g, (text) => chars.get(text) || text);
};

export const sanitizeText = (str: string): string => {
  str = str.trim();
  str = escapeText(str);
  str = DOMPurify.sanitize(str);
  return str;
};

export const getFileContent = (filePath: string = ''): string | null => {
  if (!filePath) return null;

  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8').trim();
    }

    console.error(`File does not exist: ${filePath}`);
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getQuizContent = (fileContent: string = ''): string | null => {
  if (!fileContent) return null;

  const regex = /```quiz([\s\S]*?)```(?!\w)/;

  const quizContentMatch = fileContent.match(regex)?.[1];
  const quizContent = quizContentMatch ? quizContentMatch.trim() : '';

  return quizContent !== '' ? quizContent : null;
};

export const splitQuizContent = (content: string = ''): string[] => {
  if (!content) return [];

  const regex = /(?=Question:|^\/)/m;

  let splitContent = content
    .split(regex)
    .map((item) => item.trim())
    .filter((item) => item !== '');

  return splitContent;
};

export const validateQuizBlock = (quizBlock: string = ''): boolean => {
  const regex =
    /^Question: [\s\S]*?\nA: [\s\S]*?\nB: [\s\S]*?\nC: [\s\S]*?\nD: [\s\S]*?\nAnswer: [ABCD]\nExplanation: [\s\S]*?$/gm;

  return regex.test(quizBlock);
};

export const mergeQuizContent = (
  blocks: string[] = [],
  processedFiles: Set<string> = new Set<string>(),
  currentFilename: string = ''
): string[] => {
  const quizData = new Set<string>();

  const processExternalFile = (block: string): void => {
    if (processedFiles.has(block)) {
      console.warn(`Cyclic reference detected: ${block}`);
      return;
    }
    processedFiles.add(block);

    const fileContent = sanitizeText(getFileContent(path.join(process.cwd(), block)));
    if (!fileContent) return;

    const quizContent = getQuizContent(fileContent);
    if (!quizContent) return;

    const additionalBlocks = splitQuizContent(quizContent);

    const additionalQuizData = mergeQuizContent(additionalBlocks, processedFiles, block);
    additionalQuizData.forEach((item) => quizData.add(item));
  };

  const validateAndAddQuizBlock = (block: string): void => {
    if (!validateQuizBlock(block)) {
      console.error('=================');
      console.error('INVALID QUIZ BLOCK');
      console.error('File:', currentFilename, '\n');
      console.error(block);
      console.error('~~~~~~~~~~~~~~~~~', '\n\n');
      return;
    }
    quizData.add(block);
  };

  const processBlock = (block: string): void => {
    if (block.startsWith('/')) {
      processExternalFile(block);
    } else {
      validateAndAddQuizBlock(block);
    }
  };

  blocks.forEach(processBlock);

  return Array.from(quizData);
};

export const tokenizeBlock = (quizBlock: string): object => {
  const regex =
    /Question: (?<question>[\s\S]*?)\n(?=A:)A: (?<choiceA>[\s\S]*?)\n(?=B:)B: (?<choiceB>[\s\S]*?)\n(?=C:)C: (?<choiceC>[\s\S]*?)\n(?=D:)D: (?<choiceD>[\s\S]*?)\n(?=Answer:)Answer: (?<answer>[A-D])\n(?=Explanation:)Explanation: (?<explanation>[\s\S]*)/gm;

  const match = regex.exec(quizBlock);

  if (!match) return null;

  const formatText = (text) => text.trim().replace(/\n/g, '<br>');

  return {
    question: formatText(match.groups.question),
    choices: [
      { key: 'A', text: formatText(match.groups.choiceA) },
      { key: 'B', text: formatText(match.groups.choiceB) },
      { key: 'C', text: formatText(match.groups.choiceC) },
      { key: 'D', text: formatText(match.groups.choiceD) },
    ],
    answer: match.groups.answer,
    explanation: formatText(match.groups.explanation),
  };
};

export function quiz(md: MarkdownIt) {
  const defaultRender = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];

    if (token.info.trim() === 'quiz') {
      let content: any;
      content = sanitizeText(token.content);
      content = splitQuizContent(content);
      content = mergeQuizContent(content, new Set(), env.filePath);
      content = content.map(tokenizeBlock);
      content = JSON.stringify(content);

      return `<QuizJS :quizData='${content}'></QuizJS>`;
    }

    return defaultRender(tokens, idx, options, env, self);
  };
}

export default quiz;
