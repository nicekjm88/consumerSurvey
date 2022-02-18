import router from './router'

router.onError(async () => {
    // none
})

router.beforeEach(async (to, from, next) => {
    //권한 처리
    next()
})

router.afterEach(() => {
    // none
})
