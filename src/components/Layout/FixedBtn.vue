<template>
<div class="fixed-btn-wrap">
  <button class="fixed-btn" :disabled="disabled">{{ msg }}</button>
</div>
</template>

<script>

export default {
  name: 'FixedBtn',
  props: {
    msg: String,
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss">
.fixed-btn-wrap {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  background: $mainColor;
  z-index: 98;
  // padding: 0 0 env(safe-area-inset-bottom);
}
.fixed-btn {
  width: 100%;
  height: 50px;
  background-color: $mainColor;
  color: #fff;
  font-weight: 700;

  &:disabled {
    background-color: #999;
  }
}
</style>
