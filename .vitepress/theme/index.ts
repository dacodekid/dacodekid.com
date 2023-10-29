// https://vitepress.dev/guide/custom-theme
import { App, h } from 'vue';
import Theme from 'vitepress/theme';
import './style.css';
import MermaidRenderWrap from './components/mermaid/MermaidRenderWrap.vue';

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }: { app: App }): void {
    app.component('MermaidRenderWrap', MermaidRenderWrap);
  },
};
