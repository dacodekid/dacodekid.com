// types for QuizJS plugin
export interface Choice {
  key: string;
  text: string;
}

export interface QuestionBlock {
  id: number;
  question: string;
  choices: Choice[];
  answer: string;
  explanation: string;
}
