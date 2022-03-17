import store from '@/store';
import {ACTION} from "@/store/action-types";
import Cookies from 'js-cookie';

export default function useUserManager(){
    const _user = store.state.user;

    async function login(id, name, token, role){
        await store.dispatch(ACTION.USER.makeDispatch(ACTION.USER.LOGIN), {id, name, token, role}).then(() => {
            const encoded_user = btoa(encodeURIComponent(JSON.stringify(_user)));
            Cookies.set('_ust', encoded_user);
        })
    }

    async function loadUser(){
        const cookie_user = Cookies.get('_ust')
        if (cookie_user) {
            const user = JSON.parse(decodeURIComponent(atob(cookie_user)));
            return store.dispatch(ACTION.USER.makeDispatch(ACTION.USER.LOGIN), user);
        }
    }

    async function logout(){
        return store.dispatch(ACTION.USER.makeDispatch(ACTION.USER.LOGOUT));
    }

    async function checkLogin(){
        if(!_user.token){
            return loadUser().then(() => {
                return !!_user.token;
            })
        }

        return true;
    }

    function isGuest(){
        return _user.role !== 1;
    }

    return {
        login,
        logout,
        checkLogin,
        identity: _user,
        isGuest,
    }
}
