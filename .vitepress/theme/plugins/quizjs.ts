export const quiz = (md) => {
  const defaultRender = md.renderer.rules.fence.bind(md.renderer.rules);

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

        const options = lines
          .slice(1, answerLineIndex)
          .map((option) => {
            const match = option.match(/^([A-Za-z]):\s*(.*)/);
            return match ? { key: match[1].toUpperCase(), text: match[2].trim() } : null;
          })
          .filter(Boolean);

        const answerKey = lines[answerLineIndex].replace('Answer:', '').trim();
        const answerOption = options.find((option) => option.key.toUpperCase() === answerKey.toUpperCase());
        const answerText = answerOption ? answerOption.text : 'Answer not found';

        let explanation = '';
        if (explanationLineIndex !== -1) {
          explanation = lines[explanationLineIndex].replace('Explanation:', '').trim();
        }

        return {
          question,
          options,
          answer: { key: answerKey, text: answerText },
          explanation,
        };
      });

      const qaProp = JSON.stringify(qas);
      return `<QuizJS :qas='${qaProp}'></QuizJS>`;
    }

    return defaultRender(tokens, idx, options, env, self);
  };
};
