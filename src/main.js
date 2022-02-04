import { createApp } from "vue";
import App from "./App.vue";
import router from "./assets/router.js";
import store from '@/store.js'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

let app = createApp(App)

app
  .use(router)
  .use(store)
  .mount("#app");
