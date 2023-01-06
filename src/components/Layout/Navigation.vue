<template>
  <div>
    <!-- 인트로 화면 -->
    <nav v-if="$route.name === 'intro'" class="navigation intro">
      <button type="button" @click="logout">
        <img :src="require('@/assets/image/i-login.svg')" alt="" />
        <span>로그아웃</span>
      </button>

      <div>
        <button type="button">
          <router-link to="/Terms">
            <i class="xi-help"></i>
            <span class="a11y">애터미 큐레이팅이란?</span>
          </router-link>
        </button>

        <button v-if="userType === 1" type="button">
          <router-link to="/SaveDataList">
            <i class="xi-list-square"></i>
            <span class="a11y">저장 리스트</span>
          </router-link>
        </button>
      </div>
    </nav>

    <nav
      v-else-if="$route.name === 'SaveDataList'"
      class="navigation icon-alone"
    >
      <router-link to="/intro">
        <button v-if="$route.name !== 'SaveDataView'" type="button">
          <i class="xi-home"></i>
          <span class="a11y">홈으로</span>
        </button>
      </router-link>
    </nav>

    <nav
      v-else-if="
        $route.name === 'SaveDataView' ||
          $route.name === 'GuestView' ||
          $route.name === 'ShareView'
      "
      class="navigation"
    >
      <button type="button" @click="historyBack" v-if="userType === 1">
        <i class="xi-angle-left"></i>
        <span class="a11y">뒤로</span>
      </button>

      <div
        v-if="userType !== 3"
        :style="userType === 2 ? { marginLeft: 'auto' } : {}"
      >
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

    <nav
      v-else-if="
        $route.name === 'terms' ||
          $route.name === 'terms2' ||
          $route.name === 'AtomyProduct' ||
          $route.name === 'ResultAtomyProduct' ||
          $route.name === 'GuestAtomyProduct' ||
          $route.name === 'ShareAtomyProduct'
      "
      class="navigation icon-alone"
    >
      <button type="button" @click="historyBack">
        <i class="xi-close"></i>
        <span class="a11y">닫기</span>
      </button>
    </nav>

    <nav v-else class="navigation">
      <button type="button" @click="historyBack">
        <i class="xi-angle-left"></i>
        <span class="a11y">뒤로</span>
      </button>
      <button type="button" style="width: 10em; display: inherit; margin-left: -45px; font-size: 22px;">
        <i><strong>{{preQuestionName}}</strong></i>
      </button>
      <button v-if="$route.name !== 'SaveDataView'" type="button" @click="goHome">
        <i class="xi-home"></i>
        <span class="a11y">닫기</span>
      </button>
    </nav>
  </div>
</template>

<script>
import useUserManager from "@/store/user-manager";
import router from "@/router";
import { onBeforeMount, ref } from "vue";
import { SafeArea } from "capacitor-plugin-safe-area";

export default {
  name: "Navigation",
  props: {
    preQuestionName: {
      type:String,
      default: ""
    }
  },
  methods: {
    goHome() {
      if(confirm('홈으로 이동하시겠습니까?')) {
        router.push("/intro");
      }
    },
    historyBack() {
      return history.back();
    },
  },

  setup() {
    const userManager = useUserManager();
    const userType = userManager.getUserType();
    const mgt = ref("0px");
    const pgt = ref("0px");

    function logout() {

      if (confirm('로그아웃 하시겠습니까?')) {
        userManager.logout().then(() => {
          router.push("/login");
        });
      }


    }

    onBeforeMount(() => {
      //네이티브 Safe area 영역의 크기 가져오기
      //https://www.npmjs.com/package/capacitor-plugin-safe-area
      SafeArea.getSafeAreaInsets().then(({ insets }) => {
        mgt.value = -(insets.top + 10) + "px";
        pgt.value = insets.top + 10 + "px";
      });
    });
    return {
      userType,
      logout,
      mgt,
      pgt,
    };
  },
};
</script>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;

  margin-bottom: v-bind(mgt) !important;
  padding-top: v-bind(pgt) !important;

  padding-right: 10px;
  padding-left: 10px;

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
    position: relative;

    img {
      vertical-align: top;
      padding-top: 6px;
    }

    span {
      font-size: 12px;
      position: absolute;
      bottom: -5px;
      left: 50%;
      margin-left: -28px;
      width: 60px;
    }
  }

  &.icon-alone {
    flex-direction: row-reverse;
  }

  @media (min-width: 767px) {
    width: 768px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.bg-sky nav button {
  color: #fff;
}
</style>
