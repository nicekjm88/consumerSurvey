import { createStore } from 'vuex';
import Qna from './assets/qna.js';

const store = createStore({
  state() {
    return {
      qnaData: Qna,
      familyNumber: ['1인 가구', '2명', '3명', '4명', '5명 이상'],
      selectedItem: '1인 가구',
      livingProduct: ['칫솔', '치약', '세탁용', '비누', '샴푸류', '바디 워시류'],
      food: ['생수', '쌀, 즉석밥', '김치', '음료', '라면, 컵라면'],
      selectedLivingItem: [],
      selectedfoodItem: [],
      SubcontractorCount: 0,
      saveData: [],
      nowDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
      testerSaveData: {},
    }
  },
  mutations: {
    getSum() {
      console.log('합산');
    },
    increase(state, payload) {
      state.SubcontractorCount += payload;
    },
    decrease(state, payload) {
      state.SubcontractorCount === 0
        ? 0
        : state.SubcontractorCount -= payload;
    },
    getDate(state) {
      state.testerSaveData.date = state.nowDate;
    },
    getName(state, payload) {
      state.testerSaveData.name = payload;
    }
  },
  actions: {
    add(context) {
      context.commit('increase', 1);
    },
    minus(context) {
      context.commit('decrease', 1);
    },
    setDate(context) {
      context.commit('getDate');
    },
    setName(context, payload) {
      context.commit('getName', payload);
    }
  }
})

export default store;