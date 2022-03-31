<template>
  <div class="wrap">
    <Navigation />
    <main class="input-area">
      <section>
        <h1 class="title">{{ isEdit ? '수정하기' : '자료저장' }}</h1>
        <hr />
        <Form @submit="onSubmit" v-slot="{ errors }">
          <table class="common-table">
            <caption>
              자료저장
            </caption>
            <colgroup>
              <col style="width: 25%" />
              <col />
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
                  <Field
                    type="text"
                    name="testerName"
                    class="form-control"
                    placeholder="이름을 입력해주세요"
                    v-model="data.Name"
                    :rules="isRequiredName"
                  />
                  <span class="error-message">{{ errors.testerName }}</span>
                </td>
              </tr>
              <tr>
                <th scope="row">생년월일</th>
                <td>
                  <Field
                    type="number"
                    name="testerBirthDay"
                    class="form-control"
                    placeholder="8자리로 입력해주세요"
                    v-model="data.BirthDay"
                    :rules="isRequiredBirthDay"
                  />
                  <span class="error-message">{{ errors.testerBirthDay }}</span>
                </td>
              </tr>
              <tr>
                <th scope="row">성별</th>
                <td>
                  <div
                    class="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      class="btn-check"
                      v-model="data.Gender"
                      name="testerGender"
                      id="gender1"
                      autocomplete="off"
                      value="0"
                    />
                    <label class="btn btn-outline-secondary" for="gender1"
                      >남성</label
                    >
                    <input
                      type="radio"
                      class="btn-check"
                      v-model="data.Gender"
                      name="testerGender"
                      id="gender2"
                      autocomplete="off"
                      value="1"
                    />
                    <label class="btn btn-outline-secondary" for="gender2"
                      >여성</label
                    >
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">전화번호</th>
                <td>
                  <Field
                    type="number"
                    name="testerTellNumber"
                    class="form-control"
                    placeholder="[-]를 제외하고 입력해주세요"
                    v-model="data.Phone"
                    :rules="isRequiredTellNumber"
                  />
                  <span class="error-message">{{
                    errors.testerTellNumber
                  }}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div v-if="!isEdit" class="agree-area clearfix">
            <div class="pull-left">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  v-model="checked"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  개인정보 수집에 동의하십니까?
                </label>
              </div>
            </div>
            <div class="pull-right">
              <button type="button" class="btn btn-outline-dark" @click="clickTerms2">
                  전문 보기
              </button>
            </div>
          </div>

          <FixedBtn type="submit" :disabled="!checked" msg="저장하기" />
        </Form>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/Layout/Navigation.vue";
import FixedBtn from "@/components/Layout/FixedBtn.vue";
import { Field, Form } from "vee-validate";
import {onBeforeMount, onMounted, reactive, ref} from "vue";
import useProductsManager from "@/store/products-manager";
import useQuestionsManager from "@/store/questions-manager";
import useSettingsManager from "@/store/settings-manager";
import useSurvey from "@/composables/api/survey";
import router from "@/router";
import useFormatter from "@/composables/api/utils/formatter";
import useUserManager from "@/store/user-manager";
import useBufferManager from "@/store/buffer-mamager";
import useValidator from "@/composables/api/utils/validator";

