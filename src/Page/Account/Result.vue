<template>
<div class="bg-sky">
  <Navigation />
  <main class="result-area">
    <section>
      <h1 class="title">적극적으로 참여해주셔서<br>진심으로 감사합니다.</h1>

      <div class="rounded-box rounded-box__wrapper">
        <h2 class="title">결과 확인 및 설명</h2>
        <hr />
        <p>총 {{groupCount.TotalCount}}개를 선택하였습니다.</p>
        <p>&lt;선택리스트&gt;</p>
        <ul>
          <li v-for="(item, idx) in groupCount.Groups" :key="idx"> {{item.Name}} {{item.Count}}개 </li>
        </ul>

        <p>정말 많은 제품등을 소비하고 계시네요.</p>
        <p>
          가족 4인 기준에서<br>
          위 제품을 소비하는 총 금액은 매월 평균 소비 기준 0,000,000원입니다.<br>
          1년간 꾸준히 사용하신다면 약 00,000,000원입니다.
        </p>

        <p>애터미에도 가격도 저렴하고<br>품질도 좋은 제품 등이 있습니다.</p>

        <router-link to="/AtomyProduct">
          <div class="d-grid">
            <button class="btn btn-outline-primary block">선택하신 제품이 애터미에도 있어요!</button>
          </div>
        </router-link>

        <p>현재 애터미 제품으로 이 물품 등을 구매하신다면<br>매월 소비 금액이 0,000,000원입니다.</p>
      </div>
    </section>
  </main>
  <router-link to="/Result2">
    <FixedBtn msg="다음" />
  </router-link>
</div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue'
import FixedBtn from '@/components/Layout/FixedBtn.vue'
import useProductsManager from "@/store/products-manager";
import {computed} from "vue";
export default {
  name: 'Result',
  components: {
    Navigation,
    FixedBtn
  },
  setup(){
    const productsManager = useProductsManager();
    const groupCount = computed(() => productsManager.getSelectedGroupCount());

    return {
      groupCount,
    }
  }
}
</script>

<style lang="scss">
.bg-sky {
  padding-top: 70px;
  background-color: #5ed8ff;
  color: #fff;
}

.result-area {
  padding: 0 20px 50px;

  h1.title {
    color: #fff;
  }

  h2.title {
    font-size: 20px;
    font-weight: 700;
    font-family: "Atomy";
  }

  p {
    margin-bottom: 1rem;
  }


  .btn {
    border: 2px solid #00b5ef;
    color: #00b5ef;
    height: 48px;
    margin-bottom: 1rem;
  }
}

</style>
