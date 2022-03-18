import useHttp from "@/composables/api/common/http";
import useUrl from "@/composables/api/common/url";

export default function useAuth() {
    const http = useHttp();
    const url = useUrl();

    async function login(userId, password) {
        return http.post(url.getUrl('/atomy/account/kr/v1/auth'), {
            UserId: userId,
            Password: password,
            IpAddress: '::1'
        });
    }

    return {
        login
    }
}
