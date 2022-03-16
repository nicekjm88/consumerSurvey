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
            <button @click="listEdit">편집</button>
          </div>
          <div class="pull-right">
            <button v-if="isEdit" @click="selectAll">전체선택</button>
            <button v-if="isEdit" @click="deleteList">선택삭제</button>
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
              <router-link :to="{ name:'SaveDataView', params: { ResultNo: item.ResultNo }}">{{item.Name}}</router-link>
            </strong>

            <router-link :to="{ name:'SaveDataView', params: { ResultNo: item.ResultNo }}">더보기</router-link>
          </li>
        </ul>
        <button class="btn-more" type="button" @click="nextResults"> <i class="xi-angle-down"></i> 더보기</button>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue';
import {computed, onBeforeMount, reactive, ref} from "vue";
import useSurvey from "@/composables/api/survey";

export default {
  name: 'SaveDataList',
  components: {
    Navigation,
  },
  setup() {
    const survey = useSurvey();

    const isEdit = ref(false)
    const reactResults = reactive({Results: []});
    const page = reactive({ PageSize: 10, PageNo: 1, Name:''});
    const selected = ref([]);

    onBeforeMount(() => {
      console.log('SaveDataList onBeforeMount');
      survey.getResults(page.PageSize, page.PageNo, page.Name).then((r) => {
        if(r.data.Status === 1 && r.data.Data) {
          reactResults.Results.push(...r.data.Data);
        }
      });
    });

    const items = computed(() => reactResults.Results);

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
      console.log('next');
      survey.getResults(page.PageSize, page.PageNo + 1, page.Name).then((r) => {
        if(r.data.Status === 1 && r.data.Data.length > 0) {
          reactResults.Results.push(...r.data.Data);
          page.PageNo++;
        }
      });
    }

    function selectAll(){
      const sel = reactResults.Results.reduce((a, c) => {
        a.push(c.ResultNo)
        return a;
      }, [])

      selected.value.length = 0;
      selected.value.push(...sel);
    }

    function deleteList() {
      console.log(selected);
      if(confirm('해당 정보(들)을 삭제하시겠습니까?\n삭제하시면 저장된 리스트가 삭제되며\n복구가 불가능합니다.')){
        survey.deletes(selected.value).then((r) => {
          if(r.data.Status === 1){
            const tmp = reactResults.Results.filter(x => !selected.value.includes(x.ResultNo));
            reactResults.Results.length = 0;
            reactResults.Results.push(...tmp);
          }
        });
      }
    }

    function handleSearch(){
      console.log('search');
      survey.getResults(page.PageSize, 1, page.Name).then((r) => {
        if(r.data.Status === 1) {
          listEdit(false);
          reactResults.Results.length = 0;
          reactResults.Results.push(...r.data.Data);
          page.PageNo = 1;
        }
      });
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

    & > a {
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
  width: calc(100% - 42px);
  }
  .pull-left,
  .pull-right {
    margin: 0;
  }
}

.edit-group {
  padding-bottom: 10px;

  button {
    background-color: transparent;
    font-weight: 700;
    color: #333;
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
