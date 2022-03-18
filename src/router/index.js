import { createRouter, createWebHistory } from "vue-router";

export const defaultRoutes = [
  {
    path: "/",
    redirect: "login",
  },
  {
    path: "/loading",
    name: "Loading",
    component: () => import("@/Page/Loading"),
    meta: { unauthorized: true },
  },
  {
    path: "/Error",
    name: "Error",
    component: () => import("@/Page/Error"),
    meta: { unauthorized: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/Page/Login"),
    meta: { unauthorized: true },
  },
  {
    path: "/intro",
    name: "intro",
    component: () => import("@/Page/Intro"),
  },
  {
    path: "/terms",
    name: "terms",
    component: () => import("@/Page/Terms"),
  },
  {
    path: "/terms2",
    name: "terms2",
    component: () => import("@/Page/Terms/Terms2"),
  },
  {
    path: "/qna",
    name: "Qna",
    component: () => import("@/Page/Account/QuestionPage"),
  },
  {
    path: "/qna2",
    name: "Qna2",
    component: () => import("@/Page/Account/QuestionPage2"),
  },
  {
    path: "/result",
    name: "Result",
    component: () => import("@/Page/Account/Result"),
  },
  {
    path: "/result2",
    name: "Result2",
    component: () => import("@/Page/Account/Result2"),
  },
  {
    path: "/result3",
    name: "Result3",
    component: () => import("@/Page/Account/Result3"),
  },
  {
    path: "/AtomyProduct",
    name: "AtomyProduct",
    component: () => import("@/Page/AtomyProduct/AtomyProduct"),
  },
  {
    path: "/SaveData",
    name: "SaveData",
    component: () => import("@/Page/SaveData"),
    props: true,
  },
  {
    path: "/SaveDataList",
    name: "SaveDataList",
    component: () => import("@/Page/SaveData/SaveDataList"),
    meta: { role: [1] },
  },
  {
    path: "/SaveDataView/:ResultNo",
    name: "SaveDataView",
    component: () => import("@/Page/SaveData/SaveDataView"),
    meta: { role: [1] },
    props: true,
  },
  {
    path: "/GuestView",
    name: "GuestView",
    component: () => import("@/Page/SaveData/SaveDataView"),
    props: true,
  },
  {
    path: "/ShareView",
    name: "ShareView",
    component: () => import('@/Page/SaveData/SaveDataView'),
    meta: { unauthorized:true },
    props: true
  },
  {
    // last place important
    // not found 404
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    hidden: true,
    permitAll: true,
    component: () => import("@/Page/Error"),
    meta: { unauthorized:true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: defaultRoutes,
});

export default router;
