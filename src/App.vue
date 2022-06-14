<template>
  <v-app>
    <the-header title="The Learning Resources App" />
    <v-main>
      <v-container class="px-0 py-0">
        <the-resources />
      </v-container>
    </v-main>
  </v-app>
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

<style scoped>
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

.w-100 {
  width: 100%;
}

.elevation-1 {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.v-container {
  max-width: 640px;
}
</style>
