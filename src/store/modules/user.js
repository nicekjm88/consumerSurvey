import { MUTATION } from '../mutation-types'
import { ACTION } from '../action-types'

const state = {
    id: undefined,
    name: undefined,
    token: undefined,
}

const getters = {
    id: (state) => state.id,
    name: (state) => state.name,
    token: (state) => state.token,
}

const actions = {
    [ACTION.USER.LOGIN] ({commit}, user){
        commit(MUTATION.USER.SET_USER, user)
    },

    [ACTION.USER.LOGOUT] ({commit}){
        commit(MUTATION.USER.SET_USER,
            {
                id: undefined,
                name: undefined,
                token: undefined,
            })
    },
}

const mutations = {
    [MUTATION.USER.SET_USER] (state, user){
        state.id = user.id;
        state.name = user.name;
        state.token = user.token;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
