<template>
  <div class="wrap">
    <Navigation />
    <main>
      <section>
        <router-link to="/Terms2">
        <img class="logo" :src="require('@/assets/image/logo.png')" />
        </router-link>
        <Form @submit="onSubmit" v-slot="{ errors }">
          <Field type="text" name="atomyId" class="form-control" placeholder="아이디(ID) / 닉네임" :rules="isRequiredName" />
          <span class="error-message">{{ errors.atomyId }}</span>

          <Field type="password" name="atomyPw" class="form-control" placeholder="비밀번호(Password)" :rules="isRequiredBirthDay" />
          <span class="error-message">{{ errors.atomyPw }}</span>
          <div class="d-grid gap-2">
            <button type="submit" class="btn-login btn btn-primary btn-lg">로그인</button>      
          </div>
        </Form>
        <hr />
        <article class="help">
          <p class="infoTxt">
            <strong>아직 애터미㈜ 회원이 아니신가요?</strong>
            최상의 서비스와 혜택을 마음껏 누려보세요.
          </p>
          <div class="d-grid gap-2">
            <a href="https://m.atomy.com:543/kr/m/signin/account/popup" class="btn btn-secondary btn-lg" target="_blank">회원가입</a>
            <a href="http://m.atomy.com/kr/m/account/check/popup" class="btn btn-link btn-lg" target="_blank">회원가입확인</a>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue';
import { Field, Form } from 'vee-validate';
export default {
  name: 'Login',
  components: {
    Field,
    Form,
    Navigation
  },
  methods: {
    isRequiredName(value) {
      return value ? true : '아이디를 입력해주세요.';
    },
    isRequiredBirthDay(value) {
      return value ? true : '생년월일을 입력해주세요.';
    },
    onSubmit(values) {
      console.log(values);
    }
  }
}
</script>

<style scoped>
  .logo {
    margin-bottom: 50px;    
    position: relative;
    left: 50%;
    margin-left: -58px;
  }
  section {
    width: 80%;
    margin: 0 auto;
  }
  section .form-control {
    margin-top: 10px;
  }
  .error-message {
    text-align: left;
    color: coral;
    font-size: 12px;  
  }
  .btn-login {
    margin-top: 10px;
  }
  .infoTxt {
    margin-bottom: 2rem;
  }
  .infoTxt strong {
    display: block;
    font-weight: 700;
  }
  .btn-primary,
  .btn-primary:hover {
    color: #fff;
    background-color: #00b6f0;
    border-color: #00b6f0;
  }
  .btn-check:focus+.btn-primary, 
  .btn-primary:focus {
    background-color: #00b6f0;
    border-color: #00b6f0;
    box-shadow: 0 0 0 0.25rem rgb(0 182 240 / 50%);
  }
  .btn-secondary {
    color: #fff;
    background-color: #707780;
  }
  .btn-link:hover {
    color: #212529;
  }
</style>