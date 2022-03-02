<template>
<div class="wrap">
  <Navigation />
  <main>
    <section>
      <article>
      <h1 class="title">나의 소비생활 알아보기</h1>
      <p>
        본 서비스는 소비자가 일상에서 구매하는 상품을
        파악하고, 이를 바탕으로 애터미 상품 구매시 받을 
        수 있는 혜택을 제시해드립니다.
      </p>
      <ul class="list">
        <li>본 서비스는 소비자의 가구원수와 상품별 소비형태 등을 고려하여 제작되었습니다.</li>
        <li>소비자의 소비형태 및 적용기준에 따라 결과값이 상이할 수 있는 점 안내드립니다.</li>
        <li>본 서비스는 애터미 상품과 마케팅플랜에 대한 정보를 제공하는데에 목적이 있습니다.</li>
      </ul>
      <p>감사합니다.</p>
      </article>
    </section>
  </main>
</div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue'
export default {
  name: 'Terms',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
.list {
  & > li {
    position: relative;
    padding-left: 15px;
    margin-bottom: 15px;

    &::before {
      content: '*';
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>