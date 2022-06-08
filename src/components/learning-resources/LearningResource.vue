<template>
  <li>
    <div>
      <header>
        <h3>{{ title }}</h3>
        <button>Delete</button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" target="_blank">View Rersource</a>
      </nav>
    </div>
  </li>
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
