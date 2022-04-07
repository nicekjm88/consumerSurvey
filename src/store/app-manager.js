import store from '@/store';
import {ACTION} from "@/store/action-types";

export default function useAppManager(){
    function IsHttpBusy() {
        return store.getters["app/http"].is_busy
    }

    async function setIgnore(val){
        return store.dispatch(ACTION.APP.makeDispatch(ACTION.APP.SET_HTTP_IGNORE), val);
    }

    async function setHttpBusy(force = false){
        if(!store.state.app.http.ignore || force) {
            return store.dispatch(ACTION.APP.makeDispatch(ACTION.APP.SET_HTTP), true);
        }
    }

    async function resetHttpBusy(force = false){
        if(!store.state.app.http.ignore || force) {
            return store.dispatch(ACTION.APP.makeDispatch(ACTION.APP.SET_HTTP), false);
        }
    }

    async function setHttpBusyForce(val) {
        if (val) {
            return setIgnore(val).then(() => setHttpBusy(true))
        } else {
            return setIgnore(val).then(() => resetHttpBusy(true))
        }
    }

    return {
        IsHttpBusy,
        setHttpBusy,
        resetHttpBusy,
        setIgnore,
        setHttpBusyForce,
    }
}
