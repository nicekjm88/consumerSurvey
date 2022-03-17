<template>
  <div class="wrap bg-gray">
    <Navigation />
    <main class="qestion-area">
      <section>
        <ProgressBar :progressStatus="progressStatus" :class="{ 'is-show': !showProgressBar }" />
        <p class="notify" id="qestion">
          <strong
            >현재 마트, 온라인 쇼핑몰에서<br />자주 사용하는 생활용품을<br />선택해주세요.</strong
          >
          <span><em>(매월 기준)</em></span>
        </p>
        <div id="answer">
          <div class="answer-item" v-for="(item, pidx) in items" :key="pidx">
            <strong class="answer-item__title">{{ item.Name }}</strong>
            <button class="btn-cancel" @click="selectCancel(pidx)">
              선택취소
            </button>
            <div class="rounded-box">
              <div
                class="form-check"
                v-for="(product, idx) in item.ch"
                :key="idx"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  :checked="product.checked"
                  @change="productToggle(pidx, idx)"
                  :id="`products_${pidx}_${idx}`"
                />
                <label
                  class="form-check-label"
                  :for="`products_${pidx}_${idx}`"
                  >{{ product.Name }}</label
                >
              </div>
            </div>
          </div>
        </div>

      <button type="button" @click="onClick" hidden>테스트버튼</button>
      </section>


      <div
        ref="modal"
        class="modal-dimmed page-step2"
        :class="{ isActive: isAddClass }"
        v-if="this.isModal == true"
      >    
        <div class="icon">🎉</div>
        <p>
          축하합니다!!<br>
          30만 PV를 달성하셨습니다.<br>
          이제 수당을 받을 자격을<br>갖추게 되셨습니다.
        </p>        
      </div>

    </main>
    <router-link to="/result">
      <FixedBtn msg="작성완료" />
    </router-link>
  </div>
</template>

<script>
import { computed, onBeforeMount } from "vue";
import Navigation from "@/components/Layout/Navigation.vue";
import FixedBtn from "@/components/Layout/FixedBtn.vue";
import ProgressBar from "@/components/Layout/ProgressBar.vue";
import useProductsManager from "@/store/products-manager";

export default {
  name: "QuestionPage2",
  data() {
    return {
      showProgressBar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      progressStatus: 0,
      isFinished: false,
      isModal: false,
      isAddClass: false,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  },
  watch: {
    progressStatus () {
      if ( this.progressStatus >= 100 ) {
        this.isModal = true;
        this.addClass();
      }
    }
  },
  methods: {
    addClass() {
      setTimeout(() => {
        this.isAddClass = true;
        this.hideModal();
      }, 0.3);
    },
    onScroll() {
      const OFFSET = 150;

      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showProgressBar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    onClick() {
      this.progressStatus = 100;
    },
    hideModal() {
      const modal = this.$refs.modal;

      window.addEventListener("click", (e) => {
        console.log(e.target);
        e.target === modal ? modal.classList.remove("isActive") : false;
      });
    },
  },
  components: {
    FixedBtn,
    Navigation,
    ProgressBar,
  },
  setup() {
    const productsManager = useProductsManager();

    onBeforeMount(() => {
      productsManager.fetch();
    });

    function selectCancel(pidx) {
      productsManager.clearChecked(pidx);
    }

    function productToggle(pidx, idx) {
      productsManager.toggle(pidx, idx);
    }

    const items = computed(() => productsManager.get());

    return {
      items,
      selectCancel,
      productToggle,
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-gray {
  background: #f5f5f5;
}

.form-check + .form-check {
  margin-top: 20px;
}

.answer-item {
  position: relative;

  &__title {
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .btn-cancel {
    position: absolute;
    top: 5px;
    right: 0;
    background-color: transparent;
    color: #666;
    font-size: 12px;
  }
}
.progress-bar {
  background-color: $mainColor;
}

.modal-dimmed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .6);
  color: #fff;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 99;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  flex-direction: column;

  .icon {
    font-size: 120px;
    margin-bottom: 10px;
  }

  &.isActive {
    display: flex;
  }
}

</style>
