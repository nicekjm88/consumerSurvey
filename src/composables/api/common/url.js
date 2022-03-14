import {Capacitor} from "@capacitor/core";

export default function useUrl(){
    const _ATOMY_PROXY = 'https://test-dev.atomy.com/apiglobal';
    const _ATOMY = '/atomy';

    function addParameter(url, parameters) {
        if(typeof parameters === 'object'){

            const names = Object.getOwnPropertyNames(parameters);
            const p = names.reduce((a, c, i)=>{
                if(i > 0) a += '&';
                a += `${c}=${parameters[c]}`
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
                if (url.match(`(^${_ATOMY})`)) {
                    const m = new RegExp(`(^${_ATOMY})`)
                    url = url.replace(m, _ATOMY_PROXY);
                }
            }

            if(parameters){
                return addParameter(url, parameters);
            }

            return url;
        },

        atomy: _ATOMY,
    }
}
