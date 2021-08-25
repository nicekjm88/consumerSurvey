<template>
  <div>
    <!-- type 1 -->
    <section class="indicator-section">
      <h2 class="a11y">{{ status }}</h2>
      <ul class="indicator">
        <li class="is-active"><span class="a11y">신상 정보 입력</span></li>
        <li><span class="a11y">설문조사 페이지1</span></li>
        <li><span class="a11y">설문조사 페이지2</span></li>
        <li><span class="a11y">설문조사 페이지3</span></li>
        <li><span class="a11y">설문조사 페이지4</span></li>
        <li><span class="a11y">설문조사 페이지5</span></li>
        <li><span class="a11y">설문조사 페이지6</span></li>
      </ul>  
    </section>

  </div>
</template>

<script>

export default {
  name: 'Indicator',
  props: {
    status: String,
    step: Number
  }
}
</script>

<style scoped>

.indicator-section {
  margin: 28px 0;
  position: relative;
  height: 20px;
}
.indicator-section::before {
  height: 5px;
  content: '';
  width: 100%;
  border-top: 1px dashed #d5d5d5;
  position: absolute;
  top: 9px;
}
.indicator {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 5%;
  padding-left: 0;
  margin-bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.indicator::after {
  content: '';
  clear: both;
  display: block;
}
.indicator > li {
  width: 18px;
  height: 18px;  
  border: solid 1px #d5d5d5;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  z-index: 16;
}

.indicator > li.is-active {
  background-color: #00b5ef;
  border-color: #00b5ef;
}
.indicator > li.is-active::after {
  content: '';
  width: 1000px;
  height: 1px;
  background-color: #00b5ef;
  position: absolute;
  top: 50%;
  left: -1000px;
  z-index: 1;
}

</style>