export const mermaid = (md) => {
  const fence = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, index, options, env, slf) => {
    const token = tokens[index];
    if (token.info.trim() === 'mermaid') {
      const content = token.content.trim();
      const id = `mermaid_${Math.random().toString(36).substring(2, 15)}`;
      return `<MermaidJS id="${id}" text="${encodeURIComponent(content)}" />`;
    }
    // Optionally handle 'mmd' alias for 'mermaid'
    if (token.info.trim() === 'mmd') {
      tokens[index].info = 'mermaid';
    }
    return fence(tokens, index, options, env, slf);
  };
};
