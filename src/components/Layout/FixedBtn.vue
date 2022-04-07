<template>
  <button class="fixed-btn">{{ msg }}</button>  
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
  const mgt = ref("0px");

  onBeforeMount(() => {
    SafeArea.getSafeAreaInsets().then(({ insets }) => {      
      mgt.value = (insets.bottom) + "px";
    });
  });

  return {
    mgt,
  };
},
}
</script>

<style lang="scss">
.fixed-btn {
  z-index: 98;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: $mainColor;
  color: #fff;
  font-weight: 700;
  margin-bottom: v-bind(mgt);

  &::before {
    content: '';
    background-color: $mainColor;
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: -50px;
    left: 0;
    z-index: -1;
  }

  &:disabled {
    background-color: #999;
    &::before {
      background-color: #999;
    }
  }
}
</style>
