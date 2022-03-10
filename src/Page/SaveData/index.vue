<template>
  <div class="wrap">
    <Navigation />
    <main class="input-area">
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
                  {{ date }}
                </td>
              </tr>
              <tr>
                <th scope="row">이름</th>
                <td>
                  <!-- <input type="text" class="form-control" placeholder="김터미" v-model="$store.state.testerName" /> -->
                    <Field type="text" name="testerName" class="form-control" placeholder="김터미" v-model="data.Name" :rules="isRequiredName" />
                    <span class="error-message">{{ errors.testerName }}</span>
                </td>
              </tr>
              <tr>
                <th scope="row">생년월일</th>
                <td>
                  <!-- <input type="text" class="form-control" placeholder="ex) 19880808" v-model="$store.state.testerBirthDay" /> -->
                    <Field type="number" name="testerBirthDay" class="form-control" placeholder="8자리로 입력해주세요." v-model="data.BirthDay" :rules="isRequiredBirthDay" />
                    <span class="error-message">{{ errors.testerBirthDay }}</span>
                </td>
              </tr>
              <tr>
                <th scope="row">성별</th>
                <td>
                  <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input type="radio" class="btn-check" v-model="data.Gender" name="testerGender" id="gender1" autocomplete="off" value="0">
                    <label class="btn btn-outline-secondary" for="gender1">남성</label>
                    <input type="radio" class="btn-check" v-model="data.Gender" name="testerGender" id="gender2" autocomplete="off" value="1">
                    <label class="btn btn-outline-secondary" for="gender2">여성</label>
                  </div>
                </td>
            </tr>
              <tr>
                <th scope="row">전화번호</th>
                <td>
                  <!-- <input type="text" class="form-control" placeholder="ex) 01012345678" v-model="$store.state.testerTellNumber" /> -->
                    <Field type="number" name="testerTellNumber" class="form-control" placeholder="[-]를 제외하고 입력해주세요."  v-model="data.Phone" :rules="isRequiredTellNumber" />
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
import { Field, Form } from 'vee-validate';
import {reactive, ref} from "vue";
import useProductsManager from "@/store/products-manager";
import useQuestionsManager from "@/store/questions-manager";
import useSettingsManager from "@/store/settings-manager"
import useSurvey from "@/composables/api/survey";

export default {
  name: 'SaveData',
  components: {
    Navigation,
    FixedBtn,
    Field,
    Form
  },
  setup(){
    const productsManager = useProductsManager();
    const questionsManager = useQuestionsManager();
    const settingsManager = useSettingsManager();

    const survey = useSurvey();
    const date = ref(getDateString())

    const data = reactive({
      CreateAt: '',
      Age : 0,
      Families: 0,
      UseAtomyYn: '0',
      Name : '',
      BirthDay: '',
      Gender: '0',
      Phone: '',
      StdPV: 0,
      StdN: 0,
      StdScore: 0,
      AmountPerYear: 0,
      PVPerYear: 0,
      Products: undefined
    })

    function isRequiredName(value) {
      return value ? true : '이름을 입력해주세요.';
    }

    function isRequiredBirthDay(value) {
      return value ? true : '생년월일을 입력해주세요.';
    }

    function isRequiredTellNumber(value) {
      return value ? true : '전화번호 입력해주세요.';
    }

    function onSubmit(values) {
      const p = productsManager.getSelected();
      const q = questionsManager.getData();
      const s = settingsManager.getData();

      data.Age = q.Age;
      data.Families = q.Families;
      data.UseAtomyYn = q.UseAtomyYn;
      data.Products = p.Products;

      data.StdPV = s.StdPV;
      data.StdN = s.StdN;
      data.StdScore = s.StdScore;

      data.AmountPerYear = p.AmountPerYear;
      data.PVPerYear = p.PVPerYear;
      data.CreateAt = date.value.replace(/\./gi,'');

      survey.save(data);
    }

    function getDateString(){
      const now = new Date();
      return `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
    }

    return {
      isRequiredName,
      isRequiredBirthDay,
      isRequiredTellNumber,
      onSubmit,
      date,
      data,
    }
  }
}
</script>

<style lang="scss">
.common-table {
  width: 100%;

  th,
  td {
    padding: 10px 0;
  }
}

.btn-group {
  width: 100%;

  .btn {
    margin-bottom: 0;
    line-height: 30px
  }
}
</style>
