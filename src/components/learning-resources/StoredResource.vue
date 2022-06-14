<template>
  <v-list class="mx-auto px-0 py-0 w-100 overflow-visible">
    <learning-resource
      v-for="res in storedResources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
      >{{ res }}</learning-resource
    >
  </v-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import LearningResource from './LearningResource.vue';

export default defineComponent({
  name: 'StoredResource',
  data() {
    return {
      storedResources: this.resources,
    };
  },
  inject: ['resources'],
  components: { LearningResource },
});
</script>
