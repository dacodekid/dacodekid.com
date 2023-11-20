import DOMPurify from 'isomorphic-dompurify';
import { Choice, QuestionBlock } from './types';

let idCounter: number = 0;

const escapeText = (str: string): string => {
  const chars = new Map([
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['>', '&gt;'],
    ["'", '&#39;'],
  ]);
  return str.replace(/[&<>'"]/g, (text) => chars.get(text) || text);
};

const handleError = (message: string, quizBlock: string, index: number, filePath: string): void => {
  console.error(`
Quiz 
  ${'Block'.padEnd(7)}: ${index + 1}
  ${'File'.padEnd(7)}: ${filePath} 
  ${'Issue'.padEnd(7)}: ${message}

Content:
----------------
${quizBlock}
----------------`);
  process.exit(1);
};

const validateQuiz = (quizBlock: string, index: number, filePath: string): void => {
  const hasQuestion = /^Question: /m.test(quizBlock);
  const hasOptions = ['A', 'B', 'C', 'D'].every((letter) => new RegExp(`^${letter}: `, 'm').test(quizBlock));
  const hasAnswer = /^Answer: /m.test(quizBlock);
  const hasExplanation = /^Explanation: /m.test(quizBlock);

  if (!hasQuestion) {
    handleError('Question', quizBlock, index, filePath);
  }
  if (!hasOptions) {
    handleError('One or more options', quizBlock, index, filePath);
  }
  if (!hasAnswer) {
    handleError('Answer', quizBlock, index, filePath);
  }
  if (!hasExplanation) {
    handleError('Explanation', quizBlock, index, filePath);
  }
};

const splitQuizData = (quizData: string): string[] => {
  return quizData.split(/\n(?=Question: )/);
};

const parseQuestion = (line: string, question: string): string => {
  return question + line.replace('Question: ', '') + '<br>';
};

const parseChoice = (line: string, choices: Choice[]): Choice[] => {
  if (/^[A-Z]:/.test(line)) {
    const [choiceKey, ...choiceTextParts] = line.split(': ');
    const choiceText = choiceTextParts.join(': ').trim();
    choices.push({ key: choiceKey, text: choiceText });
  } else if (choices.length > 0) {
    choices[choices.length - 1].text += '<br>' + line.trim();
  }
  return choices;
};

const parseAnswer = (line: string): string => {
  return line.replace('Answer: ', '');
};

const parseExplanation = (line: string, explanation: string): string => {
  return explanation + line.replace('Explanation: ', '') + '<br>';
};

const parseQuestionBlock = (block: string): QuestionBlock => {
  const lines = block.split('\n');

  let question: string = '';
  let choices: Choice[] = [];
  let answer: string = '';
  let explanation: string = '';

  let currentSection = 'question';

  for (const line of lines) {
    if (/^[A-Z]:/.test(line)) {
      currentSection = 'choices';
    } else if (line.startsWith('Answer:')) {
      currentSection = 'answer';
    } else if (line.startsWith('Explanation:')) {
      currentSection = 'explanation';
    }

    switch (currentSection) {
      case 'question':
        question = parseQuestion(line, question);
        break;
      case 'choices':
        choices = parseChoice(line, choices);
        break;
      case 'answer':
        answer = parseAnswer(line);
        break;
      case 'explanation':
        explanation = parseExplanation(line, explanation);
        break;
    }
  }

  return {
    id: idCounter++,
    question,
    choices,
    answer,
    explanation,
  };
};

export const quiz = (md) => {
  const defaultRender = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    let content = token.content.trim();

    if (token.info === 'quiz') {
      // escape & sanitize the content
      content = DOMPurify.sanitize(escapeText(content));

      // Split the raw data into individual questions
      const rawQuestions = splitQuizData(content);

      // Validate each raw question
      rawQuestions.forEach((question, index) => {
        validateQuiz(question, index, env.relativePath);
      });

      // Parse the validated questions into structured objects
      const questions = rawQuestions.map(parseQuestionBlock);

      return `<QuizJS :quizData='${JSON.stringify(questions)}'></QuizJS>`;
    }

    // return default renderer if the language is not specified
    return defaultRender(tokens, idx, options, env, self);
  };
};
