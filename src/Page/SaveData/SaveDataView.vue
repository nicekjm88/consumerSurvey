<template>
  <div class="wrap">
    <Navigation
      @buttonDeleteClick="handleDelect"
      @buttonEditClick="handleEdit"
    />
    <main>
      <section>
        <h1 class="title">{{ item.Name }}님의 자료</h1>

        <table class="table table-striped">
          <caption>
            최종 자료
          </caption>
          <colgroup>
            <col style="width: 55%;" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">작성일</th>
              <td>{{ reactResultFormatted.CreateAt }}</td>
            </tr>
            <tr>
              <th scope="row">생년월일</th>
              <td>{{ reactResultFormatted.BirthDay }}</td>
            </tr>
            <tr>
              <th scope="row">성별</th>
              <td>{{ reactResultFormatted.Gender }}</td>
            </tr>
            <tr>
              <th scope="row">연령대</th>
              <td>{{ reactResultFormatted.Age }}</td>
            </tr>
            <tr>
              <th scope="row">가족 수</th>
              <td>{{ reactResultFormatted.Families }}</td>
            </tr>
            <tr>
              <th scope="row">애터미 제품 사용</th>
              <td>{{ reactResultFormatted.UseAtomyYn }}</td>
            </tr>
            <tr>
              <th scope="row">전화번호</th>
              <td>{{ reactResultFormatted.Phone }}</td>
            </tr>
            <tr>
              <th scope="row">연 평균 생활소비 금액</th>
              <td>약 {{ reactResultFormatted.AmountPerYear }}</td>
            </tr>
            <tr>
              <th scope="row">연 획득 총 PV</th>
              <td>약 {{ reactResultFormatted.PVPerYear }}</td>
            </tr>
            <tr>
              <th scope="row">예상 수당 지급 횟수(최소)</th>
              <td>약 {{ reactResultFormatted.PayBackCount }}</td>
            </tr>
            <tr>
              <th scope="row">선택상품</th>
              <td>
                <!-- {{ item.ProductNames }} -->
                <button @click="showView" type="button" class="btn btn-outline-dark">더보기</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="shared-area" v-if="isShared">
          <p>
            <b>애터미가 궁금하신가요</b>
            소비가 소득이 되는
          </p>
          <div class="d-grid">
              <button type="button" class="btn btn-primary block" @click="goShop">쇼핑몰 보러가기</button>
          </div>
        </div>
        <div v-else>
          <FixedBtn @click="snsShare('나의 소비생활 알아보기')" type="button" msg="공유하기" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/Layout/Navigation.vue";
import FixedBtn from "@/components/Layout/FixedBtn.vue";
import {computed, getCurrentInstance, onBeforeMount, reactive} from "vue";
import useSurvey from "@/composables/api/survey";
import router from "@/router";
import useFormatter from "@/composables/api/utils/formatter";
import { Share } from '@capacitor/share';
import {Capacitor} from "@capacitor/core";
import useUserManager from "@/store/user-manager";

