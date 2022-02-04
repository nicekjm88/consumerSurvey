<template>
  <div class="wrap">
  <Navigation />
  <main>
    <section>
      <article>
      <strong>애터미 제품</strong>
      <table class="table text-center">
        <caption>애터미 제품 - 카테고리, 이름, 금액 / PV에 관한 정보</caption>
        <colgroup>
          <col style="width: 30%;">
          <col>
          <col style="width: 30%;">
        </colgroup>
        <thead>
          <tr>
            <th scope="col">카테고리</th>
            <th scope="col">이름</th>
            <th scope="col">금액 / PV</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, i) in atomyProducts" :key="i">
            <td>{{ product.category }}</td>
            <td>{{ product.name }}</td>
            <td>
              <div class="price">{{ product.price }}원</div>
              <div class="point-value">{{ product.pointValue }} PV</div>
            </td>
          </tr>
        </tbody>
      </table>
      </article>
    </section>
  </main>
  </div>
</template>

<script>
import Navigation from '@/components/Layout/Navigation.vue'
export default {
  name: 'Terms',
  data () {
    return {
      //제품별 1:1 매칭이 필요함 
      // ex) 생활용품 > 칫솔 선택 시 애터미의 제품은 4개 이상 이 중에서 1:1로 매칭을 지어 줘야 함. 
      // 칫솔을 선택하면 애터미 칫솔*1set(8ea)로 1:1 매칭해야 작업이 가능 함.
      atomyProducts: [
        {
          category: "생활용품",
          name: "애터미 칫솔*1set(8ea)",
          price: 7920,
          pointValue: 3900
        },
        {
          category: "생활용품",
          name: "애터미 치약 플러스 200g*1set(5ea)",
          price: 15000,
          pointValue: 2500
        },
        {
          category: "생활용품",
          name: "애터미 동구밭 클렌징바",
          price: 12800,
          pointValue: 5000
        }
      ]
    }
  },
  components: {
    Navigation
  }
}
</script>

<style scoped>
section article {
  margin: 0 20px;
}
strong {
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.94;
  letter-spacing: 1.8px;
  color: #000;
  display: block;
  margin-bottom: 20px;
}
p {
  margin-top: 22px;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: 1.3px;
  color: #000;
}
.table td {
  vertical-align: middle;
}
.table.text-center {
  text-align: center
}
</style>