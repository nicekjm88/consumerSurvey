import useHttp from "@/composables/api/common/http";
import useUrl from "@/composables/api/common/url";
import useUserManager from "@/store/user-manager";
import {_ATOMY_USER_TOKEN_NAME} from "@/composables/api/common/define";

export default function useSurvey() {
    const user = useUserManager();

    const url = useUrl();
    const http = useHttp();

    function getProducts() {
        return http.get(url.getUrl('/atomy/consumersurvey/kr/v1/products'),
            {
                [_ATOMY_USER_TOKEN_NAME]: user.identity.token
            });
    }

    function getQuestions(){
        return http.get(url.getUrl('/atomy/consumersurvey/kr/v1/questions'),
            {
                [_ATOMY_USER_TOKEN_NAME]: user.identity.token
            });
    }

    return {
        getProducts,
        getQuestions,
    }
}
