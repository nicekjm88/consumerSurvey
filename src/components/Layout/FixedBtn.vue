<template>
  <div>
    <button>{{ msg }}</button>
  </div>
</template>

<script>

export default {
  name: 'Terms',
  props: {
    msg: String
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
</style>