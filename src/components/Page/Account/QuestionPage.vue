<template>
  <Navigation />
  <main>
    <Indicator status="신상 정보 입력 페이지" />
    <section>

      <p class="notify" id="qestion">
        <strong>가족수는 몇명인가요?</strong>
        <span><em>본인을 포함하여 함께 생활하는 가족 수를 선택해주세요.</em></span>
      </p>

      <ul class="select-list" id="anwser">
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
      </ul>
    </section>
  </main>
  <FixedBtn @click="increase" msg="다음" />
</template>

<script>
import Navigation from '../../Layout/Navigation.vue'
import FixedBtn from '../../Layout/FixedBtn.vue'
import Indicator from '../../Layout/Indicator.vue'
export default {
  name: 'QuestionPage',
  data() {
    return {
      personData : []
    }
  },
  methods : {
    increase() {
      console.log(this.personData);
      this.personData.push('하이');
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

.table {
  width: 100%;
}

.table tbody th,
.table tbody td {
  border-bottom: 1px solid #d5d5d5;  
}

.table tbody th {
  font-size: 13px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: 1.3px;
  color: #000;
  text-align: left;
  padding: 15px 0;
}

.table tbody td .form-control,
.table tbody td .form-select {
  font-size: 13px;
}

.table tbody td .form-check {
  display: inline-block;
}

.table tbody td .form-check + .form-check {
  margin-left: 20px;
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
 
</style>