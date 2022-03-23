<template>
  <div class="modal-dimmed" @click="hideModal">    
        <div class="icon">🎉</div>
        <p>
          아주 잘하셨습니다.<br>
          그럼 내 하위 그룹 좌측과<br>
          우측 모두 30만 PV를<br>
          맞췄다면 얼만큼의 수당이<br>
          발생되는지 보겠습니다.<br>
          <br>
          수당 받기 버튼을 눌러보세요!
        </p>        
      </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    scrollToElement() {
      const el = document.querySelector('.scrolltop-position');
      
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    },
    hideModal(e) {
      const modal = document.querySelector('.modal-dimmed');
      if ( e.target === modal ) e.target.setAttribute('style','display: none');

      this.scrollToElement();
    },
  },

}
</script>

<style lang="scss">
// Animation
@keyframes arrow-movement {
  0% { 
      opacity: 0;
      top: 45%;
  }
  70% {
      opacity: 1;
  }
  100% { 
      opacity: 0;
  }
} 

.modal-dimmed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .6);
  color: #fff;
  display: flex;
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
}
</style>