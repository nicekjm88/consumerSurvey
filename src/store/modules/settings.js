import {MUTATION} from "@/store/mutation-types";
import {ACTION} from "@/store/action-types";

const state = {
    data: {
        StdPV: 0,
        StdN: 0,
        StdScore: 0
    }
}

const getters = {
    data : (state) => state.data,
}

const actions = {
    [ACTION.SETTINGS.SET] ({commit}, settings){
        commit(MUTATION.SETTINGS.SET, settings);
    },
}

const mutations = {
    [MUTATION.SETTINGS.SET](state, settings) {
        state.data.StdPV = settings.StdPV;
        state.data.StdN = settings.StdN;
        state.data.StdScore = settings.StdScore;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
