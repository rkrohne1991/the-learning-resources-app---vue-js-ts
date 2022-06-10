<template>
  <header>
    <h1>The Learning Resources App</h1>
    <ul>
      <learning-resource
        v-for="res in storedResources"
        :key="res.id"
        :id="res.id"
        :title="res.title"
        :description="res.description"
        :link="res.link"
        >{{ res }}</learning-resource
      >
    </ul>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LearningResource from './components/learning-resources/LearningResource.vue';
import type StoredResource from './types/StoredResource';

interface VueData {
  storedResources: StoredResource[];
}

export default defineComponent({
  name: 'App',
  components: { LearningResource },
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
