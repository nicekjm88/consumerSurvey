import {MUTATION} from "@/store/mutation-types";
import {ACTION} from "@/store/action-types";

const state = {
    http: {
        is_busy: false,
        ignore: false,
    }
}

const getters = {
    http: (state) => state.http,
}

const actions = {
    [ACTION.APP.SET_HTTP] ({commit}, val){
        commit(MUTATION.APP.SET_HTTP, val);
    },

    [ACTION.APP.SET_HTTP_IGNORE] ({commit}, val){
        commit(MUTATION.APP.SET_HTTP_IGNORE, val);
    },
}

const mutations = {
    [MUTATION.APP.SET_HTTP] (state, val){
        state.http.is_busy = val;
    },

    [MUTATION.APP.SET_HTTP_IGNORE] (state, val){
        state.http.ignore = val;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
