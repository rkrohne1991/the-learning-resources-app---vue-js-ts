<template>
  <v-btn depressed :class="mode"><slot></slot></v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseButton',
  props: {
    mode: {
      type: String,
    },
  },
});
</script>

<style scoped lang="scss">
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: #fff;
  cursor: pointer;
  box-shadow: none;

  &:hover,
  &:active {
    background-color: #270041;
    border-color: #270041;
  }
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;

  &:hover,
  &:active {
    background-color: #edd2ff;
  }
}
</style>
