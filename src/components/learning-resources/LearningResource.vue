<template>
  <li>
    <base-card>
      <header>
        <h3>{{ title }}</h3>
        <base-button mode="flat" @click="deleteResourceFunction(id)">
          Delete
        </base-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">View Resource</a>
      </nav>
    </base-card>
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
  data() {
    return { deleteResourceFunction: this.deleteResource };
  },
  inject: ['deleteResource'],
});
</script>

<style scoped lang="scss">
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;

  &:hover,
  &:active {
    color: #c89300;
  }
}
</style>
