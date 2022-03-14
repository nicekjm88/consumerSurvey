import {useStore} from "vuex";
import {ACTION} from "@/store/action-types";
import useSurvey from "@/composables/api/survey";

export default function useProductsManager() {
    const servey = useSurvey();
    const store = useStore();

    async function fetch(force = false) {
        if (!force && store.state.products.data.length > 0) return;

        const res = await servey.getProducts();
        if (res.status === 200 && res.data.Data) {
            const tmp_products = res.data.Data;
            const products = tmp_products.reduce((a, c) => {
                c.checked = false;
                if (!c.MCode) {
                    c.ch = [];
                    a.push(c);
                } else {
                    if (a.length > 0) a[a.length - 1].ch.push(c);
                }
                return a;
            }, []);

            return store.dispatch(ACTION.PRODUCTS.makeDispatch(ACTION.PRODUCTS.SET), products);
        } else {
            return clear();
        }
    }

    async function clear() {
        return store.dispatch(ACTION.PRODUCTS.makeDispatch(ACTION.PRODUCTS.SET), []);
    }

    async function clearChecked(pidx = -1) {
        return store.dispatch(ACTION.PRODUCTS.makeDispatch(ACTION.PRODUCTS.CLEAR_CHECKED), pidx);
    }

    async function toggle(pidx, idx) {
        return store.dispatch(ACTION.PRODUCTS.makeDispatch(ACTION.PRODUCTS.TOGGLE), {pidx, idx});
    }

    function hasValue() {
        return store.state.products.data.length > 0;
    }

    function getSelected() {
        const items = store.getters["products/data"];
        if (items.length > 0) {
            const item = items.reduce((a, c) => {
                if (c.ch && c.ch.length > 0) {
                    const selected = c.ch.filter((x) => x.checked);
                    if (selected.length > 0) {
                        selected.forEach((item) => {
                            a.AmountPerYear += item.Cost * item.StdCount;
                            a.PVPerYear += item.PV * item.StdCount;
                            a.Products.push(item);
                        });
                    }
                }
                return a;
            }, {AmountPerYear:0,PVPerYear:0, Products:[]});
            return item;
        }

        return {};
    }

    function getSelectedGroupCount(){
        const items = store.getters["products/data"];
        if (items.length > 0) {
            const item = items.reduce((a, c) => {
                if (c.ch && c.ch.length > 0) {
                    const selected = c.ch.filter((x) => x.checked);
                    if (selected.length > 0) {
                        a.TotalCount += selected.length;
                        a.Groups.push({Name: c.Name, Count: selected.length});
                    }
                }
                return a;
            }, {TotalCount:0, Groups: []});

            return item;
        }

        return {};
    }

    return {
        fetch,
        clear,
        get: () => store.getters["products/data"],
        toggle,
        clearChecked,
        hasValue,
        getSelected,
        getSelectedGroupCount,
    }
}
