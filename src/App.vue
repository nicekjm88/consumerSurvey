<template>
  
  <div v-if="!isLoaded">
    <splash-component></splash-component>
  </div>
  
  <div v-else>
    <router-view></router-view>
  </div>
  
</template>

<script>
import SplashComponent from './components/Page/SplashComponent.vue';

export default {
  name: 'App',
  components: {
    SplashComponent
  },
  data() {
    return {
      isLoaded: false
    }
  },
  created() {
    this.splashing();
  },
  methods: {
    splashing() {
      setTimeout(() => {
        this.isLoaded = true
      }, 2500)
    }
  }
}
</script>

<style>
@import "./assets/css/layout.css";
@import "./assets/css/xeicon.css";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
