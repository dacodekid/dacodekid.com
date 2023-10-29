// Code from: https://github.com/hyperledger/iroha-2-docs/tree/e2c7f7b7eed355bdf6c13e18a62ce75207888b71/.vitepress/theme

import './mermaid-cdn.d.ts';
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

export async function renderSvg(
  id: string,
  text: string,
  options: {
    theme: 'light' | 'dark';
  }
): Promise<{ svg: string }> {
  mermaid.initialize({ startOnLoad: true, theme: options.theme });
  const { svg } = await mermaid.render(id, text);
  return { svg };
}
