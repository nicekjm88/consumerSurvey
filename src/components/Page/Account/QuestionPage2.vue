<template>
<div class="wrap">
  <Navigation />
  <main>
    <section>
      <p class="notify" id="qestion">
        <strong>현재 마트, 온라인 쇼핑몰에서<br>자주 사용하는 생활용품을<br>선택해주세요.</strong>
        <span><em>(매월 기준)</em></span>
      </p>

      <div id="answer">
        <div class="answer-item">
          <strong class="answer-title">생활용품</strong>
          <button class="btn-cancel" @click="selectCancel">선택취소</button>
          <div class="form-check" v-for="(products, idx) in $store.state.livingProduct" :key="idx">
            <input class="form-check-input" type="checkbox" :value="products" v-model="$store.state.selectedLivingItem" :id="`products${idx}`">
            <label class="form-check-label" :for="`products${idx}`">{{products}}</label>
          </div>
        </div>
        <hr />
        <div class="answer-item">
          <strong class="answer-title">식품</strong>
          <button class="btn-cancel" @click="selectCancel2">선택취소</button>
          <div class="form-check" v-for="(foods, idx) in $store.state.food" :key="idx">
            <input class="form-check-input" type="checkbox" :value="foods" v-model="$store.state.selectedfoodItem" :id="`food${idx}`">
            <label class="form-check-label" :for="`food${idx}`">{{foods}}</label>
          </div>
        </div>
      </div>
    </section>
  </main>
  <router-link to="/result">
    <FixedBtn @click="$store.commit('getSum')" msg="작성완료" />
  </router-link>
</div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue'
import FixedBtn from '@/components/Layout/FixedBtn.vue'
export default {
  name: 'QuestionPage2',
  data() {
    return {
    }
  },
  methods : {
    selectCancel() {
      this.$store.state.selectedLivingItem = []
    },
    selectCancel2() {
      this.$store.state.selectedfoodItem = []
    }
  },
  components: {
    FixedBtn,
    Navigation,
  },

}
</script>

<style scoped>
@import "../../../assets/css/layout.css";

section {
  padding: 0 20px 70px 20px;
}
.answer-title {
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
}
.notify {
  
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
.answer-item {
  position: relative;
}
.answer-item .btn-cancel {
  position: absolute;
  top: 0;
  right: 0;
}
</style>