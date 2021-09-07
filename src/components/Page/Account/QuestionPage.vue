<template>
  <Navigation />
  <main>
    <Indicator status="신상 정보 입력 페이지" step="1" />
    <section>
      <div class="img-wrap">
        <img :src="require('../../../assets/image/img-form-02.png')" />
      </div>
      <router-view :qnaData="qnaData"></router-view> 
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
.img-wrap {
  width: 215px;
  margin: 2rem auto 0;  
}
.img-wrap img {
  width: 100%;
}
section {
  padding: 0 20px 80px;
} 
</style>