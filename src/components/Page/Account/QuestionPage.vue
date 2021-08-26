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
        <div v-if="a">
          <div class="form-check" v-for="(item, index) in qnaData[0].answer" :key="index">
            <input class="form-check-input" type="radio" :id="'person' + (index)" name="person">
            <label class="form-check-label" :for="'person' + (index)">{{item}}</label>
          </div>
        </div>

        <div v-else-if="b">
          <div class="form-check" v-for="(item, index) in qnaData[1].answer" :key="index">
            <input class="form-check-input" type="checkbox" :id="'product' + (index)" name="product" >
            <label class="form-check-label" :for="'product' + (index)">{{item}}</label>
          </div>
        </div>
        
        <div v-else-if="c">
          <div class="form-check" v-for="(item, index) in qnaData[2].answer" :key="index">
            <input class="form-check-input" type="radio" :id="'body' + (index)" name="body">
            <label class="form-check-label" :for="'body' + (index)">{{item}}</label>
          </div>
        </div>

      </div>
    </section>
  </main>
  <!-- <router-link to="/step/1"> -->
    <FixedBtn @click="insertData" msg="다음" />
  <!-- </router-link> -->
</template>

<script>
import Navigation from '../../Layout/Navigation.vue'
import FixedBtn from '../../Layout/FixedBtn.vue'
import Indicator from '../../Layout/Indicator.vue'

export default {
  name: 'QuestionPage',
  data() {
    return {
      a : true,
      b : false,
      c : false
    }
  },
  methods : {
    insertData() {

      if ( this.a === true ) {
        this.a = false,
        this.b = true
      } else if ( this.b === true ) {
        this.b = false,
        this.c = true
      }      
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
  },
  mounted () {
    
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