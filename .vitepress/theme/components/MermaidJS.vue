<script lang="ts" setup>
import { ref, onBeforeMount, watchEffect, onMounted } from 'vue';
import { useData } from 'vitepress';
import mermaid from 'mermaid';

const isClient = ref(false);
onBeforeMount(() => {
  isClient.value = typeof window !== 'undefined';
});

const props = defineProps<{ id: string; text: string }>();
const { isDark } = useData();
const theme = ref(isDark.value ? 'dark' : 'light');

// Initialize Mermaid before the component mounts
onMounted(() => {
  if (isClient.value) {
    mermaid.initialize({ startOnLoad: false, theme: theme.value });
  }
});

// Reactive property for the SVG content
const svgContent = ref('');

// Function to render SVG
const renderSvg = async (id: string, text: string) => {
  try {
    svgContent.value = (await mermaid.render(id, text)).svg;
  } catch (error) {
    console.error('Failed to render Mermaid diagram:', error);
  }
};

// Watch the text and theme for changes to re-render the SVG
watchEffect(() => {
  if (isClient.value) {
    const decodedText = decodeURIComponent(props.text);
    renderSvg(`mermaid_${props.id}`, decodedText);
  }
});
</script>

<template>
  <div v-if="isClient" ref="root">
    <div v-html="svgContent" class="mermaid"></div>
    <div v-if="svgContent === ''" class="flex justify-center p-8">Rendering the diagram...</div>
  </div>
</template>
