<template>
<div>
  <nav v-if="$route.name === 'intro'" class="navigation intro">
    <router-link to="/Terms">
    <button type="button">
      <i class="xi-help"></i>
      <span class="a11y">앱정보</span>
    </button>
    </router-link>
    <div>
      <button type="button" @click="logout">
        <i class="xi-log-out"></i>
        <span class="a11y">로그아웃</span>
      </button>
      <router-link v-if="userType === 1" to="/SaveDataList">
      <button type="button">
        <i class="xi-list-square"></i>
        <span class="a11y">저장 리스트</span>
      </button>
    </router-link>
    </div>
  </nav>

  <nav v-else-if="$route.name === 'SaveDataList'" class="navigation icon-alone">
    <router-link to="/intro">
      <button v-if="$route.name !== 'SaveDataView'" type="button">
        <i class="xi-home"></i>
        <span class="a11y">홈으로</span>
      </button>
    </router-link>
  </nav>

  <nav v-else-if="$route.name === 'SaveDataView' || $route.name === 'GuestView' || $route.name === 'ShareView'" class="navigation">

    <button type="button" @click="historyBack" v-if="userType === 1">
      <i class="xi-angle-left"></i>
      <span class="a11y">뒤로</span>
    </button>

    <div v-if="userType !== 3" :style="userType === 2 ? { marginLeft:'auto' } : {}">
      <button type="button" @click="$emit('buttonEditClick', $event)">
        <img :src="require('@/assets/image/i-modify.svg')" />
        <span class="a11y">수정하기</span>
      </button>

      <button type="button" @click="$emit('buttonDeleteClick', $event)">
        <img :src="require('@/assets/image/i-delete.svg')" />
        <span class="a11y">삭제</span>
      </button>
    </div>
  </nav>

  <nav v-else class="navigation">
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
import useUserManager from "@/store/user-manager";
import router from "@/router";

export default {
  name: 'Navigation',
  methods : {
    historyBack() {
      return history.back();
    }
  },

  setup(){
    const userManager = useUserManager()
    const userType = userManager.getUserType();

    console.log('userType', userType);

    function logout(){
      userManager.logout().then(() => {
        router.push('/login')
      });
    }

    return {
      userType,
      logout,
    }
  }
}
</script>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  & button {
    background: transparent;
    color: #414141;
    font-size: 26px;
    width: 40px;
    height: 40px;
    padding: 0;
    margin: 0;
  }

  &.intro button {
    font-size: 30px;
  }

  &.icon-alone {
    flex-direction: row-reverse;
  }
}

.bg-sky nav button {
  color: #fff;
}
</style>
