// Import necessary Chart.js libraries
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

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
