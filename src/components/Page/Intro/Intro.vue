<template>
  <main>
  <section>
    <strong>나의 생활을 알아보자<br>나의 상품을 찾아보자</strong>
    <p>본 조사는 소비자가 일상에서 쓰는<br>상품을 파악하여 받을 수 있는 혜택에<br>대해 알아보고자 합니다.</p>
  </section>
  </main>
  <router-link to="/terms">
    <FixedBtn msg="설문조사 시작하기" />
  </router-link>
</template>

<script>
import FixedBtn from '../../Layout/FixedBtn.vue'
export default {
  name: 'Terms',
  components: {
    FixedBtn
  }
}
</script>

<style scoped>
section {
  margin-top: 188px;
  text-align: center;
}
strong {
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.94;
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
</style>