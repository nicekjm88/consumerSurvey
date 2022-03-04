import {Capacitor} from "@capacitor/core";
import {Http} from '@capacitor-community/http'
import axios from "axios";
import {_ATOMY_API_TOKEN_NAME,_ATOMY_USER_TOKEN_NAME,_ATOMY_API_TOKEN} from "@/composables/api/common/define";

export default function useHttp(){
    const defaultHeaders = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        [_ATOMY_API_TOKEN_NAME]: _ATOMY_API_TOKEN,
        [_ATOMY_USER_TOKEN_NAME]: ''
    }

    function combineHeader(header){
        return Object.assign({}, defaultHeaders, header);
    }

    return {
        get : async function(url, header){
            const headers = combineHeader(header);
            if(Capacitor.getPlatform() === 'web') {
                return axios({
                    method:'get',
                    url: url,
                    headers: headers
                });
            }else{
                return Http.get({
                    url: url,
                    headers: headers,
                });
            }
        },

        post : async function(url, data, header){
            const headers = combineHeader(header);
            if(Capacitor.getPlatform() === 'web') {
                return axios({
                    method:'post',
                    url: url,
                    data: data,
                    headers: headers
                });
            }else{
                return Http.post({
                    url: url,
                    headers: headers,
                    data: data,
                });
            }
        }
    }
}
