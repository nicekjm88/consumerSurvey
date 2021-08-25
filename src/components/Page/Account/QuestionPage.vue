<template>
  <Navigation />
  <main>
    <Indicator status="신상 정보 입력 페이지" step="1" />
    <section>

      <p class="notify" id="qestion">
        <strong>{{questions[0].title}}</strong>
        <span><em>{{questions[0].desc}}</em></span>
      </p>

      <div id="answer">
        <div class="form-check" v-for="(item, index) in person" :key="index">
          <input class="form-check-input" type="radio" :id="(index)" name="family" checked>
          <label class="form-check-label" :for="(index)">{{item}}</label>
        </div>
      </div>

      <!-- <ul class="select-list" id="answer">
        <li>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="family" id="memeber1" checked>
            <label class="form-check-label" for="memeber1">
              1명
            </label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="family" id="memeber2">
            <label class="form-check-label" for="memeber2">
              2명
            </label>
          </div>
        </li>
        <li>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="family" id="memeber3" >
            <label class="form-check-label" for="memeber3">
              3명
            </label>
          </div>          
        </li>
        <li>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="family" id="memeber4">
            <label class="form-check-label" for="memeber4">
              4명
            </label>
          </div>          
        </li>
        <li>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="family" id="memeber5" >
            <label class="form-check-label" for="memeber5">
              5명 이상
            </label>
          </div>          
        </li>        
      </ul> -->
    </section>
  </main>
  <router-link to="/step2">
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
      questions : [
        {
          "title" : "가족 수는 몇 명인가요?",
          "desc" : "본인을 포함하여 함께 생활하는 가족 수를 선택해주세요."
        },
        {
          "title" : "어떤 리빙 제품을 사용하시나요?",
          "desc" : "복수 선택이 가능하세요."
        }
      ],
      person : ['1명', '2명', '3명', '4명', '5명 이상'],
      sum : 0
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