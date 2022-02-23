import {Capacitor} from "@capacitor/core";
import {Http} from '@capacitor-community/http'
import axios from "axios";

export default function useHttp(){
    const _ATOMY_API_TOKEN = 'LX8WRJSS0FET8GQQG4YWNYKQ8RDPEME7'

    const defaultHeaders = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Atomy-Api-Token': _ATOMY_API_TOKEN,
        'Atomy-User-Token': ''
    }

    function combineHeader(header){
        return Object.assign({}, defaultHeaders, header);
    }

    return {
        get : async function(url, header){
            const headers = combineHeader(header);

            if(Capacitor.getPlatform() === 'web') {

            }else{

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
