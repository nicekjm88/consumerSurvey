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
import {computed, onBeforeMount} from 'vue';
import useAppManager from "@/store/app-manager";
import Loading from '@/Page/Loading'
import {StatusBar, Style} from "@capacitor/status-bar";

export default {
  name: 'App',
  components: {
    // SplashComponent,
    Loading
  },

  setup () {
    const appManager = useAppManager();
    const isHttpBusy = computed(() => appManager.IsHttpBusy());

    //android only
    onBeforeMount(async () => {
      await StatusBar.setOverlaysWebView({ overlay: true });
      await StatusBar.setStyle({style: Style.Light});
      await StatusBar.setBackgroundColor({color: '#00000000'});
    })

    return {
      isHttpBusy,
    }
  }
}
</script>

<style>
@import "./assets/styles/layout.css";
@import "./assets/styles/xeicon.css";

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
