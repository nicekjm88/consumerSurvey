import { MUTATION } from '../mutation-types'
import { ACTION } from '../action-types'

const state = {
    id: undefined,
    name: undefined,
    token: undefined,
    role: undefined,
    remember: false,
}

const getters = {
    id: (state) => state.id,
    name: (state) => state.name,
    token: (state) => state.token,
    role: (state) => state.role,
    remember: (state) => state.remember,
}

const actions = {
    [ACTION.USER.LOGIN]({commit}, user) {
        commit(MUTATION.USER.SET, user)
    },

    [ACTION.USER.LOGOUT]({commit}) {
        commit(MUTATION.USER.SET,
            {
                id: undefined,
                name: undefined,
                token: undefined,
                role: undefined,
                remember: false,
            })
    },
}

const mutations = {
    [MUTATION.USER.SET] (state, user){
        state.id = user.id;
        state.name = user.name;
        state.token = user.token;
        state.role = user.role;
        state.remember = user.remember;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
