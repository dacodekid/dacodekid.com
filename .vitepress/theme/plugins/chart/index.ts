/*
  index.ts
  This file is responsible for registering Chart.js and defining a custom markdown-it rule.
  The custom rule looks for code fences with the info string 'chart', and replaces them with ChartRenderWrap components.
*/

// Import necessary Chart.js libraries
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

// Define a function that takes a markdown-it instance and adds a custom rule to it
export const chart = (md) => {
  // Save the original fence rule for later
  const fence = md.renderer.rules.fence.bind(md.renderer.rules);

  // Define a new fence rule
  md.renderer.rules.fence = (tokens, index, options, env, slf) => {
    // Get the current token
    const token = tokens[index];

    // If the info string is 'chart', we replace the code fence with a ChartRenderWrap component
    if (token.info.trim() === 'chart') {
      // Get the content of the code fence and trim any leading/trailing whitespace
      const content = token.content.trim();

      // Generate a unique ID for the chart
      const id = `chart_${Math.random().toString(36).substring(2, 15)}`;

      // Return a ChartRenderWrap component with the chart data and ID as props
      return `<ChartJS id="${id}" chartData="${encodeURIComponent(content)}" />`;
    }

    // If the info string is not 'chart', we use the original fence rule
    return fence(tokens, index, options, env, slf);
  };
};
