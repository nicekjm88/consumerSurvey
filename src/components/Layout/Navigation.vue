<template>
<div>
  <nav v-if="$route.name === 'intro'" class="intro">
    <router-link to="/Terms">
    <button type="button">
      <i class="xi-help"></i>
      <span class="a11y">앱정보</span>
    </button>
    </router-link>
    <router-link to="/SaveDataList">
    <button type="button">
      <i class="xi-list-square"></i>
      <span class="a11y">저장 리스트</span>
    </button>    
    </router-link>
  </nav>

  <nav v-else-if="$route.name === 'SaveDataList'" class="icon-alone">
    <router-link to="/intro">    
      <button v-if="$route.name !== 'SaveDataView'" type="button">
        <i class="xi-home"></i>
        <span class="a11y">홈으로</span>
      </button>
    </router-link>
  </nav>

  <nav v-else>
    <button type="button" @click="historyBack">
      <i class="xi-angle-left"></i>
      <span class="a11y">뒤로</span>
    </button>

    <router-link to="/intro">    
      <button v-if="$route.name !== 'SaveDataView'" type="button">
        <i class="xi-close"></i>
        <span class="a11y">닫기</span>
      </button>
    </router-link>
  </nav>


</div>
</template>

<script>
export default {
  name: 'Navigation',
  methods : {
    historyBack() {
      return history.back();
    }
  },
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
nav button {
  background: transparent;
  color: #414141;
  font-size: 26px;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
}
nav.intro button {
  font-size: 30px;  
}
nav.icon-alone {
  flex-direction: row-reverse;
}
.bg-sky nav button {
  color: #fff;
}
</style>