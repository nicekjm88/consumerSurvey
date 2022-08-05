<template>
  <div class="app_loading-warp" v-show="isHttpBusy">
    <Loading />
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import {computed, onBeforeMount, ref} from 'vue';
import useAppManager from "@/store/app-manager";
import Loading from '@/Page/Loading'
import {StatusBar, Style} from "@capacitor/status-bar";
import {SafeArea} from "capacitor-plugin-safe-area";
import {Capacitor} from "@capacitor/core";

export default {
  name: 'App',
  components: {
    Loading
  },
  metaInfo: {
    title: 'My Example App',
    titleTemplate: '%s - Yay!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  setup () {
    const appManager = useAppManager();
    const isHttpBusy = computed(() => appManager.IsHttpBusy());

    const wrapPaddingTop = ref('70px');

    onBeforeMount(async () => {
      //네이티브 Safe area 영역의 크기 가져오기
      //https://www.npmjs.com/package/capacitor-plugin-safe-area
      SafeArea.getSafeAreaInsets().then(({insets}) => {
        wrapPaddingTop.value = 70 + Math.ceil(insets.top) + 5 + 'px';
      })

      //네이티브 상태바 처리
      if(Capacitor.getPlatform() !== 'web') {
        //https://capacitorjs.com/docs/v3/apis/status-bar#setstyle
        await StatusBar.setOverlaysWebView({overlay: true});
        await StatusBar.setStyle({style: Style.Light});
        await StatusBar.setBackgroundColor({color: '#FFFFFFFF'});
      }
    });

    return {
      isHttpBusy,
      wrapPaddingTop,
    }
  }
}
</script>

<style>
@import "./assets/styles/layout.css";
@import "./assets/styles/xeicon.css";

.wrap{
  padding-top: v-bind(wrapPaddingTop);
}

.app_loading-warp {
  z-index: 9999;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
}

</style>
