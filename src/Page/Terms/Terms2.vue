<template>
<div class="wrap">
  <Navigation />
  <main>
    <section>
      <h1 class="title">개인정보<br>수집 동의서</h1>
      <article>
      <ol>
        <li>
          1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vitae asperiores accusamus cumque, fugit unde mollitia quam veniam aliquid totam sapiente sunt eum ex sint fuga earum ea nemo provident.
        </li>
        <li>
          2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vitae asperiores accusamus cumque, fugit unde mollitia quam veniam aliquid totam sapiente sunt eum ex sint fuga earum ea nemo provident.
        </li>
        <li>
          3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In vitae asperiores accusamus cumque, fugit unde mollitia quam veniam aliquid totam sapiente sunt eum ex sint fuga earum ea nemo provident.
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
  <!-- <router-link to="/qna"> -->
    <FixedBtn type="submit" @click="onMove" msg="확인" ref="btn" :disabled="!checked" />
  <!-- </router-link> -->
</div>
</template>

<script>
import {ref} from 'vue';
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

<style scoped>

section {
  margin: 0 20px;
}

article {
  height: 47vh;
  overflow: auto;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 10px;
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
ol > li + li {
  margin-top: 20px;
}
</style>
