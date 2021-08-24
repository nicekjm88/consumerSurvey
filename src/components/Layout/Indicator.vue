<template>
  <div>
    <!-- type 1 -->
    <section class="indicator-section">
      <ul class="indicator">
        <li class="is-active"><span class="a11y-hidden">{{ status }}</span></li>
        <li><span class="a11y-hidden">설문조사 페이지1</span></li>
        <li><span class="a11y-hidden">설문조사 페이지2</span></li>
        <li><span class="a11y-hidden">설문조사 페이지3</span></li>
        <li><span class="a11y-hidden">설문조사 페이지4</span></li>
        <li><span class="a11y-hidden">설문조사 페이지5</span></li>
        <li><span class="a11y-hidden">설문조사 페이지6</span></li>
      </ul>  
    </section>

  </div>
</template>

<script>

export default {
  name: 'Indicator',
  props: {
    status: String
  }
}
</script>

<style scoped>
.a11y-hidden {
  display: none;
}
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
  top: 10px;
}
.indicator {
  width: 10000px;
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -9px;
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
  float: left;
  margin-right: 124px;
}

.indicator > li.is-active {
  background-color: #00b5ef;
  border-color: #00b5ef;
}

</style>