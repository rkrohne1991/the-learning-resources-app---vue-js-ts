<template>
  <base-card>
    <v-form>
      <v-text-field label="Title" class="testing" />
      <v-textarea label="Description" />
      <v-text-field label="Link" />
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </v-form>
  </base-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddResource',
});
</script>

<style scoped lang="scss">
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}
</style>
