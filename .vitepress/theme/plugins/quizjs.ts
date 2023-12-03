// quizjs.ts

import MarkdownIt from 'markdown-it';
import DOMPurify from 'isomorphic-dompurify';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Escapes special characters in a string to their corresponding HTML entities.
 *
 * @param {string} str - The string to be escaped.
 * @returns {string} The escaped string with special characters replaced by their corresponding HTML entities.
 */
export const escapeText = (str: string): string => {
  const chars = new Map([
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['>', '&gt;'],
    ["'", '&#39;'],
  ]);

  return str.replace(/[&<>'"]/g, (text) => chars.get(text) || text);
};

/**
 * Sanitizes a string by trimming, escaping special characters, and purifying it using DOMPurify.
 *
 * @param {string} str - The string to be sanitized.
 * @returns {string} The sanitized string.
 */
export const sanitizeText = (str: string): string => {
  str = str.trim();
  str = escapeText(str);
  str = DOMPurify.sanitize(str);

  return str;
};

/**
 * Reads the content of a file at a given path.
 * If the file does not exist or an error occurs, it returns null.
 *
 * @param {string} filePath - The path of the file to read. If not provided, the function will return null.
 * @returns {string | null} The content of the file as a string, or null if the file does not exist or an error occurs.
 */
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

/**
 * Extracts the content of a quiz from a string.
 * The quiz content is expected to be enclosed within "```quiz" and "```".
 *
 * @param {string} fileContent - The string from which to extract the quiz content. If not provided, the function will return null.
 * @returns {string | null} The content of the quiz as a string, or null if the quiz content does not exist or is empty.
 */
export const getQuizContent = (fileContent: string = ''): string | null => {
  if (!fileContent) return null;

  const regex = /```quiz([\s\S]*?)```(?!\w)/;

  const quizContentMatch = fileContent.match(regex)?.[1];
  const quizContent = quizContentMatch ? quizContentMatch.trim() : '';

  return quizContent !== '' ? quizContent : null;
};

/**
 * Splits a string into an array of strings based on the occurrence of "Question:" or the start of the string.
 * Each item in the array is trimmed and empty items are removed.
 *
 * @param {string} content - The string to be split. If not provided, the function will return an empty array.
 * @returns {string[]} An array of strings obtained by splitting the input string.
 */
export const splitQuizContent = (content: string = ''): string[] => {
  if (!content) return [];

  const regex = /(?=Question:|^\/)/m;

  let splitContent = content
    .split(regex)
    .map((item) => item.trim())
    .filter((item) => item !== '');

  return splitContent;
};

/**
 * Validates a quiz block string based on a specific format.
 * The quiz block must start with "Question:", followed by options "A:", "B:", "C:", "D:",
 * then "Answer:" with a single character from A to D, and finally "Explanation:". Each section can contain any characters.
 *
 * @param {string} quizBlock - The quiz block string to be validated. If not provided, the function will return false.
 * @returns {boolean} Returns true if the quiz block matches the expected format, false otherwise.
 */
export const validateQuizBlock = (quizBlock: string = ''): boolean => {
  const regex =
    /^Question: [\s\S]*?\nA: [\s\S]*?\nB: [\s\S]*?\nC: [\s\S]*?\nD: [\s\S]*?\nAnswer: [ABCD]\nExplanation: [\s\S]*?$/gm;

  return regex.test(quizBlock);
};

/**
 * Merges quiz content from multiple sources, including external files.
 * It validates each quiz block and warns about cyclic references.
 *
 * @param {string[]} blocks - An array of quiz blocks or file paths. If a block starts with '/', it is treated as a file path.
 * @param {Set<string>} processedFiles - A set of already processed file paths to avoid cyclic references. Defaults to an empty set.
 * @param {string} currentFilename - The name of the current file being processed. Used for error reporting.
 * @returns {string[]} An array of validated quiz blocks.
 */
export const mergeQuizContent = (
  blocks: string[] = [],
  processedFiles: Set<string> = new Set<string>(),
  currentFilename: string = ''
): string[] => {
  const quizData = new Set<string>();

  /**
   * Processes an external file, extracts quiz content, splits it into blocks, and merges it into the main quiz data.
   *
   * @param {string} block - The path of the file to process.
   */
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

  /**
   * Validates a quiz block and adds it to the main quiz data.
   * If the block is invalid, it logs an error message.
   *
   * @param {string} block - The quiz block to validate and add.
   */
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

  /**
   * Processes a block. If the block starts with '/', it is treated as a file path and processed as an external file.
   * Otherwise, it is validated and added as a quiz block.
   *
   * @param {string} block - The block to process.
   */
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

/**
 * Tokenizes a quiz block into an object with structured data. The quiz block is expected to follow a specific format.
 * The function uses a regular expression to extract the question, choices, answer, and explanation from the quiz block.
 * Each extracted text is formatted by trimming and replacing newline characters with '<br>'.
 *
 * @param {string} quizBlock - The quiz block to tokenize.
 * @returns {object | null} An object with the structured data of the quiz, or null if the quiz block does not match the expected format.
 */
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

/**
 * A MarkdownIt plugin that replaces fenced code blocks labeled as 'quiz' with a QuizJS component.
 * The content of the quiz block is
 *  sanitized,
 *  split into blocks,
 *  merged with content from external files,
 *  tokenized, and passed as a prop to the QuizJS component.
 *
 * @param {MarkdownIt} md - The MarkdownIt instance to apply the plugin to.
 */
export function quiz(md: MarkdownIt) {
  // Save the original fence renderer
  const defaultRender = md.renderer.rules.fence.bind(md.renderer.rules);

  // Override the fence renderer
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];

    // If the fence is labeled as 'quiz'
    if (token.info.trim() === 'quiz') {
      let content: any;
      // Sanitize, split, merge, tokenize, and stringify the content
      content = sanitizeText(token.content);
      content = splitQuizContent(content);
      content = mergeQuizContent(content, new Set(), env.filePath);
      content = content.map(tokenizeBlock);
      content = JSON.stringify(content);

      // Replace the quiz block with a QuizJS component
      return `<QuizJS :quizData='${content}'></QuizJS>`;
    }

    // If the fence is not labeled as 'quiz', use the original renderer
    return defaultRender(tokens, idx, options, env, self);
  };
}
export default quiz;
