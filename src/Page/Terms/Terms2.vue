<template>
<div class="wrap">
  <Navigation />
  <main class="terms-area">
    <section>
      <h1 class="title">개인정보<br>수집 동의서</h1>
      <article>
      <ol class="list list-order">
        <li>
          개인정보 처리방침은 회원의 개인정보보호를 위하여 애터미㈜가 실시하는 개인정보수집의 목적과 그 정보의 정책적, 시스템적 보안에 관한 규정이며, 애터미㈜ 회원의 기본적인 사생활 비밀과 자유 및 통신비밀을 보장하고 정보유출로 인한 인권피해가 발생하지 않도록 하고자 마련된 것입니다.
        </li>
        <li>
          애터미㈜는 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 아래와 같이 개인정보 처리방침을 수립하여 공개합니다.
        </li>
        <li>
          애터미㈜는 개인정보 처리방침을 통하여 회원께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
        </li>
      </ol>
      </article>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" v-model="checked">
        <label class="form-check-label" for="flexCheckDefault">
          개인정보 수집에 동의하십니까?
        </label>
      </div>

    </section>
  </main>  
  <FixedBtn type="submit" @click="onMove" msg="확인" ref="btn" :disabled="!checked" />  
</div>
</template>

<script>
import { ref } from 'vue';
import Navigation from '@/components/Layout/Navigation.vue';
import FixedBtn from '@/components/Layout/FixedBtn.vue';
import router from "@/router";

export default {
  name: 'Terms2',
  components: {
    Navigation,
    FixedBtn
  },
  setup () {
    const checked = ref(false)

    function onMove() {
      router.push('/qna');
    }

    return {
      checked,
      onMove
    }
  }
}
</script>

<style lang="scss">
.terms-area {

  article {
    // height: 47vh;
    // overflow: auto;
    // border: 1px solid #ccc;
    // padding: 20px;
    // margin-bottom: 10px;

    .list.list-order {
      & > li {
        position: relative;
        padding-left: 15px;
        margin-bottom: 15px;
        counter-increment: index;

        &::before {
          content: counter(index) '.';
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
}
</style>