export default {
  name: "SaveDataList",
  data() {
    return {
      isShared: false
    }
  },
  components: {
    Navigation,
    FixedBtn,
  },
  props:{
    resultNo:{ type: String, default: '0'},
  },
  setup(props) {
    const survey = useSurvey();
    const formatter = useFormatter();
    const userManager = useUserManager();

    const that = getCurrentInstance();

    const reactResult = reactive({ Result: {} });
    const reactResultFormatted = reactive({
      CreateAt: "",
      BirthDay: "",
      Gender: "",

      Age: "",
      Families: "",
      PayBackCount: "",

      Phone: "",
      UseAtomyYn: "",

      AmountPerYear: "",
      PVPerYear: "",
    });

    const item = computed(() => reactResult.Result);
    const key = router.currentRoute.value.query.key;

    onBeforeMount(()=>{
      that.data.isShared = userManager.getUserType() !== 1;
      if(router.currentRoute.value.name === 'ShareView'){
        //공유 화면
        if(key){
          survey.getResultForShare(key).then((r) => {
            if (r.data.Status === 1 && r.data.Data) {
              reactResult.Result = r.data.Data;
              drawData(reactResult.Result);
            } else {
              alert('잠시후 다시 시도해 주세요.')
            }
          });
        }
      }else if(router.currentRoute.value.name === 'GuestView'){
        //게스트 결과 화면
        if(key){
          survey.getResultForGuest(key).then((r) => {
            if (r.data.Status === 1 && r.data.Data) {
              reactResult.Result = r.data.Data;
              drawData(reactResult.Result);
            } else {
              alert('잠시후 다시 시도해 주세요.')
            }
          });
        }
      }else{
        //결과 화면
        survey.getResult(props.resultNo).then((r) => {
          if (r.data.Status === 1 && r.data.Data) {
            reactResult.Result = r.data.Data;
            drawData(reactResult.Result);
          } else {
            alert('잠시후 다시 시도해 주세요.')
            router.back();
          }
        });
      }
    });

    function drawData(v) {
      reactResultFormatted.CreateAt = formatter.toDate(v.CreateAt);
      reactResultFormatted.BirthDay = formatter.toDate(v.BirthDay, ['년 ', '월 ', '일']);
      reactResultFormatted.Gender = formatter.toGender(v.Gender);
      reactResultFormatted.Age = v.Age + '대';
      reactResultFormatted.Families = v.Families + '인';
      reactResultFormatted.PayBackCount = v.PayBackCount + '회';
      reactResultFormatted.Phone = formatter.toPhone(v.Phone);
      reactResultFormatted.UseAtomyYn = formatter.toYn(v.UseAtomyYn);
      reactResultFormatted.AmountPerYear = formatter.toPrice(v.AmountPerYear) + ' 원';
      reactResultFormatted.PVPerYear = formatter.toPrice(v.PVPerYear) + ' PV';
    }

    function snsShare(title) {
      survey.getResultKey(props.resultNo).then(async (r) => {
        if (r.data.Status === 1 && r.data.Data) {
          const key = r.data.Data;
          const url = `${process.env.VUE_APP_BASE_URL}/ShareView?key=${key}`;

          if (!Capacitor.isNativePlatform()) {
            if( typeof navigator.share === 'function' ) {
              await navigator.share({
                title: title,
                url: url,
              });
            } else {
              alert('지원하지 않는 브라우저입니다.');
            }
          } else {
            const is_share = await Share.canShare();
            if (is_share.value) {
              await Share.share({
                title: title,
                url: url,
              });
            } else {
              alert('지원하지 않는 디바이스 입니다.');
            }
          }
        } else {
          alert('잠시후 다시 시도해 주세요.')
        }
      });
    }

    function handleDelect() {
      if (confirm('해당 정보(들)를 삭제하시겠습니까?\n만약 삭제하신다면 복구가 불가능합니다.')) {
        if (userManager.getUserType() === 1) {
          survey.deletes([Number(props.resultNo)]).then((r) => {
            if (r.data.Status === 1 && r.data.Data) {
              router.back();
            } else {
              alert('잠시후 다시 시도해 주세요.');
            }
          });
        }else {
          survey.deleteForGuest(key).then((r)=>{
            if (r.data.Status === 1 && r.data.Data) {
              router.push('/intro');
            }else{
              alert('잠시후 다시 시도해 주세요.');
            }
          })
        }
      }
    }

    function handleEdit() {
      if (userManager.getUserType() === 1) {
        router.push({path: "/SaveData", query: {ResultNo: props.resultNo}});
      } else {
        router.push(`/SaveData?key=${encodeURIComponent(key)}`);
      }
    }

    function showView() {
      const user_type = userManager.getUserType();
      if (user_type === 1) {
        router.push(`/Result/AtomyProduct/${props.resultNo}`)
      } else if (user_type === 2) {
        router.push(`/Guest/AtomyProduct?key=${encodeURIComponent(key)}`);
      } else {
        router.push(`/Share/AtomyProduct?key=${encodeURIComponent(key)}`);
      }
    }

    function goShop(){
      window.open('http://m.atomy.com/kr/m', '_blank');
    }

    return {
      snsShare,
      item,
      handleDelect,
      handleEdit,
      reactResultFormatted,
      showView,
      goShop,
    };
  },
};
</script>

<style lang="scss">
.table {
  border-top: 2px solid #333;

  th,
  td {
    padding: 15px;
    border-bottom: 1px solid #ddd;
    font-size: 14px;
  }

  td {
    border-left: 1px solid #ddd;
    text-align: right;
  }
}

.shared-area {
  margin-top: 50px;
  font-size: 13px;
  color: #666;

  b {
    font-size: 18px;
    color: #333;
    display: block;
    margin-bottom: 5px;
  }

  .btn {
    margin-top: 10px;
    background: $mainColor;
    border-color: $mainColor;
    height: 48px;
  }
}
</style>
