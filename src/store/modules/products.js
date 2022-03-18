import {MUTATION} from "@/store/mutation-types";
import {ACTION} from "@/store/action-types";

const state = {
    data: []
}

const getters = {
    data : (state) => state.data
}

const actions = {
    [ACTION.PRODUCTS.SET] ({commit}, products){
        commit(MUTATION.PRODUCTS.SET, products);
    },

    [ACTION.PRODUCTS.TOGGLE] ({commit}, {pidx, idx}){
        commit(MUTATION.PRODUCTS.TOGGLE, {pidx, idx});
    },

    [ACTION.PRODUCTS.SELECT_OPERATION] ({commit}, {pidx, idx, checked}){
        if(pidx === -1){
            commit(MUTATION.PRODUCTS.SELECT_OPRATION_ALL, checked);
        }else if(idx === -1){
            commit(MUTATION.PRODUCTS.SELECT_OPERATION_GROUP, {pidx, checked});
        }else{
            commit(MUTATION.PRODUCTS.SELECT_OPERATION, {pidx, idx, checked});
        }
    }
}

const mutations = {
    [MUTATION.PRODUCTS.SET] (state, products){
        state.data = products;
    },

    [MUTATION.PRODUCTS.TOGGLE] (state, {pidx, idx}){
        const product = state.data[pidx].ch[idx];
        product.checked = !product.checked;
    },

    [MUTATION.PRODUCTS.CLEAR_CHECKED] (state, pidx) {
        const products = state.data[pidx].ch;
        products.forEach((product) => {
            product.checked = false;
        });
    },

    [MUTATION.PRODUCTS.SELECT_OPERATION_GROUP] (state, {pidx, checked}) {
        const products = state.data[pidx].ch;
        products.forEach((product) => {
            product.checked = checked;
        });
    },

    [MUTATION.PRODUCTS.SELECT_OPERATION] (state, {pidx, idx,checked}) {
        const product = state.data[pidx].ch[idx];
        product.checked = checked;
    },

    [MUTATION.PRODUCTS.SELECT_OPRATION_ALL] (state, checked) {
        state.data.forEach((d) => {
            d.ch.forEach((product) => {
                product.checked = checked;
            });
        });
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
