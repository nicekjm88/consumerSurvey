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
        return store.dispatch(ACTION.PRODUCTS.makeDispatch(ACTION.PRODUCTS.SELECT_OPERATION), {
            pidx,
            idx: -1,
            checked: false
        });
    }

    async function selectAll(pidx = -1) {
        return store.dispatch(ACTION.PRODUCTS.makeDispatch(ACTION.PRODUCTS.SELECT_OPERATION), {
            pidx,
            idx: -1,
            checked: true
        });
    }

    async function toggle(pidx, idx) {
        return store.dispatch(ACTION.PRODUCTS.makeDispatch(ACTION.PRODUCTS.TOGGLE), {pidx, idx});
    }

    function hasValue() {
        return store.state.products.data.length > 0;
    }

    function isDone(){
        const items = store.getters["products/data"];
        if(items.length > 0){
            return items.filter((x) => (x.ch && x.ch.length > 0) && x.ch.filter(u=>u.checked).length > 0).length > 0;
        }

        return false;
    }

    function getSelected() {
        const items = store.getters["products/data"];
        if (items.length > 0) {
            const item = items.reduce((a, c) => {
                if (c.ch && c.ch.length > 0) {
                    const selected = c.ch.filter((x) => x.checked);
                    if (selected.length > 0) {
                        selected.forEach((s) => {
                            a.Count++;
                            a.AmountPerYear += s.Cost * s.StdCount;
                            a.PVPerYear += s.PV * s.StdCount;
                            a.Products.push(s);
                        });
                    }
                }
                return a;
            }, {Count:0, AmountPerYear:0,PVPerYear:0, Products:[]});
            return item;
        }

        return genEmptySelected();
    }

    function genSelected(items){
        if (items.length > 0) {
            const item = items.reduce((a, c) => {
                a.Count++;
                a.AmountPerYear += c.Cost * c.StdCount;
                a.PVPerYear += c.PV * c.StdCount;
                a.Products.push(c);
                return a;
            }, {Count: 0, AmountPerYear: 0, PVPerYear: 0, Products: []})
            return item;
        }
        return genEmptySelected();
    }

    function genEmptySelected(){
        return {Count: 0, AmountPerYear: 0, PVPerYear: 0, Products: []};
    }

    function getSelectedGroupCount(){
        const items = store.getters["products/data"];
        if (items.length > 0) {
            const item = items.reduce((a, c) => {
                if (c.ch && c.ch.length > 0) {
                    const selected = c.ch.filter((x) => x.checked);
                    if (selected.length > 0) {
                        a.SelectedCount += selected.length;
                        a.Groups.push({Name: c.Name, Count: selected.length});

                        selected.forEach((s) => {
                            a.AmountPerYear += s.Cost * s.StdCount;
                            a.PVPerYear += s.PV * s.StdCount;
                        });
                    }

                    a.TotalCount += c.ch.length;
                }
                return a;
            }, {TotalCount:0, SelectedCount:0, AmountPerYear: 0, PVPerYear: 0, Groups: []});

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
        selectAll,
        getSelected,
        getSelectedGroupCount,
        hasValue,
        isDone,
        genSelected,
        genEmptySelected,
    }
}
