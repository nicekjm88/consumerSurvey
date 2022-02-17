<template>
  <div class="wrap">
    <Navigation />
    <main>
      <section>
        <h1 class="title">{{ testerSaveData.name }}의 자료</h1>

        <table class="table">
          <caption>최종 자료</caption>
          <colgroup>
            <col style="width: 50%;" />            
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">작성일</th>
              <td>{{ nowDate }}</td>
            </tr>
            <tr>
              <th scope="row">생년월일</th>
              <td>{{ testerSaveData.birtDay }}</td>
            </tr>
            <tr>
              <th scope="row">성별</th>
              <td>{{ testerSaveData.gender }}</td>
            </tr>
            <tr>
              <th scope="row">연령대</th>
              <td>{{ testerSaveData.age }}</td>
            </tr>
            <tr>
              <th scope="row">가족 수</th>
              <td>{{ testerSaveData.familyNumber }}</td>
            </tr>
            <tr>
              <th scope="row">애터미 제품 사용 유무</th>
              <td>{{ testerSaveData.UseProduct }}</td>
            </tr>            
            <tr>
              <th scope="row">전화번호</th>
              <td>{{ testerSaveData.tellNumber }}</td>
            </tr>
            <tr>
              <th scope="row">월 평균 생활소비 금액</th>
              <td>10,000,000원</td>
            </tr>
            <tr>
              <th scope="row">연 평균 애터미 제품 소비 금액</th>
              <td>117,000,000원</td>
            </tr>
            <tr>
              <th scope="row">PV 횟수</th>
              <td>4~7회</td>
            </tr>
            <tr>
              <th scope="row">PV 금액</th>
              <td>120,000,000원</td>
            </tr>
            <tr>
              <th scope="row">선택상품</th>
              <td>생활용품, 식품, 식...</td>
            </tr>
          </tbody>
        </table>
        <FixedBtn @click="snsShare('title', 'url')" type="button" msg="공유하기" />
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue';
import FixedBtn from '@/components/Layout/FixedBtn.vue';
import { mapState } from 'vuex';
export default {
  name: 'SaveDataList',
  computed: {
    ...mapState(['nowDate', 'testerSaveData', 'selectedItem'])
  },
  methods: {
    //https://developer.mozilla.org/ko/docs/Web/API/Navigator/share
    snsShare(title, SaveDataView) {
      if ( navigator.share ) {
        navigator.share({ title: title, url: SaveDataView });
      } else {
        alert('지원하지 않는 브라우저입니다.');
      }
    }
  },
  components: {
    Navigation,
    FixedBtn
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
table {
  width: 100%;
  border-top: 2px solid #333;
  margin-top: 20px;
}
table th,
table td {
  padding: 15px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
}

table td {
  border-left: 1px solid #ddd;
  text-align: right;
}

table tr:nth-child(2n) th,
table tr:nth-child(2n) td {
  background-color: #f9f9f9;
}
</style>