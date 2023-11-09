import MarkdownIt from 'markdown-it';
import { RenderRule } from 'markdown-it/lib/renderer';
import { PluginSimple } from 'markdown-it/lib';

export const quiz: PluginSimple = (md: MarkdownIt) => {
  const defaultRender: RenderRule =
    md.renderer.rules.fence ||
    ((tokens, idx, options, env, self) => {
      return self.renderToken(tokens, idx, options);
    });

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const content = token.content.trim();

    if (token.info.trim() === 'quiz') {
      const blocks = content.split(/\n(?=Question:)/);
      const qas = blocks.map((block) => {
        const lines = block.split('\n');
        const question = lines[0].replace('Question:', '').trim();
        const answerLineIndex = lines.findIndex((line) => line.startsWith('Answer:'));
        const explanationLineIndex = lines.findIndex((line) => line.startsWith('Explanation:'));

        // Extract options, assuming options are the lines before the answer
        const options = lines
          .slice(1, answerLineIndex)
          .map((option) => {
            const match = option.match(/^([A-Za-z]):\s*(.*)/);
            return match ? { key: match[1].toUpperCase(), text: match[2].trim() } : null;
          })
          .filter(Boolean);

        // Extract the answer and explanation if they exist
        let answer = '';
        let explanation = '';
        if (answerLineIndex !== -1) {
          answer = lines[answerLineIndex].replace('Answer:', '').trim();
        }
        if (explanationLineIndex !== -1) {
          explanation = lines.slice(explanationLineIndex).join('\n').replace('Explanation:', '').trim();
        }

        return { question, options, answer, explanation };
      });

      const questionsOptionsAnswersExplanationsProp = JSON.stringify(qas);
      return `<QuizJS :qas='${questionsOptionsAnswersExplanationsProp}'></QuizJS>`;
    }

    // Call the default renderer for other fences
    return defaultRender(tokens, idx, options, env, self);
  };
};
