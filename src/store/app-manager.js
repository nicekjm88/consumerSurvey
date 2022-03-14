import {useStore} from "vuex";
import {ACTION} from "@/store/action-types";

export default function useAppManager(){
    const store = useStore();

    function IsHttpBusy() {
        return store.getters["app/http"].is_busy;
    }

    async function setHttpBusy(){
        return store.dispatch(ACTION.APP.makeDispatch(ACTION.APP.SET_HTTP), true);
    }

    async function resetHttpBusy(){
        return store.dispatch(ACTION.APP.makeDispatch(ACTION.APP.SET_HTTP), false);
    }

    return {
        IsHttpBusy,
        setHttpBusy,
        resetHttpBusy,
    }
}
