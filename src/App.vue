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
@import "./assets/styles/layout.css";
@import "./assets/styles/xeicon.css";
</style>
