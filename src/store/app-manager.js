import store from '@/store';
import {ACTION} from "@/store/action-types";

export default function useAppManager(){
    function IsHttpBusy() {
        return store.getters["app/http"].is_busy
    }

    async function setIgnore(val){
        return store.dispatch(ACTION.APP.makeDispatch(ACTION.APP.SET_HTTP_IGNORE), val);
    }

    async function setHttpBusy(){
        if(!store.state.app.http.ignore) {
            return store.dispatch(ACTION.APP.makeDispatch(ACTION.APP.SET_HTTP), true);
        }
    }

    async function resetHttpBusy(){
        if(!store.state.app.http.ignore) {
            return store.dispatch(ACTION.APP.makeDispatch(ACTION.APP.SET_HTTP), false);
        }
    }

    return {
        IsHttpBusy,
        setHttpBusy,
        resetHttpBusy,
        setIgnore,
    }
}
