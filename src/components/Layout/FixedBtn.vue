<template>
<div class="fixed-btn-wrap">
  <button class="fixed-btn">{{ msg }}</button>  
</div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import { SafeArea } from "capacitor-plugin-safe-area";

export default {
  name: 'FixedBtn',
  props: {
    msg: String,
  },
  setup() {
  const pgt = ref("0px");

  onBeforeMount(() => {
    SafeArea.getSafeAreaInsets().then(({ insets }) => {      
      pgt.value = insets.bottom + "px";
    });
  });

  return {
    pgt,
  };
},
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
  padding-bottom: v-bind(pgt);
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