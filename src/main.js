import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Import Vuex store
import './assets/styles.css';


const app = createApp(App);
app.use(store); // Register Vuex
app.mount('#app');
