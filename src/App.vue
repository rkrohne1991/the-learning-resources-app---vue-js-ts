<template>
  <header>
    <h1 class="text-primary">The Learning Resources App</h1>
    <stored-resource :resources="storedResources" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import StoredResource from './components/learning-resources/StoredResource.vue';
import type StoredResourceType from './types/StoredResourceType';

interface VueData {
  storedResources: StoredResourceType[];
}

export default defineComponent({
  name: 'App',
  components: { StoredResource },
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
</style>
