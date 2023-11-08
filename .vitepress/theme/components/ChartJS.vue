<!--
  ChartJS.vue
  This Vue component is responsible for rendering a chart using the provided chart data.
  It watches for changes in the chart data prop and re-renders the chart when the data changes.
  It also cleans up the chart instance when the component is unmounted.
-->

<script lang="ts" setup>
// Import necessary Vue and Chart.js libraries
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import Chart from 'chart.js/auto';

// Define props for this component
const props = defineProps<{ id: string; chartData: string }>();

// Create a ref for the chart container
const chartContainer = ref<HTMLElement | null>(null);

// Initialize chart instance as null
let chartInstance: Chart | null = null;

// Function to render the chart
const renderChart = (chartData: string) => {
  // Ensure the chart container exists
  if (chartContainer.value) {
    // Clear any existing content
    chartContainer.value.innerHTML = '';

    // Create a new canvas element
    const canvas = document.createElement('canvas');

    // Append the canvas to the chart container
    chartContainer.value.appendChild(canvas);

    // Get the 2D context from the canvas
    const ctx = canvas.getContext('2d');

    // Throw an error if the 2D context could not be obtained
    if (!ctx) {
      throw new Error('Could not obtain 2D context.');
    }

    // Destroy the old chart instance if it exists
    if (chartInstance) {
      chartInstance.destroy();
    }

    // Parse the chart data and create a new chart instance
    const parsedChartData = JSON.parse(decodeURIComponent(chartData));
    chartInstance = new Chart(ctx, parsedChartData);
  }
};

// Watch for changes in the chart data prop
watch(
  () => props.chartData,
  (newVal) => {
    // Wait for the next Vue tick and then re-render the chart with the new data
    nextTick(() => {
      renderChart(newVal);
    });
  },
  { immediate: true }
);

// Clean up chart instance when component is unmounted
// If a chart instance exists when the component is unmounted, we destroy it to free up resources.
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});

// When the component is mounted, we render the chart with the initial chart data.
onMounted(() => {
  renderChart(props.chartData);
});
</script>

<template>
  <!--
    This is the container for the chart.
    The chart will be rendered inside this div.
  -->
  <div ref="chartContainer" class="chart-container"></div>
</template>
