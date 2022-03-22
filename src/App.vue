<template>
  <div class="app_loading-warp" v-show="isHttpBusy">
    <Loading />
      <!-- <p class="app_loading-spinner">
        <i class="xi-spinner-5 xi-spin"></i>
      </p> -->
  </div>
<!--  <div v-if="!isLoaded">-->
<!--    <splash-component></splash-component>-->
<!--  </div>-->
<!--  <div v-else>-->
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import SplashComponent from '@/components/SplashComponent';
// import {computed, onMounted, ref} from 'vue';
import {computed} from 'vue';
import useAppManager from "@/store/app-manager";
import Loading from '@/Page/Loading'
import {StatusBar, Style} from "@capacitor/status-bar";

export default {
  name: 'App',
  components: {
    SplashComponent,
    Loading
  },

  setup () {
    // const isLoaded = ref(false)
    const appManager = useAppManager();
    const isHttpBusy = computed(() => appManager.IsHttpBusy());

    // const splashing = () => {
    //   setTimeout(() => {
    //     isLoaded.value = true
    //   }, 2500)
    // }

    //android only
    StatusBar.setOverlaysWebView({ overlay: true });

    StatusBar.setStyle({style: Style.Light});
    StatusBar.setBackgroundColor({color: '#ffffff'});

    // onMounted(() => {
    //   console.log('App onMounted');
      //splashing();
    // })

    return {
      // isLoaded,
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

.app_loading-spinner {
  position: absolute;
  left: 50%;
  top:50%;
  font-size: 50px;
  color: white;
  transform:translate(-50%, -50%);
}
</style>
