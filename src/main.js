import { createApp } from "vue";
import App from "./App.vue";
import store from '@/store';
import router from '@/router';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './permission';

const app = createApp(App)

app
  .use(router)
  .use(store)
  .mount("#app");
