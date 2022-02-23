import router from './router'
import useUserManager from "@/store/user-manager";

router.onError(async () => {
    // none
})

router.beforeEach(async (to, from, next) => {
    //권한 처리
    const user = useUserManager();
    const { unauthorized } = to.meta;
    let next_path = undefined;

    if(to.path === '/login'){
        //로그인 페이지로 들어왔을때 로그인 가능하면 인트로 페이지로 이동
        if(await user.checkLogin()) next_path = '/intro';
    }else if(!unauthorized){
        //권한 확인 후 권한 없으면 로그인 페이지로 이동
        if(!await user.checkLogin()){
            next_path = '/'
        }
    }

    if(next_path === undefined) {
        next()
    } else {
        next(next_path)
    }
})

router.afterEach(() => {
    // none
})