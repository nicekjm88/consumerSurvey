<template>
  <div class="bg-sky">
    <Navigation />
    <main class="result-area">
      <section>
        <h1 class="title">설문에 참여해주셔서<br />감사합니다.</h1>

        <div class="rounded-box rounded-box__wrapper">
          <h2 class="title">결과 확인</h2>
          <hr />
          <p>
            총 {{ groupCount.TotalCount }}개 중
            {{ groupCount.SelectedCount }}개를 선택하였습니다.
          </p>
          <p>[선택리스트]</p>
          <ul class="list list-dot">
            <li v-for="(item, idx) in groupCount.Groups" :key="idx">
              {{ item.Name }} {{ item.Count }}개
            </li>
          </ul>
          
          <table class="table-capsule">
            <caption>
              구매금액 및 누적 PV
            </caption>
            <colgroup>
              <col style="width: 40%" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" colspan="2">
                  <img :src="require(`@/assets/image/i-question.svg`)" />
                  애터미 쇼핑몰에서 구매한다면?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">구매금액</th>
                <td>{{ formatter.toPrice(groupCount.TotalAmount) }}원</td>
              </tr>
              <tr>
                <th scope="row">누적 PV</th>
                <td><span class="main-color">{{ formatter.toPrice(groupCount.TotalPV) }}</span> PV</td>
              </tr>
            </tbody>
          </table>        
        
          <table class="table-capsule">
            <caption>
              구매금액 및 누적 PV
            </caption>
            <colgroup>
              <col style="width: 40%" />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" colspan="2">
                  <img :src="require(`@/assets/image/i-question.svg`)" />
                  내가 연간 받을 수 있는 혜택은?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">캐쉬백 횟수</th>
                <td>약 {{ payback.count }}회(최소)</td>
              </tr>
              <tr>
                <th scope="row">총 캐쉬백 금액</th>
                <td>약 {{ formatter.toPrice(payback.amount) }}원</td>
              </tr>
            </tbody>
          </table>         

          <div class="d-grid gap-3">
            <button class="btn btn-outline-primary block">
              <router-link to="/AtomyProduct">
                선택하신 제품이 애터미에도 있어요!
              </router-link>
            </button>

            <button class="btn btn-primary block" @click="goPV">
              PV 알아보기
            </button>
          </div>

          <strong class="family-site__title">더 많은 상품보기</strong>
          <p class="family-site__desc">
            애터미 쇼핑몰에는 500여가지 제품이 있으며,<br />수만가지 제품 등을
            구매할 수 있는 애터미 아자몰이 있습니다.
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
                <p class="last">애터미 아자몰의 상품이<br />궁금하시다면?</p>
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
import useFormatter from "@/composables/api/utils/formatter";
import useSettingsManager from "@/store/settings-manager";
import { computed, onBeforeMount } from "vue";
import router from "@/router";

export default {
  name: "Result",
  components: {
    Navigation,
    FixedBtn,
  },
  setup() {
    const productsManager = useProductsManager();
    const formatter = useFormatter();
    const settingManager = useSettingsManager();
    const setting = settingManager.getData();
    const groupCount = productsManager.getSelectedGroupCount();

    onBeforeMount(() => {
      if (!productsManager.isDone() || !settingManager.isDone()) {
        router.push("/intro");
      }
    });

    const payback = computed(() => {
      const pbc = Math.floor(groupCount.PVPerYear / setting.StdPV);
      const pba = Math.floor(pbc * setting.StdScore * setting.StdN);
      return {
        count: pbc,
        amount: pba,
      };
    });

    function goPV() {
      router.push(
        `/result2/${groupCount.AmountPerYear}/${groupCount.PVPerYear}/${payback.value.count}/${payback.value.amount}`
      );
    }

    return {
      groupCount,
      formatter,
      setting,
      payback,
      goPV,
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-sky {
  padding-top: 100px;
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
    color: #00b5ef;

    &.btn-primary {
      background-color: #546674;
      border-color: #546674;
      color: #fff;
    }

    &.btn-outline-primary {
      color: #00b5ef;
      background-color: #f8fdff;
      margin-bottom: 0;
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
  margin-bottom: 1rem;

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
    justify-content: flex-end;
    align-items: center;
    font-size: 12px;
    color: #414141;
    text-align: center;

    a {
      color: #333;
    }

    p {
      margin-top: 10px;
      margin-bottom: 0;

      &.last {
        margin-top: 18px;
      }
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

.table-capsule {
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  border-style: hidden;
  margin-bottom: 30px;
  overflow: hidden;

  thead {
    th {
      background-color: #5ed8ff;
      color: #fff;
      padding: 15px 20px;
      font-size: 14px;
      font-weight: 700;
    }
  }
  tbody {
    tr:first-child {
      th::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 15px;
        border-bottom: 1px solid #d5d5d5;
        width: calc(100% - 15px);
      }
      td::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid #d5d5d5;
        width: calc(100% - 15px);
      }
    }

    th {
      padding: 15px 20px;
      font-size: 13px;
      text-align: left;
      background-color: #f8fdff;
      position: relative;
    }
    td {
      padding: 15px 20px;
      font-size: 17px;
      font-weight: 700;
      text-align: right;
      background-color: #f8fdff;
      position: relative;
    }
  }
}

.main-color {
  color: $mainColor;
}
</style>
