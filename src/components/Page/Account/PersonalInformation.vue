<template>
  <Navigation />
  <main>
    <Indicator status="신상 정보 입력 페이지" />
    <section>
      <p class="notify">
        <strong>당신의 정보를 알려주세요.</strong>
        <span><em>소중한 정보를 입력해주세요.</em> (보다 더 나은 서비스를 제공 드리기위해 데이터 수집을 목적으로 사용됩니다)</span>
      </p>

      <table class="table">
        <caption>신상 정보 입력 테이블</caption>
        <colgroup>
          <col style="width: 25%">
          <col>
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">이름</th>
            <td><input class="form-control" type="text" placeholder="이름을 입력해주세요." /></td>
          </tr>
          <tr>
            <th scope="row">연령대</th>
            <td>
              <select class="form-select" aria-label="Default select">
                <option selected>연령대를 선택해주세요.</option>
                <option value="1">20대</option>
                <option value="2">30대</option>
                <option value="3">40대</option>
                <option value="3">50대</option>
                <option value="3">60대</option>
              </select>
            </td>
          </tr>
          <tr>
            <th scope="row">성별</th>
            <td>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="genderMale" checked>
                <label class="form-check-label" for="genderMale">
                  남성
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="genderFemale">
                <label class="form-check-label" for="genderFemale">
                  여성
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">이메일</th>
            <td><input class="form-control" type="text" placeholder="이메일을 입력해주세요." /></td>
          </tr>          
        </tbody>
      </table>

    </section>
  </main>

  <router-link to="/step1">
  <FixedBtn msg="다음" />
  </router-link>
</template>

<script>
import Navigation from '../../Layout/Navigation.vue'
import FixedBtn from '../../Layout/FixedBtn.vue'
import Indicator from '../../Layout/Indicator.vue'
export default {
  name: 'PersonalInformation',
  components: {
    FixedBtn,
    Navigation,
    Indicator
  }
}
</script>

<style scoped>

section {
  padding: 0 20px;
}

.table {
  width: 100%;
}

.table tbody th,
.table tbody td {
  border-bottom: 1px solid #d5d5d5;  
}

.table tbody th {
  font-size: 13px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: 1.3px;
  color: #000;
  text-align: left;
  padding: 15px 0;
}

.table tbody td .form-control,
.table tbody td .form-select {
  font-size: 13px;
}

.table tbody td .form-check {
  display: inline-block;
}

.table tbody td .form-check + .form-check {
  margin-left: 20px;
}

.notify {
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #d5d5d5;
  
}

.notify strong {
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: 1.8px;
  color: #000;
  display: block;
  margin-bottom: 8px;
}

.notify em {
  font-size: 13px;
  display: block;
}

.notify span {
  font-size: 11px;
  letter-spacing: 1.1px;
  color: #959595;
  width: 204px;
  display: block;
  margin: 0 auto;
}
 
</style>