export default {
  name: "SaveData",
  components: {
    Navigation,
    FixedBtn,
    Field,
    Form,
  },
  setup() {
    const productsManager = useProductsManager();
    const questionsManager = useQuestionsManager();
    const settingsManager = useSettingsManager();
    const userManager = useUserManager();
    const bufferManager = useBufferManager();

    const validator = useValidator();

    const selectedProducts = productsManager.getSelected();
    const selectedQuestions = questionsManager.getData();
    const settings = settingsManager.getData();


    const survey = useSurvey();
    const formatter = useFormatter();

    const isEdit = ref(
      router.currentRoute.value.query.ResultNo > 0 ||
        !!router.currentRoute.value.query.key
    );
    const date = ref(getDateString());

    const data = reactive({
      CreateAt: "",
      Age: 0,
      Families: 0,
      UseAtomyYn: "0",
      Name: "",
      BirthDay: "",
      Gender: "0",
      Phone: "",
      StdPV: 0,
      StdN: 0,
      StdScore: 0,
      AmountPerYear: 0,
      PVPerYear: 0,
      Products: undefined,
    });

    const checked = ref(false);

    onBeforeMount(() => {
      console.log('save_data beforemount');
      //설문 수정
      if (isEdit.value) {
        const user_type = userManager.getUserType();
        if (user_type === 1) {
          const resultNo = router.currentRoute.value.query.ResultNo;
          survey.getResult(resultNo).then((r) => {
            if (r.data.Status === 1 && r.data.Data) {
              initData(r.data.Data);
            }
          });
        } else if (user_type === 2) {
          const key = router.currentRoute.value.query.key;
          survey.getResultForGuest(key).then((r) => {
            if (r.data.Status === 1 && r.data.Data) {
              initData(r.data.Data);
            }
          });
        }
      } else {
        if (
          !productsManager.isDone() ||
          !questionsManager.isDone() ||
          !settingsManager.isDone()
        ) {
          router.push("/intro");
        }
      }
    });

    onMounted(() => {
      if(router.options.history.state.forward)
      {
        const surveyee = bufferManager.getSurveyee();
        data.Name = surveyee.Name;
        data.BirthDay = surveyee.BirthDay;
        data.Gender = surveyee.Gender;
        data.Phone = surveyee.Phone;
        checked.value = surveyee.IsChecked;
      }else{
        bufferManager.clearSurveyee();
      }
    });

    function initData(d) {
      data.ResultNo = d.ResultNo;
      data.Name = d.Name;
      data.BirthDay = d.BirthDay;
      data.Gender = d.Gender;
      data.Phone = d.Phone;
      date.value = formatter.toDate(d.CreateAt);
    }

    function isRequiredName(value) {
      return value ? true : "이름을 입력해주세요.";
    }

    function isRequiredBirthDay(value) {
      if (value) {
        if (value.length !== 8) return "생년월일 8자리를 입력해주세요.";
        if (!validator.isBirthday(value))
          return "정확한 생년월일을 입력해주세요.";
        // if(validator.checkAge(value, (age) => age < 18)) return '18세 이상 회원만 참여 하실 수 있습니다.'

        return true;
      }

      return "생년월일을 입력해주세요.";
    }

    function isRequiredTellNumber(value) {
      if (value) {
        return value.length === 11 ? true : "전화번호 11자리를 입력해주세요.";
      }

      return "전화번호 입력해주세요.";
    }

    function onSubmit() {
      bufferManager.clearSurveyee();
      if (isEdit.value) {
        //설문 수정
        if (confirm("수정하시겠습니까?")) {
          const user_type = userManager.getUserType();
          if (user_type === 1) {
            survey.edit(data).then((r) => {
              if (r.data.Status === 1 && r.data.Data) {
                router.back();
              } else {
                alert("잠시후 다시 시도해 주세요.");
              }
            });
          } else if (user_type === 2) {
            const key = router.currentRoute.value.query.key;
            survey.editForGuest(data, key).then((r) => {
              if (r.data.Status === 1 && r.data.Data) {
                router.back();
              } else {
                alert("잠시후 다시 시도해 주세요.");
              }
            });
          }
        }
      } else {
        //설문 저장
        data.Age = selectedQuestions.Age;
        data.Families = selectedQuestions.Families;
        data.UseAtomyYn = selectedQuestions.UseAtomyYn;
        data.Products = selectedProducts.Products;

        data.StdPV = settings.StdPV;
        data.StdN = settings.StdN;
        data.StdScore = settings.StdScore;

        data.AmountPerYear = selectedProducts.AmountPerYear;
        data.PVPerYear = selectedProducts.PVPerYear;
        data.CreateAt = date.value.replace(/\./gi, "");
        data.PayBackCount = Math.floor(data.PVPerYear / data.StdPV);

        if (userManager.getUserType() === 2) {
          survey.saveForGuest(data).then((r) => {
            if (r.data.Status === 1 && r.data.Data) {
              router.push(`/GuestView?key=${r.data.Data}`);
            } else {
              alert("잠시후 다시 시도해 주세요.");
            }
          });
        } else {
          survey.save(data).then((r) => {
            if (r.data.Status === 1 && r.data.Data) {
              router.push("/SaveDataList");
            } else {
              alert("잠시후 다시 시도해 주세요.");
            }
          });
        }
      }
    }

    function getDateString() {
      if (!isEdit.value) {
        return formatter.toDate(new Date());
      }
    }

    function clickTerms2(){
      bufferManager.setSurveyee({
        Name : data.Name,
        BirthDay : data.BirthDay,
        Gender : data.Gender,
        Phone : data.Phone,
        IsChecked : checked.value,
      }).then(() => router.push('/Terms2'));
    }

    return {
      isRequiredName,
      isRequiredBirthDay,
      isRequiredTellNumber,
      onSubmit,
      clickTerms2,

      date,
      data,
      checked,
      isEdit,
    };
  },
};
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
    line-height: 30px;
  }
}
.agree-area {
  margin-top: 20px;

  .form-check {
    margin-top: 8px;
  }
}
</style>
