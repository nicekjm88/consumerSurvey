import {Capacitor} from "@capacitor/core";
import {Http} from '@capacitor-community/http'
import axios from "axios";
import {_ATOMY_API_TOKEN_NAME,_ATOMY_USER_TOKEN_NAME,_ATOMY_API_TOKEN} from "@/composables/api/common/define";
import useAppManager from "@/store/app-manager";

export default function useHttp() {
    const appManager = useAppManager();

    const defaultHeaders = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        [_ATOMY_API_TOKEN_NAME]: _ATOMY_API_TOKEN,
        [_ATOMY_USER_TOKEN_NAME]: ''
    }

    function combineHeader(header) {
        return Object.assign({}, defaultHeaders, header);
    }

    return {
        get: async function (url, header) {
            await appManager.setHttpBusy();

            const headers = combineHeader(header);
            if (Capacitor.getPlatform() === 'web') {
                return axios({
                    method: 'get',
                    url: url,
                    headers: headers
                }).finally(() => appManager.resetHttpBusy());
            } else {
                return Http.get({
                    url: url,
                    headers: headers,
                }).finally(() => appManager.resetHttpBusy());
            }
        },

        post: async function (url, data, header) {
            await appManager.setHttpBusy();

            const headers = combineHeader(header);
            if (Capacitor.getPlatform() === 'web') {
                return axios({
                    method: 'post',
                    url: url,
                    data: data,
                    headers: headers
                }).finally(() => appManager.resetHttpBusy());
            } else {
                const std_data = JSON.parse(JSON.stringify(data));
                return Http.post({
                    url: url,
                    headers: headers,
                    data: std_data,
                }).finally(() => appManager.resetHttpBusy());
            }
        }
    }
}
