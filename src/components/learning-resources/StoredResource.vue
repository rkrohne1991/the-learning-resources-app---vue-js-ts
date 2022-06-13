<template>
  <v-list class="mx-auto px-0 py-0 w-100" dense max-width="640">
    <learning-resource
      v-for="res in resources"
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
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

import type StoredResourceType from '../../types/StoredResourceType';
import LearningResource from './LearningResource.vue';

export default defineComponent({
  name: 'StoredResource',
  props: {
    resources: {
      type: Object as PropType<StoredResourceType[]>,
    },
  },
  components: { LearningResource },
});
</script>
