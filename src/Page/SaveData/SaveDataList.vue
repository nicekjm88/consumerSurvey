<template>
  <div class="wrap">
    <Navigation />
    <main class="input-area">
      <section>
        <h1 class="title">자료리스트</h1>
        <div class="input-group search-area">
          <div class="form-outline">
            <input type="search" id="form1" class="search-area__input form-control" />
            <label class="form-label a11y" for="form1">Search</label>
          </div>
          <button type="button" class="btn search-area__btn">
            <i class="xi-search"></i>
          </button>
        </div>

        <div class="edit-group clearfix">
          <div class="pull-left">
            <button @click="listEdit">편집</button>
          </div>
          <div class="pull-right">
            <button v-if="isEdit">전체선택</button>
            <button v-if="isEdit" @click="deleteList">선택삭제</button>
          </div>
        </div>

        <ul class="board-list">
          <li>
            <div class="form-check" v-if="isEdit">
              <input class="form-check-input" type="checkbox" id="bind1" />
              <label class="form-check-label" for="bind1">
                <strong>{{ $store.state.userInfo.name }}</strong>
              </label>
            </div>
            
            <strong v-else>
              <router-link to="/SaveDataView">{{ $store.state.userInfo.name }}</router-link>
            </strong>
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
      confirm('해당 정보(들)을 삭제하시겠습니까?\n삭제하시면 저장된 리스트가 삭제되며\n복구가 불가능합니다.');
    }
  },
  components: {
    Navigation,
  }
}
</script>

<style lang="scss">
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
