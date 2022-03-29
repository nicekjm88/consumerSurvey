<template>
  <button class="fixed-btn">{{ msg }}</button>  
</template>

<script>

export default {
  name: 'FixedBtn',
  props: {
    msg: String,
  }
}
</script>

<style lang="scss">
.fixed-btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: $mainColor;
  color: #fff;
  font-weight: 700;
  z-index: 98;
  padding: 15px 0 calc(constant(safe-area-inset-bottom) + 15px);
  padding: 15px 0 calc(env(safe-area-inset-bottom) + 15px);

  &:disabled {
    background-color: #999;
  }
}
</style>