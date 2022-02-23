import { createStore } from 'vuex';

import user from './modules/user'

const store = {
  namespaced: true,
  state: {
    qestions: [
      {
        'id': 0,
        'title': '연령대는 어떻게 되시나요?',
        'desc': '본인의 나이를 선택해주세요.',
        'list': ['20대', '30대', '40대', '50대', '60대 이상']
      },
      {
        'id': 1,
        'title': '가족 수는 몇 명인가요?',
        'desc': '본인을 포함하여 함께 생활하는 가족 수를 선택해주세요.',
        'list': ['1인 가구', '2명', '3명', '4명', '5명 이상']
      },
      {
        'id': 2,
        'title': '애터미 제품을 사용해 보셨나요?',
        'desc': '애터미 제품을 사용해보셨다면 선택해주세요.',
        'list': ['예', '아니오']
      }
    ],
    livingProduct: ['칫솔', '치약', '세탁용', '비누', '샴푸류', '바디 워시류'],
    food: ['생수', '쌀, 즉석밥', '김치', '음료', '라면, 컵라면'],
    selectedLivingItem: [],
    selectedfoodItem: [],
    SubcontractorCount: 0,
    nowDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    userInfo: {},
  },
  mutations: {
    increase(state, payload) {
      state.SubcontractorCount >= 100
          ? 100
          : state.SubcontractorCount += payload;
    },
    decrease(state, payload) {
      state.SubcontractorCount === 0
          ? 0
          : state.SubcontractorCount -= payload;
    },
    getAge(state, payload) {
      state.userInfo.age = payload;
    },
    getFamilyNumber(state, payload) {
      state.userInfo.familyNumber = payload;
    },
    getUseProduct(state, payload) {
      state.userInfo.UseProduct = payload;
    },
    getDate(state) {
      state.userInfo.date = state.nowDate;
    },
    getName(state, payload) {
      state.userInfo.name = payload;
    },
    getGender(state, payload) {
      state.userInfo.gender = payload;
    },
    getBirthDay(state, payload) {
      state.userInfo.birtDay = payload;
    },
    getTellNumber(state, payload) {
      state.userInfo.tellNumber = payload;
    }
  },
  actions: {
    add(context) {
      context.commit('increase', 1);
    },
    minus(context) {
      context.commit('decrease', 1);
    },
    setAge(context, payload) {
      context.commit('getAge', payload);
    },
    setFamilyNumber(context, payload) {
      context.commit('getFamilyNumber', payload);
    },
    setUseProduct(context, payload) {
      context.commit('getUseProduct', payload);
    },
    setDate(context) {
      context.commit('getDate');
    },
    setName(context, payload) {
      context.commit('getName', payload);
    },
    setGender(context, payload) {
      context.commit('getGender', payload);
    },
    setBirthDay(context, payload) {
      context.commit('getBirthDay', payload);
    },
    setTellNumber(context, payload) {
      context.commit('getTellNumber', payload);
    }
  }
}

export default createStore({
  modules: {user, etc : store}
})
