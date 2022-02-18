import { createApp } from "vue";
<<<<<<< HEAD
import App from "./App.vue";
import store from '@/store.js';
import router from './router';

=======
import App from "@/App.vue";
import router from "@/routes/index.js";
import store from '@/store/index.js'
>>>>>>> dc6f44feb20ef888bf8f4fa48a201631e9f9fe30
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './permission';

const app = createApp(App)

app
  .use(router)
  .use(store)
  .mount("#app");
