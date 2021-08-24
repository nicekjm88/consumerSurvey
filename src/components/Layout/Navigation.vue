<template>
  <nav>
    <button type="button" @click="historyBack">
      <i class="xi-angle-left"></i>
      <span class="a11y">뒤로</span>
    </button>

    <router-link to="/intro">    
      <button type="button">
        <i class="xi-close"></i>
        <span class="a11y">닫기</span>
      </button>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  methods : {
    historyBack() {
      return history.back();
    }
  },
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  margin: 10px;
}
nav button {
  background: #fff;
  color: #414141;
  font-size: 26px;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
}
</style>