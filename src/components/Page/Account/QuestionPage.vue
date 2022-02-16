<template>
  <div class="wrap">
  <Navigation />
    <main>
      <section v-for="(qestion, i) in qestions" :key="i">
        <div class="img-wrap">
          <img :src="require(`@/assets/image/bg-img${i}.svg`)" />
        </div>
        <p class="notify">
          <strong>{{ qestion.title }}</strong>
          <span><em>{{ qestion.desc }}</em></span>
        </p>
        <Form @submit="onSubmit">
        <ul class="select-list">
          <li v-for="(filter, idx) in qestion.list" :key="idx">
            <div class="form-check">
              <input class="form-check-input" type="radio"  :value="filter" :name="`qestion${qestion.id}`" :id="`question${i}-${idx}`">
              <label class="form-check-label" :for="`question${i}-${idx}`">{{ filter }}</label>
            </div>          
          </li>
        </ul>
        <FixedBtn type="submit" msg="다음" />      
        </Form>
      </section>
    </main>
    
  </div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue';
import FixedBtn from '@/components/Layout/FixedBtn.vue';
import { mapState } from 'vuex';

export default {
  name: 'QuestionPage',
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState(['familyNumber', 'qestions'])
  },
  methods : {
    onSubmit(e) {
      console.log(e);
      this.$router.push('/qna2');
    }
  },
  components: {
    FixedBtn,
    Navigation,
  },
  props : {
    qnaData : Array
  },
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
  margin-bottom: 1rem;  
  margin-top: 1rem;
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

.notify em {
  font-size: 13px;
  display: block;
}

.notify span {
  font-size: 11px;
  letter-spacing: 1.1px;
  color: #959595;
  width: 204px;
  display: block;
  margin: 0 auto;
}
.select-list {
  padding-left: 0;
} 
.select-list > li {
  margin-bottom: 10px;
}
</style>