<template>
  <div class="wrap bg-gray">
    <Navigation />
    <main class="qestion-area">
      <section>
        <ProgressBar :pv="pv" :progressStatus="progressStatus" :class="{ 'is-show': !hideProgressBar }" />
        <p class="notify" id="qestion">
          <strong>현재 쇼핑몰(온/오프라인)에서<br>구입하는 제품들을 선택해주세요.</strong>
        </p>
        <div id="answer">
          <div class="answer-item" v-for="(item, pidx) in items" :key="pidx">
            <strong class="answer-item__title">{{ item.Name }}</strong>
            <div class="btn-cancel">
              <button @click="selectAll(pidx)">
                전체선택
              </button>
              <button @click="selectCancel(pidx)">
                선택취소
              </button>
            </div>

            <div class="rounded-box">
              <ul class="select-list type2">
                <li v-for="(product, idx) in item.ch" :key="idx">
                  <div class="form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        v-model="product.checked"
                        @change="productToggle(product)"
                        :id="`products_${pidx}_${idx}`"
                    />
                    <label
                      @click.once="showProgress"
                      class="form-check-label"
                      :for="`products_${pidx}_${idx}`"
                      >{{ product.Name }}</label
                    >
                  </div>
                </li>
              </ul>


            </div>
          </div>
        </div>
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
<!--    <router-link to="/result">-->
      <FixedBtn @click="onSubmit" msg="작성완료" />
<!--    </router-link>-->
  </div>
</template>

<script>
import { computed, onBeforeMount, ref } from "vue";
import Navigation from "@/components/Layout/Navigation.vue";
import FixedBtn from "@/components/Layout/FixedBtn.vue";
import ProgressBar from "@/components/Layout/ProgressBar.vue";
import useProductsManager from "@/store/products-manager";
import router from "@/router";
import { getCurrentInstance } from 'vue'

export default {
  name: "QuestionPage2",
  data() {
    return {
      lastScrollPosition: 0,
      scrollValue: 0,
      progressStatus: 0,
      pv: 0,
      hideProgressBar: true,
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
      const progressCount = document.querySelector('.progress-bar__count');

      this.progressStatus >= 48
        ? progressCount.style.color = '#fff'
        : progressCount.style.color = '#333'

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
      const OFFSET = 100;

      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.hideProgressBar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    hideModal() {
      const modal = this.$refs.modal;

      window.addEventListener("click", (e) => {
        e.target === modal ? modal.classList.remove("isActive") : false;
      });
    },
    showProgress() {
      this.hideProgressBar = false
    }
  },
  components: {
    FixedBtn,
    Navigation,
    ProgressBar,
  },
  setup() {
    const productsManager = useProductsManager();
    const that = getCurrentInstance()
    const sumPV = ref(0);

    onBeforeMount(() => {
      // productsManager.fetch();
      if (!productsManager.hasValue()) {
        router.push('/intro');
      }
    });

    function onSubmit(){
      if(productsManager.isDone()) {
        router.push('/result');
      }else{
        alert('문항을 선택해 주세요.');
      }
    }

    function selectCancel(pidx) {
      productsManager.clearChecked(pidx);
      const sp = productsManager.getSelected();
      if(sp && sp.PVPerYear !== undefined) {
        sumPV.value = sp.PVPerYear;
        updateProgress();
      }
    }

    function selectAll(pidx){
      productsManager.selectAll(pidx);

      const sp = productsManager.getSelected();
      if(sp && sp.PVPerYear !== undefined) {
        sumPV.value = sp.PVPerYear;
        updateProgress();
      }
    }

    function updateProgress(){
      const val = Math.floor(sumPV.value / 3000);
      that.data.progressStatus = val > 100 ? 100 : val;
      that.data.pv = sumPV.value;
    }

    function productToggle(product) {
      const val = product.StdCount * product.PV
      if(val) {
        sumPV.value += (product.checked ? 1 : -1) * val;
        updateProgress();
      }
    }

    const items = computed(() => productsManager.get());

    return {
      items,
      selectCancel,
      productToggle,
      onSubmit,
      selectAll,
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

    & button{
      background-color: transparent;
      color: #666;
    }
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

#qestion {
  text-align: left;
}

</style>
