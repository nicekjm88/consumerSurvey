import {Capacitor} from "@capacitor/core";
import {_ATOMY_URL, _ATOMY_PROXY} from "@/composables/api/common/define";

export default function useUrl(){
    function addParameter(url, parameters) {
        if(typeof parameters === 'object'){
            const names = Object.getOwnPropertyNames(parameters);
            const p = names.reduce((a, c, i)=>{
                if(i > 0) a += '&';
                a += `${c}=${encodeURIComponent(parameters[c])}`
                return a;
            },'?');
            if(p){
                return url + p;
            }
        }
        return url;
    }

    return {
        getUrl: function (url, parameters) {
            if (Capacitor.getPlatform() !== 'web') {
                if (url.match(`(^${_ATOMY_URL})`)) {
                    const m = new RegExp(`(^${_ATOMY_URL})`)
                    url = url.replace(m, _ATOMY_PROXY);
                }
            }

            if(parameters){
                return addParameter(url, parameters);
            }

            return url;
        },

        atomy: _ATOMY_URL,
    }
}
