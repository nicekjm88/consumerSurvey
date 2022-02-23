import {Capacitor} from "@capacitor/core";

export default function useUrl(){
    const _ATOMY_PROXY = 'https://test-dev.atomy.com/apiglobal';
    const _ATOMY = '/atomy';

    return {
        getUrl: function (url) {
            if (Capacitor.getPlatform() !== 'web') {
                if(url.match(`(^${_ATOMY})`)){
                    const m = new RegExp(`(^${_ATOMY})`)
                    return url.replace(m, _ATOMY_PROXY);
                }
            }

            return url;
        },

        atomy : _ATOMY,
    }
}
