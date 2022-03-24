<template>
  <div class="wrap-progressBar">
    <strong class="title">
      PV 달성률
    </strong>
    <div class="progress">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        role="progressbar"
        :aria-valuenow="`${progressStatus}`"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="`width: ${progressStatus}%`"
      >
        <span class="progress-bar__count">{{ progressStatus }}%</span>
      </div>
    </div>
    <div class="goal-label">
      <div>{{formatter.toPrice(pv)}} PV</div>
      <div>누적 PV</div>
    </div>
  </div>
</template>

<script>
import { SafeArea } from "capacitor-plugin-safe-area";
import {onBeforeMount, ref} from "vue";
import useFormatter from "@/composables/api/utils/formatter";
export default {
  name: "progressBar",
  data() {
    return {

    };
  },
  props: {
    progressStatus: Number,
    pv: {
      type: Number,
      default: 0
    }
  },
  methods() {},
  setup(){
    const formatter = useFormatter();
    const mgt = ref('0px');
    const pgt = ref('0px');

    onBeforeMount(() => {
      SafeArea.getSafeAreaInsets().then(({insets}) => {
        mgt.value = -( Math.ceil(insets.top) + 5) + 'px';
        pgt.value = Math.ceil(insets.top) + 10 + 'px';
      })
    })

    return {
      mgt,
      pgt,
      formatter,
    }
  }
};
</script>

<style lang="scss">
.wrap-progressBar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  background-color: #fff;
  padding: 10px 20px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  display: none;

  margin-bottom: v-bind(mgt) !important;
  padding-top: v-bind(pgt) !important;

  &.is-show {
    display: block;
  }

  .title {
    display: block;
    margin-bottom: 10px;
  }

  .progress-bar {
    background-color: $mainColor;
  }
}
.goal-label {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}

.progress-bar__count {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #333;
}
</style>
