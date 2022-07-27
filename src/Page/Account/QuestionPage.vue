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
            <span
              ><em>{{ item.ch[0].Name }}<br />(선택사항)</em></span
            >
          </p>
        </div>

        <ul class="select-list" v-show="step === pidx">
          <li v-for="(question, idx) in item.ch[0].ch" :key="idx">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                :checked="question.checked"
                @change="selectChange(pidx, idx)"
                :id="`questions_${pidx}-${idx}`"
              />
              <label
                class="form-check-label"
                :for="`questions_${pidx}-${idx}`"
                >{{ question.Name }}</label
              >
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/Layout/Navigation.vue";
import useQuestionsManager from "@/store/questions-manager";
import { computed, onBeforeMount, ref, watchEffect } from "vue";
import router from "@/router";

export default {
  name: "QuestionPage",
  components: {
    Navigation,
  },
  props: ['questionNo'],
  setup(props) {
    const questionsManager = useQuestionsManager();
    const step = ref(0);

    watchEffect(() => {
      const old_step = step.value;
      step.value = Number(props.questionNo);
      if(isNaN(step.value)){
        router.replace('/error');
      }

      if(old_step !== step.value || old_step - 1 !== step.value){
        questionsManager.selectChanged(step.value, -1);
      }
    });

    onBeforeMount(() => {
      console.log('onBeforeMount');
      if (!questionsManager.hasValue()) {
        router.push("/intro");
      }
    });

    function onSubmit() {
      const si = questionsManager.getSelectedAt(step.value);
      if (si.length > 0) {
        if (step.value + 1 >= items.value.length) {
          if (questionsManager.isDone()) {
            router.push("/qna2");
          } else {
            router.push('/error');
          }
        }else{
          router.push("/qna/" + (step.value + 1));
        }
      } else {
        alert("문항을 선택해 주세요.");
      }
    }

    function selectChange(pidx, idx) {
      questionsManager.selectChanged(pidx, idx);
      onSubmit();
    }

    const items = computed(() => questionsManager.get());

    return {
      items,
      step,
      selectChange,
      onSubmit,
    };
  },
};
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
