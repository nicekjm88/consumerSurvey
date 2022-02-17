<template>
  <div class="wrap">
    <main>
      <section>
        <img class="logo" :src="require('@/assets/image/logo2.svg')" />
        <Form @submit="onSubmit" v-slot="{ errors }">
          <Field type="text" name="atomyId" class="form-control" placeholder="아이디(ID) / 닉네임" :rules="isRequiredName" />
          <span class="error-message">{{ errors.atomyId }}</span>

          <Field type="password" name="atomyPw" class="form-control" placeholder="비밀번호(Password)" :rules="isRequiredBirthDay" />
          <span class="error-message">{{ errors.atomyPw }}</span>

          <div class="rounded-box save-id">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="saveId">
              <label class="form-check-label" for="saveId">아이디 저장</label>
            </div>
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn-login btn btn-primary">로그인</button>      
          </div>
        </Form>

        <div class="area-find">
            <span class="col">
              <a href="http://m.atomy.com/kr/m/account/find/id/popup" class="btn btn-sm">아이디 찾기</a>
            </span> |
            <span class="col">
              <a href="http://m.atomy.com/kr/m/account/find/password/popup" class="btn btn-sm">비밀번호 찾기</a>
            </span>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { Field, Form } from 'vee-validate';
export default {
  name: 'Login',
  components: {
    Field,
    Form,
  },
  methods: {
    isRequiredName(value) {
      return value ? true : '아이디를 입력해주세요.';
    },
    isRequiredBirthDay(value) {
      return value ? true : '비밀번호를 입력해주세요.';
    },
    onSubmit(values) {
      
      values.atomyId === '120000' && values.atomyPw === 'atomy@8580'
        ? this.$router.push('intro')
        : alert('올바른 아이디/비밀번호가 아닙니다.')
        
    }
  }
}
</script>

<style scoped>
  .wrap {
    padding-top: 140px;
  }
  .save-id {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .logo {
    margin-bottom: 50px;    
    position: relative;
    left: 50%;
    margin-left: -63.5px;
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
  .area-find {
    text-align: center;
    margin-top: 10px;
  }
</style>