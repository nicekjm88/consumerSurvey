import useHttp from "@/composables/api/common/http";
import useUrl from "@/composables/api/common/url";
import useUserManager from "@/store/user-manager";

export default function useAuth() {
    const user = useUserManager();
    const http = useHttp();
    const url = useUrl();

    async function login(userId, password) {
        await user.logout()
        return http.post(url.getUrl('/atomy/account/br/v1/auth'), {
            UserId: userId,
            Password: password,
            IpAddress: '::1'
        }).then(async (res) => {
            if (res.status === 200 && res.data.Data) {
                const atomy_user = res.data.Data;
                await user.login(atomy_user.CustNo, atomy_user.CustName, atomy_user.UserToken).then(() => {
                    return res;
                })
            }
        });
    }

    return {
        login
    }
}
