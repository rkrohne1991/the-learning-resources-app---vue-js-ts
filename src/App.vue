<template>
  <v-app>
    <the-header title="The Learning Resources App" />
    <v-main>
      <stored-resource :resources="storedResources" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TheHeader from './components/layout/TheHeader.vue';
import StoredResource from './components/learning-resources/StoredResource.vue';
import type StoredResourceType from './types/StoredResourceType';

interface VueData {
  storedResources: StoredResourceType[];
}

export default defineComponent({
  name: 'App',
  components: { StoredResource, TheHeader },
  data(): VueData {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org/',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://www.google.co.uk/',
        },
      ],
    };
  },
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
</style>
