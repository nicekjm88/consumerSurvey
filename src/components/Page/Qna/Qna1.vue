<template>
  <p class="notify">
    <strong>{{qnaData[0].title}}</strong>
    <span><em>{{qnaData[0].desc}}</em></span>
  </p>

  <div>
    <div class="form-check" v-for="(item, index) in qnaData[0].answer" :key="index">
      <input class="form-check-input" type="radio" :id="'person' + (index)" name="person">
      <label class="form-check-label" :for="'person' + (index)">{{item}}</label>
    </div>        
  </div>
</template>

<script>
export default {
  name: 'Qna1',
  props: {
    qnaData : Array
  }
}
</script>

<style scoped>

.notify {
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #d5d5d5;
}

.notify strong {
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: 1.8px;
  color: #000;
  display: block;
  margin-bottom: 8px;
}

.notify span {
  font-size: 11px;
  letter-spacing: 1.1px;
  color: #959595;
  width: 204px;
  display: block;
  margin: 0 auto;
  word-break: keep-all;
}

.notify em {
  font-size: 13px;
  display: block;
}

.select-list {
  padding-left: 0;
  padding-top: 20px;
}

.select-list > li {
  margin-top: 20px;
}

.form-check + .form-check {
  margin-top: 20px;
}
</style>
