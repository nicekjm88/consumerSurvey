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

  &:disabled {
    background-color: #999;
  }
}
</style>