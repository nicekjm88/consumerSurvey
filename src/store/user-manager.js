import store from '@/store';
import {ACTION} from "@/store/action-types";
import Cookies from 'js-cookie';
import {Capacitor} from "@capacitor/core";
import { Storage } from '@capacitor/storage';
import useAuth from "@/composables/api/auth";


export default function useUserManager(){
    const _user = store.state.user;

    async function login(id, pwd, remember) {
        const auth = useAuth();
        const res = await auth.login(id, pwd);
        if(remember === undefined) remember = false;
        if (res.status === 200 && res.data.Data) {
            const atomy_user = res.data.Data;
            return setUser(atomy_user.CustNo, atomy_user.CustName, atomy_user.UserToken, atomy_user.Role, remember);
        }
    }

    async function setUser(id, name, token, role, remember){
        return store.dispatch(ACTION.USER.makeDispatch(ACTION.USER.LOGIN), {id, name, token, role, remember}).then(async () => {
            const encoded_user = btoa(encodeURIComponent(JSON.stringify(_user)));
            if(Capacitor.getPlatform() === 'web'){
                if(remember) {
                    Cookies.set('_ust', encoded_user, {expires: 15});
                }else {
                    Cookies.set('_ust', encoded_user);
                }
            } else {
                await Storage.set({key: '_ust', value: encoded_user});
            }
        });
    }

    async function loadUser() {
        if (Capacitor.getPlatform() === 'web') {
            const tmp_user = Cookies.get('_ust');
            if (tmp_user) {
                const user = JSON.parse(decodeURIComponent(atob(tmp_user)));
                if (user.remember) Cookies.set('_ust', tmp_user, {expires: 15});
                return store.dispatch(ACTION.USER.makeDispatch(ACTION.USER.LOGIN), user);
            }
        } else {
            const tmp_user = await Storage.get({key: '_ust'});
            if (tmp_user.value) {
                const user = JSON.parse(decodeURIComponent(atob(tmp_user.value)));
                if (user.remember) {
                    return store.dispatch(ACTION.USER.makeDispatch(ACTION.USER.LOGIN), user);
                }
            }
        }
    }

    async function logout(){
        if(Capacitor.getPlatform() === 'web') Cookies.remove('_ust');
        await Storage.remove({key:'_ust'});
        return store.dispatch(ACTION.USER.makeDispatch(ACTION.USER.LOGOUT));
    }

    async function checkLogin(){
        if(!_user.token){
            return loadUser().then(() => {
                return !!_user.token;
            });
        }

        return true;
    }

    function getUserType() {
        if (_user.role === 1) {
            return 1;
        } else if (_user.role === 2) {
            return 2;
        } else {
            return 3;
        }
    }

    return {
        login,
        logout,
        checkLogin,
        identity: _user,
        getUserType,
    }
}
