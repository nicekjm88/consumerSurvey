<template>
  <div class="bg-sky">
    <Navigation />
    <main class="result-area">
      <section>
        <h1 class="title">설문에 참여해주셔서<br />감사합니다.</h1>

        <div class="rounded-box rounded-box__wrapper">
          <h2 class="title">결과 확인</h2>
          <hr />
          <p>총 00개 중 {{ groupCount.TotalCount }}개를 선택하였습니다.</p>
          <p>[선택리스트]</p>
          <ul class="list list-dot">
            <li v-for="(item, idx) in groupCount.Groups" :key="idx">
              {{ item.Name }} {{ item.Count }}개
            </li>
          </ul>

          <router-link to="/AtomyProduct">
            <div class="d-grid">
              <button class="btn btn-outline-primary block">
                선택하신 상품이 애터미 쇼핑몰에도 있어요!
              </button>
            </div>
          </router-link>

          <p>
            애터미 쇼핑몰에서 선택하신 상품을 구매하신다면<br />
            매년 소비 금액은 약 0,000,000원이며<br />
            누적 포인트(PV)는 0,000,000 PV입니다.<br />
          </p>
          <p>
            PV에 대한 설명을 알고 싶으신 분들은 아래 버튼을<br />클릭해주세요.
          </p>

          <router-link to="/Result2">
            <div class="d-grid">
              <button class="btn btn-primary block">
                PV 알아보기
              </button>
            </div>
          </router-link>
          
          <strong class="family-site__title">더 많은 상품보기</strong>
          <p class="family-site__desc">
            애터미 쇼핑몰에는 500여가지 제품이 있으며,<br />수만가지 제품 등을 구매할 수 있는 애터미 아자몰이 있습니다.
          </p>

          <div class="family-site">
            <div>
              <a href="http://m.atomy.com/kr/m" target="_blank">
                <img
                  :src="require(`@/assets/image/logo2.svg`)"
                  style="width: 65px"
                />
                <p>애터미 쇼핑몰의 상품이<br />궁금하시다면?</p>
              </a>
            </div>
            <div>
              <a href="https://atomyaza.co.kr/m/" target="_blank">
                <img :src="require(`@/assets/image/logo-aza.svg`)" />
                <p>애터미 아자몰의 상품이<br />궁금하시다면?</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <router-link to="/SaveData">
      <FixedBtn msg="자료저장" />
    </router-link>
  </div>
</template>

<script>
import Navigation from "@/components/Layout/Navigation.vue";
import FixedBtn from "@/components/Layout/FixedBtn.vue";
import useProductsManager from "@/store/products-manager";
import { computed } from "vue";
export default {
  name: "Result",
  components: {
    Navigation,
    FixedBtn,
  },
  setup() {
    const productsManager = useProductsManager();
    const groupCount = computed(() => productsManager.getSelectedGroupCount());

    return {
      groupCount,
    };
  },
};
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
    border: 2px solid $mainColor;
    height: 48px;
    margin-bottom: 1rem;
    color: #00b5ef;

    &.btn-primary {
      background-color: #5ed8ff;
      border-color: #5ed8ff;
      color: #fff;
    }

    &.btn-outline-primary {
      color: #00b5ef;
    }
  }

  .family-site__title {
    font-size: 20px;
    display: block;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  .family-site__desc {
    margin-bottom: 40px;
  }

}

.list {
  &.list-dot {
    > li {
      padding-left: 15px;
      position: relative;

      &::before {
        content: "· ";
        position: absolute;
        top: 0;
        left: 5px;
        font-size: 20px;
        font-weight: 700;
        line-height: 1;
      }
    }
  }
}

.family-site {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  position: relative;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #414141;
    text-align: center;

    a {
      color: #333;
    }

    p {
      margin-top: 10px;
    }
  }

  &::after {
    content: "";
    width: 1px;
    height: 70px;
    position: absolute;
    top: 10px;
    left: 50%;
    background-color: #ccc;
  }
}
</style>
