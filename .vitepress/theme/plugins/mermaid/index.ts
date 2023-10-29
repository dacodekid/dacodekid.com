// Code from: https://github.com/hyperledger/iroha-2-docs/tree/e2c7f7b7eed355bdf6c13e18a62ce75207888b71/.vitepress/theme

import hasha from 'hasha';

export const mermaid = (md) => {
  const fence = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, index, options, env, slf) => {
    const token = tokens[index];

    if (token.info.trim() === 'mermaid') {
      const content = token.content.trim();
      const id = `mermaid_${hasha(content)}`;
      return `<MermaidRenderWrap id="${id}" text="${encodeURIComponent(content)}" />`;
    }

    // Shiki will highlight `mmd` as `mermaid`
    if (token.info.trim() === 'mmd' || token.info.trim() === 'mermaid') {
      tokens[index].info = 'mermaid';
    }

    return fence(tokens, index, options, env, slf);
  };
};
