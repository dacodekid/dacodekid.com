<!-- Code from: https://github.com/hyperledger/iroha-2-docs/tree/e2c7f7b7eed355bdf6c13e18a62ce75207888b71/.vitepress/theme -->

<script>
import { defineAsyncComponent } from 'vue';

const Mermaid = defineAsyncComponent(() => import('./MermaidRender.vue'));

export default {
  components: { Mermaid },
  inheritAttrs: false,
};
</script>

<template>
  <ClientOnly>
    <Mermaid v-bind="$attrs" />
  </ClientOnly>
</template>
