import {MUTATION} from "@/store/mutation-types";
import {ACTION} from "@/store/action-types";

const state = {
    data: []
}

const getters = {
    data : (state) => state.data
}

const actions = {
    [ACTION.QUESTIONS.SET] ({commit}, questions){
        commit(MUTATION.QUESTIONS.SET, questions);
    },

    [ACTION.QUESTIONS.SELECT] ({commit}, {pidx, idx}){
        commit(MUTATION.QUESTIONS.SELECT, {pidx, idx});
    },
}

const mutations = {
    [MUTATION.QUESTIONS.SET] (state, questions){
        state.data = questions;
    },

    [MUTATION.QUESTIONS.SELECT] (state, {pidx, idx}){
       const questions = state.data[pidx].ch[0].ch;
       questions.forEach((question, i) => {
           if(idx > -1 && idx === i){
               question.checked = true;
           }else {
               question.checked = false;
           }
       })
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
