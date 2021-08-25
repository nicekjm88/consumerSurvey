<template>
  <Navigation />
  <main>
    <Indicator status="신상 정보 입력 페이지" step="1" />
    <section> 
      <p class="notify" id="qestion">
        <strong>{{qnaData[$route.params.id].title}}</strong>
        <span><em>{{qnaData[$route.params.id].desc}}</em></span>
      </p>

      <div id="answer">
        <div class="form-check" v-for="(item, index) in qnaData[$route.params.id].answer" :key="index">
          <input class="form-check-input" type="radio" :id="(index)" name="family" checked>
          <label class="form-check-label" :for="(index)">{{item}}</label>
        </div>
      </div>
    </section>
  </main>
  <router-link to="/step/1">
    <FixedBtn msg="다음" />
  </router-link>
</template>

<script>
import Navigation from '../../Layout/Navigation.vue'
import FixedBtn from '../../Layout/FixedBtn.vue'
import Indicator from '../../Layout/Indicator.vue'
export default {
  name: 'QuestionPage',
  data() {
    return {
      
    }
  },
  methods : {
    insertData() {
      //this.personData.push()
    },
    moveIndicator() {
      // var indicator = document.querySelector('.indicator');

      // this.sum += 142;
      // indicator.style.marginLeft = '-' + (this.sum + -9) + 'px';
            
    }
  },
  components: {
    FixedBtn,
    Navigation,
    Indicator
  },
  props : {
    qnaData : Array
  }
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