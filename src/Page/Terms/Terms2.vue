<template>
  <div class="wrap">
    <Navigation />
    <main class="terms-area">
      <section>
        <h1 class="title">개인정보<br />수집 동의서</h1>
        <article>
          <ul class="list">
            <li>
              <strong>[필수] 개인정보 수집, 이용 동의</strong>
              애터미 주식회사 (이하 “애터미”)는 애터미 큐레이팅 앱 서비스를 제공하기 위하여 다음과 같이 귀하의 개인정보를 수집 · 이용합니다.
            </li>
            <li>
              <strong>수집하는 개인정보 항목</strong>
              [필수항목]<br>
              설문자료 저장 시: 이름, 휴대전화번호, 생년월일, 성별, 가족 구성원수<br>
              서비스 이용 시: 서비스 이용기록, 접속로그, 쿠키(Cookie), 접속IP, 국가정보, OS버전 (모바일), 단말기 모델 (모바일), 해상도 (모바일)
            </li>
            <li>
              <strong>개인정보의 수집 및 이용 목적</strong>
              애터미㈜는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br>처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
              <ul>
                <li>설문조사 대상자의 응답내용 수집 및 개인정보 관리</li>
                <li>애터미 큐레이팅 앱 서비스 이용에 따른 본인 식별, 각종 서비스 관련 고지 사항 전달</li>
                <li>고객들에게 정확한 상품 정보를 제공, 맞춤 제품을 제안</li>
                <li>기타 애터미 사업관리 및 서비스 지원</li>
              </ul>
              응답자의 소비형태 조사의 목적으로 진행되는 설문에 대한 응답자 정보 및 응답 데이터의 통계분석을 목적으로 개인정보를 처리합니다. 또한 소비자 맞춤 서비스 제공을 위한 기초 자료로 활용하고 문제점에 대한 개선방안을 마련하여 제품 및 서비스 구매환경 향상을 위하여 본 조사를 수행하고자 합니다.
            </li>
            <li>
              <strong>개인정보의 처리 및 보유기간</strong>
              애터미(주)는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.<br>
              각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
              <ul>
                <li>조사자료 관련</li>
                <li>정량조사 (앱 기반 설문조사)</li>
                <li>응답자로부터 받은 개인정보가 포함된 설문지 응답자의 개인정보가 포함된 설문지 상의 모든 개인정보는 설문지 파기와 함께 파기됩니다. 설문응답의 보관은 설문 이후 1년 내 파기하는 것을 원칙으로 하며 복원할 수 없는 방법으로 파기합니다.</li>
              </ul>
            </li>
            <li>처리하는 개인정보의 항목
              <ul class="no-margin">
                <li>이름, 휴대전화번호, 생년월일, 성별, 가족 구성원수</li>
              </ul>
            </li>
            <li>
                <strong>개인정보 처리방침의 변경에 관한 사항</strong>
                개인정보 처리방침: v0.1<br>
                이 개인정보 처리방침은 2022년 04월 17일부터 적용됩니다.
            </li>
          </ul>
          <p class="caution">※ 귀하는 위 동의를 거부할 권리가 있습니다. 이에 동의하지 않는 경우 입력 또는 선택하신 개인정보는 서버에 저장되지 않습니다.</p>
        </article>
      </section>
    </main>
  </div>
</template>

<script>
// import { ref } from "vue";
import Navigation from "@/components/Layout/Navigation.vue";
// import FixedBtn from "@/components/Layout/FixedBtn.vue";
// import router from "@/router";

export default {
  name: "Terms2",
  components: {
    Navigation,
    // FixedBtn,
  },
  setup() {
    // const checked = ref(false);

    // function onMove() {
    //   router.push("/SaveData");
    // }

    return {
      // checked,
      // onMove,
    };
  },
};
</script>

<style lang="scss">
.terms-area {
  article {
    // height: 47vh;
    // overflow: auto;
    // border: 1px solid #ccc;
    // padding: 20px;
    // margin-bottom: 10px;

    .list {
      padding-top: 20px;

      & > li {
        position: relative;
        margin-bottom: 30px;      
        
        strong {
          display: block;
          margin-bottom: 5px;
          font-size: 17px;
        }

        &::before {
          position: absolute;
          top: 0;
          left: 0;
        }

        ul {
          
          &.no-margin {
            margin-top: 0;
          }

          margin: 30px 0;
          > li {
            position: relative;
            padding-left: 10px;
            
            &::before {
              content: '';
              width: 4px;
              height: 4px;
              background: #929292;
              border-radius: 50%;
              position: absolute;
              top: 8px;
              left: 0;
            }
          }
        } 
      }
    }

    .caution {
      color: #929292;
      font-size: 14px;
    }
  }
}
</style>
