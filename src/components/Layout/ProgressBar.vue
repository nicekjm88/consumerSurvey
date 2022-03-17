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
        {{ progressStatus }}%
      </div>
    </div>
    <div class="goal-label">
      <div>0</div>
      <div>30만 PV</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  data() {
    return {
    
    };
  },
  props: {
    progressStatus: Number
  },
  methods() {},
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

  &.is-show {
    display: block;
  }

  .title {
    display: block;
    margin-bottom: 10px;
  }
}
.goal-label {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
</style>
