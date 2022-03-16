<template>
  <div class="wrap">
  <Navigation />
    <main class="qestion-area">

      <section v-for="(item, pidx) in items" :key="pidx">
        <div v-show="step === pidx">
          <div class="img-wrap">
            <img :src="require(`@/assets/image/bg-img${item.Value}.svg`)" />
          </div>
          <p class="notify">
            <strong>{{ item.Name }}</strong>
            <span><em>{{ item.ch[0].Name }}</em></span>
          </p>
        </div>

        <ul class="select-list" v-show="step === pidx">
          <li v-for="(question, idx) in item.ch[0].ch" :key="idx">
            <div class="form-check">
              <input class="form-check-input" type="radio" :checked="question.checked" @change="selectChange(pidx, idx)" :id="`questions_${pidx}-${idx}`">
              <label class="form-check-label" :for="`questions_${pidx}-${idx}`">{{ question.Name }}</label>
            </div>
          </li>
        </ul>

        <FixedBtn @click="onSubmit" msg="다음" />

      </section>
    </main>

  </div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue';
import FixedBtn from '@/components/Layout/FixedBtn.vue';
import useQuestionsManager from "@/store/questions-manager";
import {computed, onBeforeMount, ref} from "vue";
import router from "@/router";

export default {
  name: 'QuestionPage',
  components: {
    FixedBtn,
    Navigation,
  },
  setup(){
    const questionsManager = useQuestionsManager();
    const step = ref(0);

    onBeforeMount(() => {
      questionsManager.fetch();
    })

    function onSubmit() {
      step.value++;
      if(step.value > 2){
        router.push('/qna2');
      }
    }

    function selectChange(pidx, idx){
      questionsManager.selectChanged(pidx, idx);
    }

    const items = computed(() => questionsManager.get());

    return {
      items,
      step,
      selectChange,
      onSubmit,
    }
  }
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
