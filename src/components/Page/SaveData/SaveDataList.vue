<template>
  <div class="wrap">
    <Navigation />
    <main>
      <section>
        <h1 class="title">작성자료</h1>
        <div class="input-group">
          <div class="form-outline">
            <input type="search" id="form1" class="form-control" placeholder="검색해주세요" />
            <label class="form-label a11y" for="form1">Search</label>
          </div>
          <button type="button" class="btn btn-primary">
            <i class="xi-search"></i>
          </button>
        </div>

        <div class="edit-group clearfix">
          <div class="pull-left">
            <button @click="listEdit">편집</button>
          </div>
          <div class="pull-right">
            <button v-if="isEdit">전체선택</button>
            <button v-if="isEdit" @click="deleteList">삭제</button>
          </div>
        </div>

        <ul class="board-list">
          <li>
            <div class="form-check" v-if="isEdit">
              <input class="form-check-input" type="checkbox" id="bind1" />
              <label class="form-check-label" for="bind1">
                <strong>{{ $store.state.testerSaveData.name }}</strong>
              </label>
            </div>
            <strong v-else>{{ $store.state.testerSaveData.name }}</strong>
            <router-link to="/SaveDataView">더보기</router-link>
          </li>
        </ul> 
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue';

export default {
  name: 'SaveDataList',
  data() {
    return {
      isEdit: false
    }
  },
  methods: {
    listEdit() {
      this.isEdit = !this.isEdit;
    },
    deleteList() {
      confirm('삭제하시겠습니까?');
    }
  },
  components: {
    Navigation,
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
.board-list {
  margin: 0 -20px;
}
.board-list > li {
  border-bottom: 1px solid #ddd;
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.board-list > li > a {
  color: #d2d2d2;
  font-size: 14px;
}
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
.edit-group button {
  background-color: transparent;
}
</style>