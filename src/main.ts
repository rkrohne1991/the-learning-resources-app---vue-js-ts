import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import { vuetify } from './plugins/vuetify';

const app = createApp(App);

app.component('base-card', BaseCard);
app.use(vuetify);
app.mount('#app');
