<template>
  <div class="app_loading-warp" v-show="isHttpBusy">
    <Loading />
  </div>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import SplashComponent from '@/components/SplashComponent';
// import {computed, onMounted, ref} from 'vue';
import {computed, onBeforeMount, ref} from 'vue';
import useAppManager from "@/store/app-manager";
import Loading from '@/Page/Loading'
import {StatusBar, Style} from "@capacitor/status-bar";
import {SafeArea} from "capacitor-plugin-safe-area";
import {Capacitor} from "@capacitor/core";

export default {
  name: 'App',
  components: {
    // SplashComponent,
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

    //android only
    onBeforeMount(async () => {
      SafeArea.getSafeAreaInsets().then(({insets}) => {
        wrapPaddingTop.value = 70 + Math.ceil(insets.top) + 5 + 'px';
      })

      if(Capacitor.getPlatform() !== 'web') {
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
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
}

</style>
