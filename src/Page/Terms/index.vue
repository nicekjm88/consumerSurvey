<template>
<div class="wrap">
  <Navigation />
  <main>
    <section>
      <article>
      <strong>나의 소비생활 알아보기</strong>
      <p>
        본 앱은 소비자가 일상에서 쓰는
        상품을 파악하여 전체 소비에 대해서 파악하고, 
        자료를 바탕으로 애터미에 받을 수 있는 혜택에
        대해 알아보고자 합니다.
      </p>
      <p>
        설문내용은 저장할 수 있고 나중에 불러올 수
        있습니다.
      </p>
      <p>
        본 앱은 가족수와 사용기간 그리고
        제품별 소비형태(개인 혹은 가족)
        등을 고려하여 제작되었습니다.
      </p>
      <p>
        다만 소비자의 소비습관, 포인트 적용기준 변동
        등에 따라 다소 달라질 수 있습니다.
      </p>
      <p>
        이 앱은 애터미를 모르는 분들이 애터미 제품과 
        애터미의 PV에 대해 정보를 제공하는데에 
        목적이 있습니다.
      </p>
      <p>
        여러분이 애터미를 보다 쉽게 접근하기를
        바랍니다.
      </p>
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

<style scoped>
section article {
  margin: 0 20px;
}
strong {
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: 1.8px;
  text-align: center;
  color: #000;
  display: block;
}
p {
  margin-top: 22px;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: 1.3px;
  color: #000;
}
</style>