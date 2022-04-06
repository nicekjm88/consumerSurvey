<template>
  <div class="modal-dimmed" @click="hideModal">    
        <div class="icon">🎉</div>
        <p>
          축하드립니다.<br>
          <br>
          내 하위 양쪽 그룹에서<br>
          각각 30만PV 이상 누적되었다면<br>
          캐시백이 지급됩니다!<br>
          <br>
          캐쉬백 받기 버튼을 눌러보세요!
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