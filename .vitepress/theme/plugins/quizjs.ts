import DOMPurify from 'isomorphic-dompurify';

function escapeText(text) {
  return (
    text
      // .replace(/"/g, '&quot;') // It'll create errors in Vue templates
      .replace(/'/g, '&#039;')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  );
}

export const quiz = (md) => {
  const defaultRender = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    let content = token.content.trim();

    if (token.info.trim() === 'quiz') {
      // Escape & Sanitize HTML
      content = escapeText(content);
      content = DOMPurify.sanitize(content, {});

      // Process each quiz block
      const blocks = content.split(/\n(?=Question:)/);
      const qas = blocks.map((block) => {
        // Split the block into lines, taking into account multi-line questions
        const lines = block.split('\n');
        let questionEndIndex = lines.findIndex((line) => line.match(/^A:/));
        questionEndIndex = questionEndIndex === -1 ? lines.length : questionEndIndex;

        let questionLines = lines.slice(0, questionEndIndex);
        let question = '';

        // Remove "Question:" from the first line
        questionLines[0] = questionLines[0].replace('Question:', '').trim();

        if (questionLines.length > 1) {
          // Join multiple lines with <br>
          question = questionLines.join('<br>');
        } else {
          // Single line question
          question = questionLines[0];
        }

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
