<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
    >
      Stored Resources
    </base-button>
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
    >
      Add Resource
    </base-button>
  </base-card>
  <component :is="selectedTab">
    <stored-resource :resources="storedResources" />
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import type StoredResourceType from '../../types/StoredResourceType';
import AddResource from './AddResource.vue';
import StoredResource from './StoredResource.vue';

interface TheResourcesData {
  selectedTab: string;
  storedResources: StoredResourceType[];
}

export default defineComponent({
  name: 'TheResources',
  components: { StoredResource, AddResource },
  data(): TheResourcesData {
    return {
      selectedTab: 'stored-resources',
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
  provide() {
    return { resources: this.storedResources, addResource: this.addResource };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab: string) {
      this.selectedTab = tab;
    },
    addResource(title: string, description: string, url: string) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
  },
});
</script>
