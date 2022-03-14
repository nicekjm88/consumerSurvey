import useHttp from "@/composables/api/common/http";
import useUrl from "@/composables/api/common/url";
import useUserManager from "@/store/user-manager";
import {_ATOMY_USER_TOKEN_NAME} from "@/composables/api/common/define";

export default function useSurvey() {
    const user = useUserManager();

    const url = useUrl();
    const http = useHttp();

    async function getProducts() {
        return http.get(url.getUrl('/atomy/consumersurvey/kr/v1/products'),
            {
                [_ATOMY_USER_TOKEN_NAME]: user.identity.token
            });
    }

    async function getQuestions(){
        return http.get(url.getUrl('/atomy/consumersurvey/kr/v1/questions'),
            {
                [_ATOMY_USER_TOKEN_NAME]: user.identity.token
            });
    }

    async function getSettings(){
        return http.get(url.getUrl('/atomy/consumersurvey/kr/v1/settings'),
            {
                [_ATOMY_USER_TOKEN_NAME]: user.identity.token
            });
    }

    async function save(data){
        return http.post(url.getUrl('/atomy/consumersurvey/kr/v1/save'),
            data,
            {
                [_ATOMY_USER_TOKEN_NAME]: user.identity.token
            },
        );
    }

    async function edit(data){
        return http.post(url.getUrl('/atomy/consumersurvey/kr/v1/result/edit'),
            data,
            {
                [_ATOMY_USER_TOKEN_NAME]: user.identity.token
            },
        );
    }

    async function getResults(PageSize, PageNo, Name = "") {
        return http.get(url.getUrl('/atomy/consumersurvey/kr/v1/results', {PageSize, PageNo, Name}),
            {
                [_ATOMY_USER_TOKEN_NAME]: user.identity.token
            });
    }

    async function getResult(ResultNo){
        return http.get(url.getUrl('/atomy/consumersurvey/kr/v1/result', {ResultNo}),
            {
                [_ATOMY_USER_TOKEN_NAME]: user.identity.token
            });
    }

    async function deletes(ResultNos){
        return http.post(url.getUrl('/atomy/consumersurvey/kr/v1/result/deletes'),
            ResultNos,
            {
                [_ATOMY_USER_TOKEN_NAME]: user.identity.token
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
    }
}
