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

    [ACTION.PRODUCTS.FETCH_CHECKALL] ({commit}, pidx){
        commit(MUTATION.PRODUCTS.FETCH_CHECKALL, pidx);
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

    [MUTATION.PRODUCTS.FETCH_CHECKALL] (state, pidx){
        state.data[pidx].isCheckAll = state.data[pidx].ch.filter(x => !x.checked).length === 0;
    },

    [MUTATION.PRODUCTS.SELECT_OPERATION_GROUP] (state, {pidx, checked}) {
        const products = state.data[pidx].ch;
        products.forEach((product) => {
            product.checked = checked;
        });

        state.data[pidx].isCheckAll = checked;
    },

    [MUTATION.PRODUCTS.SELECT_OPERATION] (state, {pidx, idx,checked}) {
        const product = state.data[pidx].ch[idx];
        product.checked = checked;

        if(checked){
            debugger;
            state.data[pidx].isCheckAll = state.data[pidx].ch.filter(x => !x.checked).length === 0
        }else{
            state.data[pidx].isCheckAll = false;
        }
    },

    [MUTATION.PRODUCTS.SELECT_OPRATION_ALL] (state, checked) {
        state.data.forEach((d) => {
            d.isCheckAll = checked;
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
