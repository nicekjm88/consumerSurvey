<template>

  <div v-if="!isLoaded">
    <splash-component></splash-component>
  </div>

  <div v-else>
    <router-view></router-view>
  </div>

</template>

<script>
import SplashComponent from '@/components/SplashComponent';
import {onMounted, ref} from 'vue';

export default {
  name: 'App',
  components: {
    SplashComponent
  },

  setup () {
    const isLoaded = ref(false)

    const splashing = () => {
      setTimeout(() => {
        isLoaded.value = true
      }, 2500)
    }

    onMounted(() => {
      splashing();
    })

    return {
      isLoaded,
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
