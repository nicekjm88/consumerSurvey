<template>
  <div class="wrap">
  <Navigation />
  <main>
    <section>
      <article>
        <h1 class="title">애터미 제품</h1>
        <table class="product-table text-center">
          <caption>애터미 제품 - 카테고리, 이름, 금액 / PV에 관한 정보</caption>
          <colgroup>
            <col style="width: 30%;">
            <col>
            <col style="width: 30%;">
          </colgroup>
          <thead>
            <tr>
              <th scope="col">카테고리</th>
              <th scope="col">이름</th>
              <th scope="col">금액 / PV</th>
            </tr>
          </thead>
          <tbody>

          <tr v-for="(product, i) in items" :key="i">
            <td>{{ product.Name }}</td>
            <td>{{ product.MName }}</td>
            <td>
              <div class="price">{{ product.Cost }}원</div>
              <div class="point-value">{{ product.PV }} PV</div>
            </td>
          </tr>
          </tbody>
        </table>
        <button class="btn-more" type="button"> <i class="xi-angle-down"></i> 더보기</button>
      </article>
    </section>
  </main>
  </div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue'
import useProductsManager from "@/store/products-manager";
import {computed, onBeforeMount} from "vue";
import router from "@/router";

export default {
  name: 'Terms',
  components: {
    Navigation
  },

  setup(){
    const productsManager = useProductsManager();

    onBeforeMount(() => {
      //설문 데이터가 없을때 처음으로 돌아간다.
      if(!productsManager.hasValue()){
        router.push('/intro');
      }
    })

    const items = computed(() => productsManager.getSelected().Products);

    return {
      items,
    }
  }
}
</script>

<style lang="scss">
.product-table {
  margin-bottom: 0;

  thead {
    border-bottom: 1px solid #333;
  }

  th,
  td {
    vertical-align: middle;
    padding: 0.5rem 0.5rem;
  }

  &.text-center {
    text-align: center
  }
}
.btn-more {
  width: 100%;
  padding: 10px;
  color: #333;
}
</style>
