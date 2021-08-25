<template>
  <Navigation />
  <main>
    <Indicator status="설문조사 페이지1" step="2" />
    <section>

      <p class="notify" id="qestion">
        <strong> 최근 건강에 신경쓰는 곳이 어디인가요?</strong>
        <span><em>복수 선택이 가능하세요.</em></span>
      </p>

      <div id="answer">
        <div class="form-check" v-for="(item, index) in favorite" :key="index">
          <input class="form-check-input" type="radio" value="" :id="'product' + (index)" name="favorite" checked>
          <label class="form-check-label" :for="'product' + (index)">{{item}}</label>
        </div>
      </div>
    </section>
  </main>
  <router-link to="/step3">
    <FixedBtn msg="다음" />
  </router-link>
</template>

<script>
import Navigation from '../../Layout/Navigation.vue'
import FixedBtn from '../../Layout/FixedBtn.vue'
import Indicator from '../../Layout/Indicator.vue'
export default {
  name: 'QuestionPage3',
  data() {
    return {
      favorite : ['헤어', '간', '뼈', '눈', '정신 건강', '다이어트'],
    }
  },
  methods : {
  },
  components: {
    FixedBtn,
    Navigation,
    Indicator
  },

}
</script>

<style scoped>

section {
  padding: 0 20px;
}

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