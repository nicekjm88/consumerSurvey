<template>
<div class="wrap bg-gray">
  <Navigation />
  <main class="qestion-area">
    <section>
      <ProgressBar />
      <p class="notify" id="qestion">
        <strong>현재 마트, 온라인 쇼핑몰에서<br>자주 사용하는 생활용품을<br>선택해주세요.</strong>
        <span><em>(매월 기준)</em></span>
      </p>
      <div id="answer">
        <div class="answer-item" v-for="(item, pidx) in items" :key="pidx">
          <strong class="answer-item__title">{{item.name}}</strong>
          <button class="btn-cancel" @click="selectCancel(pidx)">선택취소</button>
          <div class="rounded-box">
            <div class="form-check" v-for="(product, idx) in item.ch" :key="idx">
              <input class="form-check-input" type="checkbox" :checked="product.checked" @change="productToggle(pidx, idx)" :id="`products_${pidx}_${idx}`">
              <label class="form-check-label" :for="`products_${pidx}_${idx}`">{{product.name}}</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <router-link to="/result">
    <FixedBtn msg="작성완료" />
  </router-link>
</div>
</template>

<script>
import {computed, onBeforeMount} from "vue";
import Navigation from '@/components/Layout/Navigation.vue';
import FixedBtn from '@/components/Layout/FixedBtn.vue';
import ProgressBar from '@/components/Layout/ProgressBar.vue';
import useProductsManager from "@/store/products-manager";

export default {
  name: 'QuestionPage2',
  components: {
    FixedBtn,
    Navigation,
    ProgressBar
  },
  setup(){
    const productsManager = useProductsManager();

    onBeforeMount(() => {
      productsManager.fetch();
    })

    function selectCancel(pidx) {
      productsManager.clearChecked(pidx);
    }

    function productToggle(pidx, idx){
      productsManager.toggle(pidx, idx);
    }

    const items = computed(() => productsManager.get());

    return {
      items,
      selectCancel,
      productToggle,
    }
  }
}
</script>

<style lang="scss">
.bg-gray {
  background: #f5f5f5;
}

.form-check + .form-check {
  margin-top: 20px;
}

.answer-item {
  position: relative;

  &__title {
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .btn-cancel {
    position: absolute;
    top: 5px;
    right: 0;
    background-color: transparent;
    color: #666;
    font-size: 12px;
  }
}
</style>
