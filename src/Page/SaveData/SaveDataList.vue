<template>
  <div class="wrap">
    <Navigation />
    <main class="input-area">
      <section>
        <h1 class="title">자료리스트</h1>
        <div class="input-group search-area">
          <div class="form-outline">
            <input type="search" id="form1" v-model="page.Name" class="search-area__input form-control" />
            <label class="form-label a11y" for="form1">Search</label>
          </div>
          <button type="button" class="btn search-area__btn" @click="handleSearch">
            <i class="xi-search"></i>
          </button>
        </div>

        <div class="edit-group clearfix">
          <div class="pull-left">
            <button @click="listEdit">
              <i class="xi-pen"></i> 편집
            </button>
          </div>
          <div class="pull-right">

            <button v-if="isEdit" @click="selectAll">
              <i class="xi-check-square-o"></i> {{ isUnselectAll ? '전체해제' : '전체선택' }}
            </button>
            <button v-if="isEdit" @click="deleteList">
              <i class="xi-minus-square-o"></i> 선택삭제
            </button>
          </div>
        </div>

        <ul class="board-list">
          <li v-for="(item, idx) in items" :key="idx">
            <div class="form-check" v-if="isEdit">
              <input class="form-check-input" v-model="selected" :value="item.ResultNo" type="checkbox" :id="`bind_${idx}`" />
              <label class="form-check-label" :for="`bind_${idx}`">
                <strong>{{item.Name}}</strong>
              </label>
            </div>

            <strong v-else>
              <router-link :to="{ name:'SaveDataView', params: { resultNo: item.ResultNo }}">{{item.Name}}</router-link>
            </strong>
            <div>
              <span class="date">{{ formatDate(item.CreateAt) }}</span>
              <router-link class="more" :to="{ name:'SaveDataView', params: { resultNo: item.ResultNo }}">더보기</router-link>
            </div>
          </li>
        </ul>
        <button v-show="!isFullResults" class="btn-more" type="button" @click="nextResults"> <i class="xi-angle-down"></i> 더보기 ({{items.length}}/{{reactResultsCount.Cnt}})</button>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue';
import {computed, onBeforeMount, reactive, ref} from "vue";
import useSurvey from "@/composables/api/survey";
import useAppManager from "@/store/app-manager";
import useFormatter from "@/composables/api/utils/formatter";

export default {
  name: 'SaveDataList',
  components: {
    Navigation,
  },
  setup() {
    const survey = useSurvey();
    const appManager = useAppManager();
    const formatter = useFormatter();

    const isEdit = ref(false)
    const reactResults = reactive({Results: []});
    const page = reactive({ PageSize: 10, ResultNo: 0, Name:''});
    const reactResultsCount = reactive({Cnt: 0, ResultNo: 0});
    const selected = ref([]);

    onBeforeMount(() => {
      appManager.setHttpBusyForce(true)
          .then(() => searchResults())
          .finally(() => appManager.setHttpBusyForce(false));
    });

    async function searchResults() {
      return survey.getResultsCount(page.Name)
          .then((r) => {
            if (r.data.Status === 1 && r.data.Data) {
              reactResultsCount.Cnt = Number(r.data.Data.Cnt);
              page.ResultNo = reactResultsCount.ResultNo = Number(r.data.Data.ResultNo) + 1;
              return survey.getResultsV2(page.PageSize, page.ResultNo, page.Name);
            }
          })
          .then((r) => {
            if (r.data.Status === 1 && r.data.Data && r.data.Data.length > 0) {
              reactResults.Results.length = 0;
              reactResults.Results.push(...r.data.Data);
              page.ResultNo = r.data.Data[r.data.Data.length - 1].ResultNo;
            }
          });
    }

    function listEdit(value = undefined) {
      if(value === true || value === false){
        isEdit.value = value;
      }else {
        isEdit.value = !isEdit.value;
      }

      if (!isEdit.value) {
        selected.value.length = 0;
      }
    }

    function nextResults(){
      appManager.setIgnore(true).then(()=> {
        return survey.getResultsV2(page.PageSize, page.ResultNo, page.Name).then((r) => {
          if(r.data.Status === 1 && r.data.Data && r.data.Data.length > 0) {
            reactResults.Results.push(...r.data.Data);
            page.ResultNo = r.data.Data[r.data.Data.length - 1].ResultNo;
          }
        })
      }).finally(() => appManager.setIgnore(false));
    }

    const items = computed(() => reactResults.Results);
    const isUnselectAll = computed(() => selected.value.length === reactResults.Results.length);
    const isFullResults = computed(() => reactResults.Results.length === reactResultsCount.Cnt);

    function selectAll(){
      if(isUnselectAll.value){
        selected.value.length = 0;
      }else {
        const sel = reactResults.Results.reduce((a, c) => {
          a.push(c.ResultNo)
          return a;
        }, [])

        selected.value.length = 0;
        selected.value.push(...sel);
      }
    }

    function deleteList() {
      if(confirm('해당 정보(들)를 삭제하시겠습니까?\n만약 삭제하신다면 복구가 불가능합니다.')){
        survey.deletes(selected.value).then((r) => {
          if(r.data.Status === 1){
            const tmp = reactResults.Results.filter(x => !selected.value.includes(x.ResultNo));
            reactResults.Results.length = 0;
            reactResults.Results.push(...tmp);
            page.ResultNo = tmp[tmp.length - 1].ResultNo;
          }
        });
      }
    }

    function handleSearch(){
      searchResults();
    }

    function formatDate(date){
      if( date.length === 8) {
        const yyyy = date.substr(0, 4);

        if(new Date().getFullYear() === Number(yyyy)){
          return formatter.toDate(date, ['월 ','일'], {removeYear:true});
        } else {
          return formatter.toDate(date, ['년 ','월 ','일']);
        }
      }
    }

    return {
      isEdit,
      listEdit,
      deleteList,
      nextResults,
      handleSearch,
      selectAll,
      selected,
      items,
      page,
      isUnselectAll,
      isFullResults,
      reactResultsCount,
      formatDate,
    }
  }
}
</script>

<style lang="scss" scoped>
.board-list {
  margin: 0 -20px;
  border-top: 1px solid #ddd;

  & > li {
    border-bottom: 1px solid #ddd;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    .date {
      font-size: 14px;
      margin-right: 10px;
    }

    .more {
      color: #d2d2d2;
      font-size: 14px;
    }
  }
}

.btn-more {
  margin: 0 -20px;
  padding: 10px;
  color: #333;
  width: calc(100% + 40px);
}

.input-area {
  .form-check {
    margin-bottom: 0;
  }
  .input-group {
    margin-bottom: 10px;
  }
  .form-outline {
    width: calc(100% - 45px);
  }
  .pull-left,
  .pull-right {
    margin: 0;
  }
}

.edit-group {
  padding-bottom: 10px;
  margin: 0 -10px;

  button {
    background-color: transparent;
    // font-weight: 700;
    font-size: 14px;
    color: #333;

    i {
      display: inline-block;
      vertical-align: middle;
    }
  }
}

.search-area {
  &__input {
    background-color: #f6f6f6;
    border-color: #f6f6f6;

    &:focus {
      background-color: #f6f6f6;
      border-color: #f6f6f6;
      color: #212529;
      outline: 0;
      box-shadow: none;
    }
  }

  &__btn {
    color: #999;
    background-color: #f6f6f6;
    border-color: #f6f6f6;

    &:focus {
      color: #999;
      outline: 0;
      box-shadow: none;
    }
  }
}
</style>
