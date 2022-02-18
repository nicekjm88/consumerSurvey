<template>
<div>
  <Navigation />
  <main>
  <section>
    <article>
      <strong>100만원 소비해서<br>5천원 적립하기 보단<br>애터미로 6만원 벌자!</strong>
      <p>노후 준비가 되어있나요?<br>이루고 싶었던 꿈이 있나요?<br>돈 걱정 없이 살고 싶으신가요?<br>나의 소비 생활을 파악하고<br>애터미를 알아가보세요</p>
      <div class="img-wrap">
        <img :src="require('@/assets/image/img-intro.png')" />
      </div>
    </article>
  </section>
  </main>
  <router-link to="/Terms2">
    <FixedBtn msg="설문 시작" />
  </router-link>
</div>
</template>

<script>

import FixedBtn from '@/components/Layout/FixedBtn.vue';
import Navigation from '@/components/Layout/Navigation.vue';

export default {
  name: 'IntroPage',
  components: {
    FixedBtn,
    Navigation
  }
}
</script>

<style scoped>
section {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
strong {
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 1.8px;
  text-align: center;
  color: #000;
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
.img-wrap {
  width: 215px;
  margin: 2rem auto 0;
}
.img-wrap img {
  width: 215px;
}
</style>
