<template>
  <!-- <Header /> -->
  <main class="layout-overlap">
    <Terms />
  </main>  
  <FixedBtn msg="확인" />   
</template>

<script>
// import Header from './components/Layout/Header/Header.vue'
import Terms from './components/Page/Terms/Terms.vue'
import FixedBtn from './components/Layout/FixedBtn.vue'

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    // Header,
    Terms,
    FixedBtn
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button {
  border: none;
}
.layout-overlap {
  margin-top: 54px;
  position: relative;
  padding: 50px 20px;
  background-color: #fff;
  border-radius: 30px 30px 0 0;

}
.layout-overlap::before {
  position: absolute;
  top: -54px;
  left: 0;
  width: 100%;
  height: 200px;
  content: '';
  background: rgba(0, 0, 0, .3);
  z-index: -1;
}
</style>
