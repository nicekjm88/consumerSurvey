<template>
  <div class="wrap">
    <Navigation />
    <main>
      <section>
        <h1 class="title">작성자료</h1>
        <hr />
        <!-- <input type="text" class="form-control" placeholder="검색해주세요" />
        <button>검색</button> -->
        <ul class="board-list">
          <li>
            <strong>김터미</strong>
            <router-link to="/SaveDataView">더보기</router-link>
          </li>
          <li>
            <strong>이터미</strong>
            <a href="#">더보기</a>
          </li>
        </ul> 
      </section>

      <p>testerSaveData : {{ $store.state.testerSaveData }}</p>
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue';

export default {
  name: 'SaveDataList',
  data() {
    return {
      
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
</style>