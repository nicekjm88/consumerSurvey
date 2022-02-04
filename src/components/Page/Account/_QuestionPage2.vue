<template>
  <Navigation />
  <main>
    <Indicator />
    <section>

      <p class="notify" id="qestion">
        <strong>현재 마트, 온라인 쇼핑몰에서<br>자주 사용하는 생활용품을<br>선택해주세요.</strong>
        <span><em>(매월 기준)</em></span>
      </p>

      <div id="answer">
        <div v-for="(category, i) in $store.state.qnaData" :key="i">
          <strong class="answer-title">{{category.title}}</strong>

          <div class="form-check" v-for="(products, idx) in category.answer" :key="idx">
            <input class="form-check-input" type="checkbox" :value="products" v-model="selectedItem" :id="`products${i}-${idx}`">
            <label class="form-check-label" :for="`products${i}-${idx}`">{{products}}</label>
          </div>

        </div>
      </div>
      <hr />
      결과 확인 및 설명
      <hr />
      <p>총 {{selectedItem.length}}개를 선택하였습니다.</p>
      선택리스트
      <ul>
        <li>- 생활용품 {{selectedLivingItem.length}}개</li>
        <li>- 식품 {{selectedfoodItem.length}}개</li>
      </ul>
    </section>
  </main>
  <router-link to="/result">
    <FixedBtn msg="작성완료" />
  </router-link>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue'
import FixedBtn from '@/components/Layout/FixedBtn.vue'
import Indicator from '@/components/Layout/Indicator.vue'
export default {
  name: 'QuestionPage2',
  data() {
    return {
      livingProduct : ['칫솔', '치약', '세탁용', '비누', '샴푸류', '바디 워시류'],
      selectedItem: [],
      selectedLivingItem: [],
      selectedfoodItem: [],
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
  padding: 0 20px 70px 20px;
}

.answer-title {
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
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