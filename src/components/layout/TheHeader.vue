<template>
  <v-app-bar height="80" color="pink" app>
    <v-app-bar-title
      class="white--text text-center text-h4 font-weight-bold nomral-line-height"
    >
      {{ title }}
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({ name: 'TheHeader', props: { title: String } });
</script>

<style scoped lang="scss">
.nomral-line-height {
  line-height: normal;
}
</style>
