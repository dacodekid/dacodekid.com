// Import necessary Chart.js libraries
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

// Export the function for processing 'chart' code fences
export const chart = (md) => {
  const fence = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, index, options, env, slf) => {
    const token = tokens[index];
    if (token.info.trim() === 'chart') {
      const content = token.content.trim();
      const id = `chart_${Math.random().toString(36).substring(2, 15)}`;
      return `<ChartJS id="${id}" chartData="${encodeURIComponent(content)}" />`;
    }
    return fence(tokens, index, options, env, slf);
  };
};

// Export the function for processing 'mermaid' code fences
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
