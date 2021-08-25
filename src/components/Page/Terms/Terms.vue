<template>
  <main class="layout-overlap start">
    <section>
      <h1>개인정보<br>수집 동의서</h1>
      <ol>
        <li>개인 정보 수집 동의서
          <ul>
            <li>귀하의 정보를 수집하는 것을 동의하십니까?<br>사용 목적은 000에 필요한 자료와 000를 위한 추후 제공되는 서비스에 반영될 것입니다.</li>
          </ul>
        </li>
        <li>
          개인 정보 보관
          <ul>
            <li>개인 정보 보관 유효기간은 최대 5년 이상입니다.</li>
            <li>피해를 입을 시, 회사에서 책임을 집니다.</li>
            <li>보관 시, 필요한 경우 회원들에게 공지 & 별도의 방법으로 알려드립니다.</li>
          </ul>
        </li>
        <li>
          기타 사항
          <ul>
            <li>회원들에게 제공되는 서비스는 일체 다른 방법으로 사용되지 않으며, 사실과 다른 정보를 입력 시, 추후 제제가 들어갈 수 있으니 유의해주시길 바라며, 자세한 문의사항은 000-0000 문의해 주시길 바랍니다.</li>
          </ul>
        </li>
        <li>개인 정보 수집 동의서
          <ul>
            <li>귀하의 정보를 수집하는 것을 동의하십니까?<br>사용 목적은 000에 필요한 자료와 000를 위한 추후 제공되는 서비스에 반영될 것입니다.</li>
          </ul>
        </li>
        <li>
          개인 정보 보관
          <ul>
            <li>개인 정보 보관 유효기간은 최대 5년 이상입니다.</li>
            <li>피해를 입을 시, 회사에서 책임을 집니다.</li>
            <li>보관 시, 필요한 경우 회원들에게 공지 & 별도의 방법으로 알려드립니다.</li>
          </ul>
        </li>
        <li>
          기타 사항
          <ul>
            <li>회원들에게 제공되는 서비스는 일체 다른 방법으로 사용되지 않으며, 사실과 다른 정보를 입력 시, 추후 제제가 들어갈 수 있으니 유의해주시길 바라며, 자세한 문의사항은 000-0000 문의해 주시길 바랍니다.</li>
          </ul>
        </li>
        <li>개인 정보 수집 동의서
          <ul>
            <li>귀하의 정보를 수집하는 것을 동의하십니까?<br>사용 목적은 000에 필요한 자료와 000를 위한 추후 제공되는 서비스에 반영될 것입니다.</li>
          </ul>
        </li>
        <li>
          개인 정보 보관
          <ul>
            <li>개인 정보 보관 유효기간은 최대 5년 이상입니다.</li>
            <li>피해를 입을 시, 회사에서 책임을 집니다.</li>
            <li>보관 시, 필요한 경우 회원들에게 공지 & 별도의 방법으로 알려드립니다.</li>
          </ul>
        </li>
        <li>
          기타 사항
          <ul>
            <li>회원들에게 제공되는 서비스는 일체 다른 방법으로 사용되지 않으며, 사실과 다른 정보를 입력 시, 추후 제제가 들어갈 수 있으니 유의해주시길 바라며, 자세한 문의사항은 000-0000 문의해 주시길 바랍니다.</li>
          </ul>
        </li>
      </ol>
    </section>
  </main>
  <router-link to="/enterance">  
    <FixedBtn msg="확인" />
  </router-link>
</template>

<script>
import FixedBtn from '../../Layout/FixedBtn.vue'
export default {
  name: 'Terms',
  components: {
    FixedBtn
  },
  mounted() {
    var layoutOverlap = document.querySelector('.layout-overlap');
    setTimeout(function() {      
      layoutOverlap.classList.add('end');
    }, 100);
  }
}
</script>

<style scoped>
.start {
  margin-top: 0;
  transition: all 1s;
}

.end {
  margin-top: 54px;
}

.layout-overlap {
  position: relative;
  padding: 50px 20px;
  background-color: #fff;
  border-radius: 30px 30px 0 0;  
}
.layout-overlap::before {
  position: absolute;
  top: -54px;
  left: 0;
  width: 100%;
  height: 200px;
  content: '';
  background: rgba(0, 0, 0, .3);
  z-index: -1;
}
h1 {
  font-size: 25px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 2.5px;
  color: #000;
  margin-bottom: 25px;
}
ol,
ul {
  margin: 0;
  padding: 0;
}
ol {  
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: 1.3px;
  text-align: left;
  color: #000;
}
ol > li {
  counter-increment: section;
}
ol > li + li {
  margin-top: 20px;
}
ol > li::before {
  content: counter(section) ". ";
}
ol > li > ul > li {
  position: relative;
  padding-left: 10px;
}
ol > li > ul > li::before {
  content: '- ';
  position: absolute;
  top: 0;
  left: 0;
}
</style>