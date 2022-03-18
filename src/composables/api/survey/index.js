import useHttp from "@/composables/api/common/http";
import useUrl from "@/composables/api/common/url";
import useUserManager from "@/store/user-manager";
import {_ATOMY_USER_TOKEN_NAME, _JISA_CODE} from "@/composables/api/common/define";

export default function useSurvey() {
    const userManager = useUserManager();

    const url = useUrl();
    const http = useHttp();

    async function getProducts() {
        return http.get(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/products`),
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            });
    }

    async function getQuestions(){
        return http.get(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/questions`),
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            });
    }

    async function getSettings(){
        return http.get(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/settings`),
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            });
    }

    async function save(data){
        return http.post(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/save`),
            data,
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            },
        );
    }

    async function edit(data){
        return http.post(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/result/edit`),
            data,
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            },
        );
    }

    async function getResults(PageSize, PageNo, Name = "") {
        return http.get(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/results`, {PageSize, PageNo, Name}),
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            });
    }

    async function getResult(ResultNo){
        return http.get(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/result`, {ResultNo}),
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            });
    }

    async function deletes(ResultNos){
        return http.post(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/result/deletes`),
            ResultNos,
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            });
    }

    async function getResultKey(resultNo){
        return http.get(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/result/key`, {resultNo}),
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            });
    }

    async function getResultByKey(key){
        return http.get(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/share/result`, {key}));
    }

    async function getResultProductsByKey(key){
        return http.get(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/share/result/products`, {key}));
    }

    async function saveForGuest(data){
        return http.post(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/guest/save`),
            data,
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            },
        );
    }

    async function getResultForGuest(key){
        return http.get(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/guest/result`, {key}), {
            [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
        });
    }

    async function GetResultProductsForGuest(key){
        return http.get(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/guest/result/products`, {key}), {
            [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
        });
    }

    async function editForGuest(data, key){
        return http.post(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/guest/result/edit`, {key}),
            data,
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            },
        );
    }

    async function deleteForGuest(key){
        return http.post(url.getUrl(`/atomy/consumersurvey/${_JISA_CODE}/v1/guest/result/delete`),
            {
                key:key
            },
            {
                [_ATOMY_USER_TOKEN_NAME]: userManager.identity.token
            });
    }

    return {
        getProducts,
        getQuestions,
        getSettings,
        save,
        getResults,
        getResult,
        deletes,
        edit,
        getResultKey,
        getResultByKey,
        getResultProductsByKey,

        saveForGuest,
        getResultForGuest,
        GetResultProductsForGuest,
        editForGuest,
        deleteForGuest,
    }
}
