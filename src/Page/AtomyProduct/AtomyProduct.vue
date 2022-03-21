<template>
  <div class="wrap">
    <Navigation />
    <main>
      <section>
        <article>
          <h1 class="title">애터미 쇼핑몰</h1>
          <table class="product-table text-center">
            <caption>
              애터미 제품 - 카테고리, 이름, 금액 / PV에 관한 정보
            </caption>
            <colgroup>
              <col style="width: 30%;" />
              <col />
              <col style="width: 30%;" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">카테고리</th>
                <th scope="col">이름</th>
                <th scope="col">금액 / PV</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(product, i) in items.Products" :key="i" v-show="i < maxCount">
                <td>{{ product.Name }}</td>
                <td>{{ product.MName }}</td>
                <td>
                  <div class="price">{{ product.Cost }}원</div>
                  <div class="point-value">{{ product.PV }} PV</div>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn-more" type="button" @click="showMore">
            <i class="xi-angle-down"></i> 더보기
          </button>
          <div class="total-product">
            <div class="total-product__count">
              총 {{items.Count}}개 상품
            </div>
            <div class="total-product__price">
              <ul>
                <li>
                  가격 : <strong>{{items.AmountPerYear}}</strong> 원
                </li>
                <li>
                  PV : <strong class="main-color">{{items.PVPerYear}}</strong> PV
                </li>
              </ul>
            </div>
          </div>

        </article>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/Layout/Navigation.vue";
import useProductsManager from "@/store/products-manager";
import { onBeforeMount, ref } from "vue";
import router from "@/router";

export default {
  name: "Terms",
  components: {
    Navigation,
  },

  setup() {
    const productsManager = useProductsManager();
    const baseCount = 7;
    const maxCount = ref(baseCount);
    const items = productsManager.getSelected();
    const option = { maximumFractionDigits: 4 };

    onBeforeMount(() => {
      //설문 데이터가 없을때 처음으로 돌아간다.
      if (!productsManager.hasValue()) {
        router.push("/intro");
      }
    });

    function showMore(){
      let max_count = maxCount.value + baseCount;
      if(max_count > items.Count) max_count = items.Count;
      maxCount.value = max_count;
    }  

    items.AmountPerYear = items.AmountPerYear.toLocaleString("ko-KR", option);
    items.PVPerYear = items.PVPerYear.toLocaleString("ko-KR", option);

    // const items = computed(() => productsManager.getSelected());

    return {
      items,
      showMore,
      maxCount,
    };
  },
};
</script>

<style lang="scss">
.product-table {
  width: 100%;
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
    text-align: center;
  }
}
.btn-more {
  width: 100%;
  padding: 10px;
  color: #333;
}

.total-product {
  border-top: 2px solid #686868;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  &__price {
    text-align: right;

    ul > li {
      margin-bottom: 10px;

      .main-color {
        color: $mainColor;
      }
    }
  }
}

</style>
