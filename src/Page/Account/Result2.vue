<template>
<div class="wrap">
  <Navigation />
  <main class="result2-area">
    <section>
      <h1 class="title">애터미 PV에 관하여</h1>
      <hr />
      <p>애터미에는 PV라는 것이 있습니다.</p>
      <p>
        PV는 Point Vaule 약자이며,
        제품 구매 시, 포인트가 쌓이는 겁니다.
        일반적으로 매장이나 온라인 쇼핑몰에서 쌓여지는
        포인트나 적립금을 적립한다고 생각하시면 됩니다.
      </p>
      <p>
        현재 1년간 꾸준히 사용하신다면, 앞서 소비 금액
        약 00,000,000원 소비하시고 PV는 약 000,000가
        쌓입니다.
      </p>
      <p>만약 내 하위에 나랑 비슷한 사람들이 있다면,</p>

      <div class="calculation">
        <p>&lt;나의 하위 사업자 수 계산하기&gt;</p>
        <button class="calculation__btn" @click="$store.dispatch('minus')"><i class="xi-minus"></i></button>
        <span class="calculation__count">{{ SubcontractorCount }}</span>
        <button class="calculation__btn" @click="$store.dispatch('add')"><i class="xi-plus"></i></button>
      </div>

      <p>
        월 000,000원 ~ 000,000원
        소득이 발생될 것이라고 예상됩니다.
      </p>
      <p>
        애터미 사업자가 되시면 원하는 물건도 구매하면서
        동시에 수익도 낼 수 있는 효과를 보시게 됩니다.
      </p>
      <router-link to="/SaveData">
        <FixedBtn msg="자료저장" />
      </router-link>
    </section>
  </main>
</div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue';
import FixedBtn from '@/components/Layout/FixedBtn.vue'
import { mapState } from 'vuex'

export default {
  name: 'Result',
  computed: {
    ...mapState('etc', ['SubcontractorCount'])
  },
  methods: {

  },
  components: {
    Navigation,
    FixedBtn
  }
}
</script>

<style lang="scss">
.result2-area {
  padding: 0 20px 80px;
  line-height: 1.4;

  p {
    margin-bottom: 1rem;
  }
}
.calculation {
  text-align: center;
  margin-bottom: 2rem;

  &__btn {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    line-height: 1;
    margin: 0 20px;
    font-size: 20px;
    position: relative;

    i {
      color: #333;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  
  &__count {
    font-size: 30px;
    display: inline-block;
    vertical-align: middle;
    padding-top: 10px;
    width: 50px;
  }
}

</style>
