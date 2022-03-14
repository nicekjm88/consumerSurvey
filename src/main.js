import { createApp } from "vue";
import App from "./App.vue";
import store from '@/store';
import router from '@/router';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import './permission';

const app = createApp(App)

//native back button
import { App as capApp } from '@capacitor/app';
capApp.addListener('backButton', function(){
    router.back()
});

app
  .use(router)
  .use(store)
  .mount("#app");
