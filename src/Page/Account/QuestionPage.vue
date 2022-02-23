<template>
  <div class="wrap">
  <Navigation />
    <main class="qestion-area">
      <section v-for="(qestion, i) in qestions" :key="i">
        
        <div v-if="step === i">
          <div class="img-wrap">
            <img :src="require(`@/assets/image/bg-img${i}.svg`)" />
          </div>
          <p class="notify">
            <strong>{{ qestion.title }}</strong>
            <span><em>{{ qestion.desc }}</em></span>
          </p>
        </div>
        
        <Form @submit="onSubmit">        
          <ul class="select-list" v-if="step === i">
            <li v-for="(filter, idx) in qestion.list" :key="idx">
              <div class="form-check">
                <input class="form-check-input" type="radio" v-model="value" :value="filter" :name="`qestion${qestion.id}`" :id="`question${i}-${idx}`">
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
      step: 0,
      value: ''
    }
  },
  computed: {
    ...mapState(['familyNumber', 'qestions'])
  },
  methods : {
    onSubmit(e) {
      e.preventDefault();

      if ( this.step === 0 ) {
        this.$store.dispatch('setAge', this.value);
        this.step++;
      } else if( this.step === 1 ) {
        this.$store.dispatch('setFamilyNumber', this.value);
        this.step++;
      } else {
        this.$store.dispatch('setUseProduct', this.value);
        this.$router.push('/qna2');
      }
    }
  },
  components: {
    FixedBtn,
    Navigation,
  },
}
</script>

<style lang="scss">
.qestion-area {  
  .step1,
  .step2 {
    display: none;
  }

  .img-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
