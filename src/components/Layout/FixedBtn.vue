<template>
  <button>{{ msg }}</button>  
</template>

<script>

export default {
  name: 'FixedBtn',
  props: {
    msg: String,
  }
}
</script>

<style scoped>
button {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #00b5ef;
  color: #fff;
}
button:disabled {
  background-color: #999;
}
</style>