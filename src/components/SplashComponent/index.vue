<template>  
  <main class="splash-screen">
    <h1 class="splash-screen__title">나의 소비생활<br> 알아보기</h1>

    <p class="loading-spinner">
      <i class="xi-spinner-5 xi-spin"></i>
    </p>

    <img :src="require('@/assets/image/logo.svg')" />
  </main>  
</template>

<script>

export default {
  name: 'Splash Screen',
}
</script>

<style lang="scss">
.splash-screen {
  background-color: $mainColor;
  color: #fff;
  display: flex;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: column;

  &__title {
    font-family: "Atomy";
    font-size: 43px;
    font-weight: 700;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: 4.3px;
    color: #fff;
  }
}

.loading-spinner {
  font-size: 20px;
}
</style>