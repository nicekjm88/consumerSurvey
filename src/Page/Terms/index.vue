<template>
  <div class="wrap">
    <Navigation />
    <main>
      <section>
        <article>
          <h1 class="title">애터미 큐레이팅</h1>
          <p class="term-desc">
            본 서비스는 소비자가 일상에서 구매하는 상품을 알아보고, 이를 바탕으로 애터미 쇼핑몰 이용시 받을 수 있는 혜택을 제시해 드립니다.
          </p>
          <ul class="list">
            <li>
              본 서비스는 소비자의 가구원수와 상품별 소비형태 등을 고려하여 제작되었습니다.
            </li>
            <li>
              소비자의 소비형태 및 적용기준에 따라 결과값이 상이할 수 있습니다.
            </li>
            <li>
              본 서비스는 애터미 쇼핑몰에 대한 정보를 제공하는데에 목적이 있습니다.
            </li>
          </ul>
          <p>감사합니다.</p>
        </article>
      </section>
    </main>

    <router-link to="/Terms2">
      <FixedBtn msg="확인" />
    </router-link>
  </div>
</template>

<script>
import Navigation from "@/components/Layout/Navigation.vue";
import FixedBtn from "@/components/Layout/FixedBtn.vue";
export default {
  name: "Terms",
  components: {
    Navigation,
    FixedBtn,
  },
};
</script>

<style lang="scss">
.term-desc {
  margin-bottom: 1rem;
}
.list {
  & > li {
    position: relative;
    padding-left: 15px;
    margin-bottom: 15px;

    &::before {
      content: "*";
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>
