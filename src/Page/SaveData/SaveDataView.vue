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
            <col style="width: 40%;" />
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
              <td>{{ reactResultFormatted.AmountPerYear }}</td>
            </tr>
            <tr>
              <th scope="row">연 획득 총 PV</th>
              <td>{{ reactResultFormatted.PVPerYear }}</td>
            </tr>
            <tr>
              <th scope="row">예상 수당 지급 횟수(최소)</th>
              <td>약 {{ reactResultFormatted.PayBackCount }}</td>
            </tr>
            <tr>
              <th scope="row">선택상품</th>
              <td>{{ item.ProductNames }}</td>
            </tr>
          </tbody>
        </table>
        <FixedBtn
          @click="snsShare('나의 소비생활 알아보기', 'SaveDataView')"
          type="button"
          msg="공유하기"
        />
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from "@/components/Layout/Navigation.vue";
import FixedBtn from "@/components/Layout/FixedBtn.vue";
import { computed, onBeforeMount, reactive } from "vue";
import useSurvey from "@/composables/api/survey";
import router from "@/router";
import useFormatter from "@/composables/api/utils/formatter";

export default {
  name: "SaveDataList",
  components: {
    Navigation,
    FixedBtn,
  },
  props: {
    ResultNo: { required: true },
  },
  setup(props) {
    const survey = useSurvey();
    const formatter = useFormatter();

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

    onBeforeMount(() => {
      survey.getResult(props.ResultNo).then((r) => {
        if (r.data.Status === 1 && r.data.Data) {
          const v = (reactResult.Result = r.data.Data);
          reactResultFormatted.CreateAt = formatter.toDate(v.CreateAt);
          reactResultFormatted.BirthDay = formatter.toDate(v.BirthDay, [
            "년 ",
            "월 ",
            "일",
          ]);
          reactResultFormatted.Gender = formatter.toGender(v.Gender);
          reactResultFormatted.Age = v.Age + "대";
          reactResultFormatted.Families = v.Families + "인";
          reactResultFormatted.PayBackCount = v.PayBackCount + "회";
          reactResultFormatted.Phone = formatter.toPhone(v.Phone);
          reactResultFormatted.UseAtomyYn = formatter.toYn(v.UseAtomyYn);
          reactResultFormatted.AmountPerYear =
            formatter.toPrice(v.AmountPerYear) + " 원";
          reactResultFormatted.PVPerYear =
            formatter.toPrice(v.PVPerYear) + " PV";
        } else {
          alert("잠시후 다시 시도해 주세요.");
          router.back();
        }
      });
    });

    function snsShare(title, url) {
      if (navigator.share) {
        navigator.share({ title: title, url: url });
      } else {
        alert("지원하지 않는 브라우저입니다.");
      }
    }

    function handleDelect() {
      console.log("handleDelete");
      if (
        confirm(
          "해당 정보(들)을 삭제하시겠습니까?\n삭제하시면 저장된 리스트가 삭제되며\n복구가 불가능합니다."
        )
      ) {
        survey.deletes([Number(props.ResultNo)]).then((r) => {
          if (r.data.Status === 1 && r.data.Data) {
            router.back();
          } else {
            alert("잠시후 다시 시도해 주세요.");
          }
        });
      }
    }

    function handleEdit() {
      console.log("handleEdit");
      router.push({ path: "/SaveData", query: { ResultNo: props.ResultNo } });
    }

    return {
      snsShare,
      item,
      handleDelect,
      handleEdit,
      reactResultFormatted,
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
</style>
