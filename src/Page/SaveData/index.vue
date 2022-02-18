<template>
  <div class="wrap">
    <Navigation />
    <main>
      <section>
        <h1 class="title">자료저장</h1>
        <hr />
        <Form @submit="onSubmit" v-slot="{ errors }">
          <table class="common-table">
            <caption>자료저장</caption>
            <colgroup>
              <col style="width: 25%">
              <col>
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">작성일</th>
                <td>
                  {{ nowDate }}
                </td>
              </tr>
              <tr>
                <th scope="row">이름</th>
                <td>
                  <!-- <input type="text" class="form-control" placeholder="김터미" v-model="$store.state.testerName" /> -->                  
                    <Field type="text" name="testerName" class="form-control" placeholder="김터미" :rules="isRequiredName" />
                    <span class="error-message">{{ errors.testerName }}</span>                  
                </td>
              </tr>
              <tr>
                <th scope="row">생년월일</th>
                <td>
                  <!-- <input type="text" class="form-control" placeholder="ex) 19880808" v-model="$store.state.testerBirthDay" /> -->                  
                    <Field type="number" name="testerBirthDay" class="form-control" placeholder="ex) 19880808" :rules="isRequiredBirthDay" />
                    <span class="error-message">{{ errors.testerBirthDay }}</span>                  
                </td>
              </tr>
              <tr>
                <th scope="row">성별</th>
                <td>
                  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" name="testerGender" id="gender1" autocomplete="off" value="남성" checked>
                    <label class="btn btn-outline-primary" for="gender1">남성</label>
                    <input type="radio" class="btn-check" name="testerGender" id="gender2" autocomplete="off" value="여성">
                    <label class="btn btn-outline-primary" for="gender2">여성</label>
                  </div>
                </td>
            </tr>
              <tr>
                <th scope="row">전화번호</th>
                <td>
                  <!-- <input type="text" class="form-control" placeholder="ex) 01012345678" v-model="$store.state.testerTellNumber" /> -->                  
                    <Field type="number" name="testerTellNumber" class="form-control" placeholder="ex) 01012345678" :rules="isRequiredTellNumber" />
                    <span class="error-message">{{ errors.testerTellNumber }}</span>                  
                </td>
              </tr>
            </tbody>
          </table>
          <FixedBtn type="submit" msg="저장하기" />                
        </Form>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue';
import FixedBtn from '@/components/Layout/FixedBtn.vue';
import { mapState } from 'vuex';
import { Field, Form } from 'vee-validate';
export default {
  name: 'SaveData',
  computed: {
    ...mapState(['nowDate'])
  },
  methods: {
    isRequiredName(value) {
      return value ? true : '이름을 입력해주세요.';
    },
    isRequiredBirthDay(value) {
      return value ? true : '생년월일을 입력해주세요.';
    },
    isRequiredTellNumber(value) {
      return value ? true : '전화번호 입력해주세요.';
    },
    onSubmit(values) {
      console.log(values);
      this.$store.dispatch('setDate');  
      this.$store.dispatch('setName', values.testerName);  
      this.$store.dispatch('setBirthDay', values.testerBirthDay);  
      this.$store.dispatch('setTellNumber', values.testerTellNumber);  

      this.$router.push('/SaveDataList');
    }
  }, 
  components: {
    Navigation,
    FixedBtn,
    Field,
    Form
  }
}
</script>

<style scoped>
ol, ul {
  padding-left: 0;
}
section {
  padding: 0 20px 80px;
} 
.btn {
  width: 100%;
  border: 2px solid #00b5ef;
  color: #00b5ef;
  height: 48px;
  margin-bottom: 1rem;
}
.calculation {
  text-align: center;
  margin-bottom: 2rem;
}
.calculation button {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 1;
  margin: 0 20px;
  font-size: 20px;
}
.common-table {
  width: 100%;
}

.common-table th,
.common-table td {
  padding: 10px 0;
}

.btn-group {
  width: 100%;
}
.btn-group .btn {
  margin-bottom: 0;
  line-height: 30px
}

.error-message {
  color: coral;
  font-size: 12px;
  vertical-align: middle;
}
.error-message i {
  font-size: 18px;
  vertical-align: middle;
}
input::placeholder {
  color: #ccc;
}
</style>