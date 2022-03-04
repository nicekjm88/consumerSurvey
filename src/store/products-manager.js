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
                //변경된 api로
                if (!c.m_code) {
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

    function getSelected(){
        const items = store.getters["products/data"];
        if(items.length > 0) {
            const selected = items.reduce((a, c) => {
                if (c.ch && c.ch.length > 0) {
                    const selected = c.ch.filter((x) => x.checked);
                    if(selected.length > 0) {
                        selected.forEach((item) => {
                            a.push({
                                pname: c.name,
                                item: item
                            })
                        })
                    }
                }
                return a;
            }, []);

            return selected;
        }

        return [];
    }

    return {
        fetch,
        clear,
        get: () => store.getters["products/data"],
        toggle,
        clearChecked,
        hasValue,
        getSelected,
    }
}
