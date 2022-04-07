<template>
  <div class="wrap">
    <Navigation />
    <main>
      <section>
        <article>
          <h1 class="title">{{ title }}</h1>
          <table class="product-table text-center">
            <caption>
              애터미 제품 - 분류, 상품명, 가격 / PV에 관한 정보
            </caption>
            <colgroup>
              <col style="width: 30%;" />
              <col />
              <col style="width: 30%;" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">분류</th>
                <th scope="col">상품명</th>
                <th scope="col">가격 / PV</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(product, i) in items.Products"
                :key="i"
                v-show="i < maxCount"
              >
                <td>{{ product.Name }}</td>
                <td>{{ product.MName }}</td>
                <td>
                  <div class="price">
                    {{ formatter.toPrice(product.Cost) }}원
                  </div>
                  <div class="point-value">
                    <span class="main-color">{{
                      formatter.toPrice(product.PV)
                    }}</span>
                    PV
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            v-if="!hideMore"
            class="btn-more"
            type="button"
            @click="showMore"
          >
            <i class="xi-angle-down"></i> 더보기
            <small>({{ maxCount }}/{{ items.Count }})</small>
          </button>
          <div class="total-product">
            <div class="total-product__count">총 {{ items.Count }}개 상품</div>
            <div class="total-product__price">
              <ul>
                <li>
                  가격 :
                  <strong>{{ formatter.toPrice(items.AmountPerYear) }}</strong>원
                </li>
                <li>
                  PV :
                  <strong class="main-color">{{
                    formatter.toPrice(items.PVPerYear)
                  }}</strong>
                  PV
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
import { computed, onBeforeMount, ref } from "vue";
import router from "@/router";
import useSurvey from "@/composables/api/survey";
import useFormatter from "@/composables/api/utils/formatter";

export default {
  name: "Terms",
  components: {
    Navigation,
  },
  props: {
    resultNo: { type: String, default: "0" },
  },
  setup(props) {
    const productsManager = useProductsManager();
    const survey = useSurvey();
    const baseCount = 7;
    const maxCount = ref(baseCount);
    const items = ref(productsManager.genEmptySelected());
    const formatter = useFormatter();
    const title = ref("선택 상품");

    const hideMore = computed(
      () => maxCount.value >= items.value.Products.length
    );

    const key = router.currentRoute.value.query.key;

    onBeforeMount(() => {
      if (router.currentRoute.value.name === "AtomyProduct") {
        title.value = "애터미 제품";
        if (!productsManager.hasValue()) {
          router.push("/intro");
        }
        items.value = productsManager.getSelected();
      } else if (router.currentRoute.value.name === "ResultAtomyProduct") {
        survey.getResultProducts(props.resultNo).then((r) => {
          console.log("ResultAtomyProduct", r);
          if (r.data.Status === 1 && r.data.Data) {
            items.value = productsManager.genSelected(r.data.Data);
          }
        });
      } else if (router.currentRoute.value.name === "GuestAtomyProduct") {
        survey.GetResultProductsForGuest(key).then((r) => {
          console.log("GuestAtomyProduct", r);
          if (r.data.Status === 1 && r.data.Data) {
            items.value = productsManager.genSelected(r.data.Data);
          }
        });
      } else if (router.currentRoute.value.name === "ShareAtomyProduct") {
        survey.getResultProductsForShare(key).then((r) => {
          console.log("ShareAtomyProduct", r);
          if (r.data.Status === 1 && r.data.Data) {
            items.value = productsManager.genSelected(r.data.Data);
          }
        });
      }
    });

    function showMore() {
      let max_count = maxCount.value + baseCount;
      if (max_count > items.value.Count) max_count = items.value.Count;
      maxCount.value = max_count;
    }

    return {
      showMore,

      items,
      maxCount,
      formatter,
      title,
      hideMore,
    };
  },
};
</script>

<style lang="scss">
.product-table {
  border-top: 1px solid #686868;
  width: 100%;
  margin-bottom: 0;
  table-layout: fixed;

  thead {
    border-bottom: 1px solid #d5d5d5;
  }

  th,
  td {
    vertical-align: middle;
    padding: 0.5rem 0.5rem;
    word-break: break-all;
    // word-break: keep-all; iOS에서 오류 발생함 
    font-size: 13px;
    table-layout: fixed;
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
  border-top: 1px solid #686868;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  &__price {
    text-align: right;

    ul > li {
      margin-bottom: 10px;
    }
  }
}

.main-color {
  color: $mainColor;
}
</style>
