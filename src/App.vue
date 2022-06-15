<template>
  <the-header title="The Learning Resources App"></the-header>
  <the-resources />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheHeader from './components/layout/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default defineComponent({
  name: 'App',
  components: { TheHeader, TheResources },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
