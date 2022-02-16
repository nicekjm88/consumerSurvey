<template>  
  <main>
    <h1>나의 자가진단<br>설문 조사</h1>
    <img :src="require('@/assets/image/logo.svg')" />
  </main>  
</template>

<script>

export default {
  name: 'Splash Screen',
}
</script>

<style scoped>
main {
  background-color: #00b5ef;
  color: #fff;
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
h1 {
  font-family: Atomy;
  font-size: 43px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 4.3px;
  color: #fff;
}
</style>