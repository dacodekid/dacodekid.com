// https://vitepress.dev/guide/custom-theme
import { App, h } from 'vue';
import Theme from 'vitepress/theme';
import './style.css';
import MermaidJS from './components/MermaidJS.vue';
import ChartJS from './components/ChartJS.vue';
import QuizJS from './components/QuizJS.vue';

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }: { app: App }): void {
    app.component('MermaidJS', MermaidJS);
    app.component('ChartJS', ChartJS);
    app.component('QuizJS', QuizJS);
  },
};
