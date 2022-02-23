import {createRouter, createWebHistory} from "vue-router";

export const defaultRoutes = [
    {
        path: "/",
        redirect: 'login',
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('@/Page/Login'),
        meta: { unauthorized:true }
    },
    {
        path: "/intro",
        name: "intro",
        component: () => import('@/Page/Intro'),
    },
    {
        path: "/terms",
        name: "terms",
        component: () => import('@/Page/Terms'),
    },
    {
        path: "/terms2",
        name: "terms2",
        component: () => import('@/Page/Terms/Terms2'),
    },
    {
        path: "/qna",
        name: "Qna",
        component: () => import('@/Page/Account/QuestionPage'),
    },
    {
        path: "/qna2",
        name: "Qna2",
        component: () => import('@/Page/Account/QuestionPage2'),
    },
    {
        path: "/result",
        name: "Result",
        component: () => import('@/Page/Account/Result'),
    },
    {
        path: "/result2",
        name: "Result2",
        component: () => import('@/Page/Account/Result2'),
    },
    {
        path: "/AtomyProduct",
        name: "AtomyProduct",
        component: () => import('@/Page/AtomyProduct/AtomyProduct')
    },
    {
        path: "/SaveData",
        name: "SaveData",
        component: () => import('@/Page/SaveData'),
    },
    {
        path: "/SaveDataList",
        name: "SaveDataList",
        component: () => import('@/Page/SaveData/SaveDataList'),
    },
    {
        path: "/SaveDataView",
        name: "SaveDataView",
        component: () => import('@/Page/SaveData/SaveDataView'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: defaultRoutes
});

export default router;
