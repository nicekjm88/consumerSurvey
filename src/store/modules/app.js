import {MUTATION} from "@/store/mutation-types";
import {ACTION} from "@/store/action-types";

const state = {
    http: {
        is_busy: false,
    }
}

const getters = {
    http: (state) => state.http,
}

const actions = {
    [ACTION.APP.SET_HTTP] ({commit}, isBusy){
        commit(MUTATION.APP.SET_HTTP, isBusy);
    },
}

const mutations = {
    [MUTATION.APP.SET_HTTP] (state, isBusy){
        state.http.is_busy = isBusy;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
