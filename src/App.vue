<template>
  <header>
    <h1>The Learning Resources App</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import type StoredResource from './types/StoredResource';

interface VueData {
  storedResources: StoredResource[];
}

export default defineComponent({
  name: 'App',
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
