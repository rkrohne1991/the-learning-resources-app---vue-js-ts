<template>
  <div class="px-4 py-4 my-8 mx-auto" max-width="640">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({ name: 'BaseCard' });
</script>

<style scoped lang="scss">
div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
