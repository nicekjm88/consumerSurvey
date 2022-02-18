import { createWebHistory, createRouter } from "vue-router";
import Intro from "@/components/Page/Intro/Intro.vue";
import Login from "@/components/Page/Login/Login.vue";
import Terms from "@/components/Page/Terms/Terms.vue";
import Terms2 from "@/components/Page/Terms/Terms2.vue";
import QuestionPage from "@/components/Page/Account/QuestionPage.vue";
import QuestionPage2 from "@/components/Page/Account/QuestionPage2.vue";
import Result from "@/components/Page/Account/Result.vue";
import Result2 from "@/components/Page/Account/Result2.vue";
import AtomyProduct from "@/components/Page/AtomyProduct/AtomyProduct.vue";
import SaveData from "@/components/Page/SaveData/SaveData.vue";
import SaveDataList from "@/components/Page/SaveData/SaveDataList.vue";
import SaveDataView from "@/components/Page/SaveData/SaveDataView.vue";

const sample = [1,2,3,4,5];

const routes = [
  {
    path: "/",
    redirect: 'login',
  },
  {
    path: "/intro",
    name: "intro",
    component: Intro,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/terms",
    name: "terms",
    component: Terms,
  },
  {
    path: "/terms2",
    name: "terms2",
    component: Terms2,
  },
  {
    path: "/qna",
    component: QuestionPage,
  },
  {
    path: "/qna2",
    component: QuestionPage2,
  },
  {
    path: "/result",
    component: Result,
  },
  {
    path: "/result2",
    component: Result2,
  },
  {
    path: "/AtomyProduct",
    component: AtomyProduct,
  },
  {
    path: "/SaveData",
    component: SaveData,
  },
  {
    path: "/SaveDataList",
    name: "SaveDataList",
    component: SaveDataList,
  },
  {
    path: "/SaveDataView",
    name: "SaveDataView",
    component: SaveDataView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
