import {MUTATION} from "@/store/mutation-types";
import {ACTION} from "@/store/action-types";

const state = {
    surveyee: {
        Name: '',
        BirthDay: '',
        Gender: '0',
        Phone: '',
        IsChecked: false,
    }
}

const getters = {
    surveyee: (state) => {
        if(typeof state.surveyee.IsChecked !== 'boolean'){
            state.surveyee.IsChecked = false;
        }

        return state.surveyee
    },
}

const actions = {
    [ACTION.BUFFER.SET_SURVEYEE]({commit}, val){
        commit(MUTATION.BUFFER.SET_SURVEYEE, val);
    },

    [ACTION.BUFFER.CLEAR_SURVEYEE]({commit}){
        commit(MUTATION.BUFFER.SET_SURVEYEE, {
            Name: '',
            BirthDay: '',
            Gender: '1',
            Phone: '',
            IsChecked: false,
        });
    }
}

const mutations = {
    [MUTATION.BUFFER.SET_SURVEYEE] (state, val){
        state.surveyee = val;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
