<template>
  <v-list-item class="flex-column">
    <base-card class="w-100">
      <v-list-item-header class="d-flex justify-space-between align-center">
        <v-list-item-title class="my-2">{{ title }}</v-list-item-title>
        <base-button mode="flat">Delete</base-button>
      </v-list-item-header>
      <v-list-item-subtitle class="my-2">{{
        description
      }}</v-list-item-subtitle>
      <nav>
        <a variant="text" class="px-0" :href="link" target="_blank"
          >View Rersource</a
        >
      </nav>
    </base-card>
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LearningResource',
  props: {
    id: String,
    title: String,
    description: String,
    link: String,
  },
});
</script>

<style scoped lang="scss">
a {
  color: rgb(var(--v-theme-orange));
  text-decoration: none;
  transition: all 0.3s;

  &:hover,
  &:active {
    background: none;
    color: rgb(var(--v-theme-yellow));
    transition: all 0.3s;
  }
}

.v-list-item-title {
  font-size: 1.25rem;
}
</style>
