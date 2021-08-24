<template>
  <nav>
    <button type="button" @click="historyBack">뒤로</button>
    <button type="button">닫기</button>
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

</style>