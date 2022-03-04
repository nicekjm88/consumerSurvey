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

    [ACTION.PRODUCTS.CLEAR_CHECKED] ({commit}, pidx){
        if(pidx === -1){
            commit(MUTATION.PRODUCTS.CLEAR_ALL_CHECKED);
        }else {
            commit(MUTATION.PRODUCTS.CLEAR_CHECKED, pidx);
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

    [MUTATION.PRODUCTS.CLEAR_ALL_CHECKED] (state) {
        state.data.forEach((d) => {
            d.ch.forEach((product) => {
                product.checked = false;
            });
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
