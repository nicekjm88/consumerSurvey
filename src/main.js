import { createApp } from "vue";
import App from "./App.vue";
import store from '@/store';
import router from '@/router';
import {Capacitor} from "@capacitor/core";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './permission';

const app = createApp(App);

//네이티브 라이브 업데이트
//https://github.com/Cap-go/capacitor-updater/wiki/Auto-update
if(Capacitor.getPlatform() !== 'web') {
    const updator = require('@capgo/capacitor-updater');
    updator.CapacitorUpdater.notifyAppReady();
}

//네이티브 안드로이드 뒤로가기 버튼을 눌렀을때
//https://capacitorjs.com/docs/v3/apis/app#addlistenerbackbutton-
import { App as capApp } from '@capacitor/app';
capApp.addListener('backButton', function(){
    router.back()
});

app
  .use(router)
  .use(store)
  .mount("#app");
